import Image from 'next/image';

const Gallery = () => {
  const images = [
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Cuộc Sống Thường Nhật</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg aspect-square">
              <Image src={src} alt={`Gallery image ${index + 1}`} width={400} height={400} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 border border-gray-800 text-gray-800 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition">
          Xem Thêm Khoảnh Khắc Đời Thường
        </button>
      </div>
    </section>
  );
};

export default Gallery;
