import { useState } from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = [
  { id: 'all',      label: 'All' },
  { id: 'work',     label: 'Work & Internships' },
  { id: 'research', label: 'Research' },
  { id: 'coding',   label: 'Coding Projects' },
  { id: 'hackathon',label: 'Hackathon' },
  { id: 'volunteer', label: 'Volunteering & Groups' },
]

const PROJECTS = [
  // ── INTERNSHIPS ──
  {
    id: 'civic',
    category: 'work',
    tag: 'Civic Tech · Government',
    title: 'Government PM Internship',
    desc: 'Simplifying a public-facing government service.',
    emoji: '🏛️',
    // src: '/civic-cover.jpg',
  },
  {
    id: 'nonprofit',
    category: 'work',
    tag: 'Education · Nonprofit',
    title: 'Nonprofit Operations Internship',
    desc: 'Coding curriculum for girls in tech.',
    emoji: '👩‍💻',
    // src: '/nonprofit-cover.jpg',
  },

  // ── RESEARCH ──
  {
    id: 'research',
    category: 'research',
    tag: 'Research',
    title: 'Research Project Title',
    desc: 'Short description of your research and what it explored.',
    emoji: '🔬',
    // src: '/research-cover.jpg',
  },

  // ── CODING ──
  {
    id: 'coding-1',
    category: 'coding',
    tag: 'Class Project · CS',
    title: 'Coding Project One',
    desc: 'What you built and what it does.',
    emoji: '💻',
    // src: '/coding1-cover.jpg',
  },
  {
    id: 'coding-2',
    category: 'coding',
    tag: 'Class Project · CS',
    title: 'Coding Project Two',
    desc: 'What you built and what it does.',
    emoji: '⌨️',
    // src: '/coding2-cover.jpg',
  },

  // ── HACKATHON ──
  {
    id: 'hackathon',
    category: 'hackathon',
    tag: 'Hackathon',
    title: 'Hackathon Project Title',
    desc: 'What you built, the problem you solved, and how long you had.',
    emoji: '⚡',
    // src: '/hackathon-cover.jpg',
  },
]

const VOLUNTEER = [
  { name: 'Organization / Club Name', role: 'Your role', emoji: '🌱' },
  { name: 'Organization / Club Name', role: 'Your role', emoji: '🤝' },
  { name: 'Organization / Club Name', role: 'Your role', emoji: '📣' },
  { name: 'Organization / Club Name', role: 'Your role', emoji: '🎓' },
]

function ProjectTile({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-tile">
      {project.src
        ? <img src={project.src} alt={project.title} className="project-tile__image" />
        : (
          <div className="project-tile__placeholder">
            <span className="project-tile__placeholder-emoji">{project.emoji}</span>
            <span className="project-tile__placeholder-label">{project.tag}</span>
          </div>
        )
      }
      <div className="project-tile__overlay">
        <p className="project-tile__overlay-tag">{project.tag}</p>
        <h2 className="project-tile__overlay-title">{project.title}</h2>
        <div className="project-tile__overlay-cta">click to view more ✦</div>
      </div>
    </Link>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  const showVolunteer = active === 'all' || active === 'volunteer'

  return (
    <main className="projects-page">

      {/* ── HEADER ── */}
      <div>
        <h1>work & projects ✦</h1>
        <p className="projects-page__sub">
          Internships, research, class projects, and more.
        </p>
      </div>

      {/* ── FILTER TABS ── */}
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

      {/* ── PROJECT GRID ── */}
      {filtered.length > 0 && (
        <div className="projects-grid-2">
          {filtered.map(p => <ProjectTile key={p.id} project={p} />)}
        </div>
      )}

      {/* ── VOLUNTEER SECTION ── */}
      {showVolunteer && (
        <div className="volunteer-section">
          <h2 className="volunteer-heading">volunteering & groups ✦</h2>
          <p className="muted" style={{ marginBottom: '1.5rem' }}>
            Organizations and communities I'm part of.
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