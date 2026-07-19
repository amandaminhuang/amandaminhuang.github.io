import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageStars from '../components/PageStars'

// ── ONE BIG PHOTO OF ME (drop public/amanda.jpg and it appears) ─────────────
function PhotoWidget() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="widget-card photo-big">
      {failed ? (
        <div className="photo-big__placeholder">
          <span className="photo-big__emoji">📷</span>
          <span className="photo-big__label">add a photo of you at <code>public/amanda.jpg</code></span>
        </div>
      ) : (
        <img className="photo-big__img" src="/amanda.jpg" alt="Amanda" onError={() => setFailed(true)} />
      )}
    </div>
  )
}

// ── LIVE WEATHER (Open-Meteo, no key) — New Haven, CT ────────────────────────
function weatherEmoji(code) {
  if (code === 0) return ['☀️', 'clear']
  if (code <= 2) return ['🌤️', 'sunny']
  if (code === 3) return ['☁️', 'cloudy']
  if (code <= 48) return ['🌫️', 'foggy']
  if (code <= 57) return ['🌦️', 'drizzly']
  if (code <= 67 || (code >= 80 && code <= 82)) return ['🌧️', 'rainy']
  if (code <= 86) return ['❄️', 'snowy']
  return ['⛈️', 'stormy']
}
function WeatherCard() {
  const [w, setW] = useState(null)
  useEffect(() => {
    let cancel = false
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.31&longitude=-72.92&current=temperature_2m,weather_code&temperature_unit=fahrenheit')
      .then(r => r.json())
      .then(d => { if (!cancel) setW(d.current) })
      .catch(() => {})
    return () => { cancel = true }
  }, [])
  const [emoji, text] = w ? weatherEmoji(w.weather_code) : ['🌡️', '…']
  return (
    <div className="widget-card wx-card">
      <span className="wx-card__emoji">{emoji}</span>
      <div>
        <div className="wx-card__temp">{w ? `${Math.round(w.temperature_2m)}°F` : '· ·'}</div>
        <div className="wx-card__place">{text} in New Haven, CT</div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <main className="about-layout">
      <PageStars stars={[
        { color: 'coral', size: 30, top: '10%', right: '2%', dur: '6.5s', spin: '14s' },
        { color: 'green', size: 22, top: '72%', left: '1%', dur: '7.5s', spin: '12s', delay: '1s' },
      ]} />

      {/* ── LEFT: the story ── */}
      <div className="about-text">
        <p className="about-kicker">✶ my story</p>
        <h1 className="about-name">Hi, I'm Amanda<span className="accent">.</span></h1>
        <p className="about-lede">
          A first-gen Yale student who likes turning messy problems into clear plans —
          and building things that make a stranger's day a little better.
        </p>

        <div className="about-section">
          <p className="about-section__label">What I'm studying</p>
          <p>
            I'm a first-generation student at <strong>Yale</strong>, studying{' '}
            <strong>Statistics &amp; Data Science</strong> with a certificate in{' '}
            <strong>Computing, Culture &amp; Society</strong>. I like sitting where data,
            strategy, and people meet — figuring out what to build, why it matters, and how
            to actually ship it.
          </p>
        </div>

        <div className="about-section">
          <p className="about-section__label">What I do now</p>
          <p>
            I've gotten to bring missions to life across{' '}
            <strong>Asian American civic advocacy</strong>,{' '}
            <strong>women &amp; gender minorities in tech</strong>, and{' '}
            <strong>federal policy</strong>. Lately that's looked like a{' '}
            <Link to="/projects/sacm" className="about-link">platform evaluation ↗</Link>{' '}
            that cut projected cost by 78%, and{' '}
            <Link to="/projects/civic" className="about-link">digital voter outreach ↗</Link>{' '}
            for first-time AAPI voters.
          </p>
        </div>

        <div className="about-section">
          <p className="about-section__label">Where I'm headed</p>
          <p>
            I'm recruiting for roles in <strong>strategy &amp; operations</strong> or{' '}
            <strong>product management</strong> — places where I can dig into a problem,
            talk to the people it affects, and turn that into something real. Curious how I
            think? Take a look at my{' '}
            <Link to="/projects" className="about-link">work ↗</Link>.
          </p>
        </div>

        <div className="about-section">
          <p className="about-section__label">When I'm not building</p>
          <p>
            You'll find me on a pickleball court, doing the morning mini cryptic, over-ordering
            oat lattes, planning the next trip, or losing at Bananagrams. There's also a{' '}
            <Link to="/nest" className="about-link">little corner of this site ↗</Link>{' '}
            that's just for fun — a pond you can ripple, what I'm watching, and a clock
            ticking away in Niagara Falls.
          </p>
        </div>
      </div>

      {/* ── RIGHT: sticky photo + widgets ── */}
      <aside className="about-widgets">
        <Link to="/projects" className="pill-btn">See my work <span>↗</span></Link>
        <PhotoWidget />
        <WeatherCard />
      </aside>

    </main>
  )
}
