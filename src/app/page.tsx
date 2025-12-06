'use client';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import TypeWriter from '@/components/TypeWriter';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { MotionDiv } from '@/components/MotionDiv';
import { RevealText, RevealParagraph, RevealHeading } from '@/components/RevealText';

import VoiceAssistant from '@/components/VoiceAssistant';
import DarkModeToggle from '@/components/DarkModeToggle';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import ProjectShowcase from '@/components/ProjectShowcase';
import { projects } from '@/data/projects';

const Home: React.FC = () => {
  // Projects are now imported from @/data/projects

  // Merged and deduplicated tools configuration
    const toolsConfig = {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Next.js', icon: '▲' },
      { name: 'JavaScript', icon: '🟨' },
        { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'HTML/CSS', icon: '🌐' },
        { name: 'Astro', icon: '⭐' }
      ],
            backend: [
      { name: 'Python', icon: '🐍' },
      { name: 'FastAPI', icon: '⚡' },
         { name: 'Django', icon: '🎯' },
      { name: 'Java', icon: '☕' },
      { name: 'Spring Boot', icon: '🌱' },
         { name: 'Node.js', icon: '🟢' },
         { name: 'REST APIs', icon: '🔗' },
         { name: 'Microservices', icon: '🏗️' },
         { name: 'PostgreSQL', icon: '🐘' },
         { name: 'MongoDB', icon: '🍃' },
         { name: 'Cassandra', icon: '📊' }
       ],
            aiMl: [
         { name: 'TensorFlow', icon: '🧠' },
         { name: 'PyTorch', icon: '🔥' },
         { name: 'Generative AI', icon: '🤖' },
      { name: 'RAG Systems', icon: '🔍' },
      { name: 'OpenAI API', icon: '✨' },
      { name: 'LangChain', icon: '⛓️' },
         { name: 'MLOps', icon: '⚙️' },
         { name: 'Apache Spark', icon: '⚡' },
         { name: 'Apache Kafka', icon: '📊' },
         { name: 'Apache Airflow', icon: '🌪️' },
         { name: 'Hugging Face', icon: '🤗' }
       ],
    data: [
      { name: 'Pandas', icon: '🐼' },
      { name: 'SQL', icon: '🗄️' }
    ],
            cloudDevOps: [
      { name: 'AWS', icon: '☁️' },
         { name: 'Azure', icon: '🔷' },
         { name: 'GCP', icon: '🌤️' },
         { name: 'Docker', icon: '🐳' },
         { name: 'Kubernetes', icon: '⎈' },
         { name: 'Terraform', icon: '🌍' },
      { name: 'CI/CD', icon: '🔄' },
         { name: 'AWS Lambda', icon: 'λ' },
         { name: 'AWS S3/Glue', icon: '💾' }
       ]
    };

  return (
    <main className="gradient-background min-h-screen text-gray-800 dark:text-gray-100 relative">
      <DarkModeToggle />
      <VoiceAssistant />
      <Navigation />
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollToTop />
      <div className="relative z-10">
        <div className="hero-section min-h-screen flex flex-col justify-center items-center py-32">
          <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <RevealHeading delay={0.1} duration={0.8} className="text-6xl md:text-8xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
                Hi, I&apos;m Lahari
              </RevealHeading>
              
              <RevealText delay={0.3} duration={0.8}>
                <div className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mb-12 font-light">
                  I&apos;m a{' '}
                  <TypeWriter 
                    texts={[
                      'Software Engineer',
                      'Full Stack AI Engineer',
                      'Data Engineer',
                      'MLOps Specialist'
                    ]} 
                  />
                </div>
              </RevealText>

              <RevealParagraph 
                text="Full Stack Software Engineer with 4+ years of experience building and maintaining production systems. I work with distributed systems, data engineering pipelines, and full-stack applications."
                className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl text-lg leading-relaxed"
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
                    href="mailto:laharikarrothu@gmail.com"
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

        <section id="about" className="py-32">
          <SectionHeader 
            title="About Me"
            subtitle="Building reliable systems for production environments"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealParagraph 
              text="I'm a Full Stack Software Engineer with 4+ years of experience building and maintaining production systems. My work includes data engineering pipelines, AI/ML systems, and full-stack web applications. I focus on building reliable, maintainable systems and have experience working with distributed systems, cloud infrastructure, and modern web technologies."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
              delay={0.3}
              duration={1.2}
              stagger={0.1}
            />
            <RevealParagraph 
              text="I believe in writing clean, maintainable code and building systems that can evolve over time. I take ownership of systems from development through deployment and maintenance. I work well in team environments, contribute to code reviews, and focus on understanding problems before jumping to solutions. I'm committed to continuous learning and looking for opportunities where I can grow with the company and contribute to long-term success."
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              delay={0.5}
              duration={1.2}
              stagger={0.1}
            />
          </div>
        </section>

        <section className="experience-section py-20 relative overflow-hidden">
                     <SectionHeader 
             title="Professional Journey" 
             subtitle="Over 4 years of expertise in Full Stack AI Engineering and Cloud Solutions"
           />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700" />
              
              <div className="space-y-12">
                {/* Current Role */}
                <MotionDiv
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                >
                  <div className="flex-1 md:pr-12 mb-4 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full Stack AI Engineer</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Arkatech Solutions | May 2025 – Present</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                          <p className="text-gray-700 dark:text-gray-300">Building and maintaining eCommerce platform with React and FastAPI</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                          <p className="text-gray-700 dark:text-gray-300">Developing AI solutions with AWS services including Textract OCR</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                          <p className="text-gray-700 dark:text-gray-300">Working on infrastructure automation with Terraform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🚀</span>
                  </div>
                </MotionDiv>

                {/* Previous Role */}
                <MotionDiv
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row-reverse items-center md:justify-between"
                >
                  <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI/ML Full Stack Developer</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Anguliyam | August 2024 – May 2025</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                          <p className="text-gray-700 dark:text-gray-300">Developed railway predictive maintenance system using TensorFlow</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                          <p className="text-gray-700 dark:text-gray-300">Built real-time monitoring dashboards and voice navigation features</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">💼</span>
                  </div>
                </MotionDiv>

                {/* Earlier Role */}
                <MotionDiv
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                >
                  <div className="flex-1 md:pr-12 mb-4 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Big Data Engineer</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Cognizant, Hyderabad | January 2022 – August 2022</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                          <p className="text-gray-700 dark:text-gray-300">Built ETL pipelines processing 5TB+ monthly data</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                          <p className="text-gray-700 dark:text-gray-300">Optimized queries and reduced latency by 30%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">📊</span>
                  </div>
                </MotionDiv>

                                 {/* EPAM Role */}
                 <MotionDiv
                   initial={{ opacity: 0, x: 100 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="relative flex flex-col md:flex-row-reverse items-center md:justify-between"
                 >
                   <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                     <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Analyst</h3>
                       <p className="text-gray-600 dark:text-gray-400 mb-4">EPAM Systems, Hyderabad | December 2020 – March 2021</p>
                       <div className="space-y-2">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                           <p className="text-gray-700 dark:text-gray-300">Reduced data processing time by 30% through Python frameworks</p>
                         </div>
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
                           <p className="text-gray-700 dark:text-gray-300">Configured AWS Data Pipeline for S3 to Redshift loading</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center">
                     <span className="text-2xl text-white">📈</span>
                   </div>
                 </MotionDiv>

                 {/* Education */}
                 <MotionDiv
                   initial={{ opacity: 0, x: -100 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="relative flex flex-col md:flex-row items-center md:justify-between"
                 >
                  <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">MS in Computer Science</p>
                          <p className="text-gray-600">Florida Institute of Technology | 2024</p>
                          <p className="text-gray-700 dark:text-gray-300">Specialization: Big Data Analytics and Data Science</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">BS in Computer Science</p>
                          <p className="text-gray-600">KL University, India | 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🎓</span>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </div>
        </section>


        <section className="projects-section py-32 overflow-hidden" id="projects">
                     <SectionHeader 
            title="Professional Projects Portfolio" 
            subtitle="Production-grade applications demonstrating expertise in full-stack development, AI/ML integration, and cloud solutions. Each project includes detailed metrics, screenshots, and technical documentation."
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectShowcase projects={projects} />
                         </div>
        </section>

         <section className="contact-section py-32" id="contact">
           <RevealHeading delay={0.1} duration={1.0} className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
             Let&apos;s Connect!
           </RevealHeading>
           <RevealText delay={0.3} duration={0.8}>
             <p className="mb-12 text-gray-600 text-center text-lg max-w-2xl mx-auto">
               I&apos;m always interested in hearing about new opportunities, collaborating on projects, 
               or discussing full-stack development and AI/ML integration challenges.
             </p>
           </RevealText>
           
           {/* Enhanced Contact Form */}
           <EnhancedContactForm />
           
           {/* Social Links */}
           <div className="mt-16">
             <RevealText delay={0.5} duration={0.8}>
               <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-300">Connect on Social Media</h3>
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
                 href="mailto:laharikarrothu@gmail.com" 
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚛️</span>
                  Frontend
                </h3>
                <div className="space-y-3">
                  {toolsConfig.frontend.map((tool, index) => (
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
                  <span className="text-2xl">🐍</span>
                  Backend
                 </h3>
                 <div className="space-y-3">
                  {toolsConfig.backend.map((tool, index) => (
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
                  <span className="text-2xl">🧠</span>
                  AI/ML
                 </h3>
                 <div className="space-y-3">
                  {toolsConfig.aiMl.map((tool, index) => (
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
                  <span className="text-2xl">📊</span>
                  Data
                 </h3>
                 <div className="space-y-3">
                  {toolsConfig.data.map((tool, index) => (
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
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
               >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                   <span className="text-2xl">☁️</span>
                   Cloud & DevOps
                 </h3>
                 <div className="space-y-3">
                   {toolsConfig.cloudDevOps.map((tool, index) => (
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
          >
            {/* AWS Certification with Credly Badge */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link 
                href="https://www.credly.com/badges/454b6f57-2586-48bd-a854-1317ee4a6fdd/public_url"
                target="_blank"
                className="block bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform">
                  <span className="text-2xl text-white">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">AWS Certified Solutions Architect – Associate</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Amazon Web Services</p>
                <div className="mt-3 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                  <span>View Credly Badge</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </MotionDiv>

            {/* CCNA Certification with Credly Badge */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="https://www.youracclaim.com/badges/09bfbaf8-6538-4b48-a9ea-49b9bc39414a?source=linked_in_profile"
                target="_blank"
                className="block bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Cisco Certified Network Associate (CCNA)</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Cisco Systems</p>
                <div className="mt-3 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                  <span>View Credly Badge</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </MotionDiv>

            {/* ServiceNow Certification */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">ServiceNow Certified Application Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">ServiceNow</p>
              <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm font-medium">Verified</div>
            </MotionDiv>

            {/* Oracle Certification */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🗄️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Oracle Database SQL Certified Associate</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Oracle Corporation</p>
              <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm font-medium">Verified</div>
            </MotionDiv>

            {/* Google Cloud ML Engineer */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Google Cloud Professional ML Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Google Cloud</p>
              <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm font-medium">In Progress</div>
            </MotionDiv>

            {/* Kubernetes Administrator */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Kubernetes Administrator (CKA)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Cloud Native Computing Foundation</p>
              <div className="mt-3 text-gray-700 dark:text-gray-300 text-sm font-medium">Planned</div>
            </MotionDiv>
          </MotionDiv>
        </section>


                 {/* Floating Action Buttons */}
         <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
           {/* Quick Contact Button */}
           <Link
             href="mailto:laharikarrothu@gmail.com"
             className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-4 rounded-full shadow-sm
                      hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group"
             title="Quick Contact"
           >
             <Mail className="w-5 h-5" />
             <span className="hidden group-hover:block text-sm font-medium">Contact</span>
           </Link>
           
           {/* Download Resume Button */}
           <a
             href="/Resume_LahariKarrotu.docx"
             download="Lahari_Karrotu_Full_Stack_AI_Engineer_Resume.docx"
             className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 p-4 rounded-full shadow-sm
                      hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group"
             target="_blank"
             rel="noopener noreferrer"
             title="Download Resume"
           >
             <svg 
               className="w-5 h-5" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24"
             >
               <path 
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 strokeWidth={2} 
                 d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
               />
             </svg>
             <span className="hidden group-hover:block text-sm font-medium">Resume</span>
           </a>
         </div>
      </div>
    </main>
  );
}

export default Home;