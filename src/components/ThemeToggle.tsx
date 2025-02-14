'use client';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { MotionDiv } from './MotionDiv';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setDarkMode(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="fixed top-6 right-6 z-[100]">
      <button
        onClick={toggleTheme}
        type="button"
        className="relative p-2 rounded-full 
                  bg-white/80 dark:bg-gray-800/80 
                  backdrop-blur-sm shadow-lg 
                  border border-purple-100 dark:border-purple-900
                  hover:scale-110 transition-all duration-300
                  hover:bg-white/90 dark:hover:bg-gray-700/80
                  cursor-pointer"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <MotionDiv
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-purple-600" />
          )}
        </MotionDiv>
      </button>
    </div>
  );
};

export default ThemeToggle; 