import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-right">
        <div className="about-section">
          <h2 className="hand-drawn-heading">ABOUT me</h2>
          <p className="about-text">
            I am a Software Engineering student at{' '}
            <span className="circled-word cw-1">FAST NUCES</span>
            {' '}with hands-on experience in{' '}
            <span className="circled-word cw-2">AI</span>,{' '}
            <span className="circled-word cw-3">NLP</span>, and{' '}
            <span className="circled-word cw-4">LLM fine-tuning</span>.
            {' '}I specialize in building end-to-end AI pipelines, from data preprocessing to deployment
            using FastAPI and scalable backends. I have a strong background in microservices, real-time systems,
            and <span className="circled-word cw-5">XR development</span>.
            {' '}I am currently seeking an{' '}
            <span className="circled-word cw-6">AI Engineer</span>
            {' '}internship to build and deploy intelligent applications at scale.
          </p>
        </div>

        <div className="about-section">
          <h2 className="hand-drawn-heading">PERSONAL SKiLLS</h2>
          <div className="skills-grid">
            <div className="skill-column">
              <p><strong>AI / ML:</strong> PyTorch, TensorFlow, Scikit-learn, Hugging Face, Unsloth (QLoRa), NLP</p>
              <p><strong>Backend:</strong> Java (Spring Boot), JavaScript (Express), Python (FastAPI, Flask)</p>
              <p><strong>Databases:</strong> PostgreSQL, MongoDB</p>
              <p><strong>ORM / ODM:</strong> Prisma, Hibernate</p>
            </div>
            <div className="skill-column">
              <p><strong>Infrastructure:</strong> Microservices (Eureka, Kafka), AWS, Docker, CI/CD (GitLab)</p>
              <p><strong>Messaging / Cache:</strong> BullMQ, RabbitMQ, Redis</p>
              <p><strong>Tools &amp; Frameworks:</strong> Spring Security, Spring Cloud, Jira</p>
              <p><strong>Languages:</strong> Python, Java, JavaScript, C#, C++, C, Assembly</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="hand-drawn-heading">EXPERIENCE</h2>
          <p className="about-text">
            <strong>XR Developer @ EggyStudio (06/2025 – 08/2025)</strong><br />
            Developed AR/VR apps for Android and Meta Quest 3 in Unity, delivering 2+ features weekly while collaborating across teams using Slack and Google Meet.
          </p>
          <div className="exp-letter-section">
            <a
              href="/resume/exp-letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-letter-btn"
            >
              View Experience Letter ↗
            </a>
          </div>
        </div>

        <div className="resume-download-section">
          <div className="resume-btn-wrapper">
            <div className="resume-arrow-label">
              <span className="arrow-text">grab it!</span>
              <span className="arrow-icon">↓</span>
            </div>
            <a
              href="/resume/ai-resume.pdf"
              download="Muhammad_Ahmad_Butt_AI_Engineer_Resume.pdf"
              className="download-resume-btn"
            >
              Resume — AI Engineer
            </a>
          </div>
          <div className="resume-btn-wrapper">
            <div className="resume-arrow-label" style={{ animationDelay: '0.7s' }}>
              <span className="arrow-text">or this!</span>
              <span className="arrow-icon">↓</span>
            </div>
            <a
              href="/resume/web-resume.pdf"
              download="Muhammad_Ahmad_Butt_Web_Developer_Resume.pdf"
              className="download-resume-btn"
            >
              Resume — Web Developer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
