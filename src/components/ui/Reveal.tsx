import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ANIMATION } from '@/constants';
import { cn } from '@/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const offsetMap = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const offset = offsetMap[direction];

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: ANIMATION.DURATION, delay, ease: ANIMATION.EASE }}
    >
      {children}
    </motion.div>
  );
}
