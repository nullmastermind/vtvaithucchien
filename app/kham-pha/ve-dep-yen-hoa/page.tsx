import Image from 'next/image';

const albums = [
  {
    name: 'Cuộc sống thường ngày',
    images: [
      { src: '/gallery/daily-life-1.jpg', alt: 'Người dân làm nương rẫy' },
      { src: '/gallery/daily-life-2.jpg', alt: 'Trẻ em tắm sông' },
      { src: '/gallery/daily-life-3.jpg', alt: 'Thuyền độc mộc trên sông Nậm Nơn' },
      { src: '/gallery/daily-life-4.jpg', alt: 'Một góc bếp củi' },
    ],
  },
  {
    name: 'Phong cảnh bản làng',
    images: [
      { src: '/gallery/landscape-1.jpg', alt: 'Toàn cảnh thung lũng' },
      { src: '/gallery/landscape-2.jpg', alt: 'Nhà sàn bên sườn đồi' },
      { src: '/gallery/landscape-3.jpg', alt: 'Con đường đất quanh co' },
      { src: '/gallery/landscape-4.jpg', alt: 'Dòng sông Nậm Nơn hiền hoà' },
    ],
  },
  {
    name: 'Nụ cười Yên Hoà',
    images: [
      { src: '/gallery/smiles-1.jpg', alt: 'Nụ cười người già' },
      { src: '/gallery/smiles-2.jpg', alt: 'Nụ cười trẻ thơ' },
      { src: '/gallery/smiles-3.jpg', alt: 'Nụ cười trong lao động' },
      { src: '/gallery/smiles-4.jpg', alt: 'Nụ cười bên mâm cơm' },
    ],
  },
];

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      {albums.map((album) => (
        <section key={album.name} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">{album.name}</h2>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {album.images.map((image, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
