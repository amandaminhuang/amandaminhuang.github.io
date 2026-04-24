import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <h1>Contact</h1>
      <p>Happy to chat about a role, a project, or pickleball.</p>

      {sent ? (
        <p>Message sent! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label><br />
            <input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label><br />
            <textarea id="message" rows={5} required />
          </div>
          <button type="submit">Send</button>
        </form>
      )}

      <ul>
        <li><a href="mailto:amanda.huang@yale.edu">amanda.huang@yale.edu</a></li>
        <li><a href="https://linkedin.com/in/amandaminhuang" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
      </ul>
    </main>
  )
}