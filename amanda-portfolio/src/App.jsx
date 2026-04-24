import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import ProjectDetail from './pages/project_items'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/projects" element={<projects />} />
        <Route path="/projects/:id" element={<project_items />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}