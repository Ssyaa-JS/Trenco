// app/store/[id]/page.js

'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products'; // Path sesuaikan jika tidak pakai alias @

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('L');
  
  // Mencari produk sesuai ID dari URL
  const product = PRODUCTS.find((p) => p.id === parseInt(id)) || PRODUCTS[0];

  const availableSizes = (product.category || '').toLowerCase() === "kemeja" 
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
                  {product.description || "Deskripsi produk belum tersedia."}
                </p>
              </div>

              {/* SIZE SPECIFICATION */}
              <div className="border-t border-neutral-100 pt-6">
                <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wider mb-3">
                  Size Specification
                </h3>
                
                <div className="bg-[#FAFAFA] p-4 rounded-xs border border-neutral-100 max-w-md">
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
                      {product.sizeGuide || "Size M | L | XL | XXL"}
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