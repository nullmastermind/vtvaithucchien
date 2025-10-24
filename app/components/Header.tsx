'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ia } from '../lib/routes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Yên Hoà
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {ia.map((item, index) => {
            if (item.sub_pages) {
              return (
                <div key={index} className="relative group">
                  <span className="cursor-pointer text-gray-600 hover:text-gray-800">{item.category_label}</span>
                  <div className="absolute left-0 top-full pt-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                    <div className="bg-white rounded-md shadow-lg overflow-hidden">
                      {item.sub_pages.map((sub, subIndex) => (
                        <Link key={subIndex} href={sub.slug} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          {sub.page}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={index} href={item.slug!} className="text-gray-600 hover:text-gray-800">
                {item.page}
              </Link>
            );
          })}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {ia.map((item, index) => {
              if (item.sub_pages) {
                return (
                  <div key={index} className="space-y-1">
                    <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">{item.category_label}</span>
                    {item.sub_pages.map((sub, subIndex) => (
                       <Link key={subIndex} href={sub.slug} className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                        {sub.page}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link key={index} href={item.slug!} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                  {item.page}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
