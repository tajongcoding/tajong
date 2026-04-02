"use client";

import React from 'react';

export default function CoupangBanner() {
  const partnerId = process.env.NEXT_PUBLIC_COUPANG_PARTNER_ID;

  // 파트너스 아이디가 없거나 아직 입력되지 않은 상태이면 렌더링하지 않음
  if (!partnerId || partnerId === '나중에_입력') {
    return null;
  }

  return (
    <div className="my-14 w-full">
      <div className="relative overflow-hidden bg-white border border-slate-200 rounded-[20px] shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center group">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-10 -mt-10 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/5 rounded-full -ml-8 -mb-8 blur-2xl group-hover:bg-red-500/10 transition-colors duration-500"></div>

        {/* Brand Tag */}
        <div className="inline-flex items-center gap-1 bg-[#1F2937]/5 px-3 py-1 rounded-full text-[12px] font-bold text-slate-500 mb-5 border border-slate-100">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          COUPANG PARTNERS
        </div>

        {/* Content Heading */}
        <h3 className="text-[20px] md:text-[24px] font-black text-[#0F1A2B] mb-2 leading-tight">
          생활의 모든 것, <span className="text-[#C9A857]">쿠팡</span>에서 만나보세요!
        </h3>
        <p className="text-slate-400 text-[14px] md:text-[16px] mb-8 font-medium break-keep">
          울산 시민을 위한 생필품부터 로켓배송 혜택까지 <br className="hidden md:block" /> 최저가로 빠르게 준비해보세요.
        </p>

        {/* Action Button - 더 눈에 띄고 전문적인 버튼 */}
        <a 
          href="https://link.coupang.com/a/bMcTst" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[#0F1A2B] rounded-xl hover:bg-slate-800 hover:-translate-y-1 shadow-[0_10px_25px_-5px_rgba(15,26,43,0.4)] active:scale-95 overflow-hidden group/btn"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-red-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
          <span className="relative z-10 flex items-center gap-2">
            쿠팡에서 쇼핑하기
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>

        {/* Disclosure Area - 법적 신뢰성 확보 및 깔끔한 배치 */}
        <div className="mt-10 pt-6 border-t border-slate-100 w-full max-w-lg">
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            &quot;이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.&quot; <br />
            수익금은 <span className="text-slate-500 font-bold">아시나요 울산</span> 포털의 공공 정보 서비스 운영비로 소중하게 사용됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
