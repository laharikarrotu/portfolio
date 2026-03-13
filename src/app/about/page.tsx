/* eslint-disable @next/next/no-img-element */

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
              Hey, I&apos;m Lahari. I&apos;m a software engineer currently at Oracle, where I build production Java
              services and REST APIs on OCI for enterprise SaaS use cases. My day-to-day work spans backend
              performance tuning, automation, and reliable delivery across fast sprint cycles.
            </p>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Outside work, I build agentic AI systems and full-stack products end-to-end. My projects cover
              multi-agent orchestration, production RAG pipelines, healthcare AI workflows, and multimodal
              shopping assistants shipped with practical cloud infrastructure.
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
                  { title: 'AI Systems', skills: 'LangGraph, CrewAI, LangChain, RAG, Vector Search' },
                  { title: 'Languages', skills: 'Python, Java, TypeScript, JavaScript, SQL' },
                  { title: 'Cloud & Infra', skills: 'OCI, AWS, GCP, Azure, Docker, Jenkins, GitHub Actions' }
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
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                GitHub Activity
              </h3>
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=laharikarrotu&theme=github-compact&area=true&hide_border=true&bg_color=ffffff&color=000000&line=4f46e5&point=24292e`}
                alt="GitHub Contribution Activity"
                className="w-full h-auto rounded"
                loading="lazy"
              />
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>12 public repositories</span>
                <a href="https://github.com/laharikarrotu" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  View on GitHub →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                Professional Highlights
              </h2>
              <ul className="space-y-3 stagger-animation">
                {[
                  'Oracle: production Java services on OCI, SQL optimization with 60%+ response-time reduction, and automated operational workflows',
                  'Anguliyam: multi-agent orchestration with LangGraph/CrewAI and enterprise RAG systems with 40% relevance gains',
                  'Adobe: React + TypeScript UI systems with API integrations and test coverage raised from 0% to 91%',
                  'Projects: HealthScan, Blinds & Boundaries, AI Resume Tailor, and SmartBuy v2 multimodal shopping agent',
                  'MS Computer Science (Florida Tech) · AWS Certified Solutions Architect'
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