import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Services from './components/Services'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Services/>
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

