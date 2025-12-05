'use client';
import { MotionDiv } from './MotionDiv';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
      )}
    </MotionDiv>
  );
};

export default SectionHeader; 