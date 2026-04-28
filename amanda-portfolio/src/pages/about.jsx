import { useState } from 'react'

const SLIDES = [
  { type: 'placeholder', bg: 'var(--yellow)', emoji: '📸', caption: 'Add a photo here' },
  { type: 'placeholder', bg: 'var(--blue)',   emoji: '🏓', caption: 'Pickleball adventures' },
  { type: 'placeholder', bg: 'var(--green)',  emoji: '☕', caption: 'Cold brew research' },
  { type: 'placeholder', bg: 'var(--purple)', emoji: '✏️', caption: 'Cryptic crossword mode' },
]

const BOOKS = [
  'The Design of Everyday Things — Don Norman',
  'Thinking in Systems — Donella Meadows',
  'Invisible Women — Caroline Criado Perez',
  'The Mom Test — Rob Fitzpatrick',
  'How Big Things Get Done — Bent Flyvbjerg',
]

const THINGS = [
  { emoji: '🏓', label: 'Pickleball',      easter: false },
  { emoji: '✏️', label: 'Mini cryptics',   easter: false },
  { emoji: '☕', label: 'Cold brew',        easter: false },
  { emoji: '📚', label: 'Always mid-book', easter: true  },
  { emoji: '🌆', label: 'City walks',      easter: false },
  { emoji: '🧩', label: 'Puzzles',         easter: false },
]

function Carousel() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent(i => (i + 1) % SLIDES.length)

  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="carousel-slide"
              style={{ background: slide.type === 'placeholder' ? slide.bg : undefined }}
            >
              {slide.type === 'image'
                ? <img src={slide.src} alt={slide.caption} />
                : <div>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{slide.emoji}</div>
                    <p>{slide.caption}</p>
                  </div>
              }
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

export default function About() {
  const [booksOpen, setBooksOpen] = useState(false)

  return (
    <main>

      <div className="about-hero">
        <h1 className="about-hero-heading">
          A little bit more about <em>me</em>...
        </h1>
      </div>

      <div className="about-bio">
        <img src="/photo.jpg" alt="Amanda" className="about-photo" />
        <div className="about-bio-text">
          <h2>Hi, I'm Amanda — a builder and people-first PM.</h2>
          <p>
            XYZ XYZ

            AADDDD HERE
          </p>
          <p>
            XYZ XYZ

            AADDDD HERE
          </p>
          <p>
            XYZ XYZ

            AADDDD HERE
          </p>
          <p>My side quest: build something that makes a stranger's day noticeably better. 🌟</p>
        </div>
      </div>

      <div className="about-loves">
        <div className="about-loves-inner">
          <h2>Other things I <em>loveeeeeeeeee</em> ♥</h2>

          <div className="about-loves-grid">
            <p>
              I'm a big fan of puzzles in all forms —{' '}
              <span className="highlight">mini cryptic crosswords</span>, logic games,
              anything where the answer clicks into place satisfyingly. I also love
              being outside: pickleball, long walks, any excuse to not be at my desk.
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
              t.easter ? (
                <div key={t.label} className="easter-egg-wrap">
                  <div
                    className="about-thing"
                    onClick={() => setBooksOpen(o => !o)}
                    style={{ cursor: 'pointer', background: booksOpen ? 'var(--yellow)' : 'white' }}
                  >
                    <span>{t.emoji}</span>
                    {t.label} {booksOpen ? '▲' : '▼'}
                  </div>

                  {booksOpen && (
                    <div className="book-popover">
                      <h4>📚 currently on my shelf</h4>
                      <ul className="book-list">
                        {BOOKS.map(book => (
                          <li key={book}>{book}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div key={t.label} className="about-thing">
                  <span>{t.emoji}</span>
                  {t.label}
                </div>
              )
            ))}
          </div>

          <Carousel />
        </div>
      </div>

    </main>
  )
}