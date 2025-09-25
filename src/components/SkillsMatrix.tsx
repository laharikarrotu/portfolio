'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
  years: number;
}

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 5, category: 'frontend', years: 4 },
    { name: 'TypeScript', level: 5, category: 'frontend', years: 3 },
    { name: 'Next.js', level: 4, category: 'frontend', years: 2 },
    { name: 'Tailwind CSS', level: 4, category: 'frontend', years: 2 },
    { name: 'JavaScript', level: 5, category: 'frontend', years: 4 },
    
    // Backend
    { name: 'Python', level: 5, category: 'backend', years: 4 },
    { name: 'FastAPI', level: 4, category: 'backend', years: 2 },
    { name: 'Django', level: 3, category: 'backend', years: 2 },
    { name: 'Java', level: 4, category: 'backend', years: 3 },
    { name: 'Spring Boot', level: 3, category: 'backend', years: 2 },
    { name: 'Node.js', level: 4, category: 'backend', years: 3 },
    
    // AI/ML
    { name: 'TensorFlow', level: 4, category: 'ai-ml', years: 3 },
    { name: 'PyTorch', level: 3, category: 'ai-ml', years: 2 },
    { name: 'Scikit-learn', level: 4, category: 'ai-ml', years: 3 },
    { name: 'OpenAI API', level: 4, category: 'ai-ml', years: 2 },
    { name: 'LangChain', level: 4, category: 'ai-ml', years: 1 },
    { name: 'Computer Vision', level: 3, category: 'ai-ml', years: 2 },
    
    // Cloud
    { name: 'AWS', level: 4, category: 'cloud', years: 3 },
    { name: 'Azure', level: 4, category: 'cloud', years: 2 },
    { name: 'Docker', level: 4, category: 'cloud', years: 3 },
    { name: 'Kubernetes', level: 3, category: 'cloud', years: 2 },
    { name: 'Terraform', level: 3, category: 'cloud', years: 1 },
    { name: 'Lambda', level: 4, category: 'cloud', years: 2 },
    
    // Data
    { name: 'Apache Spark', level: 4, category: 'data', years: 3 },
    { name: 'Pandas', level: 5, category: 'data', years: 4 },
    { name: 'SQL', level: 4, category: 'data', years: 4 },
    { name: 'PostgreSQL', level: 4, category: 'data', years: 3 },
    { name: 'MongoDB', level: 3, category: 'data', years: 2 },
    { name: 'Kafka', level: 3, category: 'data', years: 2 },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', color: 'purple' },
    { id: 'frontend', name: 'Frontend', color: 'blue' },
    { id: 'backend', name: 'Backend', color: 'green' },
    { id: 'ai-ml', name: 'AI/ML', color: 'pink' },
    { id: 'cloud', category: 'Cloud', color: 'orange' },
    { id: 'data', name: 'Data', color: 'cyan' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level: number) => {
    if (level >= 4) return 'bg-green-500';
    if (level >= 3) return 'bg-yellow-500';
    if (level >= 2) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getLevelText = (level: number) => {
    if (level >= 4) return 'Expert';
    if (level >= 3) return 'Advanced';
    if (level >= 2) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-100 dark:border-purple-700 shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Interactive Skills Matrix</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Visual representation of my technical expertise across different domains
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-${category.color}-500 text-white`
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.years}y</span>
            </div>
            
            {/* Skill Level Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                <span>Level</span>
                <span>{getLevelText(skill.level)}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(skill.level / 5) * 100}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                >
                  <div className={`h-2 rounded-full ${getLevelColor(skill.level)}`} />
                </motion.div>
              </div>
            </div>
            
            {/* Skill Dots */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= skill.level 
                      ? getLevelColor(skill.level) 
                      : 'bg-gray-300 dark:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Proficiency Levels</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Expert (4-5)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Advanced (3-4)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Intermediate (2-3)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Beginner (1-2)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMatrix;
