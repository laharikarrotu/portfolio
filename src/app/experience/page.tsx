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
      "Work on provider credentialing system for Oracle Health integrating with hospital EHR systems",
      "Built REST API endpoints using Java Spring Boot processing HL7/FHIR messages for credential verification",
      "Implemented OAuth2 authentication for secure data exchange with external healthcare providers",
      "Debugged production issue where credential verification API was failing intermittently due to database connection timeouts—added retry logic with exponential backoff and connection pooling, improving success rate from 87% to 98% and reducing average verification turnaround from 48 hours to 4 hours",
      "Optimized slow Oracle Database query loading provider dashboard analytics using EXPLAIN PLAN—added composite index on (provider_id, status, last_updated), dropping query execution time from 6s to 2s",
      "Set up CI/CD pipeline with Jenkins deploying microservices to Oracle Cloud Infrastructure (OCI)—configured Liquibase database migration scripts, automated API testing, and Oracle APM monitoring"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Anguliyam AI Solutions",
    location: "Atlanta",
    period: "June 2024 – May 2025",
    achievements: [
      "Built and shipped VoiceNav Assistant (event-driven microservices) for visually impaired users—integrated Google Speech-to-Text + Porcupine wake-word detection",
      "Deployed on Azure App Service serving 200+ beta testers",
      "Reduced API response time from 3s to 800ms using Redis caching keyed by audio hash (65% hit rate)",
      "Implemented JWT auth with role-based access control—bcrypt password hashing, httpOnly cookies to prevent XSS"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Adobe Creative Cloud",
    location: "India",
    period: "January 2022 – August 2022",
    achievements: [
      "Worked on Adobe Express web application fixing bugs and implementing new UI features using React + TypeScript",
      "Refactored image loading components to use lazy loading with WebP format and fallbacks—reduced initial page load time from 4.2s to 2.8s",
      "Contributed to internal React component library used across Creative Cloud web apps—built reusable color picker with keyboard navigation and ARIA labels for accessibility",
      "Fixed Safari CSS rendering bugs in layer panel component",
      "Debugged production issue where undo/redo functionality broke on text editing—traced through Redux state to find race condition in action dispatchers, wrote Jest unit tests increasing canvas test coverage from 65% to 82%"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "EPAM Systems",
    location: "India",
    period: "December 2020 – March 2021",
    achievements: [
      "Worked on backend services for e-commerce client migrating customer data from MySQL to PostgreSQL",
      "Built Python ETL scripts with Pandas for data validation—caught 3,200 duplicate records before migration",
      "Optimized slow analytics API endpoint by adding database index after profiling query execution plan with EXPLAIN ANALYZE"
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
             A track record of delivering innovative full-stack and AI/ML solutions and driving operational efficiency
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
               Looking for a Software Engineer?
             </h2>
             <p className="text-gray-600 mb-4">
               Open to full-time roles in Software Engineering, Backend Development, and AI/ML Systems.
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