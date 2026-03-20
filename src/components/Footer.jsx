import './Footer.css';

const Footer = ({ onTerminalClick }) => {
  return (
    <div className="sticky-footer">
      <div className="footer-left">
        <button className="terminal-icon-btn" onClick={onTerminalClick} title="Open Terminal">
          <img src="/terminal.jpeg" alt="Terminal" className="terminal-icon" />
        </button>
        <a
          href="https://github.com/m-ahmad-butt"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          title="GitHub"
        >
          <img src="/github.png" alt="GitHub" className="footer-social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/m-ahmad-butt"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          title="LinkedIn"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="footer-social-icon" />
        </a>
        <a
          href="https://huggingface.co/m-ahmad-butt"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          title="Hugging Face"
        >
          <img src="/huggingface.svg" alt="Hugging Face" className="footer-social-icon" />
        </a>
        <a
          href="https://gitlab.com/m-ahmad-butt"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          title="GitLab"
        >
          <img src="/gitlab-svgrepo-com.svg" alt="GitLab" className="footer-social-icon" />
        </a>
      </div>
      <div className="footer-right">
        <span className="footer-info">Portfolio v1.3</span>
      </div>
    </div>
  );
};

export default Footer;
