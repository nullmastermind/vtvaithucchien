const itinerary = {
  title: 'Hành Trình 2 Ngày 1 Đêm: Chạm Vào Yên Hoà',
  days: [
    {
      day: 'Ngày 1',
      title: 'An Nhiên Đặt Chân',
      schedule: [
        {
          time: 'Chiều',
          activity: 'Đến Yên Hoà, nhận phòng homestay và làm quen với không gian.',
          description: 'Sau hành trình dài, hãy dành thời gian nghỉ ngơi. Đi bộ một vòng quanh bản để cảm nhận không khí trong lành và sự yên bình.',
        },
        {
          time: 'Tối',
          activity: 'Cùng gia đình bản địa chuẩn bị bữa tối.',
          description: 'Đây là cơ hội tuyệt vời để tìm hiểu về văn hoá ẩm thực địa phương. Cùng nhau nhặt rau, nướng cá và trò chuyện bên bếp lửa.',
        },
      ],
    },
    {
      day: 'Ngày 2',
      title: 'Hoà Mình Cùng Nhịp Sống',
      schedule: [
        {
          time: 'Sáng',
          activity: 'Dạo bước ven dòng Nậm Nơn và tìm hiểu nghề thủ công.',
          description: 'Ngắm nhìn cuộc sống thường nhật diễn ra bên bờ sông. Sau đó, ghé thăm một gia đình để xem những người phụ nữ dệt vải và lắng nghe câu chuyện của họ.',
        },
        {
          time: 'Trưa',
          activity: 'Ăn trưa và chuẩn bị trở về.',
          description: 'Thưởng thức bữa trưa cuối cùng với những món ăn đậm chất địa phương. Chào tạm biệt gia đình homestay và mang theo những kỷ niệm bình yên.',
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">{itinerary.title}</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Gợi ý cách trải nghiệm Yên Hoà một cách sâu sắc và chân thực nhất.</p>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>

          {itinerary.days.map((dayData, dayIndex) => (
            <div key={dayIndex}>
              <h2 className="text-3xl font-bold text-center my-8">{`${dayData.day}: ${dayData.title}`}</h2>
              {dayData.schedule.map((item, itemIndex) => (
                <div key={itemIndex} className={`mb-8 flex justify-between items-center w-full ${itemIndex % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'}`}>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
                    <h3 className="mx-auto font-semibold text-sm text-white">{item.time}</h3>
                  </div>
                  <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h4 className="mb-3 font-bold text-gray-800 text-lg">{item.activity}</h4>
                    <p className="text-sm leading-snug tracking-wide text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
