import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface InfoItem {
  id: string;
  name: string;
  category: string;
  startDate: string;
  endDate: string;
  location: string;
  target: string;
  summary: string;
  link: string;
}

interface LocalData {
  events: InfoItem[];
  benefits: InfoItem[];
}

// 정적 사이트 생성을 위해 가능한 모든 상세 페이지 경로(ID)를 미리 알려주는 함수
export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'public', 'data', 'local-info.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const data: LocalData = JSON.parse(fileContents);
  
  const allItems = [...data.events, ...data.benefits];
  
  return allItems.map((item) => ({
    id: item.id,
  }));
}

// 특정 ID에 해당하는 데이터 1개를 찾는 함수
function getItemById(id: string): InfoItem | null {
  const dataPath = path.join(process.cwd(), 'public', 'data', 'local-info.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const data: LocalData = JSON.parse(fileContents);
  
  const allItems = [...data.events, ...data.benefits];
  return allItems.find(item => item.id === id) || null;
}

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#fffdfa] text-gray-800 p-6">
        <h1 className="text-2xl font-bold mb-4">해당 정보를 찾을 수 없습니다 😢</h1>
        <Link href="/" className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl transition text-gray-700 font-medium">
          목록으로 돌아가기
        </Link>
      </main>
    );
  }

  // 카테고리에 맞춰 글씨 색상과 테두리 색상 다르게 지정
  const isEvent = item.category === '행사' || item.category === '축제';
  const themeColor = isEvent ? 'orange' : 'green';

  return (
    <main className="min-h-screen bg-[#fffdfa] text-gray-800 font-sans py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* 상단 타이틀 영역 */}
        <div className={`bg-${themeColor}-50 p-8 md:p-12 border-b border-${themeColor}-100`}>
          <div className={`inline-block text-sm font-bold text-${themeColor}-700 bg-${themeColor}-100 rounded-full px-4 py-1.5 mb-6`}>
            {item.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4 break-keep">
            {item.name}
          </h1>
        </div>

        {/* 상세 정보 영역 */}
        <div className="p-8 md:p-12">
          <ul className="space-y-6 mb-12">
            <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-gray-50 pb-6">
              <span className="text-gray-400 font-semibold w-24 shrink-0 flex items-center gap-2">
                <span>📅</span> 기간
              </span>
              <span className="text-lg text-gray-700 font-medium">
                {item.startDate} ~ {item.endDate}
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-gray-50 pb-6">
              <span className="text-gray-400 font-semibold w-24 shrink-0 flex items-center gap-2">
                <span>📍</span> 장소
              </span>
              <span className="text-lg text-gray-700 font-medium">
                {item.location}
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-gray-50 pb-6">
              <span className="text-gray-400 font-semibold w-24 shrink-0 flex items-center gap-2">
                <span>🙋</span> 대상
              </span>
              <span className="text-lg text-gray-700 font-medium">
                {item.target}
              </span>
            </li>
          </ul>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12 text-gray-700 leading-relaxed text-lg break-keep whitespace-pre-line">
            {item.summary}
          </div>

          {/* 버튼 영역 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex-1 sm:flex-none text-center px-8 py-4 bg-${themeColor}-500 hover:bg-${themeColor}-600 text-white rounded-2xl font-bold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1`}
            >
              자세히 보기 &rarr;
            </a>
            <Link 
              href="/" 
              className="flex-1 sm:flex-none text-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg transition-all"
            >
              목록으로 돌아가기
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
