import './ShineBorder.css';
import { CSSProperties } from 'react';

interface Props {
  borderWidth?: number;
  duration?: number;
  className?: string;
}

export default function ShineBorder({ borderWidth = 1, duration = 6, className = '' }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`shine-border-el ${className}`}
      style={{ '--shine-dur': `${duration}s`, '--shine-bw': `${borderWidth}px` } as CSSProperties}
    />
  );
}
