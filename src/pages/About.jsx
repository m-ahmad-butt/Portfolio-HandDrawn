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
           Hey, I'm Muhammad Ahmad Butt. I started my coding journey with a simple “Hello World” and, honestly, struggled with initial semester projects and even failed at times but I never gave up.

I’ve explored a lot of things and I love diving into new technologies. I enjoy coding, participating in hackathons, and building projects that are both fun and challenging. I’ve won some hackathons and created a few cool projects along the way. My expertise mainly lies in web development and deep learning models, and I’m always excited to learn more.
          </p>
        </div>

        <div className="about-section">
          <h2 className="hand-drawn-heading">PERSONAL SKiLLS</h2>
          <div className="skills-grid">
            <div className="skill-column">
              <p><strong>Languages:</strong> C, C++, C#, Python, Java, JavaScript, Assembly</p>
              <p><strong>Frameworks:</strong> React, Spring Boot, Express, Flask, FastAPI</p>
            </div>
            <div className="skill-column">
              <p><strong>AI / ML:</strong> PyTorch, TensorFlow/Keras, Scikit-learn, Hugging Face, Unsloth (QLoRa), XLM-R, Qwen</p>
              <p><strong>Architecture:</strong> Microservices (Netflix Eureka, Apache Kafka), Distributed Systems, CI/CD (GitLab)</p>
              <p><strong>Cloud & Tools:</strong> AWS (S3, EC2), Docker, Vercel, Selenium, Git, WebSockets</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="hand-drawn-heading">EXPERIENCE</h2>
          <p className="about-text">
            I worked as an XR Developer at EggyStudio, a startup. My major contributions were in augmented and virtual reality development.
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
