'use client';

import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';


export default function ExperiencePage() {
  const experiences = [{
    title: "Software Engineer",
    company: "Oracle (via Arkatech Solutions)",
    location: "Remote",
    period: "May 2025 – Present",
    achievements: [
      "Building healthcare credentialing APIs with Java Spring Boot — processing HL7/FHIR messages for provider verification across hospital EHR systems",
      "Fixed intermittent API failures caused by DB connection timeouts: added retry logic + connection pooling → success rate 87% → 98%, turnaround 48h → 4h",
      "Optimized dashboard analytics query from 6s → 2s via EXPLAIN PLAN + composite index on (provider_id, status, last_updated)",
      "Set up CI/CD with Jenkins on Oracle Cloud (OCI) — Liquibase migrations, automated API tests, APM monitoring"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Anguliyam AI Solutions",
    location: "Atlanta",
    period: "June 2024 – May 2025",
    achievements: [
      "Shipped VoiceNav Assistant for visually impaired users — event-driven microservices with Google Speech-to-Text + Porcupine wake-word detection, deployed on Azure serving 200+ beta testers",
      "Cut API response time 3s → 800ms using Redis caching (65% hit rate) · JWT auth with role-based access"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Adobe Creative Cloud",
    location: "India",
    period: "January 2022 – August 2022",
    achievements: [
      "Adobe Express: React + TypeScript features, lazy loading with WebP → page load 4.2s → 2.8s",
      "Built reusable components for the Creative Cloud component library — color picker with keyboard nav + ARIA labels",
      "Traced a Redux race condition in undo/redo that nobody else could find, wrote Jest tests → coverage 65% → 82%"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "EPAM Systems",
    location: "India",
    period: "December 2020 – March 2021",
    achievements: [
      "MySQL → PostgreSQL data migration for e-commerce client: built Python ETL scripts with Pandas, caught 3,200 duplicates pre-migration",
      "Profiled slow analytics API with EXPLAIN ANALYZE and added the right index to fix it"
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