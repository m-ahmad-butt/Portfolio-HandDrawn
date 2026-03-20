import { useState, useEffect, useRef } from 'react'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import './App.css'

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const prevProjectRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) {
      window.scrollTo(0, 0);
      if (prevProjectRef.current) {
        const element = document.getElementById('projects-section-start');
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
    prevProjectRef.current = selectedProject;
  }, [selectedProject]);

  if (selectedProject) {
    return (
      <div className="app-detail-view">
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
        <Footer onTerminalClick={() => setIsTerminalOpen(true)} />
        <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      </div>
    );
  }

  return (
    <>
      <LandingPage />
      <About />
      <Projects onProjectSelect={(project) => setSelectedProject(project)} />
      <Footer onTerminalClick={() => setIsTerminalOpen(true)} />
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  )
}

export default App
