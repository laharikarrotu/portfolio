import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 min-h-screen transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Software Engineer at Oracle working on provider credentialing systems for Oracle Health.
              I build REST APIs with Java Spring Boot, optimize database queries, and deploy 
              microservices on Oracle Cloud Infrastructure. Previously interned at Adobe Creative Cloud 
              (React/TypeScript) and Anguliyam AI Solutions (voice assistants, Azure).
            </p>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              I focus on writing production-ready code with proper error handling, monitoring, 
              and automated testing. Comfortable working across the stack—from Spring Boot APIs 
              and Oracle Database to React frontends and CI/CD pipelines.
            </p>
            
            <div className="space-y-4 transform transition-all duration-500 hover:translate-x-2">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-3 stagger-animation">
                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-medium text-gray-900">Master&apos;s in Computer Science</h3>
                  <p className="text-gray-600">Florida Institute of Technology, Melbourne, FL (2024)</p>
                  <p className="text-gray-600 text-sm mt-2">Coursework: Machine Learning, Database Systems, Cloud Computing, Software Engineering, Algorithms & Data Structures</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-medium text-gray-900">Bachelor&apos;s in Computer Science</h3>
                  <p className="text-gray-600">KL University, India (2022)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Backend', skills: 'FastAPI, Spring Boot, Node.js, REST APIs' },
                  { title: 'Frontend', skills: 'React, Redux, HTML/CSS, Tailwind CSS' },
                  { title: 'Languages', skills: 'Python, Java, JavaScript, TypeScript, SQL' },
                  { title: 'Cloud & Tools', skills: 'Oracle Cloud (OCI), Azure, AWS, Docker, Jenkins, Git' }
                ].map((competency, index) => (
                  <div 
                    key={index}
                    className="space-y-2 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50/50"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <h3 className="font-medium text-gray-900">{competency.title}</h3>
                    <p className="text-gray-600">{competency.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
              <Image
                src="/workspace-placeholder.jpg"
                alt="Workspace"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                Professional Highlights
              </h2>
              <ul className="space-y-3 stagger-animation">
                {[
                  'Built REST APIs with Java Spring Boot processing HL7/FHIR messages for Oracle Health credentialing',
                  'Optimized Oracle Database queries (6s→2s) and fixed production API failures (87%→98% success rate)',
                  'Contributed to Adobe Creative Cloud React component library and improved page load by 33%',
                  'Shipped voice assistant for visually impaired users deployed on Azure serving 200+ beta testers'
                ].map((highlight, index) => (
                  <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}