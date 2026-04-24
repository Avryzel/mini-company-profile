"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Riwayat', href: '/riwayat' },
        { name: 'Profile', href: '/profile' },
    ];

    return (
        <nav className="fixed top-0 w-full h-[80px] bg-[#DFF9E8] flex items-center justify-between px-[60px] shadow-[0_2_10_rgba(0,0,0,0.1)] z-[1000]">
            <div className="flex items-center gap-[10px] font-bold text-[#166534] leading-tight">
                <img src="/assets/images/icons/logo.png" alt="logo" className="w-[40px]" />
                <div className="text-[16px]">AVSA<br />WASTE</div>
            </div>

            <div className="nav flex items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`mx-[15px] text-[16px] font-medium transition-all duration-300 relative pb-[5px]
                        ${pathname === link.href ? 'text-[#15803d]' : 'text-[#333] hover:text-[#22C55E]'}`}
                    >
                        {link.name}
                        <span className={`absolute bottom-[-5px] left-0 h-[3px] bg-[#22C55E] rounded-full transition-all duration-300
                        ${pathname === link.href ? 'w-full' : 'w-0'}`}>
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}