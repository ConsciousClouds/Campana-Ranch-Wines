import type { Metadata } from "next";
import { Bodoni_Moda, DM_Serif_Display, Bebas_Neue, Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/src/shared/components/Layout/Header";
import Footer from "@/src/shared/components/Layout/Footer";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ['400'],
  style: ['normal', 'italic'],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ['400'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600'],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Campana Ranch Wines - Exceptional Wines from Sonoma Valley",
  description: "Discover handcrafted premium wines from Campana Ranch in Sonoma Valley. Shop our collection, join our wine club, and visit our tasting room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoni.variable} ${dmSerif.variable} ${bebas.variable} ${poppins.variable} ${cinzel.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
