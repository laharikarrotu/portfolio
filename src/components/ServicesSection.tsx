import React from 'react';
import { Database, Cloud, Terminal, ChartBar, Code, Server } from 'lucide-react';

const services = [
  {
    icon: <Database className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Data Engineering",
    description:
      "ETL pipeline development, data warehouse design, and optimization using AWS services and modern data tools.",
  },
  {
    icon: <Cloud className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Cloud Architecture",
    description:
      "Design and implementation of scalable cloud solutions using AWS, including serverless architectures and microservices.",
  },
  {
    icon: <Terminal className="w-8 h-8 mb-4 text-blue-600" />,
    title: "API Development",
    description:
      "Building secure and efficient RESTful APIs using Python, FastAPI, and modern backend technologies.",
  },
  {
    icon: <ChartBar className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Data Visualization",
    description:
      "Creating interactive dashboards and reports using Tableau and Power BI for actionable insights.",
  },
  {
    icon: <Code className="w-8 h-8 mb-4 text-blue-600" />,
    title: "ML Pipeline Development",
    description:
      "Implementation and optimization of machine learning pipelines on AWS EC2 and integration with data workflows.",
  },
  {
    icon: <Server className="w-8 h-8 mb-4 text-blue-600" />,
    title: "DevOps Automation",
    description:
      "CI/CD pipeline setup, infrastructure as code, and workflow automation using modern DevOps tools.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}