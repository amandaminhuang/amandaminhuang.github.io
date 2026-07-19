import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageStars from '../components/PageStars'

const CATEGORIES = [
  { id: 'all',        label: 'All' },
  { id: 'work',       label: 'Work & Internships' },
  { id: 'research',   label: 'Research' },
  { id: 'coding',     label: 'Coding & Projects' },
]

const PROJECTS = [
  // ── WORK & INTERNSHIPS ──
  // {
  //   id: 'kwk-ops',
  //   category: 'work',
  //   tag: 'Operations · Nonprofit',
  //   title: 'AI & Technology Strategy — Kode with Klossy',
  //   desc: 'Led AI outreach strategy and platform management for a nonprofit serving thousands of young women.',
  //   emoji: '⚙️',
  // },
  {
    id: 'sacm',
    category: 'work',
    tag: 'Wealth Management · AI',
    title: 'Platform Evaluation — Service Academy Capital Management',
    desc: 'Identified a 78% cost reduction through platform research and executive presentation.',
    emoji: '📈',
  },
  {
    id: 'civic',
    category: 'work',
    tag: 'Civic Tech · Consulting',
    title: 'AAPI Voter Outreach — Dot Movement Digital',
    desc: 'Grant research, donor CRM, and multimedia for AAPI Victory Alliance.',
    emoji: '🗳️',
  },

  // ── RESEARCH ──
  {
    id: 'thurman',
    category: 'research',
    tag: 'Policy · Legal Tech',
    title: 'EZ Merge — Thurman Arnold Project',
    desc: 'Building a merger eligibility review web app, presenting to the NY AG Office.',
    emoji: '⚖️',
  },
  // {
  //   id: 'ub-neural',
  //   category: 'research',
  //   tag: 'Research · Machine Learning',
  //   title: 'Neural Network Action Prediction — UB Esfahani Lab',
  //   desc: 'Used ATARI-Head eye gaze data to predict player actions via neural networks.',
  //   emoji: '🧠',
  // },
  {
    id: 'ub-carbon',
    category: 'research',
    tag: 'Research · Environmental',
    title: 'Carbon Capture Research — UB Lin Lab',
    desc: 'Sorbent modification research presented internationally at Ritsumeikan University, Japan.',
    emoji: '⚗️',
  },
  {
    id: 'roswell',
    category: 'research',
    tag: 'Research · Cancer Biology',
    title: 'ST6GAL1 & Breast Cancer — Roswell Park',
    desc: 'NIH-funded research on triple-negative breast cancer metastasis.',
    emoji: '🔬',
  },
  {
    id: 'microplastics',
    category: 'research',
    tag: 'Research · Environmental',
    title: 'Ionization & PET Microplastics',
    desc: '1st place Best Poster & Presentation at the International Student Science Fair.',
    emoji: '🧪',
  },

  // ── CODING & PROJECTS ──
  {
    id: 'cryptic',
    category: 'coding',
    tag: 'NLP · Machine Learning',
    title: 'The Minute Cryptic Decrypted',
    desc: 'Two-stage ML pipeline to solve cryptic crossword puzzles. 69% classification accuracy.',
    emoji: '✏️',
  },
  {
    id: 'covid-website',
    category: 'coding',
    tag: 'Health Equity · Web',
    title: 'COVID-19 Misconceptions Website — Weill Cornell',
    desc: 'Built a capstone website addressing vaccine misinformation for diverse communities.',
    emoji: '🌐',
  },
  // {
  //   id: 'kwk-web',
  //   category: 'coding',
  //   tag: 'Web · HTML/CSS/JS',
  //   title: 'Medical Disparities Website — Kode with Klossy 2021',
  //   desc: 'First shipped project — a website on medical disparities built with HTML, CSS, and JS.',
  //   emoji: '🩺',
  // },
]

const VOLUNTEER = [
  { name: 'Chinese American Student Association', role: 'Vice President', emoji: '🏮' },
  { name: 'Queer + Asian @ Yale', role: 'Treasurer', emoji: '🌈' },
  { name: 'Yale Computer Society', role: 'Events Director', emoji: '💻' },
  { name: "Women's Leadership Initiative", role: 'Vice President', emoji: '👩🏻‍💼' },
  { name: 'Volunteer Income Tax Coordinator', role: 'Volunteer', emoji: '💰' },
  { name: 'New Haven Community Health Care Van', role: 'Volunteer', emoji: '💉' },
  { name: 'Yale Pathways to Science', role: 'Volunteer', emoji: '🧪' },
  { name: 'HARVEST - Yale Sustainable Food Program', role: 'Freshman Orientation Leader', emoji: '👩🏻‍🌾' }
]

// Each tile shows the name; on hover it fills with this color.
const TILE_COLORS = {
  sacm:            '#E88C30',
  civic:           '#3E7CB1',
  thurman:         '#7A5FA3',
  'ub-carbon':     '#5A9E6F',
  roswell:         '#C4577A',
  microplastics:   '#4FA3A5',
  cryptic:         '#D99A2B',
  'covid-website': '#D06A54',
}

function ProjectTile({ project }) {
  const color = TILE_COLORS[project.id] || '#2D2F3D'
  return (
    <Link to={`/projects/${project.id}`} className="project-tile" style={{ '--tile-color': color }}>
      {project.src
        ? <img src={project.src} alt={project.title} className="project-tile__image" />
        : (
          <div className="project-tile__face">
            <span className="project-tile__emoji">{project.emoji}</span>
            <span className="project-tile__name">{project.title}</span>
          </div>
        )
      }
      <div className="project-tile__overlay">
        <p className="project-tile__overlay-tag">{project.tag}</p>
        <h2 className="project-tile__overlay-title">{project.title}</h2>
        <span className="project-tile__overlay-cta">view case →</span>
      </div>
    </Link>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  const showVolunteer = active === 'all' || active === 'leadership'

  return (
    <main className="projects-page">
      <PageStars stars={[
        { name: 'cream', size: 48, top: '7%',  right: '3%', dur: '6.5s', spin: '14s' },
        { name: 'plaid', size: 40, top: '52%', left: '2%',  dur: '7.5s', spin: '12s', delay: '1.4s' },
        { name: 'teal',  size: 34, top: '84%', right: '6%', dur: '6.4s', spin: '13s', delay: '0.7s' },
      ]} />

      <div>
        <h1>projects ✦</h1>
        <p className="projects-page__sub">
          a constantly updating pile of works!
        </p>
      </div>

      <div className="proj-filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`proj-filter ${active === cat.id ? 'proj-filter--active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 && (
        <div className="projects-grid-2">
          {filtered.map(p => <ProjectTile key={p.id} project={p} />)}
        </div>
      )}

      {showVolunteer && (
        <div className="volunteer-section">
          <h2 className="volunteer-heading">groups & involvement ✦</h2>
          <p className="muted" style={{ marginBottom: '1.5rem' }}>
            Organizations and communities I love:
          </p>
          <div className="volunteer-grid">
            {VOLUNTEER.map((v, i) => (
              <div key={i} className="volunteer-card">
                <span className="volunteer-emoji">{v.emoji}</span>
                <div>
                  <p className="volunteer-name">{v.name}</p>
                  <p className="volunteer-role">{v.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </main>
  )
}