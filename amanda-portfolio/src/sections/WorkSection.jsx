import { useState } from 'react'

const CATEGORIES = [
  { id: 'all',      label: 'All' },
  { id: 'work',     label: 'Work & Internships' },
  { id: 'research', label: 'Research' },
  { id: 'coding',   label: 'Coding & Projects' },
]

const PROJECTS = [
  {
    id: 'sacm', category: 'work', emoji: '📈', color: '#E88C30',
    title: 'Platform Evaluation — Service Academy Capital Management',
    meta: 'Strategy & Ops · Wealth Management · 2025',
    desc: 'I led a build-vs-buy evaluation of AI platforms — gathering requirements from advisors, scoring vendors against them, and presenting a recommendation to leadership that cut projected platform cost by 78%.',
  },
  {
    id: 'civic', category: 'work', emoji: '🗳️', color: '#3E7CB1',
    title: 'AAPI Voter Outreach — Dot Movement Digital',
    meta: 'Civic Tech · Consulting · 2024',
    desc: 'Digital-first outreach for the AAPI Victory Alliance — grant research, a donor CRM, and multimedia that turned civic goals into a campaign first-time voters actually engaged with.',
  },
  {
    id: 'thurman', category: 'research', emoji: '⚖️', color: '#7A5FA3',
    title: 'EZ Merge — Thurman Arnold Project',
    meta: 'Policy · Legal Tech · 2025',
    desc: 'Built a merger-eligibility review web app for antitrust screening, and presented it to the New York Attorney General’s Office.',
  },
  {
    id: 'ub-carbon', category: 'research', emoji: '⚗️', color: '#4FA3A5',
    title: 'Carbon Capture Research — UB Lin Lab',
    meta: 'Research · Environmental · 2023',
    desc: 'Sorbent-modification research for carbon capture, presented internationally at Ritsumeikan University in Japan.',
  },
  {
    id: 'roswell', category: 'research', emoji: '🔬', color: '#C85F82',
    title: 'ST6GAL1 & Breast Cancer — Roswell Park',
    meta: 'Research · Cancer Biology · 2022',
    desc: 'NIH-funded research on how the ST6GAL1 enzyme drives metastasis in triple-negative breast cancer.',
  },
  {
    id: 'microplastics', category: 'research', emoji: '🧪', color: '#6FA99E',
    title: 'Ionization & PET Microplastics',
    meta: 'Research · Environmental · 2021',
    desc: 'Studied ionization effects on PET microplastics in water treatment — earned 1st place Best Poster & Presentation at the International Student Science Fair.',
  },
  {
    id: 'cryptic', category: 'coding', emoji: '✏️', color: '#D99A2B',
    title: 'The Minute Cryptic, Decrypted',
    meta: 'NLP · Machine Learning · 2024',
    desc: 'A two-stage ML pipeline that solves cryptic crossword clues, reaching 69% classification accuracy on wordplay types.',
  },
  {
    id: 'covid-website', category: 'coding', emoji: '🌐', color: '#5B8FC9',
    title: 'COVID-19 Misconceptions — Weill Cornell',
    meta: 'Health Equity · Web · 2021',
    desc: 'A capstone website addressing vaccine misinformation for diverse communities, built to make trustworthy health info accessible.',
  },
]

const VOLUNTEER = [
  { name: 'Chinese American Student Association', role: 'Vice President', emoji: '🏮' },
  { name: 'Queer + Asian @ Yale', role: 'Treasurer', emoji: '🌈' },
  { name: 'Yale Computer Society', role: 'Events Director', emoji: '💻' },
  { name: "Women's Leadership Initiative", role: 'Vice President', emoji: '👩🏻‍💼' },
  { name: 'Volunteer Income Tax Assistance', role: 'Coordinator', emoji: '💰' },
  { name: 'New Haven Community Health Care Van', role: 'Volunteer', emoji: '💉' },
  { name: 'Yale Pathways to Science', role: 'Volunteer', emoji: '🧪' },
  { name: 'HARVEST — Yale Sustainable Food Program', role: 'Orientation Leader', emoji: '👩🏻‍🌾' },
]

export default function WorkSection() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <section id="work" className="section work-section">
      <div className="section__head">
        <h2 className="section__title">work <span className="star">✶</span></h2>
        <p className="section__sub">A constantly-updating pile of things I've built, researched, and shipped.</p>
      </div>

      <div className="work-filters">
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`work-filter ${active === c.id ? 'work-filter--active' : ''}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="work-grid">
        {filtered.map(p => (
          <article key={p.id} className="work-item">
            <div className="work-item__tile" style={{ '--tile-color': p.color }}>
              <span className="work-item__emoji">{p.emoji}</span>
              <div className="work-item__pop"><span className="star">✶</span></div>
            </div>
            <div className="work-item__body">
              <h3 className="work-item__title">{p.title}</h3>
              <p className="work-item__meta">{p.meta}</p>
              <p className="work-item__desc">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {active === 'all' && (
        <div className="volunteer">
          <h3 className="volunteer__heading">groups &amp; involvement <span className="star">☆</span></h3>
          <div className="volunteer__grid">
            {VOLUNTEER.map((v, i) => (
              <div key={i} className="volunteer__card">
                <span className="volunteer__emoji">{v.emoji}</span>
                <div>
                  <p className="volunteer__name">{v.name}</p>
                  <p className="volunteer__role">{v.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
