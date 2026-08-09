// app/store/page.js

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products'; // Menggunakan file data terpusat

export default function StorePage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => (p.category || '').toLowerCase() === activeFilter.toLowerCase());

  return (
    <main className="w-full min-h-screen bg-white flex flex-col pt-[80px] md:pt-[96px] relative">
      
      {/* 1. HEADER HALAMAN STORE */}
      <section className="w-full bg-[#FAFAFA] border-b border-neutral-100 pt-12 md:pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B5A2B] font-black mb-2">
            Tren'co Catalog
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 uppercase">
            The Official Store
          </h1>
          <div className="w-12 h-[2px] bg-neutral-900 mt-4 mb-8"></div>

          {/* SYSTEM FILTER KATALOG */}
          <div className="flex items-center justify-center gap-2 md:gap-4 bg-[#F5F5F0] p-1.5 rounded-sm">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition rounded-sm cursor-pointer ${
                activeFilter === 'all' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Items
            </button>
            <button 
              onClick={() => setActiveFilter('kemeja')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition rounded-sm cursor-pointer ${
                activeFilter === 'kemeja' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Kemeja
            </button>
            <button 
              onClick={() => setActiveFilter('celana')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition rounded-sm cursor-pointer ${
                activeFilter === 'celana' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Celana
            </button>
          </div>
        </div>
      </section>

      {/* 2. GRID DAFTAR PRODUK */}
      <section className="w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-10">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id}
                href={`/store/${product.id}`}
                className="group flex flex-col relative cursor-pointer"
              >
                {/* Frame Foto Produk 3:4 */}
                <div className="w-full aspect-[3/4] bg-[#F7F7F7] flex items-center justify-center relative overflow-hidden mb-3 rounded-sm border border-neutral-50 shadow-xs">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-neutral-950/90 text-white text-[9px] font-bold tracking-widest uppercase py-2.5 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    Lihat Detail
                  </div>
                </div>

                {/* Detail Informasi Teks */}
                <div className="flex flex-col items-center text-center px-1">
                  <h3 className="text-[10px] md:text-[11px] font-bold text-neutral-800 tracking-tight line-clamp-2 mb-1.5 min-h-[30px] md:min-h-[36px] group-hover:text-[#8B5A2B] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-center text-[10px] md:text-[11px]">
                    <span className="text-[#8B5A2B] font-black tracking-tight">
                      {product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="w-full text-center py-20">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Produk belum tersedia.</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. FOOTER BRAND SECTION */}
      <footer className="w-full bg-[#FAFAFA] border-t border-neutral-100 text-neutral-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 pb-12 border-b border-neutral-200/60">
          
          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-neutral-900">TREN'CO OFFICIAL</h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Tren'co memang bukan hanya soal gaya, tapi juga soal kualitas dan kenyamanan. Di Tren'co, kami menghadirkan koleksi pakaian yang dirancang untuk memenuhi kebutuhan gaya hidup modern dengan sentuhan minimalis yang timeless.
            </p>
          </div>

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

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-center gap-2 text-[10px] text-neutral-400 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} TREN'CO OFFICIAL. All Rights Reserved.</p>
          <p className="uppercase tracking-widest text-[9px] text-neutral-300">Designed by Qasaac</p>
        </div>
      </footer>

    </main>
  );
}