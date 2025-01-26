import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
            <p className="text-lg text-gray-600">
              With over 3 years of expertise in Data Engineering and Data Warehousing, 
              I specialize in delivering robust and scalable data solutions that drive 
              business value. My journey in technology has been focused on building 
              efficient data infrastructures and implementing innovative solutions.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Education</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-900">Master of Science in Computer Science</h3>
                  <p className="text-gray-600">Florida Institute of Technology, Florida | 2024</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-600">KL University, India | 2022</p>
                  <p className="text-gray-600">Specialization: Big Data Analytics and Data Science</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Core Competencies</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Cloud Platforms</h3>
                  <p className="text-gray-600">AWS, Azure</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Data Processing</h3>
                  <p className="text-gray-600">ETL, Data Pipelines</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Programming</h3>
                  <p className="text-gray-600">Python, SQL, JavaScript</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Big Data</h3>
                  <p className="text-gray-600">Spark, Hadoop, Kafka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/workspace-placeholder.jpg"
                alt="Workspace"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Highlights</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Reduced data processing time by 30% through optimized pipelines</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Designed and implemented ETL pipelines using PySpark and AWS services</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Developed RESTful APIs with Python and FastAPI for secure data access</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Expertise in data visualization using Power BI and Tableau</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}