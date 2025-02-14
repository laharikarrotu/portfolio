'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

interface Message {
  text: string;
  isUser: boolean;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionResultList;
  [index: number]: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResult;
}

type SpeechRecognitionErrorEvent = {
  error: string;
  message: string;
} & Event;

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

interface IWindow extends Window {
  webkitSpeechRecognition: new () => ISpeechRecognition;
  SpeechRecognition: new () => ISpeechRecognition;
}

interface APIError {
  error: string;
  retryAfter?: number;
}

const VoiceChat = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [recognition, setRecognition] = useState<ISpeechRecognition | null>(null);

  const getAIResponse = useCallback(async (userMessage: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 429) {
          const errorData = data as APIError;
          setError(`Rate limit exceeded. ${errorData.retryAfter ? `Please try again in ${errorData.retryAfter} seconds.` : 'Please try again later.'}`);
          setTimeout(() => {
            setError('');
          }, (errorData.retryAfter || 60) * 1000);
        } else {
          setError((data as APIError).error || 'Failed to get AI response');
        }
        return null;
      }
      
      setError('');
      return data;
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to communicate with AI service');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const win = window as unknown as IWindow;
      const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = async (event: SpeechRecognitionEvent) => {
          const result = event.results[event.resultIndex][0];
          if (result) {
            const text = result.transcript;
            addMessage(text, true);
            await getAIResponse(text);
          }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error:', event.error);
          setError(`Speech recognition error: ${event.error}`);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        setRecognition(recognition);
      }
    }
  }, [getAIResponse]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, {
      text,
      isUser,
    }]);
  };

  useEffect(() => {
    if (messages && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.text) {
        getAIResponse(lastMessage.text);
      }
    }
  }, [messages, getAIResponse]);

  const toggleListening = () => {
    if (!recognition) {
      setError('Speech recognition is not supported');
      return;
    }

    if (!isListening) {
      recognition.start();
      setIsListening(true);
      setError(null);
    } else {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <Card className="fixed bottom-4 right-4 w-96 shadow-xl">
      <CardContent className="p-4">
        <div className="h-96 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center">
              <Loader2 className="animate-spin text-blue-600" />
            </div>
          )}
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <button
          onClick={toggleListening}
          className={`w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            isListening
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          disabled={!recognition}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5" />
              Stop Listening
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              Start Listening
            </>
          )}
        </button>

        {!recognition && (
          <p className="text-sm text-red-500 text-center mt-2">
            Speech recognition is not supported in this browser
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default VoiceChat;