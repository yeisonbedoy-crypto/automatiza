import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedHeadingProps {
  text: string;
  initialDelay?: number;
  wordDelay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  highlights?: Record<string, string>;
  variant?: 'slide' | 'blur';
}

const MOTION_TAGS = {
  h1: motion.h1, h2: motion.h2, h3: motion.h3,
  h4: motion.h4, h5: motion.h5, h6: motion.h6,
  p: motion.p,   span: motion.span,
} as const;

function renderWithHighlights(line: string, highlights: Record<string, string>) {
  if (Object.keys(highlights).length === 0) return line;
  const parts = line.split(/(\s+)/);
  return parts.map((part, i) => {
    const color = highlights[part];
    return color
      ? <span key={i} style={{ color }}>{part}</span>
      : part;
  });
}

export default function AnimatedHeading({
  text,
  initialDelay = 200,
  wordDelay = 40,
  className = "",
  as: Component = 'h2',
  highlights = {},
  variant = 'slide',
}: AnimatedHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (variant === 'blur') {
    const MotionTag = MOTION_TAGS[Component];
    const lines = text.split('\n');
    return (
      <MotionTag
        ref={ref}
        className={className}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.5, delay: initialDelay / 1000, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'visible' }}
      >
        {lines.map((line, i) => (
          <span key={i} style={{ display: 'block' }}>
            {renderWithHighlights(line, highlights)}
          </span>
        ))}
      </MotionTag>
    );
  }

  const segments = text.split(/(\s+)/);

  return (
    <Component ref={ref} className={className}>
      {segments.map((segment, index) => {
        if (!segment.trim()) {
          return segment.includes('\n') ? <br key={index} /> : <span key={index}>{segment}</span>;
        }

        const wordIndex = segments.slice(0, index).filter(s => s.trim()).length;
        const delay = initialDelay + wordIndex * wordDelay;
        const highlightColor = highlights[segment];

        return (
          <span key={index} className="inline-flex overflow-hidden align-bottom pb-2 -mb-2">
            <motion.span
              initial={{ opacity: 0, y: "100%", rotate: 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: "100%", rotate: 2 }}
              transition={{
                duration: 0.8,
                delay: delay / 1000,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block origin-bottom-left"
              style={highlightColor ? { color: highlightColor } : undefined}
            >
              {segment}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
