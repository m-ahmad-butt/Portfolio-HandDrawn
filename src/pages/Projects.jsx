import ProjectCard from '../components/ProjectCard';
import HackathonCard from '../components/HackathonCard';
import Contact from '../components/Contact';
import './Projects.css';

const Projects = ({ onProjectSelect }) => {
  const trophyWinners = [
    { event: "RC3 Speed Programming", rank: "2nd", location: "Riphah University", image: "/riphah.jpeg", isTrophy: true },
    { event: "Taakra 26 Web Hackathon", rank: "3rd", location: "University of Central Punjab", image: "/ucp.jpeg", isTrophy: true },
  ];

  const speedProgramming = [
    { event: "ACM FAST NUCES", rank: "7th", location: "FAST Lahore", year: "2025" },
    { event: "UMT Techverse", rank: "11th", location: "UMT Lahore", year: "2025" },
    { event: "UCP Taakra 2025", rank: "14th", location: "UCP Lahore", year: "2025" },
    { event: "IEE ACM UCP", rank: "14th", location: "UCP Lahore", year: "2026" },
    { event: "ITU Coderush", rank: "18th", location: "ITU Lahore", year: "2025" },
  ];

  const webHackathons = [
    { event: "SOFTEC", rank: "Participant", location: "FAST Lahore", year: "2026" },
    { event: "UET ACM Hackathon", rank: "Top 5", location: "UET Lahore", year: "2026" },
    { event: "UMT Techverse", rank: "Top 10", location: "UMT Lahore", year: "2026" },
    { event: "ITU Web Hackathon", rank: "Participant", location: "ITU Lahore", year: "2026" },
  ];

  const mlHackathons = [
    { event: "ITU ML Hackathon", rank: "Participant", location: "ITU Lahore", year: "2026" },
  ];

  const freelanceProjects = [
    {
      title: "Municipal Lien Search App",
      isPrivate: true,
      description: "A comprehensive full-stack enterprise web application designed for Magnolia Research Group to streamline municipal lien searches, property due diligence, and estoppel certificate orders.",
      project: {
        features: [
          "Order Workflow Lifecycle - Track and progress municipal lien search orders from receipt to delivery with status tracking (Order Received, In Progress, Waiting For Information, Completed, Delivered, Refunded)",
          "QuickBooks Integration - Bi-directional OAuth 2.0 connection to automatically sync customer data, generate/void invoices, and manage credit memos for refunds",
          "Secure Payment Processing - Stripe integration supporting checkout flows, credit card tokenization, and partial or full refund operations",
          "Dynamic Pricing Engine - Real-time fee calculations based on state, municipality, custom user discounts, and re-order discount configurations",
          "Secure Document Management - Integration with AWS S3 using presigned upload/download URLs for storing and retrieving lien search certificates, supporting documents, and invoices",
          "Automated Report Generation - Dynamic generation of detailed Word (.docx) reports containing verified tax reviews, code violations, utility balances, and permit history",
          "Comprehensive Audit Trail - Robust activity logging system recording system events and user actions (sign-ups, orders, refunds, status changes) to ensure operational transparency",
          "OTP Authentication & Security - Secure password hashing with bcrypt, JWT token-based session management (access & refresh cookies), and OTP email verification for safe user registration",
          "Dynamic CMS & Settings - Administrative dashboard allowing customization of site copy, logos, contact details, pricing structures, and email notifications"
        ],
        technologies: [
          { label: "Frontend", value: "React, Next.js (App Router), Tailwind CSS v4, Stripe.js" },
          { label: "Backend", value: "Node.js, Express.js" },
          { label: "Database", value: "MongoDB, Mongoose (ODM)" },
          { label: "Payment Processing", value: "Stripe API" },
          { label: "Accounting Sync", value: "QuickBooks API (Intuit OAuth)" },
          { label: "Cloud Storage", value: "AWS S3 (Simple Storage Service)" },
          { label: "Email Integration", value: "Resend API" },
          { label: "Security & Verification", value: "Google reCAPTCHA, JWT (JSON Web Tokens), Bcryptjs" },
          { label: "Document Generation", value: "Docx Library (JS)" },
          { label: "Deployment", value: "GitLab CI/CD, AWS EC2 (Ubuntu VM)" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    }
  ];

  const agenticAiProjects = [
    {
      title: "SWE-Agents",
      githubUrl: "https://github.com/m-ahmad-butt/SWE-Agents",
      description: "Developed a multi-agent AI system that automates the software development lifecycle. The platform transforms an application idea into requirements, SRS documents, cost estimation, milestone planning, code generation, documentation, and iterative development through specialized AI agents with RAG-powered knowledge retrieval.",
      project: {
        features: [
          "Multi-Agent Workflow - Coordinated execution of specialized agents (requirements, planning, code, doc) to automate full-lifecycle software development",
          "Automated Asset Generation - Automatic creation of SRS documents, cost estimation, milestone plans, and architectural specifications",
          "Dynamic Code Generation - Intelligent generation of clean codebase structures and detailed implementation files matching planned specifications",
          "RAG-Powered Retrieval - Knowledge retrieval using Retrieval-Augmented Generation to ground agent decisions in codebase context and project requirements",
          "Iterative Refinement - Loops code generation and self-correction through feedback loops to resolve compilation or linting errors"
        ],
        technologies: [
          { label: "Core Language", value: "Python" },
          { label: "Agent Coordination", value: "LangChain, LangGraph" },
          { label: "Interface Standards", value: "Model Context Protocol (MCP)" },
          { label: "API Framework", value: "FastAPI" },
          { label: "Vector Database", value: "ChromaDB" },
          { label: "Inference Engine", value: "Groq Cloud LLM" },
          { label: "Frontend", value: "React, Vite, Tailwind CSS" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Corrective RAG (CRAG)",
      githubUrl: "https://github.com/m-ahmad-butt/Agentic-Ai",
      description: "Built a Corrective Retrieval-Augmented Generation pipeline that validates retrieved documents, identifies insufficient context, automatically performs web search, filters irrelevant information, and generates grounded responses using hybrid retrieval and document evaluation.",
      project: {
        features: [
          "Document Grading - Automated relevance evaluation of retrieved documents to filter out noise and irrelevant context",
          "Corrective Search Triggering - Dynamically detects when search context is insufficient or out-of-date and triggers fallback web searches",
          "Query Optimization - Refines search queries based on the user request and grading results for improved search relevance",
          "Irrelevant Info Filtering - Post-retrieval processing to isolate only key, high-confidence context segments for the LLM prompt",
          "Grounded Generation - Ensures final response output is strictly grounded in retrieved and verified documents to prevent hallucinations"
        ],
        technologies: [
          { label: "Core Language", value: "Python" },
          { label: "Pipeline Orchestration", value: "LangChain, LangGraph" },
          { label: "Vector Index / Store", value: "FAISS" },
          { label: "Embedding Model", value: "HuggingFace Embeddings" },
          { label: "Search Engine Integration", value: "Tavily Search API" },
          { label: "Inference Server", value: "Groq LLM" },
          { label: "Data Validation", value: "Pydantic Schemas" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Self-RAG",
      githubUrl: "https://github.com/m-ahmad-butt/Agentic-Ai",
      description: "Implemented a Self-RAG system that enables an LLM to evaluate its own retrieval quality before answering. The pipeline performs document grading, relevance verification, query refinement, and iterative response generation to improve factual accuracy and reduce hallucinations.",
      project: {
        features: [
          "Self-Evaluation Pipeline - LLM assesses retrieve-vs-generate quality at each step using specialized feedback tokens",
          "Relevance Verification - Verifies if the retrieved facts are relevant to the user query before incorporating them",
          "Hallucination Checking - Automatically grades the generated answer against the retrieved facts to ensure strict faithfulness",
          "Query Refinement Loop - Iteratively optimizes queries and retries retrieval if context completeness scores fall below thresholds",
          "Iterative Response Generation - Synthesizes multiple answer candidates and ranks them to output the most accurate, well-grounded response"
        ],
        technologies: [
          { label: "Core Language", value: "Python" },
          { label: "Pipeline Orchestration", value: "LangChain, LangGraph" },
          { label: "Vector Index / Store", value: "FAISS" },
          { label: "Embedding Model", value: "HuggingFace Embeddings" },
          { label: "Inference Engine", value: "Groq LLM" },
          { label: "Data Validation", value: "Pydantic Schemas" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    }
  ];

  const webProjects = [
    {
      title: "FAST Car-Pooling",
      githubUrl: "https://github.com/m-ahmad-butt/Car-Pooling.git",
      description: "A comprehensive microservices-based web application for FAST-NUCES students and faculty, featuring scalable backend architecture and secure institutional transit sharing.",
      project: {
        features: [
          "Microservices Architecture - Decoupled services using Netflix Eureka and Spring Cloud",
          "Event-Driven Communication - Scalable messaging between services via Apache Kafka",
          "CI/CD Pipeline - Automated testing and deployment using GitLab CI/CD pipelines",
          "Containerization - Docker-based deployment for consistent environment scaling",
          "AWS Cloud - Deployed on AWS with high availability and load balancing",
          "Academic Verification - Regex-based institutional @nu.edu.pk email validation"
        ],
        technologies: [
          { label: "Architecture", value: "Microservices, Kafka, Eureka" },
          { label: "Deployment", value: "AWS, Docker, GitLab CI/CD" },
          { label: "Backend", value: "Express.js" },
          { label: "Frontend", value: "React 19 + Vite, Tailwind CSS" },
          { label: "Database / ORM", value: "PostgreSQL, MongoDB, Prisma, Hibernate" },
          { label: "Messaging / Cache", value: "BullMQ, RabbitMQ, Redis" },
          { label: "Security", value: "Spring Security, Spring Cloud" },
          { label: "Cloud Services", value: "AWS EC2" },
          { label: "Tools", value: "Jira, GitLab" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "FAST-Ex Marketplace",
      githubUrl: "https://github.com/m-ahmad-butt/FAST-Ex.git",
      description: "A microservices university marketplace for FAST Students to buy, sell, and exchange items. Scalable event-driven architecture with real-time community commitment features.",
      project: {
        features: [
          "Microservices Architecture - Core services communicating via Apache Kafka and Eureka Server",
          "Real-time Chat - Instant buyer-seller messaging using WebSockets and Socket.io",
          "AWS Storage - Utilizing AWS S3 buckets for secure and scalable product image storage",
          "Institutional Auth - Secure login and verification via Clerk institutional auth",
          "CI/CD - Streamlined deployment to Vercel and AWS via GitLab CI/CD"
        ],
        technologies: [
          { label: "Backend", value: "Express.js" },
          { label: "Infrastructure", value: "Apache Kafka, Netflix Eureka, AWS S3" },
          { label: "Database / ORM", value: "PostgreSQL, MongoDB, Prisma" },
          { label: "Messaging / Cache", value: "BullMQ, RabbitMQ, Redis" },
          { label: "Real-time", value: "WebSockets, Socket.io" },
          { label: "Auth & CI/CD", value: "Clerk, GitLab CI/CD" },
          { label: "Storage", value: "AWS S3 Buckets" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Apex",
      githubUrl: "https://github.com/NU-Projects/Apex.git",
      description: "Microservices-based AI career assistant featuring automated skill extraction, roadmap generation, and intelligent job matching.",
      project: {
        features: [
          "Multi-Agent AI - Utilizing Ollama for sophisticated local LLM career insights",
          "Web Scrapping - Automated data collection using Selenium, BeautifulSoup and Apify",
          "Microservices - Event-driven backend with Eureka Server and Apache Kafka",
          "Roadmap Generation - Personalized learning paths based on detected skill gaps",
          "Job Matching - Real-time job alignment analysis using locally hosted AI agents"
        ],
        technologies: [
          { label: "AI & Scraping", value: "Ollama Cloud, Selenium, Apify" },
          { label: "Architecture", value: "Microservices, Kafka, Eureka Server" },
          { label: "Backend", value: "Express, Python Flask" },
          { label: "Frontend", value: "React, Tailwind CSS" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Lost and Found Portal",
      description: "A centralized digital platform for the FAST NUCES campus community. AWS-deployed platform handling 50+ concurrent users per session with AI-based spam filtering.",
      project: {
        features: [
          "Spam Filtering - Integrated AI-based filtering to ensure high-quality campus reports",
          "High Concurrency - Optimized to handle 50+ concurrent users per session",
          "AWS Deployment - Fully deployed and managed on AWS infrastructure",
          "Lost/Found Items - Comprehensive reporting and reunification system",
          "Institutional Security - Access limited to FAST NUCES verified users"
        ],
        technologies: [
          { label: "Infrastructure", value: "AWS, Nginx Proxy" },
          { label: "Backend", value: "Express, Supabase" },
          { label: "AI", value: "Custom Spam Filtering Model" },
          { label: "Frontend", value: "React" }
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
          { label: "Frontend", value: "React (Vite), Tailwind CSS" },
          { label: "Backend", value: "Node.js, Express.js" },
          { label: "Database", value: "Supabase (PostgreSQL)" },
          { label: "Real-time", value: "Supabase Realtime" },
          { label: "AI Integration", value: "Google Gemini AI" },
          { label: "Maps", value: "MapLibre GL" },
          { label: "QR Generation", value: "QRCode Library" },
          { label: "Deployment", value: "Vercel" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Quizify",
      description: "Spring Boot-based quiz management system featuring modular architecture and implementation of core Gang of Four design patterns.",
      githubUrl: "https://github.com/NU-Projects/Quizify.git",
      project: {
        features: [
          "Modular Architecture - Clean separation of concerns for easy maintainability",
          "Design Patterns - Implementation of Factory, Singleton, Adapter, and Template Method patterns",
          "Role Management - Complete teacher and student workflows",
          "Spring Framework - Secure and efficient backend built with Spring Boot"
        ],
        technologies: [
          { label: "Backend", value: "Spring Boot, Java Security" },
          { label: "Frontend", value: "React + Vite" },
          { label: "Patterns", value: "Factory, Singleton, Adapter, Template Method" },
          { label: "Architecture", value: "N-Tier / Layered" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    }
  ];

  const aiProjects = [
    {
      title: "PersonaFlow MBTI",
      hfUrl: "https://huggingface.co/m-ahmad-butt/mbti-co-model",
      description: "WhatsApp chat personality predictor using transformer-based XLM-RoBERTa for multilingual personality monitoring with 82% accuracy.",
      githubUrl: "https://github.com/m-ahmad-butt/MbtiPredictor-PersonaFlow.git",
      project: {
        features: [
          "Multilingual Pipeline - Optimized for English and Roman Urdu/Hindi WhatsApp chats",
          "Fine-Tuning Architecture - PEFT (LoRA) integration for efficient model adaptation",
          "Advanced Training - QLoRA (4-bit NF4) quantization to reduce VRAM requirements",
          "Evaluation Metrics - Comprehensive analysis including F1-Score, Precision, Recall, Confusion Matrix, and ROC/AUC",
          "High Performance - Achieved 82% overall accuracy on personality classification",
          "Deployment - Scalable backend using Flask and React production builds with private Hugging Face Space integration"
        ],
        technologies: [
          { label: "Model", value: "XLM-RoBERTa (Transformer)" },
          { label: "Fine-Tuning", value: "PEFT (LoRA), QLoRA (NF4)" },
          { label: "Dataset", value: "WhatsApp Chats (English, Roman-Urdu Labels)" },
          { label: "Metrics", value: "82% Accuracy (F1, Precision, Recall, ROC)" },
          { label: "Library", value: "PyTorch, Hugging Face, BitsAndBytes" },
          { label: "Backend", value: "Flask, Hugging Face Spaces (Private)" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Cricket Commentary AI",
      hfUrl: "https://huggingface.co/m-ahmad-butt/cricket-commentary-model",
      githubUrl: "https://github.com/m-ahmad-butt/cricket-commentary-model",
      description: "Real-time cricket commentary generator using Qwen2.5 with QLoRA optimization for high-performance broadcasting production.",
      project: {
        features: [
          "Unsloth Optimization - 4x faster fine-tuning using QLoRA kernels",
          "Raw Data Processing - Custom pipelines for parsing Cricsheet YAML match data",
          "Contextual Generation - Processes ball-by-ball metadata for context-aware commentary",
          "Low Latency - Optimized for <450ms inference times on Hugging Face Spaces",
          "Regional Synthesis - Integrated accents for Indian, British, and Australian viewers",
          "React HUD - Dynamic dashboard for real-time commentary display"
        ],
        technologies: [
          { label: "Model", value: "Qwen2.5-1.5B + QLoRA (Unsloth)" },
          { label: "Datasets", value: "HF (cricket), Cricsheet (YAML Matches)" },
          { label: "Optimization", value: "Unsloth 4-bit Kernels" },
          { label: "Backend", value: "FastAPI, Python" },
          { label: "Deployment", value: "Hugging Face Spaces, Docker" },
          { label: "Voice", value: "Microsoft Edge-TTS" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    },
    {
      title: "Pneumonia Detection",
      githubUrl: "https://github.com/m-ahmad-butt/DM-Pneumonia-Detection.git",
      hfUrl: "https://huggingface.co/m-ahmad-butt/pneumonia-detection-model",
      description: "Medical image classification system using MobileNetV2 with advanced contrast enhancement and normalized preprocessing pipeline.",
      project: {
        features: [
          "MobileNetV2 Transfer Learning - Optimized for medical imaging with pretrained weights",
          "Pipeline Optimization - Resize, Median Blur, and CLAHE for contrast enhancement",
          "Two-Phase Training - Strategy using frozen base layers followed by top-layer fine-tuning",
          "Imbalance Handling - Batch-wise balanced weights to normalize pneumonia detection",
          "Cloud Infrastructure - Fully deployed on Vercel and Hugging Face for global accessibility"
        ],
        technologies: [
          { label: "Deep Learning", value: "TensorFlow 2.11+, Keras" },
          { label: "Preprocessing", value: "OpenCV, CLAHE, Z-Score" },
          { label: "Computing", value: "Python, WSL2 (GPU)" },
          { label: "Deployment", value: "Vercel, Hugging Face" }
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
          { label: "Model", value: "DistilRoBERTa-Base" },
          { label: "Music API", value: "Spotify API" },
          { label: "Framework", value: "Transformers (HF)" },
          { label: "Library", value: "Spotipy, Pandas" }
        ],
        linkedinUrl: "https://www.linkedin.com/in/m-ahmad-butt"
      }
    }
  ];

  const xrProjects = [
    {
      title: "AR IKEA",
      description: "An Android AR app built at EggyStudio that lets users browse a 3D furniture catalog and place true-to-scale sofas, tables, and chairs into their real-world environment using ARCore plane detection — helping visualize spaces before buying.",
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
      description: "An Android AR experience developed at EggyStudio that detects and tracks multiple physical image targets simultaneously, overlaying dynamic 3D content that persists even when the target temporarily leaves the camera frame.",
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
      description: "An Android AR app created at EggyStudio that places realistic 3D plant models into real-world environments via ARCore plane detection, with interactive scaling and rotation so users can visualize plants in their space before purchasing.",
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
      description: "A Vuforia-powered Android AR app built at EggyStudio that recognizes a physical business card and overlays 3D models, animations, and interactive elements anchored to the card — turning a standard portfolio card into an immersive AR experience.",
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
          { label: "Scripting Language", value: "C# (.NET)" },
          { label: "Platform", value: "Android" },
          { label: "Render Pipeline", value: "Built-in" },
          { label: "Physics", value: "Unity 2D Physics" },
          { label: "UI System", value: "Unity UI (uGUI)" },
          { label: "Animation", value: "Animator (2D Sprite)" },
          { label: "Scripting Backend", value: "IL2CPP" },
          { label: "Level Design", value: "Endless Procedural" },
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
          { label: "Scripting Language", value: "C# (.NET)" },
          { label: "Platform", value: "Android, Windows" },
          { label: "Render Pipeline", value: "Built-in" },
          { label: "Physics", value: "Unity 3D Physics" },
          { label: "UI System", value: "Unity UI (uGUI)" },
          { label: "Animation", value: "Animator (Blend Trees)" },
          { label: "Audio", value: "Audio Source/Listener" },
          { label: "Input", value: "Fixed Joystick" },
          { label: "Backend", value: "IL2CPP / Mono" },
          { label: "Design", value: "Low-Poly Procedural" },
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
          { label: "Build Tools", value: "Maven, ANT" },
          { label: "Testing", value: "JUnit" },
          { label: "Patterns", value: "Composite, Command" },
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
          { label: "Documentation", value: "JavaDoc, UML Standard" },
          { label: "Version Control", value: "Git & GitHub" }
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

          <h3 className="subcategory-title" style={{ marginTop: '2.5rem' }}>ML Hackathons</h3>
          <div className="projects-grid">
            {mlHackathons.map((item, index) => (
              <HackathonCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <h1 id="projects-section-start" className="projects-main-title" style={{ marginTop: '4rem' }}>PROJECTS</h1>

      <section className="project-category">
        <h2 className="category-title">Freelance Projects</h2>
        <div className="projects-grid">
          {freelanceProjects.map((project, index) => (
            <ProjectCard key={index} {...project} onProjectSelect={() => onProjectSelect(project)} />
          ))}
        </div>
      </section>

      <section className="project-category">
        <h2 className="category-title">Agentic AI</h2>
        <div className="projects-grid">
          {agenticAiProjects.map((project, index) => (
            <ProjectCard key={index} {...project} onProjectSelect={() => onProjectSelect(project)} />
          ))}
        </div>
      </section>

      <section className="project-category">
        <h2 className="category-title">AI & ML Projects</h2>
        <div className="projects-grid">
          {aiProjects.map((project, index) => (
            <ProjectCard key={index} {...project} onProjectSelect={() => onProjectSelect(project)} />
          ))}
        </div>
      </section>

      <section className="project-category">
        <h2 className="category-title">Web Projects</h2>
        <div className="projects-grid">
          {webProjects.map((project, index) => (
            <ProjectCard key={index} {...project} onProjectSelect={() => onProjectSelect(project)} />
          ))}
        </div>
      </section>


      <section className="project-category">
        <h2 className="category-title">XR Projects</h2>
        <div className="projects-grid">
          {xrProjects.map((project, index) => (
            <ProjectCard key={index} {...project} onProjectSelect={() => onProjectSelect(project)} />
          ))}
        </div>
      </section>

      <section className="project-category">
        <h2 className="category-title">Misc Projects</h2>
        <div className="projects-grid">
          {miscProjects.map((project, index) => (
            <ProjectCard key={index} {...project} onProjectSelect={() => onProjectSelect(project)} />
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
