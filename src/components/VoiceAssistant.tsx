'use client';
import { useState, useRef } from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';
import { MotionDiv } from './MotionDiv';

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Pre-defined messages about your background and impact
  const messages = [
    {
      title: "About Me",
      text: "Hi! I'm Lahari Karrotu, a Software Engineer focused on backend systems and production AI applications. I work on distributed services and LLM-powered systems that operate under real-world constraints—latency, failures, observability, and scale. My experience spans backend APIs, data pipelines, multimodal AI workflows, and full-stack integration.",
      action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "My Experience",
      text: "I'm currently a Full-Stack AI Engineer at Arka Tech Solutions, where I build LLM-powered assistants with distributed inference and GPU orchestration. Previously at Anguliyam, I deployed LLM-driven voice workflows and built agent orchestration frameworks. I'm interested in teams building reliable systems at scale, where correctness, maintainability, and engineering judgment matter as much as model performance.",
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "Technical Expertise",
      text: "I bring expertise in React, Next.js, TypeScript, Python, FastAPI, Node.js, and distributed systems. I have strong experience building production LLM applications, multimodal AI pipelines with vector databases, real-time monitoring, and fault-tolerant systems. I hold AWS Certified Solutions Architect and Cisco CCNA certifications.",
      action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "Why Work With Me",
      text: "I'm passionate about building reliable systems at scale. I prioritize correctness, maintainability, and engineering judgment alongside model performance. My experience spans the full stack—from backend APIs and data pipelines to AI workflows and production deployments. I'm interested in teams that value both technical depth and practical impact.",
      action: null
    },
    {
      title: "Let's Connect",
      text: "I'm always excited to discuss new opportunities in software engineering, backend systems, and production AI applications. Whether you're looking for a Software Engineer with expertise in distributed systems and LLM applications, or want to explore AI integration possibilities, I'd love to hear from you. Feel free to reach out through my contact form or email me directly at laharikarrotu24@gmail.com. Let's build something amazing together!",
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  const speak = (text: string) => {
    // Stop any current speech
    if (speechRef.current) {
      window.speechSynthesis.cancel();
    }

    // Create new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Set voice (prefer a female voice if available)
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Samantha') || 
      voice.name.includes('Google UK English Female') ||
      voice.name.includes('Microsoft Zira')
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentMessage(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentMessage('');
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentMessage('');
    };

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setCurrentMessage('');
  };

  const handleMessageClick = (message: typeof messages[0]) => {
    speak(message.text);
    if (message.action) {
      setTimeout(message.action, 1000); // Navigate after starting to speak
    }
  };

  return (
    <>
      {/* Voice Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-8 z-50 p-4 rounded-full bg-purple-600 text-white
                  shadow-lg hover:bg-purple-700 transition-all duration-300
                  hover:scale-110 dark:bg-purple-500 dark:hover:bg-purple-600"
        aria-label="Open voice assistant"
      >
        <Volume2 className="w-6 h-6" />
      </button>

      {/* Voice Assistant Modal */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 dark:bg-black/70" 
            onClick={() => {
              setIsOpen(false);
              stopSpeaking();
            }} 
          />
          <MotionDiv
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                      w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => {
                setIsOpen(false);
                stopSpeaking();
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700
                        dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                AI Voice Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Click any message to hear me speak about my background and impact
              </p>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              {isSpeaking ? (
                <button
                  onClick={stopSpeaking}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 
                            transition-all duration-300 flex items-center gap-2"
                >
                  <VolumeX className="w-4 h-4" />
                  Stop Speaking
                </button>
              ) : (
                <button
                  onClick={() => speak("Hi! I'm Lahari Karrotu. Welcome to my portfolio! Click any message below to learn more about my background, impact, and how I can help your organization.")}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 
                            transition-all duration-300 flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  Welcome Message
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {messages.map((message, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleMessageClick(message)}
                    disabled={isSpeaking}
                    className="w-full text-left p-4 rounded-lg border border-purple-200 
                              hover:border-purple-400 hover:bg-purple-50 dark:border-purple-700 
                              dark:hover:border-purple-500 dark:hover:bg-gray-700/50
                              transition-all duration-300 disabled:opacity-50 
                              disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Volume2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {message.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {message.text}
                    </p>
                  </button>
                </MotionDiv>
              ))}
            </div>

            {/* Currently Speaking Indicator */}
            {isSpeaking && currentMessage && (
              <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Currently Speaking...
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  {currentMessage.substring(0, 100)}...
                </p>
              </MotionDiv>
            )}

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Powered by Web Speech API • Click messages to hear them spoken aloud
              </p>
            </div>
          </MotionDiv>
        </>
      )}
    </>
  );
};

export default VoiceAssistant; 