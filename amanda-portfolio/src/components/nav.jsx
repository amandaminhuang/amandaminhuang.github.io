import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/',         label: 'Home', end: true },
  { to: '/about',    label: 'Me' },
  { to: '/projects', label: 'Work' },
]

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
