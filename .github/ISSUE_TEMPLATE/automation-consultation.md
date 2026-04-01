---
name: 자동화 전략 컨설팅
about: 타종 프로젝트의 자동화 구현 단계별 논의 및 진행 상황 추적
title: "[자동화] "
labels: automation, consultation
assignees: tajongcoding
---

## 📋 현재 상태 (Current Status)

> 이 이슈에서 다루는 자동화 단계와 현재 진행 상황을 간략히 설명하세요.

- **담당자**: 
- **시작일**: 
- **목표 완료일**: 
- **현재 단계**: Phase 1 / Phase 2 / Phase 3 (해당 항목 유지)
- **라이센스 상태**: A-EDFW3F (만료: 2026.04.30)

---

## 🚀 자동화 전략 (Automation Strategy)

### Phase 1: Make.com 활용 (1-2주) — 수동 작업 70% 절감

**목표:** 반복 작업 자동화로 주 6-8시간 절감

#### Make.com Workflow 구성
```
1. 콘텐츠 기획 (Notion/Google Sheet 입력)
   ↓
2. AI 프롬프트 자동 생성 (Claude)
   - 10개 이미지 프롬프트
   - 10개 자막 문구
   ↓
3. Webhook → 브루(Brew)로 전송
   - 배치 이미지 생성 요청
   ↓
4. 메타데이터 자동 생성
   - 썸네일 3개 (Canva API)
   - 제목 3개 / 설명 600자
   - 해시태그 10개 / 타임스탬프
   ↓
5. GitHub Issue/PR 자동 생성
   - 진행 상황 추적 (자동 갱신)
```

**예상 효과:**
- 프롬프트 생성: 2시간 → 10분
- 메타데이터 작성: 1시간 → 5분
- 총 절감: **주 6-8시간**

**필요 조건:**
- Make.com 계정 (무료 플랜 가능)
- Claude API 키 (~$20/월)
- Google Sheet 1개 (데이터 입력용)

---

### Phase 2: Python 자동화 + GitHub Actions (2-4주) — 추가 30% 절감

**목표:** 콘텐츠 버전 관리 및 품질 검증 자동화

#### 저장소 구조
```
scripts/
├── batch_prompt_generator.py      # AI 프롬프트 배치 생성
├── metadata_builder.py            # 메타데이터 자동 생성
├── visual_consistency_checker.py  # 이미지 일관성 검증
├── timeline_generator.py          # 타임라인 자동 구성
└── github_issue_reporter.py       # GitHub Issue 자동 생성

.github/workflows/
├── auto-content-create.yml        # 주간 콘텐츠 자동화
├── quality-check.yml              # 품질 검증
├── metadata-sync.yml              # 메타데이터 동기화
└── license-reminder.yml           # 라이센스 만료 알림
```

**예상 효과:**
- 자동 스케줄링 (매주 지정 시간 실행)
- 자동 품질 검증 및 일관성 체크
- GitHub Issue 기반 자동 진행 관리

**필요 조건:**
- GitHub 저장소 ✅ (이미 있음)
- Python 기본 지식
- GitHub Secrets에 API 키 등록

---

### Phase 3: AI 에이전트 생성 (1-2개월) — 90% 자동화

**목표:** 최소 개입으로 콘텐츠 파이프라인 자동 운영

#### 타종 콘텐츠 에이전트 아키텍처
```
Step 1: 입력 분석 에이전트 (Notion DB 주제 읽기)
   ↓
Step 2: 크리에이티브 에이전트 (Claude + 스타일 가이드)
   - 프롬프트 / 자막 / BGM 추천 생성
   ↓
Step 3: 실행 에이전트 (Make.com + API 연동)
   - 브루 작업 전송 / 상태 모니터링 / 오류 재시도
   ↓
Step 4: 품질 검증 에이전트 (비전 AI + 텍스트 분석)
   - 시각적 일관성 / 자막 문법 / 메타데이터 완성도
   ↓
Step 5: 배포 에이전트 (YouTube API)
   - 자동 업로드 / 썸네일 / 메타데이터 / 스케줄링
   ↓
📊 대시보드 (성과 추적)
```

**구현 도구:**
- LangGraph 또는 CrewAI (AI 에이전트 프레임워크)
- FastAPI (Webhook 서버)
- Supabase (데이터베이스)
- GitHub Actions (스케줄링)

---

## ✅ 구현 체크리스트 (Implementation Checklist)

### Phase 1 — Make.com
- [ ] Make.com 계정 생성
- [ ] Google Sheet 데이터 입력 양식 작성
- [ ] Google Sheet ↔ Make.com 연동
- [ ] Claude API 키 등록 및 프롬프트 생성 자동화
- [ ] Webhook → 브루(Brew) 전송 설정
- [ ] 메타데이터 자동 생성 (썸네일 / 제목 / 해시태그)
- [ ] GitHub Issue 자동 생성 연동
- [ ] 테스트 콘텐츠 1-2개로 검증 완료

### Phase 2 — Python + GitHub Actions
- [ ] `batch_prompt_generator.py` 작성
- [ ] `metadata_builder.py` 작성
- [ ] `visual_consistency_checker.py` 작성
- [ ] `timeline_generator.py` 작성
- [ ] `github_issue_reporter.py` 작성
- [ ] `.github/workflows/auto-content-create.yml` 설정
- [ ] `.github/workflows/quality-check.yml` 설정
- [ ] `.github/workflows/metadata-sync.yml` 설정
- [ ] `.github/workflows/license-reminder.yml` 설정
- [ ] GitHub Secrets에 API 키 등록
- [ ] Slack/Discord 알림 연동
- [ ] 통합 테스트 완료

### Phase 3 — AI 에이전트
- [ ] CrewAI 또는 LangGraph 학습 및 환경 구성
- [ ] 입력 분석 에이전트 구현
- [ ] 크리에이티브 에이전트 구현
- [ ] 실행 에이전트 구현
- [ ] 품질 검증 에이전트 구현
- [ ] 배포 에이전트 구현
- [ ] FastAPI Webhook 서버 구축
- [ ] Supabase 데이터베이스 연결
- [ ] 성과 추적 대시보드 구축
- [ ] 전체 파이프라인 통합 테스트

---

## 📅 타임라인 및 마일스톤 (Timeline and Milestones)

| 기간 | 단계 | 목표 | 예상 절감 |
|------|------|------|-----------|
| Week 1-2 | Phase 1 (Make.com) | 반복 작업 자동화 시작 | 주 6-8시간 (~20%) |
| Week 3-4 | Phase 2 (GitHub Actions) | 버전 관리 + 품질 검증 | 추가 30% |
| Month 2+ | Phase 3 (AI 에이전트) | 거의 완전 자동 운영 | 총 80-90% |

### 마일스톤
- [ ] **M1**: Make.com 워크플로우 첫 실행 성공
- [ ] **M2**: GitHub Actions 자동 스케줄링 첫 실행
- [ ] **M3**: AI 에이전트 파이프라인 첫 엔드투엔드 실행
- [ ] **M4**: 완전 자동화 운영 1개월 달성

---

## 💰 비용 추정 (Cost Estimation)

| 항목 | 플랜 | 월 비용 |
|------|------|---------|
| Make.com | 유료 (월 1,000 작업 이상) | $10+ |
| Claude API | ~1M 토큰/월 | $20 |
| GitHub Actions | 공개 저장소 무료 | 무료 |
| Notion API | 추가 요금 없음 | 무료 |
| **총합** | | **$30-50/월** |

> 기존 브루(Brew) 라이센스 대비 매우 저렴한 비용으로 자동화 가능

---

## 📊 진행 상황 추적 (Progress Tracking)

### 현재 진행률
- Phase 1: `□□□□□□□□□□` 0%
- Phase 2: `□□□□□□□□□□` 0%
- Phase 3: `□□□□□□□□□□` 0%

### 메모 / 이슈 / 논의

> 진행 중 발생한 문제, 결정 사항, 추가 논의 내용을 댓글로 기록하세요.

---

## 📎 관련 문서

- [자동화 전략 컨설팅 기록](../../docs/AUTOMATION_CONSULTATION_2026-04-01.md)
- [자동화 전략 문서](../../AUTOMATION_STRATEGY.md)
- [Make.com 워크플로우 설정](../../MAKE_WORKFLOW_SETUP.md)
- [워크플로우 가이드](../../WORKFLOW.md)
