'use client';
import { MotionDiv } from './MotionDiv';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay = 0 }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300"
    >
      {children}
    </MotionDiv>
  );
};

export default AnimatedCard; 