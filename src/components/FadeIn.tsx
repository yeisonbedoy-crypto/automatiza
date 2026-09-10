import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  key?: string | number;
  immediate?: boolean;
}

export default function FadeIn({ children, delay = 0, duration = 500, className = "", immediate = false }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={immediate || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      style={{ backdropFilter: 'inherit' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
