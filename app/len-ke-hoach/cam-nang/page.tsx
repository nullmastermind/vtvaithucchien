const sections = [
  {
    title: 'Kỳ Vọng Thực Tế',
    content: 'Yên Hoà là một bản làng thuần nông, chưa phải là một điểm du lịch chuyên nghiệp. Các tiện nghi (sóng điện thoại, wifi, nước nóng) có thể còn hạn chế. Hãy đến với một tâm thế cởi mở, sẵn sàng trải nghiệm và trân trọng sự mộc mạc.',
    isNew: true,
  },
  {
    title: 'Di chuyển như thế nào?',
    content: 'Hành trình đến Yên Hoà khá xa và vất vả, đòi hỏi sự chuẩn bị kỹ lưỡng. Con đường từ thành phố Vinh sẽ đưa bạn qua những cung đường đèo núi. Hãy xem đây là một phần của chuyến phiêu lưu.',
  },
  {
    title: 'Nên mang theo gì?',
    content: 'Quần áo gọn nhẹ, dễ vận động. Giày đi bộ tốt. Đèn pin, sạc dự phòng. Một ít thuốc men cá nhân. Và quan trọng nhất là một trái tim rộng mở.',
  },
  {
    title: 'Ăn uống ra sao?',
    content: 'Bạn sẽ ăn cùng gia đình host. Các món ăn được chế biến từ nguyên liệu tươi ngon tại địa phương. Nếu có yêu cầu đặc biệt về ăn uống, hãy báo trước.',
  },
  {
    title: 'Giao tiếp với người dân?',
    content: 'Người dân ở đây chủ yếu nói tiếng Thái và một ít tiếng phổ thông. Một nụ cười và thái độ thân thiện là ngôn ngữ tốt nhất. Bạn có thể học vài câu chào hỏi đơn giản.',
  },
];

export default function Page() {
  return (
    <main>
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Cẩm Nang A-Z Cho Chuyến Đi Yên Hoà</h1>
          <p className="mt-4 text-lg">Những thông tin cần thiết để bạn có một chuyến đi trọn vẹn và ý nghĩa.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="mb-8 p-6 border rounded-lg shadow-sm bg-white">
              <h2 className={`text-2xl font-bold mb-4 ${section.isNew ? 'text-red-600' : 'text-gray-800'}`}>
                {section.title} {section.isNew && <span className="text-sm font-normal bg-red-100 text-red-600 py-1 px-2 rounded-full ml-2">Mới</span>}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
