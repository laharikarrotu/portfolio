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
import { GITHUB_URL, GITHUB_USERNAME } from '@/lib/site';

const Home: React.FC = () => {
  // Projects are now imported from @/data/projects

  // Tools grouped by how I use them day-to-day and in projects
    const toolsConfig = {
    fullStack: [
        { name: 'Java / Spring Boot', icon: '☕' },
        { name: 'Python / FastAPI', icon: '🐍' },
        { name: 'Golang', icon: '🐹' },
        { name: 'TypeScript / React / Next.js', icon: '📘' },
        { name: 'HAPI FHIR', icon: '🏥' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'PostgreSQL / MySQL / DynamoDB', icon: '🐘' },
        { name: 'REST / FHIR R4', icon: '🔗' }
       ],
    aiAgents: [
      { name: 'Gemini Pro / GPT-4o Vision', icon: '✨' },
      { name: 'LangChain & agent pipelines', icon: '⛓️' },
      { name: 'RAG & multimodal flows', icon: '📚' },
      { name: 'Playwright automation', icon: '🎭' },
      { name: 'Tesseract OCR / OpenCV', icon: '📝' },
      { name: 'Azure Computer Vision', icon: '👁️' }
    ],
    dataPipelines: [
      { name: 'SQL (PostgreSQL, MySQL, Oracle, DB2)', icon: '🗄️' },
      { name: 'Apache Spark / Databricks', icon: '⚡' },
      { name: 'ETL & data validation', icon: '🔄' },
      { name: 'DynamoDB access patterns', icon: '⚙️' },
      { name: 'Query tuning & indexing', icon: '🔍' },
      { name: 'Pega / enterprise BPM data', icon: '📋' }
    ],
    cloudInfra: [
      { name: 'AWS Lambda · DynamoDB · S3 · RDS · SQS', icon: '☁️' },
      { name: 'API Gateway & CloudWatch', icon: '🌐' },
      { name: 'Terraform & CloudFormation', icon: '🏗️' },
      { name: 'Azure App Service & Blob', icon: '🔷' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Jenkins & GitHub Actions', icon: '🔄' },
      { name: 'Splunk & New Relic', icon: '📡' },
      { name: 'Vercel (projects)', icon: '▲' }
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
              <RevealText delay={0.05} duration={0.6}>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-3 text-center md:text-left">
                  Lahari Karrotu
                </p>
              </RevealText>
              <RevealHeading delay={0.1} duration={0.8} className="text-4xl md:text-6xl font-light mb-4 text-gray-900 dark:text-white tracking-tight">
                Software engineer
              </RevealHeading>
              <RevealText delay={0.2} duration={0.6}>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light max-w-2xl text-center md:text-left">
                  Backend &amp; cloud systems · Healthcare technology
                </p>
              </RevealText>

              <RevealText delay={0.3} duration={0.8}>
                <div className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 font-light max-w-3xl text-center md:text-left min-h-[3.5rem] md:min-h-[4rem]">
                  <TypeWriter
                    texts={[
                      'The unglamorous center: serialization, concurrency, infra that only fails at 2 a.m.',
                      'FHIR resources, AWS serverless, and data that has to stay inside policy.',
                      'Side work: vision models, APIs, and pipelines that have to agree with each other.',
                      'I respect systems that stay dull in production.',
                    ]}
                  />
                </div>
              </RevealText>

              <RevealParagraph
                text="At Cigna I work on member-facing healthcare APIs and the infrastructure behind them — translation into FHIR, protection of sensitive fields, and the operational habits that keep large populations from seeing your mistakes. That same bias toward clarity shows up in how I build my own projects."
                className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl text-lg md:text-xl leading-relaxed"
                delay={0.5}
                duration={1.0}
                stagger={0.1}
              />

              <RevealText delay={0.6} duration={0.8}>
                <div className="mb-12 max-w-3xl border-l-2 border-indigo-500/80 dark:border-indigo-400/80 pl-6 py-1 text-left">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                    I gravitate toward the <span className="text-gray-900 dark:text-white font-medium">messy middle</span> of
                    engineering — where specifications meet legacy data, where latency and correctness trade off, and where
                    &quot;it works on my machine&quot; is not the bar. Professionalism, to me, is taking that middle seriously:
                    documentation, triage, and the judgment to know when to stop tuning and ship.
                  </p>
                </div>
              </RevealText>

              <RevealText delay={0.7} duration={0.8}>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="/lahari-karrotu-resume.docx"
                    download="lahari-karrotu-resume.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
                             transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl
                             flex items-center gap-2"
                  >
                    <span>📄</span>
                    Download Resume
                  </a>
                  <Link
                    href="#contact"
                    className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 
                             transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="#projects"
                    className="px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300
                             rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 
                             text-sm font-semibold"
                  >
                    View Projects
                  </Link>
                </div>
              </RevealText>

              <RevealText delay={0.9} duration={0.8}>
                <div className="flex gap-4 mt-12 justify-center md:justify-start">
                  <Link
                    href={GITHUB_URL}
                    target="_blank"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                             transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/karrotulahari/"
                    target="_blank"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                             transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:laharikarrotu@gmail.com"
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

        {/* Focus — how I spend attention, not a scorecard */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-light text-center mb-2 text-gray-900 dark:text-white tracking-tight">Where my attention goes</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm max-w-2xl mx-auto leading-relaxed">
              The work I seek out: boundaries, reliability, and problems that do not fit a single Jira label.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Regulated data & API shape',
                  body: 'Making FHIR payloads, legacy sources, and client expectations line up — including what never leaves the server, and why.',
                },
                {
                  title: 'Production and the story logs tell',
                  body: 'Tracing failures across Lambda, databases, and gateways; caring about the trend line, not a single hero fix.',
                },
                {
                  title: 'Infrastructure you can reason about',
                  body: 'Terraform, CloudFormation, and IAM that a teammate can audit — not magic that only one person understands.',
                },
                {
                  title: 'Side engineering with the same bar',
                  body: 'Multimodal and vision projects where models, APIs, and error handling are designed together, not bolted on.',
                },
              ].map((item, idx) => (
                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
                >
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.body}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <SectionHeader
            title="What I build"
            subtitle="Capabilities I return to — at work and in my own time"
          />
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Healthcare APIs — FHIR R4, bundle pagination, PHI masking, HIPAA-minded design',
              'AWS Serverless — Lambda, DynamoDB, SQS, API Gateway, Terraform & CloudFormation',
              'AI Healthcare Side Projects — prescription vision, RxNorm checks, audit-friendly pipelines',
              'Computer Vision — virtual try-on, Azure CV → OpenCV fallbacks, realistic overlays',
              'Production backends — Java, Python, Golang; Pega BPM rules; Splunk & CloudWatch triage',
              'Full-stack tools — Next.js, FastAPI, PostgreSQL, GitHub Actions, Vercel & Azure',
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
            subtitle="Context, not a pitch"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealParagraph
              text="I'm based in the United States. My day job is backend and cloud for healthcare: FHIR-shaped APIs, AWS serverless pieces, and the policies and incident practice that sit around them. I am as interested in how a team agrees on a contract as in how a query plan looks."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
              delay={0.3}
              duration={1.2}
              stagger={0.1}
            />
            <RevealParagraph
              text="Away from that, I still build — multimodal assistants, computer vision, full-stack tools — because I learn by finishing things. Uniqueness is not a tagline; it's the combination of what you refuse to hand-wave and what you choose to study next."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
              delay={0.5}
              duration={1.2}
              stagger={0.1}
            />
            <RevealParagraph
              text="Formal side: M.S. in Computer Science from Florida Tech (systems, data engineering, applied AI); B.Tech from KL University. Certifications — AWS Solutions Architect, ServiceNow CSA, Cisco CCNA — are useful shorthand; the proof is in how the systems behave."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              delay={0.7}
              duration={1.2}
              stagger={0.1}
            />
          </div>
        </section>

        <section id="experience" className="experience-section py-20 relative overflow-hidden">
                     <SectionHeader
            title="Where I've worked"
            subtitle="Roles where scope, compliance, and on-call reality mattered"
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {[
              {
                title: 'Software Engineer',
                company: 'Cigna',
                period: 'Aug 2024 – Present',
                bullets: [
                  'Build and maintain FHIR R4 REST APIs that translate legacy claims and eligibility into HL7 resources for the member app — serialization, bundle pagination, and versioned profiles at large member scale',
                  'Own a Golang-based masking pipeline in API Gateway that redacts PII/PHI (SSNs, diagnosis codes, insurance IDs) before responses reach clients, aligned with HIPAA minimum-necessary practice',
                  'Design and operate AWS serverless infrastructure for claims microservices: Lambda, DynamoDB key design, SQS DLQs, API Gateway throttling — Terraform and CloudFormation with least-privilege IAM across environments',
                  'Implement Pega BPM decision tables for adjudication and routing so business teams can update insurance rules independently',
                  'Lead production incident triage with Splunk; addressed HikariCP pool exhaustion and DynamoDB hot partitions — member login 5xx rate from 3.2% to under 0.5% over two sprint cycles',
                  'Partner across product, compliance, and engineering in SAFe Agile, including architecture reviews with distributed teams'
                ]
              },
              {
                title: 'Software Engineering Intern',
                company: 'Zoho',
                period: 'Aug 2021 – May 2022',
                bullets: [
                  'Developed production J2EE SaaS backend modules in layered MVC, shipping features from database to API within Agile sprints',
                  'Designed a YAML-to-table JDBC data access layer replacing per-entity DAO boilerplate across 14 entities',
                  'Built authentication and sessions: BCrypt (work factor 12), OTP 2FA via JavaMail with SMTP TLS options, idle timeout for multi-tenant production',
                  'Optimized MySQL by fixing N+1 patterns with indexed JOINs — page loads from ~4.8s to under 200ms on realistic datasets'
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
                <div className="flex flex-col gap-1 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{role.title}</h3>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{role.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{role.period}</p>
                        </div>
                <ul className="space-y-3">
                  {role.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="mt-1.5 text-indigo-500 font-bold">▸</span>
                      <span className="leading-relaxed">{item}</span>
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
            title="GitHub"
            subtitle="Public rhythm — commits when I have something worth pushing"
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
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=github-compact&area=true&hide_border=true&bg_color=transparent&color=000000&line=0366d6&point=24292e`}
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
            title="Workflow orchestration"
            subtitle="A live sketch of how layered pipelines fit together — useful for intuition, not a deployment diagram"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WorkflowOrchestration />
          </div>
        </section>

        {/* System Design Deep Dive Section */}
        <section className="system-design-section py-20" id="system-design">
                     <SectionHeader
            title="System design snapshot"
            subtitle="One detailed thread — e-commerce + AI — showing how I structure services and trade-offs"
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
                    A scalable full-stack eCommerce platform with AI-powered navigation, 
                    real-time inventory management, and optimized performance.
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
                        <span><strong>Backend:</strong> FastAPI microservices with async/await for scalable request handling</span>
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
                        <span><strong>Load Handling:</strong> Scalable architecture with horizontal scaling, connection pooling, and caching strategies</span>
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
                      <p className="text-gray-700 dark:text-gray-300">Circuit breakers for AI API, graceful degradation to keyword search, retry logic with exponential backoff for improved reliability during service outages.</p>
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

        <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4">
                     <SectionHeader
              title="How I work"
              subtitle="Habits and standards — not a sales sheet"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'End-to-end ownership',
                  description: 'I prefer owning a slice from schema or contract through deployment and metrics. Side projects are how I keep that muscle — HealthScan, Blinds & Boundaries, SmartBuy, Resume Tailor — whole systems, not diagram-only ideas.',
                },
                {
                  title: 'Stay with the failure mode',
                  description: 'Production work taught me to read traces and logs before opinions. I care about why something broke for real users, not only that a graph went green again.',
                },
                {
                  title: 'Depth across languages',
                  description: 'Java, Python, Golang, TypeScript — each for what it is good at. Professionalism is knowing when FHIR and AWS are the story and when a small FastAPI service is the right tool.',
                }
              ].map((item, idx) => (
          <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                >
                  <div className="w-10 h-px bg-indigo-500/80 dark:bg-indigo-400/80 mb-5" aria-hidden />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </MotionDiv>
                        ))}
                      </div>
                    </div>
        </section>

        <section className="projects-section py-32 overflow-hidden" id="projects">
          <SectionHeader
            title="Projects"
            subtitle="Work I have carried from idea to something runnable — some experimental, all intentional"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectShowcase projects={projects} />
             </div>
         </section>

         <section className="contact-section py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="contact">
           <div className="max-w-4xl mx-auto px-4">
             <RevealHeading delay={0.1} duration={1.0} className="text-4xl font-light text-center mb-4 text-gray-900 dark:text-white tracking-tight">
               Get in touch
           </RevealHeading>
           <RevealText delay={0.3} duration={0.8}>
               <p className="mb-8 text-gray-600 dark:text-gray-400 text-center text-lg max-w-2xl mx-auto leading-relaxed">
                 If you are working on a hard systems problem, a regulated product, or something at the edge of useful AI, I am glad to read a thoughtful note. No need for a perfect subject line.
             </p>
           </RevealText>
             <MotionDiv
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg mb-12"
             >
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <a
                   href="mailto:laharikarrotu@gmail.com"
                   className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
                 >
                   <Mail className="w-5 h-5" />
                   Email Me
                 </a>
                 <a
                   href="/lahari-karrotu-resume.docx"
                   download="lahari-karrotu-resume.docx"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
                 >
                   <span>📄</span>
                   Download Resume
                 </a>
                 <Link
                   href="https://www.linkedin.com/in/karrotulahari/"
                   target="_blank"
                   className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
                 >
                   <Linkedin className="w-5 h-5" />
                   Connect on LinkedIn
                 </Link>
               </div>
             </MotionDiv>
           
           {/* Enhanced Contact Form */}
           <EnhancedContactForm />
           
           {/* Social Links */}
           <div className="mt-16">
             <RevealText delay={0.5} duration={0.8}>
               <h3 className="text-2xl font-light text-center mb-8 text-gray-700 dark:text-gray-300">Elsewhere</h3>
             </RevealText>
             <RevealText delay={0.7} duration={0.8}>
               <div className="flex justify-center gap-6 flex-wrap max-w-4xl mx-auto px-4">
               <Link 
                 href="https://www.linkedin.com/in/karrotulahari/" 
                 className="group flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-8 py-4 rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70
                           transition-all duration-300 border border-gray-200 dark:border-gray-700
                           shadow-sm"
                 target="_blank"
               >
                 <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                 <span>LinkedIn</span>
               </Link>
               <Link 
                 href={GITHUB_URL} 
                 className="group flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 px-8 py-4 rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70
                           transition-all duration-300 border border-gray-200 dark:border-gray-700
                           shadow-sm"
                 target="_blank"
               >
                 <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                 <span>GitHub</span>
               </Link>
               <Link 
                href="mailto:laharikarrotu@gmail.com" 
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
           </div>
        </section>

        {/* What I'm learning now */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Currently turning over</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Agentic flows that earn their complexity — tool use, guardrails, and when not to call a model</li>
                <li>• Event-driven boundaries and backpressure — the boring parts of &quot;scale&quot;</li>
                <li>• Interop in healthcare — standards that help when they are implemented with care</li>
                <li>• Small, sharp open-source contributions when a repo&apos;s problem statement is clear</li>
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
            title="Tech stack"
            subtitle="What I reach for regularly — familiarity earned by use"
          />
          <div className="max-w-5xl mx-auto px-4 space-y-4">
            {[
              { label: 'Languages', items: ['Java', 'Python', 'Golang', 'TypeScript', 'SQL', 'JavaScript'] },
              { label: 'Frameworks', items: ['Spring Boot', 'FastAPI', 'React', 'Next.js', 'Node.js', 'HAPI FHIR'] },
              { label: 'AWS', items: ['Lambda', 'DynamoDB', 'S3', 'RDS', 'SQS', 'API Gateway', 'CloudWatch'] },
              { label: 'Azure & AI', items: ['App Service', 'Blob Storage', 'Computer Vision', 'Gemini', 'GPT-4o', 'OpenCV'] },
              { label: 'Data & enterprise', items: ['PostgreSQL', 'MySQL', 'Oracle', 'DB2', 'Apache Spark', 'Databricks', 'Pega BPM'] },
              { label: 'Observability & quality', items: ['Splunk', 'New Relic', 'SonarQube', 'Playwright'] },
              { label: 'Infra & delivery', items: ['Terraform', 'CloudFormation', 'Docker', 'Jenkins', 'GitHub Actions', 'SAFe Agile'] },
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
            title="Technical breadth"
            subtitle="Grouped for clarity — not a contest of how many logos fit on a slide"
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
                degree: 'M.S. Computer Science — Systems, Data Engineering & Applied AI',
                school: 'Florida Institute of Technology',
                period: 'Aug 2022 – May 2024',
                grade: 'GPA: 3.6 / 4.0',
                description: ''
              },
              {
                degree: 'B.Tech Computer Science',
                school: 'KL University',
                period: 'Aug 2018 – May 2022',
                grade: '8.7 / 10',
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
                title: 'AWS Certified Solutions Architect – Associate',
                issuer: 'Amazon Web Services',
                icon: '☁️',
                link: 'https://www.credly.com/badges/454b6f57-2586-48bd-a854-1317ee4a6fdd/public_url'
              },
              {
                title: 'ServiceNow Certified System Administrator',
                issuer: 'ServiceNow',
                icon: '🛠️',
                link: ''
              },
              {
                title: 'Cisco CCNA: Switching, Routing & Wireless',
                issuer: 'Cisco',
                icon: '🌐',
                link: ''
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
            title="I Write Too" 
            subtitle="Thoughts on AI, distributed systems, and what I'm learning"
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
            title="How I think about engineering"
            subtitle="Trade-offs and patterns I have actually pushed through — not generic interview fodder"
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
                description: "How I optimized FastAPI microservices for scalable request handling, implementing connection pooling, async/await patterns, and request batching for AI API calls.",
                topics: ["Async Architecture", "Connection Pooling", "Request Batching", "Performance Optimization"],
                metrics: "Optimized request handling, improved latency, cost-effective scaling"
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
                description: "Designing resilient AI workflows with circuit breakers, graceful degradation, retry logic, and fallback mechanisms for improved reliability during AI service outages.",
                topics: ["Fault Tolerance", "Circuit Breakers", "Graceful Degradation", "Error Handling"],
                metrics: "Improved reliability, minimal monitoring overhead, robust error handling"
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
                metrics: "Minimal monitoring overhead, real-time alerting, improved system reliability"
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
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Lahari Karrotu</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Backend and cloud for healthcare at Cigna; personal work at the intersection of vision, APIs, and systems that ought to behave under rules.</p>
                  </div>
                  <div>
                <h4 className="font-semibold mb-4">On this site</h4>
                <div className="space-y-2">
                  <Link href="#projects" className="block text-gray-400 hover:text-white text-sm transition-colors">Projects</Link>
                  <Link href="#experience" className="block text-gray-400 hover:text-white text-sm transition-colors">Experience</Link>
                  <Link href="#contact" className="block text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
                  </div>
                </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-2">
                  <a href="mailto:laharikarrotu@gmail.com" className="block text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    laharikarrotu@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/karrotulahari/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Lahari Karrotu. All rights reserved.
              </p>
              <a
                href="/lahari-karrotu-resume.docx"
                download="lahari-karrotu-resume.docx"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer"
              >
                <span>📄</span>
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