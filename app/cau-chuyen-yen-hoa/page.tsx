import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative w-full h-96">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Yen Hoa"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-20">
          Câu Chuyện Yên Hoà: Nơi Văn Hoá Gặp Gỡ Đất Trời
        </h1>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Lịch sử hình thành</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          {/* Timeline Item 1 */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Mốc sự kiện 1</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Mô tả ngắn gọn về sự kiện lịch sử quan trọng đầu tiên của bản làng.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Mốc sự kiện 2</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Mô tả về một giai đoạn phát triển hoặc một sự kiện văn hoá đặc sắc.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Mốc sự kiện 3</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Ghi nhận một dấu ấn hiện đại hoặc một sự thay đổi quan trọng gần đây.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Con người & Bản sắc</h2>
        {/* Row 1: Text Left, Image Right */}
        <div className="flex flex-wrap items-center mb-12">
          <div className="w-full md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">Con người Yên Hoà</h3>
            <p className="text-gray-700">
              Mô tả về con người, tính cách, và lòng hiếu khách của người dân bản địa. Họ sống chan hoà với thiên nhiên và gìn giữ những giá trị truyền thống qua nhiều thế hệ.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="https://picsum.photos/600/400"
              alt="Con người Yên Hoà"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Row 2: Image Left, Text Right */}
        <div className="flex flex-wrap items-center mb-12 flex-row-reverse">
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold mb-4">Nhà sàn & Trang phục</h3>
            <p className="text-gray-700">
              Kiến trúc nhà sàn độc đáo không chỉ là nơi ở mà còn là không gian văn hoá. Trang phục truyền thống với những hoa văn tinh xảo thể hiện sự khéo léo và óc thẩm mỹ của người phụ nữ.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="https://picsum.photos/600/401"
              alt="Nhà sàn và trang phục"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Phong tục & Lễ hội</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="https://picsum.photos/400/300"
              alt="Lễ hội mùa xuân"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4"
            />
            <h3 className="font-semibold">Lễ hội mùa xuân</h3>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/400/301"
              alt="Nghề dệt thổ cẩm"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4"
            />
            <h3 className="font-semibold">Nghề dệt thổ cẩm</h3>
          </div>
          <div className="text-center">
            <Image
              src="https://picsum.photos/400/302"
              alt="Lễ cúng bến nước"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4"
            />
            <h3 className="font-semibold">Lễ cúng bến nước</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
