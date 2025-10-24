import Image from 'next/image';

const homestays = [
  {
    name: 'Homestay Dũng Hà',
    description: 'Trải nghiệm cuộc sống chân thực trong ngôi nhà sàn của người dân bản địa, nơi sự mộc mạc và tình người nồng hậu là điều quý giá nhất.',
    image: '/anh-internet/Ảnh minh hoạ cho phần Lưu trú.jpg',
  },
];

const dishes = [
  {
    name: 'Chuẩn bị bữa cơm',
    description: 'Những nguyên liệu tươi ngon nhất, từ rau ngoài vườn đến cá dưới suối, được chuẩn bị cho một bữa ăn đậm tình gia đình.',
    image: '/anh-internet/uploaded-thanhthuybna-2023_12_06-_bna-anh-1-7545.jpg',
  },
  {
    name: 'Hương vị núi rừng',
    description: 'Các món ăn được nêm nếm bằng gia vị đặc trưng của người Thái như mắc khén, tạo nên hương vị không thể nào quên.',
    image: '/anh-internet/uploaded-thanhthuybna-2023_12_06-_bna-anh-11-4324.jpg',
  },
  {
    name: 'Mâm cơm ấm cúng',
    description: 'Không chỉ là một bữa ăn, đây là khoảnh khắc quây quần, nơi những câu chuyện được sẻ chia bên mâm cơm giản dị.',
    image: '/anh-internet/uploaded-thanhthuybna-2023_12_06-_bna-anh-8-2952.jpg',
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
          <div className="flex justify-center">
            {homestays.map((homestay, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
                <Image src={homestay.image} alt={homestay.name} width={500} height={300} className="w-full h-64 object-cover" />
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
