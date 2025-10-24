import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">Yên Hoà</p>
            <p className="text-sm">Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-gray-300">Trang chủ</Link>
            <Link href="/cau-chuyen-yen-hoa" className="hover:text-gray-300">Câu chuyện</Link>
            <Link href="/len-ke-hoach/lien-he" className="hover:text-gray-300">Liên hệ</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Yen Hoa Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
