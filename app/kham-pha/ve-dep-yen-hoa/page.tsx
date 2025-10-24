import Image from 'next/image';

export default function Page() {
  const images = [
    { src: 'https://picsum.photos/id/1015/800/600', alt: 'Hồ nước trong xanh' },
    { src: 'https://picsum.photos/id/1016/800/1000', alt: 'Rừng cây xanh mướt' },
    { src: 'https://picsum.photos/id/1018/800/600', alt: 'Cánh đồng lúa chín' },
    { src: 'https://picsum.photos/id/1019/800/1000', alt: 'Ngọn núi hùng vĩ' },
    { src: 'https://picsum.photos/id/1025/800/600', alt: 'Hoàng hôn trên biển' },
    { src: 'https://picsum.photos/id/103/800/1000', alt: 'Thác nước chảy xiết' },
    { src: 'https://picsum.photos/id/1040/800/600', alt: 'Bình minh trên cao nguyên' },
    { src: 'https://picsum.photos/id/1043/800/1000', alt: 'Cung đường ven đồi' },
    { src: 'https://picsum.photos/id/1050/800/600', alt: 'Dòng sông uốn lượn' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Hero Header */}
      <div className="relative w-full h-96">
        <Image
          src="https://picsum.photos/id/237/1920/1080"
          alt="Vẻ đẹp Yên Hoà"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold z-20 text-center px-4">
          Vẻ Đẹp Yên Hoà: Nét Chấm Phá Của Tự Nhiên
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nơi Đất Trời Giao Hoà</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Yên Hoà không chỉ là một điểm đến, mà là một trải nghiệm cho những tâm hồn yêu cái đẹp. Từ những thửa ruộng bậc thang uốn lượn, những dòng suối trong vắt, đến những ngọn núi hùng vĩ, mỗi góc nhìn đều là một bức tranh thiên nhiên tuyệt mỹ.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 pb-16">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((image, index) => (
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
      </div>
    </main>
  );
}
