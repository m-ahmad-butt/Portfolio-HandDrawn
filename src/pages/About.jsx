import './About.css';

const About = () => {
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
