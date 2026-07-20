import { useEffect, useState } from 'react'

// ── ONE BIG PHOTO OF ME (public/amanda.jpg) ─────────────────────────────────
function PhotoWidget() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="widget-card photo-big">
      {failed ? (
        <div className="photo-big__placeholder">
          <span className="photo-big__emoji">📷</span>
          <span className="photo-big__label">add a photo of you at <code>public/amanda.jpg</code></span>
        </div>
      ) : (
        <img className="photo-big__img" src="/amanda.jpg" alt="Amanda" onError={() => setFailed(true)} />
      )}
    </div>
  )
}

// ── REVOLVING PHOTO WIDGET (auto-cycles through public/photos/1.jpg … ) ──────
const REVOLVE_PHOTOS = [1, 2, 3, 4, 5]
function RevolvingPhotos() {
  const [idx, setIdx] = useState(0)
  const [dead, setDead] = useState({})
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % REVOLVE_PHOTOS.length), 3200)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="widget-card revolve">
      <p className="widget-label">📸 moments</p>
      <div className="revolve__stage">
        <div className="revolve__placeholder">
          <span style={{ fontSize: '1.8rem' }}>📷</span>
          <span>add photos at <code>public/photos/1.jpg</code> …</span>
        </div>
        {REVOLVE_PHOTOS.map((n, i) => !dead[n] && (
          <img
            key={n}
            src={`/photos/${n}.jpg`}
            alt=""
            className={`revolve__img ${i === idx ? 'is-active' : ''}`}
            onError={() => setDead(d => ({ ...d, [n]: true }))}
          />
        ))}
      </div>
    </div>
  )
}

const scrollToWork = e => {
  e.preventDefault()
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
}

export default function MeSection() {
  return (
    <section id="me" className="section about-layout">

      {/* ── LEFT: the story ── */}
      <div className="about-text">
        <p className="about-kicker">✶ me</p>
        <h2 className="about-name">Hi, I'm Amanda<span className="accent">.</span></h2>
        <p className="about-lede">
          A first-gen Yale student that is passionate about understanding how people interact with technology and building accessible and intuitive systems.
        </p>

        <div className="about-section">
          <p className="about-section__label">What I'm studying</p>
          <p>
            I'm a first-generation student at <strong>Yale</strong>, studying{' '}
            <strong>Statistics &amp; Data Science</strong> with a certificate in{' '}
            <strong>Computing, Culture &amp; Society</strong>. I like sitting where data,
            strategy, and people meet — figuring out what to build, why it matters, and how
            to actually ship it.
          </p>
        </div>

        <div className="about-section">
          <p className="about-section__label">What I do now</p>
          <p>
            I've gotten to bring missions to life across{' '}
            <strong>Asian American civic advocacy</strong>,{' '}
            <strong>women &amp; gender minorities in tech</strong>, and{' '}
            <strong>federal policy</strong>. Lately that's looked like a{' '}
            <a href="#work" onClick={scrollToWork} className="about-link">platform evaluation ↓</a>{' '}
            that cut projected cost by 78%, and{' '}
            <a href="#work" onClick={scrollToWork} className="about-link">digital voter outreach ↓</a>{' '}
            for first-time AAPI voters.
          </p>
        </div>

        <div className="about-section">
          <p className="about-section__label">Where I'm headed</p>
          <p>
            I'm recruiting for roles in <strong>strategy &amp; operations</strong> or{' '}
            <strong>product management</strong> — places where I can dig into a problem,
            talk to the people it affects, and turn that into something real. Curious how I
            think? Take a look at my{' '}
            <a href="#work" onClick={scrollToWork} className="about-link">work ↓</a>.
          </p>
        </div>

        <div className="about-section">
          <p className="about-section__label">When I'm not building</p>
          <p>
            You'll find me on a pickleball court, doing the morning mini cryptic, over-ordering
            oat lattes, planning the next trip, or losing at Bananagrams.
          </p>
        </div>
      </div>

      {/* ── RIGHT: sticky photo + widgets ── */}
      <aside className="about-widgets">
        <a href="#work" onClick={scrollToWork} className="pill-btn">See my work <span>↓</span></a>
        <PhotoWidget />
        <RevolvingPhotos />
      </aside>

    </section>
  )
}
