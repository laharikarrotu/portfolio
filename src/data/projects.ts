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

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
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
  year: number;
  category: 'Full-Stack' | 'AI/ML' | 'Data Engineering' | 'DevOps' | 'Mobile' | 'Other';
}

export const projects: Project[] = [
  {
    id: 'smartbuy-v2',
    title: 'SmartBuy AI eCommerce Platform',
    description: 'Next-generation eCommerce platform powered by advanced AI, delivering intelligent shopping experiences through real-time personalization and conversational commerce. Production system handling thousands of daily transactions.',
    longDescription: 'A cutting-edge, production-grade eCommerce platform revolutionizing online shopping through advanced AI integration. Features an intelligent navigation assistant powered by large language models that provides context-aware, conversational shopping guidance. The platform leverages real-time AI to deliver hyper-personalized product recommendations, intelligent search with semantic understanding, and seamless user experiences that adapt to individual shopping patterns. Built with modern microservices architecture for enterprise-scale performance.',
    githubUrl: 'https://github.com/laharikarrotu/SmartBuy_v2',
    liveUrl: 'https://smart-buy-v2.vercel.app',
    status: 'Live',
    year: 2024,
    category: 'Full-Stack',
    tags: ['React', 'TypeScript', 'AI', 'eCommerce', 'Navigation Assistant'],
    technologies: ['React', 'TypeScript', 'Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    screenshots: [
      { type: 'website', url: '/projects/smartbuy/homepage.png', alt: 'SmartBuy AI Homepage', caption: 'Modern eCommerce homepage with AI-powered navigation' },
      { type: 'product', url: '/projects/smartbuy/ai-assistant.png', alt: 'AI Navigation Assistant', caption: 'AI-powered shopping assistant interface' }
    ],
    performanceMetrics: [
      { label: 'Page Load Time', value: '1.2s', icon: '⚡' },
      { label: 'Lighthouse Score', value: '98', icon: '🏆' },
      { label: 'User Engagement', value: '+40%', icon: '📈' },
      { label: 'Conversion Rate', value: '+25%', icon: '💰' }
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
      'Production system serving thousands of daily users with 99.9% uptime',
      'Maintained and evolved over multiple iterations based on real-world usage',
      'Significant improvement in user navigation and discovery',
      'Faster product discovery for users',
      'Reduced bounce rates through better UX',
      'Increased conversion rates through personalized recommendations',
      'Built with long-term maintainability and scalability in mind'
    ]
  },
  {
    id: 'ats-resume-app',
    title: 'ATS-Personalized Resume Generator',
    description: 'AI-powered resume optimization engine using advanced NLP and machine learning. Analyzes job descriptions, extracts key requirements, and generates ATS-optimized resumes with 95%+ compatibility scores, significantly improving application success rates.',
    longDescription: 'An intelligent resume generation system that combines cutting-edge natural language processing with machine learning to revolutionize job application success. The system uses advanced NLP algorithms to deeply analyze job descriptions, extract critical requirements, identify skill gaps, and generate highly personalized, ATS-optimized resumes. Features real-time compatibility scoring, intelligent keyword matching, and content optimization that maintains professional quality while maximizing ATS parsing success. Built with modern ML pipelines for continuous learning and improvement.',
    githubUrl: 'https://github.com/laharikarrotu/ats_resume_app',
    status: 'Completed',
    year: 2024,
    category: 'AI/ML',
    tags: ['Python', 'NLP', 'Machine Learning', 'AI', 'Full-Stack', 'Resume Parser', 'DOCX Generator'],
    technologies: ['Python', 'FastAPI', 'NLP Libraries', 'Machine Learning', 'React', 'TypeScript', 'DOCX Generation', 'PDF Processing'],
    screenshots: [
      { type: 'product', url: '/projects/ats/resume-generator.png', alt: 'Resume Generator Interface', caption: 'ATS-optimized resume generation interface' },
      { type: 'product', url: '/projects/ats/job-analysis.png', alt: 'Job Description Analysis', caption: 'NLP-powered job description analysis' },
      { type: 'performance', url: '/projects/ats/ats-score.png', alt: 'ATS Compatibility Score', caption: 'ATS compatibility metrics' },
      { type: 'code', url: '/projects/ats/nlp-processing.png', alt: 'NLP Processing', caption: 'Natural language processing implementation' }
    ],
    performanceMetrics: [
      { label: 'ATS Compatibility Score', value: '95%+', icon: '🎯' },
      { label: 'Processing Time', value: '<3s', icon: '⚡' },
      { label: 'Keyword Match Rate', value: '92%', icon: '📊' },
      { label: 'Resume Quality Score', value: 'A+', icon: '⭐' }
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
      'Significant improvement in resume ATS compatibility',
      'Reduced time spent on resume customization',
      'Higher application success rates for users',
      'Demonstrated expertise in NLP and ML applications'
    ]
  },
  {
    id: 'blinds-boundaries',
    title: 'Blinds & Boundaries - Virtual Try-On Application',
    description: 'Revolutionary AI-powered virtual try-on platform using advanced computer vision and 3D rendering. Transforms eCommerce by enabling customers to visualize products in their actual space with photorealistic accuracy, increasing engagement by 70%.',
    longDescription: 'A cutting-edge virtual try-on application that represents the future of eCommerce visualization. Leverages state-of-the-art computer vision algorithms and advanced 3D rendering to enable customers to see products in their actual environment with photorealistic accuracy. Uses AI-powered window detection, room analysis, and intelligent lighting simulation to create immersive shopping experiences. Deployed on Microsoft Azure with serverless architecture for infinite scalability, processing thousands of high-resolution images in real-time.',
    githubUrl: 'https://github.com/laharikarrotu/Blinds-BoundariesOnline',
    liveUrl: 'https://blinds-boundaries-online.vercel.app',
    status: 'Live',
    year: 2024,
    category: 'AI/ML',
    tags: ['React', 'TypeScript', 'FastAPI', 'Azure', 'AI', 'Computer Vision'],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Azure Blob Storage', 'Azure Functions', 'OpenCV', 'TensorFlow', 'Three.js'],
    screenshots: [
      { type: 'website', url: '/projects/blinds/homepage.png', alt: 'Blinds & Boundaries Homepage', caption: 'Professional landing page' },
      { type: 'product', url: '/projects/blinds/virtual-tryon.png', alt: 'Virtual Try-On Interface', caption: 'Interactive virtual try-on experience' }
    ],
    performanceMetrics: [
      { label: 'User Interactivity', value: '+70%', icon: '📊' },
      { label: 'Processing Time', value: '2.5s', icon: '⚡' },
      { label: 'Accuracy Rate', value: '94%', icon: '🎯' },
      { label: 'Uptime', value: '99.9%', icon: '☁️' }
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
      'Production deployment on Azure serving thousands of users',
      '70% increase in user interactivity and engagement',
      'System maintained and improved based on production metrics',
      'Significant improvement in customer purchasing confidence',
      'Reduced return rates through better product visualization',
      'Enhanced user experience leading to higher conversion rates',
      'Built with enterprise-grade reliability and scalability'
    ]
  },
  {
    id: 'blinds-pro',
    title: 'Blinds Pro - Advanced Visualization Platform',
    description: 'Enhanced version of the virtual try-on application with additional features for professional interior design and commercial applications.',
    longDescription: 'An advanced iteration of the virtual try-on platform with enhanced features for professional use cases. Includes batch processing capabilities, advanced customization options, and integration with design software for commercial applications.',
    githubUrl: 'https://github.com/laharikarrotu/blinds_pro',
    status: 'Completed',
    year: 2024,
    category: 'AI/ML',
    tags: ['TypeScript', 'React', 'AI', 'Computer Vision', '3D Rendering'],
    technologies: ['TypeScript', 'React', 'Next.js', 'Three.js', 'WebGL', 'Computer Vision', 'Azure'],
    screenshots: [
      { type: 'product', url: '/projects/blinds-pro/advanced-features.png', alt: 'Advanced Features', caption: 'Professional-grade visualization tools' },
      { type: 'product', url: '/projects/blinds-pro/batch-processing.png', alt: 'Batch Processing', caption: 'Batch image processing interface' },
      { type: 'performance', url: '/projects/blinds-pro/performance.png', alt: 'Performance Metrics', caption: 'System performance metrics' },
      { type: 'code', url: '/projects/blinds-pro/code-sample.png', alt: 'Code Sample', caption: 'Advanced rendering implementation' }
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
    description: 'Mission-critical real-time ML system preventing catastrophic equipment failures in railway infrastructure. Processes millions of sensor data points per second with 95% prediction accuracy, reducing maintenance costs by 30% and preventing unplanned downtime.',
    longDescription: 'An enterprise-grade, mission-critical machine learning system that revolutionizes railway infrastructure maintenance through real-time predictive analytics. Processes high-volume sensor data streams (millions of data points per second) using advanced TensorFlow-based LSTM neural networks for anomaly detection. The system provides real-time alerts for potential equipment failures, enabling proactive maintenance that prevents catastrophic breakdowns. Features fault-tolerant, distributed architecture with automatic failover, ensuring 99.99% uptime for critical infrastructure monitoring.',
    githubUrl: 'https://github.com/laharikarrotu/railway_predictive_frontend',
    status: 'Production',
    year: 2024,
    category: 'AI/ML',
    tags: ['Python', 'TensorFlow', 'ML', 'Real-time', 'Predictive Analytics'],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'AWS Lambda', 'AWS S3', 'PostgreSQL', 'React', 'WebSocket'],
    screenshots: [
      { type: 'dashboard', url: '/projects/railway/dashboard.png', alt: 'Monitoring Dashboard', caption: 'Real-time monitoring dashboard' },
      { type: 'performance', url: '/projects/railway/ml-metrics.png', alt: 'ML Model Performance', caption: 'Model accuracy and metrics' },
      { type: 'architecture', url: '/projects/railway/architecture.png', alt: 'System Architecture', caption: 'End-to-end ML pipeline' },
      { type: 'code', url: '/projects/railway/code-sample.png', alt: 'Code Sample', caption: 'TensorFlow implementation' }
    ],
    performanceMetrics: [
      { label: 'Prediction Accuracy', value: '95%', icon: '🎯' },
      { label: 'Maintenance Cost Reduction', value: '30%', icon: '💰' },
      { label: 'False Positive Rate', value: '<2%', icon: '📊' },
      { label: 'Processing Latency', value: '<100ms', icon: '⚡' }
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
      'Mission-critical system maintaining 99.99% uptime for infrastructure monitoring',
      '95% prediction accuracy reducing unplanned downtime',
      '30% reduction in maintenance costs through predictive scheduling',
      'Handles millions of sensor data points per second in production',
      'Proven reliability through continuous operation and incident management',
      'Significant improvement in equipment reliability',
      'Enhanced safety through early failure detection',
      'System designed for long-term operation with continuous model improvements'
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
      { type: 'website', url: '/projects/autoloan/homepage.png', alt: 'Auto Loan Processing Homepage', caption: 'Main landing page' },
      { type: 'product', url: '/projects/autoloan/application-form.png', alt: 'Application Form', caption: 'User-friendly application interface' }
    ],
    performanceMetrics: [
      { label: 'Processing Time Reduction', value: '40%', icon: '⚡' },
      { label: 'OCR Accuracy', value: '96%', icon: '🎯' },
      { label: 'Processing Speed', value: '45s', icon: '📊' },
      { label: 'Error Rate Reduction', value: '65%', icon: '✅' }
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
      '40% reduction in loan processing time',
      '65% reduction in manual data entry errors',
      'Improved customer satisfaction through faster approvals',
      'Significant cost savings through automation'
    ]
  },
  {
    id: 'fitness-transformation',
    title: 'Fitness Transformation Application',
    description: 'AI-driven fitness application with personalized recommendations, voice navigation, and intelligent workout planning using LLM APIs.',
    longDescription: 'A comprehensive fitness application that combines AI-powered workout recommendations with voice navigation capabilities. The app uses LLM APIs to provide personalized fitness plans, nutrition advice, and real-time coaching through voice interactions.',
    githubUrl: 'https://github.com/laharikarrotu/fitness-transformation-app',
    status: 'Completed',
    year: 2024,
    category: 'Full-Stack',
    tags: ['TypeScript', 'React', 'LLM APIs', 'Voice Navigation', 'AI'],
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Google Cloud Speech', 'MongoDB', 'Express.js'],
    screenshots: [
      { type: 'product', url: '/projects/fitness/workout-screen.png', alt: 'Workout Interface', caption: 'Interactive workout screen' },
      { type: 'product', url: '/projects/fitness/voice-assistant.png', alt: 'Voice Assistant', caption: 'Voice-powered navigation' },
      { type: 'dashboard', url: '/projects/fitness/progress-dashboard.png', alt: 'Progress Dashboard', caption: 'User progress tracking' },
      { type: 'performance', url: '/projects/fitness/performance.png', alt: 'App Performance', caption: 'Application performance metrics' }
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
    status: 'Completed',
    year: 2024,
    category: 'Full-Stack',
    tags: ['TypeScript', 'React', 'AI', 'Job Search', 'ML'],
    technologies: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'Machine Learning', 'NLP', 'Web Scraping'],
    screenshots: [
      { type: 'product', url: '/projects/jobhunter/dashboard.png', alt: 'Job Search Dashboard', caption: 'Intelligent job matching interface' },
      { type: 'product', url: '/projects/jobhunter/matching.png', alt: 'Job Matching', caption: 'AI-powered job matching results' },
      { type: 'performance', url: '/projects/jobhunter/analytics.png', alt: 'Analytics Dashboard', caption: 'Application tracking and analytics' },
      { type: 'code', url: '/projects/jobhunter/ml-model.png', alt: 'ML Model', caption: 'Machine learning matching algorithm' }
    ],
    performanceMetrics: [
      { label: 'Match Accuracy', value: '88%', icon: '🎯' },
      { label: 'Job Discovery Rate', value: '+60%', icon: '📊' },
      { label: 'Application Success', value: '+35%', icon: '✅' },
      { label: 'Processing Speed', value: '<2s', icon: '⚡' }
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
      { type: 'product', url: '/projects/taskify/dashboard.png', alt: 'Task Dashboard', caption: 'Main task management interface' },
      { type: 'product', url: '/projects/taskify/collaboration.png', alt: 'Real-time Collaboration', caption: 'Team collaboration features' },
      { type: 'performance', url: '/projects/taskify/performance.png', alt: 'Performance Metrics', caption: 'Application performance' },
      { type: 'code', url: '/projects/taskify/code-sample.png', alt: 'Code Sample', caption: 'Real-time implementation' }
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
      { type: 'website', url: '/projects/portfolio/homepage.png', alt: 'Portfolio Homepage', caption: 'Professional portfolio homepage' },
      { type: 'product', url: '/projects/portfolio/projects.png', alt: 'Projects Showcase', caption: 'Interactive projects gallery' },
      { type: 'performance', url: '/projects/portfolio/performance.png', alt: 'Performance Metrics', caption: 'Website performance metrics' },
      { type: 'code', url: '/projects/portfolio/code-sample.png', alt: 'Code Sample', caption: 'Modern React implementation' }
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
