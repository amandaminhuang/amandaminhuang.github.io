import { useParams, Link } from 'react-router-dom'

const SECTION_COLORS = ['blue', 'purple', 'peach']

const CASE_STUDIES = {
  civic: {
    tag: 'Civic Tech', title: 'Project one title', emoji: '🏛️', color: 'yellow',
    sections: [
      { heading: 'The problem', body: 'Describe the problem.' },
      { heading: 'What I did',  body: 'Describe your process.' },
      { heading: 'Outcome',     body: 'Describe the result.' },
    ],
    prev: null, next: 'nonprofit',
  },
  nonprofit: {
    tag: 'Education', title: 'Project two title', emoji: '👩‍💻', color: 'green',
    sections: [
      { heading: 'The problem', body: 'Describe the problem.' },
      { heading: 'What I did',  body: 'Describe your process.' },
      { heading: 'Outcome',     body: 'Describe the result.' },
    ],
    prev: 'civic', next: null,
  },
}

export default function ProjectDetails() {
  const { id } = useParams()
  const p = CASE_STUDIES[id]

  if (!p) return (
    <main className="page">
      <p>Project not found.</p>
      <Link to="/projects" className="link--accent">← back to projects</Link>
    </main>
  )

  return (
    <main className="page">

      <div className={`card card--lg card--${p.color}`}>
        <p className="eyebrow">{p.tag}</p>
        <div style={{ fontSize: '3rem', margin: '0.5rem 0' }}>{p.emoji}</div>
        <h1 className="title-lg">{p.title}</h1>
      </div>

      {p.sections.map((sec, i) => (
        <div key={sec.heading} className={`card card--${SECTION_COLORS[i % 3]}`}>
          <h2 className="title-md">{sec.heading}</h2>
          <p>{sec.body}</p>
        </div>
      ))}

      <div className="page-nav">
        {p.prev ? <Link to={`/projects/${p.prev}`} className="link--accent">← previous</Link> : <span />}
        <Link to="/projects" className="link--muted">all projects</Link>
        {p.next ? <Link to={`/projects/${p.next}`} className="link--accent">next →</Link> : <span />}
      </div>

    </main>
  )
}