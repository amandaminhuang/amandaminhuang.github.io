const SECTIONS = [
  { heading: 'Background',         body: 'Write your background here.',    color: 'blue'   },
  { heading: 'What I believe',     body: 'Write your values here.',        color: 'peach'  },
  { heading: 'Currently exploring',body: 'Government PM · Nonprofit tech.', color: 'yellow' },
  { heading: 'Outside of work',    body: '🏓 Pickleball · ✏️ Mini cryptics · ☕ Cold brew · 📚 Always mid-book', color: 'green' },
]

export default function About() {
  return (
    <main className="page">

      <div className="card card--lg card--purple">
        <p className="eyebrow">about me</p>
        <h1 className="title-lg">your story goes here.</h1>
        <p className="subtitle">A sentence or two about who you are and what drives you.</p>
      </div>

      {SECTIONS.map(sec => (
        <div key={sec.heading} className={`card card--${sec.color}`}>
          <h2 className="title-md">{sec.heading}</h2>
          <p>{sec.body}</p>
        </div>
      ))}

    </main>
  )
}