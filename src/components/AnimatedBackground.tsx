'use client';

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(249, 250, 251, 0.5) 0%, rgba(243, 244, 246, 0.3) 100%)',
        }}
      />
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.5) 0%, rgba(31, 41, 55, 0.3) 100%)',
        }}
      />

      {/* Professional geometric pattern overlay */}
      <div className="absolute inset-0" style={{ opacity: 0.15 }}>
        <svg className="absolute inset-0 w-full h-full">
          {/* Large rotating hexagons */}
          <g style={{ animation: 'spin 30s linear infinite', transformOrigin: '50% 50%' }}>
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="none"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
              transform="translate(20%, 20%) scale(3)"
            />
            <polygon
              points="50,15 80,30 80,70 50,85 20,70 20,30"
              fill="none"
              stroke="rgba(96, 165, 250, 0.15)"
              strokeWidth="0.8"
              transform="translate(20%, 20%) scale(2.5)"
            />
          </g>
          
          {/* Counter-rotating triangles */}
          <g style={{ animation: 'spin-reverse 25s linear infinite', transformOrigin: '50% 50%' }}>
            <polygon
              points="50,10 85,70 15,70"
              fill="none"
              stroke="rgba(59, 130, 246, 0.18)"
              strokeWidth="1"
              transform="translate(80%, 30%) scale(2.5)"
            />
            <polygon
              points="50,15 75,65 25,65"
              fill="none"
              stroke="rgba(96, 165, 250, 0.12)"
              strokeWidth="0.8"
              transform="translate(80%, 30%) scale(2)"
            />
          </g>
          
          {/* Rotating circles with dashes */}
          <circle
            cx="15%"
            cy="70%"
            r="15%"
            fill="none"
            stroke="rgba(156, 163, 175, 0.1)"
            strokeWidth="1"
            strokeDasharray="6 6"
            style={{ animation: 'spin 35s linear infinite', transformOrigin: '15% 70%' }}
          />
          <circle
            cx="85%"
            cy="80%"
            r="12%"
            fill="none"
            stroke="rgba(59, 130, 246, 0.12)"
            strokeWidth="1"
            strokeDasharray="4 4"
            style={{ animation: 'spin-reverse 28s linear infinite', transformOrigin: '85% 80%' }}
          />
          
          {/* Additional geometric elements */}
          <g style={{ animation: 'spin 40s linear infinite', transformOrigin: '70% 20%' }}>
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="none"
              stroke="rgba(96, 165, 250, 0.1)"
              strokeWidth="0.8"
              transform="translate(70%, 20%) scale(2)"
            />
          </g>
          
          <g style={{ animation: 'spin-reverse 32s linear infinite', transformOrigin: '30% 80%' }}>
            <polygon
              points="50,10 85,70 15,70"
              fill="none"
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="1"
              transform="translate(30%, 80%) scale(2.2)"
            />
          </g>
        </svg>
      </div>

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
