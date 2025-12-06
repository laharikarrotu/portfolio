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
      "Built AI-powered virtual try-on platform using computer vision (OpenCV, TensorFlow) and 3D rendering (Three.js, WebGL) enabling real-time product visualization in customer spaces",
      "Developed automated measurement portal with dimension calculation and product customization features for eCommerce integration",
      "Implemented computer vision algorithms for window detection and room analysis achieving 90%+ accuracy in real-world scenarios",
      "Deployed scalable cloud architecture on Microsoft Azure with serverless functions processing high-resolution images in real-time",
      "Built full-stack application (React, TypeScript, FastAPI) with responsive design optimizing user engagement and conversion rates"
    ]
  },
  {
    title: "AI/ML Full Stack Developer",
    company: "Anguliyam",
    location: "Atlanta",
    period: "August 2024 – May 2025",
    achievements: [
      "Developed voice-assisted navigation agent using Google Cloud Speech API and OpenAI, enabling hands-free product discovery and conversational user interaction",
      "Built real-time ML system for predictive maintenance using TensorFlow LSTM models and Apache Spark processing sensor data streams",
      "Created React monitoring dashboards with WebSocket connections for real-time equipment health visualization and alert management",
      "Deployed ML models on AWS Lambda for serverless inference enabling scalable real-time predictions with low latency",
      "Implemented end-to-end ML pipeline from data ingestion to model deployment with automated monitoring and alerting"
    ]
  },
  {
    title: "Big Data Engineer (Internship)",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "January 2022 – August 2022",
    achievements: [
      "Built ETL pipelines (Apache Spark, Kafka) processing 5TB+ monthly data, improving data availability by 40%",
      "Optimized database queries reducing query latency by 30% through indexing and query tuning",
      "Developed REST APIs (Java, Python) supporting 15+ projects, handling 100K+ requests daily",
      "Implemented automated data quality checks reducing data errors by 50% in production pipelines",
      "Designed data warehouse architecture (AWS Redshift, S3) reducing query costs by 25%"
    ]
  },
  {
    title: "Data Analyst (Internship)",
    company: "EPAM Systems",
    location: "Hyderabad, India",
    period: "December 2020 – March 2021",
    achievements: [
      "Developed Python data ingestion framework reducing processing time by 30%, handling 1TB+ daily data",
      "Configured AWS Data Pipeline (S3 to Redshift) improving data load efficiency by 35%",
      "Built data transformation pipelines using AWS EMR processing 500GB+ datasets between S3 and DynamoDB",
      "Automated data workflows with Apache Airflow reducing manual intervention by 80%",
      "Developed Spark ML modules for predictive analytics, improving forecast accuracy by 20%"
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