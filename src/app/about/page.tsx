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
              Software Engineer focused on backend systems and production AI applications. 
              I work on distributed services and LLM-powered systems that operate under 
              real-world constraints—latency, failures, observability, and scale. My 
              experience spans backend APIs, data pipelines, multimodal AI workflows, 
              and full-stack integration.
            </p>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              I'm interested in teams building reliable systems at scale, where correctness, 
              maintainability, and engineering judgment matter as much as model performance.
            </p>
            
            <div className="space-y-4 transform transition-all duration-500 hover:translate-x-2">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-3 stagger-animation">
                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-medium text-gray-900">Master's degree, Computer Science</h3>
                  <p className="text-gray-600">Florida Institute of Technology | Aug 2022 - May 2024</p>
                  <p className="text-gray-600">Grade: 3.6</p>
                  <p className="text-gray-600 text-sm mt-2">Master's in Computer Science with a focus on systems, data engineering, and applied AI.</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-medium text-gray-900">Bachelor's degree, Computer Science</h3>
                  <p className="text-gray-600">KL University | Aug 2018 - May 2022</p>
                  <p className="text-gray-600">Grade: 8.7</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Backend & Full-Stack', skills: 'React, Next.js, TypeScript, FastAPI, Node.js' },
                  { title: 'AI / ML & Agents', skills: 'LLMs, OpenAI API, LangChain, Vector DBs, Embeddings' },
                  { title: 'Data Engineering', skills: 'Apache Spark, Kafka, Airflow, Snowflake' },
                  { title: 'Cloud & Infrastructure', skills: 'AWS, Azure, Docker, Kubernetes, Terraform' }
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
                  'Built LLM-powered assistants with distributed inference and GPU orchestration (Ray, LangChain)',
                  'Developed multimodal AI pipelines combining image embeddings, text, and vector DBs (Milvus, Pinecone)',
                  'Implemented real-time monitoring, logging, and fault-tolerant pipelines for production AI workflows',
                  'Integrated AI APIs into React/Flask apps for scalable, low-latency full-stack deployment'
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