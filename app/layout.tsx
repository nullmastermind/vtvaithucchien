import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yên Hoà - Nơi Bình Yên Bắt Nguồn',
  description: 'Khám phá Yên Hoà, một bản làng xa xôi còn giữ vẹn nguyên nét hoang sơ, nơi sinh sống của cộng đồng người Thái, Khơ Mú tại Nghệ An.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
