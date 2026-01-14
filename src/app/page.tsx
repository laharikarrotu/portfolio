'use client';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import TypeWriter from '@/components/TypeWriter';
import { Github, Linkedin, Mail, ArrowRight, Star, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { MotionDiv } from '@/components/MotionDiv';
import { RevealText, RevealParagraph, RevealHeading } from '@/components/RevealText';

import DarkModeToggle from '@/components/DarkModeToggle';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import ProjectShowcase from '@/components/ProjectShowcase';
import WorkflowOrchestration from '@/components/WorkflowOrchestration';
import { projects } from '@/data/projects';

const Home: React.FC = () => {
  // Projects are now imported from @/data/projects

  // Merged and deduplicated tools configuration (aligned to AI + full-stack + data systems)
    const toolsConfig = {
    fullStack: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
         { name: 'Node.js', icon: '🟢' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Python', icon: '🐍' },
         { name: 'PostgreSQL', icon: '🐘' },
         { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🧠' },
      { name: 'REST & GraphQL APIs', icon: '🔗' }
       ],
    aiAgents: [
      { name: 'LLMs & Agents', icon: '🤖' },
      { name: 'OpenAI API', icon: '✨' },
      { name: 'LangChain', icon: '⛓️' },
      { name: 'Vector DBs (Pinecone/FAISS)', icon: '📚' },
      { name: 'Embeddings & RAG', icon: '🧭' },
      { name: 'MLflow', icon: '🧪' },
         { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' }
    ],
    dataPipelines: [
      { name: 'SQL (PostgreSQL, MySQL)', icon: '🗄️' },
      { name: 'Apache Spark', icon: '⚡' },
      { name: 'Kafka', icon: '📊' },
      { name: 'Apache Airflow', icon: '🌪️' },
      { name: 'Snowflake', icon: '❄️' },
      { name: 'Data Modeling (Fact/Dimension)', icon: '📊' },
      { name: 'ETL/ELT Pipelines', icon: '🔄' },
      { name: 'Data Quality & Validation', icon: '✅' },
      { name: 'Data Lineage & Observability', icon: '🔍' }
    ],
    cloudInfra: [
      { name: 'AWS (Lambda, S3, Glue)', icon: '☁️' },
      { name: 'Azure (Functions, App Service)', icon: '🔷' },
         { name: 'Docker', icon: '🐳' },
         { name: 'Kubernetes', icon: '⎈' },
         { name: 'Terraform', icon: '🌍' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'Vercel', icon: '⚡' },
      { name: 'Monitoring & Logging', icon: '📡' }
       ]
    };

  return (
    <main className="gradient-background min-h-screen text-gray-800 dark:text-gray-100 relative">
      <DarkModeToggle />
      <Navigation />
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollToTop />
      <div className="relative z-10">
        <div className="hero-section min-h-screen flex flex-col justify-center items-center py-32">
          <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <RevealHeading delay={0.1} duration={0.8} className="text-4xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
                Software Engineer (Backend & AI Systems)
              </RevealHeading>
              
              <RevealText delay={0.3} duration={0.8}>
                <div className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mb-12 font-light">
                  <TypeWriter 
                    texts={[
                      'Backend & AI Systems',
                      'Distributed Systems',
                      'Production LLM Applications',
                      'Full Stack'
                    ]} 
                  />
                </div>
              </RevealText>

              <RevealParagraph 
                text="Distributed Systems | Production LLM Applications | Full Stack"
                className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl text-xl leading-relaxed"
                delay={0.5}
                duration={1.0}
                stagger={0.1}
              />

              <RevealText delay={0.7} duration={0.8}>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link
                    href="#contact"
                    className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 
                             transition-all duration-200 text-sm font-medium"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="#projects"
                    className="px-6 py-2.5 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300
                             rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 
                             text-sm font-medium"
                  >
                    View Projects
                  </Link>
                </div>
              </RevealText>

              <RevealText delay={0.9} duration={0.8}>
                <div className="flex gap-4 mt-12 justify-center md:justify-start">
                  <Link
                    href="https://github.com/laharikarrotu"
                    target="_blank"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                             transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/laharikarrotu/"
                    target="_blank"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                             transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:laharikarrotu24@gmail.com"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                             transition-all duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </RevealText>
            </div>

            <div className="flex-1 relative flex items-center justify-center">
              <RevealText delay={1.1} duration={0.8}>
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                  {/* Modern subtle background pattern */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
                  {/* Modern border with subtle shadow */}
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg"></div>
                  
                  {/* Professional geometric animation */}
                  <div className="absolute inset-0 rounded-full" style={{ zIndex: 5 }}>
                    <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.2)' }}>
                      {/* Rotating geometric hexagon */}
                      <g style={{ animation: 'spin 20s linear infinite', transformOrigin: '50% 50%' }}>
                        <polygon
                          points="50,5 90,25 90,65 50,85 10,65 10,25"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.3)"
                          strokeWidth="1.5"
                          transform="translate(50%, 50%) translate(-50, -50)"
                        />
                        <polygon
                          points="50,15 80,30 80,60 50,75 20,60 20,30"
                          fill="none"
                          stroke="rgba(96, 165, 250, 0.2)"
                          strokeWidth="1"
                          transform="translate(50%, 50%) translate(-50, -50)"
                        />
                      </g>
                      {/* Counter-rotating triangle */}
                      <g style={{ animation: 'spin-reverse 15s linear infinite', transformOrigin: '50% 50%' }}>
                        <polygon
                          points="50,10 85,70 15,70"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.25)"
                          strokeWidth="1.5"
                          transform="translate(50%, 50%) translate(-50, -50)"
                        />
                      </g>
                      {/* Outer geometric circle pattern */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="rgba(156, 163, 175, 0.15)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        style={{ animation: 'spin 25s linear infinite', transformOrigin: '50% 50%' }}
                      />
                    </svg>
                  </div>
                  
                <Image
                  src="/profile.jpg"
                  alt="Lahari Karrotu"
                  width={400}
                  height={400}
                    className="rounded-full object-cover relative z-10 w-full h-full"
                    style={{ borderRadius: '50%' }}
                  priority
                  unoptimized
                />
                 </div>
              </RevealText>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
              <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-scroll" />
            </div>
          </div>
        </div>

        {/* Highlight Reel */}
        <section className="py-20">
          <SectionHeader 
            title="Highlight Reel"
            subtitle="What I build in 5 seconds of scanning"
          />
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'LLM Agents & Conversational Systems',
              'Full-Stack AI Applications (Next.js + FastAPI)',
              'Real-Time Voice Assistants',
              'Distributed Data & Stream Processing Pipelines',
              'Cloud-Native Deployments (Azure, AWS)',
              'MLOps (MLflow, Docker, CI/CD, Terraform)',
            ].map((item) => (
              <MotionDiv
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <span className="mt-1 text-indigo-500"><Star className="w-5 h-5" /></span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </MotionDiv>
            ))}
          </div>
        </section>

        <section id="about" className="py-32">
          <SectionHeader 
            title="About"
            subtitle="Building reliable systems for production environments"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealParagraph 
                text="Software Engineer focused on backend systems and production AI applications."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
              delay={0.3}
              duration={1.2}
              stagger={0.1}
            />
            <RevealParagraph 
              text="I work on distributed services and LLM-powered systems that operate under real-world constraints—latency, failures, observability, and scale. My experience spans backend APIs, ETL pipelines, data modeling (fact/dimension tables), SQL-first analytics, multimodal AI workflows, and full-stack integration."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
              delay={0.5}
              duration={1.2}
              stagger={0.1}
            />
            <RevealParagraph 
              text="I'm interested in teams building reliable systems at scale, where correctness, maintainability, and engineering judgment matter as much as model performance."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              delay={0.7}
              duration={1.2}
              stagger={0.1}
            />
          </div>
        </section>

        <section id="experience" className="experience-section py-20 relative overflow-hidden">
                     <SectionHeader 
             title="Professional Journey" 
             subtitle="Professional experience in Full Stack Development, AI/ML, and Cloud Solutions"
           />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {[
              {
                title: 'Full-Stack AI Engineer',
                company: 'Arka Tech Solutions',
                period: 'May 2025 - Present · Remote',
                bullets: [
                  'Architected Python + SQL (PostgreSQL/MySQL) ETL and analytics pipelines processing 1,000+ structured records/day, supporting internal reporting and decision workflows.',
                  'Built LLM-powered assistants with distributed inference and GPU orchestration (Ray, LangChain), processing 5K+ queries/day with &lt;2s average latency.',
                  'Designed fact and dimension tables to support analytics use cases, improving query performance for downstream dashboards by ~35%.',
                  'Developed multimodal AI pipelines combining image embeddings, text, and vector DBs (Milvus, Pinecone), handling 10K+ embeddings/day with 99.5% retrieval accuracy.',
                  'Implemented data quality checks (schema validation, null detection, range checks) using Python, reducing downstream data issues by ~40%.',
                  'Built REST APIs with Flask/FastAPI to expose AI capabilities and data analytics to frontend and product teams, ensuring 99.9% availability for business-critical processes.'
                ]
              },
              {
                title: 'Software Engineer Intern – AI & Full-Stack Systems',
                company: 'Anguliyam',
                period: 'Jun 2024 - Apr 2025 · Remote',
                bullets: [
                  'Built backend services to collect, transform, and expose structured datasets for analytics and AI-driven workflows using Python and SQL.',
                  'Orchestrated and scheduled ETL workflows using Apache Airflow, enabling reliable daily data ingestion and transformation for analytics pipelines.',
                  'Deployed LLM-driven voice workflows for real-time interaction and automation, processing 2K+ voice queries/day with &lt;3s end-to-end latency.',
                  'Wrote SQL queries and Python data-processing scripts to analyze usage patterns, system performance, and workflow reliability.',
                  'Refactored experimental pipelines into stable, reusable analytics components, improving reliability and maintainability by 30%.'
                ]
              },
              {
                title: 'Program Analyst Intern',
                company: 'Cognizant',
                period: 'Jan 2022 - Aug 2022 · Hyderabad, Telangana, India · Remote',
                bullets: [
                  'Built and maintained distributed ETL pipelines supporting analytics and machine-learning workloads on GB-scale datasets using Python and SQL.',
                  'Authored complex SQL queries to support reporting, monitoring, and data validation use cases.',
                  'Improved data reliability by introducing validation logic and job-level error handling, reducing downstream discrepancies by ~25%.',
                  'Supported analytics teams by ensuring high data quality and ownership across multiple data sources.'
                ]
              },
              {
                title: 'Software Engineer Intern',
                company: 'EPAM Systems',
                period: 'Dec 2020 - Mar 2021 · India · Hybrid',
                bullets: [
                  'Developed automation scripts and tools to streamline ML workflows.',
                  'Assisted in feature engineering and batch processing for analytics projects.',
                  'Improved operational efficiency of reporting and data handling pipelines by 40%.'
                ]
              }
            ].map((role, idx) => (
                <MotionDiv
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{role.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{role.period}</p>
                        </div>
                <ul className="space-y-2">
                  {role.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="mt-1 text-indigo-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </MotionDiv>
            ))}
                        </div>
        </section>


        {/* GitHub Activity Section */}
        <section className="github-section py-20" id="github">
                     <SectionHeader 
            title="GitHub Activity" 
            subtitle="Live commit activity and open source contributions"
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                 <MotionDiv
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Commit Activity</h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Active
                             </span>
                         </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-hidden">
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=laharikarrotu&theme=github-compact&area=true&hide_border=true&bg_color=transparent&color=000000&line=0366d6&point=24292e`}
                  alt="GitHub Commit Activity Graph"
                  className="w-full h-auto"
                  loading="lazy"
                />
                         </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                Real-time commit activity over the past year
              </p>
                 </MotionDiv>
          </div>
        </section>

        {/* Real-Time Workflow Orchestration Section */}
        <section className="workflow-section py-20" id="workflow">
          <SectionHeader 
            title="Real-Time Workflow Orchestration" 
            subtitle="Live visualization of production AI pipelines and distributed system workflows"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WorkflowOrchestration />
          </div>
        </section>

        {/* System Design Deep Dive Section */}
        <section className="system-design-section py-20" id="system-design">
                     <SectionHeader 
            title="System Design" 
            subtitle="Architecture, scalability, and distributed systems expertise"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="space-y-6">
            <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    SmartBuy AI: Production E-Commerce Platform with AI Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    A scalable full-stack eCommerce platform handling 10K+ daily active users with AI-powered navigation, 
                    real-time inventory management, and sub-2s page load times.
                  </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Architecture Overview</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Frontend:</strong> Next.js (SSR/SSG) with React, deployed on Vercel Edge Network for global CDN distribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Backend:</strong> FastAPI microservices with async/await, handling 1K+ concurrent requests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Database:</strong> PostgreSQL with connection pooling, fact/dimension tables for analytics, Redis cache layer (95% hit rate)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Data Pipelines:</strong> Python + SQL ETL workflows with Airflow orchestration, data quality checks, and analytics-ready schemas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>AI Service:</strong> OpenAI API with request batching, response caching, and fallback mechanisms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Vector Search:</strong> Pinecone for semantic product search with 50K+ product embeddings</span>
                      </li>
                    </ul>
                  </div>

                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scalability & Performance</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Load Handling:</strong> 10K+ daily active users, 500+ concurrent sessions, 99.9% uptime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Response Times:</strong> API latency &lt;300ms (p95), AI queries &lt;2s, page loads &lt;1.2s</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Caching Strategy:</strong> Multi-layer (CDN, Redis, in-memory) reducing DB load by 80%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Database:</strong> Read replicas for scaling, connection pooling (max 100 connections), query optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Monitoring:</strong> Real-time metrics (Prometheus), error tracking (Sentry), APM (New Relic)</span>
                      </li>
                    </ul>
                  </div>
                  </div>

                <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Design Decisions & Trade-offs</h4>
                  <div className="space-y-3 text-sm">
                <div>
                      <p className="font-medium text-gray-900 dark:text-white">1. Microservices vs Monolith</p>
                      <p className="text-gray-700 dark:text-gray-300">Chose FastAPI microservices for independent scaling of AI service vs. core eCommerce logic, accepting added complexity for better resource utilization.</p>
                  </div>
                <div>
                      <p className="font-medium text-gray-900 dark:text-white">2. Vector DB Selection</p>
                      <p className="text-gray-700 dark:text-gray-300">Pinecone over self-hosted (FAISS/Milvus) for managed scalability and lower ops overhead, trading cost for reliability.</p>
                </div>
                <div>
                      <p className="font-medium text-gray-900 dark:text-white">3. Caching Strategy</p>
                      <p className="text-gray-700 dark:text-gray-300">Multi-layer caching (CDN → Redis → DB) prioritized read performance, accepting eventual consistency for product data.</p>
                </div>
                <div>
                      <p className="font-medium text-gray-900 dark:text-white">4. Failure Handling</p>
                      <p className="text-gray-700 dark:text-gray-300">Circuit breakers for AI API, graceful degradation to keyword search, retry logic with exponential backoff, ensuring 99.9% availability even during AI service outages.</p>
              </div>
            </div>
          </div>
          
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scaling Strategy</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="font-medium text-gray-900 dark:text-white mb-2">Horizontal Scaling</p>
                      <p className="text-gray-700 dark:text-gray-300">FastAPI instances behind load balancer, auto-scaling based on CPU/memory (2-10 instances), stateless design for easy scaling.</p>
                         </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="font-medium text-gray-900 dark:text-white mb-2">Database Scaling</p>
                      <p className="text-gray-700 dark:text-gray-300">Read replicas for query distribution, connection pooling, query optimization, and planned sharding for 100K+ products.</p>
                       </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="font-medium text-gray-900 dark:text-white mb-2">Cost Optimization</p>
                      <p className="text-gray-700 dark:text-gray-300">AI request batching, response caching (60% cache hit rate), CDN for static assets, reducing infrastructure costs by 40%.</p>
                    </div>
                      </div>
                    </div>
            </div>
          </MotionDiv>
          </div>
        </section>

        <section className="projects-section py-32 overflow-hidden" id="projects">
           <SectionHeader 
            title="Projects" 
            subtitle="Production-grade applications demonstrating expertise in full-stack development, AI/ML integration, and cloud solutions"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectShowcase projects={projects} />
             </div>
         </section>

         <section className="contact-section py-32" id="contact">
           <RevealHeading delay={0.1} duration={1.0} className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
             Contact
           </RevealHeading>
           <RevealText delay={0.3} duration={0.8}>
             <p className="mb-12 text-gray-600 text-center text-lg max-w-2xl mx-auto">
               Open to discussing new opportunities, collaborative projects, and technical challenges in full-stack development and AI/ML integration.
             </p>
           </RevealText>
           
           {/* Enhanced Contact Form */}
           <EnhancedContactForm />
           
           {/* Social Links */}
           <div className="mt-16">
             <RevealText delay={0.5} duration={0.8}>
               <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-300">Professional Profiles</h3>
             </RevealText>
             <RevealText delay={0.7} duration={0.8}>
               <div className="flex justify-center gap-6 flex-wrap max-w-4xl mx-auto px-4">
               <Link 
                 href="https://www.linkedin.com/in/laharikarrotu/" 
                 className="group flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-8 py-4 rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70
                           transition-all duration-300 border border-gray-200 dark:border-gray-700
                           shadow-sm"
                 target="_blank"
               >
                 <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                 <span>LinkedIn</span>
               </Link>
               <Link 
                 href="https://github.com/laharikarrotu" 
                 className="group flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-8 py-4 rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70
                           transition-all duration-300 border border-gray-200 dark:border-gray-700
                           shadow-sm"
                 target="_blank"
               >
                 <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                 <span>GitHub</span>
               </Link>
               <Link 
                href="mailto:laharikarrotu24@gmail.com" 
                 className="group flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-8 py-4 rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70
                           transition-all duration-300 border border-gray-200 dark:border-gray-700
                           shadow-sm"
               >
                 <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                 <span>Email</span>
               </Link>
               </div>
             </RevealText>
           </div>
        </section>

        {/* What I'm learning now */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What I’m learning now</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Azure Functions + Durable orchestrations for AI workflows</li>
                <li>• Evaluating LLM agents with guardrails and tracing</li>
                <li>• Stream-processing patterns with Kafka + Flink</li>
              </ul>
                </div>
                </div>
        </section>

        {/* Case Study */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/40">
          <SectionHeader 
            title="Case Study: SmartBuy AI"
            subtitle="How I shipped an AI shopping assistant end-to-end"
          />
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"><Sparkles className="w-5 h-5 text-indigo-500" /> Overview</h3>
              <p className="text-gray-700 dark:text-gray-300">SmartBuy AI embeds a conversational assistant inside a full-stack eCommerce experience. It handles search, recommendations, and navigation with a lightweight vector index and FastAPI services.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Problem</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Users struggled to find products quickly and dropped off after slow search or poor recommendations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Conversational assistant + semantic search backed by FastAPI, embeddings, and cached intents for sub-3s responses.</p>
              </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tech Stack</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Next.js, TypeScript, FastAPI, PostgreSQL, OpenAI API, Tailwind, Vercel</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">My Role</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Architecture, API design, AI integration, frontend UX, deployment.</p>
              </div>
                </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• AI query responses in <span className="font-semibold text-indigo-500">&lt;3s</span> with cached intents</li>
                  <li>• Faster product discovery via semantic search and voice/text navigation</li>
                  <li>• Production-ready deployment with monitoring and uptime focus</li>
                </ul>
              </div>
                </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Architecture (high level)</h3>
              <div className="grid gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  Client (Next.js) → API Gateway (FastAPI) → LLM Orchestrator (OpenAI, LangChain)
              </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  Vector Store (embeddings) for semantic search + intent caching
                </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  PostgreSQL for products/orders · Background jobs for sync/index updates
                  </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  Vercel + Azure/AWS services · Observability via logs/metrics
                </div>
              </div>
              <div className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <svg viewBox="0 0 520 220" role="img" aria-label="SmartBuy architecture diagram" className="w-full h-auto text-gray-800 dark:text-gray-200">
                  <defs>
                    <style>{'.box{fill:#eef2ff;stroke:#4f46e5;stroke-width:2;rx:8;ry:8}.text{font-family:Inter,system-ui,sans-serif;font-size:12px;fill:#111827}.arrow{stroke:#6b7280;stroke-width:2;marker-end:url(#arrowhead)}'}</style>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                    </marker>
                  </defs>
                  <rect className="box" x="20" y="40" width="120" height="40" />
                  <text className="text" x="80" y="65" textAnchor="middle">Next.js UI</text>

                  <rect className="box" x="200" y="40" width="120" height="40" />
                  <text className="text" x="260" y="65" textAnchor="middle">FastAPI Gateway</text>

                  <rect className="box" x="380" y="20" width="120" height="40" />
                  <text className="text" x="440" y="45" textAnchor="middle">LLM (OpenAI)</text>

                  <rect className="box" x="380" y="90" width="120" height="40" />
                  <text className="text" x="440" y="115" textAnchor="middle">LangChain/RAG</text>

                  <rect className="box" x="200" y="130" width="120" height="40" />
                  <text className="text" x="260" y="155" textAnchor="middle">Vector Store</text>

                  <rect className="box" x="20" y="130" width="120" height="40" />
                  <text className="text" x="80" y="155" textAnchor="middle">PostgreSQL</text>

                  <line className="arrow" x1="140" y1="60" x2="200" y2="60" />
                  <line className="arrow" x1="320" y1="60" x2="380" y2="40" />
                  <line className="arrow" x1="320" y1="60" x2="380" y2="110" />
                  <line className="arrow" x1="260" y1="170" x2="260" y2="80" />
                  <line className="arrow" x1="140" y1="150" x2="200" y2="150" />
                </svg>
                  </div>
                  <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Screenshots to include</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Product search page</li>
                  <li>• AI chat recommendations</li>
                  <li>• Navigation assistant</li>
                  <li>• Category browsing</li>
                  </ul>
                </div>
              </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Architecture: ScanX Agent Loop</h3>
              <div className="grid gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  Frontend (Next.js) captures screenshots/specs → uploads to FastAPI
            </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  FastAPI routes to Orchestrator (LangChain + OpenAI) to parse layout and tasks
                  </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  Vector store (PostgreSQL/pgvector) for similarity + retrieval
                </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                  Action planner emits task cards → returned to UI for human-in-the-loop confirmation
                </div>
              </div>
              <div className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <svg viewBox="0 0 520 240" role="img" aria-label="ScanX architecture diagram" className="w-full h-auto text-gray-800 dark:text-gray-200">
                  <defs>
                    <style>{'.box{fill:#eef2ff;stroke:#4f46e5;stroke-width:2;rx:8;ry:8}.text{font-family:Inter,system-ui,sans-serif;font-size:12px;fill:#111827}.arrow{stroke:#6b7280;stroke-width:2;marker-end:url(#arrowhead)}'}</style>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                    </marker>
                  </defs>
                  <rect className="box" x="30" y="40" width="120" height="40" />
                  <text className="text" x="90" y="65" textAnchor="middle">Next.js UI</text>

                  <rect className="box" x="200" y="40" width="120" height="40" />
                  <text className="text" x="260" y="65" textAnchor="middle">FastAPI Ingest</text>

                  <rect className="box" x="380" y="20" width="120" height="40" />
                  <text className="text" x="440" y="45" textAnchor="middle">LLM Orchestrator</text>

                  <rect className="box" x="380" y="90" width="120" height="40" />
                  <text className="text" x="440" y="115" textAnchor="middle">Parser / Planner</text>

                  <rect className="box" x="200" y="140" width="120" height="40" />
                  <text className="text" x="260" y="165" textAnchor="middle">Vector Store</text>

                  <rect className="box" x="30" y="140" width="120" height="40" />
                  <text className="text" x="90" y="165" textAnchor="middle">Task Cards UI</text>

                  <line className="arrow" x1="150" y1="60" x2="200" y2="60" />
                  <line className="arrow" x1="320" y1="60" x2="380" y2="40" />
                  <line className="arrow" x1="320" y1="60" x2="380" y2="110" />
                  <line className="arrow" x1="260" y1="180" x2="260" y2="80" />
                  <line className="arrow" x1="150" y1="160" x2="200" y2="160" />
                  <line className="arrow" x1="90" y1="140" x2="90" y2="80" />
                </svg>
                  </div>
                </div>
                </div>
        </section>

        {/* Tech Stack Icons Row */}
        <section className="py-24">
          <SectionHeader 
            title="Tech Stack"
            subtitle="The tools I ship with"
          />
          <div className="max-w-5xl mx-auto px-4 space-y-4">
            {[
              { label: 'Languages', items: ['Python', 'TypeScript', 'SQL'] },
              { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind'] },
              { label: 'Backend', items: ['FastAPI', 'Node.js'] },
              { label: 'AI/ML', items: ['OpenAI', 'LangChain', 'TensorFlow', 'Embeddings'] },
              { label: 'Cloud', items: ['Azure', 'AWS'] },
              { label: 'Data', items: ['Spark', 'Airflow', 'Snowflake'] },
            ].map((row) => (
              <div key={row.label} className="flex flex-wrap items-center gap-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm px-4 py-3">
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 w-28">{row.label}</span>
                <div className="flex flex-wrap gap-2">
                  {row.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
                      {item}
                    </span>
                  ))}
                  </div>
                </div>
            ))}
                </div>
        </section>

        <section className="tools-section py-32" id="skills">
                     <SectionHeader 
            title="Technical Expertise" 
            subtitle="Technologies and tools I work with"
           />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                             <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
               >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧩</span>
                  Full-Stack & Backend
                 </h3>
                 <div className="space-y-3">
                  {toolsConfig.fullStack.map((tool, index) => (
                     <div 
                       key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{tool.name}</span>
                     </div>
                   ))}
                 </div>
               </MotionDiv>

               <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
               >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  AI / ML & Agents
                 </h3>
                 <div className="space-y-3">
                  {toolsConfig.aiAgents.map((tool, index) => (
                     <div 
                       key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{tool.name}</span>
                     </div>
                   ))}
                 </div>
               </MotionDiv>

               <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
               >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📡</span>
                  Data Engineering & Pipelines
                 </h3>
                 <div className="space-y-3">
                  {toolsConfig.dataPipelines.map((tool, index) => (
                     <div 
                       key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{tool.name}</span>
                     </div>
                   ))}
                 </div>
               </MotionDiv>

               <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
               >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                   <span className="text-2xl">☁️</span>
                  Cloud & Infrastructure
                 </h3>
                 <div className="space-y-3">
                  {toolsConfig.cloudInfra.map((tool, index) => (
                     <div 
                       key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{tool.name}</span>
                     </div>
                   ))}
                 </div>
               </MotionDiv>
            </div>
          </MotionDiv>
        </section>

        {/* Education Section */}
        <section className="education-section py-20" id="education">
          <SectionHeader 
            title="Education" 
            subtitle="Academic background in Computer Science"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-4 space-y-6"
          >
            {[
              {
                degree: "Master's degree, Computer Science",
                school: 'Florida Institute of Technology',
                period: 'Aug 2022 - May 2024',
                grade: 'Grade: 3.6',
                description: "Master's in Computer Science with a focus on systems, data engineering, and applied AI."
              },
              {
                degree: "Bachelor's degree, Computer Science",
                school: 'KL University',
                period: 'Aug 2018 - May 2022',
                grade: 'Grade: 8.7',
                description: ''
              }
            ].map((edu, idx) => (
            <MotionDiv
                key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{edu.school}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{edu.grade}</p>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{edu.description}</p>
                  )}
                </div>
            </MotionDiv>
            ))}
            </MotionDiv>
        </section>

        {/* Enhanced Certifications Section with Credly Badges */}
        <section className="certifications-section py-20" id="certifications">
          <SectionHeader 
            title="Certifications & Badges" 
            subtitle="Professional certifications and verified achievements"
          />
            <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4"
          >
            {[
              {
                title: 'AWS Certified Solutions Architect',
                issuer: 'Amazon · Issued May 2025',
                icon: '☁️',
                link: 'https://www.credly.com/badges/454b6f57-2586-48bd-a854-1317ee4a6fdd/public_url'
              },
              {
                title: 'CCNA: Switching, Routing, and Wireless Essentials',
                issuer: 'Cisco · Issued Aug 2020',
                icon: '🌐',
                link: 'https://www.youracclaim.com/badges/09bfbaf8-6538-4b48-a9ea-49b9bc39414a?source=linked_in_profile'
              },
              {
                title: 'Machine Learning Specialization',
                issuer: 'Coursera (Andrew Ng)',
                icon: '📘'
              },
              {
                title: 'HackerRank Problem Solving',
                issuer: 'HackerRank',
                icon: '🧩'
              },
              {
                title: 'HackerRank SQL (Intermediate)',
                issuer: 'HackerRank',
                icon: '🗄️'
              },
              {
                title: 'HackerRank Data Structures',
                issuer: 'HackerRank',
                icon: '🧱'
              },
              {
                title: 'HackerRank Data Science',
                issuer: 'HackerRank',
                icon: '📊'
              },
              {
                title: 'Big Data Specialization',
                issuer: 'Undergraduate Program',
                icon: '🛰️'
              }
            ].map((cert, idx) => (
            <MotionDiv
                key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: 0.08 * idx }}
            >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">{cert.icon}</span>
              </div>
                  {cert.link ? (
                    <Link href={cert.link} target="_blank" className="block">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors group-hover:text-indigo-600">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                      <div className="mt-3 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <span>View Credential</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </Link>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                    </>
                  )}
              </div>
            </MotionDiv>
            ))}
          </MotionDiv>
        </section>

        {/* Technical Writing Section */}
        <section className="writing-section py-20" id="writing">
          <SectionHeader 
            title="Technical Writing" 
            subtitle="Articles and insights on AI, distributed systems, and software engineering"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4 space-y-4"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <a 
                href="https://medium.com/@laharikarrotu24/ai-in-2026-why-sovereignty-smaller-models-and-smarter-data-will-matter-more-than-bigger-gpus-8953fedd46b0"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-white">📝</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      AI in 2026: Why Sovereignty, Smaller Models, and Smarter Data Will Matter More Than Bigger GPUs
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      An exploration of the shifting AI landscape, focusing on model sovereignty, efficient smaller models, and data quality over raw compute power.
                    </p>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                      <span>Read on Medium</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <a 
                href="https://medium.com/@laharikarrotu24/the-hidden-energy-cost-of-ai-how-llms-and-distributed-systems-consume-power-3e2d90b87306"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-white">📝</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      The Hidden Energy Cost of AI: How LLMs and Distributed Systems Consume Power
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      An analysis of energy consumption patterns in large language models and distributed computing systems, exploring the environmental impact and optimization strategies.
                    </p>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                      <span>Read on Medium</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </MotionDiv>
        </section>

        {/* Technical Deep Dives Section */}
        <section className="deep-dives-section py-20" id="deep-dives">
          <SectionHeader 
            title="Technical Deep Dives" 
            subtitle="In-depth analysis of system design, performance optimization, and engineering decisions"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-4 space-y-6"
          >
            {[
              {
                title: "Scaling FastAPI for High-Throughput AI Workloads",
                category: "Backend Engineering",
                description: "How I optimized FastAPI microservices to handle 1K+ concurrent requests with &lt;300ms latency, implementing connection pooling, async/await patterns, and request batching for AI API calls.",
                topics: ["Async Architecture", "Connection Pooling", "Request Batching", "Performance Optimization"],
                metrics: "1K+ concurrent requests, &lt;300ms p95 latency, 40% cost reduction"
              },
              {
                title: "Vector Database Optimization for Semantic Search",
                category: "AI/ML Systems",
                description: "Deep dive into optimizing Pinecone vector search for 50K+ product embeddings, achieving 99.5% retrieval accuracy with &lt;500ms query time through embedding compression and indexing strategies.",
                topics: ["Vector Databases", "Embedding Optimization", "Semantic Search", "RAG Systems"],
                metrics: "50K+ embeddings, 99.5% accuracy, &lt;500ms query time"
              },
              {
                title: "Building Fault-Tolerant LLM Pipelines",
                category: "Distributed Systems",
                description: "Designing resilient AI workflows with circuit breakers, graceful degradation, retry logic, and fallback mechanisms to maintain 99.9% uptime even during AI service outages.",
                topics: ["Fault Tolerance", "Circuit Breakers", "Graceful Degradation", "Error Handling"],
                metrics: "99.9% uptime, <100ms monitoring overhead, zero-downtime deployments"
              },
              {
                title: "Multi-Layer Caching Strategy for E-Commerce",
                category: "Performance Engineering",
                description: "Implementing CDN → Redis → Database caching layers, achieving 95% cache hit rate and reducing database load by 80% while maintaining data consistency.",
                topics: ["Caching Strategies", "CDN Optimization", "Redis", "Cache Invalidation"],
                metrics: "95% cache hit rate, 80% DB load reduction, &lt;1.2s page loads"
              },
              {
                title: "Real-Time Monitoring for Production AI Systems",
                category: "Observability",
                description: "Building comprehensive monitoring with Prometheus, Sentry, and custom metrics for LLM pipelines, enabling real-time alerting and performance tracking with &lt;100ms overhead.",
                topics: ["Monitoring", "Observability", "Alerting", "Performance Tracking"],
                metrics: "&lt;100ms monitoring overhead, real-time alerting, 99.9% SLA"
              },
              {
                title: "ETL Pipeline Design for Analytics at Scale",
                category: "Data Engineering",
                description: "Architecting Python + SQL ETL pipelines processing 1,000+ structured records/day with data quality checks, fact/dimension table design, and Airflow orchestration, improving query performance by 35% and reducing data issues by 40%.",
                topics: ["ETL Pipelines", "Data Modeling", "SQL Optimization", "Data Quality", "Airflow"],
                metrics: "1,000+ records/day, 35% query improvement, 40% fewer data issues"
              }
            ].map((dive, idx) => (
              <MotionDiv
                key={dive.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-xs font-medium">
                        {dive.category}
                      </span>
                  </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {dive.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {dive.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {dive.topics.map((topic, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">Metrics:</span>
                      <span className="text-gray-600 dark:text-gray-400">{dive.metrics}</span>
              </div>
              </div>
            </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </section>

        {/* Footer Contact */}
        <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-10 mt-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-700 dark:text-gray-300 text-center md:text-left">
              <p className="font-semibold">Let’s build something great.</p>
                  </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <Link href="mailto:laharikarrotu24@gmail.com" className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200">Email</Link>
              <Link href="https://www.linkedin.com/in/laharikarrotu/" target="_blank" className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200">LinkedIn</Link>
              <Link href="https://github.com/laharikarrotu" target="_blank" className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200">GitHub</Link>
           <a
                href="/projects/LahariKarrotuSE.pdf" 
                download="Lahari_Karrotu_Software_Engineer_AI_FullStack.pdf"
                className="px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm font-medium"
             target="_blank"
             rel="noopener noreferrer"
              >
                Download Resume
           </a>
         </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Home;