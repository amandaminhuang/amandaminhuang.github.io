import { Link } from 'react-router-dom'

const PROJECTS = [
  { id: 'civic',     tag: 'Civic Tech', title: 'Project one',   desc: 'Short description.' },
  { id: 'nonprofit', tag: 'Education',  title: 'Project two',   desc: 'Short description.' },
]

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      {PROJECTS.map(p => (
        <div key={p.id}>
          <p>{p.tag}</p>
          <h2><Link to={`/projects/${p.id}`}>{p.title}</Link></h2>
          <p>{p.desc}</p>
        </div>
      ))}
    </main>
  )
}