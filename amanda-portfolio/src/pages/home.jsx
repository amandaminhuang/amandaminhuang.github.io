import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const TAGS = [
  { label: 'Product',     bg: '#6C9BCF', color: 'white',       top: '8%',  left: '5%',  rot: '-6deg' },
  { label: 'Civic Tech',  bg: '#D9EEFF', color: '#355C7D',     top: '0%',  left: '42%', rot: '4deg'  },
  { label: 'Human-first', bg: '#ffdf9a', color: '#5C4A2A',     top: '18%', left: '72%', rot: '6deg'  },
  { label: 'EdTech',      bg: '#57a3ff', color: '#355C7D',     top: '55%', left: '68%', rot: '-4deg' },
  { label: 'Research',    bg: '#C8D9F0', color: '#1E2A35',     top: '68%', left: '2%',  rot: '5deg'  },
  { label: 'PM',          bg: '#355C7D', color: 'white',       top: '60%', left: '35%', rot: '-3deg' },
]

const HOBBIES = ['🏓 pickleball', '✏️ mini cryptics', '☕ cold brew', '📚 mid-book (×3)']

const PROJECTS = [
  { id: 'civic',     emoji: '🏛️', tag: 'Civic Tech', title: 'Project one title',  bg: '#E8EFF8' },
  { id: 'nonprofit', emoji: '👩‍💻', tag: 'Education',  title: 'Project two title',  bg: '#EEF2F7' },
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
          <Link to="/projects" className="btn" style={{ background: '#355C7D', color: 'white' }}>
            see my work →
          </Link>
        </div>
      </div>

      {/* ── FEATURED WORK ── */}
      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="title-lg" style={{ marginBottom: 0 }}>featured work ✦</h2>
          <Link to="/projects" className="link--accent">see all →</Link>
        </div>

        <div className="grid-2">
          {PROJECTS.map(p => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="project-card"
              style={{ background: p.bg }}
            >
              <div className="project-card__emoji">{p.emoji}</div>
              <p className="eyebrow">{p.tag}</p>
              <h3 className="title-md">{p.title}</h3>
            </Link>
          ))}
        </div>

        <div className="grid-2">
          <div className="card" style={{ background: '#EEF2F7' }}>
            <p className="eyebrow">currently</p>
            <p className="title-md">Government PM · Summer 2025</p>
          </div>
          <div className="card" style={{ background: '#F7F0E8' }}>
            <p className="eyebrow">also</p>
            <p className="title-md">Nonprofit — girls in tech</p>
          </div>
        </div>

        <div className="card" style={{ background: '#FDF4E7' }}>
          <p className="eyebrow">when i'm not creating</p>
          <div className="chips" style={{ marginTop: '0.75rem' }}>
            {HOBBIES.map(h => <span key={h} className="chip">{h}</span>)}
          </div>
        </div>
      </Section>

    </main>
  )
}