import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/',         label: 'home'     },
  { to: '/about',    label: 'about'    },
  { to: '/projects', label: 'projects' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Link to="/" className="nav__logo">amanda ✦</Link>
      <div className="nav__links">
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}
          >
            {label}
          </NavLink>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav__resume">
          resume ↗
        </a>
      </div>
    </nav>
  )
}