import { getPostBySlug, getAllPosts } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import CoupangBanner from '@/components/CoupangBanner';
import Link from 'next/link';

// 빌드 시 존재하는 모든 slug를 미리 생성 (정적 페이지 생성)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// 각 페이지의 SEO 메타 정보 생성
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | 성남시 생활 정보통`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | 성남시 생활 정보통`,
      description: post.summary,
      url: `https://my-local-info.pages.dev/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["성남시 생활 정보통 에디터"],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // 해당 글이 없으면 404 페이지로 이동
  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    description: post.summary,
    author: {
      '@type': 'Organization',
      name: '성남시 생활 정보통',
    },
    publisher: {
      '@type': 'Organization',
      name: '성남시 생활 정보통',
      logo: {
        '@type': 'ImageObject',
        url: 'https://my-local-info.pages.dev/favicon.ico',
      },
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://my-local-info.pages.dev' },
      { '@type': 'ListItem', position: 2, name: '블로그', item: 'https://my-local-info.pages.dev/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://my-local-info.pages.dev/blog/${post.slug}` },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {/* 뒤로 가기 버튼 */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mb-6"
      >
        ← 블로그 목록으로
      </Link>

      {/* 글 헤더 영역 */}
      <header className="mb-8">
        {/* 카테고리 */}
        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-3">
          {post.category}
        </span>

        {/* 제목 */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h1>

        {/* 날짜 + 태그 */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <span>📅 {post.date}</span>
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-2 py-0.5 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* 요약 */}
        {post.summary && (
          <p className="mt-4 text-gray-500 border-l-4 border-blue-300 pl-4 italic">
            {post.summary}
          </p>
        )}
      </header>

      {/* 구분선 */}
      <hr className="mb-8 border-gray-200" />

      {/* 마크다운 본문 렌더링 */}
      <article className="prose prose-blue max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>

      {/* 쿠팡 파트너스 배너 (본문 하단) */}
      <CoupangBanner />

      {/* 하단 뒤로 가기 */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
        >
          ← 블로그 목록으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
