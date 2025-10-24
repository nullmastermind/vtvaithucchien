import Image from 'next/image';

const FeaturedExperiences = () => {
  const experiences = [
    {
      title: 'Chạm vào sự tĩnh lặng',
      description: 'Leo lên một ngọn đồi quanh bản, hít thở không khí trong lành và để tầm mắt ôm trọn lấy những mái nhà sàn yên bình.',
      image: '/experience-1.jpg'
    },
    {
      title: 'Chạm vào văn hoá',
      description: 'Ở nhà sàn, ăn bữa cơm địa phương, và để những câu chuyện sưởi ấm tâm hồn bạn.',
      image: '/experience-2.jpg'
    },
    {
      title: 'Chạm vào hương vị',
      description: 'Vị cay nồng của mắc khén, vị dẻo thơm của xôi tím - hương vị của núi rừng chân thật nhất.',
      image: '/experience-3.jpg'
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
