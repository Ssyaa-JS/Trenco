import "./globals.css";
import Navbar from "./components/Navbar"; 
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

// 1. Konfigurasi Font Smart Casual
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Tren'co | Official Website",
  description: "Trendy clothing line for men, teens, and kids.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. Gabungkan variabel font ke dalam class body */}
      <body className={`${jakartaSans.variable} ${inter.variable} bg-brand-light text-brand-dark font-sans antialiased`}>
        {/* Navbar utama */}
        <Navbar /> 
        
        {/* pt-0 memastikan konten halaman menempel pas di bawah/belakang navbar tanpa mendorong layout global */}
        <main className="pt-0 min-h-screen w-full">
          {children}
        </main>
      </body>
    </html>
  );
}