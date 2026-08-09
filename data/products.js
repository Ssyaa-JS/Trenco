// data/products.js

// Konstanta ukuran celana default (agar kode rapi dan tidak berulang panjang di ID 5-18)
const defaultCelanaSizeList = [
  { size: "27", pj: "100 cm", lp: "74 cm" },
  { size: "28", pj: "100 cm", lp: "75 cm" },
  { size: "29", pj: "100 cm", lp: "76 cm" },
  { size: "30", pj: "100 cm", lp: "78 cm" },
  { size: "31", pj: "100 cm", lp: "80 cm" },
  { size: "32", pj: "100 cm", lp: "82 cm" },
  { size: "33", pj: "100 cm", lp: "86 cm" },
  { size: "34", pj: "101 cm", lp: "88 cm" },
  { size: "35", pj: "101 cm", lp: "91 cm" },
  { size: "36", pj: "101 cm", lp: "93 cm" },
  { size: "37", pj: "102 cm", lp: "95 cm" },
  { size: "38", pj: "102 cm", lp: "98 cm" },
];

export const PRODUCTS = [
  // ================= BARIS 1 =================
  {
    id: 1,
    name: "Tren'co Kemeja Pria Slim Fit Kerah Shanghai",
    price: "Rp 180.000,00",
    image: "/image/kemeja-shanghai.png",
    category: "Kemeja",
    shopeeLink: "https://s.shopee.co.id/1qZSOqlNEC",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92pJ8M6PYpc-OhO5l/",
    description: `Brand: TREN'CO (Original Lokal / Toko Resmi Label MALL)
Produk: Kemeja Polos Kemko Pria (Lengan Panjang, Kerah Shanghai)
Bahan: Katun Twill Diamond Premium (Tebal, adem, nyaman, dan jahitan rapi)
Gaya: Simple, polos, modern, dan elegan (Slimfit/Clean look)

Penggunaan:
Cocok untuk kerja, ibadah, hangout, acara formal/santai, hingga harian.`,
    sizeGuide: "M | L | XL | XXL"
  },
  {
    id: 2,
    name: "Tren'co Celana Trousers Pria Slim Fit",
    price: "Rp 250.000,00",
    image: "/image/celana-formal.png",
    category: "Celana",
    shopeeLink: "https://shopee.co.id/2qRzZIE67q",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92pAshagrT9-32iHK/",
    description: `Brand & Produsen: TREN'CO Original (PT Trenco Garmindo Niaga)

Bahan & Fitur Utama:
• Bahan Gabardine Premium (Adem, tidak mudah kusut & tidak berbulu)
• Resleting YKK & jahitan kantong full paping tebal

Pilihan Warna: Hitam, Navy, Cokelat, Abu Tua, Abu Muda.
Jadwal Pengiriman: Order < 20.00 WIB dikirim di hari yang sama.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 3,
    name: "Tren'co Celana Formal Pria Slim Fit Grey",
    price: "Rp 189.000,00",
    image: "/image/celana-formal-grey.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/4ftdkm6hGq",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Brand & Produsen: TREN'CO Original (PT Trenco Garmindo Niaga)

Bahan & Fitur Utama:
• Bahan Gabardine Premium (Adem, tidak mudah kusut & tidak berbulu)
• Resleting YKK & jahitan kantong full paping tebal
• Tampilan serbaguna untuk gaya Formal maupun Kasual

Jadwal Pengiriman: Order < 20.00 WIB dikirim di hari yang sama.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 4,
    name: "Tren'co Kemeja Lengan Panjang Hitam",
    price: "Rp 299.000,00",
    image: "/image/kemeja-slim-fit.png",
    category: "Kemeja",
    shopeeLink: "https://s.shopee.co.id/3LOGAProq9",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92pAshagrT9-32iHK/",
    description: `Ringkasan Produk Tren'Co
Jadwal Pengiriman: Senin - Minggu pukul 17.00 WIB.

Fitur & Kualitas:
• Model slimfit dengan jahitan rantai yang kuat.
• Bahan katun twill impor berkualitas bagus dan warna tidak luntur.`,
    sizeGuide: "M: LD 104cm, P 70cm | L: LD 108cm, P 73cm | XL: LD 112cm, P 74cm"
  },
  {
    id: 5,
    name: "Tren'co Kemeja Lengan Panjang Putih",
    price: "Rp 245.000,00",
    image: "/image/kemeja-putih.png",
    category: "Kemeja",
    shopeeLink: "https://s.shopee.co.id/3LOGAProq9",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92cWKSVjQGn-wbHXg/",
    description: `Produk Kemeja Premium dari TREN'CO Original. Bahan katun berkualitas, adem, dan menyerap keringat dengan baik. Cocok untuk kegiatan formal maupun kasual.`,
    sizeGuide: "M | L | XL | XXL"
  },
  {
    id: 6,
    name: "Tren'co Celana Joger Panjang Unisex Abu-Abu",
    price: "Rp 210.000,00",
    image: "/image/joger-trent.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/8V6MJzTF8I",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana Joger TREN'CO Original. Material nyaman dan lentur, sangat cocok untuk aktivitas harian, olahraga santai, atau hangout. Desain unisex bisa dipakai pria dan wanita.`,
    sizeList: defaultCelanaSizeList
  },

  // ================= BARIS 2 =================
  {
    id: 7,
    name: "Tren'co Trousers Pria Modern Fit Hitam",
    price: "Rp 275.000,00",
    image: "/image/trousers.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/40dwxnhb8w",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana Trousers Modern Fit TREN'CO. Potongan pas di kaki, memberikan kesan rapi namun tetap nyaman bergerak. Menggunakan resleting YKK dan bahan premium anti-kusut.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 8,
    name: "Tren'co Joger Panjang unisex Cream",
    price: "Rp 199.000,00",
    image: "/image/joger-cream.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/9KfTJh8ltf",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana Joger TREN'CO Original. Material nyaman dan lentur, sangat cocok untuk aktivitas harian, olahraga santai, atau hangout. Desain unisex bisa dipakai pria dan wanita.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 9,
    name: "Tren'co Celana Bahan Formal Hingtwist Pria",
    price: "Rp 260.000,00",
    image: "/image/hingtwist.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/7VDp8OeBp4",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana bahan formal dengan material Hingtwist yang jatuh dan elegan. Pilihan tepat untuk outfit ke kantor, meeting, atau acara resmi lainnya.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 10,
    name: "Tren'co Celana Chinos Pria Panjang Hitam",
    price: "Rp 250.000,00",
    image: "/image/chinos-hitam.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/2g8ZNYiWSf",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana Chinos TREN'CO menggunakan material Cotton Twill Combed berserat rapat, melar (stretch), dan super nyaman dipakai seharian tanpa rasa sesak.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 11,
    name: "Tren'co Celana Bahan Pria Slim Fit Cream",
    price: "Rp 250.000,00",
    image: "/image/celana-bahan-cream.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/9pbjumjFEM",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana kain formal slim fit warna Cream dari TREN'CO. Mudah dipadukan dengan kemeja warna gelap maupun terang. Jahitan super rapi dan kuat standar mall.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 12,
    name: "Tren'co Kemeja Anak Lengan Panjang ",
    price: "Rp 250.000,00",
    image: "/image/kemeja-kids.png",
    category: "Kemeja",
    shopeeLink: "https://s.shopee.co.id/4LGnMjhBem",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92c7YvQGS55-aqNxI/",
    description: `Kemeja anak lengan panjang TREN'CO. Didesain khusus menggunakan bahan katun yang aman, lembut, dan tidak bikin gatal untuk kulit anak.`,
    sizeGuide: "S (1-2 Th) | M (3-4 Th) | L (5-6 Th) | XL (7-8 Th)"
  },

  // ================= BARIS 3 =================
  {
    id: 13,
    name: "Tren'co Celana Formal Slim Fit Navy",
    price: "Rp 189.000,00",
    image: "/image/celana-bahan-navy.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/6VLHwnOjpn",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana formal slim fit TREN'CO. Tampil profesional dan clean look dengan potongan celana yang presisi. Bahan tidak mudah luntur dan awet.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 14,
    name: "Tren'co Celana Chinos Panjang Hitam",
    price: "Rp 299.000,00",
    image: "/image/celana-chinos.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/4VaDZB2kzF",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana Chinos Premium TREN'CO dengan jahitan bartack di titik-titik krusial agar tidak mudah sobek. Warna pekat dan tidak mudah pudar walau sering dicuci.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 15,
    name: "Tren'co Celana Trousers Panjang Pria Hitam",
    price: "Rp 245.000,00",
    image: "/image/trousers-hitam.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/1qZSOMbM8A",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana Trousers basic yang wajib ada di lemarimu. Nyaman dipakai kerja seharian, adem, dan memberikan siluet kaki yang lebih jenjang.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 16,
    name: "Tren'co Kemeja Hitam Lengan Pendek",
    price: "Rp 210.000,00",
    image: "/image/kemeja-hitam.png",
    category: "Kemeja",
    shopeeLink: "https://s.shopee.co.id/LkebeYZFA",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Kemeja lengan pendek kasual dari TREN'CO. Sangat cocok untuk acara santai, hangout, atau semi-formal. Bahan katun premium yang sejuk di kulit.`,
    sizeGuide: "M | L | XL | XXL"
  },
  {
    id: 17,
    name: "Tren'co Cargo Pants Pria Panjang Abu-Abu",
    price: "Rp 275.000,00",
    image: "/image/cargo-abu.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/1LdBngFX57",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Cargo Pants TREN'CO dilengkapi dengan saku samping yang fungsional. Material kuat, cocok untuk aktivitas outdoor namun tetap stylish untuk dipakai nongkrong.`,
    sizeList: defaultCelanaSizeList
  },
  {
    id: 18,
    name: "Tren'co Celana Chinos Jumbo",
    price: "Rp 199.000,00",
    image: "/image/chinos-jumbo.png",
    category: "Celana",
    shopeeLink: "https://s.shopee.co.id/50WUAaXYbF",
    tiktokLink: "https://tiktok.com/@username-toko-lo",
    description: `Celana Chinos TREN'CO edisi ukuran Jumbo (Big Size). Tetap tampil modis dan gaya tanpa mengorbankan kenyamanan dengan bahan yang stretch/melar.`,
    sizeList: [
      { size: "39", pj: "103 cm", lp: "100 cm" },
      { size: "40", pj: "103 cm", lp: "104 cm" },
      { size: "42", pj: "103 cm", lp: "108 cm" },
      { size: "44", pj: "103 cm", lp: "112 cm" }
    ]
  }
];