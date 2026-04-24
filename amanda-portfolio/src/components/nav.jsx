import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2.5rem',
      borderBottom: '2px solid var(--border)',
      background: 'var(--bg)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.4rem',
        fontWeight: 700,
        color: 'var(--orange)',
        letterSpacing: '-0.01em',
      }}>
        amanda ✦
      </Link>

      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {[['/', 'home'], ['/about', 'about'], ['/projects', 'projects'], ['/contact', 'contact']].map(([path, label]) => (
          <NavLink key={path} to={path} end={path === '/'} style={({ isActive }) => ({
            padding: '0.4rem 1rem',
            borderRadius: 100,
            fontSize: '0.88rem',
            fontWeight: 400,
            background: isActive ? 'var(--yellow)' : 'transparent',
            color: 'var(--text)',
            transition: 'background 0.2s',
          })}>
            {label}
          </NavLink>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{
          padding: '0.4rem 1rem',
          borderRadius: 100,
          fontSize: '0.88rem',
          background: 'var(--orange)',
          color: 'white',
          fontWeight: 500,
        }}>
          resume ↗
        </a>
      </div>
    </nav>
  )
}