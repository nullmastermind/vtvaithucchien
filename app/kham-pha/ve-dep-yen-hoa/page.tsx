import Image from 'next/image';

const albums = [
  {
    name: 'Di Tích Vượt Thời Gian',
    images: [
      { src: '/anh-internet/Câu chuyện Yên Hòa - header.webp', alt: 'Chi tiết hoa văn Tháp Cổ' },
      { src: '/anh-internet/Hoạt động Tham quan Tháp Cổ Yên Hoà.jpg', alt: 'Toàn cảnh Tháp Cổ Yên Hoà' },
      { src: '/anh-internet/Minh họa tháp cổ 1.webp', alt: 'Góc nhìn uy nghiêm của Tháp Cổ' },
      { src: '/anh-internet/Minh họa tháp cổ 2.webp', alt: 'Tháp Cổ hài hoà với bản làng' },
      { src: '/anh-internet/Minh họa tháp cổ 3.jpg', alt: 'Nét văn hoá bên chân tháp' },
      { src: '/anh-internet/thap-4-1669194916.webp', alt: 'Tháp cổ rêu phong' },
    ],
  },
  {
    name: 'Nét Đẹp Con Người & Văn Hoá',
    images: [
      { src: '/anh-internet/Hoạt động Tìm hiểu nghề dệt thổ cẩm.jpg', alt: 'Nghề dệt thổ cẩm truyền thống' },
      { src: '/anh-internet/Hoạt động Thưởng thức ẩm thực bản địa.jpg', alt: 'Chuẩn bị mâm cơm đậm đà' },
      { src: '/anh-internet/Hoạt động Giao lưu văn nghệ & Múa sạp.jpg', alt: 'Điệu múa sạp sôi động' },
      { src: '/anh-internet/Trải nghiệm Nổi bật - Chạm vào Lịch sử.jpg', alt: 'Trang phục truyền thống của người Thái' },
      { src: '/anh-internet/Trải nghiệm Nổi bật 2 -Chạm vào Văn hoá & Tình người.jpg', alt: 'Mâm cơm ấm cúng tình người' },
      { src: '/anh-internet/Ảnh minh hoạ cho phần Lưu trú.jpg', alt: 'Chào đón khách tại homestay' },
      { src: '/anh-internet/uploaded-thanhthuybna-2023_12_06-_bna-anh-1-7545.jpg', alt: 'Nguyên liệu tươi ngon' },
      { src: '/anh-internet/uploaded-thanhthuybna-2023_12_06-_bna-anh-11-4324.jpg', alt: 'Gia vị núi rừng' },
      { src: '/anh-internet/uploaded-thanhthuybna-2023_12_06-_bna-anh-8-2952.jpg', alt: 'Quây quần bên mâm cơm' },
    ],
  },
  {
    name: 'Phong Cảnh Hùng Vĩ',
    images: [
      { src: '/anh-internet/hero section.webp', alt: 'Toàn cảnh Yên Hoà bên dòng Nậm Nơn' },
      { src: '/anh-internet/Hoạt động Dạo thuyền trên sông Nậm Nơn.jpg', alt: 'Thuyền trên sông Nậm Nơn' },
      { src: '/anh-internet/Trải nghiệm Nổi bật 3 -Chạm vào thiên nhiên.jpg', alt: 'Vẻ đẹp hùng vĩ của Yên Hoà' },
      { src: '/anh-internet/481184548_633570049397881_2631909739103059726_n.jpg', alt: 'Bản làng yên bình' },
      { src: '/anh-internet/481236324_633570106064542_6568222664540992041_n.jpg', alt: 'Góc nhìn từ trên cao' },
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
