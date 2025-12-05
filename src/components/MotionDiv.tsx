import { motion } from 'framer-motion';
import type { HTMLAttributes } from 'react';
import type { MotionProps } from 'framer-motion';

type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv = ({ children, ...props }: MotionDivProps) => {
  return <motion.div {...props}>{children}</motion.div>;
}; 