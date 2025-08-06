'use client';
import { useState, useEffect } from 'react';
import { Mail, User, Calendar, MessageSquare, ArrowLeft, Trash2, Eye } from 'lucide-react';
import { MotionDiv } from '@/components/MotionDiv';
import Link from 'next/link';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const MessagesPage = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulated messages for demo - replace with real data from your backend
  useEffect(() => {
    const demoMessages: ContactMessage[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Project Collaboration Opportunity',
        message: 'Hi Lahari, I came across your portfolio and was impressed by your AI/ML work. I have a project that could benefit from your expertise in RAG pipelines and MLOps. Would you be interested in discussing a potential collaboration?',
        timestamp: '2024-01-15T10:30:00Z',
        read: false
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah.j@techcorp.com',
        subject: 'Full-Stack Developer Position',
        message: 'Hello! We\'re looking for a Full-Stack AI Engineer at TechCorp. Your experience with React, Python, and AI systems would be a perfect fit. Are you currently open to new opportunities?',
        timestamp: '2024-01-14T15:45:00Z',
        read: true
      },
      {
        id: '3',
        name: 'Mike Chen',
        email: 'mike.chen@startup.io',
        subject: 'Consultation Request',
        message: 'I\'m building a startup focused on AI-powered e-commerce. Your SmartBuy project caught my attention. Would you be available for a consultation call to discuss implementation strategies?',
        timestamp: '2024-01-13T09:20:00Z',
        read: true
      }
    ];

    setMessages(demoMessages);
    setLoading(false);
  }, []);

  const markAsRead = (messageId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Messages</h1>
                <p className="text-gray-600">Contact form submissions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600">
                {unreadCount} unread
              </span>
            </div>
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">Inbox</h2>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    <Mail className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No messages yet</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => {
                        setSelectedMessage(message);
                        markAsRead(message.id);
                      }}
                      className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-purple-50 ${
                        selectedMessage?.id === message.id ? 'bg-purple-100' : ''
                      } ${!message.read ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-800 truncate">
                              {message.name}
                            </h3>
                            {!message.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm font-medium text-gray-700 truncate">
                            {message.subject}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(message.timestamp)}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteMessage(message.id);
                          }}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </MotionDiv>

          {/* Message Detail */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {selectedMessage ? (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedMessage.subject}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {selectedMessage.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {selectedMessage.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(selectedMessage.timestamp)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                      className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-700">Message</span>
                  </div>
                  <p className="text-gray-800 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Reply
                  </a>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg p-12 text-center">
                <Eye className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-medium text-gray-600 mb-2">
                  Select a message
                </h3>
                <p className="text-gray-500">
                  Choose a message from the inbox to view its details
                </p>
              </div>
            )}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage; 