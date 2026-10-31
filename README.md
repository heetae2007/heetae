# 감자마켓

개발자 감자(heetae2007)의 개인 프로젝트를 올리는 사이트입니다.
https://heetae2007.github.io/heetae/

[Astro](https://astro.build)로 만들고, `main`에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.

## 로컬에서 보기

```bash
npm install
npm run dev        # http://localhost:4321/heetae/
npm run build      # dist/ 에 정적 HTML 생성
npm run preview    # 빌드 결과 미리보기
```

## 프로젝트 추가하기

`src/content/projects/` 에 Markdown 파일 하나를 만들면 됩니다. 처음 화면 매물 목록, 프로젝트 페이지, 경력 타임라인, 검색, 매물 수가 모두 자동으로 바뀝니다.

```markdown
---
title: 새 프로젝트 이름
short: 짧은 이름          # 경력 포스터에 크게 쓰는 이름
order: 5                 # 목록 순서 (작을수록 위)
started: 2026-11-15
language: Python
stack: [Python, FastAPI]
status: 만드는 중         # 무료나눔, 만드는 중 …
summary: 목록에 보이는 한 줄 설명입니다.
tags: [검색에, 걸릴, 단어]
repo: https://github.com/heetae2007/저장소이름
screen: zendesk          # 화면 조각: telegram, board, sheet, notion, zendesk, v1, github, poll
cover: zendesk           # (선택) 목록에 쓰는 화면, 없으면 screen
career:
  note: 경력 페이지에 쓰는 설명입니다.
---

프로젝트 페이지 본문입니다. 문단과 목록을 쓸 수 있습니다.

- 사실 하나
- 사실 둘
```

새 화면 조각이 필요하면 `src/components/screens/` 에 `.astro` 파일을 만들고 `src/components/Screen.astro` 와 `src/content.config.ts` 의 `screen` 목록에 이름을 추가합니다.

## 경력(회사) 추가하기

`src/data/career.json` 에 항목을 넣으면 경력 페이지에 "일한 곳" 구역이 나타납니다. 비어 있으면 구역이 보이지 않습니다.

```json
[
  {
    "period": "2025 – 지금",
    "company": "회사 이름",
    "role": "직무",
    "summary": "한 줄 설명",
    "did": ["한 일 하나", "한 일 둘"]
  }
]
```

## 폴더

```
src/content/projects/   프로젝트 (Markdown 하나 = 프로젝트 하나)
src/data/career.json    회사 경력
src/pages/              페이지 5개
src/components/         메뉴, 푸터, 검색, 매물 배치, 상세 행, 화면 조각
public/css, public/js   스타일과 스크립트 (그대로 복사됨)
```
