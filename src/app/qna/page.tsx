"use client";

import Link from 'next/link';

export default function QnaBoard() {
  const qnaPosts = [
    { id: 4, title: '다자녀 가구 지원금 신청은 어디서 하나요?', author: '울산맘', date: '2026.04.02', status: '답변완료' },
    { id: 3, title: '대왕암 공원 주차장 주말 무료인가요?', author: '동구주민', date: '2026.04.01', status: '답변대기' },
    { id: 2, title: '태화강 에코마켓 이번달 일정 궁금합니다.', author: '김지현', date: '2026.03.28', status: '답변완료' },
    { id: 1, title: '청년 구직활동 지원금 요건이 어떻게 되나요?', author: '취준생', date: '2026.03.25', status: '답변완료' },
  ];

  const handleWriteClick = () => {
    alert("알림:\n현재 질문 게시판(서버) 안정화 및 점검 중입니다.\n빠른 답변을 위해 모든 질문은 '카카오톡 공식 채널' 또는 '이메일'로 편리하게 접수해 주시면, 담당 부서에서 즉시 답변해 드립니다!\n\n💌 접수 이메일: help@asinayo.org");
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1F2937] font-sans pb-24">
      {/* 서브페이지 히어로 섹션 */}
      <section className="bg-[#0F1A2B] text-white py-16 px-6 border-b-[4px] border-[#C9A857] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#C9A857]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-[#C9A857]/30 rounded-full px-3 py-1 text-[13px] font-[600] text-[#C9A857] mb-4">
            Q&A Bulletin Board
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            궁금해요<span className="text-[#C9A857]">?</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-[400] max-w-lg mx-auto break-keep">
            울산 생활에 대한 모든 궁금증, 편하게 질문해 주세요!
          </p>
        </div>
      </section>

      {/* 게시판 영역 */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200 overflow-hidden">
        
          {/* 상단 컨트롤 바 */}
          <div className="p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[15px] font-[600] text-[#6B7280]">
              총 <span className="text-[#0F1A2B] font-bold text-[16px]">{qnaPosts.length}</span>개의 질문이 등록되어 있습니다.
            </div>
            <button 
              onClick={handleWriteClick}
              className="w-full md:w-auto bg-[#0F1A2B] hover:bg-[#1a2536] text-[#C9A857] font-[700] py-3 px-7 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              질문 글쓰기
            </button>
          </div>

          {/* 게시판 리스트 (표 형식) */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#F5F7FA] border-b border-slate-200 text-[#6B7280] text-[15px]">
                  <th className="py-4 px-6 font-[600] w-[80px] text-center">번호</th>
                  <th className="py-4 px-6 font-[600]">제목</th>
                  <th className="py-4 px-6 font-[600] w-[120px] text-center">작성자</th>
                  <th className="py-4 px-6 font-[600] w-[120px] text-center">등록일</th>
                  <th className="py-4 px-6 font-[600] w-[100px] text-center">상태</th>
                </tr>
              </thead>
              <tbody>
                {qnaPosts.map((post) => (
                  <tr key={post.id} className="border-b border-slate-100 hover:bg-[#F5F7FA] cursor-pointer transition-colors group">
                    <td className="py-5 px-6 text-center text-[#6B7280]">{post.id}</td>
                    <td className="py-5 px-6 font-[600] text-[#1F2937] group-hover:text-[#0F1A2B] group-hover:underline transition-colors">{post.title}</td>
                    <td className="py-5 px-6 text-center text-[#6B7280] text-[14px]">{post.author}</td>
                    <td className="py-5 px-6 text-center text-[#6B7280] text-[14px]">{post.date}</td>
                    <td className="py-5 px-6 text-center">
                      <span className={`text-[12px] font-[700] px-3 py-1.5 rounded-full ${
                        post.status === '답변완료' 
                        ? 'bg-blue-50 text-[#0F1A2B] border border-[#0F1A2B]/20' 
                        : 'bg-slate-100 text-[#6B7280] border border-slate-200'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 (가짜 디자인) */}
          <div className="p-7 flex justify-center items-center gap-2 border-t border-slate-100 bg-white">
            <button className="w-9 h-9 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#F5F7FA] transition-colors">‹</button>
            <button className="w-9 h-9 rounded bg-[#0F1A2B] text-white font-bold flex items-center justify-center shadow-sm">1</button>
            <button className="w-9 h-9 rounded border border-slate-200 flex items-center justify-center text-[#6B7280] hover:bg-[#F5F7FA] transition-colors font-medium">2</button>
            <button className="w-9 h-9 rounded border border-slate-200 flex items-center justify-center text-[#6B7280] hover:bg-[#F5F7FA] transition-colors font-medium">3</button>
            <button className="w-9 h-9 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#F5F7FA] transition-colors">›</button>
          </div>
        </div>
        
        {/* 하단 홈으로 가기 버튼 */}
        <div className="mt-8 text-center flex justify-center">
           <Link href="/" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#0F1A2B] hover:bg-slate-100 bg-white border border-slate-300 px-6 py-3 rounded-lg font-[600] transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              홈 화면으로 돌아가기
           </Link>
        </div>
      </div>
    </main>
  );
}
