'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MASTER_PRODUCTS = [
  {
    id: 1,
    name: "Tren'co Kemeja Pria Slim Fit Kerah Shanghai",
    price: "Rp 250.000,00",
    image: "/image/kemeja-shanghai.png", 
    category: "Kemeja",
    shopeeLink: "https://s.shopee.co.id/1qZSOqlNEC", 
    tiktokLink: "https://vt.tokopedia.com/t/ZS92pJ8M6PYpc-OhO5l/",
    description: `Brand: TREN'CO (Original Lokal / Toko Resmi Label MALL)
Produk: Kemeja Polos Kemko Pria (Lengan Panjang, Kerah Shanghai)
Bahan: Katun Twill Diamond Premium (Tebal, adem, nyaman, dan jahitan rapi)
Gaya: Simple, polos, modern, dan elegan (Slimfit/Clean look)

Penggunaan:
Cocok untuk kerja, ibadah, hangout, acara formal/santai, hingga harian (mudah dipadukan dengan jeans, chinos, atau celana formal).

Peringatan:
Pastikan membeli produk original hanya di toko resmi TREN'CO MALL untuk menghindari produk tiruan.`,
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
• Tampilan serbaguna untuk gaya Formal maupun Kasual

Pilihan Warna:
Hitam, Navy, Cokelat, Abu Tua, Abu Muda.

Jadwal Pengiriman:
Order < 20.00 WIB dikirim di hari yang sama.

💡 Tips Ukuran:
Disarankan naik 1–2 size dari ukuran celana reguler biasa agar tidak kekecilan, atau sesuaikan dengan tabel lingkar pinggang di bawah.`,
    sizeList: [
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
    ]
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

Pilihan Warna:
Hitam, Navy, Cokelat, Abu Tua, Abu Muda.

Jadwal Pengiriman:
Order < 20.00 WIB dikirim di hari yang sama.

💡 Tips Ukuran:
Naikkan 1–2 size dari ukuran celana reguler biasa agar tidak kekecilan, atau sesuaikan dengan tabel lingkar pinggang di bawah.`,
    sizeList: [
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
    ]
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
• Bahan katun twill impor berkualitas bagus dan warna tidak luntur.

Catatan Penting Pembeli:
• Stok terbatas, wajib konfirmasi ketersediaan stok sebelum bertransaksi.
• Pastikan mencantumkan nomor HP aktif dan alamat lengkap saat memesan.`,
    sizeGuide: "M: LD 104cm, P 70cm | L: LD 108cm, P 73cm | XL: LD 112cm, P 74cm"
  }
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('L');
  
  const product = MASTER_PRODUCTS.find((p) => p.id === parseInt(id)) || MASTER_PRODUCTS[0];

  const availableSizes = product.category === "Kemeja" 
    ? ['M', 'L', 'XL', 'XXL'] 
    : ['28', '30', '32', '34', '36', '38'];

  return (
    <main className="w-full min-h-screen bg-white flex flex-col pt-[80px] md:pt-[96px]">
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-12 py-10 md:py-16">
        
        {/* BREADCRUMB */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-neutral-400 mb-8 font-bold">
          <Link href="/store" className="hover:text-neutral-900 transition-colors">Store</Link>
          <span>/</span>
          <span className="text-neutral-400">{product.category}</span>
          <span>/</span>
          <span className="text-neutral-900 font-black">{product.name}</span>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          
          {/* FOTO PRODUK */}
          <div className="w-full aspect-[3/4] bg-[#F7F7F7] relative overflow-hidden rounded-xs border border-neutral-100">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* DETAIL PRODUK */}
          <div className="w-full flex flex-col pt-2">
            
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B5A2B] font-black mb-1">
              Tren'co Premium Apparel
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-neutral-950 uppercase tracking-tight mb-3 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center space-x-3 mb-8">
              <span className="text-xl font-black text-[#8B5A2B]">
                {product.price}
              </span>
            </div>

            {/* SELEKSI UKURAN */}
            <div className="mb-8 border-t border-neutral-100 pt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black text-neutral-950 uppercase tracking-wider">Select Size</span>
                <span className="text-[11px] text-neutral-400 underline font-medium cursor-pointer hover:text-neutral-900">Size Guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-xs font-black rounded-xs border transition-all duration-200 uppercase tracking-wider ${
                      selectedSize === size
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* TOMBOL PEMBELIAN */}
            <div className="space-y-3 mb-10 border-b border-neutral-100 pb-8">
              <a 
                href={product.shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#EE4D2D] hover:bg-[#D73C1E] text-white text-xs font-black uppercase tracking-[0.15em] py-4 rounded-xs flex items-center justify-center transition-colors duration-300"
              >
                Beli via Shopee
              </a>
              <a 
                href={product.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black hover:bg-neutral-900 text-white text-xs font-black uppercase tracking-[0.15em] py-4 rounded-xs flex items-center justify-center transition-colors duration-300 border border-neutral-800"
              >
                Beli via TikTok Shop
              </a>
            </div>

            {/* DESKRIPSI & SPESIFIKASI */}
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wider mb-2">Description</h3>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-medium whitespace-pre-line">
                  {product.description}
                </p>
              </div>

              {/* SIZE SPECIFICATION */}
              <div className="border-t border-neutral-100 pt-6">
                <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wider mb-3">
                  Size Specification
                </h3>
                
                <div className="bg-[#FAFAFA] p-4 rounded-xs border border-neutral-100 max-w-md">
                  {product.lengthInfo && (
                    <p className="text-xs font-bold text-neutral-900 mb-3 border-b border-neutral-200 pb-2">
                      {product.lengthInfo}
                    </p>
                  )}
                  
                  {product.sizeList ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-neutral-700">
                      {product.sizeList.map((item) => (
                        <div key={item.size} className="flex items-center justify-between border-b border-neutral-100 pb-1 pr-2">
                          <span className="font-bold text-neutral-900">
                            Size {item.size} :
                          </span>
                          <span className="text-neutral-600 text-right">
                            {item.pj ? `P ${item.pj} | LP ${item.lp}` : `LP ${item.lp}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs font-mono text-neutral-600">
                      {product.sizeGuide}
                    </p>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}