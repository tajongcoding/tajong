import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: '우리동네 블로그 | 울산광역시 생활 정보통',
  description: '울산광역시 생활 정보와 유용한 이야기를 담은 블로그입니다.',
};

export default function BlogPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category;
  const allPosts = getAllPosts();
  
  // 카테고리가 선택된 경우 해당 카테고리 글만 필터링, 아니면 전체 글 출력
  const posts = category 
    ? allPosts.filter(post => post.category === category) 
    : allPosts;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-[#0F1A2B] mb-3 tracking-tight">
          {category ? `${category} 정보` : '우리동네 블로그'}
        </h1>
        <p className="text-[#6B7280] text-lg font-medium">
          {category ? `울산의 유용한 ${category} 소식을 전해드립니다.` : '울산광역시 생활 정보와 유용한 이야기를 담았습니다.'}
        </p>
        <div className="mt-6 w-16 h-1 bg-[#C9A857] mx-auto rounded-full"></div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-7xl mb-6">🏜️</p>
          <p className="text-xl font-bold text-[#1F2937]">'{category}' 카테고리에 아직 작성된 글이 없습니다.</p>
          <p className="text-[#6B7280] mt-3 underline underline-offset-4 decoration-[#C9A857]">곧 유익한 정보로 채워 드릴게요!</p>
          <div className="mt-8">
            <Link href="/blog" className="text-[14px] font-bold text-[#C9A857] hover:underline underline-offset-4">
              ← 전체 글 보러가기
            </Link>
          </div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <li key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#C9A857]/40 transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* 카테고리 배지 */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold text-[#C9A857] bg-[#C9A857]/10 px-2.5 py-1 rounded-md border border-[#C9A857]/20 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* 글 제목 */}
                  <h2 className="text-[22px] font-[800] text-[#1F2937] mb-3 group-hover:text-[#0F1A2B] transition-colors leading-tight">
                    {post.title}
                  </h2>

                  {/* 요약 미리보기 */}
                  {post.summary && (
                    <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6 line-clamp-2 break-keep">{post.summary}</p>
                  )}

                  {/* 하단 정보: 날짜 + 태그 */}
                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex flex-wrap items-center gap-2">
                       {post.tags.map((tag) => (
                         <span key={tag} className="text-[12px] font-semibold text-slate-400">
                           #{tag}
                         </span>
                       ))}
                    </div>
                    <span className="text-[13px] font-medium text-slate-400">📅 {post.date}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
