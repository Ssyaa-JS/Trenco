// data/products.js

export const PRODUCTS = [
  {
    id: 1,
    name: "Benhur Boxy Fit Air-Flex",
    price: "Rp 180.000,00",
    image: "/image/kemeja-shanghai.png", 
    category: "kemeja",
    shopeeLink: "https://s.shopee.co.id/1qZSOqlNEC", 
    tiktokLink: "https://vt.tokopedia.com/t/ZS92pJ8M6PYpc-OhO5l/",
    description: `Brand: TREN'CO (Original Lokal / Toko Resmi Label MALL)
Produk: Kemeja Polos Kemko Pria (Lengan Panjang, Kerah Shanghai)
Bahan: Katun Twill Diamond Premium (Tebal, adem, nyaman, dan jahitan rapi)
Gaya: Simple, polos, modern, dan elegan (Slimfit/Clean look)`,
    sizeGuide: "M | L | XL | XXL"
  },
  {
    id: 2,
    name: "Tren'co Celana TrousersPria Slim Fit",
    price: "Rp 250.000,00",
    image: "/image/celana-formal.png",
    category: "celana",
    shopeeLink: "https://shopee.co.id/2qRzZIE67q",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92pAshagrT9-32iHK/",
    description: `Brand & Produsen: TREN'CO Original (PT Trenco Garmindo Niaga)
Bahan Gabardine Premium (Adem, tidak mudah kusut & tidak berbulu)
Resleting YKK & jahitan kantong full paping tebal`,
    sizeList: [
      { size: "27", pj: "100 cm", lp: "74 cm" }, { size: "28", pj: "100 cm", lp: "75 cm" },
      { size: "29", pj: "100 cm", lp: "76 cm" }, { size: "30", pj: "100 cm", lp: "78 cm" },
      { size: "31", pj: "100 cm", lp: "80 cm" }, { size: "32", pj: "100 cm", lp: "82 cm" },
      { size: "33", pj: "100 cm", lp: "86 cm" }, { size: "34", pj: "101 cm", lp: "88 cm" },
      { size: "35", pj: "101 cm", lp: "91 cm" }, { size: "36", pj: "101 cm", lp: "93 cm" },
      { size: "37", pj: "102 cm", lp: "95 cm" }, { size: "38", pj: "102 cm", lp: "98 cm" }
    ]
  },
  {
    id: 3,
    name: "Tren'co Celana Formal Pria Slim Fit Grey",
    price: "Rp 189.000,00",
    image: "/image/celana-formal-grey.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/4ftdkm6hGq",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Bahan Gabardine Premium. Warna Grey Formal Modern.`,
    sizeList: [
      { size: "27", pj: "100 cm", lp: "74 cm" }, { size: "28", pj: "100 cm", lp: "75 cm" },
      { size: "29", pj: "100 cm", lp: "76 cm" }, { size: "30", pj: "100 cm", lp: "78 cm" },
      { size: "31", pj: "100 cm", lp: "80 cm" }, { size: "32", pj: "100 cm", lp: "82 cm" },
      { size: "33", pj: "100 cm", lp: "86 cm" }, { size: "34", pj: "101 cm", lp: "88 cm" }
    ]
  },
  {
    id: 4,
    name: "Tren'co Kemeja Lengan Panjang Hitam",
    price: "Rp 299.000,00",
    image: "/image/kemeja-slim-fit.png",
    category: "kemeja",
    shopeeLink: "https://s.shopee.co.id/3LOGAProq9",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92pAshagrT9-32iHK/",
    description: `Model slimfit dengan jahitan rantai yang kuat. Bahan katun twill impor.`,
    sizeGuide: "M: LD 104cm | L: LD 108cm | XL: LD 112cm"
  },
  {
    id: 5,
    name: "Tren'co Kemeja Lengan Panjang Putih",
    price: "Rp 245.000,00",
    image: "/image/kemeja-putih.png",
    category: "kemeja",
    shopeeLink: "https://s.shopee.co.id/3LOGAProq9",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92cWKSVjQGn-wbHXg/",
    description: `Kemeja lengan panjang putih bersih elegan.`,
    sizeGuide: "M | L | XL | XXL"
  },
  {
    id: 6,
    name: "Tren'co Celana Joger Panjang Unisex Abu-Abu",
    price: "Rp 210.000,00",
    image: "/image/joger-trent.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/8V6MJzTF8I",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Joger pants stylish & santai untuk pria/wanita.`,
    sizeGuide: "All Size Fit to XL"
  },
  {
    id: 7,
    name: "Tren'co Trousers Pria Modern Fit Hitam",
    price: "Rp 275.000,00",
    image: "/image/trousers.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/40dwxnhb8w",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Celana Trousers modern fit cocok untuk kerja maupun hangout.`
  },
  {
    id: 8,
    name: "Tren'co Joger Panjang unisex Cream",
    price: "Rp 199.000,00",
    image: "/image/joger-cream.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/9KfTJh8ltf",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Joger pants warna Cream earthy. Sangat nyaman untuk harian.`
  },
  {
    id: 9,
    name: "Tren'co Celana Bahan Formal Hingtwist Pria",
    price: "Rp 260.000,00",
    image: "/image/hingtwist.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/7VDp8OeBp4",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Bahan High Twist premium jatuh, tebal, dan sangat berkelas.`
  },
  {
    id: 10,
    name: "Tren'co Celana Chinos Pria Panjang Hitam",
    price: "Rp 250.000,00",
    image: "/image/chinos-hitam.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/2g8ZNYiWSf",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Celana Chino hitam fleksibel dengan bahan melar (stretch).`
  },
  {
    id: 11,
    name: "Tren'co Celana Bahan Pria Slim Fit Cream",
    price: "Rp 250.000,00",
    image: "/image/celana-bahan-cream.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/9pbjumjFEM",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Celana bahan warna cream minimalis.`
  },
  {
    id: 12,
    name: "Tren'co Kemeja Anak Lengan Panjang ",
    price: "Rp 250.000,00",
    image: "/image/kemeja-kids.png",
    category: "kemeja",
    shopeeLink: "https://s.shopee.co.id/4LGnMjhBem",
    tiktokLink: "https://vt.tokopedia.com/t/ZS92c7YvQGS55-aqNxI/",
    description: `Kemeja anak lengan panjang bahan katun lembut.`
  },
  {
    id: 13,
    name: "Tren'co Celana Formal Slim Fit Navy",
    price: "Rp 189.000,00",
    image: "/image/celana-bahan-navy.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/6VLHwnOjpn",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Celana formal warna Navy/Biru Dongker.`
  },
  {
    id: 14,
    name: "Tren'co Celana Chinos Panjang Hitam",
    price: "Rp 299.000,00",
    image: "/image/celana-chinos.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/4VaDZB2kzF",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Chinos edisi tebal cotton twill melar.`
  },
  {
    id: 15,
    name: "Tren'co Celana Trousers Panjang Pria Hitam",
    price: "Rp 245.000,00",
    image: "/image/trousers-hitam.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/1qZSOMbM8A",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Trousers basic hitam polos.`
  },
  {
    id: 16,
    name: "Tren'co Kemeja Hitam Lengan Pendek",
    price: "Rp 210.000,00",
    image: "/image/kemeja-hitam.png",
    category: "kemeja",
    shopeeLink: "https://s.shopee.co.id/LkebeYZFA",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Kemeja lengan pendek casual.`
  },
  {
    id: 17,
    name: "Tren'co Cargo Pants Pria Panjang Abu-Abu",
    price: "Rp 275.000,00",
    image: "/image/cargo-abu.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/1LdBngFX57",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Celana kargo banyak kantong outdoor.`
  },
  {
    id: 18,
    name: "Tren'co Celana Chinos Jumbo",
    price: "Rp 199.000,00",
    image: "/image/chinos-jumbo.png",
    category: "celana",
    shopeeLink: "https://s.shopee.co.id/50WUAaXYbF",
    tiktokLink: "https://www.tiktok.com/@trenco.official",
    description: `Celana chino khusus ukuran besar/jumbo (Big Size).`
  }
];