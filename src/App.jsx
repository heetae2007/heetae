import { profile, about, skills, experience, education, projects } from "./data/content.js";

const NAV_ITEMS = [
  { href: "#about", label: "소개" },
  { href: "#skills", label: "기술" },
  { href: "#experience", label: "경력" },
  { href: "#work", label: "프로젝트" },
  { href: "#contact", label: "연락처" },
];

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="nav-brand" href="#top">
          {profile.name}
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
          <p className="eyebrow">{profile.handle}</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-links">
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-ghost" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </section>

        <Section id="about" title="소개">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <Section id="skills" title="기술">
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.group} className="skills-group">
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="경력">
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.org + e.period}>
                <span className="timeline-period">{e.period}</span>
                <span className="timeline-body">
                  <strong>{e.org}</strong> — {e.role}
                  <br />
                  <span className="timeline-summary">{e.summary}</span>
                </span>
              </li>
            ))}
          </ul>
          <ul className="timeline">
            {education.map((e) => (
              <li key={e.org + e.period}>
                <span className="timeline-period">{e.period}</span>
                <span className="timeline-body">
                  <strong>{e.org}</strong> — {e.role}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="work" title="프로젝트">
          <div className="projects">
            {projects.map((p) => (
              <a key={p.order} className="project-card" href={p.repo} target="_blank" rel="noreferrer">
                <span className="project-order">{p.order}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section id="contact" title="연락처">
          <p>자동화하고 싶은 반복 업무가 있다면 편하게 연락 주세요.</p>
          <div className="rows">
            <a className="row" href={profile.github} target="_blank" rel="noreferrer">
              GitHub — {profile.handle}
            </a>
            <a className="row" href={`mailto:${profile.email}`}>
              Email — {profile.email}
            </a>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
