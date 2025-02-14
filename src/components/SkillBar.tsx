'use client';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar = ({ skill, percentage }: SkillBarProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: inView ? `${percentage}%` : '0%',
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar; 