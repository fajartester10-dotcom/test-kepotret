import wedding from "@/assets/event-wedding.jpg";
import community from "@/assets/event-community.jpg";
import sport from "@/assets/event-sport.jpg";
import trip from "@/assets/event-trip.jpg";
import corporate from "@/assets/event-corporate.jpg";
import birthday from "@/assets/event-birthday.jpg";

export const images = { wedding, community, sport, trip, corporate, birthday };

export const brand = "Kapotret";

export const nav = [
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

export const hostSteps = [
  {
    no: "01",
    title: "Buat album",
    body: "Daftar gratis, beri nama acaramu, dan album siap dalam hitungan detik.",
    detail:
      "Masuk, beri nama acara, lalu pilih kapasitas peserta. Album langsung aktif dan siap menerima foto dari semua tamu.",
  },
  {
    no: "02",
    title: "Bagikan QR",
    body: "Tampilkan QR di lokasi acara atau kirim link-nya ke peserta.",
    detail:
      "Cetak QR di meja tamu, layar, atau undangan. Bisa juga dibagikan sebagai link lewat WhatsApp dan media sosial.",
  },
  {
    no: "03",
    title: "Momen terkumpul",
    body: "Setiap foto dari peserta langsung masuk ke satu album yang sama.",
    detail:
      "Semua foto tersusun rapi di satu album. Kamu bisa melihat, memilih, dan mengunduhnya kapan saja.",
  },
];

export const benefits = [
  {
    title: "Nggak perlu minta foto satu-satu",
    body: "Semua foto dari peserta otomatis terkumpul, tanpa perlu menagih lewat chat setelah acara selesai.",
  },
  {
    title: "Mudah untuk ikut",
    body: "Peserta cukup scan QR dari HP masing-masing, tanpa install aplikasi dan tanpa ribet.",
  },
  {
    title: "Kendali tetap di kamu",
    body: "Kamu yang menentukan siapa yang bisa melihat album dan foto mana yang ditampilkan.",
  },
  {
    title: "Lebih fleksibel untuk acara ramai",
    body: "Dari acara kecil sampai ratusan peserta, kapasitas album bisa disesuaikan dengan kebutuhanmu.",
  },
];

export const organizerFeatures = [
  {
    title: "Unduh banyak foto sekaligus",
    body: "Simpan seluruh isi album dalam sekali klik, tanpa perlu mengunduh satu per satu.",
  },
  {
    title: "Sembunyikan foto yang kurang tepat",
    body: "Pilih foto yang ingin ditampilkan dan sembunyikan yang tidak perlu dilihat semua orang.",
  },
  {
    title: "Atur akses album",
    body: "Tentukan apakah album bisa dilihat semua peserta atau hanya kamu sebagai penyelenggara.",
  },
  {
    title: "Bagikan lewat WhatsApp dengan mudah",
    body: "Kirim link album ke grup WhatsApp peserta agar semua orang ikut menikmati hasilnya.",
  },
];

export const eventTypes = [
  {
    title: "Wedding & Celebration",
    body: "Kumpulkan momen dari setiap tamu, dari akad hingga resepsi, tanpa ada yang terlewat.",
    image: images.wedding,
  },
  {
    title: "Birthday & Personal Event",
    body: "Momen kecil yang hangat, terekam dari sudut pandang orang-orang terdekat.",
    image: images.birthday,
  },
  {
    title: "Community & Gathering",
    body: "Semua anggota bisa ikut mengabadikan keseruan acara komunitas bersama.",
    image: images.community,
  },
  {
    title: "Sport & Competition",
    body: "Tangkap aksi peserta dan penonton dari berbagai titik di sepanjang lintasan.",
    image: images.sport,
  },
  {
    title: "Corporate & Organization",
    body: "Dokumentasi acara kantor yang lengkap tanpa harus bergantung pada satu fotografer.",
    image: images.corporate,
  },
  {
    title: "Trip & Travel",
    body: "Satukan foto perjalanan dari semua teman dalam satu album yang rapi.",
    image: images.trip,
  },
];

export const participantSteps = [
  { no: "01", title: "Scan QR", body: "Scan QR dari kamera bawaan HP." },
  { no: "02", title: "Isi nama", body: "Masukkan nama supaya fotomu mudah dikenali." },
  { no: "03", title: "Izinkan kamera", body: "Beri akses kamera agar bisa langsung memotret." },
  { no: "04", title: "Siap & Motret", body: "Ambil foto, dan hasilnya langsung masuk ke album." },
];

/**
 * Pricing tiers by participant capacity.
 * NOTE: only the "Gratis" tier was legible in the original screenshot;
 * the paid amounts below are placeholders until the real prices are confirmed.
 */
export const pricingTiers = [
  { capacity: 10, price: 0 },
  { capacity: 50, price: 49000 },
  { capacity: 100, price: 89000 },
  { capacity: 200, price: 149000 },
  { capacity: 300, price: 199000 },
  { capacity: 500, price: 299000 },
  { capacity: 1000, price: 499000 },
];

export const privacyCards = [
  {
    title: "Kamu atur siapa yang bisa melihat",
    body: "Album bisa dibuat privat atau dibagikan hanya kepada peserta acara.",
  },
  {
    title: "Kendalikan foto yang tampil",
    body: "Sembunyikan atau hapus foto kapan saja sebelum dibagikan ke peserta lain.",
  },
  {
    title: "Masa aktif yang jelas",
    body: "Album memiliki masa aktif yang transparan, sehingga kamu tahu kapan harus menyimpannya.",
  },
];

export const faqs = [
  {
    q: "Apakah peserta harus install aplikasi?",
    a: "Tidak. Peserta cukup scan QR menggunakan kamera HP dan langsung bisa memotret dari browser.",
  },
  {
    q: "Apakah peserta harus membuat akun?",
    a: "Tidak perlu. Peserta hanya mengisi nama agar foto mereka mudah dikenali di album.",
  },
  {
    q: "Berapa banyak peserta yang bisa ikut?",
    a: "Tergantung kapasitas yang kamu pilih. Mulai gratis untuk 10 peserta, dan bisa ditingkatkan sesuai kebutuhan acara.",
  },
  {
    q: "Apakah peserta bisa mengupload foto dari galeri HP?",
    a: "Peserta memotret langsung dari kamera agar momen yang terkumpul benar-benar dari acara yang sedang berlangsung.",
  },
  {
    q: "Siapa saja yang bisa melihat album?",
    a: "Kamu yang menentukan. Album bisa dibuka untuk semua peserta atau hanya untuk penyelenggara.",
  },
  {
    q: "Berapa lama album tersimpan?",
    a: "Album tersimpan sesuai masa aktif paket. Kamu bisa mengunduh semua foto kapan saja selama album aktif.",
  },
  {
    q: "Kalau koneksi internet lambat, apakah foto tetap terkirim?",
    a: "Ya. Foto akan dikirim otomatis begitu koneksi kembali stabil, jadi peserta tetap bisa terus memotret.",
  },
  {
    q: "Apakah album bisa diunduh semua?",
    a: "Bisa. Penyelenggara dapat mengunduh seluruh foto di album sekaligus.",
  },
];

export const footerColumns = [
  {
    title: "Produk",
    links: [
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "Harga", href: "#harga" },
      { label: "FAQ", href: "#faq" },
      { label: "Buat Album Gratis", href: "#harga" },
      { label: "Masuk", href: "#" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Pusat Bantuan", href: "#faq" },
      { label: "Kontak", href: "#" },
      { label: "Keamanan", href: "#keamanan" },
      { label: "Panduan Peserta", href: "#peserta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  },
  {
    title: "Ikuti Kami",
    links: [
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
  },
];

export function formatRupiah(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

/** Starter questions shown in the empty AI assistant window. */
export const chatSuggestions = [
  "Bagaimana cara membuat album untuk acaraku?",
  "Apakah tamu harus install aplikasi?",
  "Berapa harga untuk 100 peserta?",
];
