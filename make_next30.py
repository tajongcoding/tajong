from pathlib import Path
from datetime import date, timedelta

posts_dir = Path("src/content/posts")
posts_dir.mkdir(parents=True, exist_ok=True)

rows = [
    ("life", "parking-fine-guide", "울산 공영주차장과 주정차 과태료 확인 방법", "생활 정보"),
    ("life", "bulky-waste-guide", "울산 대형폐기물 인터넷 신고 방법", "생활 정보"),
    ("life", "lost-item-guide", "울산 분실물 찾는 가장 빠른 방법", "생활 정보"),
    ("life", "library-card-guide", "울산 도서관 회원증 발급과 이용 방법", "생활 정보"),
    ("life", "water-bill-guide", "울산 수도요금 조회와 납부 방법", "생활 정보"),
    ("welfare", "disabled-support-guide", "울산 장애인 지원 서비스 한눈에 보기", "복지 정보"),
    ("welfare", "caregiver-support-guide", "울산 가족돌봄 지원 제도 정리", "복지 정보"),
    ("welfare", "emergency-welfare-guide", "울산 긴급복지 지원 신청 방법", "복지 정보"),
    ("welfare", "childcare-support-guide", "울산 보육·양육 지원금 정리", "복지 정보"),
    ("welfare", "medical-aid-guide", "울산 의료급여와 건강 지원 제도 안내", "복지 정보"),
    ("economy", "local-currency-guide", "울산 지역 소비 혜택과 지역경제 활용법", "경제 정보"),
    ("economy", "job-training-guide", "울산 직업훈련 프로그램 신청 가이드", "경제 정보"),
    ("economy", "youth-job-guide", "울산 청년 취업 지원 제도 정리", "경제 정보"),
    ("economy", "smallbiz-rent-guide", "울산 소상공인 임차료 지원 정보", "경제 정보"),
    ("economy", "export-support-guide", "울산 수출기업 지원 사업 정리", "경제 정보"),
    ("place", "night-view-guide", "울산 야경 명소 추천 가이드", "명소·관광"),
    ("place", "family-picnic-guide", "울산 가족 피크닉 가기 좋은 곳", "명소·관광"),
    ("place", "cafe-street-guide", "울산 분위기 좋은 카페거리 추천", "명소·관광"),
    ("place", "museum-guide", "울산 박물관과 전시관 나들이 가이드", "명소·관광"),
    ("place", "seaside-drive-guide", "울산 바다 드라이브 코스 추천", "명소·관광"),
    ("event", "weekend-market-guide", "울산 주말 장터와 플리마켓 즐기기", "행사·축제"),
    ("event", "spring-festival-guide", "울산 봄 축제 일정과 즐기는 법", "행사·축제"),
    ("event", "food-event-guide", "울산 먹거리 행사 체크 포인트", "행사·축제"),
    ("event", "book-fair-guide", "울산 도서 행사와 북페어 소식 정리", "행사·축제"),
    ("event", "youth-event-guide", "울산 청년 대상 행사 모아보기", "행사·축제"),
    ("ulsan", "history-walk-guide", "울산 역사 산책 코스 추천", "울산 아시나요"),
    ("ulsan", "river-story-guide", "울산 강과 하천 이야기", "울산 아시나요"),
    ("ulsan", "bridge-story-guide", "울산 다리와 도시 연결 이야기", "울산 아시나요"),
    ("ulsan", "port-story-guide", "울산 항구와 산업도시의 성장 이야기", "울산 아시나요"),
    ("ulsan", "hidden-spot-guide", "울산 숨은 명소 5곳 추천", "울산 아시나요"),
]

template = """---
title: "{title}"
pubDate: "{pubDate}"
category: "{category}"
summary: "{summary}"
draft: false
---

## 왜 중요한가

{title}는 울산 시민이 실제 생활에서 자주 찾는 정보입니다. 필요한 시점에 빠르게 확인하면 시간과 비용을 줄이는 데 도움이 됩니다.

## 핵심 내용

- 신청 대상과 이용 조건을 먼저 확인합니다.
- 온라인 또는 방문 절차를 미리 준비합니다.
- 운영 시간, 필요 서류, 비용 여부를 함께 확인합니다.

## 이렇게 활용하면 좋습니다

울산365 독자는 이 글을 통해 핵심 절차를 빠르게 확인하고, 상황에 맞는 다음 행동을 바로 정할 수 있습니다. 실제 신청 전에는 반드시 관련 기관의 최신 공지를 다시 확인하세요.
"""

start_date = date(2026, 3, 31)

for idx, (group, slug, title, category) in enumerate(rows, start=31):
    pub = start_date + timedelta(days=idx - 31)
    filename = f"{pub.isoformat()}-{group}-{idx:02d}-{slug}.md"
    path = posts_dir / filename
    if path.exists():
        continue
    path.write_text(
        template.format(
            title=title,
            pubDate=pub.isoformat(),
            category=category,
            summary=title,
        ),
        encoding="utf-8",
    )

print("신규 30개 생성 완료")
print("현재 파일 수:", len(list(posts_dir.glob("*.md"))))
