'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { MotionDiv } from './MotionDiv';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <MotionDiv
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50"
    >
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                  shadow-lg border border-purple-100 dark:border-purple-900
                  hover:bg-white dark:hover:bg-gray-800 transition-all duration-300
                  group"
        aria-label="Toggle dark mode"
      >
        <MotionDiv
          initial={false}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-purple-600 group-hover:text-purple-500" />
          )}
        </MotionDiv>
      </button>
    </MotionDiv>
  );
};

export default DarkModeToggle; 