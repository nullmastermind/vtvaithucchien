import Image from 'next/image';

const Gallery = () => {
  const images = [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Thư Viện Ảnh</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image src={src} alt={`Gallery image ${index + 1}`} width={300} height={300} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition">
          Xem Toàn Bộ Thư Viện
        </button>
      </div>
    </section>
  );
};

export default Gallery;
