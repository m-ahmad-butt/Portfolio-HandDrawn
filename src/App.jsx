import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import './App.css'

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <LandingPage />
      <About />
      <Projects />
      <Footer onTerminalClick={() => setIsTerminalOpen(true)} />
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  )
}

export default App
