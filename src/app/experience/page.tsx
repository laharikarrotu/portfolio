'use client';

import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';


export default function ExperiencePage() {
  const experiences = [{
    title: "Full Stack AI Engineer",
    company: "Arkatech Solutions",
    location: "Remote",
    period: "May 2025 – Present",
    achievements: [
      "Building SmartBuy eCommerce Platform with React frontend and FastAPI backend, featuring AI-powered product recommendations",
      "Developing Auto Loan AI Plugin using AWS Textract OCR and voice assistants, reducing processing time by 40%",
      "Implementing infrastructure automation with Terraform, cutting deployment cycles by 40%",
      "Integrating AWS Lambda and Gemini API for intelligent automation and cost optimization",
      "Designing scalable microservices architecture for high-performance applications"
    ]
  },
  {
    title: "AI/ML Full Stack Developer",
    company: "Anguliyam",
    location: "Atlanta",
    period: "August 2024 – May 2025",
    achievements: [
      "Developed Railway Predictive Maintenance system using TensorFlow, reducing equipment downtime by 30%",
      "Created real-time monitoring dashboards with React for system analytics and alert management",
      "Integrated LLM APIs for voice-powered fitness app recommendations and navigation",
      "Built proprietary enterprise applications with advanced AI capabilities and computer vision",
      "Implemented voice navigation systems using Google Cloud Speech and AI models"
    ]
  },
  {
    title: "Big Data Engineer",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "January 2022 – August 2022",
    achievements: [
      "Built ETL pipelines processing 5TB+ monthly data using Apache Spark and Kafka",
      "Reduced query latency by 30% through SQL/NoSQL database tuning and optimization",
      "Developed Java and Python APIs supporting 15+ projects with scalable architecture",
      "Implemented data quality frameworks and automated testing for production pipelines",
      "Designed and optimized data warehouse solutions using AWS Redshift and S3"
    ]
  },
  {
    title: "Data Analyst",
    company: "EPAM Systems",
    location: "Hyderabad, India",
    period: "December 2020 – March 2021",
    achievements: [
      "Reduced data processing time by 30% through development of Data Ingestion framework in Python",
      "Configured AWS Data Pipeline for efficient data loading from S3 to Redshift",
      "Utilized AWS EMR for large-scale data transformations between S3 and DynamoDB",
      "Automated workflows using Apache Airflow and shell scripting for production execution",
      "Developed Spark Python modules for machine learning and predictive analytics"
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
               Looking for a Full Stack AI Engineer?
             </h2>
             <p className="text-gray-600 mb-4">
               I&apos;m available for freelance projects and full-time opportunities in AI/ML and full-stack development.
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