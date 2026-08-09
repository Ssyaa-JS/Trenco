'use client';
import { useState } from 'react';
import Link from 'next/link';

const BANNERS = [
  {
    id: 1,
    title: "SMART FORMAL WHITE ESSENTIALS",
    subtitle: "KEMEJA PUTIH POLOS SLIMFIT PREMIUM",
    image: "/image/kemeja-putih.png",
    bgColor: "bg-[#F9F9F9]"
  },
  {
    id: 2,
    title: "MODERN SHANGHAI COLLECTION",
    subtitle: "KEMEJA POLOS PREMIUM KERAH SHANGHAI",
    image: "/image/kemeja-shanghai.png",
    bgColor: "bg-[#F9F9F9]"
  }
];

const BEST_SELLERS = [
  {
    id: 1,
    name: "Tren'co Kemeja Pria Slim Fit Kerah Shanghai",
    price: "Rp 250.000,00",
    image: "/image/kemeja-shanghai.png",
  },
  {
    id: 2,
    name: "Tren'co Celana Formal Pria Slim Fit",
    price: "Rp 250.000,00",
    image: "/image/celana-formal.png",
  },
  {
    id: 3,
    name: "Tren'co Celana Formal Pria Slim Fit Grey",
    price: "Rp 189.000,00",
    image: "/image/celana-formal-grey.png",
  },
  {
    id: 4,
    name: "Tren'co Kemeja Lengan Panjang Slim Fit Hitam",
    price: "Rp 299.000,00",
    image: "/image/kemeja-slim-fit.png",
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? BANNERS.length - 1 : prev - 1));
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col pt-[80px] md:pt-[96px] relative">
      
      {/* 1. HERO BANNER SLIDER */}
      <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] overflow-hidden shrink-0 bg-neutral-100">
        <div 
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {BANNERS.map((banner) => (
            <div 
              key={banner.id} 
              className={`w-full h-full shrink-0 flex flex-col md:flex-row items-center justify-between ${banner.bgColor} relative px-6 md:px-20 gap-6`}
            >
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 order-2 md:order-1 pb-8 md:pb-0">
                <p className="text-xs md:text-sm uppercase tracking-widest text-[#8B5A2B] font-bold mb-2 md:mb-4 bg-white px-3 py-1 rounded-sm shadow-sm inline-block">
                  {banner.subtitle}
                </p>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 md:mb-8 text-neutral-900 uppercase leading-none">
                  {banner.title}
                </h1>
                <Link 
                  href="/store" 
                  className="inline-block bg-neutral-900 text-white px-8 md:px-10 py-3 text-xs md:text-sm font-black uppercase tracking-widest hover:bg-[#8B5A2B] transition-all duration-300 shadow-md"
                >
                  Explore Store
                </Link>
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-12 z-10 order-1 md:order-2">
                <img src={banner.image} alt={banner.title} className="w-full h-full object-contain max-h-[35vh] md:max-h-[65vh]" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#8B5A2B] text-neutral-800 hover:text-white w-10 h-10 flex items-center justify-center text-sm font-bold transition rounded-full shadow-md cursor-pointer">❮</button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#8B5A2B] text-neutral-800 hover:text-white w-10 h-10 flex items-center justify-center text-sm font-bold transition rounded-full shadow-md cursor-pointer">❯</button>
      </section>

      {/* 2. BEST SELLERS SECTION */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center justify-center text-center mb-16 relative">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B5A2B] font-bold mb-2">Our Top Tier Products</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 uppercase">
              Best Sellers
            </h2>
            <div className="w-12 h-[2px] bg-neutral-900 mt-4 mb-3"></div>
          </div>

          {/* Grid Layout Produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {BEST_SELLERS.map((product) => (
              /* PEMBARUAN: Menggunakan Link ke /store/[id] */
              <Link 
                key={product.id} 
                href={`/store/${product.id}`}
                className="group flex flex-col relative cursor-pointer"
              >
                
                {/* Kontainer Foto Model Vertikal (3:4 Ratio) */}
                <div className="w-full aspect-[3/4] bg-[#F7F7F7] flex items-center justify-center relative overflow-hidden mb-5 rounded-sm border border-neutral-50 shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Overlay Tombol CTA */}
                  <div className="absolute bottom-0 left-0 right-0 bg-neutral-950/90 text-white text-[10px] font-bold tracking-widest uppercase py-3.5 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    Beli Sekarang
                  </div>
                </div>

                {/* Info Detail Produk Rata Tengah */}
                <div className="flex flex-col items-center text-center px-2">
                  <h3 className="text-xs md:text-sm font-bold text-neutral-800 tracking-tight line-clamp-2 mb-2 min-h-[32px] md:min-h-[40px] group-hover:text-[#8B5A2B] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-center text-xs md:text-sm">
                    <span className="text-[#8B5A2B] font-black tracking-tight">
                      {product.price}
                    </span>
                  </div>
                </div>

              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FOOTER BRAND SECTION */}
      <footer className="w-full bg-[#FAFAFA] border-t border-neutral-100 text-neutral-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 pb-12 border-b border-neutral-200/60">
          
          {/* Kolom 1: Tentang Brand */}
          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-neutral-900">TREN'CO OFFICIAL</h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Tren'co memang bukan hanya soal gaya, tapi juga soal kualitas dan kenyamanan. Di Tren'co, kami menghadirkan koleksi pakaian yang dirancang untuk memenuhi kebutuhan gaya hidup modern dengan sentuhan minimalis yang timeless.
            </p>
          </div>

          {/* Kolom 2: Kontak & Alamat */}
          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-neutral-900">CONTACT & WORKSHOP</h3>
            <p className="text-xs text-neutral-600 font-bold uppercase tracking-tight mb-1">Customer Service:</p>
            <p className="text-xs text-neutral-500 mb-3">WhatsApp: +62 812-3456-7890</p>
            
            <p className="text-xs text-neutral-600 font-bold uppercase tracking-tight mb-1">Email:</p>
            <p className="text-xs text-neutral-500 mb-3">support@trencoofficial.com</p>
            
            <p className="text-xs text-neutral-600 font-bold uppercase tracking-tight mb-1">Alamat:</p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Jl. Fashion Terang No. 45, Blok C, Jakarta Selatan, Indonesia
            </p>
          </div>

          {/* Kolom 3: Official Marketplace */}
          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-neutral-900">OUR MARKETPLACES</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://shopee.co.id/trencoofficialstore" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#EE4D2D] font-medium transition-colors">
                  Shopee Official Store ↗
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@trenco.official?_r=1&_t=ZS-96yhP6xJNRA" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-950 font-medium transition-colors">
                  TikTok Official Store ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Sosial Media & Informasi Tambahan */}
          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-neutral-900">CONNECT WITH US</h3>
            <ul className="space-y-2 text-xs mb-4">
              <li>
                <a href="https://instagram.com/trenco.id" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#8B5A2B] font-medium transition-colors">
                  Instagram (@trenco.official)
                </a>
              </li>
            </ul>
            <div className="bg-white p-3 border border-neutral-200/60 rounded-sm">
              <p className="text-[10px] text-neutral-600 font-bold uppercase mb-1">🛡️ Garansi Tren'co</p>
              <p className="text-[10px] text-neutral-400 leading-normal">
                Salah size / produk cacat? Tenang, kami garansi tukar baru 100% via marketplace resmi.
              </p>
            </div>
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-center gap-2 text-[10px] text-neutral-400 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} TREN'CO OFFICIAL. All Rights Reserved.</p>
          <p className="uppercase tracking-widest text-[9px] text-neutral-300">Designed by Qasaac</p>
        </div>
      </footer>

    </main>
  );
}