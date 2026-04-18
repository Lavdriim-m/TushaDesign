import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'TushaDesign — Luxury Kitchen Design & Manufacturing',
  description:
    'Premium kitchen design, manufacturing, and installation. Crafted to perfection for discerning homeowners who demand the extraordinary.',
  keywords: ['luxury kitchen', 'kitchen design', 'bespoke kitchen', 'kitchen manufacturing', 'high-end interiors'],
  openGraph: {
    title: 'TushaDesign — Luxury Kitchen Design & Manufacturing',
    description: 'Premium kitchen design, manufacturing, and installation.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "'Inter', var(--font-inter), sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
