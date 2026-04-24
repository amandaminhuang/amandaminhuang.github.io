import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <main>
      <h1>Hi, I'm Amanda.</h1>
      <p>Product manager. Great friend.</p>
      <Link to="/projects">See my work</Link>
      {' · '}
      <Link to="/contact">Get in touch</Link>
    </main>
  )
}