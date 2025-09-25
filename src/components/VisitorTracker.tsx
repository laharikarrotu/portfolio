'use client';
import { useEffect, useState } from 'react';

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  location?: string;
  ip?: string;
}

const VisitorTracker = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [recentVisitors, setRecentVisitors] = useState<VisitorData[]>([]);

  useEffect(() => {
    // Track page visit
    const trackVisit = async () => {
      const visitorData: VisitorData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
      };

      try {
        // Store in localStorage for demo purposes
        const existingVisitors = JSON.parse(localStorage.getItem('portfolioVisitors') || '[]');
        const newVisitors = [visitorData, ...existingVisitors].slice(0, 50); // Keep last 50 visits
        localStorage.setItem('portfolioVisitors', JSON.stringify(newVisitors));
        
        setVisitorCount(newVisitors.length);
        setRecentVisitors(newVisitors.slice(0, 10));
      } catch (error) {
        console.log('Visitor tracking error:', error);
      }
    };

    trackVisit();
  }, []);

  const getLocationFromReferrer = (referrer: string) => {
    if (referrer.includes('linkedin.com')) return 'LinkedIn';
    if (referrer.includes('github.com')) return 'GitHub';
    if (referrer.includes('google.com')) return 'Google Search';
    if (referrer.includes('indeed.com')) return 'Indeed';
    if (referrer.includes('glassdoor.com')) return 'Glassdoor';
    if (referrer === 'Direct') return 'Direct Visit';
    return 'Other';
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const isRecruiter = (userAgent: string, referrer: string) => {
    const recruiterKeywords = ['linkedin', 'indeed', 'glassdoor', 'ziprecruiter', 'monster'];
    const referrerLower = referrer.toLowerCase();
    const userAgentLower = userAgent.toLowerCase();
    
    return recruiterKeywords.some(keyword => 
      referrerLower.includes(keyword) || userAgentLower.includes(keyword)
    );
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-purple-100 dark:border-purple-700 p-4 max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Portfolio Analytics</h3>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Total Views:</span>
          <span className="font-semibold text-purple-600">{visitorCount}</span>
        </div>
        
        {recentVisitors.length > 0 && (
          <div className="mt-3">
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Visitors</h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {recentVisitors.slice(0, 5).map((visitor, index) => (
                <div key={index} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      isRecruiter(visitor.userAgent, visitor.referrer) ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {getLocationFromReferrer(visitor.referrer)}
                    </span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500 text-xs">
                    {formatTime(visitor.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Recruiter</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
            <span>Visitor</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorTracker;
