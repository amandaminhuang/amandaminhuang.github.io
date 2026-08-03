import { useState } from 'react'

function PhotoWidget() {
  const [failed, setFailed] = useState(false)
  return failed ? (
    <div className="me-photo-placeholder">🙋‍♀️</div>
  ) : (
    <img
      className="me-photo"
      src="/amandahuang.png"
      alt="Amanda"
      onError={() => setFailed(true)}
    />
  )
}

export default function MeSection() {
  return (
    <section id="me" className="me-split">

      {/* ── LEFT: sticky name + photo ── */}
      <div className="me-left">
        <div className="me-name">
          <span className="me-name__im">I'm</span>
          <span className="me-name__main">Amanda<span className="me-name__dot">.</span></span>
        </div>
        <PhotoWidget />
      </div>

      {/* ── RIGHT: scrolling chapters ── */}
      <div className="me-right">
        <div className="me-chapter">
          <p className="me-chapter__label"> me!</p>
          <p>
            At Yale, I study <strong>Statistics & Data Science</strong> and{' '}
            <strong>Computing, Culture & Society</strong> — drawn to the intersection
            of technology, data, and people.
          </p>
        </div>

        <div className="me-chapter">
          <p className="me-chapter__label">what I'm Up To</p>
          <p>
            I'm passionate about building products that solve real problems.
            I've worked across <strong>civic tech</strong>,{' '}
            <strong>women & gender minorities in tech</strong>, and the{' '}
            <strong>public sector</strong>. Most recently at Deloitte, I built a
            0-to-1 application that turned a manual onboarding process across seven
            systems into a single automated platform.
          </p>
        </div>

        <div className="me-chapter">
          <p className="me-chapter__label">Afterhours</p>
          <p>
            You'll find me playing pickleball, drinking dirty chai
            lattes, or hiking around New York (State). Always happy to connect!
          </p>
        </div>
      </div>

    </section>
  )
}