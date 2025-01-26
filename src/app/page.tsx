import Image from 'next/image';
import Link from 'next/link';
import { Database, Cloud, Terminal } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Database className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Data Engineering",
      description: "ETL pipeline development, data warehouse design, and optimization using AWS services."
    },
    {
      icon: <Cloud className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Cloud Architecture",
      description: "Design and implementation of scalable cloud solutions using AWS."
    },
    {
      icon: <Terminal className="w-8 h-8 mb-4 text-blue-600" />,
      title: "API Development",
      description: "Building secure and efficient RESTful APIs using Python and FastAPI."
    }
  ];

  const skills = [
    "AWS Services",
    "Data Engineering",
    "Python",
    "ETL Pipeline",
    "SQL",
    "Databricks",
    "Machine Learning",
    "Data Visualization"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 h-[500px]" />
        
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-20 pb-12">
              <div className="text-center space-y-8">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                       src="https://avatars.githubusercontent.com/laharikarrotu"
                       alt="Lahari Karrotu"
                       fill
                       sizes="160px"
                       className="rounded-full object-cover"
                       priority
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Lahari Karrotu</h1>
                  <p className="mt-2 text-xl text-gray-600">Data Engineer & Cloud Specialist</p>
                </div>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  Over 3 years of expertise in Data Engineering and Data Warehousing, delivering robust and scalable data solutions.
                  Specializing in AWS cloud architecture, ETL pipeline development, and data optimization.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Hire Me
                  </Link>
                  <Link
                    href="/about"
                    className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s work together to build scalable data solutions for your business
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}