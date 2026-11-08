import { profile, cron, cronLog, about, skills, experience, education, projects } from "./data/content.js";

const NAV_ITEMS = [
  { href: "#about", label: "소개" },
  { href: "#work", label: "프로젝트" },
  { href: "#skills", label: "기술" },
  { href: "#experience", label: "경력" },
  { href: "#contact", label: "연락처" },
];

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="nav-brand" href="#top">
          <span className="dot" aria-hidden="true" />~/{profile.handle}
        </a>
        <nav>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="hero-grid">
            <div>
              <h1>
                {profile.name}
                <span className="hero-en">{profile.englishName}</span>
              </h1>
              <p className="hero-title">{profile.title}</p>
              <p className="hero-tagline">{profile.tagline}</p>
              <div className="hero-links">
                <a className="pill-link" href={profile.github} target="_blank" rel="noreferrer">
                  github ↗
                </a>
                <a className="pill-link" href={`mailto:${profile.email}`}>
                  email
                </a>
              </div>
            </div>
            <Terminal />
          </div>
          <Ecg />
        </section>

        <Section id="about" title="소개">
          {about.map((p, i) => (
            <p key={i} className="prose">
              {p}
            </p>
          ))}
        </Section>

        <Section id="work" title="만든 것" meta={`${String(projects.length).padStart(2, "0")} projects`}>
          <div className="projects">
            {projects.map((p) => (
              <a key={p.order} className="project-card" href={p.repo} target="_blank" rel="noreferrer">
                <span className="project-order">{p.order}</span>
                <div className="project-body">
                  <div className="project-head">
                    <h3>{p.title}</h3>
                    {p.wip && <span className="badge">진행 중</span>}
                    <span className="project-repo">repo ↗</span>
                  </div>
                  <p>{p.summary}</p>
                  <div className="tags">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section id="skills" title="쓰는 도구">
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.group} className="skills-row">
                <dt>{group.group.toLowerCase()}</dt>
                <dd className="tags tags-filled">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" title="경력">
          <ul className="timeline">
            {[...experience, ...education].map((e) => (
              <li key={e.org + e.period}>
                <span className="timeline-period">{e.period}</span>
                <span className="timeline-body">
                  <strong>{e.org}</strong> — {e.role}
                  {e.summary && <span className="timeline-summary">{e.summary}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <section id="contact" className="contact">
          <p className="contact-title">반복되는 업무가 있다면 알려주세요.</p>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email}
            <span className="blink" aria-hidden="true">
              _
            </span>
          </a>
          <a className="contact-gh" href={profile.github} target="_blank" rel="noreferrer">
            github.com/{profile.handle} ↗
          </a>
          <Ecg period={380} amp={0.6} />
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}

function Section({ id, title, meta, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-head">
        <span className="slashes">//</span> {title}
        <span className="rule" aria-hidden="true" />
        {meta && <span className="section-meta">{meta}</span>}
      </h2>
      {children}
    </section>
  );
}

function Terminal() {
  return (
    <div className="terminal" aria-label="자동화 crontab과 실행 로그">
      <div className="terminal-head">
        <span>$ crontab -l</span>
        <span className="live">
          <span className="dot" aria-hidden="true" />
          live
        </span>
      </div>
      {cron.map(([expr, job]) => (
        <div key={job} className="terminal-line">
          <span className="muted">{expr.padEnd(13, " ")}</span>
          {job}
        </div>
      ))}
      <hr />
      {cronLog.map(([time, mark, msg], i) => (
        <div key={time} className="terminal-line log" style={{ animationDelay: `${i * 1.2}s` }}>
          <span className="muted">{time} </span>
          <span className="accent">{mark} </span>
          {msg}
        </div>
      ))}
      <div className="terminal-line accent">
        $ <span className="blink">▍</span>
      </div>
    </div>
  );
}

// 심전도 파형: 평탄 → P파 → QRS → T파를 period마다 반복합니다. (README 카드와 같은 모양)
function ecgPath(width, y, period, amp) {
  const a = (v) => (v * amp).toFixed(1);
  let d = `M0 ${y}`;
  for (let x = 0; x + period <= width; x += period) {
    d += ` L${x + 70} ${y} q8 ${a(-9)} 16 0 L${x + 96} ${y} l5 ${a(7)} l8 ${a(-46)} l8 ${a(58)} l6 ${a(-19)}`;
    d += ` L${x + 140} ${y} q11 ${a(-14)} 22 0 L${x + period} ${y}`;
  }
  return d + ` L${width} ${y}`;
}

function Ecg({ period = 190, amp = 1 }) {
  const width = 760;
  const d = ecgPath(width, 52, period, amp);
  return (
    <svg className="ecg" viewBox={`0 0 ${width} 72`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d={d} className="ecg-base" />
      <path d={d} className="ecg-trace" pathLength="1000" />
    </svg>
  );
}
