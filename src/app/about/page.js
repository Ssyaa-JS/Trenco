'use client';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col pt-[80px] md:pt-[96px] relative">
      
      {/* 1. HEADER HALAMAN ABOUT - KONSISTEN DENGAN HALAMAN STORE */}
      <section className="w-full bg-[#FAFAFA] border-b border-neutral-100 pt-12 md:pt-16 pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B5A2B] font-black mb-2">
            Tren'co Identity
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 uppercase">
            Our Identity & Story
          </h1>
          <div className="w-12 h-[2px] bg-neutral-900 mt-4"></div>
        </div>
      </section>

      {/* 2. BRAND STORY SECTION - FIXED MAX-WIDTH & SIMETRIS */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-neutral-100">
        {/* max-w disamakan dengan Store (1440px) agar batas kanan kiri sejajar presisi */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          {/* Grid 2 Kolom Seimbang dengan pembatas maksimal konten internal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center justify-items-center">
            
            {/* SISI KIRI: FOTO EDITORIAL (Dikunci max-w agar aspek 3:4 tetap gagah) */}
            <div className="w-full max-w-xl aspect-[3/4] bg-[#F7F7F7] relative overflow-hidden rounded-sm border border-neutral-100 shadow-xs">
              <img 
                src="/image/trousers-hitam.png" 
                alt="Tren'co Editorial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* SISI KANAN: TEKS NARASI (Di-center secara vertikal & lebar dikunci max-w-xl) */}
            <div className="w-full max-w-xl flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B5A2B] font-black mb-2 block">
                The Genesis
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 uppercase tracking-tight mb-6 leading-tight">
                Lebih Dari Sekadar Pakaian.
              </h2>
              <div className="space-y-4 text-xs md:text-sm text-neutral-600 leading-relaxed font-medium">
                <p>
                  Lahir dari keresahan akan sulitnya mencari pakaian formal yang tetap nyaman dan fleksibel, 
                  <strong className="text-neutral-900"> Tren'co</strong> hadir memadukan estetika modern dengan kenyamanan maksimal.
                </p>
                <p>
                  Setiap potongan kemeja dan celana kami dirancang presisi dengan potongan <span className="italic font-bold text-neutral-800">slim fit</span> maupun <span className="italic font-bold text-neutral-800">modern fit</span>. Kami percaya bahwa berpakaian rapi tidak harus mengorbankan ruang gerakmu.
                </p>
                <p>
                  Dari ruang meeting kantor hingga tempat nongkrong santai, Tren'co menemani setiap langkah produktif dan gaya kasualmu setiap hari.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MODULAR CARD SECTION - RE-ALIGNMENT */}
      <section className="w-full bg-[#FAFAFA] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* CARD 1: VISI BRAND */}
            <div className="bg-white p-8 rounded-sm border border-neutral-100 shadow-xs flex flex-col justify-between hover:border-[#8B5A2B]/40 transition-colors duration-300">
              <div>
                <span className="text-[10px] font-black text-[#8B5A2B] tracking-widest block mb-4">01 / VISION</span>
                <h3 className="text-sm font-black text-neutral-950 uppercase tracking-wider mb-4">The Outlook</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                  Menjadi brand apparel lokal nomor satu yang dipercaya pria modern dalam menyediakan pakaian esensial berkelas, presisi, dan fungsional di segala aktivitas.
                </p>
              </div>
            </div>

            {/* CARD 2: MISI BRAND */}
            <div className="bg-white p-8 rounded-sm border border-neutral-100 shadow-xs flex flex-col justify-between hover:border-[#8B5A2B]/40 transition-colors duration-300">
              <div>
                <span className="text-[10px] font-black text-[#8B5A2B] tracking-widest block mb-4">02 / MISSION</span>
                <h3 className="text-sm font-black text-neutral-950 uppercase tracking-wider mb-4">The Purpose</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                  Konsisten menghadirkan material kain premium dan konstruksi jahitan terbaik, serta mengedukasi pria Indonesia bahwa kenyamanan & kerapian bisa berjalan beriringan.
                </p>
              </div>
            </div>

            {/* CARD 3: CORE VALUES */}
            <div className="bg-white p-8 rounded-sm border border-neutral-100 shadow-xs flex flex-col justify-between hover:border-[#8B5A2B]/40 transition-colors duration-300">
              <div>
                <span className="text-[10px] font-black text-[#8B5A2B] tracking-widest block mb-4">03 / VALUES</span>
                <h3 className="text-sm font-black text-neutral-950 uppercase tracking-wider mb-4">Tailored Precision</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                  Fokus penuh pada detail siluet tubuh. Setiap kemeja dan celana dipotong secara anatomi proporsional agar memberikan impresi tubuh yang tegap dan rapi.
                </p>
              </div>
            </div>

            {/* CARD 4: STYLE BRAND */}
            <div className="bg-white p-8 rounded-sm border border-neutral-100 shadow-xs flex flex-col justify-between hover:border-[#8B5A2B]/40 transition-colors duration-300">
              <div>
                <span className="text-[10px] font-black text-[#8B5A2B] tracking-widest block mb-4">04 / STYLE</span>
                <h3 className="text-sm font-black text-neutral-950 uppercase tracking-wider mb-4">Versatile Look</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                  Mengusung estetika minimalis kontemporer yang timeless. Produk Tren'co dirancang fleksibel agar mudah di-mix and match untuk kerja maupun nongkrong.
                </p>
              </div>
            </div>

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