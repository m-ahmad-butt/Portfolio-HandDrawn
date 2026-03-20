import './ProjectCard.css';

const ProjectCard = ({ title, description, githubUrl, demoUrl, isPrivate, project, onProjectSelect }) => {
  const hasDetails = project?.features || project?.technologies;

  return (
    <>
      <div className="project-card" onClick={() => hasDetails && onProjectSelect()}>
        <div className="card-header">
          <h3 className="project-title">{title}</h3>
          {hasDetails && (
            <button
              className="info-icon"
              onClick={(e) => {
                e.stopPropagation();
                onProjectSelect();
              }}
              aria-label="View project details"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
        {description && <p className="project-description">{description}</p>}
        {isPrivate && (
          <span className="private-label">Private Repository</span>
        )}
        {demoUrl && (
          <div className="card-footer">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo →
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
