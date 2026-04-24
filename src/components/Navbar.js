"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full h-[80px] bg-[#DFF9E8] flex items-center justify-between px-[60px] shadow-sm z-[1000]">
      <div className="flex items-center gap-[10px] font-bold text-[#166534] leading-tight">
        <img src="/assets/images/icons/logo.png" alt="logo" className="w-[40px]" />
        <div className="text-[16px]">AVSA<br />WASTE</div>
      </div>

      <div className="flex items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mx-[15px] text-[16px] font-medium transition-colors duration-300 relative pb-[5px] group ${
                isActive ? 'text-[#15803d]' : 'text-[#333] hover:text-[#22C55E]'
              }`}
            >
              {link.name}
              
              <span 
                className={`absolute bottom-0 left-0 h-[3px] bg-[#22C55E] rounded-full transition-all duration-500 ease-in-out ${
                  isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
                }`}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}