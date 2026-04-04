'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 포스트 정보 타입 정의
interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  tags: string[];
}

// 실제 리스트를 보여주는 내부 컴포넌트
function BlogListContent({ allPosts }: { allPosts: PostMeta[] }) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category') || '';
  
  // 브라우저에서 실시간으로 필터링
  const posts = categoryFilter 
    ? allPosts.filter(post => post.category === categoryFilter)
    : allPosts;

  const displayTitle = categoryFilter ? `${categoryFilter} 정보` : '전체 정보 목록';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.length === 0 ? (
        <div className="col-span-full text-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-6xl mb-6 opacity-30">📂</p>
          <p className="text-[18px] font-bold text-slate-400">아직 등록된 {displayTitle}가 없습니다.</p>
        </div>
      ) : (
        posts.map((post) => {
          // 카테고리에 맞는 고화질 무료 이미지 URL 매칭
          const thumbImg = post.category === '복지' ? 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800' : 
                          post.category === '경제' ? 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800' : 
                          post.category === '행사' ? 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800' : 
                          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800';

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C9A857] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative w-full h-48 bg-slate-100 border-b border-slate-100 overflow-hidden">
                <img 
                  src={thumbImg} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold text-white bg-[#0F1A2B]/80 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200 group-hover:border-[#C9A857] transition-colors">
                    📅 {post.date}
                  </span>
                </div>
                <h2 className="text-[18px] md:text-[20px] font-extrabold text-[#1F2937] mb-3 group-hover:text-[#0F1A2B] transition-colors leading-snug line-clamp-2 uppercase">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-[14px] leading-relaxed mb-6 line-clamp-2">
                  {post.summary}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center gap-1 text-[13px] font-bold text-[#0F1A2B] group-hover:text-[#C9A857] transition-all">
                  자세히 보기 <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

// 메인 페이지 컴포넌트
export default function BlogListPage({ allPosts }: { allPosts: PostMeta[] }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12 border-b-2 border-[#0F1A2B] pb-6">
        <h1 className="text-[32px] md:text-[40px] font-black text-[#0F1A2B] mb-2 tracking-tight">
          우리동네 정보 센터
        </h1>
        <p className="text-slate-500 font-medium">울산광역시의 유용한 소식을 실시간으로 확인하세요.</p>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-slate-400">데이터를 불러오는 중입니다...</div>}>
        <BlogListContent allPosts={allPosts} />
      </Suspense>
    </main>
  );
}
