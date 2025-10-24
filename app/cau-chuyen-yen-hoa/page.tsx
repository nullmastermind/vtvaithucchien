import Image from 'next/image';

export default function Page() {
  return (
    <main>
      {/* Header */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/anh-internet/Câu chuyện Yên Hòa - header.webp"
          alt="Chi tiết hoa văn Tháp Cổ Yên Hoà"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Tháp Cổ Yên Hoà: Dấu Ấn Vượt Thời Gian
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Section 1: Introduction */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Di Tích Trăm Tuổi</h2>
              <p className="text-gray-700 leading-relaxed">
                Nép mình bên dòng Nậm Nơn, Tháp Cổ Yên Hoà là một di tích lịch sử - văn hoá quý giá. Trải qua bao thăng trầm, ngọn tháp vẫn đứng vững, mang trên mình những hoa văn cổ kính và rêu phong của thời gian, kể lại câu chuyện về một thời kỳ đã qua.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/anh-internet/Minh họa tháp cổ 1.webp"
                alt="Sự uy nghiêm của ngọn tháp"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Harmony with Nature */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center flex-row-reverse">
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">Hoà Hợp Cùng Thiên Nhiên</h2>
              <p className="text-gray-700 leading-relaxed">
                Tháp không đứng trơ trọi mà nép mình giữa cây cối và những nếp nhà sàn, tạo nên một khung cảnh hài hoà, yên bình. Đây là minh chứng cho sự chung sống thuận theo tự nhiên của con người Yên Hoà qua nhiều thế hệ.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/anh-internet/Minh họa tháp cổ 2.webp"
                alt="Tháp cổ nép mình giữa bản làng"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Cultural Continuity */}
        <section>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Sự Tiếp Nối Văn Hoá</h2>
              <p className="text-gray-700 leading-relaxed">
                Bên chân tháp cổ, những thế hệ người con gái Thái vẫn xúng xính trong bộ trang phục truyền thống. Di tích không chỉ là quá khứ mà còn là điểm tựa cho văn hoá bản địa được tiếp nối và trao truyền.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/anh-internet/Minh họa tháp cổ 3.jpg"
                alt="Thế hệ tiếp nối bên chân tháp"
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


