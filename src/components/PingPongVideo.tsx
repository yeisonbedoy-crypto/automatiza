import { useEffect, useRef } from 'react';

interface PingPongVideoProps {
  src: string;
  playbackRate?: number;
  containerClassName?: string;
  videoClassName?: string;
  style?: React.CSSProperties;
  videoStyle?: React.CSSProperties;
}

export default function PingPongVideo({ 
  src, 
  playbackRate = 1,
  containerClassName = "absolute inset-0 h-full w-full overflow-hidden bg-transparent",
  videoClassName = "absolute inset-0 h-full w-full object-cover",
  style,
  videoStyle 
}: PingPongVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let isReversing = false;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (video.duration && video.readyState >= 2) {
        if (!isReversing && video.currentTime >= video.duration - 0.05) {
          isReversing = true;
          video.pause();
        } else if (isReversing) {
          // Manual reverse playback across all browsers, scaled by playbackRate
          video.currentTime = Math.max(0, video.currentTime - (delta * playbackRate));
          if (video.currentTime <= 0.05) {
            isReversing = false;
            video.playbackRate = playbackRate;
            video.play().catch(() => {});
          }
        } else {
          // Ensure forward playback rate remains correct
          if (video.playbackRate !== playbackRate) {
            video.playbackRate = playbackRate;
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    video.playbackRate = playbackRate;
    video.play().catch(() => {});
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={containerClassName} style={style}>
      <video
        ref={videoRef}
        src={src}
        className={videoClassName}
        style={videoStyle}
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
