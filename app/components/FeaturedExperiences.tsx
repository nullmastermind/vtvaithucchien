import Image from 'next/image';

const FeaturedExperiences = () => {
  const experiences = [
    { name: 'Khám Phá Rừng Quốc Gia', image: '/placeholder.jpg' },
    { name: 'Thưởng Thức Ẩm Thực Địa Phương', image: '/placeholder.jpg' },
    { name: 'Giao Lưu Văn Hoá Bản Địa', image: '/placeholder.jpg' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Trải Nghiệm Nổi Bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={exp.image} alt={exp.name} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">{exp.name}</h3>
                <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Tìm hiểu thêm</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
