import { useParams, Link } from 'react-router-dom'

const CASE_STUDIES = {
  civic: {
    tag: 'Civic Tech',
    title: 'Project one',
    sections: [
      { heading: 'The problem', body: 'Describe the problem.' },
      { heading: 'What I did',  body: 'Describe your process.' },
      { heading: 'Outcome',     body: 'Describe the result.' },
    ],
    prev: null,
    next: 'nonprofit',
  },
  nonprofit: {
    tag: 'Education',
    title: 'Project two',
    sections: [
      { heading: 'The problem', body: 'Describe the problem.' },
      { heading: 'What I did',  body: 'Describe your process.' },
      { heading: 'Outcome',     body: 'Describe the result.' },
    ],
    prev: 'civic',
    next: null,
  },
}

export default function ProjectDetails() {
  const { id } = useParams()
  const p = CASE_STUDIES[id]

  if (!p) return (
    <main>
      <p>Project not found.</p>
      <Link to="/projects">← Back</Link>
    </main>
  )

  return (
    <main>
      <p>{p.tag}</p>
      <h1>{p.title}</h1>
      {p.sections.map(sec => (
        <div key={sec.heading}>
          <h2>{sec.heading}</h2>
          <p>{sec.body}</p>
        </div>
      ))}
      <div>
        {p.prev && <Link to={`/projects/${p.prev}`}>← Previous</Link>}
        {' '}
        <Link to="/projects">All projects</Link>
        {' '}
        {p.next && <Link to={`/projects/${p.next}`}>Next →</Link>}
      </div>
    </main>
  )
}