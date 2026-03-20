import './About.css';

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/resume.pdf';
    link.download = 'Muhammad_Ahmad_Butt_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <div className="about-right">
        <div className="about-section">
          <h2 className="hand-drawn-heading">ABOUT me</h2>
          <p className="about-text">
            I am a Software Engineering student at FAST NUCES with hands-on experience in AI, NLP, and LLM fine-tuning. I specialize in building end-to-end AI pipelines, from data preprocessing to deployment using FastAPI and scalable backends. I have a strong background in microservices, real-time systems, and XR development. I am currently seeking an AI Engineer internship to build and deploy intelligent applications at scale.
          </p>
        </div>

        <div className="about-section">
          <h2 className="hand-drawn-heading">PERSONAL SKiLLS</h2>
          <div className="skills-grid">
            <div className="skill-column">
              <p><strong>AI / ML:</strong> PyTorch, TensorFlow, Scikit-learn, Hugging Face, Unsloth (QLoRa), NLP</p>
              <p><strong>Backend:</strong> Java (Spring Boot), JavaScript (Express), Python (FastAPI, Flask)</p>
            </div>
            <div className="skill-column">
              <p><strong>Infrastructure:</strong> Microservices (Eureka, Kafka), AWS, Docker, CI/CD (GitLab)</p>
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
        </div>

        <div className="resume-download-section">
          <button className="download-resume-btn" onClick={handleDownloadResume}>
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
