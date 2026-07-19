import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import PageStars from '../components/PageStars'

// Square tiles that link into the full case studies. Colors match the Work page.
const FEATURED = [
  { id: 'sacm',          title: 'SACM platform evaluation', tag: 'Strategy · 2025',   emoji: '📈', color: '#E88C30' },
  { id: 'civic',         title: 'AAPI voter outreach',      tag: 'Civic Tech · 2024', emoji: '🗳️', color: '#3E7CB1' },
  { id: 'thurman',       title: 'EZ Merge — legal tech',    tag: 'Policy · 2025',     emoji: '⚖️', color: '#7A5FA3' },
  { id: 'cryptic',       title: 'Cryptic crossword solver', tag: 'ML · 2024',         emoji: '✏️', color: '#D99A2B' },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    // scroll-reveal for the sections
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.landing .reveal-up').forEach(el => io.observe(el))

    // scroll-linked fade + drift on the hero (the "long scroll" effect)
    const hero = heroRef.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / (window.innerHeight * 0.9), 1)
        if (hero) hero.style.setProperty('--scroll', String(p))
      })
    }
    if (!reduce) {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    }
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main className="landing">
      <PageStars stars={[
        { name: 'pink',    size: 52, top: '13%', left: '6%',  dur: '6s',   spin: '13s' },
        { name: 'blue',    size: 42, top: '38%', right: '5%', dur: '7s',   spin: '15s', delay: '1.2s' },
        { name: 'speckle', size: 38, top: '78%', left: '9%',  dur: '6.8s', spin: '12s', delay: '0.6s' },
      ]} />

      {/* ── HERO (pins + fades over a long scroll) ── */}
      <div className="landing-hero-wrap">
      <section className="landing-hero" ref={heroRef}>
        <div className="landing-hero__inner">
          <h1 className="landing-hero__name landing-hero__name--img">
            <img src="/amanda.png" alt="Amanda" />
          </h1>
          <p className="landing-hero__intro">
          First-gen Yale student passionate about understanding how people interact with technology
          and building solutions to make our world more accessible.

          </p>
          <div className="landing-hero__ctas">
            <Link to="/about" className="pill-btn">read my story <span>→</span></Link>
            <a href="#work" className="pill-btn pill-btn--ghost">see my work <span>↓</span></a>
          </div>
        </div>
        <a href="#work" className="landing-scroll" aria-label="Scroll to work">↓</a>
      </section>
      </div>

      {/* ── SELECTED WORK ── */}
      <section id="work" className="landing-section reveal-up">
        <div className="landing-section__head">
          <h2 className="landing-section__title">selected work <span className="star">✶</span></h2>
          <Link to="/projects" className="link--accent">see all →</Link>
        </div>
        <div className="featured-grid">
          {FEATURED.map(p => (
            <Link key={p.id} to={`/projects/${p.id}`} className="feature-tile" style={{ '--tile-color': p.color }}>
              <div className="feature-tile__face">
                <span className="feature-tile__emoji">{p.emoji}</span>
                <span className="feature-tile__name">{p.title}</span>
                <span className="feature-tile__tag">{p.tag}</span>
              </div>
              <div className="feature-tile__overlay">
                <span className="feature-tile__overlay-name">{p.title}</span>
                <span className="feature-tile__overlay-cta">view case →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}
