'use client';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { MotionDiv } from './MotionDiv';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

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

    // Add listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
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

  if (!mounted) return null;

  return (
    <div className="fixed sm:top-6 sm:right-6 bottom-24 right-4 z-[100] sm:bottom-auto">
      <button
        onClick={toggleTheme}
        type="button"
        className="relative p-2 sm:p-3 rounded-full 
                  bg-white/80 dark:bg-gray-800/80 
                  backdrop-blur-sm shadow-lg 
                  border border-purple-100 dark:border-purple-900
                  hover:scale-110 active:scale-95
                  transition-all duration-300
                  hover:bg-white/90 dark:hover:bg-gray-700/80
                  cursor-pointer
                  touch-manipulation"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <MotionDiv
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
          )}
        </MotionDiv>
      </button>
    </div>
  );
};

export default ThemeToggle; 