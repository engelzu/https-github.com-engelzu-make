import type {Metadata, Viewport} from 'next';
import { Inter, Playfair_Display } from "next/font/google";
import './globals.css'; // Global styles

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#f43f5e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Estilo | Seu Guia Diário',
  description: 'Portal diário de dicas de maquiagem, beleza, moda e autocuidado com IA.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Estilo',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-stone-50 font-sans text-stone-900 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
