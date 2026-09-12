import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AllProjects from './pages/AllProjects';
import './App.css';
import './pages/AllProjects.css';

function App() {
  const [page, setPage] = useState('home');
  const [anim, setAnim] = useState('enter');

  const goTo = (next) => {
    if (next === page) return;
    setAnim('exit');
    window.setTimeout(() => {
      setPage(next);
      setAnim('enter');
      window.scrollTo(0, 0);
    }, 280);
  };

  return (
    <div key={page} className={`page-shell page-shell--${anim}`}>
      {page === 'home' ? (
        <LandingPage onViewWork={() => goTo('projects')} />
      ) : (
        <AllProjects onBack={() => goTo('home')} />
      )}
    </div>
  );
}

export default App;
