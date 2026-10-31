---
title: 시트에서 노션으로
short: 노션 동기화
order: 2
started: 2026-10-01
language: Apps Script
stack: [Google Apps Script, Notion API]
status: 무료나눔
summary: 탭마다 흩어진 병원 요청을 티켓번호 하나로 모아 노션 DB에 맞춥니다.
tags: [노션, notion, 구글, 시트, google sheet, apps script, javascript, 티켓, 병원, 동기화]
repo: https://github.com/heetae2007/GoogleSheet_Notion_Appscript
screen: sheet
cover: notion
career:
  note: 월별 탭에 흩어진 병원 요청 티켓을 노션 데이터베이스 하나로 모으는 Apps Script를 만들었습니다.
parts:
  - title: 동기화된 노션 DB
    meta: 시트에서 노션으로의 결과
    screen: notion
    tags: [노션, notion, 데이터베이스]
    body: 시트에 흩어져 있던 티켓이 노션에서는 한 표로 보입니다. 상태별로 거르고, 병원별로 묶어 볼 수 있습니다.
---

병원 요청 티켓은 월별 탭에 나뉘어 쌓입니다. 탭이 늘수록 전체를 한 번에 보기 어려웠습니다. 이 스크립트는 모든 탭을 돌며 티켓을 모아 노션 데이터베이스 하나로 맞춥니다.

- 설정, 공통, Sheet1, 요약 탭은 건너뜁니다.
- 2행을 머리글로 읽고 접수일시, 티켓번호, 요청병원 열을 이름으로 찾습니다. 열 순서가 바뀌어도 동작합니다.
- 티켓번호를 기준으로 같은 티켓을 하나로 합칩니다.
- 노션 토큰은 코드에 두지 않고 따로 불러옵니다.
