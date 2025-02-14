'use client';
import { useState, useRef } from 'react';
import { Mic, MicOff, X, Loader2 } from 'lucide-react';
import { MotionDiv } from './MotionDiv';

// Add type for assistant response
interface AssistantResponse {
  transcript: string;
  response: string;
  action?: {
    type: string;
    target: string;
  };
}

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        await processAudioWithAPI(audioBlob);
      };

      mediaRecorder.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setResponse('Error accessing microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isListening) {
      mediaRecorderRef.current.stop();
      setIsListening(false);
    }
  };

  const processAudioWithAPI = async (audioBlob: Blob) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);

      const response = await fetch('/api/process-voice', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      handleAssistantResponse(data);
    } catch (error) {
      console.error('Error processing audio:', error);
      setResponse('Sorry, I had trouble processing that request.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAssistantResponse = (data: AssistantResponse) => {
    setTranscript(data.transcript);
    setResponse(data.response);
    
    if (data.action) {
      switch (data.action.type) {
        case 'navigate':
          document.getElementById(data.action.target)?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'download':
          window.open('/resume.pdf', '_blank');
          break;
      }
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
        <Mic className="w-6 h-6" />
      </button>

      {/* Voice Assistant Modal */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 dark:bg-black/70" 
            onClick={() => setIsOpen(false)} 
          />
          <MotionDiv
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                      w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700
                        dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Voice Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try saying &quot;Tell me about your projects&quot; or &quot;Show me your skills&quot;
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={isListening ? stopRecording : startRecording}
                disabled={isLoading}
                className={`p-4 rounded-full ${
                  isListening ? 'bg-red-500' : 'bg-purple-600'
                } text-white shadow-lg hover:scale-110 transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <Loader2 className="w-8 h-8 animate-spin" />
                ) : isListening ? (
                  <MicOff className="w-8 h-8" />
                ) : (
                  <Mic className="w-8 h-8" />
                )}
              </button>

              {transcript && (
                <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">You said:</p>
                  <p className="text-gray-700 dark:text-gray-200">{transcript}</p>
                </div>
              )}

              {response && (
                <div className="w-full bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <p className="text-sm text-purple-500 dark:text-purple-300">Assistant:</p>
                  <p className="text-gray-700 dark:text-gray-200">{response}</p>
                </div>
              )}
            </div>
          </MotionDiv>
        </>
      )}
    </>
  );
};

export default VoiceAssistant; 