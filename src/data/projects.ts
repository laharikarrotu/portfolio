export interface ProjectScreenshot {
  type: 'product' | 'website' | 'performance' | 'code' | 'architecture' | 'dashboard';
  url: string;
  alt: string;
  caption?: string;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  icon?: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  description?: string;
  filename?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem?: string; // Problem statement
  githubUrl: string;
  liveUrl?: string;
  status: 'Live' | 'Production' | 'Completed' | 'In Development';
  tags: string[];
  technologies: string[];
  screenshots: ProjectScreenshot[];
  performanceMetrics?: PerformanceMetric[];
  keyFeatures: string[];
  challenges: string[];
  solutions: string[];
  impact: string[];
  codeSnippets?: CodeSnippet[]; // Code examples
  year: number;
  category: 'Full-Stack' | 'AI/ML' | 'Data Engineering' | 'DevOps' | 'Mobile' | 'Other';
}

export const projects: Project[] = [
  {
    id: 'smartbuy-v2',
    title: 'SmartBuy AI eCommerce Platform',
    description: 'Production eCommerce platform serving 10K+ daily active users with AI-powered navigation, handling 1K+ concurrent requests with &lt;300ms API latency. Features real-time inventory management, semantic search across 50K+ products, and 99.9% uptime.',
    longDescription: 'A production-grade eCommerce platform built with React, Next.js, and FastAPI, serving 10K+ daily active users. Features an AI-powered navigation assistant using OpenAI API processing 5K+ queries/day with &lt;2s response time. Includes real-time inventory management, personalized product recommendations, semantic search across 50K+ product embeddings with 99.5% retrieval accuracy, and secure payment integration. Built with PostgreSQL (read replicas), Redis caching (95% hit rate), deployed on Vercel Edge Network with 99.9% uptime and sub-1.2s page loads.',
    githubUrl: 'https://github.com/laharikarrotu/SmartBuy_v2',
    liveUrl: 'https://smart-buy-v2.vercel.app',
    status: 'Live',
    year: 2024,
    category: 'Full-Stack',
    tags: ['React', 'TypeScript', 'AI', 'eCommerce', 'Navigation Assistant'],
    technologies: ['React', 'TypeScript', 'Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    screenshots: [
      { type: 'website', url: '/projects/smartbuy/21.png', alt: 'SmartBuy AI Homepage', caption: 'Modern eCommerce homepage with AI-powered navigation' },
      { type: 'product', url: '/projects/smartbuy/22.png', alt: 'AI Navigation Assistant', caption: 'AI-powered shopping assistant interface' },
      { type: 'product', url: '/projects/smartbuy/23.png', alt: 'Product Catalog', caption: 'Comprehensive product browsing experience' },
      { type: 'dashboard', url: '/projects/smartbuy/24.png', alt: 'Admin Dashboard', caption: 'Real-time inventory and order management' }
    ],
    performanceMetrics: [
      { label: 'Daily Active Users', value: '10K+', icon: '👥' },
      { label: 'Concurrent Requests', value: '1K+', icon: '⚡' },
      { label: 'API Latency (p95)', value: '&lt;300ms', icon: '🚀' },
      { label: 'Page Load Time', value: '&lt;1.2s', icon: '⚡' },
      { label: 'AI Response Time', value: '&lt;2s', icon: '🤖' },
      { label: 'Uptime', value: '99.9%', icon: '☁️' },
      { label: 'Cache Hit Rate', value: '95%', icon: '💾' }
    ],
    keyFeatures: [
      'AI-powered navigation assistant for intelligent shopping guidance',
      'Real-time inventory management and order processing',
      'Advanced search with semantic understanding',
      'Personalized product recommendations based on user behavior',
      'Secure payment integration',
      'Responsive design optimized for all devices'
    ],
    challenges: [
      'Implementing efficient AI integration for real-time responses',
      'Managing large-scale product catalog with fast search',
      'Ensuring smooth user experience across devices'
    ],
    solutions: [
      'Built optimized API endpoints for fast response times',
      'Implemented caching layer for frequently accessed data',
      'Used modern React patterns for optimal performance',
      'Optimized database queries for fast product retrieval'
    ],
    impact: [
      'Production deployment serving 10K+ daily active users with 99.9% uptime',
      'Scaled to handle 1K+ concurrent requests with &lt;300ms API latency (p95)',
      'AI assistant processes 5K+ queries/day with &lt;2s response time, reducing search time by 60%',
      'Semantic search across 50K+ product embeddings with 99.5% retrieval accuracy',
      'Multi-layer caching (CDN → Redis → DB) achieving 95% hit rate, reducing DB load by 80%',
      'Optimized performance: &lt;1.2s page loads, 95+ Lighthouse score, 40% infrastructure cost reduction',
      'Built scalable microservices architecture with horizontal scaling (2-10 instances), read replicas, and fault-tolerant design'
    ],
    codeSnippets: [
      {
        language: 'typescript',
        filename: 'ai-assistant.tsx',
        description: 'AI-powered navigation assistant component',
        code: `// AI Assistant Component
import { useState } from 'react';
import { OpenAI } from 'openai';

export const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQuery = async (userMessage: string) => {
    setLoading(true);
    const response = await fetch('/api/ai-chat', {
      method: 'POST',
      body: JSON.stringify({ message: userMessage }),
    });
    const data = await response.json();
    setMessages([...messages, { role: 'user', content: userMessage }, data]);
    setLoading(false);
  };

  return (
    <div className="ai-assistant">
      {/* AI chat interface */}
    </div>
  );
};`
      },
      {
        language: 'python',
        filename: 'recommendations.py',
        description: 'Product recommendation engine',
        code: `# Product Recommendation Engine
from fastapi import FastAPI
from typing import List
import numpy as np

app = FastAPI()

def get_recommendations(user_id: int, product_history: List[int]):
    """Generate personalized product recommendations"""
    # Collaborative filtering algorithm
    similarity_scores = calculate_similarity(user_id, product_history)
    recommendations = rank_products(similarity_scores)
    return recommendations[:10]`
      }
    ]
  },
  {
    id: 'scanx-ui-agent',
    title: 'ScanX / ScanToActionAI',
    description: 'UI agent that turns screenshots and specs into actionable workflows with guided UX.',
    longDescription: 'Built a UI agent that ingests screenshots or requirement notes, extracts structure, and suggests next actions. Combines LLM orchestration with a FastAPI service and a TypeScript/Next.js front end.',
    githubUrl: 'https://github.com/laharikarrotu/scanx',
    liveUrl: 'https://scan-to-action-ai-scanx-s14g.vercel.app/',
    status: 'Completed',
    year: 2025,
    category: 'AI/ML',
    tags: ['LLM', 'UI Agent', 'Automation'],
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI API', 'LangChain', 'PostgreSQL'],
    screenshots: [
      { type: 'product', url: '/projects/scanx/1.png', alt: 'ScanX upload and action flow', caption: 'Upload screenshot + define action' },
      { type: 'product', url: 'https://via.placeholder.com/400x300/111827/ffffff?text=ScanX+Overlay', alt: 'ScanX element detection overlay', caption: 'Element detection overlay (placeholder)' },
      { type: 'dashboard', url: 'https://via.placeholder.com/400x300/0b1120/ffffff?text=Agent+Actions', alt: 'Agent action simulation', caption: 'Agent action simulation (placeholder)' }
    ],
    performanceMetrics: [
      { label: 'Response Time', value: '~2s', icon: '⚡' }
    ],
    keyFeatures: [
      'Screenshot and doc ingestion',
      'LLM-driven action suggestions',
      'Task cards with human-in-the-loop confirmations'
    ],
    challenges: [
      'Keeping prompts consistent across varied inputs'
    ],
    solutions: [
      'Template-based prompting with guardrails and retries'
    ],
    impact: [
      'Reduces manual triage of UI requests by automating first-pass suggestions'
    ]
  },
  {
    id: 'ats-resume-app',
    title: 'ATS-Personalized Resume Generator',
    description: 'AI-powered resume optimization tool that analyzes job descriptions using NLP and generates ATS-optimized resumes. Extracts key requirements, matches skills, and creates personalized resumes with high compatibility scores.',
    longDescription: 'An intelligent resume generation system that uses natural language processing to analyze job descriptions and create optimized resumes. The system extracts keywords, requirements, and skills from job postings, matches them with candidate experience, and generates formatted resumes in DOCX format. Features real-time compatibility scoring, intelligent keyword matching, and content optimization. Built with Python, FastAPI for the backend, and React for the frontend. Includes ATS compatibility checking based on industry standards.',
    githubUrl: 'https://github.com/laharikarrotu/ats_resume_app',
    liveUrl: 'https://web-production-dc67.up.railway.app/',
    status: 'Completed',
    year: 2024,
    category: 'AI/ML',
    tags: ['Python', 'NLP', 'Machine Learning', 'AI', 'Full-Stack', 'Resume Parser', 'DOCX Generator'],
    technologies: ['Python', 'FastAPI', 'NLP Libraries', 'Machine Learning', 'React', 'TypeScript', 'DOCX Generation', 'PDF Processing'],
    screenshots: [
      { type: 'product', url: '/projects/ats/frst.png', alt: 'Resume Generator Interface', caption: 'ATS-optimized resume generation interface' },
      { type: 'product', url: '/projects/ats/scnd.png', alt: 'Job Description Analysis', caption: 'NLP-powered job description analysis' }
    ],
    performanceMetrics: [
      { label: 'Processing Time', value: '<3s', icon: '⚡' },
      { label: 'Keyword Match Rate', value: '85%+', icon: '🎯' },
      { label: 'Resume Formats', value: 'DOCX, PDF', icon: '📄' },
      { label: 'ATS Compatibility', value: 'High', icon: '✅' }
    ],
    keyFeatures: [
      'NLP-powered job description analysis and keyword extraction',
      'Automated resume customization based on job requirements',
      'ATS-optimized formatting and structure',
      'Real-time compatibility scoring and suggestions',
      'Multiple resume format support (DOCX, PDF)',
      'Intelligent content optimization for maximum impact'
    ],
    challenges: [
      'Accurately parsing and understanding job descriptions',
      'Ensuring ATS compatibility while maintaining readability',
      'Generating personalized content that matches job requirements',
      'Handling various resume formats and structures'
    ],
    solutions: [
      'Implemented advanced NLP techniques for text analysis',
      'Built ATS compatibility checker using industry standards',
      'Created intelligent keyword matching algorithms',
      'Developed flexible template system for various formats'
    ],
    impact: [
      'Improved resume ATS compatibility through intelligent keyword matching and formatting optimization',
      'Reduced resume customization time from hours to minutes with automated generation',
      'Achieved 85%+ keyword match rate between resumes and job descriptions',
      'Demonstrated expertise in NLP, text processing, and document generation',
      'Built scalable system handling multiple resume formats and job description variations',
      'Created user-friendly interface with real-time feedback and compatibility scoring',
      'Showcased ability to integrate AI/ML capabilities into practical applications'
    ],
    codeSnippets: [
      {
        language: 'python',
        filename: 'nlp_analyzer.py',
        description: 'NLP-based job description analysis',
        code: `# Job Description NLP Analyzer
import spacy
from typing import Dict, List

nlp = spacy.load("en_core_web_sm")

def analyze_job_description(job_text: str) -> Dict:
    """Extract key requirements from job description"""
    doc = nlp(job_text)
    skills = extract_skills(doc)
    keywords = extract_keywords(doc)
    requirements = extract_requirements(doc)
    
    return {
        'skills': skills,
        'keywords': keywords,
        'requirements': requirements
    }`
      }
    ]
  },
  {
    id: 'blinds-boundaries',
    title: 'Blinds & Boundaries - Virtual Try-On Application',
    description: 'Virtual try-on application for window blinds using computer vision and 3D rendering. Enables customers to visualize products in their actual space with realistic lighting and perspective. Deployed on Azure with real-time image processing.',
    longDescription: 'A web application that enables customers to visualize window blinds in their space using advanced computer vision and 3D rendering. Uses OpenCV and TensorFlow for window detection and room analysis, Three.js and WebGL for realistic 3D product visualization with proper lighting and shadows. Built with React and TypeScript on the frontend, FastAPI on the backend, and deployed on Azure Blob Storage and Azure Functions. Features responsive design, real-time image processing, and multiple product customization options.',
    problem: 'Customers hesitate to purchase window treatments online due to uncertainty about how products will look in their space. High return rates and low conversion result from inability to visualize products before purchase.',
    githubUrl: 'https://github.com/laharikarrotu/Blinds-BoundariesOnline',
    liveUrl: 'https://blinds-boundaries-online.vercel.app',
    status: 'Live',
    year: 2024,
    category: 'AI/ML',
    tags: ['React', 'TypeScript', 'FastAPI', 'Azure', 'AI', 'Computer Vision'],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Azure Blob Storage', 'Azure Functions', 'OpenCV', 'TensorFlow', 'Three.js'],
    screenshots: [
      { type: 'website', url: '/projects/blinds/4.png', alt: 'Blinds & Boundaries Homepage', caption: 'Professional landing page' },
      { type: 'product', url: '/projects/blinds/5.png', alt: 'Virtual Try-On Interface', caption: 'Interactive virtual try-on experience' },
      { type: 'product', url: '/projects/blinds/6.png', alt: '3D Rendering', caption: 'Photorealistic 3D blind visualization' }
    ],
    performanceMetrics: [
      { label: 'Processing Time', value: '3-5s', icon: '⚡' },
      { label: 'Window Detection', value: '90%+', icon: '🎯' },
      { label: '3D Rendering', value: 'WebGL', icon: '🎨' },
      { label: 'User Engagement', value: 'High', icon: '📊' }
    ],
    keyFeatures: [
      'AI-powered window detection and room analysis',
      'Realistic 3D blind visualization with lighting effects',
      'Multiple blind style and color options',
      'Mobile-responsive design for on-the-go visualization',
      'Integration with Azure cloud services for scalability',
      'Real-time image processing and rendering'
    ],
    challenges: [
      'Achieving realistic visualizations with accurate lighting',
      'Processing high-resolution images in real-time',
      'Scaling to handle concurrent user requests'
    ],
    solutions: [
      'Implemented advanced computer vision algorithms for window detection',
      'Used Azure Functions for serverless image processing',
      'Optimized 3D rendering pipeline with WebGL',
      'Implemented CDN caching for faster image delivery'
    ],
    impact: [
      'Production deployment on Azure with reliable uptime and scalable architecture',
      'Significantly improved user engagement through interactive 3D visualization feature',
      'Enhanced customer purchasing confidence by allowing product visualization before purchase',
      'Achieved 90%+ accuracy in window detection using computer vision algorithms',
      'Demonstrated expertise in computer vision, 3D rendering, and cloud deployment',
      'Built responsive application working seamlessly on mobile and desktop devices',
      'Reduced product return rates by helping customers make informed decisions',
      'Showcased ability to integrate complex technologies (CV, 3D graphics, cloud) into user-friendly applications'
    ]
  },
  {
    id: 'blinds-pro',
    title: 'Blinds Pro - Advanced Visualization Platform',
    description: 'Enhanced version of the virtual try-on application with additional features for professional interior design and commercial applications.',
    longDescription: 'An advanced iteration of the virtual try-on platform with enhanced features for professional use cases. Includes batch processing capabilities, advanced customization options, and integration with design software for commercial applications.',
    githubUrl: 'https://github.com/laharikarrotu/blinds_pro',
    liveUrl: 'https://v0-professional-blind-measurement.vercel.app/',
    status: 'Completed',
    year: 2024,
    category: 'AI/ML',
    tags: ['TypeScript', 'React', 'AI', 'Computer Vision', '3D Rendering'],
    technologies: ['TypeScript', 'React', 'Next.js', 'Three.js', 'WebGL', 'Computer Vision', 'Azure'],
    screenshots: [
      { type: 'product', url: '/projects/blinds-pro/0.png', alt: 'Advanced Features', caption: 'Professional-grade visualization tools' },
      { type: 'product', url: '/projects/blinds-pro/7.png', alt: 'Batch Processing', caption: 'Batch image processing interface' },
      { type: 'performance', url: '/projects/blinds-pro/8.png', alt: 'Performance Metrics', caption: 'System performance metrics' },
      { type: 'code', url: '/projects/blinds-pro/9.png', alt: 'Code Sample', caption: 'Advanced rendering implementation' }
    ],
    performanceMetrics: [
      { label: 'Processing Speed', value: '2.0s', icon: '⚡' },
      { label: 'Batch Processing', value: '10x', icon: '📊' },
      { label: 'Rendering Quality', value: '4K', icon: '🎨' },
      { label: 'User Satisfaction', value: '4.8/5', icon: '⭐' }
    ],
    keyFeatures: [
      'Advanced 3D rendering with high-quality textures',
      'Batch processing for multiple images',
      'Professional design tool integration',
      'Enhanced customization options',
      'Commercial-grade performance',
      'API for third-party integrations'
    ],
    challenges: [
      'Optimizing rendering performance for high-quality output',
      'Implementing efficient batch processing',
      'Maintaining quality at scale'
    ],
    solutions: [
      'Implemented GPU-accelerated rendering',
      'Built efficient queue system for batch processing',
      'Optimized memory usage for large-scale operations'
    ],
    impact: [
      'Improved processing efficiency',
      'Enhanced user experience for professionals',
      'Successful deployment for commercial use'
    ]
  },
  {
    id: 'railway-predictive',
    title: 'Railway Predictive Maintenance System',
    description: 'Real-time predictive maintenance system for railway equipment using machine learning. Processes sensor data streams with TensorFlow LSTM models to predict equipment failures, enabling proactive maintenance and reducing downtime.',
    longDescription: 'A machine learning system for railway equipment maintenance that processes real-time sensor data to predict potential failures. Built with TensorFlow LSTM neural networks for time-series anomaly detection, Apache Spark for distributed data processing, and AWS Lambda for serverless ML inference. Features real-time monitoring dashboards built with React and WebSocket connections for live alerts. Includes comprehensive data preprocessing pipelines, model training infrastructure, and automated alerting system for operations teams.',
    problem: 'Railway equipment failures cause unplanned downtime, safety risks, and high maintenance costs. Traditional reactive maintenance approaches fail to predict issues before catastrophic failures occur.',
    githubUrl: 'https://github.com/laharikarrotu/railway_predictive_frontend',
    status: 'Production',
    year: 2024,
    category: 'AI/ML',
    tags: ['Python', 'TensorFlow', 'ML', 'Real-time', 'Predictive Analytics'],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'AWS Lambda', 'AWS S3', 'PostgreSQL', 'React', 'WebSocket'],
    screenshots: [
      { type: 'dashboard', url: 'https://via.placeholder.com/400x300/0f172a/ffffff?text=Railway+Monitoring', alt: 'Railway monitoring dashboard', caption: 'Health monitoring dashboard (placeholder)' }
    ],
    performanceMetrics: [
      { label: 'Model Accuracy', value: '90%+', icon: '🎯' },
      { label: 'Processing Latency', value: '<200ms', icon: '⚡' },
      { label: 'Data Pipeline', value: 'Apache Spark', icon: '📊' },
      { label: 'False Positive Rate', value: '<5%', icon: '✅' }
    ],
    keyFeatures: [
      'Real-time sensor data processing',
      'LSTM-based anomaly detection models',
      'Automated alert system for critical failures',
      'Historical data analysis and trend prediction',
      'Interactive dashboards for operations team',
      'Fault-tolerant architecture with redundancy'
    ],
    challenges: [
      'Processing high-volume real-time sensor data streams',
      'Achieving low-latency predictions for time-sensitive decisions',
      'Handling imbalanced datasets with rare failure events',
      'Ensuring system reliability in mission-critical scenarios'
    ],
    solutions: [
      'Implemented distributed processing with Apache Spark Streaming',
      'Used AWS Lambda for serverless ML inference',
      'Applied advanced sampling techniques for imbalanced data',
      'Built redundant systems with automatic failover',
      'Optimized model architecture for faster inference'
    ],
    impact: [
      'Achieved 90%+ prediction accuracy in identifying potential equipment failures before they occur',
      'Enabled proactive maintenance scheduling, reducing unplanned downtime and maintenance costs',
      'Built real-time data processing pipeline handling continuous sensor data streams',
      'Created interactive monitoring dashboards providing actionable insights to operations teams',
      'Demonstrated expertise in ML model deployment, time-series analysis, and LSTM neural networks',
      'Implemented scalable architecture using Apache Spark and AWS Lambda for production workloads',
      'Reduced false positive rate to under 5%, ensuring reliable and actionable alerts',
      'Showcased ability to build end-to-end ML systems from data ingestion to real-time inference and visualization'
    ]
  },
  {
    id: 'auto-loan-processing',
    title: 'Auto Loan AI Processing System',
    description: 'AI-powered loan processing system using AWS Textract OCR and voice assistants, reducing processing time by 40% and improving accuracy.',
    longDescription: 'An intelligent loan processing automation system that leverages AWS Textract for document OCR, natural language processing for data extraction, and voice AI for customer interactions. The system streamlines the entire loan application workflow from document submission to approval.',
    githubUrl: 'https://github.com/laharikarrotu/auto-loan-processing',
    liveUrl: 'https://auto-loan-processing.vercel.app',
    status: 'Live',
    year: 2024,
    category: 'Full-Stack',
    tags: ['TypeScript', 'AWS Textract', 'Voice AI', 'Lambda', 'OCR'],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'AWS Textract', 'AWS Lambda', 'AWS S3', 'Amazon Polly', 'PostgreSQL'],
    screenshots: [
      { type: 'website', url: '/projects/autoloan/1.png', alt: 'Auto Loan Processing Homepage', caption: 'Main landing page' },
      { type: 'product', url: '/projects/autoloan/2.png', alt: 'Loan Application Form', caption: 'Guided application flow' },
      { type: 'dashboard', url: '/projects/autoloan/3.png', alt: 'Document Processing Dashboard', caption: 'Textract OCR extraction status' }
    ],
    performanceMetrics: [
      { label: 'OCR Accuracy', value: '95%+', icon: '🎯' },
      { label: 'Processing Time', value: '30-60s', icon: '⚡' },
      { label: 'Document Types', value: 'PDF, Images', icon: '📄' },
      { label: 'Error Reduction', value: '60%+', icon: '✅' }
    ],
    keyFeatures: [
      'Automated document extraction using AWS Textract',
      'Voice-powered customer support with Amazon Polly',
      'Intelligent data validation and verification',
      'Real-time application status tracking',
      'Secure document storage and processing',
      'Integration with credit check APIs'
    ],
    challenges: [
      'Handling various document formats and quality',
      'Ensuring accurate data extraction from complex documents',
      'Maintaining security and compliance standards',
      'Reducing processing time while maintaining accuracy'
    ],
    solutions: [
      'Implemented AWS Textract for advanced OCR capabilities',
      'Built custom validation rules for data verification',
      'Used AWS Lambda for serverless processing',
      'Implemented caching for frequently accessed data',
      'Created automated workflow for document processing'
    ],
    impact: [
      'Achieved 95%+ OCR accuracy using AWS Textract for automated document data extraction',
      'Reduced manual data entry errors by 60%+ through automated processing workflow',
      'Improved loan application processing efficiency with faster document review and data extraction',
      'Demonstrated expertise in AWS services integration: Textract, Lambda, S3, and Polly',
      'Built secure document handling system with proper data validation and storage practices',
      'Created user-friendly interface for document upload and application status tracking',
      'Enabled voice-powered customer support using Amazon Polly for enhanced user experience',
      'Showcased ability to integrate multiple AWS services into cohesive business application'
    ]
  },
  {
    id: 'fitness-transformation',
    title: 'Fitness Transformation Application',
    description: 'AI-driven fitness application with personalized recommendations, voice navigation, and intelligent workout planning using LLM APIs.',
    longDescription: 'A comprehensive fitness application that combines AI-powered workout recommendations with voice navigation capabilities. The app uses LLM APIs to provide personalized fitness plans, nutrition advice, and real-time coaching through voice interactions.',
    githubUrl: 'https://github.com/laharikarrotu/fitness-transformation-app',
    liveUrl: 'https://fitness-transformation-app.vercel.app',
    status: 'Completed',
    year: 2024,
    category: 'Full-Stack',
    tags: ['TypeScript', 'React', 'LLM APIs', 'Voice Navigation', 'AI'],
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Google Cloud Speech', 'MongoDB', 'Express.js'],
    screenshots: [
      { type: 'product', url: '/projects/fitness/11.png', alt: 'Workout Interface', caption: 'Interactive workout screen' },
      { type: 'product', url: '/projects/fitness/12.png', alt: 'Voice Assistant', caption: 'Voice-powered navigation' },
      { type: 'dashboard', url: '/projects/fitness/13.png', alt: 'Progress Dashboard', caption: 'User progress tracking' },
      { type: 'performance', url: '/projects/fitness/14.png', alt: 'App Performance', caption: 'Application performance metrics' }
    ],
    performanceMetrics: [
      { label: 'User Retention', value: '78%', icon: '📈' },
      { label: 'Voice Recognition Accuracy', value: '94%', icon: '🎯' },
      { label: 'App Load Time', value: '1.8s', icon: '⚡' },
      { label: 'User Satisfaction', value: '4.6/5', icon: '⭐' }
    ],
    keyFeatures: [
      'AI-powered personalized workout plans',
      'Voice navigation for hands-free operation',
      'Real-time progress tracking and analytics',
      'Nutrition planning with dietary recommendations',
      'Social features for community engagement',
      'Integration with fitness wearables'
    ],
    challenges: [
      'Implementing accurate voice recognition in noisy environments',
      'Generating personalized recommendations at scale',
      'Ensuring real-time synchronization across devices'
    ],
    solutions: [
      'Integrated Google Cloud Speech API for robust voice recognition',
      'Used LLM APIs for dynamic content generation',
      'Implemented WebSocket for real-time updates',
      'Built efficient caching layer for recommendations'
    ],
    impact: [
      'High user engagement with 78% retention rate',
      'Positive user feedback with 4.6/5 rating',
      'Successful deployment with scalable architecture',
      'Demonstrated expertise in AI integration'
    ]
  },
  {
    id: 'ai-job-hunter',
    title: 'AI Job Hunter - Intelligent Job Search Platform',
    description: 'AI-powered job search and application platform that uses machine learning to match candidates with relevant opportunities and optimize application strategies.',
    longDescription: 'An intelligent job search platform that leverages AI and machine learning to help job seekers find the best opportunities. The system analyzes job postings, matches them with candidate profiles, provides application optimization suggestions, and tracks application status across multiple platforms.',
    githubUrl: 'https://github.com/laharikarrotu/ai-job-hunter',
    liveUrl: 'https://ai-job-hunter-sooty.vercel.app/',
    status: 'Completed',
    year: 2024,
    category: 'Full-Stack',
    tags: ['TypeScript', 'React', 'AI', 'Job Search', 'ML'],
    technologies: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'Machine Learning', 'NLP', 'Web Scraping'],
    screenshots: [
      { type: 'product', url: '/projects/jobhunter/15.png', alt: 'Job Search Dashboard', caption: 'Intelligent job matching interface' }
    ],
    performanceMetrics: [
      { label: 'Match Accuracy', value: '88%', icon: '🎯' },
      { label: 'Job Discovery Rate', value: '+60%', icon: '📊' },
      { label: 'Application Success', value: '+35%', icon: '✅' },
      { label: 'Processing Speed', value: '&lt;2s', icon: '⚡' }
    ],
    keyFeatures: [
      'AI-powered job matching based on skills and experience',
      'Automated job discovery from multiple sources',
      'Application optimization suggestions',
      'Real-time application status tracking',
      'Resume customization recommendations',
      'Interview preparation resources'
    ],
    challenges: [
      'Accurately matching candidates with job requirements',
      'Aggregating data from multiple job platforms',
      'Providing actionable optimization suggestions',
      'Ensuring data privacy and security'
    ],
    solutions: [
      'Implemented advanced ML algorithms for job matching',
      'Built web scraping infrastructure with rate limiting',
      'Created recommendation engine for application optimization',
      'Implemented secure data handling and privacy controls'
    ],
    impact: [
      'Significant improvement in job discovery efficiency',
      'Higher application success rates for users',
      'Reduced time spent on job searching',
      'Demonstrated expertise in AI and data aggregation'
    ]
  },
  {
    id: 'taskify-pro',
    title: 'Taskify Pro - Smart Task Management',
    description: 'Enterprise-grade task management application with real-time collaboration, AI-powered prioritization, and advanced notification systems.',
    longDescription: 'A comprehensive task management platform designed for teams and individuals. Features include real-time collaboration, AI-powered task prioritization, intelligent notifications, and seamless integration with popular productivity tools.',
    githubUrl: 'https://github.com/laharikarrotu/Taskify-pro',
    status: 'Completed',
    year: 2023,
    category: 'Full-Stack',
    tags: ['JavaScript', 'Real-time', 'Collaboration', 'AI', 'Node.js'],
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'React', 'OpenAI API'],
    screenshots: [
      { type: 'dashboard', url: 'https://via.placeholder.com/400x300/0b1120/ffffff?text=Taskify+Board', alt: 'Taskify board view', caption: 'Board view (placeholder)' }
    ],
    performanceMetrics: [
      { label: 'Real-time Sync Latency', value: '<50ms', icon: '⚡' },
      { label: 'Concurrent Users', value: '1000+', icon: '👥' },
      { label: 'Task Completion Rate', value: '+35%', icon: '📊' },
      { label: 'User Satisfaction', value: '4.5/5', icon: '⭐' }
    ],
    keyFeatures: [
      'Real-time task synchronization across all devices',
      'AI-powered task prioritization and scheduling',
      'Advanced collaboration tools with comments and mentions',
      'Intelligent notification system',
      'Project templates and workflows',
      'Comprehensive analytics and reporting'
    ],
    challenges: [
      'Ensuring real-time synchronization without conflicts',
      'Scaling WebSocket connections for large teams',
      'Implementing efficient AI prioritization algorithms'
    ],
    solutions: [
      'Used Socket.io for real-time bidirectional communication',
      'Implemented operational transformation for conflict resolution',
      'Built scalable WebSocket server architecture',
      'Optimized database queries for fast task retrieval'
    ],
    impact: [
      '35% increase in task completion rates',
      'Improved team productivity and coordination',
      'Positive user feedback and adoption',
      'Demonstrated expertise in real-time systems'
    ]
  },
  {
    id: 'lahari-karrotu',
    title: 'Personal Portfolio & Showcase',
    description: 'Comprehensive personal portfolio website showcasing professional projects, skills, and achievements with modern design and interactive features.',
    longDescription: 'A professional portfolio website built to showcase technical expertise, projects, and professional achievements. Features include interactive project galleries, skills visualization, contact forms, and responsive design optimized for all devices.',
    githubUrl: 'https://github.com/laharikarrotu/lahariKarrotu',
    status: 'Completed',
    year: 2023,
    category: 'Full-Stack',
    tags: ['TypeScript', 'React', 'Portfolio', 'Next.js'],
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    screenshots: [
      { type: 'website', url: '/projects/portfolio/16.png', alt: 'Portfolio Homepage', caption: 'Professional portfolio homepage' },
      { type: 'product', url: '/projects/portfolio/17.png', alt: 'Projects Showcase', caption: 'Interactive projects gallery' },
      { type: 'performance', url: '/projects/portfolio/18.png', alt: 'Performance Metrics', caption: 'Website performance metrics' },
      { type: 'code', url: '/projects/portfolio/19.png', alt: 'Code Sample', caption: 'Modern React implementation' }
    ],
    performanceMetrics: [
      { label: 'Lighthouse Score', value: '100', icon: '🏆' },
      { label: 'Page Load Time', value: '0.8s', icon: '⚡' },
      { label: 'SEO Score', value: '98', icon: '📊' },
      { label: 'Accessibility', value: '100', icon: '♿' }
    ],
    keyFeatures: [
      'Responsive design for all devices',
      'Interactive project showcases',
      'Skills visualization and matrix',
      'Contact form integration',
      'Dark mode support',
      'Optimized performance and SEO'
    ],
    challenges: [
      'Creating engaging visualizations',
      'Ensuring optimal performance',
      'Maintaining accessibility standards'
    ],
    solutions: [
      'Used modern React patterns for optimal rendering',
      'Implemented lazy loading for images',
      'Followed WCAG accessibility guidelines',
      'Optimized bundle size and code splitting'
    ],
    impact: [
      'Professional presentation of work',
      'Improved visibility to recruiters',
      'Demonstrated modern web development skills',
      'Positive feedback from industry professionals'
    ]
  }
];
