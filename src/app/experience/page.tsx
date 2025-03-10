'use client';

import { Calendar, MapPin } from 'lucide-react';


export default function ExperiencePage() {
  const experiences = [{
    title: "Data Engineer Intern",
    company: "Anguliyam",
    location: "Atlanta",
    period: "August 2024 – Present",
    achievements: [
      "Developed and deployed AI-powered voice assistants using GPT-based NLP models for medical SOP form filling, streamlining automation and enhancing accuracy",
      "Engineered scalable data pipelines integrating AWS S3 and Redshift, automating data flow and enabling real-time reporting",
      "Designed and deployed serverless microservices using AWS Lambda, optimizing backend workflows and reducing response time by 30%",
      "Built custom APIs to support secure communication between data processing systems and application layers",
      "Implemented cost optimization strategies in AWS environments while maintaining high system availability"
    ]
  },
  {
    title: "Data Engineering Intern",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "2022–2023",
    achievements: [
      "Designed and implemented ETL pipelines using AWS services such as S3, Glue, and Redshift for efficient data processing",
      "Integrated BI tools like Tableau to visualize key business metrics and real-time analytics",
      "Optimized Redshift performance with complex SQL queries, improving query speed and reducing data retrieval times",
      "Generated and implemented SQL scripts for database changes including table updates and view creation",
      "Designed new FACT and Dimension Tables to enhance existing data models"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "EPAM Solutions",
    location: "Remote, India",
    period: "2021–2022",
    achievements: [
      "Reduced data processing time by 30% through development of Data Ingestion framework functionalities in Python",
      "Configured AWS Data Pipeline to load data efficiently from S3 to Redshift",
      "Utilized AWS EMR for large-scale data transformations between Amazon S3 and DynamoDB",
      "Automated scripts and workflows using Apache Airflow and shell scripting for daily production execution",
      "Developed Spark Python modules for machine learning and predictive analytics in Hadoop environments"
    ]
  }
];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 min-h-screen transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A track record of delivering innovative data solutions and driving operational efficiency
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
              Looking for a Data Engineering Expert?
            </h2>
            <p className="text-gray-600 mb-4">
              I&apos;m available for freelance projects and full-time opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}