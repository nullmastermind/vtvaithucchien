import Image from 'next/image';

const activities = [
  {
    title: 'Tham quan Tháp Cổ Yên Hoà',
    description: 'Chiêm ngưỡng di tích lịch sử - văn hoá cấp tỉnh, một công trình kiến trúc cổ độc đáo còn lại gần như nguyên vẹn của người Thái trên đất Nghệ An.',
    image: '/anh-internet/Hoạt động Tham quan Tháp Cổ Yên Hoà.jpg',
  },
  {
    title: 'Tìm hiểu nghề dệt thổ cẩm',
    description: 'Ghé thăm những nếp nhà sàn, xem đôi tay khéo léo của người phụ nữ Thái dệt nên những tấm thổ cẩm rực rỡ sắc màu và lắng nghe câu chuyện văn hoá sau từng hoa văn.',
    image: '/anh-internet/Hoạt động Tìm hiểu nghề dệt thổ cẩm.jpg',
  },
  {
    title: 'Thưởng thức ẩm thực bản địa',
    description: 'Cùng người dân vào bếp, học cách chế biến những món ăn dân dã từ nguyên liệu tươi ngon hái từ vườn nhà, bắt dưới suối và cảm nhận tình người nồng hậu.',
    image: '/anh-internet/Hoạt động Thưởng thức ẩm thực bản địa.jpg',
  },
  {
    title: 'Giao lưu văn nghệ & Múa sạp',
    description: 'Hoà mình vào không khí vui tươi của đêm giao lưu văn nghệ, cùng nắm tay trong điệu lăm vông và thử sức với những điệu nhảy sạp sôi động, vui nhộn.',
    image: '/anh-internet/Hoạt động Giao lưu văn nghệ & Múa sạp.jpg',
  },
  {
    title: 'Dạo thuyền trên sông Nậm Nơn',
    description: 'Thong thả dạo thuyền trên dòng Nậm Nơn thơ mộng, ngắm nhìn khung cảnh núi rừng hùng vĩ và cuộc sống yên bình của bản làng đôi bờ.',
    image: '/anh-internet/Hoạt động Dạo thuyền trên sông Nậm Nơn.jpg',
  },
];

export default function Page() {
  return (
    <main>
      {/* Header */}
      <div className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sống Cùng Yên Hoà</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Du lịch tại Yên Hoà không phải là chạy theo các điểm check-in, mà là sống chậm lại và hoà mình vào nhịp điệu của bản làng. Dưới đây là những trải nghiệm bạn có thể thực sự làm được khi đến đây.
          </p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{activity.title}</h2>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
