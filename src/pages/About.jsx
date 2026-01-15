import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src="/hero.png" alt="Portrait sketch" className="sketch-image" />
      </div>
      
      <div className="about-right">
        <div className="about-section">
          <h2 className="hand-drawn-heading">ABOUT me</h2>
          <p className="about-text">
            I'm Muhammad Ahmad Butt, a 6th-semester BS Software Engineering student at FAST National University of Computer & Emerging Sciences.
            I'm a competitive programmer and have participated in multiple speed programming and web hackathons.
            I secured 2nd position in the RC3 Speed Programming Competition at Riphah University.
            I enjoy building creative solutions that go beyond expectations and push technical boundaries.
          </p>
        </div>

        <div className="about-section">
          <h2 className="hand-drawn-heading">PERSONAL SKiLLS</h2>
          <div className="skills-grid">
            <div className="skill-column">
              <p><strong>Languages:</strong> C, C++, C#, Python, Java, JavaScript, Assembly</p>
            </div>
            <div className="skill-column">
              <p><strong>Web:</strong> React, Express.js, Spring Boot, Tailwind CSS, Three.js</p>
              <p><strong>AI / ML:</strong> NumPy, Pandas, Scikit-learn</p>
              <p><strong>XR / Game Dev:</strong> Unity, AR & VR Development</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="hand-drawn-heading">EXPERIENCE</h2>
          <p className="about-text">
            I worked as an XR Developer at EggyStudio, a startup. My major contributions were in augmented and virtual reality development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
