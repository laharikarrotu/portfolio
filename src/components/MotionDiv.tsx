import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

type MotionDivProps = MotionProps & React.HTMLProps<HTMLDivElement>;

export const MotionDiv: React.FC<MotionDivProps> = (props) => {
  return <motion.div {...props} />;
}; 