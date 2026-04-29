import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const CASE_STUDIES = {
  civic: {
    tag: 'Civic Tech · Government',
    title: 'Simplifying a public-facing government service',
    color: 'yellow',
    meta: [
      { label: 'My role',   value: 'Product Manager' },
      { label: 'Timeline',  value: 'Summer 2025' },
      { label: 'Team',      value: 'PM, Design, Eng, Policy' },
      { label: 'Methods',   value: 'Research · Roadmapping' },
    ],
    slides: [
      { type: 'placeholder', bg: 'var(--yellow)', emoji: '🏛️', caption: 'Project overview' },
      { type: 'placeholder', bg: 'var(--peach)',  emoji: '🔍', caption: 'Research & discovery' },
      { type: 'placeholder', bg: 'var(--blue)',   emoji: '📋', caption: 'Process & decisions' },
      { type: 'placeholder', bg: 'var(--green)',  emoji: '✅', caption: 'Outcomes & impact' },
    ],
    intro: 'A city service that technically existed — but wasn\'t designed for the people who needed it most. My job was to change that.',
    stats: [
      { num: '↑40%', label: 'Task completion rate' },
      { num: '3×',   label: 'Faster time-to-complete' },
      { num: '↓28%', label: 'Support tickets' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'Built for the institution, not the resident.',
        body: 'The service existed. Technically it was accessible. But the experience of actually using it was built around institutional logic, not human needs. Residents who didn\'t have a college degree, whose first language wasn\'t English, or who were already stressed — they were failing at disproportionate rates.',
        callout: '"She kept clicking back because she didn\'t know if she\'d submitted it or not. The confirmation page didn\'t say done. It said processed."',
      },
      {
        label: 'What I did',
        heading: 'Listen first. Then build.',
        body: 'I ran usability sessions and structured interviews with residents who had recently used the service. Drop-off happened at the same three moments every time — not randomly. That pointed to fixable, specific problems. We prioritized ruthlessly: plain language rewrites, mobile-responsive layout, a progress indicator, and a confirmation screen that just said "You\'re done."',
      },
      {
        label: 'What I learned',
        heading: 'Bureaucratic language is a design choice.',
        body: 'Changing "your application has been received for processing" to "we got it — you\'ll hear from us in 5 business days" is a policy decision as much as a design one. Getting sign-off required more stakeholder alignment than I expected. And version one didn\'t fix everything — that\'s the point.',
      },
    ],
    prev: null,
    next: 'nonprofit',
  },
  nonprofit: {
    tag: 'Education · Nonprofit',
    title: 'Coding curriculum for girls in tech',
    color: 'green',
    meta: [
      { label: 'My role',   value: 'Program PM' },
      { label: 'Timeline',  value: 'Ongoing' },
      { label: 'Team',      value: 'Curriculum & Community' },
      { label: 'Methods',   value: 'Interviews · Iteration' },
    ],
    slides: [
      { type: 'placeholder', bg: 'var(--green)',  emoji: '👩‍💻', caption: 'The program' },
      { type: 'placeholder', bg: 'var(--purple)', emoji: '🎓', caption: 'Student experience' },
      { type: 'placeholder', bg: 'var(--peach)',  emoji: '💬', caption: 'Feedback & iteration' },
      { type: 'placeholder', bg: 'var(--yellow)', emoji: '📈', caption: 'Impact' },
    ],
    intro: 'The best products get built by people who were once locked out of building them. This work keeps me grounded.',
    stats: [
      { num: '50+', label: 'Students impacted' },
      { num: '2×',  label: 'Retention vs. prior year' },
      { num: '↑60%', label: 'Confidence survey score' },
    ],
    sections: [
      {
        label: 'The problem',
        heading: 'The experience was losing students before they started.',
        body: 'Friction in the onboarding. Sessions that assumed prior knowledge. A curriculum that checked boxes but didn\'t build real confidence. Every friction point was a potential reason to quit — and for students who\'ve already been told tech "isn\'t for them," the bar for staying is lower.',
        callout: '"She said it was the first time she felt like she could actually build something — not just use someone else\'s thing."',
      },
      {
        label: 'What I did',
        heading: 'Treat the learner as the user.',
        body: 'I helped reshape the learning experience using the same PM tools I\'d use on any product — user interviews, friction mapping, iteration cycles. We simplified the onboarding, introduced more scaffolded early wins, and built in explicit moments for students to see their own progress.',
      },
      {
        label: 'What I learned',
        heading: 'Trust is a product feature.',
        body: 'Students don\'t just need to learn the skills — they need to believe they belong in the room. That\'s a design problem, not just a pedagogy problem. It changed how I think about every product I work on: who is this designed to make feel welcome, and who does it quietly turn away?',
      },
    ],
    prev: 'civic',
    next: 'research',
  },
  research: {
    tag: 'Research · Discovery',
    title: 'How do first-time users actually onboard?',
    color: 'blue',
    meta: [
      { label: 'My role',   value: 'Lead Researcher' },
      { label: 'Timeline',  value: '8 weeks' },
      { label: 'Team',      value: 'Solo + stakeholders' },
      { label: 'Methods',   value: 'Usability · Synthesis' },
    ],
    slides: [
      { type: 'placeholder', bg: 'var(--blue)',   emoji: '🔍', caption: 'Research question' },
      { type: 'placeholder', bg: 'var(--purple)', emoji: '🎙️', caption: 'User sessions' },
      { type: 'placeholder', bg: 'var(--peach)',  emoji: '🗂️', caption: 'Synthesis' },
      { type: 'placeholder', bg: 'var(--green)',  emoji: '💡', caption: 'Key insights' },
    ],
    intro: 'Where are users getting lost? Not where you think. This project taught me to watch what people do, not just what they say.',
    stats: [
      { num: '12',  label: 'Usability sessions' },
      { num: '5',   label: 'Key insight clusters' },
      { num: '3×',  label: 'Drop-off reduced' },
    ],
    sections: [
      {
        label: 'The question',
        heading: 'Where do new users actually get stuck?',
        body: 'The assumption was that users dropped off because the product was too complex. The research told a different story. Drop-off was concentrated at three specific moments — none of which were the ones the team had been optimizing for.',
        callout: '"The drop-off wasn\'t random. It never is. It always points at something specific."',
      },
      {
        label: 'Method',
        heading: 'Structured sessions, open ears.',
        body: 'Twelve usability sessions with first-time users. I used a think-aloud protocol and avoided leading questions. The goal was to watch what people actually did, not to confirm what we already believed. Synthesis happened in affinity clusters — five distinct insight groups emerged.',
      },
      {
        label: 'What I learned',
        heading: 'The most important skill in research is shutting up.',
        body: 'Every time I resisted the urge to explain or assist, the session got more useful. People will find a path through almost anything if you let them try. And the moments where they can\'t — those are your roadmap.',
      },
    ],
    prev: 'nonprofit',
    next: null,
  },
}

const STAT_COLORS = ['yellow', 'blue', 'peach']

function SlideShow({ slides }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [slides.length])

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  return (
    <div className="detail-header">
      <div
        className="detail-header__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="detail-header__slide"
            style={{ background: slide.type === 'placeholder' ? slide.bg : undefined }}
          >
            {slide.type === 'image'
              ? <img src={slide.src} alt={slide.caption} />
              : <>
                  <span style={{ fontSize: '4rem' }}>{slide.emoji}</span>
                  <span style={{ fontSize: '0.9rem', opacity: 0.7, letterSpacing: '0.08em' }}>
                    {slide.caption}
                  </span>
                </>
            }
          </div>
        ))}
      </div>

      <button className="detail-header__btn detail-header__btn--prev" onClick={prev}>←</button>
      <button className="detail-header__btn detail-header__btn--next" onClick={next}>→</button>

      <div className="detail-header__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`detail-header__dot ${i === current ? 'detail-header__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetails() {
  const { id } = useParams()
  const p = CASE_STUDIES[id]

  if (!p) return (
    <main style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <p>Project not found.</p>
      <Link to="/projects" className="link--accent">← back to projects</Link>
    </main>
  )

  return (
    <main className="detail-page">

      {/* ── SLIDING HEADER ── */}
      <SlideShow slides={p.slides} />

      {/* ── TITLE ── */}
      <div className="detail-body">
        <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>{p.tag}</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '2rem', lineHeight: 1.15 }}>
          {p.title}
        </h1>
      </div>

      {/* ── META STRIP ── */}
      <div className="detail-meta">
        {p.meta.map(m => (
          <div key={m.label} className="detail-meta__item">
            <div className="detail-meta__label">{m.label}</div>
            <div className="detail-meta__value">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="detail-body">

        {/* ── INTRO ── */}
        <p className="detail-intro">{p.intro}</p>

        {/* ── STATS ── */}
        <div className="detail-stats">
          {p.stats.map((stat, i) => (
            <div key={stat.label} className={`detail-stat card--${STAT_COLORS[i % 3]}`}>
              <span className="detail-stat__num">{stat.num}</span>
              <span className="detail-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── SECTIONS ── */}
        {p.sections.map(sec => (
          <div key={sec.label} className="detail-section">
            <p className="detail-section__label">{sec.label}</p>
            <h2>{sec.heading}</h2>
            <p>{sec.body}</p>
            {sec.callout && (
              <div className="detail-callout">{sec.callout}</div>
            )}
          </div>
        ))}

        {/* ── PREV / NEXT ── */}
        <div className="detail-nav">
          {p.prev
            ? <Link to={`/projects/${p.prev}`} className="link--accent">← previous</Link>
            : <span />}
          <Link to="/projects" className="link--muted">all projects</Link>
          {p.next
            ? <Link to={`/projects/${p.next}`} className="link--accent">next →</Link>
            : <span />}
        </div>

      </div>
    </main>
  )
}