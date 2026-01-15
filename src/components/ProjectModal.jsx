import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <div className="modal-title-icons">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-title-icon"
                title="View on GitHub"
              >
                <img src="/github.png" alt="GitHub" className="title-icon" />
              </a>
            )}
            {project.linkedinUrl && (
              <a 
                href={project.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-title-icon"
                title="View on LinkedIn"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="title-icon" />
              </a>
            )}
          </div>
        </div>
        
        {project.features && (
          <div className="modal-section">
            <h3 className="section-heading">Core Functionality</h3>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && (
          <div className="modal-section">
            <h3 className="section-heading">Technical Specifications</h3>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-label">{tech.label}:</span>
                  <span className="tech-value">{tech.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="modal-links">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-link demo-link"
            >
              View Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
