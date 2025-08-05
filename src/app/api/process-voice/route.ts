import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as Blob;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // For demo purposes, we'll simulate different responses based on a random selection
    // In a real implementation, you would use Google Speech-to-Text API here
    const responses = [
      {
        transcript: "Tell me about your projects",
        response: "I've worked on several exciting projects! My most recent one is the Virtual Try-On Application for Blinds & Boundaries, which achieved a 70% increase in user interactivity. I also built SmartBuy AI eCommerce with RAG-powered AI agents, and a Railway Predictive Maintenance system using real-time ML. Would you like me to scroll to the projects section to show you more details?",
        action: { type: 'navigate', target: 'projects' }
      },
      {
        transcript: "What are your skills",
        response: "I specialize in Full-Stack AI Engineering with expertise in React, TypeScript, Python, FastAPI, Apache Spark, AWS, and Machine Learning. I have strong experience in building RAG systems, real-time ML pipelines, and cloud-native applications. Let me show you my skills section!",
        action: { type: 'navigate', target: 'skills' }
      },
      {
        transcript: "Show me your experience",
        response: "I have 4 years of experience in software engineering. Currently, I'm a Full Stack AI Engineer at Arkatech Solutions, previously worked as an AI/ML Full Stack Developer at Anguliyam, and have experience at Cognizant and EPAM Systems. I'll navigate to my experience page for you.",
        action: { type: 'navigate', target: '/experience' }
      },
      {
        transcript: "Download your resume",
        response: "I'll open my resume for you to download. It contains my full professional background, skills, and project details.",
        action: { type: 'download', target: 'resume' }
      },
      {
        transcript: "Tell me about yourself",
        response: "I'm a Full Stack AI Engineer with 4 years of experience building scalable, AI-powered applications. I specialize in data engineering, machine learning, and full-stack development. I love solving complex problems and creating innovative solutions that make a real impact.",
        action: null
      },
      {
        transcript: "What certifications do you have",
        response: "I hold several important certifications including AWS Certified Solutions Architect Associate and Cisco CCNA. These demonstrate my expertise in cloud architecture and networking. Let me show you my certifications section!",
        action: { type: 'navigate', target: 'certifications' }
      }
    ];

    // Randomly select a response for demo purposes
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return NextResponse.json({
      transcript: randomResponse.transcript,
      response: randomResponse.response,
      action: randomResponse.action
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 