import { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const Terminal = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState([
    {
      type: 'welcome',
      content: (
        <>
          <p>Hi, I'm Muhammad Ahmad Butt, a Software Engineering student at FAST NUCES.</p>
          <p>Welcome to my terminal!</p>
          <p>Type <span className="highlight-text">help</span> to see available commands.</p>
        </>
      )
    }
  ]);
  const outputRef = useRef(null);
  const endOfOutputRef = useRef(null);

  const commands = {
    help: () => ({
      type: 'help',
      content: (
        <div>
          <p>Available commands:</p>
          <p><span className="highlight-text">about</span> - Learn more about me</p>
          <p><span className="highlight-text">skills</span> - View my technical skills</p>
          <p><span className="highlight-text">projects</span> - See my projects</p>
          <p><span className="highlight-text">experience</span> - My work experience</p>
          <p><span className="highlight-text">education</span> - My educational background</p>
          <p><span className="highlight-text">certifications</span> - Competition achievements</p>
          <p><span className="highlight-text">contact</span> - Get in touch</p>
          <p><span className="highlight-text">clear</span> - Clear the terminal</p>
        </div>
      )
    }),
    about: () => ({
      type: 'about',
      content: (
        <div>
            <p>
                I am a 6th-semester BS Software Engineering student at FAST NUCES. I have worked as an XR developer, where my major contributions were in AR/VR development. I am also a competitive programmer and secured 2nd position in the RC3 Speed Programming Competition at Riphah University.
            </p>
        </div>
      )
    }),
    skills: () => ({
      type: 'skills',
      content: (
        <div>
          <p><span className="highlight-text">Languages:</span> C, C++, C#, Python, Java, JavaScript, Assembly</p>
          <p><span className="highlight-text">Web:</span> HTML, CSS, Sass, React, Express.js, Tailwind CSS</p>
          <p><span className="highlight-text">XR/Game Dev:</span> Unity, AR Foundation, Vuforia</p>
          <p><span className="highlight-text">AI/ML:</span> NumPy, Pandas, Scikit-learn</p>
        </div>
      )
    }),
    projects: () => ({
      type: 'projects',
      content: (
        <div>
          <p><span className="highlight-text">AR Projects:</span> IKEA AR, Image Tracking, Plants AR, Portfolio Card</p>
          <p><span className="highlight-text">Web Projects:</span> Book Exchange, MbtiPredictor, Quizify</p>
          <p><span className="highlight-text">Game Dev:</span> 2D/3D Games, VR Stumble Guy</p>
          <p><span className="highlight-text">Others:</span> LogiSim, Emotion Analysis NLP</p>
        </div>
      )
    }),
    experience: () => ({
      type: 'experience',
      content: (
        <div>
          <p><span className="highlight-text">XR Developer</span> @ EggyStudio</p>
          <p>Major contributions in augmented and virtual reality development</p>
        </div>
      )
    }),
    education: () => ({
      type: 'education',
      content: (
        <div>
          <p><span className="highlight-text">Bachelor of Science in Software Engineering (BSSE)</span></p>
          <p>FAST National University of Computer and Emerging Sciences</p>
          <p>Batch 2023 - 2027</p>
          <p>Currently a 6th semester student</p>
        </div>
      )
    }),
    certifications: () => ({
      type: 'certifications',
      content: (
        <div>
          <p><span className="highlight-text">Speed Programming Competitions:</span></p>
          <p>- Riphah RC3 Speed Programming (Secured 2nd Position)</p>
            <p>- ACM FAST Speed Programming</p>
              <p>- UCP Takra Speed Programming</p>
                <p>- ITU Coderush Speed Programming</p>
          <p>- UMT Techverse Speed Programming</p>
          <p>- UCP IEEE Speed Programming</p>
          <p>- UCP Takra Speed Programming</p>
          <p style={{ marginTop: '1rem' }}><span className="highlight-text">Web Hackathons:</span></p>
          <p>- UMT Techverse Web Hackathon</p>
          <p>- UCP Takra Web Hackathon</p>
        </div>
      )
    }),
    contact: () => ({
      type: 'contact',
      content: (
        <div>
          <p><span className="highlight-text">Email:</span> m.ahmad.software.engineer@gmail.com</p>
          <p><span className="highlight-text">GitHub:</span> github.com/m-ahmad-butt</p>
          <p><span className="highlight-text">LinkedIn:</span> linkedin.com/in/m-ahmad-butt</p>
        </div>
      )
    }),
    clear: () => 'clear'
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setOutput([
        {
          type: 'welcome',
          content: (
            <>
              <p>Hi, I'm Muhammad Ahmad Butt, a Software Engineering student at FAST NUCES.</p>
              <p>Welcome to my interactive portfolio terminal!</p>
              <p>Type <span className="highlight-text">help</span> to see available commands.</p>
            </>
          )
        }
      ]);
      return;
    }

    const newOutput = [
      ...output,
      {
        type: 'command',
        content: (
          <div className="command-line">
            <span className="prompt">ahmad@terminal:~$</span>
            <span className="command"> {cmd}</span>
          </div>
        )
      }
    ];

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();
      if (result !== 'clear') {
        newOutput.push(result);
      }
    } else if (trimmedCmd) {
      newOutput.push({
        type: 'error',
        content: <p style={{ color: '#d32f2f' }}>Command not found: {cmd}. Type 'help' for available commands.</p>
      });
    }

    setOutput(newOutput);
  };

  useEffect(() => {
    if (endOfOutputRef.current) {
      endOfOutputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [output]);

  const handleNavClick = (command) => {
    setInputValue(command);
    handleCommand(command);
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  const handleClose = () => {
    setOutput([
      {
        type: 'welcome',
        content: (
          <>
            <p>Hi, I'm Muhammad Ahmad Butt, a Software Engineering student at FAST NUCES.</p>
            <p>Welcome to my terminal!</p>
            <p>Type <span className="highlight-text">help</span> to see available commands.</p>
          </>
        )
      }
    ]);
    setInputValue('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={handleClose}>
      <div className="terminal-container" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="terminal-button close" onClick={handleClose}>×</button>
          </div>
          <div className="terminal-title">terminal</div>
        </div>
        
        <div className="terminal-body" ref={outputRef}>
          <div className="terminal-nav">
            <span className="nav-item" onClick={() => handleNavClick('help')}>help</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('about')}>about</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('projects')}>projects</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('skills')}>skills</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('experience')}>experience</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('education')}>education</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('certifications')}>certifications</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('contact')}>contact</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('clear')}>clear</span>
          </div>

          <div className="terminal-output">
            <div className="command-line initial">
              <span className="prompt">ahmad@portfolio:~$</span>
              <span className="command"> welcome</span>
            </div>
            {output.map((item, index) => (
              <div key={index} className={`output ${item.type}`}>
                {item.content}
              </div>
            ))}
            <div ref={endOfOutputRef} />
          </div>

          <form onSubmit={handleSubmit} className="command-input">
            <span className="prompt">ahmad@portfolio:~$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="input-field"
              autoFocus
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
