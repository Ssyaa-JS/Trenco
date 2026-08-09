'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    // POSISI: Tetap absolute agar ikut tergulung ke atas saat di-scroll
    // NAVBAR UTAMA: Menjadi putih bersih (bg-white) dengan border tipis di bawah
    <header className="w-full absolute top-0 left-0 right-0 z-[99] bg-white border-b border-neutral-100 shadow-md">
      
      {/* 1. Teks Berjalan (Marquee) - Tetap ramping dan elegan */}
      <div className="w-full bg-[#F5EBE6] text-[#8B5A2B] py-1 text-[10px] uppercase tracking-widest overflow-hidden whitespace-nowrap flex relative font-semibold select-none">
        {/* Teks Utama */}
        <div className="animate-marquee whitespace-nowrap pr-4 shrink-0 flex gap-4">
          <span>Welcome to our official website •</span>
          <span>Welcome to our official website •</span>
          <span>Welcome to our official website •</span>
          <span>Welcome to our official website •</span>
        </div>

        {/* Teks Duplikat */}
        <div
          className="animate-marquee whitespace-nowrap pr-4 shrink-0 flex gap-4"
          aria-hidden="true"
        >
          <span>Welcome to our official website •</span>
          <span>Welcome to our official website •</span>
          <span>Welcome to our official website •</span>
          <span>Welcome to our official website •</span>
        </div>
      </div>

      {/* 2. Area Navigasi Utama (Slim, Pas, & Proporsional) */}
      {/* h-12 di mobile dan h-14 di desktop menjamin tidak memakan space foto di bawahnya */}
      {/* px-6 sampai md:px-12 menjaga batas aman dari tepi monitor luar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 h-12 md:h-14 flex items-center justify-between">
        
        {/* LOGO RUSA EMAS (SUDAH DIPERBESAR) */}
        {/* Ukuran disesuaikan ke h-9 w-14 (mobile) dan h-11 w-16 (desktop) agar seimbang dengan navbar */}
        <Link
          href="/"
          className="flex items-center h-9 w-14 md:h-11 md:w-16 overflow-hidden relative group transition duration-300 hover:scale-105"
        >
          <img
            src="/image/logo-gold.png"
            alt="Tren'co Logo"
            className="h-full w-full object-contain object-left"
          />
        </Link>

        {/* MENU NAVIGASI MINIMALIS */}
        {/* Jarak pr-0 aman digunakan karena pembungkus utama sudah dikunci oleh batas max-w-7xl */}
        <nav className="flex items-center gap-6 md:gap-10 text-[11px] font-bold uppercase tracking-widest text-[#8B5A2B] pr-0">
          <Link
            href="/"
            className="relative py-1 group transition duration-300 hover:text-[#D7C4B7]"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D7C4B7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/store"
            className="relative py-1 group transition duration-300 hover:text-[#D7C4B7]"
          >
            Store
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D7C4B7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="relative py-1 group transition duration-300 hover:text-[#D7C4B7]"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D7C4B7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

      </div>
    </header>
  );
}