import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

const RevealText = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  once = true
}: RevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isInView = useInView(ref as React.RefObject<Element>, { 
    once, 
    margin: "-50px"
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <div
      ref={ref}
      className={`reveal-fx ${isRevealed ? 'revealed' : ''} ${className}`}
      style={{
        '--transition-duration': `${duration}s`,
        '--transition-delay': `${delay}s`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

interface RevealParagraphProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

const RevealParagraph = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  stagger = 0.1,
  once = true
}: RevealParagraphProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isInView = useInView(ref as React.RefObject<Element>, { 
    once, 
    margin: "-50px"
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const lines = text.split('\n').filter(line => line.trim());
  
  return (
    <div
      ref={ref}
      className={`reveal-fx ${isRevealed ? 'revealed' : ''} ${className}`}
      style={{
        '--transition-duration': `${duration}s`,
        '--transition-delay': `${delay}s`
      } as React.CSSProperties}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          className={`reveal-fx-line ${isRevealed ? 'revealed' : ''}`}
          style={{
            '--transition-duration': `${duration * 0.6}s`,
            '--transition-delay': `${delay + (index * stagger)}s`
          } as React.CSSProperties}
        >
          <span className="mb-4 last:mb-0 block">
            {line}
          </span>
        </div>
      ))}
    </div>
  );
};

interface RevealHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const RevealHeading = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  once = true
}: RevealHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isInView = useInView(ref as React.RefObject<Element>, { 
    once, 
    margin: "-50px"
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <h1
      ref={ref}
      className={`reveal-fx ${isRevealed ? 'revealed' : ''} ${className}`}
      style={{
        '--transition-duration': `${duration}s`,
        '--transition-delay': `${delay}s`
      } as React.CSSProperties}
    >
      {children}
    </h1>
  );
};

export { RevealText, RevealParagraph, RevealHeading };
