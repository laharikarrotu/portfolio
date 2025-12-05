'use client';

import { MotionDiv } from './MotionDiv';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: string;
  icon?: string;
}

interface SkillsDisplayProps {
  skills: Skill[];
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ skills }) => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <div className="space-y-12">
      {categories.map((category, catIndex) => {
        const categorySkills = skills.filter(s => s.category === category);
        
        return (
          <MotionDiv
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white capitalize">
              {category.replace('-', ' ')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (catIndex * 0.05) + (index * 0.03),
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2.5 
                                hover:border-gray-400 dark:hover:border-gray-600 
                                hover:shadow-md transition-all duration-300 cursor-default
                                flex items-center gap-2">
                    {skill.icon && (
                      <motion.span 
                        className="text-lg"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          delay: index * 0.1
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                    )}
                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </MotionDiv>
        );
      })}
    </div>
  );
};

export default SkillsDisplay;
