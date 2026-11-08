import { convertToModelMessages, type UIMessage } from "ai";
import { z } from "zod";

import { createResponsesCall } from "./responses.server";
import {
  brand,
  faqs,
  formatRupiah,
  hostSteps,
  participantSteps,
  pricingTiers,
  privacyCards,
} from "@/components/landing/content";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";

const bodySchema = z.object({
  messages: z
    .array(
      z
        .object({
          id: z.string().max(200),
          role: z.enum(["user", "assistant", "system"]),
          parts: z.array(z.object({ type: z.string() }).passthrough()).max(200),
        })
        .passthrough(),
    )
    .min(1)
    .max(60),
});

function buildInstructions() {
  const pricing = pricingTiers
    .map((t) => `- ${t.capacity} peserta: ${t.price === 0 ? "Gratis" : formatRupiah(t.price)}`)
    .join("\n");
  return `Kamu adalah asisten ramah untuk ${brand}, layanan album foto bersama untuk acara: penyelenggara membagikan satu QR, lalu tamu memotret langsung dari HP dan semua foto masuk ke satu album. Tanpa install aplikasi, tanpa akun untuk peserta.

Jawab dalam bahasa yang dipakai pengunjung (default Bahasa Indonesia santai dan sopan). Jawab singkat, jelas, maksimal 3-4 kalimat atau poin pendek. Hanya bahas ${brand} dan cara memakainya untuk acara. Jika tidak tahu atau info tidak ada di bawah, katakan terus terang dan sarankan menghubungi tim lewat WhatsApp. Jangan mengarang fitur atau harga.

Cara kerja untuk penyelenggara:
${hostSteps.map((s) => `${s.no}. ${s.title}: ${s.detail}`).join("\n")}

Langkah peserta:
${participantSteps.map((s) => `${s.no}. ${s.title}: ${s.body}`).join("\n")}

Harga berdasarkan kapasitas peserta:
${pricing}

Privasi:
${privacyCards.map((c) => `- ${c.title}: ${c.body}`).join("\n")}

FAQ:
${faqs.map((f) => `T: ${f.q}\nJ: ${f.a}`).join("\n")}`;
}

function friendlyError(error: unknown) {
  const status =
    typeof error === "object" && error !== null && "statusCode" in error
      ? Number((error as { statusCode?: number }).statusCode)
      : undefined;
  if (status === 429) return "Asisten sedang sibuk. Coba lagi sebentar lagi, ya.";
  if (status === 402 || status === 403)
    return "Asisten sedang tidak tersedia saat ini. Silakan hubungi tim kami lewat WhatsApp.";
  return "Maaf, terjadi gangguan. Coba kirim ulang pesanmu.";
}

export async function handleChat(request: Request) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    return Response.json({ error: "Asisten belum dikonfigurasi." }, { status: 500 });
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return Response.json({ error: "Permintaan tidak valid." }, { status: 400 });
  }

  // Keep only user/assistant turns; never accept client-supplied system prompts.
  const messages = (parsed.messages as unknown as UIMessage[]).filter((m) => m.role !== "system");
  const totalChars = JSON.stringify(messages).length;
  if (totalChars > 60_000) {
    return Response.json({ error: "Percakapan terlalu panjang. Mulai ulang obrolan, ya." }, { status: 400 });
  }

  const modelMessages = await convertToModelMessages(messages);
  return createResponsesCall(request, { baseURL: GATEWAY_URL, apiKey, model: MODEL }, modelMessages, {
    instructions: buildInstructions(),
    onError: friendlyError,
  }).response();
}
