import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { RotateCcw, X } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import assistantMark from "@/assets/chat-assistant.png";
import { chatSuggestions } from "./content";

function textOf(message: UIMessage) {
  return message.parts
    .filter((p): p is Extract<UIMessage["parts"][number], { type: "text" }> => p.type === "text")
    .map((p) => p.text)
    .join("");
}

function readableError(error: Error | undefined) {
  if (!error) return null;
  try {
    const parsed = JSON.parse(error.message) as { error?: string };
    if (parsed.error) return parsed.error;
  } catch {
    // not JSON — fall through
  }
  if (/failed to fetch|network/i.test(error.message)) return "Koneksi terputus. Periksa internetmu lalu coba lagi.";
  return error.message || "Maaf, terjadi gangguan. Coba kirim ulang pesanmu.";
}

export default function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [transport] = useState(() => new DefaultChatTransport({ api: "/api/chat" }));
  const { messages, sendMessage, status, stop, setMessages, error, clearError } = useChat({ transport });
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open && !busy) inputRef.current?.focus();
  }, [open, busy]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    clearError();
    void sendMessage({ text: value });
  };

  const handleSubmit = (message: PromptInputMessage) => send(message.text);

  const last = messages[messages.length - 1];
  const waiting = status === "submitted" || (status === "streaming" && last?.role === "assistant" && !textOf(last));
  const errorText = readableError(error);

  return (
    <>
      <header className="flex items-center gap-3 border-b border-border px-5 py-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-ink">
          <img src={assistantMark} alt="" width={160} height={160} className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">Asisten Kapotret</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-deep" /> Siap bantu soal album acaramu
          </p>
        </div>
        {messages.length > 0 && (
          <button
            type="button"
            onClick={() => {
              void stop();
              setMessages([]);
              clearError();
            }}
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sky-soft hover:text-foreground"
            aria-label="Mulai obrolan baru"
            title="Mulai obrolan baru"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-sky-soft hover:text-foreground"
          aria-label="Tutup asisten"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      <Conversation className="min-h-0">
        <ConversationContent className="gap-6 px-5 py-6">
          {messages.length === 0 ? (
            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="text-lg font-semibold leading-snug text-foreground">Halo! 👋</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tanya apa saja tentang Kapotret — cara kerja, harga, atau privasi album acaramu.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {chatSuggestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-2xl border border-border px-4 py-3 text-left text-sm text-foreground transition-all duration-200 hover:border-sky-strong hover:bg-sky-soft"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) => {
              const text = textOf(m);
              if (!text) return null;
              return (
                <Message key={m.id} from={m.role}>
                  <MessageContent className="leading-relaxed group-[.is-user]:rounded-2xl group-[.is-user]:rounded-br-md group-[.is-user]:bg-lime group-[.is-user]:text-ink">
                    {m.role === "assistant" ? (
                      <MessageResponse isAnimating={status === "streaming" && m.id === last?.id}>{text}</MessageResponse>
                    ) : (
                      <p className="whitespace-pre-wrap">{text}</p>
                    )}
                  </MessageContent>
                </Message>
              );
            })
          )}
          {waiting && (
            <Message from="assistant">
              <MessageContent>
                <Shimmer>Sedang mengetik…</Shimmer>
              </MessageContent>
            </Message>
          )}
          {errorText && (
            <p role="alert" className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
              {errorText}
            </p>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="border-t border-border p-4">
        <PromptInput onSubmit={handleSubmit} className="rounded-2xl">
          <PromptInputTextarea
            ref={inputRef}
            placeholder="Tulis pertanyaanmu…"
            className="min-h-12 text-sm"
            maxLength={1000}
          />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit
              status={status}
              onStop={() => void stop()}
              className="rounded-full bg-lime text-ink hover:bg-lime/90"
            />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </>
  );
}
