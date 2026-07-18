import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const THINGS = [
  { emoji: '🏓', label: 'Pickleball' },
  { emoji: '✏️', label: 'Mini cryptics' },
  { emoji: '☕', label: 'Coffee (oat, always)' },
  { emoji: '✈️', label: 'Travel' },
  { emoji: '🍌', label: 'Bananagrams' },
  { emoji: '📚', label: 'Always mid-book' },
]

const PROJECTS = [
  { id: 'sacm',  emoji: '📈', tag: 'Work', title: 'SACM platform evaluation', bg: 'var(--card-2)', year: '2025', blurb: 'Ran a build-vs-buy evaluation that cut projected platform cost by 78%.' },
  { id: 'civic', emoji: '🗳️', tag: 'Civic Tech', title: 'AAPI voter outreach', bg: 'var(--card-3)', year: '2024', blurb: 'Digital-first outreach with Dot Movement to reach first-time AAPI voters.' },
]

// ── PHOTO SLOT ───────────────────────────────────────────────────────────────
// Drop a portrait at public/amanda.jpg and it replaces the placeholder automatically.
function PhotoFrame() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="photo-frame">
      {failed ? (
        <div className="photo-frame__placeholder">
          <span className="photo-frame__placeholder-emoji">📷</span>
          <span className="photo-frame__placeholder-label">
            add a photo of you at <code>public/amanda.jpg</code>
          </span>
        </div>
      ) : (
        <img
          className="photo-frame__img"
          src="/amanda.jpg"
          alt="Amanda"
          onError={() => setFailed(true)}
        />
      )}
      <div className="doodle-badge"><Doodle /></div>
    </div>
  )
}

// ── CUTE HAND-DRAWN AVATAR (charcoal line-art + marigold) ────────────────────
function Doodle() {
  return (
    <svg className="doodle" viewBox="0 0 320 320" fill="none"
         strokeLinecap="round" strokeLinejoin="round" role="img"
         aria-label="A little doodle of Amanda waving">
      {/* layered background blobs */}
      <circle cx="162" cy="172" r="132" fill="#FBEAC6" />
      <circle cx="154" cy="160" r="126" fill="#F9F4EA" />
      {/* sparkles */}
      <g fill="#F2AF36">
        <path d="M60 90 Q62 82 70 80 Q62 78 60 70 Q58 78 50 80 Q58 82 60 90 Z" />
        <path d="M270 210 Q272 203 279 201 Q272 199 270 192 Q268 199 261 201 Q268 203 270 210 Z" />
        <path d="M256 60 Q258 53 265 51 Q258 49 256 42 Q254 49 247 51 Q254 53 256 60 Z" />
      </g>

      {/* hair (back) */}
      <ellipse cx="160" cy="152" rx="72" ry="76" fill="#2D2F3D" />
      <path d="M92 168 Q84 214 104 246 L120 232 Q104 200 108 168 Z" fill="#2D2F3D" />
      <path d="M228 168 Q236 214 216 246 L200 232 Q216 200 212 168 Z" fill="#2D2F3D" />

      {/* neck */}
      <rect x="143" y="180" width="34" height="52" rx="16" fill="#F6D7C4" stroke="#2D2F3D" strokeWidth="5" />

      {/* shoulders / marigold top */}
      <path d="M92 300 Q92 230 160 230 Q228 230 228 300 Z" fill="#F2AF36" stroke="#2D2F3D" strokeWidth="5" />
      <path d="M160 232 L150 254 M160 232 L170 254" stroke="#D8961B" strokeWidth="4" />

      {/* face */}
      <circle cx="160" cy="158" r="62" fill="#F6D7C4" stroke="#2D2F3D" strokeWidth="5" />

      {/* bangs */}
      <path d="M102 152 Q110 106 160 106 Q210 106 218 152 Q190 126 160 126 Q130 126 102 152 Z" fill="#2D2F3D" />

      {/* cheeks */}
      <circle cx="126" cy="180" r="10" fill="#F2AF36" opacity="0.4" />
      <circle cx="194" cy="180" r="10" fill="#F2AF36" opacity="0.4" />

      {/* eyes */}
      <circle cx="138" cy="162" r="6.5" fill="#2D2F3D" />
      <circle cx="182" cy="162" r="6.5" fill="#2D2F3D" />
      <circle cx="140" cy="160" r="2" fill="#FFFFFF" />
      <circle cx="184" cy="160" r="2" fill="#FFFFFF" />

      {/* smile */}
      <path d="M138 186 Q160 208 182 186" stroke="#2D2F3D" strokeWidth="5" fill="none" />

      {/* waving arm */}
      <g className="doodle__wave">
        <path d="M214 236 Q252 210 248 150 Q246 128 252 116" stroke="#2D2F3D" strokeWidth="27" fill="none" />
        <path d="M214 236 Q252 210 248 150 Q246 128 252 116" stroke="#F6D7C4" strokeWidth="18" fill="none" />
        <circle cx="253" cy="108" r="17" fill="#F6D7C4" stroke="#2D2F3D" strokeWidth="5" />
        <path d="M278 92 Q287 96 285 107" stroke="#F2AF36" strokeWidth="4" fill="none" />
        <path d="M289 78 Q300 84 296 99" stroke="#F2AF36" strokeWidth="4" fill="none" />
      </g>
    </svg>
  )
}

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

      {/* ── INTRO / ABOUT HERO ── */}
      <section className="intro">
        <div className="intro__inner">
          <div className="intro__text">
            <p className="intro__eyebrow">hi there 👋 I'm</p>
            <h1 className="intro__name">Amanda<span className="accent">.</span></h1>
            <svg className="intro__squiggle" viewBox="0 0 220 14" fill="none" aria-hidden="true">
              <path d="M2 8 Q28 1 54 8 T106 8 T158 8 T212 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>

            <p className="intro__lead">
              A first-gen Yale student studying stats &amp; data science, headed toward{' '}
              <span className="pop">strategy, operations &amp; product</span> — with a soft spot
              for <span className="pop">civic tech</span>.
            </p>
            <p className="intro__body">
              I like sitting where data, strategy, and people meet — figuring out what to
              build, why it matters, and how to actually ship it. I've gotten to do that across{' '}
              <span className="hl">Asian American civic advocacy</span>,{' '}
              <span className="hl">women in tech</span>, and{' '}
              <span className="hl">federal policy</span>, and I'm always chasing the side quest
              of making a stranger's day a little better.
            </p>

            <div className="intro__ctas">
              <Link to="/projects" className="btn btn--primary">see my work →</Link>
              <Link to="/nest" className="btn btn--secondary">my little corner ✶</Link>
              <a href="mailto:amanda.huang@yale.edu" className="btn btn--secondary">say hi</a>
            </div>

            <div className="intro__chips">
              <p className="intro__chips-label">when I'm not building</p>
              <div className="chips">
                {THINGS.map(t => (
                  <span key={t.label} className="chip">{t.emoji} {t.label}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="intro__art">
            <PhotoFrame />
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
          <h2 className="title-lg" style={{ marginBottom: 0 }}>selected work ✦</h2>
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
                {p.blurb}
              </p>
            </Link>
          ))}
        </div>

        <div className="grid-2" style={{ marginTop: '1rem' }}>
          <div className="card" style={{ background: 'var(--surface)', border: '1.5px solid var(--border)' }}>
            <p className="eyebrow">currently</p>
            <p className="title-md">Recruiting for strategy / ops / PM</p>
          </div>
          <div className="card" style={{ background: 'var(--surface)', border: '1.5px solid var(--border)' }}>
            <p className="eyebrow">also</p>
            <p className="title-md">Building community in civic tech</p>
          </div>
        </div>
      </Section>

      {/* ── CLOSING NUDGE ── */}
      <Section>
        <div className="card" style={{ textAlign: 'center', padding: '3.5rem 2rem', background: 'var(--marigold)' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(45,47,61,0.7)', marginBottom: '0.75rem' }}>
            ✶ say hello ✶
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: 'var(--ink)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Let's make something<br />worth remembering.
          </h2>
          <a href="mailto:amanda.huang@yale.edu" className="btn" style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
            get in touch →
          </a>
        </div>
      </Section>

    </main>
  )
}
