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
  ["*/5 * * * *", "hira_watch.py"],
  ["0 9 * * 1-5", "sheet_to_notion.gs"],
  ["*/10 * * * *", "zendesk_triage.py"],
];

export const cronLog = [
  ["09:00", "✓", "티켓 14건 → notion"],
  ["09:05", "✓", "새 고시 2건 → telegram"],
  ["09:10", "·", "분류 대기 3건"],
];

export const about = [
  "ezcaretech 클라우드 HIS 서비스 운영/개발팀에서 일하고 있습니다. 매일 같은 화면을 반복해서 확인하는 일을 보면, 자동화로 덜어낼 방법부터 찾습니다.",
  "심평원 고시 확인, 시트에 흩어진 티켓 정리, 반복되는 문의 분류처럼 작지만 매일 쌓이는 업무를 코드로 옮기는 것을 좋아합니다.",
];

export const skills = [
  { group: "Languages", items: ["Python", "C#", "JavaScript"] },
  { group: "Frameworks", items: ["Ember.js", "Google Apps Script"] },
  { group: "Cloud & Infra", items: ["AWS", "GCP", "Ubuntu", "cron"] },
  { group: "Tools & APIs", items: ["Playwright", "Telegram Bot API", "Notion API", "Zendesk API", "Git"] },
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
    title: "심평원 고시 알리미",
    summary:
      "건강보험심사평가원(HIRA)의 RSS, 요양기관 업무포털, e-Form 공지사항을 5분마다 확인해 새 글만 텔레그램으로 알려주는 자동화 서버.",
    stack: ["Python", "Playwright", "SQLite", "Telegram"],
    repo: "https://github.com/heetae2007/Hira_Web_Crawler",
  },
  {
    order: "02",
    title: "시트에서 노션으로",
    summary:
      "월별 탭에 흩어진 병원 요청 티켓을 티켓번호 기준으로 모아 노션 데이터베이스 하나로 동기화하는 Google Apps Script.",
    stack: ["Google Apps Script", "Notion API"],
    repo: "https://github.com/heetae2007/GoogleSheet_Notion_Appscript",
  },
  {
    order: "03",
    title: "Zendesk 자동화",
    summary:
      "병원에서 들어오는 Zendesk 티켓을 분류하고 반복 문의를 자동으로 태깅해, 사람이 답해야 할 티켓에 시간을 쓰도록 만드는 중입니다.",
    stack: ["Python", "Zendesk API"],
    wip: true,
    repo: "https://github.com/heetae2007/zendesk_auto",
  },
];
