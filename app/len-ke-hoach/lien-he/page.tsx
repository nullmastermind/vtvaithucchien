export default function Page() {
  return (
    <main>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">Hỗ Trợ & Liên Hệ</h1>
          <p className="mt-4 text-lg text-gray-600">Chúng tôi luôn sẵn sàng lắng nghe bạn.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Thông Tin Liên Hệ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Địa chỉ:</h3>
                <p>Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An</p>
              </div>
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p>support@yenhoa.com (ví dụ)</p>
              </div>
              <div>
                <h3 className="font-semibold">Số điện thoại:</h3>
                <p>+84 123 456 789 (ví dụ)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Gửi Tin Nhắn Cho Chúng Tôi</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">Họ và Tên</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">Tin Nhắn</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900">
                Gửi Đi
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
