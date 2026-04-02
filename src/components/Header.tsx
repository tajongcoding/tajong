"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 요청하신 우측 메인 6개 메뉴 + 홈
  const menuItems = [
    { name: '홈', path: '/' },
    { name: '울산 아시나요', path: '/blog' },
    { name: '울산 복지 정보', path: '/blog' },
    { name: '울산 경제 정보', path: '/blog' },
    { name: '울산 생활 정보', path: '/blog' },
    { name: '울산 행사·축제', path: '/blog' },
    { name: '울산 명소·관광', path: '/blog' },
  ];

  return (
    <header className="bg-[#0F1A2B] text-white h-[72px] border-b border-slate-800/50 sticky top-0 z-50 flex items-center transition-all duration-300 shadow-md">
      <div className="max-w-6xl mx-auto w-full px-6 flex justify-between items-center h-full">
        {/* Logo (좌측) */}
        <Link href="/" className="font-extrabold text-2xl tracking-tight flex items-center group flex-shrink-0">
          <span className="text-white group-hover:text-[#C9A857] transition-colors duration-300">
            www.asinayo.org
          </span>
        </Link>
        
        {/* Navigation (우측 메인 메뉴 - 가이드라인: 폰트 16px/600, 간격 28px) */}
        <nav className="hidden lg:flex items-center gap-[28px]">
          {menuItems.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.path} 
              className="text-[16px] font-[600] text-white hover:text-[#C9A857] transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 햄버거 메뉴 버튼 (모바일 전용) */}
        <button 
          className="lg:hidden p-2 text-white hover:text-[#C9A857] focus:outline-none transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 드롭다운 영역 */}
      {isMobileMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#0F1A2B] border-t border-slate-800/80 shadow-[0_10px_15px_-3px_rgba(15,26,43,0.5)] lg:hidden flex flex-col py-4 px-6 z-40">
          {menuItems.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.path} 
              className="py-3 text-[16px] font-[600] text-white hover:text-[#C9A857] border-b border-slate-800/50 last:border-0 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
