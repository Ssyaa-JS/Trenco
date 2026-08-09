import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tren'co | Official Website",
  description: "Trendy clothing line for men, teens, and kids.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-light text-brand-dark antialiased">
        <Navbar />
        {/* pt-24 dikasih biar konten halaman gak tertutup navbar yang melayang */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}