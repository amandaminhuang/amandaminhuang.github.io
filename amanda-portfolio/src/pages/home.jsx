import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const TAGS = [
  { label: 'Product',     bg: '#6C9BCF', color: 'white',   top: '8%',  left: '4%',  rot: '-6deg' },
  { label: 'Civic Tech',  bg: '#D9EEFF', color: '#355C7D', top: '2%',  left: '40%', rot: '4deg'  },
  { label: 'Human-first', bg: '#ffdf9a', color: '#5C4A2A', top: '20%', left: '70%', rot: '6deg'  },
  { label: 'EdTech',      bg: '#57a3ff', color: 'white',   top: '58%', left: '66%', rot: '-4deg' },
  { label: 'Research',    bg: '#C8D9F0', color: '#1E2A35', top: '70%', left: '2%',  rot: '5deg'  },
  { label: 'PM',          bg: '#355C7D', color: 'white',   top: '62%', left: '34%', rot: '-3deg' },
]

const THINGS = [
  { emoji: '🏓', label: 'Pickleball' },
  { emoji: '✏️', label: 'Mini cryptics' },
  { emoji: '☕', label: 'Cold brew' },
  { emoji: '🌆', label: 'City walks' },
  { emoji: '🧩', label: 'Puzzles' },
  { emoji: '📚', label: 'Always mid-book' },
]

const PROJECTS = [
  { id: 'civic',     emoji: '🏛️', tag: 'Civic Tech', title: 'Project one title',  bg: '#E8EFF8', year: '2025' },
  { id: 'nonprofit', emoji: '👩‍💻', tag: 'Education',  title: 'Project two title',  bg: '#EEF2F7', year: '2024' },
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

function Section({ children, style }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal home-section" style={style}>
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

        <p className="hero-sub">open to new opportunities · based in [your city]</p>

        <div className="hero-ctas">
          <Link to="/projects" className="btn btn--primary">see my work →</Link>
          <Link to="/about" className="btn btn--secondary">about me</Link>
        </div>
      </div>

      {/* ── WHO I AM (punchy snippet) ── */}
      <Section>
        <div className="home-bio-strip">
          <div className="home-bio-text">
            <p className="eyebrow">who I am</p>
            <h2 className="title-lg" style={{ marginBottom: '1rem' }}>
              Student, builder,<br />community member.
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
              I care about designing systems that actually work for people —
              not just pretty interfaces, but the strategy, research, and
              relationships underneath. My side quest: build something that
              makes a stranger's day noticeably better. 🌟
            </p>
            <Link to="/about" className="link--accent" style={{ fontWeight: 500 }}>
              more about me →
            </Link>
          </div>

          <div className="home-bio-chips">
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>when I'm not building</p>
            <div className="chips">
              {THINGS.map(t => (
                <span key={t.label} className="chip">
                  {t.emoji} {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── FEATURED WORK ── */}
      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
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
              <p className="eyebrow">{p.tag} · {p.year}</p>
              <h3 className="title-md">{p.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                Short one-line description of this project.
              </p>
            </Link>
          ))}
        </div>

        <div className="grid-2" style={{ marginTop: '1rem' }}>
          <div className="card" style={{ background: '#EEF2F7' }}>
            <p className="eyebrow">currently</p>
            <p className="title-md">Government PM · Summer 2025</p>
          </div>
          <div className="card" style={{ background: '#F7F0E8' }}>
            <p className="eyebrow">also</p>
            <p className="title-md">Nonprofit — girls in tech</p>
          </div>
        </div>
      </Section>

      {/* ── CLOSING NUDGE ── */}
      <Section>
        <div className="card card--orange" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '0.75rem' }}>
            say hello
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>
            Let's make something<br />worth remembering.
          </h2>
          <a href="mailto:you@email.com" className="btn" style={{ background: 'white', color: 'var(--navy)' }}>
            get in touch →
          </a>
        </div>
      </Section>

    </main>
  )
}