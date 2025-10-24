import Image from 'next/image';

const homestays = [
  {
    name: 'Homestay A',
    description: 'Một ngôi nhà sàn ấm cúng với tầm nhìn ra thung lũng.',
    image: '/homestay-a.jpg',
  },
  {
    name: 'Homestay B',
    description: 'Trải nghiệm cuộc sống ven sông Nậm Nơn.',
    image: '/homestay-b.jpg',
  },
  {
    name: 'Homestay C',
    description: 'Gần gũi với thiên nhiên và vườn rau của gia đình.',
    image: '/homestay-c.jpg',
  },
];

const dishes = [
  {
    name: 'Cá nướng (Pa Pỉnh Tộp)',
    description: 'Cá được bắt từ sông Nậm Nơn, tẩm ướp gia vị mắc khén đặc trưng và nướng trên than hồng.',
    image: '/dish-fish.jpg',
  },
  {
    name: 'Xôi tím',
    description: 'Xôi được nhuộm màu từ lá cây khẩu cắm, dẻo thơm và mang hương vị của núi rừng.',
    image: '/dish-xoi-tim.jpg',
  },
  {
    name: 'Rau rừng xào',
    description: 'Các loại rau được hái từ trên rừng, mang vị tươi ngon và độc đáo.',
    image: '/dish-rau-rung.jpg',
  },
];

export default function Page() {
  return (
    <main>
      {/* Accommodation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Lưu Trú Tại Yên Hoà</h1>
          <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Đây là những ngôi nhà của người dân, không phải khách sạn chuyên nghiệp, mang đến trải nghiệm sống cùng gia đình đích thực.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homestays.map((homestay, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={homestay.image} alt={homestay.name} width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{homestay.name}</h3>
                  <p className="text-gray-700">{homestay.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Hương Vị Bản Địa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <div key={index} className="text-center">
                <Image src={dish.image} alt={dish.name} width={400} height={300} className="rounded-lg shadow-md mb-4" />
                <h3 className="font-semibold text-xl mb-2">{dish.name}</h3>
                <p className="text-gray-700">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
