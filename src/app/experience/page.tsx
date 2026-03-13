'use client';

import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';


export default function ExperiencePage() {
  const experiences = [{
    title: "Software Engineer",
    company: "Oracle",
    location: "Remote",
    period: "May 2025 – Present",
    achievements: [
      "Building Java REST APIs on Oracle Cloud Infrastructure for enterprise SaaS clients in healthcare and finance, handling high request volume under strict uptime and compliance SLAs",
      "Resolved a production SQL bottleneck on Oracle DB 23ai under concurrent load by analyzing execution plans, restructuring queries, and adding a composite index, reducing response time by 60%+",
      "Automated a manual data-load workflow with Python on OCI, eliminating recurring engineer intervention and reducing weekly operational overhead to near zero",
      "Maintaining CI/CD quality gates in Jenkins, writing JUnit test coverage, and consistently shipping sprint work with zero rollbacks"
    ]
  },
  {
    title: "Software Engineer — AI & Full-Stack Systems",
    company: "Anguliyam",
    location: "Remote",
    period: "Jun 2024 – Apr 2025",
    achievements: [
      "Designed and deployed multi-agent orchestration systems using LangGraph and CrewAI, cutting manual processing time by 70% for document-heavy workflows",
      "Built production RAG pipelines with hybrid retrieval (dense vector + keyword search), improving answer relevance by 40% over baseline",
      "Implemented human-in-the-loop governance with approval gates and audit logging for sensitive enterprise workflows",
      "Integrated agents with external tools, CRMs, and voice infrastructure for document ingestion, downstream automation, and real-world task execution"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Adobe",
    location: "Remote",
    period: "Jan 2022 – Aug 2022",
    achievements: [
      "Built React and TypeScript UI components for Adobe Experience Cloud, delivering accessible interfaces in Adobe's design system",
      "Integrated Adobe Experience Platform REST APIs into frontend components with graceful handling for partial failures and degraded data states",
      "Wrote Jest and React Testing Library coverage for critical flows, catching a regression and lifting a module from 0% to 91% test coverage",
      "Contributed to design and peer code reviews in 2-week Agile sprints, documenting decisions across a 20+ engineer team"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "EPAM Systems",
    location: "Hybrid",
    period: "Dec 2020 – Mar 2021",
    achievements: [
      "Built Python and Java ETL modules for client-facing data engineering work with unit tests and documentation under EPAM engineering standards",
      "Wrote SQL for extraction, transformation, and reporting to support downstream analytics and financial reporting",
      "Delivered sprint work on schedule in a global team using JIRA, Git branching, standups, retrospectives, and peer review practices"
    ]
  }
];

     return (
     <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 min-h-screen transition-all duration-500">
       <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
         <div className="mb-8">
           <Link
             href="/"
             className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 
                       transition-colors duration-300 hover:translate-x-[-4px]"
           >
             <ArrowLeft className="w-5 h-5" />
             <span>Back to Home</span>
           </Link>
         </div>
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
                     <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
             4 companies, real production systems, measurable impact
           </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative border-l-2 border-gradient pl-8 pb-8 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {exp.title}
                    </h2>
                    <h3 className="text-lg text-gray-700">{exp.company}</h3>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <div className="flex items-center text-gray-600 mb-1 hover:text-blue-600 transition-colors">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 stagger-animation">
                  {exp.achievements.map((achievement, i) => (
                    <li 
                      key={i} 
                      className="flex items-start transform hover:translate-x-2 transition-all duration-300"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600 hover:text-gray-900 transition-colors">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                         <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
               Want to work together?
             </h2>
             <p className="text-gray-600 mb-4">
               I&apos;m always open to interesting roles in Software Engineering, Backend, or AI/ML. Let&apos;s talk.
             </p>
                         <Link
               href="/#contact"
               className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
             >
               Get in Touch
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}