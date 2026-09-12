import './PortfolioSections.css';

const sections = [
  {
    id: 'about',
    title: 'About Me',
    tone: 'pink',
    body: (
      <>
        Software Engineering student at FAST NUCES with hands-on experience in
        AI, NLP, and LLM fine-tuning. I build end-to-end AI pipelines and
        scalable backends, with a strong background in microservices, real-time
        systems, and XR development.
      </>
    ),
    links: [
      {
        href: '/resume/ai-resume.pdf',
        label: 'Resume — AI Engineer',
        download: 'Muhammad_Ahmad_Butt_AI_Engineer_Resume.pdf',
      },
      {
        href: '/resume/web-resume.pdf',
        label: 'Resume — Web Developer',
        download: 'Muhammad_Ahmad_Butt_Web_Developer_Resume.pdf',
      },
    ],
    graphic: 'about',
  },
  {
    id: 'experience',
    title: 'Experience',
    tone: 'mint',
    body: (
      <>
        <strong>XR Developer @ EggyStudio</strong>
        <span className="exp-dates">06/2025 – 08/2025</span>
        Developed AR/VR apps for Android and Meta Quest 3 in Unity, delivering
        2+ features weekly while collaborating across teams using Slack and
        Google Meet.
      </>
    ),
    links: [
      {
        href: '/resume/exp-letter.pdf',
        label: 'View Experience Letter ↗',
        external: true,
      },
    ],
    graphic: 'experience',
  },
  {
    id: 'hackathons',
    title: 'Winning Hackathons',
    tone: 'blue',
    body: (
      <>
        Competed and placed across top university hackathons — from podiums to
        deep finals.
      </>
    ),
    wins: [
      {
        rank: '2nd',
        event: 'RC3 Speed Programming',
        place: 'Riphah University',
      },
      {
        rank: '3rd',
        event: 'Taakra 26 Web Hackathon',
        place: 'University of Central Punjab',
      },
      {
        rank: '5th',
        event: 'UET ACM Hackathon',
        place: 'UET Lahore',
      },
      {
        rank: '7th',
        event: 'ACM FAST NUCES · Speed Programming',
        place: 'FAST Lahore',
      },
      {
        rank: '10th',
        event: 'UMT Techverse · Web',
        place: 'UMT Lahore',
      },
    ],
    graphic: 'trophy',
  },
  {
    id: 'projects',
    title: 'Projects',
    tone: 'coral',
    body: (
      <>
        Agentic AI systems, full-stack products, and XR experiences — from
        multi-agent SWE pipelines to production apps with Stripe, AWS, and
        real-time backends.
      </>
    ),
    cta: 'VIEW WORK',
    graphic: 'projects',
  },
];

function SectionGraphic({ type }) {
  if (type === 'about') {
    return (
      <svg className="section-graphic" viewBox="0 0 220 220" aria-hidden="true">
        <circle cx="110" cy="110" r="88" fill="#111" />
        <circle cx="110" cy="100" r="52" fill="#FFC5B1" />
        <path
          d="M58 92 C70 48 150 48 162 92 C150 70 130 62 110 62 C90 62 70 70 58 92Z"
          fill="#111"
        />
        <circle cx="90" cy="102" r="8" fill="#111" />
        <circle cx="130" cy="102" r="8" fill="#111" />
        <path
          d="M88 128 Q110 142 132 128"
          fill="none"
          stroke="#111"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <rect
          x="40"
          y="155"
          width="140"
          height="28"
          rx="14"
          fill="#7CFFB2"
          stroke="#111"
          strokeWidth="5"
        />
      </svg>
    );
  }

  if (type === 'experience') {
    return (
      <svg className="section-graphic" viewBox="0 0 220 220" aria-hidden="true">
        <rect
          x="48"
          y="58"
          width="124"
          height="118"
          rx="18"
          fill="#FFF59D"
          stroke="#111"
          strokeWidth="6"
        />
        <rect x="78" y="42" width="64" height="28" rx="10" fill="#7CFFB2" stroke="#111" strokeWidth="5" />
        <rect x="68" y="88" width="84" height="12" rx="6" fill="#111" />
        <rect x="68" y="114" width="64" height="10" rx="5" fill="#111" opacity="0.35" />
        <rect x="68" y="136" width="74" height="10" rx="5" fill="#111" opacity="0.35" />
        <circle cx="168" cy="168" r="26" fill="#FF8A65" stroke="#111" strokeWidth="5" />
        <path
          d="M158 168 L165 175 L180 158"
          fill="none"
          stroke="#111"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'trophy') {
    return (
      <svg className="section-graphic" viewBox="0 0 220 220" aria-hidden="true">
        <ellipse cx="110" cy="188" rx="48" ry="14" fill="#111" />
        <rect x="96" y="150" width="28" height="36" rx="6" fill="#111" />
        <path
          d="M55 48 H165 V92 C165 128 140 150 110 150 C80 150 55 128 55 92 Z"
          fill="#FFE566"
          stroke="#111"
          strokeWidth="6"
        />
        <path
          d="M55 60 H30 C30 100 55 112 55 112"
          fill="none"
          stroke="#111"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M165 60 H190 C190 100 165 112 165 112"
          fill="none"
          stroke="#111"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="110" cy="95" r="22" fill="#FF8A65" stroke="#111" strokeWidth="5" />
        <text
          x="110"
          y="103"
          textAnchor="middle"
          fontSize="22"
          fontWeight="800"
          fill="#111"
          fontFamily="Syne, sans-serif"
        >
          1
        </text>
      </svg>
    );
  }

  return (
    <svg className="section-graphic" viewBox="0 0 220 220" aria-hidden="true">
      <rect
        x="38"
        y="48"
        width="144"
        height="124"
        rx="22"
        fill="#FFF59D"
        stroke="#111"
        strokeWidth="6"
      />
      <rect x="58" y="72" width="64" height="12" rx="6" fill="#111" />
      <rect x="58" y="98" width="104" height="10" rx="5" fill="#111" opacity="0.35" />
      <rect x="58" y="120" width="88" height="10" rx="5" fill="#111" opacity="0.35" />
      <rect x="58" y="142" width="72" height="10" rx="5" fill="#111" opacity="0.35" />
      <circle cx="168" cy="168" r="28" fill="#7CFFB2" stroke="#111" strokeWidth="5" />
      <path
        d="M158 168 L165 175 L180 158"
        fill="none"
        stroke="#111"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PortfolioSections() {
  return (
    <section className="portfolio-sections" id="work">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="portfolio-card-slot"
          style={{
            zIndex: index + 1,
            ['--stick-top']: `${1.15 + index * 1.05}rem`,
          }}
        >
          <article
            className={`portfolio-card portfolio-card--${section.tone}`}
            id={section.id}
          >
            <div className="portfolio-card__text">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.wins && (
                <ul className="portfolio-card__wins">
                  {section.wins.map((win) => (
                    <li key={`${win.event}-${win.rank}`}>
                      <span className="win-rank">{win.rank}</span>
                      <span className="win-meta">
                        <strong>{win.event}</strong>
                        <em>{win.place}</em>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {section.list && (
                <ul className="portfolio-card__list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.links && (
                <div className="portfolio-card__links">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      className="portfolio-card__link"
                      href={link.href}
                      download={link.download || undefined}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              {section.cta && (
                <a className="portfolio-card__cta" href={`#${section.id}`}>
                  {section.cta}
                </a>
              )}
            </div>
            <div className="portfolio-card__art">
              <SectionGraphic type={section.graphic} />
            </div>
          </article>
        </div>
      ))}
    </section>
  );
}

export default PortfolioSections;
