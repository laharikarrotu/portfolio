'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from './MotionDiv';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 
                  backdrop-blur-sm shadow-lg border border-purple-100 dark:border-purple-900
                  hover:scale-110 transition-all duration-300 sm:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        ) : (
          <Menu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden sm:block">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg 
                      border border-purple-100 dark:border-purple-900 p-2">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 rounded-full text-gray-600 dark:text-gray-300 
                            hover:text-purple-600 dark:hover:text-purple-400 
                            hover:bg-white/50 dark:hover:bg-gray-700/50 
                            transition-all duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden"
            >
              <div 
                className="absolute inset-0" 
                onClick={() => setIsOpen(false)}
                role="button"
                tabIndex={0}
                aria-label="Close menu"
              />
            </MotionDiv>

            {/* Menu */}
            <MotionDiv
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 bottom-0 w-3/4 max-w-xs bg-white dark:bg-gray-800 
                        shadow-2xl z-50 sm:hidden"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                    Menu
                  </h2>
                  <ul className="space-y-4">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="w-full text-left px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300
                                    hover:bg-purple-50 dark:hover:bg-gray-700/50 
                                    hover:text-purple-600 dark:hover:text-purple-400
                                    transition-all duration-300"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 