import type { PostMeta } from './posts';
import localImagesCache from './local-images-cache.json';

type CategoryTheme = {
  label: string;
  toneName: string;
  toneDescription: string;
  badgeClass: string;
  overlayClass: string;
  surfaceClass: string;
  accentClass: string;
  images: string[];
};

// Direct upload.wikimedia.org URLs — no redirect chain
const ulsanLocalPhotos = {
  taehwagang: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Shade_Of_Taehwagang_%2871978891%29.jpeg',
  taehwaru: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Ulsan_taehwaru.jpg',
  bangudae: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Bangudae_Petroglyphs_from_Ulsan_%285329613206%29.jpg',
  port: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Port_Terminal_Of_Ulsan.JPG',
  industry: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Hyundai_Heavy_Industries_Ulsan_Shipyard_from_Jujeon_Beacon_Mound_-_2023-07-24.jpg',
  city: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Ulsan_129.30972E_35.52012N.jpg',
  banner: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Ulsan-banner.jpg',
  uljugun: 'https://upload.wikimedia.org/wikipedia/commons/3/39/%EC%9A%B8%EC%A3%BC%EA%B5%B0%2C_Ulsan%2C_South_Korea_%28Unsplash%29.jpg',
  ganjeolgot: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/%EA%B0%84%EC%A0%88%EA%B3%B6%ED%92%8D%EA%B2%BD_-_panoramio.jpg',
};

const categoryThemes: Record<string, CategoryTheme> = {
  복지: {
    label: '복지 정보',
    toneName: 'Warm Care',
    toneDescription: '따뜻하고 안정적인 케어 톤',
    badgeClass: 'bg-rose-50/95 text-rose-700 border border-rose-200',
    overlayClass: 'from-rose-950/72 via-slate-900/28 to-transparent',
    surfaceClass: 'from-rose-50 via-white to-amber-50',
    accentClass: 'text-rose-600',
    images: [
      ulsanLocalPhotos.taehwagang,
      ulsanLocalPhotos.uljugun,
      ulsanLocalPhotos.taehwaru,
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  경제: {
    label: '경제 정보',
    toneName: 'Industrial Premium',
    toneDescription: '도시 성장감이 느껴지는 산업 톤',
    badgeClass: 'bg-indigo-50/95 text-indigo-700 border border-indigo-200',
    overlayClass: 'from-indigo-950/72 via-slate-900/28 to-transparent',
    surfaceClass: 'from-indigo-50 via-white to-slate-50',
    accentClass: 'text-indigo-600',
    images: [
      ulsanLocalPhotos.industry,
      ulsanLocalPhotos.port,
      ulsanLocalPhotos.city,
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  생활: {
    label: '생활 정보',
    toneName: 'Clean Urban',
    toneDescription: '깔끔하고 실용적인 도시 라이프 톤',
    badgeClass: 'bg-sky-50/95 text-sky-700 border border-sky-200',
    overlayClass: 'from-sky-950/72 via-slate-900/24 to-transparent',
    surfaceClass: 'from-sky-50 via-white to-cyan-50',
    accentClass: 'text-sky-600',
    images: [
      ulsanLocalPhotos.city,
      ulsanLocalPhotos.taehwaru,
      ulsanLocalPhotos.taehwagang,
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  행사: {
    label: '행사·축제',
    toneName: 'Festival Energy',
    toneDescription: '화려하고 생동감 있는 페스티벌 톤',
    badgeClass: 'bg-amber-50/95 text-amber-700 border border-amber-200',
    overlayClass: 'from-amber-950/72 via-fuchsia-950/24 to-transparent',
    surfaceClass: 'from-amber-50 via-white to-orange-50',
    accentClass: 'text-amber-600',
    images: [
      ulsanLocalPhotos.banner,
      ulsanLocalPhotos.ganjeolgot,
      ulsanLocalPhotos.taehwagang,
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  명소: {
    label: '명소·관광',
    toneName: 'Nature Scenic',
    toneDescription: '울산 자연과 전망이 살아있는 여행 톤',
    badgeClass: 'bg-emerald-50/95 text-emerald-700 border border-emerald-200',
    overlayClass: 'from-emerald-950/72 via-teal-900/24 to-transparent',
    surfaceClass: 'from-emerald-50 via-white to-teal-50',
    accentClass: 'text-emerald-600',
    images: [
      ulsanLocalPhotos.ganjeolgot,
      ulsanLocalPhotos.taehwagang,
      ulsanLocalPhotos.bangudae,
      ulsanLocalPhotos.uljugun,
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1400',
    ],
  },
};

const themedPools = [
  {
    keywords: ['elderly', '어르신', '노인', '돌봄', 'silver', 'senior', '요양'],
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1573497619113-df48447c4c7c?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1581579138222-26270425cc3b?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['job', '일자리', '사업', '취업'],
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['emergency', '긴급', '지원금', '위기'],
    images: [
      'https://images.unsplash.com/photo-1541194577141-afc712e7003a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['child', '아동', '출산', '육아', '아이', 'pregnant', 'postpartum', '임산부', 'baby', 'mom', '엄마'],
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['transport', '교통비', 'bus', '버스', '청소년', '지하철', '교통'],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1556122071-e404be7457cc?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1494510681037-fe969a716116?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['mom', '산후조리', '산후', '임산부', '맘', '출산'],
    images: [
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['education', '교육', 'school', '학교', 'learning', '배움', 'voucher', '바우처'],
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['youth', '청년', 'startup', 'rent', 'savings', 'job', '창업', '취업', '일자리'],
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['market', '시장', '소상공인', '전통시장', '가게', 'shop'],
    images: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['waste', '폐기물', 'bulky', '재활용', '분리배출', '쓰레기', '환경'],
    images: [
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['civil', '민원', 'complaint', 'passport', '여권', '행정', '신고'],
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['safety', '안전', 'disaster', '재난', 'fire', '소방', '지진'],
    images: [
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['culture', '문화', 'art', '예술', 'library', '도서관', 'book', '책', 'sports', '스포츠', '체육'],
    images: [
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['pet', '반려동물', 'dog', '강아지', 'cat', '고양이', '동물보호'],
    images: [
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['housing', '주거', 'apartment', '아파트', '청약', '이사', 'house', '집'],
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['disabled', '장애인', 'barrier'],
    images: [
      'https://images.unsplash.com/photo-1508847154043-be5407fbedca?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['voucher', '이용권', '평생교육', '교육비'],
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['pharmacy', '약국', 'emergency', '응급', 'hospital', '병원', '건강검진', 'health'],
    images: [
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['bus', '버스', 'traffic', '교통', 'taxi', '택시', '마중'],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['wifi', 'digital', '앱', '버스', '교통'],
    images: [
      ulsanLocalPhotos.taehwaru,
      ulsanLocalPhotos.city,
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['festival', 'event', '행사', '축제', 'concert', 'performance', '공연', 'exhibition', '전시'],
    images: [
      ulsanLocalPhotos.banner,
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['night', '야경', 'night view', 'light', '빛'],
    images: [
      'https://images.unsplash.com/photo-1514525253344-f814d0c9e58f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['ganjeolgot', '간절곶', 'sunrise'],
    images: [
      ulsanLocalPhotos.ganjeolgot,
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['daewangam', '대왕암', 'beach', '해변', 'seuldo', '슬도'],
    images: [
      ulsanLocalPhotos.banner,
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['whale', '고래', 'jangsaengpo', '장생포'],
    images: [
      ulsanLocalPhotos.banner,
      'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['alps', '영남알프스', 'mountain', '산', 'hiking', '등산'],
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['taehwagang', '태화강', 'park', '공원', 'picnic', '십리대숲', 'bamboo'],
    images: [ulsanLocalPhotos.taehwagang, ulsanLocalPhotos.taehwaru, ulsanLocalPhotos.uljugun],
  },
  {
    keywords: ['taehwaru', '태화루', 'pavilion'],
    images: [ulsanLocalPhotos.taehwaru],
  },
  {
    keywords: ['museum', 'art', '문화', '전시', 'bangudae', '반구대', '암각화', 'alps', '영남알프스'],
    images: [ulsanLocalPhotos.bangudae, ulsanLocalPhotos.uljugun, ulsanLocalPhotos.ganjeolgot],
  },
];

// ── 로컬 카테고리 이미지 (prebuild 시 generate-local-image-cache.mjs가 생성)
const LOCAL_IMAGES: Record<string, string[]> = localImagesCache as Record<string, string[]>;

// ── 유틸 ───────────────────────────────────────────────────────────────────
function uniqueStrings(items: Array<string | null | undefined>) {
  return Array.from(new Set(items.filter(Boolean) as string[]));
}

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (Math.imul(31, h) + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

// ── 공개 API ───────────────────────────────────────────────────────────────
export function getCategoryTheme(category: string) {
  return categoryThemes[category] || categoryThemes['생활'];
}

export function getCategoryLabel(category: string) {
  return getCategoryTheme(category).label;
}

export function getPostVisuals(
  post: Pick<PostMeta, 'title' | 'slug' | 'summary' | 'category' | 'tags' | 'thumbnailUrl'>,
) {
  const theme = getCategoryTheme(post.category);
  const hash = slugHash(post.slug);

  // ⓪ 본문에 이미지가 직접 포함되어 있다면 (thumbnailUrl) → 최우선 사용
  if (post.thumbnailUrl && post.thumbnailUrl.startsWith('http')) {
    return {
      heroImage: post.thumbnailUrl,
      fallbackImage: theme.images[hash % theme.images.length],
      galleryImages: theme.images.slice(0, 6),
      categoryLabel: theme.label,
      toneName: theme.toneName,
      toneDescription: theme.toneDescription,
      badgeClass: theme.badgeClass,
      overlayClass: theme.overlayClass,
      surfaceClass: theme.surfaceClass,
      accentClass: theme.accentClass,
    };
  }

  // ① 로컬 폴더에 이미지가 있으면 → 로컬 이미지만 순환
  const localImages = LOCAL_IMAGES[post.category] ?? [];
  if (localImages.length > 0) {
    const len = localImages.length;
    const idx = hash % len;
    return {
      heroImage: localImages[idx],
      fallbackImage: localImages[(idx + 1) % len],
      galleryImages: Array.from({ length: Math.min(6, len) }, (_, i) => localImages[(idx + i) % len]),
      categoryLabel: theme.label,
      toneName: theme.toneName,
      toneDescription: theme.toneDescription,
      badgeClass: theme.badgeClass,
      overlayClass: theme.overlayClass,
      surfaceClass: theme.surfaceClass,
      accentClass: theme.accentClass,
    };
  }

  // ② 로컬 폴더 비어있으면 → 키워드 매칭 최우선
  const searchText = [post.slug, post.title, post.summary, ...(post.tags || [])].join(' ').toLowerCase();
  
  // 키워드 매칭된 이미지들만 먼저 모음 (역순으로 검색하여 더 구체적인 키워드가 우선되도록 함)
  const matchedPools = [...themedPools].reverse().filter(item => 
    item.keywords.some(kw => searchText.includes(kw.toLowerCase()))
  );
  
  // 가장 먼저 매칭된(가장 구체적인) 풀의 이미지를 최우선으로 사용
  const bestMatchedImages = matchedPools.length > 0 ? matchedPools[0].images : [];
  const allMatchedImages = matchedPools.flatMap(item => item.images);

  // 가장 구체적인 매칭 이미지를 앞에 두고, 나머지를 뒤에 붙임
  const pool = allMatchedImages.length > 0 
    ? uniqueStrings([...bestMatchedImages, ...allMatchedImages])
    : uniqueStrings(theme.images);
    
  const len = pool.length;
  // 중복 방지를 위해 구체적인 매칭이 있더라도 해시값을 사용하여 서로 다른 이미지가 나오도록 함
  const idx = len > 0 ? hash % len : 0;

  return {
    heroImage: pool[idx] || pool[0] || '',
    fallbackImage: pool[(idx + 1) % Math.max(len, 1)] || pool[idx] || '',
    galleryImages: pool.length > 0
      ? Array.from({ length: Math.min(6, pool.length) }, (_, i) => pool[(idx + i) % pool.length])
      : [],
    categoryLabel: theme.label,
    toneName: theme.toneName,
    toneDescription: theme.toneDescription,
    badgeClass: theme.badgeClass,
    overlayClass: theme.overlayClass,
    surfaceClass: theme.surfaceClass,
    accentClass: theme.accentClass,
  };
}

