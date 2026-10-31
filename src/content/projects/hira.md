---
title: 심평원 고시 알리미
short: 고시 알리미
order: 1
started: 2026-09-02
language: Python
stack: [Python, Playwright, SQLite, Telegram]
status: 무료나눔
summary: 심평원 RSS, 업무포털, e-Form 공지를 5분마다 확인해 새 글만 텔레그램으로 보냅니다.
tags: [텔레그램, telegram, 심평원, hira, 크롤러, 공지, 병원, ubuntu, cron]
repo: https://github.com/heetae2007/Hira_Web_Crawler
screen: telegram
cover: board
career:
  screen: board
  note: 심평원 RSS를 확인하는 스크립트로 시작해, 9월 22일에는 요양기관 업무포털 메인 공지와 e-Form 공지사항까지 넓혔습니다. 새 공지는 텔레그램으로 받습니다.
parts:
  - title: e-Form 공지 수집
    meta: 심평원 고시 알리미의 한 부분
    screen: board
    tags: [e-form, 공지, 크롤러]
    body: e-Form 공지사항은 첫 페이지 20건을 기본으로 봅니다. 설정을 바꾸면 10페이지까지 넓힐 수 있습니다. 2026년 9월 22일, 1페이지 20건과 2페이지까지 40건 조회를 확인했습니다.
    facts:
      - 조회 간격은 기본 300초, 가장 짧게는 60초입니다. 요청 사이에는 2초를 쉽니다.
      - 빈 목록이나 형식 변경은 실패로 기록하고, 직전 목록을 그대로 둡니다.
---

심평원 고시와 공지는 RSS, 요양기관 업무포털, e-Form 세 곳에 따로 올라옵니다. 놓치지 않으려면 세 곳을 계속 새로고침해야 했습니다. 이제 서버가 5분마다 세 곳을 확인하고, 처음 보는 공지만 텔레그램으로 보냅니다.

- 로그인하지 않은 Playwright 브라우저로 업무포털과 e-Form을 조회합니다. 인증서나 쿠키를 코드에 넣지 않습니다.
- 게시글 ID로 새 글을 판단합니다. 제목만 고친 글은 다시 알리지 않습니다.
- 전송에 성공한 뒤에만 발송 완료를 저장합니다. 실패한 알림은 다음 주기에 다시 보냅니다.
- cron이 5분마다 실행하고, flock으로 겹쳐 실행되는 것을 막습니다.
