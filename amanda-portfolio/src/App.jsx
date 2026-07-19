import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import LuckyStar from './components/LuckyStar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Nest from './pages/Nest'

export default function App() {
  return (
    <BrowserRouter>
      <LuckyStar />
      <Nav />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/projects"     element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/nest"         element={<Nest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
