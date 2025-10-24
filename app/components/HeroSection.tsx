const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/placeholder.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold">Yên Hoà: Về Miền An Yên</h1>
        <p className="mt-4 text-xl">Nơi vẻ đẹp của đất trời và con người hoà quyện.</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition">
          Khám Phá Ngay
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
