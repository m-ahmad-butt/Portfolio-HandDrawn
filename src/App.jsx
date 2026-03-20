import { useState, useEffect } from 'react'
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

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const projectsSection = document.getElementById('projects-section-start');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
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
