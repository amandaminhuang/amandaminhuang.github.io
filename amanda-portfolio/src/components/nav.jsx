import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/',         label: 'Home', end: true },
  { to: '/projects', label: 'Work' },
  { to: '/nest',     label: 'Nest' },
]

// The cat is the brand mark (also the favicon).
function CatMark() {
  return (
    <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
      <rect width="64" height="64" rx="15" fill="#F2AF36" />
      <g fill="none" stroke="#2D2F3D" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 41 L23 15 L31 33 Q32 35 33 33 L41 15 L48 41" />
        <path d="M25 45 Q13 43 8 46" />
        <path d="M25 50 Q14 53 9 58" />
        <path d="M39 45 Q51 43 56 46" />
        <path d="M39 50 Q50 53 55 58" />
        <path d="M24 52 Q32 61 40 52" />
      </g>
      <circle cx="26" cy="41" r="2.4" fill="#2D2F3D" />
      <circle cx="38" cy="41" r="2.4" fill="#2D2F3D" />
      <path d="M30 46 Q32 50 34 46 Q32 48.5 30 46 Z" fill="#2D2F3D" />
    </svg>
  )
}

// Zoomable resume viewer. Drop your resume at public/resume.png (image, for zoom)
// and optionally public/resume.pdf (for the "Open PDF" button).
function ResumeModal({ onClose }) {
  const [zoom, setZoom] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="resume-modal" onClick={onClose}>
      <div className="resume-modal__panel" onClick={e => e.stopPropagation()}>
        <div className="resume-modal__bar">
          <span className="resume-modal__title">📄 Resume</span>
          <div className="resume-modal__actions">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-modal__link">Open PDF ↗</a>
            <button className="resume-modal__close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        <div className="resume-modal__scroll">
          {failed ? (
            <div className="resume-modal__placeholder">
              <p>Add your resume image at <code>public/resume.png</code></p>
              <p className="muted" style={{ marginTop: '0.4rem' }}>
                (and a <code>public/resume.pdf</code> for the “Open PDF” button)
              </p>
            </div>
          ) : (
            <img
              className={`resume-img ${zoom ? 'is-zoomed' : ''}`}
              src="/resume.png"
              alt="Amanda's resume"
              onClick={() => setZoom(z => !z)}
              onError={() => setFailed(true)}
            />
          )}
        </div>

        {!failed && (
          <p className="resume-modal__hint">{zoom ? 'click the page to zoom out' : 'click the page to zoom in'}</p>
        )}
      </div>
    </div>
  )
}

export default function Nav() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <Link to="/" className="brand-logo" aria-label="Amanda — home">
        <CatMark />
      </Link>

      <nav className="pillnav">
        {LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => isActive ? 'pillnav__link pillnav__link--active' : 'pillnav__link'}
          >
            {label}
          </NavLink>
        ))}
        <button className="pillnav__link pillnav__resume" onClick={() => setResumeOpen(true)}>
          Resume
        </button>
      </nav>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  )
}
