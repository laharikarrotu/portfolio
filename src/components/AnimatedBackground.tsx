'use client';

import React, { useEffect, useState, useRef } from 'react';

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets to display as particles
    const codeSnippets = [
      'const', 'function', '=>', '{}', '()', '[]', 'import', 'export',
      'async', 'await', 'return', 'if', 'else', 'for', 'while', 'class',
      'interface', 'type', 'let', 'var', 'null', 'undefined', 'true', 'false',
      'React', 'useState', 'useEffect', 'props', 'state', 'API', 'fetch',
      'try', 'catch', 'finally', 'throw', 'new', 'this', 'super',
      'extends', 'implements', 'public', 'private', 'static', 'void',
      '<div>', '</div>', '<span>', '</span>', 'className', 'onClick',
      'useCallback', 'useMemo', 'useRef', 'memo', 'forwardRef',
      'Promise', 'resolve', 'reject', 'then', 'catch', 'finally',
      'map', 'filter', 'reduce', 'forEach', 'find', 'some', 'every',
      'JSON', 'parse', 'stringify', 'localStorage', 'sessionStorage',
      'axios', 'fetch', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH',
      'CSS', 'HTML', 'JS', 'TS', 'TSX', 'JSX', 'npm', 'yarn',
      'git', 'commit', 'push', 'pull', 'branch', 'merge', 'PR',
      'Docker', 'K8s', 'AWS', 'Azure', 'GCP', 'CI/CD', 'DevOps',
      'SQL', 'NoSQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch',
      'Node', 'Express', 'FastAPI', 'Django', 'Flask', 'Spring',
      'TensorFlow', 'PyTorch', 'ML', 'AI', 'NLP', 'CV', 'RAG'
    ];

    // Color options - visible but not overwhelming
    const lightModeColor = 'rgba(59, 130, 246, 0.7)'; // Blue
    const darkModeColor = 'rgba(96, 165, 250, 0.8)'; // Brighter blue for dark mode

    interface CodeParticle {
      text: string;
      x: number;
      y: number;
      vx: number; // velocity x
      vy: number; // velocity y
      fontSize: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
    }

    const particles: CodeParticle[] = [];
    const particleCount = 80; // Good balance of visibility

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Slow horizontal movement
        vy: (Math.random() - 0.5) * 0.5, // Slow vertical movement
        fontSize: Math.random() * 8 + 10, // 10-18px
        opacity: Math.random() * 0.4 + 0.5, // 0.5-0.9
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if dark mode
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const textColor = isDark ? darkModeColor : lightModeColor;

      // Extract RGB from color
      const colorMatch = textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const r = colorMatch ? parseInt(colorMatch[1]) : 59;
      const g = colorMatch ? parseInt(colorMatch[2]) : 130;
      const b = colorMatch ? parseInt(colorMatch[3]) : 246;
      const baseOpacity = colorMatch ? parseFloat(textColor.match(/,\s*([\d.]+)\)/)?.[1] || '0.7') : 0.7;

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw code snippet
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Set font and color
        ctx.font = `${particle.fontSize}px 'Monaco', 'Menlo', 'Courier New', monospace`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity * baseOpacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Draw text with subtle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${particle.opacity * baseOpacity * 0.5})`;
        ctx.fillText(particle.text, 0, 0);
        
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background for readability */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
        }}
      />
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
        }}
      />

      {/* Animated code particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default AnimatedBackground;
