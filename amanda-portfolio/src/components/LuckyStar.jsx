import { useState, useEffect } from 'react'
import PaperStar from './PaperStar'

// A little paper lucky star tucked in the corner. Click it and it "unfolds"
// into a hidden note with ways to get in touch — a friendly easter egg.
export default function LuckyStar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        className="lucky-star"
        onClick={() => setOpen(true)}
        aria-label="Open the lucky star — ways to reach me"
        title="psst… open me ✶"
      >
        <PaperStar size={40} />
      </button>

      {open && (
        <div className="starnote" onClick={() => setOpen(false)}>
          <div className="starnote__card" onClick={e => e.stopPropagation()}>
            <div className="starnote__star"><PaperStar size={56} /></div>
            <p className="starnote__eyebrow">✶ you found the lucky star ✶</p>
            <p className="starnote__msg">Let's connect — here's how to reach me:</p>

            <div className="starnote__links">
              <a className="starnote__link" href="mailto:amanda.huang@yale.edu">
                <span className="starnote__link-ic">✉️</span> amanda.huang@yale.edu
              </a>
              <a className="starnote__link" href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">
                <span className="starnote__link-ic">in</span> LinkedIn ↗
              </a>
              <a className="starnote__link" href="/resume.pdf" target="_blank" rel="noreferrer">
                <span className="starnote__link-ic">📄</span> Resume ↗
              </a>
            </div>

            <button className="starnote__btn starnote__btn--close" onClick={() => setOpen(false)}>close</button>
          </div>
        </div>
      )}
    </>
  )
}
