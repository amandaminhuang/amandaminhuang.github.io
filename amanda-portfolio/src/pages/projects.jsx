import { Link } from 'react-router-dom'

const PROJECTS = [
  { id: 'civic',     emoji: '🏛️', tag: 'Civic Tech', title: 'Project one title',  desc: 'Short description.', color: 'yellow' },
  { id: 'nonprofit', emoji: '👩‍💻', tag: 'Education',  title: 'Project two title', desc: 'Short description.', color: 'green'  },
]

export default function Projects() {
  return (
    <main className="page">

      <div>
        <h1 className="title-lg">projects.</h1>
        <p className="muted">Click any project to read the full case study.</p>
      </div>

      {PROJECTS.map(p => (
        <Link key={p.id} to={`/projects/${p.id}`} className={`project-row card--${p.color}`}>
          <div className="project-row__emoji">{p.emoji}</div>
          <div>
            <p className="eyebrow">{p.tag}</p>
            <h2 className="title-md">{p.title}</h2>
            <p className="muted">{p.desc}</p>
          </div>
          <span className="project-row__arrow">↗</span>
        </Link>
      ))}

    </main>
  )
}