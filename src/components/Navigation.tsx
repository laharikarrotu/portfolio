'use client';
import { useState } from 'react';
import { Menu, X, ChevronDown, Home, Briefcase, Award, BookOpen, Mail } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from './MotionDiv';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Organized menu structure with categories
  const menuCategories = [
    {
      id: 'main',
      label: 'Main',
      icon: Home,
      items: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' }
      ]
    },
    {
      id: 'work',
      label: 'Work',
      icon: Briefcase,
      items: [
        { href: '#projects', label: 'Projects' },
        { href: '/experience', label: 'Experience' },
        { href: '#case-studies', label: 'Case Studies' }
      ]
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: Award,
      items: [
        { href: '#certifications', label: 'Certifications' },
        { href: '#social-proof', label: 'Recognition' },
        { href: '#testimonials', label: 'Testimonials' }
      ]
    },
    {
      id: 'knowledge',
      label: 'Knowledge',
      icon: BookOpen,
      items: [
        { href: '#research', label: 'Research' },
        { href: '#speaking', label: 'Speaking' }
      ]
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      items: [
        { href: '#contact', label: 'Get In Touch' },
        { href: '/messages', label: 'Messages' }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (sectionId.startsWith('/')) {
      // External link - navigate to page
      window.location.href = sectionId;
    } else {
      // Internal section - scroll to element
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = (categoryId: string) => {
    setActiveDropdown(activeDropdown === categoryId ? null : categoryId);
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
          <ul className="flex items-center gap-1">
            {menuCategories.map((category) => (
              <li key={category.id} className="relative">
                <button
                  onClick={() => toggleDropdown(category.id)}
                  onMouseEnter={() => setActiveDropdown(category.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="px-4 py-2 rounded-full text-gray-600 dark:text-gray-300 
                            hover:text-purple-600 dark:hover:text-purple-400 
                            hover:bg-white/50 dark:hover:bg-gray-700/50 
                            transition-all duration-300 flex items-center gap-1 group"
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === category.id ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === category.id && (
                    <MotionDiv
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(category.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 min-w-48 bg-white dark:bg-gray-800 
                                rounded-xl shadow-xl border border-purple-100 dark:border-purple-900 
                                backdrop-blur-sm overflow-hidden"
                    >
                      <div className="p-2">
                        {category.items.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className="w-full text-left px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300
                                      hover:bg-purple-50 dark:hover:bg-gray-700/50 
                                      hover:text-purple-600 dark:hover:text-purple-400
                                      transition-all duration-200 flex items-center gap-3"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </MotionDiv>
                  )}
                </AnimatePresence>
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
                  
                  {/* Mobile Menu Categories */}
                  <div className="space-y-6">
                    {menuCategories.map((category) => (
                      <div key={category.id}>
                        <div className="flex items-center gap-2 mb-3">
                          <category.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {category.label}
                          </h3>
                        </div>
                        <ul className="space-y-2 ml-7">
                          {category.items.map((item) => (
                            <li key={item.href}>
                              <button
                                onClick={() => scrollToSection(item.href)}
                                className="w-full text-left px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300
                                          hover:bg-purple-50 dark:hover:bg-gray-700/50 
                                          hover:text-purple-600 dark:hover:text-purple-400
                                          transition-all duration-300 text-sm"
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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