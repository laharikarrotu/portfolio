'use client';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import TypeWriter from '@/components/TypeWriter';
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import AnimatedCard from '@/components/AnimatedCard';
import { MotionDiv } from '@/components/MotionDiv';
import ThemeToggle from '@/components/ThemeToggle';
import VoiceAssistant from '@/components/VoiceAssistant';

const Home: React.FC = () => {
  const skills: string[] = [
    "ETL Pipeline Development",
    "Stream Processing",
    "Big Data Technologies",
    "AWS Services",
    "Python",
    "Apache Spark",
    "Databricks",
    "Data Architecture",
    "SQL",
    "Machine Learning",
    "Data Visualization",
    "Data Warehousing"
  ];

  const projects = [
    {
      title: "lahariKarrotu Portfolio",
      description: "Personal portfolio website built with Next.js, showcasing my data engineering projects and professional journey.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "https://github.com/laharikarrotu/lahariKarrotu",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio"]
    },
    {
      title: "AUTH0-Amplify-AWS",
      description: "Implementation of secure authentication using AUTH0 with AWS Amplify, demonstrating cloud security best practices.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      link: "https://github.com/laharikarrotu/AUTH0-Amplify-aws",
      tags: ["AWS Amplify", "AUTH0", "Security", "Cloud"]
    },
    {
      title: "Machine Learning Projects",
      description: "Collection of machine learning projects focusing on data analytics and predictive modeling.",
      imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      link: "https://github.com/laharikarrotu/Machine_learning",
      tags: ["Machine Learning", "Python", "Data Analytics", "AI"]
    },
    {
      title: "Real-time Data Pipeline",
      description: "Built an end-to-end ETL pipeline using Apache Kafka, Spark Streaming, and AWS services for real-time data processing. Handles 1M+ events per minute with fault tolerance.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "https://github.com/laharikarrotu/real-time-pipeline",
      tags: ["Apache Kafka", "Spark", "AWS", "Python"]
    },
    {
      title: "Data Lake Architecture",
      description: "Designed and implemented a data lake solution using AWS S3, Glue, and Athena. Includes automated data quality checks and governance frameworks.",
      imageUrl: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
      link: "https://github.com/laharikarrotu/data-lake-project",
      tags: ["AWS S3", "Glue", "Athena", "Data Governance"]
    },
    {
      title: "ML Pipeline Orchestration",
      description: "Developed an automated ML pipeline using Airflow, MLflow, and Docker for model training and deployment. Includes A/B testing capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
      link: "https://github.com/laharikarrotu/ml-pipeline",
      tags: ["Airflow", "MLflow", "Docker", "Python"]
    },
    {
      title: "Data Warehouse Optimization",
      description: "Optimized data warehouse performance using Snowflake, including query optimization and materialized views. Reduced processing costs by 40%.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://github.com/laharikarrotu/dw-optimization",
      tags: ["Snowflake", "SQL", "Performance Tuning"]
    },
    {
      title: "Streaming Analytics Dashboard",
      description: "Created a real-time analytics dashboard using Apache Kafka, Elasticsearch, and Kibana for monitoring streaming data metrics.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "https://github.com/laharikarrotu/streaming-analytics",
      tags: ["Kafka", "ELK Stack", "Real-time Analytics"]
    },
    {
      title: "Data Quality Framework",
      description: "Built a comprehensive data quality framework using Great Expectations and dbt, with automated testing and monitoring capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      link: "https://github.com/laharikarrotu/data-quality",
      tags: ["dbt", "Great Expectations", "Python"]
    },
    {
      title: "PetsmartAI",
      description: "Developed an AI-powered pet care assistant using GPT models and Next.js. Features personalized pet care recommendations, diet planning, and behavior analysis.",
      imageUrl: "https://images.unsplash.com/photo-1450778869180-41d0601e046e",
      link: "https://github.com/laharikarrotu/PetsmartAI",
      tags: ["AI/ML", "Next.js", "GPT", "TypeScript"]
    }
  ];

  // Add these tool configurations with their icons
  const toolsConfig = {
    dataProcessing: [
      { name: 'Apache Spark', icon: '🔥' },
      { name: 'Apache Kafka', icon: '📊' },
      { name: 'Apache Airflow', icon: '🔄' },
      { name: 'Databricks', icon: '⚡' },
      { name: 'Apache Hadoop', icon: '🐘' },
      { name: 'Apache NiFi', icon: '🔁' }
    ],
    cloudInfra: [
      { name: 'AWS S3', icon: '☁️' },
      { name: 'AWS Glue', icon: '🔧' },
      { name: 'AWS Redshift', icon: '💫' },
      { name: 'AWS Lambda', icon: 'λ' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⎈' }
    ],
    dataStorage: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Snowflake', icon: '❄️' },
      { name: 'Amazon DynamoDB', icon: '📦' },
      { name: 'Apache Cassandra', icon: '💾' },
      { name: 'Redis', icon: '🔴' }
    ],
    languagesTools: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '📝' },
      { name: 'dbt', icon: '🔨' },
      { name: 'Git', icon: '📚' },
      { name: 'Shell Scripting', icon: '💻' },
      { name: 'Terraform', icon: '🌍' }
    ]
  };

  return (
    <main className="gradient-background min-h-screen text-gray-800 relative">
      <ThemeToggle />
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
                    'Data Engineer',
                    'ETL Pipeline Developer',
                    'AWS Cloud Expert',
                    'Big Data Specialist'
                  ]} 
                />
              </div>

              <p className="text-gray-600 mb-8 max-w-2xl">
                Passionate Data Engineer with extensive experience in building and optimizing data pipelines, 
                implementing cloud-native ETL solutions, and driving data-driven decision making. 
                Currently pursuing MS in Computer Science at Florida Institute of Technology, 
                specializing in Big Data Analytics and Data Science.
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
                  href="mailto:laharikarrotu@gmail.com"
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
                  <span className="text-purple-600 font-semibold">Data Engineer</span>
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
              I am a Data Engineer with expertise in building scalable data solutions. With a strong foundation in AWS services,
              Python, and various data engineering tools, I specialize in creating efficient ETL pipelines and implementing
              robust data architectures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My experience includes working with large-scale data processing, machine learning implementations, and developing
              data visualization solutions that help businesses make informed decisions.
            </p>
          </div>
        </section>

        <section className="experience-section py-20 relative overflow-hidden">
          <SectionHeader 
            title="Professional Journey" 
            subtitle="Over 3 years of expertise in Data Engineering and Data Warehousing"
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
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Data Engineer Intern</h3>
                      <p className="text-gray-600 mb-4">Anguliyam, Atlanta | August 2024 – Present</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Developed AI-powered voice assistants using GPT models</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Engineered scalable AWS data pipelines</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Reduced operational costs by 40% through optimization</p>
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
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Data Engineering Intern</h3>
                      <p className="text-gray-600 mb-4">Cognizant, Hyderabad | 2022 – 2023</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Implemented ETL pipelines with AWS services</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Improved system performance by 20%</p>
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
                      <h3 className="text-xl font-bold text-purple-600 mb-2">Data Analyst Intern</h3>
                      <p className="text-gray-600 mb-4">EPAM Solutions, Remote | 2021 – 2022</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Reduced processing time by 30% with Python frameworks</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <p className="text-gray-700">Implemented ML models on AWS EC2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-white">📊</span>
                  </div>
                </MotionDiv>

                {/* Education */}
                <MotionDiv
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row-reverse items-center md:justify-between"
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
            subtitle="Specialized in modern data engineering technologies and cloud solutions"
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
        </section>

        <section className="projects-section py-20 overflow-hidden" id="projects">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="A showcase of my recent work in data engineering and cloud solutions"
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
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
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

        <section className="contact-section py-20" id="contact">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Let&apos;s Connect!
          </h2>
          <p className="mb-12 text-gray-600 text-center text-lg max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities, collaborating on projects, 
            or discussing data engineering challenges.
          </p>
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
              href="mailto:your.email@example.com" 
              className="group flex items-center gap-3 bg-white/50 px-8 py-4 rounded-xl hover:bg-white/70 
                        transition-all duration-300 backdrop-blur-sm border border-purple-100
                        hover:scale-105 shadow-lg hover:shadow-purple-200/50"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
              <span>Email</span>
            </Link>
          </div>
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
                <span className="text-3xl">🔄</span>
                <h3 className="text-xl font-semibold text-gray-800">ETL Optimization</h3>
              </div>
              <p className="text-gray-700">Reduced data processing time by 30% through optimized ETL pipeline development</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg
                            hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">📊</span>
                <h3 className="text-xl font-semibold text-gray-800">Big Data Processing</h3>
              </div>
              <p className="text-gray-700">Expertise in processing and analyzing 1TB+ daily data volumes</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg
                            hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">☁️</span>
                <h3 className="text-xl font-semibold text-gray-800">Cloud Infrastructure</h3>
              </div>
              <p className="text-gray-700">Proven track record in AWS cloud infrastructure optimization</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-purple-100 shadow-lg
                            hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🚀</span>
                <h3 className="text-xl font-semibold text-gray-800">Performance Tuning</h3>
              </div>
              <p className="text-gray-700">Improved system performance by 40% using advanced SQL optimization</p>
            </div>
          </MotionDiv>
        </section>

        <section className="tools-section py-20" id="tools">
          <SectionHeader 
            title="Tools & Technologies" 
            subtitle="The tech stack I use to build robust data solutions"
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
                  <span className="text-2xl">⚡</span>
                  Data Processing
                </h3>
                <div className="space-y-3">
                  {toolsConfig.dataProcessing.map((tool, index) => (
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
                  <span className="text-2xl">☁️</span>
                  Cloud & Infrastructure
                </h3>
                <div className="space-y-3">
                  {toolsConfig.cloudInfra.map((tool, index) => (
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
                  <span className="text-2xl">💾</span>
                  Data Storage
                </h3>
                <div className="space-y-3">
                  {toolsConfig.dataStorage.map((tool, index) => (
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
                  <span className="text-2xl">🛠️</span>
                  Languages & Tools
                </h3>
                <div className="space-y-3">
                  {toolsConfig.languagesTools.map((tool, index) => (
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

        {/* Add a Certifications Section */}
        <section className="certifications-section py-20" id="certifications">
          <SectionHeader 
            title="Certifications" 
            subtitle="Professional certifications and achievements"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
          >
            {[
              {
                name: "AWS Certified Solutions Architect",
                issuer: "Amazon Web Services",
                date: "2023",
                icon: "☁️"
              },
              {
                name: "Azure Data Engineer Associate",
                issuer: "Microsoft",
                date: "2023",
                icon: "📊"
              },
              {
                name: "Databricks Certified Associate",
                issuer: "Databricks",
                date: "2023",
                icon: "⚡"
              }
            ].map((cert, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg
                          hover:transform hover:scale-105 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{cert.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </section>

        {/* Add a Publications/Blog Section */}
        <section className="publications-section py-20" id="publications">
          <SectionHeader 
            title="Technical Writing" 
            subtitle="Articles and publications about data engineering and cloud technologies"
          />
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Building Scalable Data Pipelines with AWS",
                  description: "Learn how to architect and implement robust ETL pipelines using AWS services like Glue, Lambda, and S3. This comprehensive guide covers best practices, common pitfalls, and optimization techniques.",
                  link: "https://medium.com/@laharikarrotu/building-scalable-data-pipelines-aws-comprehensive-guide-123",
                  date: "March 2024",
                  readTime: "10 min read",
                  tags: ["AWS", "ETL", "Data Engineering"]
                },
                {
                  title: "Real-time Stream Processing: Apache Kafka vs. AWS Kinesis",
                  description: "A detailed comparison of two popular stream processing solutions. Explore the pros and cons of each platform, with real-world use cases and performance benchmarks.",
                  link: "https://medium.com/@laharikarrotu/kafka-vs-kinesis-stream-processing-comparison-456",
                  date: "February 2024",
                  readTime: "8 min read",
                  tags: ["Kafka", "Kinesis", "Stream Processing"]
                }
              ].map((article, index) => (
                <Link 
                  href={article.link}
                  key={index}
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg
                            hover:transform hover:scale-105 transition-all duration-300 block"
                >
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{article.title}</h3>
                  <p className="text-gray-700 mb-4">{article.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </MotionDiv>
        </section>

        {/* Update the Download Resume Button */}
        <div className="fixed bottom-24 right-8 z-50">
          <a
            href="/resume.pdf"
            download="Lahari_Karrotu_Resume.pdf"
            className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg
                      hover:bg-purple-700 transition-all duration-300 flex items-center gap-2
                      hover:scale-105 backdrop-blur-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download Resume</span>
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
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;