import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/anh-internet/hero section.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-widest">Yên Hoà</h1>
        <p className="mt-4 text-xl">Nơi Bình Yên Bắt Nguồn Từ Những Điều Giản Dị.</p>
        <Link href="/cau-chuyen-yen-hoa">
          <button className="mt-8 px-6 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
            Khám phá sự thật Yên Hoà
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
