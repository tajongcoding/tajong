import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <span>📍</span>
          <span>울산광역시 생활 정보통</span>
        </Link>
        <nav className="text-sm md:text-base font-medium space-x-6">
          <Link href="/" className="hover:text-blue-200 transition">홈</Link>
          <Link href="/#events" className="hover:text-blue-200 transition">행사/축제</Link>
          <Link href="/blog" className="hover:text-blue-200 transition">우리동네 블로그</Link>
        </nav>
      </div>
    </header>
  );
}
