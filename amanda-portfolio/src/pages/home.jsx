import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const TAGS = [
  { label: 'Product',     bg: 'var(--blue)',   color: '#fff', top: '8%',  left: '5%',  rot: '-6deg'  },
  { label: 'Civic Tech',  bg: 'var(--green)',  color: '#2E2A26', top: '0%',  left: '42%', rot: '4deg'   },
  { label: 'Human-first', bg: 'var(--purple)', color: '#2E2A26', top: '18%', left: '72%', rot: '6deg'   },
  { label: 'EdTech',      bg: 'var(--peach)',  color: '#2E2A26', top: '55%', left: '68%', rot: '-4deg'  },
  { label: 'Research',    bg: 'var(--yellow)', color: '#2E2A26', top: '68%', left: '2%',  rot: '5deg'   },
  { label: 'PM',          bg: 'var(--orange)', color: '#fff', top: '60%', left: '35%', rot: '-3deg'  },
]

const HOBBIES = ['🏓 pickleball', '✏️ mini cryptics', '☕ cold brew', '📚 mid-book (×3)']

const PROJECTS = [
  { id: 'civic',     emoji: '🏛️', tag: 'Civic Tech', title: 'Project one title',  color: 'yellow' },
  { id: 'nonprofit', emoji: '👩‍💻', tag: 'Education',  title: 'Project two title', color: 'green'  },
]

const NOTES = [
  { emoji: '🌟', text: 'Add a fun note or testimonial here.' },
  { emoji: '💬', text: 'Something kind someone said about working with you.' },
  { emoji: '✨', text: 'A moment you are proud of.' },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.05 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])
  return ref
}

function Section({ children }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal home-section">
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <div className="hero-layout">

        <div className="hero-tag-cloud">
          <div className="hero-name">amanda.</div>
          {TAGS.map(tag => (
            <div
              key={tag.label}
              className="hero-tag"
              style={{
                background: tag.bg,
                color: tag.color,
                top: tag.top,
                left: tag.left,
                '--rot': tag.rot,
                '--tx': '0px',
                '--ty': '0px',
                transform: `rotate(${tag.rot})`,
              }}
            >
              {tag.label}
            </div>
          ))}
        </div>

        <p className="hero-intro">
          Hi! I'm Amanda — a <span className="accent-orange">product manager</span> who
          builds for <span className="accent-blue">people first</span>.
          Currently in <span className="accent-olive">civic tech</span> and nonprofit ed.
        </p>


        <div className="hero-ctas">
          <Link to="/projects" className="btn btn--primary">see my work →</Link>
          <Link to="/contact"  className="btn btn--secondary" style={{ border: '2px solid var(--border)' }}>get in touch</Link>
        </div>

      </div>

      {/* ── RECENT WORK ── */}
      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="title-lg" style={{ marginBottom: 0 }}>recent work ✦</h2>
          <Link to="/projects" className="link--accent">see all →</Link>
        </div>
        <div className="grid-2">
          {PROJECTS.map(p => (
            <Link key={p.id} to={`/projects/${p.id}`} className={`project-card card--${p.color}`}>
              <div className="project-card__emoji">{p.emoji}</div>
              <p className="eyebrow">{p.tag}</p>
              <h3 className="title-md">{p.title}</h3>
            </Link>
          ))}
        </div>
        <div className="grid-2">
          <div className="card card--blue">
            <p className="eyebrow">currently</p>
            <p className="title-md">Government PM · Summer 2025</p>
          </div>
          <div className="card card--purple">
            <p className="eyebrow">also</p>
            <p className="title-md">Nonprofit — girls in tech</p>
          </div>
        </div>
        <div className="card card--peach">
          <p className="eyebrow">when i'm not pm-ing</p>
          <div className="chips" style={{ marginTop: '0.75rem' }}>
            {HOBBIES.map(h => <span key={h} className="chip">{h}</span>)}
          </div>
        </div>
      </Section>

      {/* ── HAPPY NOTES ── */}
      <Section>
        <h2 className="title-lg">happy notes 💌</h2>
        <p className="muted" style={{ marginTop: '-0.5rem' }}>
          Things people have said, moments I want to remember.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {NOTES.map((note, i) => (
            <div key={i} className={`card card--${['yellow','blue','purple'][i % 3]}`}>
              <span style={{ fontSize: '1.5rem' }}>{note.emoji}</span>
              <p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.05rem' }}>
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── END ── */}
      <Section>
        <div className="card card--lg card--orange" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✦</p>
          <h2 className="title-lg" style={{ color: 'white' }}>let's make something good.</h2>
          <p style={{ color: 'white', opacity: 0.85, marginBottom: '2rem' }}>
            Reach out — always happy to chat.
          </p>
          <Link to="/contact" className="btn btn--secondary">say hello →</Link>
        </div>
      </Section>

    </main>
  )
}