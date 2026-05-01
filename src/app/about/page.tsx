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
              Hey, I&apos;m Lahari. I work at Cigna on the backend for member-facing healthcare APIs — FHIR-shaped
              services, AWS serverless pieces, and the habits (incidents, reviews, policy) that keep regulated data
              inside the lines. I am most engaged where the spec is fuzzy and the data is not: serialization quirks,
              concurrency, infrastructure that only misbehaves under load.
            </p>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              On my own time I still build: vision and multimodal pipelines (HealthScan, Blinds &amp; Boundaries) where
              the model is only as good as the API and error handling around it. That is the same standard I want at
              work — integration, not hype.
            </p>

            <div className="space-y-4 transform transition-all duration-500 hover:translate-x-2">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-3 stagger-animation">
                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-medium text-gray-900">M.S. Computer Science — Systems, Data Engineering &amp; Applied AI</h3>
                  <p className="text-gray-600">Florida Institute of Technology · Aug 2022 – May 2024 · GPA 3.6 / 4.0</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-medium text-gray-900">B.Tech Computer Science</h3>
                  <p className="text-gray-600">KL University · Aug 2018 – May 2022 · 8.7 / 10</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Backend & APIs', skills: 'Java, Spring Boot, FastAPI, Golang, HAPI FHIR, REST' },
                  { title: 'Healthcare & compliance', skills: 'FHIR / HL7, OAuth 2.0, OIDC, HIPAA-aware design' },
                  { title: 'Languages', skills: 'Java, Python, Golang, TypeScript, SQL, JavaScript' },
                  { title: 'Cloud & infra', skills: 'AWS (Lambda, DynamoDB, S3, RDS, SQS), Terraform, CloudFormation, Docker, Azure' }
                ].map((competency, index) => (
                  <div
                    key={index}
                    className="space-y-2 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50/50"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <h3 className="font-medium text-gray-900">{competency.title}</h3>
                    <p className="text-gray-600 text-sm">{competency.skills}</p>
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
                <span>Open source &amp; projects</span>
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
                  'Cigna: FHIR R4 APIs at member scale, Golang PHI masking in API Gateway, AWS serverless (Terraform/CloudFormation), Splunk-led incident triage — login 5xx from 3.2% to under 0.5%',
                  'Zoho: JDBC DAL across 14 entities, auth + 2FA, MySQL optimization (~4.8s → <200ms page loads)',
                  'Projects: HealthScan (multimodal healthcare assistant), Blinds & Boundaries (Azure CV + try-on), SmartBuy v2, AI Resume Tailor',
                  'M.S. CS (Florida Tech) · AWS Solutions Architect · ServiceNow CSA · Cisco CCNA'
                ].map((highlight, index) => (
                  <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
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
