import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";

const tautan = [
  { href: "/", label: "Beranda" },
  { href: "/katalog", label: "Katalog" },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Pengembangan Aplikasi Website - Razqa - Universitas Pertamina",
  description: "Aku seorang mahasiswa ilmu komputer semester 5 yang sedang mempelajari pengembangan aplikasi website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#konten" className="sr-only focus:not-sr-only focus:p-2">
          Lewati ke konten utama
        </a>
        <SiteHeader namaProduk="Nama Produk" tautan={tautan} />
        {children}
        <SiteFooter namaProduk="Nama Produk" />
      </body>
    </html>
  );
}