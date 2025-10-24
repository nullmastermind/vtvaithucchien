import Image from 'next/image';

export default function Page() {
  return (
    <main>
      {/* Header */}
      <div className="relative w-full h-96">
        <Image
          src="/story-header.jpg"
          alt="Dòng sông Nậm Nơn"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Yên Hoà: Nơi Cuộc Sống Nương Theo Dòng Sông
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Section 1: Vùng Đất & Con Người */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Vùng Đất & Con Người</h2>
              <p className="text-gray-700 leading-relaxed">
                Mô tả về vị trí địa lý của Yên Hoà bên dòng Nậm Nơn, cuộc sống của người Thái, Khơ Mú gắn bó mật thiết với con sông và nương rẫy. Nhấn mạnh sự kiên cường và khả năng sống hoà hợp với thiên nhiên của họ.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/land-and-people.jpg"
                alt="Cuộc sống bên sông Nậm Nơn"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Nếp Nhà Sàn */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center flex-row-reverse">
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">Ngôi nhà không chỉ để ở</h2>
              <p className="text-gray-700 leading-relaxed">
                Giới thiệu kiến trúc nhà sàn truyền thống như một không gian sinh hoạt chung, nơi kết nối các thế hệ và là trung tâm của đời sống gia đình.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/nha-san.jpg"
                alt="Kiến trúc nhà sàn truyền thống"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Tình Làng Nghĩa Xóm */}
        <section>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Hơi Ấm Cộng Đồng</h2>
              <p className="text-gray-700 leading-relaxed">
                Thay vì nói về lễ hội lớn, hãy tập trung vào tinh thần cộng đồng trong các dịp thường nhật như dựng nhà mới, mùa gặt, hay các đám cưới hỏi. Đây chính là &ldquo;lễ hội&ldquo; chân thực nhất của tình làng nghĩa xóm.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/community.jpg"
                alt="Tinh thần cộng đồng"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


