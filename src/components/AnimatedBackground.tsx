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

    // Black hole center (center of screen)
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Single subtle color - using a soft blue
    const starColor = 'rgba(59, 130, 246, 0.5)'; // Subtle blue
    const darkStarColor = 'rgba(96, 165, 250, 0.6)'; // Slightly brighter for dark mode

    // Create stars/dots that will spiral into the black hole
    interface Star {
      angle: number; // Current angle in spiral
      distance: number; // Distance from center
      radius: number; // Star size
      opacity: number;
      speed: number; // Rotation speed
      spiralSpeed: number; // Speed of spiraling inward
    }

    const stars: Star[] = [];
    const starCount = 300; // More stars for better effect

    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const maxDistance = Math.max(canvas.width, canvas.height) * 0.8;
      stars.push({
        angle: angle,
        distance: Math.random() * maxDistance + 50, // Start at various distances
        radius: Math.random() * 1.5 + 0.5, // 0.5-2px
        opacity: Math.random() * 0.6 + 0.4, // 0.4-1.0
        speed: (Math.random() - 0.5) * 0.02 + 0.05, // Rotation speed
        spiralSpeed: Math.random() * 0.5 + 0.3, // Speed of spiraling inward
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016; // ~60fps

      // Update center if window resized
      const currentCenterX = canvas.width / 2;
      const currentCenterY = canvas.height / 2;

      // Check if dark mode
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const currentColor = isDark ? darkStarColor : starColor;

      // Extract RGB from color string
      const colorMatch = currentColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const r = colorMatch ? parseInt(colorMatch[1]) : 59;
      const g = colorMatch ? parseInt(colorMatch[2]) : 130;
      const b = colorMatch ? parseInt(colorMatch[3]) : 246;

      // Draw and animate stars in spiral pattern
      stars.forEach((star) => {
        // Update angle (rotation)
        star.angle += star.speed;

        // Spiral inward (decrease distance)
        star.distance -= star.spiralSpeed;

        // Reset star if it gets too close to center (recycle it)
        if (star.distance < 20) {
          star.distance = Math.max(canvas.width, canvas.height) * 0.8;
          star.angle = Math.random() * Math.PI * 2;
          star.opacity = Math.random() * 0.6 + 0.4;
        }

        // Calculate position based on angle and distance
        const x = currentCenterX + Math.cos(star.angle) * star.distance;
        const y = currentCenterY + Math.sin(star.angle) * star.distance;

        // Increase opacity as it gets closer (like being pulled in)
        const distanceRatio = star.distance / (Math.max(canvas.width, canvas.height) * 0.8);
        const currentOpacity = star.opacity * (1 - distanceRatio * 0.3);

        // Draw star
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow/trail for stars closer to center
        if (star.distance < 200) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, star.radius * 4);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.4})`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, star.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw subtle black hole center (optional - very subtle)
      const centerGradient = ctx.createRadialGradient(
        currentCenterX, currentCenterY, 0,
        currentCenterX, currentCenterY, 30
      );
      centerGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.1)`);
      centerGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(currentCenterX, currentCenterY, 30, 0, Math.PI * 2);
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

      {/* Animated black hole canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1 }}
      />
    </div>
  );
};

export default AnimatedBackground;
