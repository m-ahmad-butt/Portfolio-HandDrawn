import { useEffect } from 'react';
import { PROJECT_CATEGORIES } from '../data/projects';
import Footer from '../components/Footer';
import './AllProjects.css';

function AllProjects({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="all-projects">
        <header className="all-projects__header">
          <button type="button" className="all-projects__back" onClick={onBack}>
            ← Back
          </button>
          <p className="all-projects__eyebrow">Selected work</p>
          <h1>All Projects</h1>
          <p className="all-projects__lead">
            Agentic AI, full stack products, XR, and more, built end to end.
          </p>
        </header>

        <div className="all-projects__body">
          {PROJECT_CATEGORIES.map((category) => (
            <section key={category.id} className="all-projects__category">
              <h2>{category.title}</h2>
              <div className="all-projects__grid">
                {category.projects.map((project) => (
                  <article key={project.title} className="project-tile">
                    <div className="project-tile__top">
                      <h3>{project.title}</h3>
                      {project.isPrivate && (
                        <span className="project-tile__badge">Private</span>
                      )}
                    </div>
                    <p>{project.description}</p>
                    {project.tags?.length > 0 && (
                      <ul className="project-tile__tags">
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    )}
                    {project.githubUrl && (
                      <a
                        className="project-tile__link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProjects;
