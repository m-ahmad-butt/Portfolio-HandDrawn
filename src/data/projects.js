export const FEATURED_PROJECTS = [
  {
    title: 'SWE Agents',
    tag: 'Agentic AI',
    description:
      'Multi agent AI system that automates the software development lifecycle, from idea to requirements, code, and docs.',
    githubUrl: 'https://github.com/m-ahmad-butt/SWE-Agents',
  },
  {
    title: 'Municipal Lien Search App',
    tag: 'Outsourcing',
    description:
      'Full stack enterprise app for Magnolia Research Group to streamline municipal lien searches and estoppel orders.',
    isPrivate: true,
  },
];

export const PROJECT_CATEGORIES = [
  {
    id: 'outsourcing',
    title: 'Outsourcing',
    projects: [
      {
        title: 'Municipal Lien Search App',
        isPrivate: true,
        description:
          'A comprehensive full stack enterprise web application designed for Magnolia Research Group to streamline municipal lien searches, property due diligence, and estoppel certificate orders.',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe.js', 'Node.js', 'Express.js'],
      },
    ],
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    projects: [
      {
        title: 'SWE Agents',
        githubUrl: 'https://github.com/m-ahmad-butt/SWE-Agents',
        description:
          'Developed a multi agent AI system that automates the software development lifecycle. The platform transforms an application idea into requirements, SRS documents, cost estimation, milestone planning, code generation, documentation, and iterative development through specialized AI agents with RAG powered knowledge retrieval.',
        tags: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'ChromaDB', 'React'],
      },
      {
        title: 'Corrective RAG (CRAG)',
        githubUrl: 'https://github.com/m-ahmad-butt/Agentic-Ai',
        description:
          'Built a Corrective Retrieval Augmented Generation pipeline that validates retrieved documents, identifies insufficient context, automatically performs web search, filters irrelevant information, and generates grounded responses using hybrid retrieval and document evaluation.',
        tags: ['Python', 'LangChain', 'LangGraph', 'FAISS', 'HuggingFace', 'Tavily'],
      },
      {
        title: 'Self RAG',
        githubUrl: 'https://github.com/m-ahmad-butt/Agentic-Ai',
        description:
          'Implemented a Self RAG system that enables an LLM to evaluate its own retrieval quality before answering. The pipeline performs document grading, relevance verification, query refinement, and iterative response generation to improve factual accuracy and reduce hallucinations.',
        tags: ['Python', 'LangChain', 'LangGraph', 'FAISS', 'HuggingFace', 'Groq'],
      },
    ],
  },
  {
    id: 'ml',
    title: 'AI & ML',
    projects: [
      {
        title: 'PersonaFlow MBTI',
        githubUrl: 'https://github.com/m-ahmad-butt/MbtiPredictor-PersonaFlow.git',
        description:
          'WhatsApp chat personality predictor using transformer based XLM RoBERTa for multilingual personality monitoring with 82% accuracy.',
        tags: ['XLM RoBERTa', 'PEFT', 'QLoRA', 'PyTorch', 'Hugging Face', 'Flask'],
      },
      {
        title: 'Cricket Commentary AI',
        githubUrl: 'https://github.com/m-ahmad-butt/cricket-commentary-model',
        description:
          'Real time cricket commentary generator using Qwen2.5 with QLoRA optimization for high performance broadcasting production.',
        tags: ['Qwen2.5', 'QLoRA', 'Unsloth', 'FastAPI', 'Python', 'Docker'],
      },
      {
        title: 'Pneumonia Detection',
        githubUrl: 'https://github.com/m-ahmad-butt/DM-Pneumonia-Detection.git',
        description:
          'Medical image classification system using MobileNetV2 with advanced contrast enhancement and normalized preprocessing pipeline.',
        tags: ['TensorFlow', 'Keras', 'OpenCV', 'CLAHE', 'Python', 'Vercel'],
      },
      {
        title: 'Emotion Analysis NLP',
        githubUrl: 'https://github.com/m-ahmad-butt/EmotionAnalysis-NLP.git',
        description:
          'A Python project that analyzes text to detect emotions, cleans the data, and recommends Spotify tracks related to the dominant emotion, complete with hashtags generated from audio features and artist genres.',
        tags: ['Python', 'DistilRoBERTa', 'Spotify API', 'Transformers', 'Spotipy', 'Pandas'],
      },
    ],
  },
  {
    id: 'web',
    title: 'Web',
    projects: [
      {
        title: 'FAST Car Pooling',
        githubUrl: 'https://github.com/m-ahmad-butt/Car-Pooling.git',
        description:
          'A comprehensive microservices based web application for FAST NUCES students and faculty, featuring scalable backend architecture and secure institutional transit sharing.',
        tags: ['Microservices', 'Kafka', 'Eureka', 'AWS', 'Docker', 'Express.js'],
      },
      {
        title: 'FAST Ex Marketplace',
        githubUrl: 'https://github.com/m-ahmad-butt/FAST-Ex.git',
        description:
          'A microservices university marketplace for FAST Students to buy, sell, and exchange items. Scalable event driven architecture with real time community commitment features.',
        tags: ['Express.js', 'Kafka', 'Eureka', 'AWS S3', 'PostgreSQL', 'MongoDB'],
      },
      {
        title: 'Apex',
        githubUrl: 'https://github.com/NU-Projects/Apex.git',
        description:
          'Microservices based AI career assistant featuring automated skill extraction, roadmap generation, and intelligent job matching.',
        tags: ['Ollama', 'Selenium', 'Apify', 'Microservices', 'Kafka', 'Express'],
      },
      {
        title: 'Lost and Found Portal',
        description:
          'A centralized digital platform for the FAST NUCES campus community. AWS deployed platform handling 50+ concurrent users per session with AI based spam filtering.',
        tags: ['AWS', 'Nginx', 'Express', 'Supabase', 'React'],
      },
      {
        title: 'Book Exchange',
        githubUrl: 'https://github.com/m-ahmad-butt/web-hackathon.git',
        description:
          'A comprehensive platform designed for a book exchange community, featuring AI driven valuation, real time communication, and location based services. It connects users to trade books, participate in community forums, and locate physical exchange stalls.',
        tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase', 'Gemini AI'],
      },
      {
        title: 'Quizify',
        githubUrl: 'https://github.com/NU-Projects/Quizify.git',
        description:
          'Spring Boot based quiz management system featuring modular architecture and implementation of core Gang of Four design patterns.',
        tags: ['Spring Boot', 'Java', 'React', 'Vite'],
      },
    ],
  },
  {
    id: 'xr',
    title: 'XR',
    projects: [
      {
        title: 'AR IKEA',
        githubUrl: 'https://github.com/m-ahmad-butt/Augmented-Reality-IKEA.git',
        description:
          'An Android AR app built at EggyStudio that lets users browse a 3D furniture catalog and place true to scale sofas, tables, and chairs into their real world environment using ARCore plane detection, helping visualize spaces before buying.',
        tags: ['Unity', 'AR Foundation', 'ARCore', 'XR Toolkit', 'Android'],
      },
      {
        title: 'AR Image Tracking',
        githubUrl: 'https://github.com/m-ahmad-butt/Augmented-Reality-ImageTracking.git',
        description:
          'An Android AR experience developed at EggyStudio that detects and tracks multiple physical image targets simultaneously, overlaying dynamic 3D content that persists even when the target temporarily leaves the camera frame.',
        tags: ['Unity', 'AR Foundation', 'ARCore', 'URP', 'Android'],
      },
      {
        title: 'AR Plants',
        githubUrl: 'https://github.com/m-ahmad-butt/Augmented-Reality-Plants.git',
        description:
          'An Android AR app created at EggyStudio that places realistic 3D plant models into real world environments via ARCore plane detection, with interactive scaling and rotation so users can visualize plants in their space before purchasing.',
        tags: ['Unity', 'AR Foundation', 'ARCore', 'Android'],
      },
      {
        title: 'AR Portfolio Card',
        githubUrl: 'https://github.com/m-ahmad-butt/Augmented-Reality-PortfolioCard.git',
        description:
          'A Vuforia powered Android AR app built at EggyStudio that recognizes a physical business card and overlays 3D models, animations, and interactive elements anchored to the card, turning a standard portfolio card into an immersive AR experience.',
        tags: ['Unity', 'Vuforia', 'AR Foundation', 'ARCore', 'Android'],
      },
      {
        title: 'VR Stumble Guy',
        githubUrl: 'https://github.com/m-ahmad-butt/Virtual-Reality.git',
        description:
          'VR Stumble Guy is a fully immersive virtual reality experience that brings the chaotic fun of obstacle course racing to Meta Quest 3. Navigate through challenging courses, avoid obstacles, and compete to be the last player standing all in stunning VR.',
        tags: ['Unity', 'VRIF', 'Meta Quest 3', 'URP'],
      },
      {
        title: '2D Game Development',
        githubUrl: 'https://github.com/m-ahmad-butt/2D-Game-Development.git',
        description:
          'Monster Game 2D is an engaging 2D endless runner game built with Unity. Players control a character who must navigate through an infinite landscape while avoiding incoming monsters and collecting coins. The game features smooth animations, responsive controls optimized for both desktop and mobile platforms, and an intuitive scoring system with a lives based challenge mechanism.',
        tags: ['Unity', 'C#', 'Android', '2D Physics'],
      },
      {
        title: '3D Game Development',
        githubUrl: 'https://github.com/m-ahmad-butt/3D-Game-Development.git',
        description:
          'Endless Runner 3D is an engaging infinite runner game built with Unity, featuring procedural level generation, smooth character animations, and intuitive joystick controls. Players navigate through an endless low poly environment, collecting coins while avoiding obstacles. The game combines classic endless runner mechanics with modern mobile controls, optimized for both desktop and mobile platforms.',
        tags: ['Unity', 'C#', 'Android', 'Windows', '3D Physics'],
      },
    ],
  },
  {
    id: 'misc',
    title: 'Misc',
    projects: [
      {
        title: 'LogiSim',
        githubUrl: 'https://github.com/m-ahmad-butt/LogiSim.git',
        description:
          'Logic circuit design and simulation tool built with Java Swing, supporting circuit creation, modular subcircuits, and truth table analysis.',
        tags: ['Java', 'Swing', 'Maven', 'ANT', 'JUnit'],
      },
      {
        title: 'Codigram',
        githubUrl: 'https://github.com/m-ahmad-butt/Codigram.git',
        description:
          'Codigram is a JavaFX based visual modeling tool for creating UML Class Diagrams and Entity Relationship Diagrams (ERD). The application enables users to create diagrams manually through an intuitive drag and drop interface or generate diagrams using AI powered by Google Gemini.',
        tags: ['Java', 'JavaFX', 'Maven', 'Google Gemini API'],
      },
      {
        title: 'PING PONG GAME',
        githubUrl: 'https://github.com/m-ahmad-butt/COAL-PING-PONG.git',
        description:
          'This project implements a simple PingPong game in 8088 Assembly Language, simulating a two player game with paddles and a bouncing ball on a black screen.',
        tags: ['8088 Assembly', 'x86', 'Text Mode Display'],
      },
    ],
  },
];

export const ALL_PROJECTS_FLAT = PROJECT_CATEGORIES.flatMap((category) =>
  category.projects.map((project) => ({
    ...project,
    categoryId: category.id,
    categoryTitle: category.title,
  }))
);
