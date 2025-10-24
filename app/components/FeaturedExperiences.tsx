import Image from 'next/image';

const FeaturedExperiences = () => {
  const experiences = [
    {
      title: 'Chạm vào Lịch sử',
      description: 'Dạo bước bên chân tháp cổ, cảm nhận dấu ấn thời gian và lắng nghe câu chuyện của di tích trăm năm tuổi.',
      image: '/anh-internet/Trải nghiệm Nổi bật - Chạm vào Lịch sử.jpg'
    },
    {
      title: 'Chạm vào Văn hoá & Tình người',
      description: 'Cùng chuẩn bị và thưởng thức mâm cơm đậm đà hương vị bản địa, nơi tình người nồng hậu được sẻ chia.',
      image: '/anh-internet/Trải nghiệm Nổi bật 2 -Chạm vào Văn hoá & Tình người.jpg'
    },
    {
      title: 'Chạm vào Thiên nhiên',
      description: 'Lướt thuyền trên dòng Nậm Nơn xanh biếc, hít thở không khí trong lành và ôm trọn lấy cảnh sắc hùng vĩ.',
      image: '/anh-internet/Trải nghiệm Nổi bật 3 -Chạm vào thiên nhiên.jpg'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Những Trải Nghiệm Nguyên Bản Nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={exp.image} alt={exp.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
