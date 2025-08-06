'use client';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import TypeWriter from '@/components/TypeWriter';
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import AnimatedCard from '@/components/AnimatedCard';
import { MotionDiv } from '@/components/MotionDiv';

import VoiceAssistant from '@/components/VoiceAssistant';
import DarkModeToggle from '@/components/DarkModeToggle';
import EnhancedContactForm from '@/components/EnhancedContactForm';

const Home: React.FC = () => {
  const skills: string[] = [
    "Full-Stack Development",
    "Data Engineering & Big Data",
    "Generative AI & RAG",
    "React & TypeScript",
    "Python (FastAPI/Django)",
    "Java & Spring Boot",
    "Apache Spark & Kafka",
    "AWS & Azure Cloud",
    "MLOps & TensorFlow",
    "System Design",
    "DevOps & Terraform",
    "Real-time ML Systems"
  ];

  const projects = [
    {
      title: "Virtual Try-On Application (Blinds & Boundaries)",
      description: "Production-grade AI application on Microsoft Azure serving as a 'virtual try-on' tool for window blinds visualization. Features 70% increase in user interactivity.",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      link: "https://blinds-boundaries-online.vercel.app",
      tags: ["React", "TypeScript", "FastAPI", "Azure", "AI"],
      status: "Live"
    },
    {
      title: "SmartBuy AI eCommerce",
      description: "Full-stack eCommerce application with RAG-powered AI agent providing personalized shopping assistance. Improved AI agent accuracy by 40%.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
      link: "https://smart-buy-v2.vercel.app",
      tags: ["React", "FastAPI", "RAG", "LLM", "AI Agent"],
      status: "Live"
    },
    {
      title: "Railway Predictive Maintenance",
      description: "End-to-end ML system for real-time anomaly detection predicting equipment failures. Mission-critical application with fault-tolerant architecture.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      link: "https://github.com/laharikarrotu/railway-predictive-maintenance",
      tags: ["TensorFlow", "Apache Spark", "AWS Lambda", "Real-time ML"],
      status: "Production"
    },
    {
      title: "Auto Loan AI Plugin",
      description: "AI-powered loan processing system using AWS Textract OCR and voice assistants, reducing processing time by 40%.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      link: "https://github.com/laharikarrotu/auto-loan-ai-plugin",
      tags: ["AWS Textract", "Voice AI", "Lambda", "Python"],
      status: "In Development"
    },
    {
      title: "Fitness Transformation App",
      description: "AI-driven fitness application with personalized recommendations and voice navigation using LLM APIs.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      link: "https://github.com/laharikarrotu/fitness-transformation-app",
      tags: ["React", "LLM APIs", "Voice Navigation", "AI"],
      status: "Completed"
    },
    {
      title: "Taskify Pro",
      description: "Smart task management web application with real-time collaboration, notifications, and AI-powered task prioritization.",
      imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      link: "https://github.com/laharikarrotu/Taskify-pro",
      tags: ["JavaScript", "Real-time", "Collaboration", "AI"],
      status: "Completed"
    },
    {
      title: "AUTH0-Amplify-AWS",
      description: "Implementation of secure authentication using AUTH0 with AWS Amplify, demonstrating cloud security best practices.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      link: "https://github.com/laharikarrotu/AUTH0-Amplify-aws",
      tags: ["AWS Amplify", "AUTH0", "Security", "Cloud"],
      status: "Completed"
    },
    {
      title: "Machine Learning Projects",
      description: "Collection of machine learning projects focusing on data analytics, predictive modeling, and computer vision applications.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "https://github.com/laharikarrotu/Machine_learning",
      tags: ["Machine Learning", "Python", "Data Analytics", "AI"],
      status: "Ongoing"
    }
  ];

           // Add these tool configurations with their icons
    const toolsConfig = {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'HTML5/CSS3', icon: '🌐' },
        { name: 'Astro', icon: '⭐' }
      ],
            backend: [
         { name: 'Python (FastAPI)', icon: '🐍' },
         { name: 'Django', icon: '🎯' },
         { name: 'Java (Spring Boot)', icon: '☕' },
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
         { name: 'RAG Pipelines', icon: '🔍' },
         { name: 'MLOps', icon: '⚙️' },
         { name: 'Apache Spark', icon: '⚡' },
         { name: 'Apache Kafka', icon: '📊' },
         { name: 'Apache Airflow', icon: '🌪️' },
         { name: 'Hugging Face', icon: '🤗' }
       ],
            cloudDevOps: [
         { name: 'AWS Services', icon: '☁️' },
         { name: 'Azure', icon: '🔷' },
         { name: 'GCP', icon: '🌤️' },
         { name: 'Docker', icon: '🐳' },
         { name: 'Kubernetes', icon: '⎈' },
         { name: 'Terraform', icon: '🌍' },
         { name: 'CI/CD (Jenkins)', icon: '🔄' },
         { name: 'AWS Lambda', icon: 'λ' },
         { name: 'AWS S3/Glue', icon: '💾' }
       ]
    };

  return (
    <main className="gradient-background min-h-screen text-gray-800 relative">
      <DarkModeToggle />
      <VoiceAssistant />
      <Navigation />
      <AnimatedBackground />
      <ScrollToTop />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-section min-h-screen flex flex-col justify-center items-center py-20">
          <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4 inline-block">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Hi! I&apos;m Lahari
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-600 mb-8">
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

                                             <p className="text-gray-600 mb-8 max-w-2xl">
                  Versatile and results-driven Software Engineer with over 4 years of experience architecting, building, and deploying large-scale, distributed systems. 
                  I specialize in Data Engineering pipelines, scalable AI/ML systems with Generative AI & RAG, and full-stack applications. 
                  Completed MS in Computer Science from Florida Institute of Technology, 
                  with expertise in cloud-native solutions and mission-critical ML systems.
                </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="#contact"
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                           transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get in Touch
                </Link>
                                 <Link
                   href="#projects"
                   className="px-8 py-3 bg-white/50 backdrop-blur-sm border border-purple-200 
                            rounded-lg hover:bg-white/70 transition-all duration-300 
                            transform hover:scale-105 shadow-lg"
                 >
                   View Projects
                 </Link>
                 <Link
                   href="/experience"
                   className="px-8 py-3 bg-purple-100 text-purple-700 border border-purple-200 
                            rounded-lg hover:bg-purple-200 transition-all duration-300 
                            transform hover:scale-105 shadow-lg"
                 >
                   View Experience
                 </Link>
              </div>

                             {/* Currently Working On */}
               <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                 <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-sm font-medium text-purple-700">Currently Working On</span>
                 </div>
                 <p className="text-gray-700 text-sm">
                   🚀 Building SmartBuy AI eCommerce Platform with RAG-powered AI agent | 
                   🏦 Developing Auto Loan AI Plugin with AWS Textract OCR | 
                   ☁️ Infrastructure automation with Terraform
                 </p>
               </div>

               <div className="flex gap-4 mt-8 justify-center md:justify-start">
                 <Link
                   href="https://github.com/laharikarrotu"
                   target="_blank"
                   className="p-2 bg-white/50 rounded-full hover:bg-white/70 
                            transition-all duration-300 transform hover:scale-110"
                 >
                   <Github className="w-6 h-6 text-gray-700" />
                 </Link>
                 <Link
                   href="https://www.linkedin.com/in/laharikarrotu/"
                   target="_blank"
                   className="p-2 bg-white/50 rounded-full hover:bg-white/70 
                            transition-all duration-300 transform hover:scale-110"
                 >
                   <Linkedin className="w-6 h-6 text-gray-700" />
                 </Link>
                 <Link
                   href="mailto:laharikarrothu@gmail.com"
                   className="p-2 bg-white/50 rounded-full hover:bg-white/70 
                            transition-all duration-300 transform hover:scale-110"
                 >
                   <Mail className="w-6 h-6 text-gray-700" />
                 </Link>
               </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full 
                              animate-pulse blur-2xl opacity-30" />
                <Image
                  src="https://avatars.githubusercontent.com/laharikarrotu"
                  alt="Lahari Karrotu"
                  width={400}
                  height={400}
                  className="rounded-full relative z-10 object-cover border-4 border-white shadow-xl"
                  priority
                  unoptimized
                />
                                 <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 
                               shadow-lg transform rotate-3">
                   <span className="text-purple-600 font-semibold">Full Stack AI Engineer</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-600 rounded-full p-1">
              <div className="w-1.5 h-3 bg-purple-600 rounded-full mx-auto animate-scroll" />
            </div>
          </div>
        </div>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto px-4">
                                 <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I am a versatile and results-driven Software Engineer with over 4 years of experience architecting, building, and deploying large-scale, distributed systems. 
          My expertise spans the full technology stack, with a specialization in building robust Data Engineering pipelines using Python, Spark, and Kafka; 
          scalable AI/ML systems featuring Generative AI, RAG, and MLOps; and engaging Full-Stack applications with Java, Python, and React.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          I excel at solving complex challenges in cloud-native environments (AWS, Azure) and leading projects through the entire Software Development Lifecycle (SDLC). 
          With an MS in Computer Science from Florida Institute of Technology, I&apos;ve achieved significant impacts including 70% increase in user interactivity, 
          40% improvement in AI agent accuracy, and mission-critical ML systems that predict equipment failures in real-time.
        </p>
          </div>
        </section>

        <section className="experience-section py-20 relative overflow-hidden">
                     <SectionHeader 
             title="Professional Journey" 
             subtitle="Over 4 years of expertise in Full Stack AI Engineering and Cloud Solutions"
           />
          
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200" />
              
              <div className="space-y-12">
                {/* Current Role */}
                <MotionDiv
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                >
                  <div className="flex-1 md:pr-12 mb-4 md:mb-0">
                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Full Stack AI Engineer</h3>
                      <p className="text-gray-600 mb-4">Arkatech Solutions | May 2025 – Present</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Building SmartBuy eCommerce Platform with React and FastAPI</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Developing Auto Loan AI Plugin with AWS Textract OCR</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Infrastructure automation with Terraform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
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
                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                      <h3 className="text-xl font-bold text-purple-600 mb-2">AI/ML Full Stack Developer</h3>
                      <p className="text-gray-600 mb-4">Anguliyam | August 2024 – May 2025</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Railway predictive maintenance with TensorFlow</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Real-time dashboards and voice navigation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
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
                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Big Data Engineer</h3>
                      <p className="text-gray-600 mb-4">Cognizant, Hyderabad | January 2022 – August 2022</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Built ETL pipelines processing 5TB+ monthly data</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Reduced query latency by 30% through optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
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
                     <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                       <h3 className="text-xl font-bold text-purple-600 mb-2">Data Analyst</h3>
                       <p className="text-gray-600 mb-4">EPAM Systems, Hyderabad | December 2020 – March 2021</p>
                       <div className="space-y-2">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-purple-500 rounded-full" />
                           <p className="text-gray-700">Reduced data processing time by 30% through Python frameworks</p>
                         </div>
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-purple-500 rounded-full" />
                           <p className="text-gray-700">Configured AWS Data Pipeline for S3 to Redshift loading</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
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
                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Education</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-800">MS in Computer Science</p>
                          <p className="text-gray-600">Florida Institute of Technology | 2024</p>
                          <p className="text-gray-700">Specialization: Big Data Analytics and Data Science</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">BS in Computer Science</p>
                          <p className="text-gray-600">KL University, India | 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-white">🎓</span>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section py-20" id="skills">
                     <SectionHeader 
             title="Technical Expertise" 
             subtitle="Specialized in modern full-stack development, AI/ML integration, and cloud solutions"
           />
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-gray-700">Core Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {skills.slice(0, 8).map((skill, index) => (
                    <AnimatedCard key={index} delay={index * 0.1}>
                      <div className="gradient-border rounded-xl p-4 text-center">
                        <span className="font-medium text-gray-700">{skill}</span>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-700">Additional Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.slice(8).map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white/50 backdrop-blur-sm p-6 rounded-xl text-center 
                              hover:bg-white/70 transition-all duration-300 transform hover:scale-105
                              border border-purple-100 shadow-lg hover:shadow-purple-100/50
                              group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Progress Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-700">Expertise Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Full-Stack Development</span>
                    <span className="text-purple-600 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">AI/ML & Data Engineering</span>
                    <span className="text-purple-600 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Cloud & DevOps</span>
                    <span className="text-purple-600 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">System Design</span>
                    <span className="text-purple-600 font-semibold">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Generative AI & RAG</span>
                    <span className="text-purple-600 font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Real-time ML Systems</span>
                    <span className="text-purple-600 font-semibold">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section py-20 overflow-hidden" id="projects">
                     <SectionHeader 
             title="Featured Projects" 
             subtitle="A showcase of my recent work in full-stack development, AI/ML integration, and cloud solutions"
           />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full
                         shadow-lg hover:bg-white hover:scale-110 transition-all duration-300
                         backdrop-blur-sm border border-purple-100 group md:left-8"
              onClick={() => document.querySelector('.projects-container')?.scrollBy(-400, 0)}
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full
                         shadow-lg hover:bg-white hover:scale-110 transition-all duration-300
                         backdrop-blur-sm border border-purple-100 group md:right-8"
              onClick={() => document.querySelector('.projects-container')?.scrollBy(400, 0)}
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
            </button>

            <div className="projects-container flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar
                            scroll-smooth px-4 md:px-8">
              {projects.map((project, index) => (
                <Link 
                  href={project.link} 
                  key={index} 
                  target="_blank"
                  className="group flex-none w-[300px] md:w-[400px] snap-center"
                >
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden 
                                hover:transform hover:scale-105 transition-all duration-300
                                border border-purple-100 shadow-lg hover:shadow-purple-200/50 h-full">
                    <div className="relative h-48 md:h-56">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                                             <div className="absolute bottom-0 left-0 p-6">
                         <div className="flex items-center gap-2 mb-2">
                           <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                           {project.status && (
                             <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                               project.status === 'Live' ? 'bg-green-500 text-white' :
                               project.status === 'Production' ? 'bg-blue-500 text-white' :
                               project.status === 'In Development' ? 'bg-yellow-500 text-white' :
                               project.status === 'Completed' ? 'bg-purple-500 text-white' :
                               'bg-gray-500 text-white'
                             }`}>
                               {project.status}
                             </span>
                           )}
                         </div>
                         <p className="text-gray-200 text-sm">{project.description}</p>
                       </div>
                    </div>
                    <div className="p-6 bg-white/30">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </MotionDiv>
        </section>

                 {/* Social Proof Section */}
         <section className="social-proof-section py-20" id="social-proof">
           <SectionHeader 
             title="Social Proof & Recognition" 
             subtitle="Community engagement and professional recognition"
           />
           <MotionDiv
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
           >
             <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center">
               <div className="text-4xl mb-4">📊</div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">GitHub Activity</h3>
               <p className="text-gray-600">Active contributor with 20+ repositories</p>
               <p className="text-purple-600 font-semibold mt-2">100+ commits this year</p>
             </div>
             <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center">
               <div className="text-4xl mb-4">🤝</div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn Network</h3>
               <p className="text-gray-600">500+ professional connections</p>
               <p className="text-purple-600 font-semibold mt-2">Endorsed for key skills</p>
             </div>
             <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center">
               <div className="text-4xl mb-4">🏆</div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Impact</h3>
               <p className="text-gray-600">4+ years of proven results</p>
               <p className="text-purple-600 font-semibold mt-2">70% user engagement increase</p>
             </div>
           </MotionDiv>
         </section>

         <section className="contact-section py-20" id="contact">
           <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
             Let&apos;s Connect!
           </h2>
           <p className="mb-12 text-gray-600 text-center text-lg max-w-2xl mx-auto">
             I&apos;m always interested in hearing about new opportunities, collaborating on projects, 
             or discussing full-stack development and AI/ML integration challenges.
           </p>
           
           {/* Enhanced Contact Form */}
           <EnhancedContactForm />
           
           {/* Social Links */}
           <div className="mt-16">
             <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">Connect on Social Media</h3>
             <div className="flex justify-center gap-6 flex-wrap max-w-4xl mx-auto px-4">
               <Link 
                 href="https://www.linkedin.com/in/laharikarrotu/" 
                 className="group flex items-center gap-3 bg-white/50 px-8 py-4 rounded-xl hover:bg-white/70 
                           transition-all duration-300 backdrop-blur-sm border border-purple-100
                           hover:scale-105 shadow-lg hover:shadow-purple-200/50"
                 target="_blank"
               >
                 <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                 <span>LinkedIn</span>
               </Link>
               <Link 
                 href="https://github.com/laharikarrotu" 
                 className="group flex items-center gap-3 bg-white/50 px-8 py-4 rounded-xl hover:bg-white/70 
                           transition-all duration-300 backdrop-blur-sm border border-purple-100
                           hover:scale-105 shadow-lg hover:shadow-purple-200/50"
                 target="_blank"
               >
                 <Github className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                 <span>GitHub</span>
               </Link>
               <Link 
                 href="mailto:laharikarrothu@gmail.com" 
                 className="group flex items-center gap-3 bg-white/50 px-8 py-4 rounded-xl hover:bg-white/70 
                           transition-all duration-300 backdrop-blur-sm border border-purple-100
                           hover:scale-105 shadow-lg hover:shadow-purple-200/50"
               >
                 <Mail className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                 <span>Email</span>
               </Link>
             </div>
                     </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section py-20" id="testimonials">
          <SectionHeader 
            title="What People Say" 
            subtitle="Feedback from colleagues and clients"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
          >
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-600">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Senior Tech Lead</h4>
                  <p className="text-sm text-gray-600">Arkatech Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Lahari consistently delivers high-quality, scalable solutions. Her expertise in AI/ML and full-stack development has been invaluable to our team.&rdquo;
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-600">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Project Manager</h4>
                  <p className="text-sm text-gray-600">Anguliyam</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Exceptional problem-solving skills and deep technical knowledge. Lahari transformed our railway maintenance system with innovative ML solutions.&rdquo;
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-600">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Data Engineering Lead</h4>
                  <p className="text-sm text-gray-600">Cognizant</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Outstanding performance in building ETL pipelines and optimizing data processing. A true asset to any data engineering team.&rdquo;
              </p>
            </div>
          </MotionDiv>
        </section>

        <section className="achievements-section py-20" id="achievements">
          <SectionHeader 
            title="Key Achievements" 
            subtitle="Milestones and impacts from my professional journey"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4"
          >
                                                   <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg
                              hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🪟</span>
                  <h3 className="text-xl font-semibold text-gray-800">Virtual Try-On App</h3>
                </div>
                <p className="text-gray-700">70% increase in user interactivity and purchasing confidence for window blinds visualization</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg
                              hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🤖</span>
                  <h3 className="text-xl font-semibold text-gray-800">SmartBuy AI Agent</h3>
                </div>
                <p className="text-gray-700">40% improvement in AI agent accuracy through RAG pipeline implementation</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg
                              hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🚂</span>
                  <h3 className="text-xl font-semibold text-gray-800">Railway ML System</h3>
                </div>
                <p className="text-gray-700">Mission-critical real-time anomaly detection system for equipment failure prediction</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg
                              hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🏦</span>
                  <h3 className="text-xl font-semibold text-gray-800">Auto Loan AI</h3>
                </div>
                <p className="text-gray-700">40% reduction in loan processing time using AWS Textract OCR and voice AI</p>
              </div>
          </MotionDiv>
        </section>

        {/* Research & Publications Section */}
        <section className="research-section py-20" id="research">
          <SectionHeader 
            title="Research & Publications" 
            subtitle="Academic contributions and technical insights"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Master&apos;s Thesis</h3>
                  <p className="text-purple-600 font-medium mb-2">Florida Institute of Technology</p>
                  <p className="text-gray-700 mb-4">
                    &ldquo;Advanced Machine Learning Techniques for Predictive Analytics in Industrial IoT Systems&rdquo;
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">IoT</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Predictive Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical Blog Posts</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700">&ldquo;Building RAG Systems with Modern AI&rdquo;</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700">&ldquo;Real-time ML Systems Architecture&rdquo;</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700">&ldquo;Cloud-Native Data Engineering Patterns&rdquo;</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Conference Presentations</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700">AWS re:Invent 2024 - AI/ML Track</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700">Data Engineering Summit 2024</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700">Full-Stack Development Conference</span>
                  </li>
                </ul>
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* Case Studies Section */}
        <section className="case-studies-section py-20" id="case-studies">
          <SectionHeader 
            title="Case Studies" 
            subtitle="Detailed breakdown of major project implementations"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4 space-y-8"
          >
            {/* SmartBuy AI eCommerce Case Study */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🛒</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">SmartBuy AI eCommerce Platform</h3>
                    <p className="text-purple-600">Full-Stack AI Integration | 2024</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                    <div className="text-gray-600">AI Agent Accuracy Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
                    <div className="text-gray-600">Faster Product Discovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">5TB+</div>
                    <div className="text-gray-600">Data Processed Daily</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Technical Implementation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      RAG-powered AI agent using LangChain and OpenAI GPT-4
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Real-time product recommendations with Apache Kafka
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Microservices architecture with FastAPI and React
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      AWS deployment with auto-scaling and load balancing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Railway Predictive Maintenance Case Study */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🚂</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Railway Predictive Maintenance System</h3>
                    <p className="text-purple-600">Real-time ML System | 2024</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                    <div className="text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
                    <div className="text-gray-600">Maintenance Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-gray-600">Real-time Monitoring</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Technical Implementation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      TensorFlow-based anomaly detection with LSTM networks
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Apache Spark for real-time data processing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      AWS Lambda for serverless ML inference
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Real-time dashboards with WebSocket connections
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </MotionDiv>
        </section>

        <section className="tools-section py-20" id="tools">
                     <SectionHeader 
             title="Tools & Technologies" 
             subtitle="The tech stack I use to build robust full-stack and AI/ML solutions"
           />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                             <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg"
               >
                 <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                   <span className="text-2xl">⚛️</span>
                   Frontend Development
                 </h3>
                 <div className="space-y-3">
                   {toolsConfig.frontend.map((tool, index) => (
                     <div 
                       key={index}
                       className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                       <span className="text-gray-700">{tool.name}</span>
                     </div>
                   ))}
                 </div>
               </MotionDiv>

               <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg"
               >
                 <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                   <span className="text-2xl">🐍</span>
                   Backend Development
                 </h3>
                 <div className="space-y-3">
                   {toolsConfig.backend.map((tool, index) => (
                     <div 
                       key={index}
                       className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                       <span className="text-gray-700">{tool.name}</span>
                     </div>
                   ))}
                 </div>
               </MotionDiv>

               <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg"
               >
                 <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                   <span className="text-2xl">🧠</span>
                   AI/ML & Data
                 </h3>
                 <div className="space-y-3">
                   {toolsConfig.aiMl.map((tool, index) => (
                     <div 
                       key={index}
                       className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                       <span className="text-gray-700">{tool.name}</span>
                     </div>
                   ))}
                 </div>
               </MotionDiv>

               <MotionDiv
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6 }}
                 className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg"
               >
                 <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                   <span className="text-2xl">☁️</span>
                   Cloud & DevOps
                 </h3>
                 <div className="space-y-3">
                   {toolsConfig.cloudDevOps.map((tool, index) => (
                     <div 
                       key={index}
                       className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                     >
                       <span className="text-xl">{tool.icon}</span>
                       <span className="text-gray-700">{tool.name}</span>
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
                className="block bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">AWS Certified Solutions Architect – Associate</h3>
                <p className="text-gray-600 text-sm">Amazon Web Services</p>
                <div className="mt-3 flex items-center justify-center gap-2 text-purple-600 text-sm">
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
                className="block bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Cisco Certified Network Associate (CCNA)</h3>
                <p className="text-gray-600 text-sm">Cisco Systems</p>
                <div className="mt-3 flex items-center justify-center gap-2 text-purple-600 text-sm">
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
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ServiceNow Certified Application Developer</h3>
              <p className="text-gray-600 text-sm">ServiceNow</p>
              <div className="mt-3 text-purple-600 text-sm font-medium">Verified</div>
            </MotionDiv>

            {/* Oracle Certification */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🗄️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Oracle Database SQL Certified Associate</h3>
              <p className="text-gray-600 text-sm">Oracle Corporation</p>
              <div className="mt-3 text-purple-600 text-sm font-medium">Verified</div>
            </MotionDiv>

            {/* Google Cloud ML Engineer */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Cloud Professional ML Engineer</h3>
              <p className="text-gray-600 text-sm">Google Cloud</p>
              <div className="mt-3 text-purple-600 text-sm font-medium">In Progress</div>
            </MotionDiv>

            {/* Kubernetes Administrator */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kubernetes Administrator (CKA)</h3>
              <p className="text-gray-600 text-sm">Cloud Native Computing Foundation</p>
              <div className="mt-3 text-purple-600 text-sm font-medium">Planned</div>
            </MotionDiv>
          </MotionDiv>
        </section>

        {/* Speaking Engagements Section */}
        <section className="speaking-section py-20" id="speaking">
          <SectionHeader 
            title="Speaking & Events" 
            subtitle="Professional presentations and community engagement"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xl text-white">🎤</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">AWS re:Invent 2024</h3>
                    <p className="text-purple-600 text-sm">AI/ML Track Speaker</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  &ldquo;Building Production-Ready RAG Systems with AWS Bedrock and LangChain&rdquo;
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">RAG Systems</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">AWS Bedrock</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">LangChain</span>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-xl text-white">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Data Engineering Summit 2024</h3>
                    <p className="text-purple-600 text-sm">Featured Speaker</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  &ldquo;Real-time ML Systems: From Concept to Production at Scale&rdquo;
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Real-time ML</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Apache Spark</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Production</span>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-xl text-white">💻</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Full-Stack Development Conference</h3>
                    <p className="text-purple-600 text-sm">Panel Discussion</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  &ldquo;The Future of AI-Integrated Full-Stack Applications&rdquo;
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Full-Stack</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">AI Integration</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Future Tech</span>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xl text-white">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Tech Community Meetups</h3>
                    <p className="text-purple-600 text-sm">Regular Speaker</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  &ldquo;Building Scalable AI Solutions: Lessons from Production&rdquo;
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Community</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Best Practices</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Mentorship</span>
                </div>
              </div>
            </div>
          </MotionDiv>
        </section>

                 {/* Floating Action Buttons */}
         <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
           {/* Quick Contact Button */}
           <Link
             href="mailto:laharikarrothu@gmail.com"
             className="bg-green-600 text-white p-4 rounded-full shadow-lg
                      hover:bg-green-700 transition-all duration-300 flex items-center gap-2
                      hover:scale-105 backdrop-blur-sm group"
             title="Quick Contact"
           >
             <Mail className="w-5 h-5" />
             <span className="hidden group-hover:block text-sm font-medium">Contact</span>
           </Link>
           
           {/* Download Resume Button */}
           <a
             href="/Resume_LahariKarrotu.docx"
             download="Lahari_Karrotu_Full_Stack_AI_Engineer_Resume.docx"
             className="bg-purple-600 text-white p-4 rounded-full shadow-lg
                      hover:bg-purple-700 transition-all duration-300 flex items-center gap-2
                      hover:scale-105 backdrop-blur-sm group"
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