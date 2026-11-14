export const profile = {
  name: "채희태",
  englishName: "Heetae Chae",
  handle: "heetae2007",
  title: "Cloud HIS 운영/개발자 @ ezcaretech",
  tagline: "병원 행정의 반복 업무를 코드로 옮기는 개발자입니다.",
  github: "https://github.com/heetae2007",
  email: "heetae2007@gmail.com",
};

// 히어로 오른쪽 터미널에 보이는 crontab과 실행 로그
export const cron = [
  ["* * * * *", "zendesk_auto.py"],
  ["0 9 1 * *", "edi_master_sync.js"],
  ["*/5 * * * *", "hira_watch.py"],
];

export const cronLog = [
  ["09:00", "·", "검토 필요 3건"],
  ["09:05", "✓", "수가마스터 갱신 완료"],
  ["09:10", "✓", "새 고시 2건 → telegram"],
];

export const about = [
  "ezcaretech 클라우드 HIS 서비스 운영/개발팀에서 일하고 있습니다. 매일 같은 화면을 반복해서 확인하는 일을 보면, 자동화로 덜어낼 방법부터 찾습니다.",
  "심평원 고시 확인, 반복되는 고객 문의 분류, 수가 코드 검수처럼 작지만 매일 쌓이는 업무를 코드로 옮기는 것을 좋아합니다.",
];

export const skills = [
  { group: "Languages", items: ["Python", "C#", "JavaScript"] },
  { group: "Frameworks", items: ["FastAPI", "Node.js", "Ember.js"] },
  { group: "Cloud & Infra", items: ["AWS", "GCP", "Ubuntu", "cron"] },
  { group: "Tools & APIs", items: ["Playwright", "Telegram Bot API", "Zendesk API", "Claude API", "MySQL", "Git"] },
];

export const experience = [
  {
    period: "2026.09 — 현재",
    org: "ezcaretech",
    role: "Cloud HIS Service Operation & Development",
    summary: "클라우드 기반 병원정보시스템(HIS)의 운영과 개발을 담당합니다.",
  },
];

export const education = [
  {
    period: "졸업",
    org: "선린인터넷고등학교",
    role: "정보보호과",
  },
];

export const projects = [
  {
    order: "01",
    title: "고객문의 응대 자동화 (Zendesk)",
    summary:
      "신규 Zendesk 문의를 1분마다 조회해 Claude로 요약·파트·세부업무를 분류하고, 기준표에 따라 개발 담당자와 당일 PIS 담당자를 정해 텔레그램으로 알려주는 자동 접수 도구.",
    stack: ["Python", "FastAPI", "Claude", "Zendesk API"],
    repo: "https://github.com/heetae2007/zendesk_auto",
  },
  {
    order: "02",
    title: "수가 속성 자동분류 (EDI코드 분류 점검)",
    summary:
      "병원 AS-IS 수가 엑셀을 심평원 수가마스터(약 300만 행)와 대조해 행위·약제·치료재료 분류를 점검하고, 원본 서식 그대로 엑셀로 내보내는 도구.",
    stack: ["Node.js", "MySQL", "SheetJS"],
    repo: "https://github.com/heetae2007/edicode_classification",
  },
  {
    order: "03",
    title: "심평원 고시 알리미",
    summary:
      "건강보험심사평가원(HIRA)의 RSS, 요양기관 업무포털, e-Form 공지사항을 5분마다 확인해 새 글만 텔레그램으로 알려주는 자동화 서버.",
    stack: ["Python", "Playwright", "SQLite", "Telegram"],
    repo: "https://github.com/heetae2007/Hira_Web_Crawler",
  },
];
