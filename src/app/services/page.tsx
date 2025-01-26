import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Data Engineering Solutions",
      description: "Designing and implementing robust ETL pipelines, data warehouses, and data lakes using AWS services. Expertise in optimizing data processing workflows and ensuring data quality.",
      features: [
        "ETL Pipeline Development",
        "Data Warehouse Design",
        "Data Quality Management",
        "Performance Optimization"
      ]
    },
    {
      title: "Cloud Architecture",
      description: "Building scalable and cost-effective cloud solutions on AWS. Specializing in serverless architectures and microservices design for optimal performance and maintainability.",
      features: [
        "AWS Infrastructure Design",
        "Serverless Applications",
        "Microservices Architecture",
        "Cloud Cost Optimization"
      ]
    },
    {
      title: "Data Analytics & Visualization",
      description: "Creating insightful dashboards and reports using Power BI and Tableau. Transforming complex data into actionable business intelligence.",
      features: [
        "Custom Dashboard Development",
        "Real-time Analytics",
        "Business Intelligence Reports",
        "Data Storytelling"
      ]
    },
    {
      title: "Machine Learning Integration",
      description: "Implementing and optimizing machine learning pipelines on AWS EC2. Integrating ML models with existing data workflows for predictive analytics.",
      features: [
        "ML Pipeline Development",
        "Model Deployment",
        "Performance Tuning",
        "Predictive Analytics"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900">Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive data engineering and cloud solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Let&apos;s discuss how I can help you achieve your data engineering goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}