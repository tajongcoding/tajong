import { getAllPosts } from '@/lib/posts';
import BlogListPage from '@/components/BlogList';

export const metadata = {
  title: '우리동네 블로그 | 울산광역시 생활 정보통',
  description: '울산광역시 생활 정보와 유용한 이야기를 담은 블로그입니다.',
};

export default function BlogPage() {
  // 서버 사이드에서 모든 글 데이터를 미리 읽어옵니다.
  const allPosts = getAllPosts();

  // 읽어온 데이터를 클라이언트 컴포넌트인 BlogListPage로 전달합니다.
  return <BlogListPage allPosts={allPosts} />;
}
