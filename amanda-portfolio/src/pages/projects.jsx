import { Link } from 'react-router-dom'

// ── ADD YOUR PROJECTS HERE ──
// For image: add  src: '/your-image.jpg'
// For placeholder: leave src out, use emoji + color instead
const PROJECTS = [
  {
    id: 'civic',
    tag: 'Civic Tech · Government',
    title: 'Simplifying a public-facing government service',
    emoji: '🏛️',
    color: 'var(--yellow)',
    // src: '/civic-cover.jpg',  ← uncomment when you have an image
  },
  {
    id: 'nonprofit',
    tag: 'Education · Nonprofit',
    title: 'Coding curriculum for girls in tech',
    emoji: '👩‍💻',
    color: 'var(--green)',
    // src: '/nonprofit-cover.jpg',
  },
  {
    id: 'research',
    tag: 'Research · Discovery',
    title: 'How do first-time users actually onboard?',
    emoji: '🔍',
    color: 'var(--blue)',
    // src: '/research-cover.jpg',
  },
]

function ProjectTile({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-tile">

      {/* Image or colored placeholder */}
      {project.src
        ? <img src={project.src} alt={project.title} className="project-tile__image" />
        : <div
            className="project-tile__placeholder"
            style={{ background: project.color }}
          >
            <span className="project-tile__placeholder-emoji">{project.emoji}</span>
            <span className="project-tile__placeholder-label">{project.tag}</span>
          </div>
      }

      {/* Hover overlay */}
      <div className="project-tile__overlay">
        <p className="project-tile__overlay-tag">{project.tag}</p>
        <h2 className="project-tile__overlay-title">{project.title}</h2>
        <div className="project-tile__overlay-cta">click to view more ✦</div>
      </div>

    </Link>
  )
}

export default function Projects() {
  return (
    <main className="projects-page">
      <h1>view my works ✦</h1>
      <p className="projects-page__sub">Always in the works — feel free to explore!</p>

      <div className="projects-grid-2">
        {PROJECTS.map(p => <ProjectTile key={p.id} project={p} />)}
      </div>
    </main>
  )
}