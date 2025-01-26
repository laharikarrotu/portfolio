import HomePage from '@/components/HomePage';
import ServicesSection from '@/components/ServicesSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 h-[500px]" />
        
        {/* Main Content */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-20 pb-12">
              {/* Profile Section */}
              <div className="text-center space-y-8">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/profile-placeholder.jpg"  // Add your profile image
                    alt="Lahari Karrotu"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Lahari Karrotu</h1>
                  <p className="mt-2 text-xl text-gray-600">Data Engineer & Cloud Specialist</p>
                </div>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  Experienced in building robust data solutions and scalable cloud architectures. 
                  Specializing in ETL pipeline development, data warehousing, and cloud-native applications.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Hire Me
                  </a>
                  <a
                    href="/about"
                    className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Key Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'AWS Services',
              'Data Engineering',
              'Python',
              'ETL Pipeline',
              'SQL',
              'Databricks',
              'Machine Learning',
              'Data Visualization'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}