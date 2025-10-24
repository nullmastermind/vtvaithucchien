import Image from 'next/image';

const activities = [
  {
    title: 'Đi bộ quanh bản & trò chuyện cùng người dân',
    description: 'Hãy dành một buổi sáng đi bộ trên những con đường đất quanh bản. Mỉm cười và gật đầu chào những người bạn gặp, bạn sẽ nhận lại được sự thân thiện mộc mạc. Đây là cách tốt nhất để cảm nhận sự bình yên.',
    image: '/activity-walking.jpg',
  },
  {
    title: 'Khám phá dòng Nậm Nơn',
    description: 'Dòng Nậm Nơn là huyết mạch của bản làng. Hãy dạo bước ven bờ, ngắm nhìn những đứa trẻ tắm sông, hay những chiếc thuyền độc mộc lướt đi. Vẻ đẹp của cuộc sống bình dị nằm ở chính đây.',
    image: '/activity-nam-non-river.jpg',
  },
  {
    title: 'Tìm hiểu nghề thủ công truyền thống',
    description: 'Ghé thăm một gia đình và xem những người phụ nữ Thái tỉ mỉ bên khung cửi dệt vải. Hãy hỏi họ về ý nghĩa của từng hoa văn, bạn sẽ nghe được cả một câu chuyện văn hoá trong đó.',
    image: '/activity-crafts.jpg',
  },
  {
    title: 'Cùng gia đình bản địa chuẩn bị bữa tối',
    description: 'Trải nghiệm quý giá nhất là được xắn tay áo, vào bếp cùng gia chủ. Cùng nhau nhặt rau rừng, nướng cá, nấu một nồi canh. Bữa tối sẽ trở nên ý nghĩa hơn bao giờ hết.',
    image: '/activity-cooking.jpg',
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
