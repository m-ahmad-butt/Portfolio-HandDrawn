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
          <p><span className="highlight-text">honors</span> - Key hackathon achievements</p>
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
            I am a Software Engineering student at FAST NUCES with hands-on experience in AI, NLP, and LLM fine-tuning. I specialize in building end-to-end AI pipelines, from data preprocessing to deployment using FastAPI and scalable backends. I have a strong background in microservices, real-time systems, and XR development.
          </p>
        </div>
      )
    }),
    skills: () => ({
      type: 'skills',
      content: (
        <div>
          <p><span className="highlight-text">AI & ML:</span> PyTorch, TensorFlow, Scikit-learn, Hugging Face, Unsloth (QLoRa), NLP</p>
          <p><span className="highlight-text">Backend:</span> Java (Spring Boot), JavaScript (Express), Python (FastAPI, Flask)</p>
          <p><span className="highlight-text">Infrastructure:</span> Microservices (Eureka, Kafka), AWS, Docker, CI/CD (GitLab)</p>
          <p><span className="highlight-text">Languages:</span> Python, Java, JavaScript, C#, C++, C, Assembly</p>
        </div>
      )
    }),
    projects: () => ({
      type: 'projects',
      content: (
        <div>
          <p><span className="highlight-text">AI / ML:</span> PersonaFlow MBTI, Cricket Commentary AI, Pneumonia Detection</p>
          <p><span className="highlight-text">Platforms:</span> Apex (AI Career), FAST-Ex Marketplace, Quizify</p>
          <p><span className="highlight-text">XR & Games:</span> AR IKEA, VR Stumble Guy, 2D/3D Unity Games</p>
          <p><span className="highlight-text">Portal:</span> Lost & Found</p>
        </div>
      )
    }),
    experience: () => ({
      type: 'experience',
      content: (
        <div>
          <p><span className="highlight-text">XR Developer</span> @ EggyStudio (06/2025 – 08/2025)</p>
          <p>Developed AR/VR apps for Android and Meta Quest 3 in Unity, delivering weekly features in a collaborative cross-team environment.</p>
        </div>
      )
    }),
    education: () => ({
      type: 'education',
      content: (
        <div>
          <p><span className="highlight-text">BS Software Engineering</span></p>
          <p>FAST National University of Computer and Emerging Sciences (NUCES)</p>
          <p>Lahore, Pakistan | 08/2023 – Present</p>
        </div>
      )
    }),
    honors: () => ({
      type: 'honors',
      content: (
        <div>
          <p><span className="highlight-text">Hackathon Wins & Honors:</span></p>
          <p>- 2nd Position: RC3 Speed Programming @ FAST NUCES</p>
          <p>- 3rd Position: UCP Taakra Web Hackathon</p>

        </div>
      )
    }),
    certifications: () => ({
      type: 'certifications',
      content: (
        <div>
          <p>- 7th @ ACM FAST NUCES</p>
          <p>- 11th @ UMT Techverse</p>
          <p>- 14th @ UCP Taakra</p>
          <p>- 14th @ IEE ACM UCP</p>
          <p>- 18th @ ITU Coderush</p>
          <p>- 3rd @ UCP Taakra Web Hackathon</p>
          <p>- Top 5 @ UET ACM Hackathon</p>
          <p>- Top 10 @ UMT Techverse Web Hackathon</p>
        </div>
      )
    }),
    contact: () => ({
      type: 'contact',
      content: (
        <div>
          <p><span className="highlight-text">Email:</span> <a href="mailto:m.ahmad.software.engineer@gmail.com" className="terminal-link">m.ahmad.software.engineer@gmail.com</a></p>
          <p><span className="highlight-text">Phone:</span> <a href="tel:+923436142683" className="terminal-link">+92 343 6142683</a></p>
          <p><span className="highlight-text">GitHub:</span> <a href="https://github.com/m-ahmad-butt" target="_blank" rel="noopener noreferrer" className="terminal-link">github.com/m-ahmad-butt</a></p>
          <p><span className="highlight-text">GitLab:</span> <a href="https://gitlab.com/m-ahmad-butt" target="_blank" rel="noopener noreferrer" className="terminal-link">gitlab.com/m-ahmad-butt</a></p>
          <p><span className="highlight-text">Hugging Face:</span> <a href="https://huggingface.co/m-ahmad-butt" target="_blank" rel="noopener noreferrer" className="terminal-link">huggingface.co/m-ahmad-butt</a></p>
          <p><span className="highlight-text">LinkedIn:</span> <a href="https://linkedin.com/in/m-ahmad-butt" target="_blank" rel="noopener noreferrer" className="terminal-link">linkedin.com/in/m-ahmad-butt</a></p>
          <p><span className="highlight-text">Location:</span> Lahore, Pakistan</p>
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
              <p>Welcome to my terminal!</p>
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
            <span className="nav-item" onClick={() => handleNavClick('honors')}>honors</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('certifications')}>certifications</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('contact')}>contact</span>
            <span className="nav-separator">|</span>
            <span className="nav-item" onClick={() => handleNavClick('clear')}>clear</span>
          </div>

          <div className="terminal-output">
            <div className="command-line initial">
              <span className="prompt">ahmad@terminal:~$</span>
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
            <span className="prompt">ahmad@terminal:~$</span>
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
