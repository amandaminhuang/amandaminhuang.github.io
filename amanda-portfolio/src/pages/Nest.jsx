import { useState, useEffect, useRef } from 'react'

// ── DATA (easy to edit) ─────────────────────────────────────────────────────

// Swap in your Letterboxd username + your real recent films.
const LETTERBOXD_USER = 'amandahuang'
const FILMS = [
  { title: 'Past Lives',            year: 2023, rating: 5,   color: '#2D2F3D' },
  { title: 'Everything Everywhere', year: 2022, rating: 4.5, color: '#3C3F52' },
  { title: 'Perfect Days',          year: 2023, rating: 5,   color: '#24263A' },
  { title: 'The Farewell',          year: 2019, rating: 4,   color: '#45485C' },
]

// Books — click a spine to peek. (moved here from the about page)
const BOOKS = [
  { title: 'The Design of Everyday Things', author: 'Don Norman',            color: '#F9F4EA', spine: '#2D2F3D' },
  { title: 'Thinking in Systems',           author: 'Donella Meadows',       color: '#FBEAC6', spine: '#F2AF36' },
  { title: 'Invisible Women',               author: 'Caroline Criado Perez', color: '#EEE8DC', spine: '#45485C' },
  { title: 'The Mom Test',                  author: 'Rob Fitzpatrick',       color: '#F9F4EA', spine: '#C08A14' },
  { title: 'How Big Things Get Done',       author: 'Bent Flyvbjerg',        color: '#FBEAC6', spine: '#2D2F3D' },
  { title: 'Thinking, Fast and Slow',       author: 'Daniel Kahneman',       color: '#EEE8DC', spine: '#F2AF36' },
]

// Swap this for your own Spotify playlist / track embed URL.
const SPOTIFY_EMBED = 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0'

const CURRENTLY = [
  { emoji: '📖', label: 'reading',  value: 'How Big Things Get Done' },
  { emoji: '🎧', label: 'looping',  value: 'anything with a good bridge' },
  { emoji: '🛠️', label: 'tinkering', value: 'this very website' },
  { emoji: '☕', label: 'drinking', value: 'an oat milk cortado' },
]

// ── WATER RIPPLE POND ───────────────────────────────────────────────────────

function RipplePond() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2)
    let ripples = []
    let raf = 0
    let running = true

    function resize() {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function addRipple(x, y) {
      if (ripples.length > 60) ripples.shift()
      ripples.push({ x, y, r: 0, life: 1 })
    }

    function pointer(e) {
      const rect = canvas.getBoundingClientRect()
      const point = e.touches ? e.touches[0] : e
      addRipple(point.clientX - rect.left, point.clientY - rect.top)
    }

    // occasional auto-ripples so the pond feels alive
    let sinceAuto = 0
    function draw() {
      if (!running) return
      // pond gradient
      const g = ctx.createLinearGradient(0, 0, width, height)
      g.addColorStop(0, '#F4EFE6')
      g.addColorStop(0.5, '#F7D488')
      g.addColorStop(1, '#EFE3C6')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      sinceAuto += 1
      if (sinceAuto > 90) {
        sinceAuto = 0
        addRipple(Math.abs((width * 0.5) + Math.sin(ripples.length) * width * 0.3),
                  Math.abs((height * 0.5) + Math.cos(ripples.length) * height * 0.3))
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]
        rp.r += 1.7
        rp.life -= 0.011
        if (rp.life <= 0) { ripples.splice(i, 1); continue }
        for (let k = 0; k < 3; k++) {
          const rr = rp.r - k * 9
          if (rr <= 0) continue
          ctx.beginPath()
          ctx.arc(rp.x, rp.y, rr, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(45, 47, 61, ${rp.life * (0.24 - k * 0.06)})`
          ctx.lineWidth = 2 - k * 0.5
          ctx.stroke()
        }
        // bright inner highlight
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 250, 240, ${rp.life * 0.28})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', pointer)
    canvas.addEventListener('pointerdown', pointer)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', pointer)
      canvas.removeEventListener('pointerdown', pointer)
    }
  }, [])

  return (
    <div className="pond">
      <canvas ref={canvasRef} className="pond__canvas" />
      <span className="pond__hint">✶ touch the water ✶</span>
    </div>
  )
}

// ── LIVE CLOCK — Niagara Falls, New York (Eastern time) ─────────────────────

function NiagaraClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const time = now.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true,
  })
  return (
    <div className="niagara-clock">
      <div className="niagara-clock__time">{time}</div>
      <div className="niagara-clock__place">🌊 right now in Niagara Falls, New York</div>
    </div>
  )
}

// ── STARS HELPER ────────────────────────────────────────────────────────────

function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <span className="film__stars" aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}{half ? '½' : ''}
    </span>
  )
}

// ── BOOKSHELF ───────────────────────────────────────────────────────────────

function Bookshelf() {
  const [activeBook, setActiveBook] = useState(null)
  return (
    <div className="bookshelf-wrap">
      <div className="bookshelf">
        {BOOKS.map((book, i) => (
          <div
            key={i}
            className={`book ${activeBook === i ? 'book--active' : ''}`}
            style={{ '--spine': book.spine, '--cover': book.color, animationDelay: `${i * 0.08}s` }}
            onClick={() => setActiveBook(activeBook === i ? null : i)}
          >
            <div className="book__spine">
              <span className="book__title-spine">{book.title}</span>
            </div>
            <div className="book__cover">
              <p className="book__cover-title">{book.title}</p>
              <p className="book__cover-author">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bookshelf__plank" />
      {activeBook !== null && (
        <div className="book-tooltip">
          <strong>{BOOKS[activeBook].title}</strong>
          <span> — {BOOKS[activeBook].author}</span>
        </div>
      )}
    </div>
  )
}

// ── PAGE ────────────────────────────────────────────────────────────────────

export default function Nest() {
  return (
    <main className="nest-page">
      <header className="nest-header">
        <p className="eyebrow">welcome to</p>
        <h1 className="title-xl">the nest ✶</h1>
        <p className="subtitle" style={{ maxWidth: 520 }}>
          A little corner of the internet that's just for fun — what I'm watching,
          listening to, and the time ticking away in Niagara Falls. Poke around.
        </p>
      </header>

      <NiagaraClock />

      <RipplePond />

      <div className="nest-widgets">

        {/* Currently */}
        <div className="widget widget--currently">
          <p className="widget__label">currently</p>
          <ul className="currently-list">
            {CURRENTLY.map(c => (
              <li key={c.label}>
                <span className="currently-list__emoji">{c.emoji}</span>
                <span className="currently-list__label">{c.label}</span>
                <span className="currently-list__value">{c.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spotify */}
        <div className="widget widget--music">
          <p className="widget__label">on repeat 🎧</p>
          <iframe
            title="Spotify player"
            className="widget__spotify"
            src={SPOTIFY_EMBED}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        {/* Letterboxd */}
        <div className="widget widget--films">
          <div className="widget__head">
            <p className="widget__label">recently watched 🎬</p>
            <a
              href={`https://letterboxd.com/${LETTERBOXD_USER}/`}
              target="_blank"
              rel="noreferrer"
              className="link--accent"
              style={{ fontSize: '0.8rem' }}
            >
              Letterboxd ↗
            </a>
          </div>
          <div className="film-grid">
            {FILMS.map(f => (
              <div key={f.title} className="film">
                <div className="film__poster" style={{ background: f.color }}>
                  <span className="film__poster-title">{f.title}</span>
                </div>
                <p className="film__meta">
                  <Stars rating={f.rating} /> · {f.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bookshelf */}
        <div className="widget widget--shelf">
          <p className="widget__label">my shelf 📚</p>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            Click a spine to peek — usually reading three of these at once.
          </p>
          <Bookshelf />
        </div>
      </div>

      <p className="nest-footnote">
        ✶ everything here is hand-editable — swap in your own films, playlist, and city ✶
      </p>
    </main>
  )
}
