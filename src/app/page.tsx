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
         { name: 'Apache Spark', icon: '⚡' },
      { name: 'Kafka', icon: '📊' },
      { name: 'Airflow', icon: '🌪️' },
      { name: 'Snowflake', icon: '❄️' },
      { name: 'SQL & Data Modeling', icon: '🗄️' },
      { name: 'ETL/ELT Pipelines', icon: '🔄' },
      { name: 'Data Quality & Observability', icon: '✅' },
      { name: 'Tableau / Power BI', icon: '📈' }
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
              <RevealHeading delay={0.1} duration={0.8} className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
                Software Engineer – AI, Full-Stack & Data Systems
              </RevealHeading>
              
              <RevealText delay={0.3} duration={0.8}>
                <div className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mb-12 font-light">
                  <TypeWriter 
                    texts={[
                      'AI & Full-Stack Engineer',
                      'LLM / Voice Systems',
                      'Distributed Data Pipelines',
                      'Product-Focused Builder'
                    ]} 
                  />
                </div>
              </RevealText>

              <RevealParagraph 
                text="I design and build AI-powered systems end-to-end — from LLM agents and voice assistants to full-stack apps and distributed data pipelines. My focus is shippable, reliable, and maintainable software that ties user experience to measurable impact."
                className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl text-lg leading-relaxed"
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
                  src="https://avatars.githubusercontent.com/laharikarrotu"
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
                text="Hands-on experience across AI systems, full-stack applications, and data engineering. I build production services that connect LLM agents, voice interfaces, and web experiences to reliable data and cloud infrastructure."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
              delay={0.3}
              duration={1.2}
              stagger={0.1}
            />
            <RevealParagraph 
              text="I prioritize clarity, maintainability, and measurable impact: clean APIs, observable pipelines, thoughtful UX, and deployments that are easy to operate. I take products from idea to shipped release, collaborating closely with stakeholders and teams."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              delay={0.5}
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
                title: 'Software Engineer – AI & Data Systems',
                company: 'Arkatech Solutions',
                period: 'May 2025 – Present · Bay Area, CA',
                bullets: [
                  'Designed and implemented end-to-end AI and data systems using microservices, distributed storage, and event-driven patterns.',
                  'Built LLM-powered automation and personalization workflows with embeddings, retrieval layers, and orchestration.'
                ]
              },
              {
                title: 'Software Engineer Intern – AI & Full-Stack Systems',
                company: 'Anguliyam AI Solutions',
                period: 'Jun 2024 – Apr 2025 · Remote',
                bullets: [
                  'Developed SmartBuy AI Assistant, Navigating Assistant, and a voice-enabled agent with LLMs and vector-based retrieval.',
                  'Shipped full-stack features in React/Next.js and FastAPI/Node.js to support AI workflows and real-time interactions.'
                ]
              },
              {
                title: 'Data Engineer Intern – Cloud & Big Data',
                company: 'Cognizant',
                period: 'Jan 2022 – Aug 2022 · Bengaluru, India',
                bullets: [
                  'Built ETL/ELT pipelines with AWS Glue, Spark, and Redshift to support analytics workloads.',
                  'Implemented data quality checks and monitoring to keep pipelines reliable.'
                ]
              },
              {
                title: 'Data Engineering Intern – Analytics Automation',
                company: 'EPAM Systems',
                period: 'Dec 2020 – Mar 2021 · Hyderabad, India',
                bullets: [
                  'Automated PySpark workflows on EMR with Airflow DAGs.',
                  'Built dashboards for KPI monitoring and operational visibility.'
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
                title: 'AWS Certified Solutions Architect – Associate',
                issuer: 'Amazon Web Services',
                icon: '☁️',
                link: 'https://www.credly.com/badges/454b6f57-2586-48bd-a854-1317ee4a6fdd/public_url'
              },
              {
                title: 'AWS Certified Cloud Practitioner',
                issuer: 'Amazon Web Services',
                icon: '🛠️'
              },
              {
                title: 'Cisco Certified Network Associate (CCNA)',
                issuer: 'Cisco Systems',
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
                href="/projects/LahariKarrotuResumeSDE-20251211092311.pdf" 
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