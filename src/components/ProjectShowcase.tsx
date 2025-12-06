'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from './MotionDiv';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, TrendingUp, BarChart3 } from 'lucide-react';
import { Project, ProjectScreenshot } from '@/data/projects';

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.screenshots.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  const getScreenshotTypeIcon = (type: ProjectScreenshot['type']) => {
    switch (type) {
      case 'product': return '🖼️';
      case 'website': return '🌐';
      case 'performance': return '📊';
      case 'code': return '💻';
      case 'architecture': return '🏗️';
      case 'dashboard': return '📈';
      default: return '📷';
    }
  };

  const getMetricIcon = (icon?: string) => {
    if (icon) return icon;
    return '📊';
  };

  // Helper function to encode image URLs with spaces
  const encodeImageUrl = (url: string): string => {
    try {
      // Split the URL into parts
      const parts = url.split('/');
      // Encode only the filename (last part)
      const filename = parts[parts.length - 1];
      const encodedFilename = encodeURIComponent(filename);
      // Reconstruct the URL
      parts[parts.length - 1] = encodedFilename;
      return parts.join('/');
    } catch {
      return url;
    }
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
            {category !== 'All' && (
              <span className="ml-2 text-xs opacity-70">
                ({projects.filter(p => p.category === category).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
          <MotionDiv
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="group cursor-pointer will-change-transform"
          >
            <div 
              data-project-card
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden 
                        border border-gray-200 dark:border-gray-800
                        transition-all duration-200 h-full flex flex-col
                        hover:border-gray-400 dark:hover:border-gray-600
                        hover:shadow-xl dark:hover:shadow-2xl
                        cursor-pointer will-change-transform"
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-50 dark:bg-gray-800 group-hover:opacity-90 transition-opacity duration-300">
                {project.screenshots.length > 0 ? (
                  <Image
                    src={encodeImageUrl(project.screenshots[0].url)}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <span className="text-4xl opacity-50">📦</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500/90 text-white' :
                    project.status === 'Production' ? 'bg-blue-500/90 text-white' :
                    project.status === 'Completed' ? 'bg-gray-600/90 text-white' :
                    'bg-yellow-500/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 mb-3 inline-block">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Performance Metrics Visualization */}
                  {project.performanceMetrics && project.performanceMetrics.length > 0 && (
                    <div className="mb-3 space-y-2">
                      {project.performanceMetrics.slice(0, 2).map((metric, idx) => {
                        // Extract numeric value for visualization
                        const numericValue = metric.value.match(/(\d+)/)?.[1];
                        const percentage = numericValue ? Math.min(parseInt(numericValue), 100) : 0;
                        const showBar = metric.value.includes('%') || metric.value.includes('+') || numericValue;
                        
                        return (
                          <div key={idx} className="p-2.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="text-base">{metric.icon || '📊'}</span>
                                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                  {metric.label}
                                </span>
                              </div>
                              <span className="text-sm font-bold text-gray-900 dark:text-white">
                                {metric.value}
                              </span>
                            </div>
                            {showBar && (
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Top Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    className="flex-1 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-100 
                             transition-all duration-200 text-sm font-medium cursor-pointer"
                  >
                    View Details
                  </button>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded 
                             hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600
                             transition-all duration-200 flex items-center justify-center cursor-pointer"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded 
                               hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600
                               transition-all duration-200 flex items-center justify-center cursor-pointer"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
        </div>
      )}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {selectedProject.category} • {selectedProject.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === 'Live' ? 'bg-green-500 text-white' :
                      selectedProject.status === 'Production' ? 'bg-blue-500 text-white' :
                      selectedProject.status === 'Completed' ? 'bg-gray-600 text-white' :
                      'bg-yellow-500 text-white'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                {/* Screenshots Gallery */}
                {selectedProject.screenshots.length > 0 && (
                  <div className="mb-8">
                    <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 mb-4">
                      <Image
                        src={encodeImageUrl(selectedProject.screenshots[currentImageIndex].url)}
                        alt={selectedProject.screenshots[currentImageIndex].alt}
                        fill
                        className="object-contain"
                        unoptimized
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(selectedProject.screenshots[currentImageIndex].alt)}`;
                        }}
                      />
                      {selectedProject.screenshots.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full 
                                     hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full 
                                     hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                        {getScreenshotTypeIcon(selectedProject.screenshots[currentImageIndex].type)} {currentImageIndex + 1} / {selectedProject.screenshots.length}
                      </div>
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {selectedProject.screenshots[currentImageIndex].caption || selectedProject.screenshots[currentImageIndex].alt}
                    </p>
                    {/* Thumbnail Navigation */}
                    <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                      {selectedProject.screenshots.map((screenshot, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            idx === currentImageIndex 
                              ? 'border-gray-700 dark:border-gray-500 scale-110' 
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={encodeImageUrl(screenshot.url)}
                            alt={screenshot.alt}
                            fill
                            className="object-cover"
                            unoptimized
                            onError={(e) => {
                              e.currentTarget.src = `https://via.placeholder.com/80x80/6366f1/ffffff?text=${idx + 1}`;
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Problem Statement */}
                {selectedProject.problem && (
                  <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-r-lg">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-orange-500">🎯</span>
                      Problem Statement
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                )}

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">Overview</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Performance Metrics */}
                {selectedProject.performanceMetrics && selectedProject.performanceMetrics.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedProject.performanceMetrics.map((metric, idx) => (
                        <div 
                          key={idx}
                          className="bg-gray-50 dark:bg-gray-800 
                                   rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700"
                        >
                          <div className="text-2xl mb-2">{getMetricIcon(metric.icon)}</div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Code Snippets */}
                {selectedProject.codeSnippets && selectedProject.codeSnippets.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                      <span className="text-lg">💻</span>
                      Code Examples
                    </h3>
                    <div className="space-y-4">
                      {selectedProject.codeSnippets.map((snippet, idx) => (
                        <div key={idx} className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden border border-gray-700">
                          <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-400">{snippet.filename || `example.${snippet.language}`}</span>
                              <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-xs">
                                {snippet.language}
                              </span>
                            </div>
                          </div>
                          {snippet.description && (
                            <div className="px-4 py-2 bg-gray-800/50 dark:bg-gray-900/50 border-b border-gray-700">
                              <p className="text-sm text-gray-400">{snippet.description}</p>
                            </div>
                          )}
                          <pre className="p-4 overflow-x-auto">
                            <code className="text-sm text-gray-100 font-mono">
                              {snippet.code}
                            </code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    Impact & Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.impact.map((impact, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg 
                             hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 
                             flex items-center justify-center gap-2 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </Link>
                  {selectedProject.liveUrl && (
                    <Link
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg 
                               hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 
                               flex items-center justify-center gap-2 font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectShowcase;

