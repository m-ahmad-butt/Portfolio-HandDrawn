import ProjectCard from '../components/ProjectCard';
import HackathonCard from '../components/HackathonCard';
import Contact from '../components/Contact';
import './Projects.css';

const Projects = () => {
  const trophyWinners = [
    { event: "RC3 at Riphah", rank: "2nd", location: "Riphah International", image: "/riphah.jpeg", isTrophy: true },
    { event: "UCP Taakra", rank: "3rd", location: "UCP Lahore", image: "/ucp.jpeg", isTrophy: true },
  ];

  const speedProgramming = [
    { event: "ACM FAST NUCES", rank: "7th", location: "FAST Lahore" },
    { event: "UMT Techverse", rank: "11th", location: "UMT Lahore" },
    { event: "UCP Taakra 2025", rank: "14th", location: "UCP Lahore" },
    { event: "IEE ACM UCP", rank: "14th", location: "UCP Lahore" },
    { event: "ITU Coderush", rank: "18th", location: "ITU Lahore" },
  ];

  const webHackathons = [
    { event: "UCP Takra", rank: "3rd", location: "UCP Lahore" },
    { event: "UET ACM Hackathon", rank: "Top 5", location: "UET Lahore" },
    { event: "UMT Techverse", rank: "Top 10", location: "UMT Lahore" },
  ];

  const webProjects = [
    {
      title: "Lost and Found Portal",
      description: "A centralized digital platform designed specifically for the FAST NUCES campus community to report lost items and post found items, making it easier to reconnect lost belongings with their rightful owners through a secure and efficient system.",
      demoUrl: "https://nucesfinder.vercel.app/",
      project: {
        features: [
          "Lost Item Reporting - Students can report lost items with detailed descriptions and images",
          "Found Item Posting - Users can post found items to help reunite them with owners",
          "Search & Filter - Advanced search functionality to find specific items quickly",
          "Secure Authentication - JWT-based authentication for FAST NUCES students only",
          "Image Upload - Cloudinary integration for storing item images",
          "Real-time Updates - Track status of reported items"
        ],
        technologies: [
          { label: "Frontend", value: "React" },
          { label: "Backend", value: "Express" },
          { label: "Database", value: "Supabase" },
          { label: "Deployment", value: "Vercel & AWS (Nginx Proxy)" }
        ]
      }
    },
    {
      title: "Book Exchange",
      description: "A comprehensive platform designed for a book exchange community, featuring AI-driven valuation, real-time communication, and location-based services. It connects users to trade books, participate in community forums, and locate physical exchange stalls.",
      githubUrl: "https://github.com/m-ahmad-butt/web-hackathon.git",
      project: {
        features: [
          "AI-Driven Valuation - Gemini AI integration for intelligent book pricing and recommendations",
          "Real-time Communication - Supabase Realtime for instant messaging between users",
          "Location-Based Services - MapLibre GL with OpenStreetMap to locate physical exchange stalls",
          "QR Code Generation - Generate unique QR codes for book listings",
          "Community Forums - Discussion boards for book enthusiasts",
          "Secure Authentication - Supabase Auth for user management"
        ],
        technologies: [
          { label: "Frontend", value: "React (Vite), Tailwind CSS, Lucide React/Ant Design Icons" },
          { label: "Backend", value: "Node.js, Express.js" },
          { label: "Database", value: "Supabase (PostgreSQL)" },
          { label: "Real-time", value: "Supabase Realtime" },
          { label: "AI Integration", value: "Google Generative AI (Gemini)" },
          { label: "Maps", value: "MapLibre GL (OpenStreetMap)" },
          { label: "QR Generation", value: "QRCode Library" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "MbtiPredictor - PersonaFlow",
      description: "PersonaFlow is an MBTI timeline predictor that analyzes personal or group WhatsApp chat conversations to predict personality types over time. Users can upload WhatsApp chat exports, select a person from the conversation, and visualize their MBTI personality timeline along with their messages.",
      githubUrl: "https://github.com/m-ahmad-butt/MbtiPredictor-PersonaFlow.git",
      project: {
        features: [
          "WhatsApp Chat Analysis - Upload and parse WhatsApp chat exports",
          "Timeline Prediction - Visualize MBTI personality changes over time",
          "Message Correlation - Link predictions with actual messages",
          "Transformer-Based Model - XLM-RoBERTa for multilingual personality detection",
          "Class Imbalance Handling - Focal Loss for improved accuracy",
          "Interactive Visualization - Dynamic personality timeline charts"
        ],
        technologies: [
          { label: "Frontend", value: "React + Vite, Tailwind CSS" },
          { label: "Backend", value: "Python Flask" },
          { label: "Base Model", value: "XLM-RoBERTa (Encoder-only Transformer)" },
          { label: "ML Framework", value: "PyTorch with Transformers" },
          { label: "Loss Function", value: "Focal Loss" },
          { label: "Optimizer", value: "AdamW with gradient clipping" },
          { label: "Learning Rate", value: "2e-5 with linear decay" },
          { label: "Max Sequence Length", value: "128 tokens" },
          { label: "AI Integration", value: "Gemini API" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Quizify",
      description: "Quizify is a web-based application designed to make quizzes easy and engaging for both teachers and students. This platform helps teachers create, edit, and manage quizzes efficiently while allowing students to participate, track progress, and improve their learning experience.",
      githubUrl: "https://github.com/SDATEAM4/Quizify.git",
      project: {
        features: [
          "Quiz Creation - Teachers can create and edit quizzes with various question types",
          "Student Participation - Students can take quizzes and receive instant feedback",
          "Progress Tracking - Track student performance and quiz analytics",
          "Quiz Management - Organize, schedule, and manage multiple quizzes",
          "Real-time Results - Instant grading and score display",
          "User Roles - Separate interfaces for teachers and students"
        ],
        technologies: [
          { label: "Frontend", value: "React + Vite" },
          { label: "Frontend Language", value: "JavaScript" },
          { label: "Backend", value: "Spring Boot" },
          { label: "Backend Language", value: "Java" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    }
  ];

  const xrProjects = [
    {
      title: "AR IKEA",
      description: "Augmented reality furniture placement application",
      githubUrl: "https://github.com/m-ahmad-butt/Augmented-Reality-IKEA.git",
      project: {
        features: [
          "Furniture Catalog - Browse extensive collection of furniture models (sofas, tables, chairs, etc.)",
          "AR Placement - Place furniture in real-world spaces using plane detection",
          "Realistic Rendering - High-quality 3D models with accurate materials and textures",
          "Scale Accuracy - True-to-life sizing for accurate spatial planning",
          "Interactive Controls - Rotate, move, and scale furniture pieces"
        ],
        technologies: [
          { label: "Engine", value: "Unity 2022.3 LTS" },
          { label: "AR Framework", value: "AR Foundation with ARCore" },
          { label: "XR Interaction", value: "XR Interaction Toolkit" },
          { label: "Target Platform", value: "Android" },
          { label: "Min Android Version", value: "Android 8.0 (API Level 26)" },
          { label: "Scripting Backend", value: "IL2CPP" },
          { label: "API Compatibility", value: ".NET Standard 2.1" },
          { label: "Target Architecture", value: "ARM64" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "AR Image Tracking",
      description: "Image tracking implementation in augmented reality",
      githubUrl: "https://github.com/m-ahmad-butt/Augmented-Reality-ImageTracking.git",
      project: {
        features: [
          "Advanced Image Recognition - Detect and track multiple image targets simultaneously",
          "Persistent Tracking - Maintain AR content position even when image temporarily leaves view",
          "Dynamic Content Loading - Load different AR experiences based on detected images",
          "Real-time Performance - Optimized tracking at 60 FPS on supported devices"
        ],
        technologies: [
          { label: "Engine", value: "Unity 2022.3 LTS" },
          { label: "AR Framework", value: "AR Foundation 5.x with ARCore XR Plugin" },
          { label: "Render Pipeline", value: "Universal Render Pipeline (URP)" },
          { label: "Target Platform", value: "Android" },
          { label: "Min Android Version", value: "Android 8.0 (API Level 26)" },
          { label: "Scripting Backend", value: "IL2CPP" },
          { label: "API Compatibility", value: ".NET Standard 2.1" },
          { label: "Target Architecture", value: "ARM64" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "AR Plants",
      description: "Interactive plant visualization in augmented reality",
      githubUrl: "https://github.com/m-ahmad-butt/Augmented-Reality-Plants.git",
      project: {
        features: [
          "Realistic Plant Models - High-quality 3D models of various plant species",
          "AR Placement - Place plants in real-world environments using plane detection",
          "Interactive Scaling - Resize plants to visualize different growth stages",
          "Rotation Controls - Rotate plants to find the perfect viewing angle",
          "Plant Library - Browse and select from a diverse collection of plants"
        ],
        technologies: [
          { label: "Engine", value: "Unity 2022.3 LTS" },
          { label: "AR Framework", value: "AR Foundation with ARCore" },
          { label: "Target Platform", value: "Android" },
          { label: "Min Android Version", value: "Android 8.0 (API Level 26)" },
          { label: "Scripting Backend", value: "IL2CPP" },
          { label: "API Compatibility", value: ".NET Standard 2.1" },
          { label: "Target Architecture", value: "ARM64" },
          { label: "Company", value: "EggyStudio" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "AR Portfolio Card",
      description: "Interactive portfolio card in augmented reality",
      githubUrl: "https://github.com/m-ahmad-butt/Augmented-Reality-PortfolioCard.git",
      project: {
        features: [
          "Card Recognition - Advanced image tracking to recognize and track physical cards using Vuforia",
          "3D Content Display - Render 3D models and animations anchored to card positions",
          "Real-time Tracking - Smooth and stable AR tracking with minimal jitter",
          "Interactive Elements - Touch interactions with AR content"
        ],
        technologies: [
          { label: "Engine", value: "Unity 2022.3 LTS" },
          { label: "AR Framework", value: "Vuforia (AR Foundation with ARCore)" },
          { label: "Target Platform", value: "Android" },
          { label: "Min Android Version", value: "Android 8.0 (API Level 26)" },
          { label: "Scripting Backend", value: "IL2CPP" },
          { label: "API Compatibility", value: ".NET Standard 2.1" },
          { label: "Target Architecture", value: "ARM64" },
          { label: "Company", value: "Eggy Studio" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "VR Stumble Guy",
      description: "VR Stumble Guy is a fully immersive virtual reality experience that brings the chaotic fun of obstacle course racing to Meta Quest 3. Navigate through challenging courses, avoid obstacles, and compete to be the last player standing all in stunning VR.",
      githubUrl: "https://github.com/m-ahmad-butt/Virtual-Reality.git",
      project: {
        features: [
          "Hand Tracking Support - Native Meta Quest 3 hand tracking integration",
          "Smooth Locomotion - Multiple movement options including teleportation and smooth movement",
          "Intuitive Controls - Natural VR interactions using VRIF framework",
          "Optimized Performance - Smooth 72Hz/90Hz rendering for comfortable VR experience",
          "Room-Scale VR - Full 6DOF (Six Degrees of Freedom) movement"
        ],
        technologies: [
          { label: "Engine", value: "Unity 2022.3.59f1 LTS" },
          { label: "VR Framework", value: "VRIF (VR Interaction Framework) - BNG Framework" },
          { label: "Target Platform", value: "Meta Quest 3" },
          { label: "Render Pipeline", value: "Universal Render Pipeline (URP)" },
          { label: "Scripting Backend", value: "IL2CPP" },
          { label: "API Compatibility", value: ".NET Standard 2.1" },
          { label: "Min Android API", value: "Level 29 (Android 10)" },
          { label: "Target Architecture", value: "ARM64" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "2D Game Development",
      description: "Monster Game 2D is an engaging 2D endless runner game built with Unity. Players control a character who must navigate through an infinite landscape while avoiding incoming monsters and collecting coins. The game features smooth animations, responsive controls optimized for both desktop and mobile platforms, and an intuitive scoring system with a lives-based challenge mechanism.",
      githubUrl: "https://github.com/m-ahmad-butt/2D-Game-Development.git",
      project: {
        features: [
          "Endless Runner Mechanics - Infinite scrolling gameplay with progressively challenging obstacles",
          "Monster Avoidance - Dynamic monster spawning system with collision detection",
          "Coin Collection - Random coin generation for score accumulation",
          "Lives System - Three-heart health system with visual feedback",
          "Character Selection - Multiple playable characters with persistent selection across scenes"
        ],
        technologies: [
          { label: "Engine", value: "Unity 2022.3.59f1 LTS" },
          { label: "Scripting Language", value: "C# (.NET Standard 2.1)" },
          { label: "Target Platform", value: "Android" },
          { label: "Render Pipeline", value: "Built-in Render Pipeline" },
          { label: "Physics Engine", value: "Unity 2D Physics" },
          { label: "UI System", value: "Unity UI (uGUI)" },
          { label: "Animation System", value: "Unity Animator with 2D Sprite Animation" },
          { label: "Scripting Backend", value: "IL2CPP" },
          { label: "API Compatibility", value: ".NET Standard 2.1" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "3D Game Development",
      description: "Endless Runner 3D is an engaging infinite runner game built with Unity, featuring procedural level generation, smooth character animations, and intuitive joystick controls. Players navigate through an endless low-poly environment, collecting coins while avoiding obstacles. The game combines classic endless runner mechanics with modern mobile controls, optimized for both desktop and mobile platforms.",
      githubUrl: "https://github.com/m-ahmad-butt/3D-Game-Development.git",
      project: {
        features: [
          "Infinite Procedural Generation - Dynamic segment spawning creates an endless running experience",
          "Coin Collection System - Random coin placement with audio feedback and score tracking",
          "Smooth Character Animation - Blend tree animations that respond to joystick input magnitude",
          "High Score Tracking - Persistent high score system across game sessions",
          "Joystick Controls - Responsive fixed joystick for mobile and desktop gameplay"
        ],
        technologies: [
          { label: "Engine", value: "Unity 2022.3.59f1 LTS" },
          { label: "Scripting Language", value: "C# (.NET Standard 2.1)" },
          { label: "Target Platforms", value: "Android, Windows, macOS, Linux" },
          { label: "Render Pipeline", value: "Built-in Render Pipeline" },
          { label: "Physics Engine", value: "Unity 3D Physics" },
          { label: "UI System", value: "Unity UI (uGUI)" },
          { label: "Animation System", value: "Unity Animator with Blend Trees" },
          { label: "Audio System", value: "Unity Audio Source and Audio Listener" },
          { label: "Input System", value: "Fixed Joystick (Joystick Pack)" },
          { label: "Scripting Backend", value: "IL2CPP (Android) / Mono (Desktop)" },
          { label: "API Compatibility", value: ".NET Standard 2.1" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    }
  ];

  const miscProjects = [
    {
      title: "LogiSim",
      description: "Logic circuit design and simulation tool built with Java Swing, supporting circuit creation, modular subcircuits, and truth table analysis.",
      githubUrl: "https://github.com/m-ahmad-butt/LogiSim.git",
      project: {
        features: [
          "Circuit Creation - Design digital logic circuits with drag-and-drop components",
          "Modular Subcircuits - Create reusable circuit modules for complex designs",
          "Truth Table Analysis - Generate and analyze truth tables for circuit validation",
          "Component Library - Extensive library of logic gates and digital components",
          "Real-time Simulation - Interactive circuit simulation with instant feedback"
        ],
        technologies: [
          { label: "Language", value: "Java" },
          { label: "GUI Framework", value: "Swing" },
          { label: "Testing", value: "JUnit" },
          { label: "Build Tools", value: "Maven, ANT" },
          { label: "Version Control", value: "Git & GitHub" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Codigram",
      description: "Codigram is a JavaFX-based visual modeling tool for creating UML Class Diagrams and Entity-Relationship Diagrams (ERD). The application enables users to create diagrams manually through an intuitive drag-and-drop interface or generate diagrams using AI powered by Google Gemini.",
      githubUrl: "https://github.com/m-ahmad-butt/Codigram.git",
      project: {
        features: [
          "Manual Diagram Creation - Intuitive drag-and-drop interface for UML and ERD diagrams",
          "AI-Powered Generation - Generate diagrams using Google Gemini AI",
          "Multi-Diagram Projects - Manage multiple diagrams within a single project",
          "Import/Export - Import and export diagrams in JSON format",
          "Code Generation - Generate code from class diagrams (Java, C++, C#, Python)",
          "SQL DDL Generation - Generate SQL DDL from ERD diagrams (MySQL, MSSQL, SQLite3, PostgreSQL)"
        ],
        technologies: [
          { label: "Language", value: "Java" },
          { label: "Framework", value: "JavaFX" },
          { label: "Build Tool", value: "Maven" },
          { label: "AI Integration", value: "Google Gemini API" },
          { label: "Version Control", value: "Git & GitHub" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Emotion Analysis NLP",
      description: "A Python project that analyzes text to detect emotions, cleans the data, and recommends Spotify tracks related to the dominant emotion, complete with hashtags generated from audio features and artist genres.",
      githubUrl: "https://github.com/m-ahmad-butt/EmotionAnalysis-NLP.git",
      project: {
        features: [
          "Emotion Detection - Analyze text to identify dominant emotions using DistilRoBERTa",
          "Data Cleaning - Preprocess and clean text data for accurate analysis",
          "Spotify Integration - Recommend tracks based on detected emotions",
          "Hashtag Generation - Generate relevant hashtags from audio features and genres",
          "Text Classification - Advanced NLP pipeline for emotion classification"
        ],
        technologies: [
          { label: "Language", value: "Python" },
          { label: "Task", value: "Text Classification" },
          { label: "Model", value: "j-hartmann/emotion-english-distilroberta-base" },
          { label: "Music API", value: "Spotify API" },
          { label: "Framework", value: "Transformers (Hugging Face)" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "PING PONG GAME",
      description: "This project implements a simple PingPong game in 8088 Assembly Language, simulating a two-player game with paddles and a bouncing ball on a black screen.",
      githubUrl: "https://github.com/m-ahmad-butt/COAL-PING-PONG.git",
      project: {
        features: [
          "Two-Player Gameplay - Classic ping pong mechanics for two players",
          "Paddle Control - Keyboard-controlled paddles for both players",
          "Ball Physics - Realistic ball bouncing and collision detection",
          "Score Tracking - Real-time score display for competitive gameplay",
          "Low-Level Graphics - Direct screen manipulation using Assembly"
        ],
        technologies: [
          { label: "Language", value: "8088 Assembly Language" },
          { label: "Platform", value: "x86 Architecture" },
          { label: "Graphics", value: "Text Mode Display" },
          { label: "I/O", value: "Keyboard Input via BIOS Interrupts" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-main-title">HACKATHONS</h1>

      <section className="project-category">
        <p className="category-description centered-description">
          A track record of competing in high pressure programming environments.
          From logic bending Speed Programming challenges to building
          innovative solutions in Web Hackathons, I thrive on solving complex puzzles
          within tight deadlines.
        </p>

        <div className="hall-of-fame">
          <h3 className="subcategory-title">Hall of Fame</h3>
          <div className="trophy-grid">
            {trophyWinners.map((item, index) => (
              <HackathonCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="other-rankings" style={{ marginTop: '3rem' }}>
          <h3 className="subcategory-title">Speed Programming</h3>
          <div className="projects-grid">
            {speedProgramming.map((item, index) => (
              <HackathonCard key={index} {...item} />
            ))}
          </div>

          <h3 className="subcategory-title" style={{ marginTop: '2.5rem' }}>Web Hackathons</h3>
          <div className="projects-grid">
            {webHackathons.map((item, index) => (
              <HackathonCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <h1 className="projects-main-title" style={{ marginTop: '4rem' }}>PROJECTS</h1>

      <section className="project-category">
        <h2 className="category-title">Web Projects</h2>
        <div className="projects-grid">
          {webProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>


      <section className="project-category">
        <h2 className="category-title">XR Projects</h2>
        <div className="projects-grid">
          {xrProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="project-category">
        <h2 className="category-title">Misc Projects</h2>
        <div className="projects-grid">
          {miscProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <Contact />

      <div className="goodbye-section">
        <h2 className="goodbye-message">Thanks for stopping by!</h2>
        <p className="goodbye-text">I'm not there otherwise, I wouldn't let you go without coffee.</p>
      </div>
    </div>
  );
};

export default Projects;
