import { Link } from 'react-router-dom'

const HOBBIES = ['🏓 pickleball', '✏️ mini cryptics', '☕ cold brew', '📚 mid-book (×3)']

const PROJECTS = [
  { id: 'civic',     emoji: '🏛️', tag: 'Civic Tech', title: 'Project one title',  color: 'yellow' },
  { id: 'nonprofit', emoji: '👩‍💻', tag: 'Education',  title: 'Project two title', color: 'green'  },
]

export default function Home() {
  return (
    <main className="home">

      <section className="hero">
        <p className="hero__eyebrow">product manager · human-centered builder</p>
        <h1 className="hero__name">hi, i'm amanda! 👋</h1>
        <p className="hero__blurb">
          I build products that start with people. Add your blurb here — make it yours!
        </p>
        <div className="hero__ctas">
          <Link to="/projects" className="btn--primary">see my work →</Link>
          <Link to="/contact"  className="btn--secondary">get in touch</Link>
        </div>
      </section>

      <div className="currently">
        <div className="currently__card currently__card--blue">
          <p className="currently__label">currently</p>
          <p className="currently__value">Government PM · Summer 2025</p>
        </div>
        <div className="currently__card currently__card--purple">
          <p className="currently__label">also</p>
          <p className="currently__value">Nonprofit — girls in tech</p>
        </div>
      </div>

      <div className="hobbies">
        <p className="hobbies__label">when i'm not pm-ing</p>
        <div className="hobbies__chips">
          {HOBBIES.map(h => <span key={h} className="chip">{h}</span>)}
        </div>
      </div>

      <section>
        <div className="projects-teaser__header">
          <h2 className="projects-teaser__title">recent work</h2>
          <Link to="/projects" className="projects-teaser__link">see all →</Link>
        </div>
        <div className="projects-teaser__grid">
          {PROJECTS.map(p => (
            <Link key={p.id} to={`/projects/${p.id}`} className={`project-card project-card--${p.color}`}>
              <div className="project-card__emoji">{p.emoji}</div>
              <p className="project-card__tag">{p.tag}</p>
              <h3 className="project-card__title">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}