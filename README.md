# heetae.dev

채희태(heetae2007)의 개인 포트폴리오 사이트입니다.
https://heetae2007.github.io/heetae/

React + Vite로 만들고, `main`에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.

## 로컬에서 보기

```bash
npm install
npm run dev        # http://localhost:5173/heetae/
npm run build      # dist/ 에 정적 HTML 생성
npm run preview    # 빌드 결과 미리보기
```

## 내용 수정하기

`src/data/content.js` 하나에 소개, 기술스택, 경력, 프로젝트 내용이 모두 들어있습니다. 이 파일만 고치면 화면에 바로 반영됩니다.
