import { useState, useEffect, useRef } from 'react'

// ── DATA ──────────────────────────────────────────────────────────────────────

const BOOKS = [
  { title: 'The Design of Everyday Things', author: 'Don Norman',            color: '#D9EEFF', spine: '#6C9BCF' },
  { title: 'Thinking in Systems',           author: 'Donella Meadows',       color: '#F7E1C3', spine: '#C49A52' },
  { title: 'Invisible Women',               author: 'Caroline Criado Perez', color: '#FFD6D6', spine: '#C47070' },
  { title: 'The Mom Test',                  author: 'Rob Fitzpatrick',       color: '#D6F0D6', spine: '#5A9A5A' },
  { title: 'How Big Things Get Done',       author: 'Bent Flyvbjerg',        color: '#E8E0F7', spine: '#7A60C4' },
  { title: 'Thinking, Fast and Slow',       author: 'Daniel Kahneman',       color: '#FFF3CC', spine: '#C4A030' },
]

const THINGS = [
  { emoji: '🏓', label: 'Pickleball',      note: 'Currently trying to master the dink.' },
  { emoji: '✏️', label: 'Mini cryptics',   note: 'The NYT one, every morning, no excuses.' },
  { emoji: '☕', label: 'Cold brew',        note: 'Oat milk, always. No negotiation.' },
  { emoji: '🌆', label: 'City walks',      note: 'Best way to think through a hard problem.' },
  { emoji: '🧩', label: 'Puzzles',         note: 'Logic games, escape rooms, all of it.' },
  { emoji: '📚', label: 'Always mid-book', note: 'Usually 3 at once. No regrets.' },
]

const FUN_PROJECTS = [
  { emoji: '🐱', title: 'Cat Alphabet',      desc: 'A typeface made entirely of cats in different poses.', tag: 'Visual / Typography', bg: '#FFF6E8' },
  { emoji: '🎨', title: 'Charcoal Studies',  desc: 'A series of hand studies in charcoal exploring connection.', tag: 'Fine Art', bg: '#EDF4FB' },
  { emoji: '🪄', title: 'Something fun',     desc: 'Placeholder — add your cool side project here.', tag: 'Creative Tech', bg: '#F7E1C3' },
  { emoji: '🗺️', title: 'Another thing',    desc: 'Placeholder — another fun thing you made or explored.', tag: 'Design', bg: '#E8F0F8' },
]

const SLIDES = [
  { emoji: '📸', caption: 'Add a photo here',       bg: '#FFF6E8' },
  { emoji: '🏓', caption: 'Pickleball adventures',  bg: '#D9EEFF' },
  { emoji: '☕', caption: 'Cold brew research',      bg: '#F7E1C3' },
  { emoji: '✏️', caption: 'Cryptic crossword mode', bg: '#E8F0F8' },
]

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────

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

function Carousel() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent(i => (i + 1) % SLIDES.length)

  return (
    <div>
      <div className="carousel">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {SLIDES.map((slide, i) => (
            <div key={i} className="carousel-slide" style={{ background: slide.bg }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{slide.emoji}</div>
              <p>{slide.caption}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn carousel-btn--prev" onClick={prev}>←</button>
        <button className="carousel-btn carousel-btn--next" onClick={next}>→</button>
      </div>
      <div className="carousel-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
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

function Reveal({ children, style }) {
  const ref = useReveal()
  return <div ref={ref} className="reveal" style={style}>{children}</div>
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <main>

      {/* ── HERO HEADING ── */}
      <div className="about-hero">
        <h1 className="about-hero-heading">
          A little bit more about <em>me</em>...
        </h1>

      </div>

      {/* ── BIO ── */}
      <Reveal>
        <div className="about-bio about-bio--flipped">
          <div className="about-bio-text">
            <h2>Hi there! I'm Amanda, and I want to be a vehicle for technology, creativity, and social impact.</h2>
            <p>
            I am an undergraduate at Yale University pursuing a B.S. in Statistics & Data Science with a Certificate in Computing, Culture, & Society.  I've discovered that I'm passionate about leveraging data and technology to solve complex problems and I want to apply these skills to challenges that directly impact our communities. 
            </p>
            <p>
              At my core, I am curious and driven to understand how everything and everyone is interconnected. By analyzing trends in data, talking directly with my clients, and drawing inspiration from eclectic sources, I love being able to visualize and implement solutions tailored to each problem. 
            </p>
            <p>
              I have been so lucky to work on teams bringing missions to life across{' '}
              <span className="highlight">Asian American civic advocacy</span>,{' '}
              <span className="highlight">women & gender minority empowerment in tech</span>, and{' '}
              <span className="highlight">federal policy</span>, and so excited to continue to learn from different perspectives. 
            </p>

     
          </div>
          <div
            className="about-photo-placeholder about-photo--small"
            style={{ fontSize: '3.5rem', flexShrink: 0 }}
          >
            🙋‍♀️
          </div>
        </div>
      </Reveal>


      {/* ── THINGS I LOVE ── */}
      <div className="about-loves">
        <div className="about-loves-inner">
          <Reveal>
            <h2>Other things I <em>loveeeeeeeeee</em> ♥</h2>
            <div className="about-loves-grid">
              <p>
                I'm a big fan of puzzles in all forms —{' '}
                <span className="highlight">mini cryptic crosswords</span>, logic games,
                anything where the answer clicks into place satisfyingly. I also love
                being outside: pickleball, long walks, any excuse to not be at a desk.
              </p>
              <p>
                You can catch me in a coffee shop with a cold brew and three open books,
                none of them finished. Current obsessions:{' '}
                <span className="highlight">pickleball strategy</span>, neat design
                systems, and finding the best hole-in-the-wall restaurants.
              </p>
            </div>

            <div className="about-things">
              {THINGS.map(t => (
                <div key={t.label} className="about-thing" title={t.note}>
                  <span>{t.emoji}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── CAROUSEL ── */}
          <Reveal style={{ marginTop: '2.5rem' }}>
            <Carousel />
          </Reveal>
        </div>
      </div>

      {/* ── BOOKSHELF ── */}
      <Reveal>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 2rem' }}>
          <p className="eyebrow">what I'm reading</p>
          <h2 className="title-lg" style={{ marginBottom: '0.5rem' }}>My shelf ✦</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            Click a book to see what it is. Usually reading 3 of these at once.
          </p>
          <Bookshelf />
        </div>
      </Reveal>


    </main>
  )
}