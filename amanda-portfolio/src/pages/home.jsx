import { useEffect, useRef } from 'react'
import PageStars from '../components/PageStars'
import MeSection from '../sections/MeSection'
import WorkSection from '../sections/WorkSection'

const scrollTo = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    // scroll-reveal for sections
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.onepage .reveal-up').forEach(el => io.observe(el))

    // scroll-linked fade + drift on the hero (the "long scroll" effect)
    const hero = heroRef.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / (window.innerHeight * 0.9), 1)
        if (hero) hero.style.setProperty('--scroll', String(p))
      })
    }
    if (!reduce) {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    }
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main className="onepage">
      <PageStars stars={[
        { name: 'pink',    size: 52, top: '7%',  left: '6%',  dur: '6s',   spin: '13s' },
        { name: 'blue',    size: 42, top: '20%', right: '5%', dur: '7s',   spin: '15s', delay: '1.2s' },
        { name: 'speckle', size: 38, top: '43%', left: '7%',  dur: '6.8s', spin: '12s', delay: '0.6s' },
        { name: 'teal',    size: 42, top: '58%', right: '4%', dur: '6.5s', spin: '14s', delay: '0.4s' },
        { name: 'cream',   size: 44, top: '75%', left: '7%',  dur: '7.2s', spin: '13s', delay: '1s'   },
        { name: 'rose',    size: 36, top: '90%', right: '6%', dur: '6.4s', spin: '12s', delay: '0.8s' },
      ]} />

      {/* ── HOME / HERO (pins + fades over a long scroll) ── */}
      <section id="home" className="landing-hero-wrap">
        <div className="landing-hero" ref={heroRef}>
          <div className="landing-hero__inner">
            <h1 className="landing-hero__name landing-hero__name--img">
              <img src="/amanda.png" alt="Amanda" />
            </h1>
            <p className="landing-hero__intro">
              First-gen Yale student passionate about understanding how people interact with
              technology — and building solutions to make our world more accessible.
            </p>
            <div className="landing-hero__ctas">
              <a href="#work" onClick={e => scrollTo(e, 'work')} className="pill-btn">see my work <span>↓</span></a>
            </div>
          </div>
          <a href="#me" onClick={e => scrollTo(e, 'me')} className="landing-scroll" aria-label="Scroll down">↓</a>
        </div>
      </section>

      {/* ── ME ── */}
      <MeSection />

      {/* ── WORK ── */}
      <WorkSection />

    </main>
  )
}
