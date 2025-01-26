import { Calendar, MapPin } from 'lucide-react';

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "Anguliyam",
      location: "Atlanta",
      period: "August 2024 – Present",
      achievements: [
        "Developed and deployed AI-powered voice assistants using GPT-based NLP models",
        "Engineered scalable data pipelines integrating AWS S3 and Redshift",
        "Designed and deployed serverless microservices using AWS Lambda",
        "Built custom APIs for secure communication between data processing systems",
        "Implemented cost optimization strategies in AWS environments"
      ]
    },
    {
      title: "Data Engineering Intern",
      company: "Cognizant",
      location: "Hyderabad, India",
      period: "2022–2023",
      achievements: [
        "Designed and implemented ETL pipelines using AWS services",
        "Integrated BI tools for visualizing key business metrics",
        "Optimized Redshift performance with complex SQL queries",
        "Generated and implemented SQL scripts for database changes",
        "Created new FACT and Dimension Tables for existing Models"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "EPAM Solutions",
      location: "Remote, India",
      period: "2021–2022",
      achievements: [
        "Reduced data processing time by 30% through Data Ingestion framework",
        "Configured AWS Data Pipeline for S3 to Redshift data loading",
        "Utilized AWS EMR for large data transformations",
        "Automated scripts using Apache Airflow and shell scripting",
        "Developed Spark Python modules for machine learning"
      ]
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h1>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative border-l-2 border-gray-200 pl-8 pb-8"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{exp.title}</h2>
                    <h3 className="text-lg text-gray-700">{exp.company}</h3>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}