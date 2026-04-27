import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <main className="page">

      <div className="card card--lg card--peach">
        <p className="eyebrow">get in touch</p>
        <h1 className="title-lg">say hello! 👋</h1>
      </div>

      <div className="card card--white">
        {sent ? (
          <p className="title-md">message sent! i'll get back to you soon ✦</p>
        ) : (
          <form className="form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
            <div className="form__group">
              <label className="form__label">name</label>
              <input type="text" required className="form__input" />
            </div>
            <div className="form__group">
              <label className="form__label">email</label>
              <input type="email" required className="form__input" />
            </div>
            <div className="form__group">
              <label className="form__label">message</label>
              <textarea rows={5} required className="form__textarea" />
            </div>
            <button type="submit" className="btn btn--primary btn--submit">send it ✦</button>
          </form>
        )}

        <div className="links-row" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid var(--border)' }}>
          <a href="mailto:amanda.huang@yale.edu" className="link--accent">amanda.huang@yale.edu</a>
          <a href="https://www.linkedin.com/in/amandaminhuang/" target="_blank" rel="noreferrer" className="link--accent">LinkedIn ↗</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="link--accent">Resume ↗</a>
        </div>
      </div>

    </main>
  )
}