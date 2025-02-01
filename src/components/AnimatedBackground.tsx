'use client';

import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="fixed inset-0 -z-10">
      <div className="code-rain">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="code-line"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.1
            }}
          >
            {'< / >'}
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
          />
        ))}
      </div>

      <div className="grid-pattern absolute inset-0 opacity-30" />
    </div>
  );
};

export default AnimatedBackground;