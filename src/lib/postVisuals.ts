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

const ulsanLocalPhotos = {
  taehwagang: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Shade_Of_Taehwagang_%2871978891%29.jpeg',
  taehwaru: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Ulsan_taehwaru.jpg',
  bangudae: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Bangudae_Petroglyphs_from_Ulsan_%285329613206%29.jpg',
  port: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Port_Terminal_Of_Ulsan.JPG',
  industry: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Hyundai_Heavy_Industries_Ulsan_Shipyard_from_Jujeon_Beacon_Mound_-_2023-07-24.jpg',
  city: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Ulsan_129.30972E_35.52012N.jpg',
  ganjeolgot: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/%EA%B0%84%EC%A0%88%EA%B3%B6%ED%92%8D%EA%B2%BD_-_panoramio.jpg',
};

const categoryThemes: Record<string, CategoryTheme> = {
  복지: {
    label: '복지 정보',
    toneName: 'Warm Care',
    toneDescription: '따뜻한 케어 톤',
    badgeClass: 'bg-rose-50/95 text-rose-700 border border-rose-200',
    overlayClass: 'from-rose-950/72 via-slate-900/28 to-transparent',
    surfaceClass: 'from-rose-50 via-white to-amber-50',
    accentClass: 'text-rose-600',
    images: [
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  경제: {
    label: '경제 정보',
    toneName: 'Industrial Premium',
    toneDescription: '산업 성장 톤',
    badgeClass: 'bg-indigo-50/95 text-indigo-700 border border-indigo-200',
    overlayClass: 'from-indigo-950/72 via-slate-900/28 to-transparent',
    surfaceClass: 'from-indigo-50 via-white to-slate-50',
    accentClass: 'text-indigo-600',
    images: [
      ulsanLocalPhotos.industry,
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  생활: {
    label: '생활 정보',
    toneName: 'Clean Urban',
    toneDescription: '실용적인 도시 톤',
    badgeClass: 'bg-sky-50/95 text-sky-700 border border-sky-200',
    overlayClass: 'from-sky-950/72 via-slate-900/24 to-transparent',
    surfaceClass: 'from-sky-50 via-white to-cyan-50',
    accentClass: 'text-sky-600',
    images: [
      ulsanLocalPhotos.city,
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  행사: {
    label: '행사·축제',
    toneName: 'Festival Energy',
    toneDescription: '생동감 있는 축제 톤',
    badgeClass: 'bg-amber-50/95 text-amber-700 border border-amber-200',
    overlayClass: 'from-amber-950/72 via-fuchsia-950/24 to-transparent',
    surfaceClass: 'from-amber-50 via-white to-orange-50',
    accentClass: 'text-amber-600',
    images: [
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  명소: {
    label: '명소·관광',
    toneName: 'Nature Scenic',
    toneDescription: '자연과 전망 톤',
    badgeClass: 'bg-emerald-50/95 text-emerald-700 border border-emerald-200',
    overlayClass: 'from-emerald-950/72 via-teal-900/24 to-transparent',
    surfaceClass: 'from-emerald-50 via-white to-teal-50',
    accentClass: 'text-emerald-600',
    images: [
      ulsanLocalPhotos.ganjeolgot,
      ulsanLocalPhotos.taehwagang,
    ],
  },
};

const themedPools = [
  {
    keywords: ['elderly', '어르신', '노인', '돌봄', 'silver', 'senior', '요양', 'care'],
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1573497619113-df48447c4c7c?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1581579138222-26270425cc3b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['job', '일자리', '사업', '취업', 'work'],
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['child', '아동', '출산', '육아', '아이', 'pregnant', 'postpartum', '임산부', 'baby', 'mom', '엄마', '산후'],
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['transport', '교통비', 'bus', '버스', '청소년', '지하철', '교통', 'taxi', '택시'],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1556122071-e404be7457cc?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1494510681037-fe969a716116?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['emergency', '긴급', '지원금', '위기', 'support'],
    images: [
      'https://images.unsplash.com/photo-1541194577141-afc712e7003a?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400',
    ],
  },
  {
    keywords: ['education', '교육', 'school', '학교', 'learning', '배움', 'voucher', '바우처'],
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1400',
    ],
  },
];

const LOCAL_IMAGES: Record<string, string[]> = localImagesCache as Record<string, string[]>;

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

  const searchText = [post.slug, post.title, post.summary, ...(post.tags || [])].join(' ').toLowerCase();
  
  // 1. 키워드 매칭 (가장 높은 우선순위)
  const matchedPools = [...themedPools].reverse().filter(item => 
    item.keywords.some(kw => searchText.includes(kw.toLowerCase()))
  );
  
  const bestMatchedImages = matchedPools.length > 0 ? matchedPools[0].images : [];
  const allMatchedImages = matchedPools.flatMap(item => item.images);

  // 2. 테마 기본 이미지 (로컬 폴더 이미지보다 우선)
  const themeImages = theme.images || [];

  // 3. 로컬 폴더 이미지 (가장 낮은 우선순위)
  const localImages = (LOCAL_IMAGES[post.category] ?? []).filter(img => !img.includes('pasted_file'));

  const pool = uniqueStrings([
    ...bestMatchedImages, 
    ...allMatchedImages,
    ...themeImages,
    ...localImages
  ]);
    
  const len = pool.length;
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
