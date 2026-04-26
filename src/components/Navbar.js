"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full h-[80px] bg-[#DFF9E8] flex items-center justify-between px-6 md:px-[60px] shadow-sm z-[1000]">
      <div className="flex items-center gap-[10px] font-bold text-[#166534] leading-tight">
        <img src="/assets/images/icons/logo.png" alt="logo" className="w-[40px]" />
        <div className="text-[14px] md:text-[16px]">AVSA<br />WASTE</div>
      </div>

      <div className="hidden md:flex items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mx-[15px] text-[16px] font-medium transition-colors duration-300 relative pb-[5px] group ${isActive ? 'text-[#15803d]' : 'text-[#333] hover:text-[#22C55E]'
                }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[3px] bg-[#22C55E] rounded-full transition-all duration-500 ease-in-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
                }`}></span>
            </Link>
          );
        })}
      </div>

      <button
        className="md:hidden text-[#166534] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      <div className={`absolute top-[80px] left-0 w-full bg-[#DFF9E8] shadow-md flex flex-col items-center gap-6 py-8 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
        }`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[18px] font-semibold ${isActive ? 'text-[#15803d]' : 'text-[#333]'
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}