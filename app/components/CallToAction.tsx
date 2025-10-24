import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Bạn có tìm kiếm sự bình yên này?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          &ldquo;Nếu bạn mệt mỏi với sự hối hả, hãy đến để sống chậm lại cùng Yên Hoà.&ldquo;
        </p>
        <Link href="/len-ke-hoach/cam-nang">
          <button className="mt-8 px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition">
            Tìm Hiểu Cách Đến Yên Hoà
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
