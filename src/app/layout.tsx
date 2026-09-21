import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maison Mère — The Sanctuary for Modern Motherhood",
  description:
    "A luxury ecosystem for mother & child care — curated organic skincare and maternal essentials paired with smart developmental tracking, backed by pediatric experts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream font-sans text-charcoal antialiased selection:bg-gold/30 selection:text-charcoal">
        {children}
      </body>
    </html>
  );
}
