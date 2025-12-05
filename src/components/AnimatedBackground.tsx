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
    const lightModeColor = 'rgba(59, 130, 246, 0.8)'; // Blue
    const darkModeColor = 'rgba(96, 165, 250, 0.9)'; // Brighter blue for dark mode

    interface CodeParticle {
      text: string;
      angle: number; // Current angle in spiral
      distance: number; // Distance from center
      fontSize: number;
      opacity: number;
      speed: number; // Rotation speed
      spiralSpeed: number; // Speed of spiraling inward
    }

    const particles: CodeParticle[] = [];
    const particleCount = 120; // More particles for better effect

    // Initialize particles in spiral pattern
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const maxDistance = Math.max(canvas.width, canvas.height) * 0.8;
      particles.push({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        angle: angle,
        distance: Math.random() * maxDistance + 50, // Start at various distances
        fontSize: Math.random() * 6 + 10, // 10-16px
        opacity: Math.random() * 0.5 + 0.5, // 0.5-1.0
        speed: (Math.random() - 0.5) * 0.03 + 0.05, // Rotation speed
        spiralSpeed: Math.random() * 0.8 + 0.4, // Speed of spiraling inward
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update center if window resized
      const currentCenterX = canvas.width / 2;
      const currentCenterY = canvas.height / 2;

      // Check if dark mode
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const textColor = isDark ? darkModeColor : lightModeColor;

      // Extract RGB from color
      const colorMatch = textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const r = colorMatch ? parseInt(colorMatch[1]) : 59;
      const g = colorMatch ? parseInt(colorMatch[2]) : 130;
      const b = colorMatch ? parseInt(colorMatch[3]) : 246;
      const baseOpacity = colorMatch ? parseFloat(textColor.match(/,\s*([\d.]+)\)/)?.[1] || '0.8') : 0.8;

      // Draw and animate code snippets in spiral pattern
      particles.forEach((particle) => {
        // Update angle (rotation)
        particle.angle += particle.speed;

        // Spiral inward (decrease distance)
        particle.distance -= particle.spiralSpeed;

        // Reset particle if it gets too close to center (recycle it)
        if (particle.distance < 30) {
          particle.distance = Math.max(canvas.width, canvas.height) * 0.8;
          particle.angle = Math.random() * Math.PI * 2;
          particle.opacity = Math.random() * 0.5 + 0.5;
          particle.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }

        // Calculate position based on angle and distance
        const x = currentCenterX + Math.cos(particle.angle) * particle.distance;
        const y = currentCenterY + Math.sin(particle.angle) * particle.distance;

        // Increase opacity and size as it gets closer (like being pulled in)
        const distanceRatio = particle.distance / (Math.max(canvas.width, canvas.height) * 0.8);
        const currentOpacity = particle.opacity * (1 - distanceRatio * 0.4) * baseOpacity;
        const currentSize = particle.fontSize * (1.5 - distanceRatio * 0.5); // Gets bigger as it approaches

        // Draw code snippet
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(particle.angle + Math.PI / 2); // Rotate text along spiral
        
        // Set font and color
        ctx.font = `${currentSize}px 'Monaco', 'Menlo', 'Courier New', monospace`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Draw text with glow that increases as it gets closer
        ctx.shadowBlur = 15 * (1 - distanceRatio);
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.6})`;
        ctx.fillText(particle.text, 0, 0);
        
        ctx.restore();
      });

      // Draw black hole center with gradient
      const centerGradient = ctx.createRadialGradient(
        currentCenterX, currentCenterY, 0,
        currentCenterX, currentCenterY, 50
      );
      centerGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.3)`);
      centerGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.1)`);
      centerGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(currentCenterX, currentCenterY, 50, 0, Math.PI * 2);
      ctx.fill();

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
