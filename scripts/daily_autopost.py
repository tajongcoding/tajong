from pathlib import Path
from datetime import date
import random
import re

POSTS_DIR = Path("src/content/posts")
POSTS_DIR.mkdir(parents=True, exist_ok=True)

today = date.today().isoformat()

topics = [
    ("life", "생활", "울산 공영주차장 이용 전 꼭 확인할 것", "울산 공영주차장 요금과 이용 팁을 정리했습니다."),
    ("life", "생활", "울산 야간약국 찾을 때 가장 빠른 방법", "급할 때 바로 찾을 수 있는 울산 야간약국 확인법입니다."),
    ("welfare", "복지", "울산 복지 지원금, 신청 전에 꼭 확인할 기준", "울산 시민이 자주 놓치는 지원금 기준을 정리했습니다."),
    ("welfare", "복지", "울산 어르신 복지 혜택, 지금 확인해야 할 내용", "울산 어르신 대상 복지 혜택 핵심만 정리했습니다."),
    ("economy", "경제", "울산 소상공인 지원정책, 놓치기 쉬운 포인트", "울산 소상공인이 챙겨야 할 지원정책 요약입니다."),
    ("economy", "경제", "울산 청년 지원사업, 지금 보기 좋은 핵심 정리", "울산 청년 대상 지원사업 핵심만 모았습니다."),
    ("event", "행사", "울산 이번 주 행사, 가기 전 체크할 것", "울산 이번 주 행사 일정과 방문 팁을 정리했습니다."),
    ("event", "행사", "울산 가족 나들이 행사, 주말 전에 볼 정리", "가족과 함께 가기 좋은 행사 정보를 모았습니다."),
    ("ulsan", "울산 아시나요", "울산이 특별한 도시로 불리는 이유", "울산만의 특징과 매력을 쉽게 정리했습니다."),
    ("ulsan", "울산 아시나요", "울산 현지인이 좋아하는 숨은 장소 이야기", "울산 시민들이 좋아하는 장소를 중심으로 정리했습니다."),
]

used_titles = set()
for p in POSTS_DIR.glob("*.md"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r'^title:\s*(.+)$', text, flags=re.M)
    if m:
        used_titles.add(m.group(1).strip().strip('"'))

random.shuffle(topics)
picked = []
for item in topics:
    if item[2] not in used_titles:
        picked.append(item)
    if len(picked) == 2:
        break

if len(picked) < 2:
    picked = topics[:2]

existing_nums = []
for p in POSTS_DIR.glob("*.md"):
    m = re.search(r'-(\d+)-[^/]+\.md$', p.name)
    if m:
        existing_nums.append(int(m.group(1)))

next_num = max(existing_nums) + 1 if existing_nums else 1

def slugify(s: str) -> str:
    rep = {
        "울산": "ulsan",
        "공영주차장": "public-parking",
        "야간약국": "night-pharmacy",
        "복지 지원금": "welfare-support",
        "어르신 복지 혜택": "senior-welfare",
        "소상공인 지원정책": "smallbiz-support",
        "청년 지원사업": "youth-support",
        "이번 주 행사": "weekly-event",
        "가족 나들이 행사": "family-event",
        "특별한 도시": "special-city",
        "숨은 장소": "hidden-spots",
        "이용 전 꼭 확인할 것": "must-check",
        "가장 빠른 방법": "fast-guide",
        "놓치기 쉬운 포인트": "key-points",
        "핵심 정리": "summary",
        "이야기": "story",
        "이유": "reasons",
    }
    out = s
    for k, v in rep.items():
        out = out.replace(k, v)
    out = re.sub(r'[^a-zA-Z0-9\- ]', '', out)
    out = out.lower().strip().replace(" ", "-")
    out = re.sub(r'-+', '-', out)
    return out[:60].strip("-") or "post"

template = """---
title: {title}
pubDate: "{pubDate}"
summary: "{summary}"
category: {category}
tags:
  - 울산
  - {category}
  - 자동생성
---

![{title} 1](https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1400)
![{title} 2](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1400)
![{title} 3](https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80&w=1400)
![{title} 4](https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1400)
![{title} 5](https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1400)
![{title} 6](https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1400)

## 핵심 요약
{title}에 대해 울산 시민 기준으로 꼭 알아야 할 내용만 먼저 정리했습니다.

## 이런 분께 도움됩니다
- 울산에서 관련 정보를 빠르게 찾고 싶은 분
- 신청 조건이나 이용 방법이 헷갈리는 분
- 방문 전 핵심만 먼저 확인하고 싶은 분

## 준비할 것
- 본인 확인 정보
- 운영 시간 및 장소 확인
- 공식 안내 페이지 재확인

## 이용 방법
1. 공식 안내를 먼저 확인합니다.
2. 대상 조건을 점검합니다.
3. 필요한 준비물을 챙깁니다.
4. 온라인 또는 현장 이용을 진행합니다.

## 놓치기 쉬운 포인트
- 운영 기준은 시기별로 달라질 수 있습니다.
- 최신 공지 여부를 반드시 다시 확인하는 것이 좋습니다.

## 마무리
이 글은 울산 시민이 실제로 자주 찾는 내용을 기준으로 정리했습니다. 세부 기준은 관련 기관의 최신 공지를 함께 확인하세요.
"""

created = 0
for group, category, title, summary in picked:
    num = next_num
    next_num += 1
    slug = slugify(title)
    filename = f"{today}-{group}-{num:02d}-{slug}.md"
    path = POSTS_DIR / filename
    while path.exists():
        num = next_num
        next_num += 1
        filename = f"{today}-{group}-{num:02d}-{slug}-{num}.md"
        path = POSTS_DIR / filename

    path.write_text(
        template.format(
            title=title,
            pubDate=today,
            summary=summary,
            category=category,
        ),
        encoding="utf-8",
    )
    print(f"created: {path}")
    created += 1

print(f"총 생성: {created}개")
