import './ProjectDetail.css';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <div className="project-detail-page">
      <button className="back-btn" onClick={onBack}>
        ← Back to Projects
      </button>

      <div className="project-detail-content">
        <div className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="project-detail-icons">
            {project.hfUrl && (
              <a 
                href={project.hfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="detail-icon-link"
                title="View on Hugging Face"
              >
                <img 
                  src="/huggingface.svg" 
                  alt="Hugging Face" 
                  className="detail-platform-icon" 
                />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-icon-link"
                title={project.githubUrl.includes('gitlab.com') ? "View on GitLab" : "View on GitHub"}
              >
                <img
                  src={project.githubUrl.includes('gitlab.com') ? "/gitlab-svgrepo-com.svg" : "/github.png"}
                  alt={project.githubUrl.includes('gitlab.com') ? "GitLab" : "GitHub"}
                  className="detail-platform-icon"
                />
              </a>
            )}
            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-icon-link"
                title="View on LinkedIn"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="detail-platform-icon" />
              </a>
            )}
          </div>
        </div>

        <p className="project-detail-desc">{project.description}</p>

        {project.project?.features && (
          <div className="detail-section">
            <h2 className="detail-section-heading">Core Functionality</h2>
            <ul className="detail-feature-list">
              {project.project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.project?.technologies && (
          <div className="detail-section">
            <h2 className="detail-section-heading">Technical Specifications</h2>
            <div className="detail-tech-grid">
              {project.project.technologies.map((tech, index) => (
                <div key={index} className="detail-tech-item">
                  <span className="tech-label">{tech.label}:</span>
                  <span className="tech-value">{tech.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="detail-links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-demo-btn"
            >
              Launch Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
