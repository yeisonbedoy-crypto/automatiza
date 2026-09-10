import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SeamlessVideoProps {
  src: string;
  crossfadeDuration?: number;
  containerClassName?: string;
  videoClassName?: string;
  style?: React.CSSProperties;
  videoStyle?: React.CSSProperties;
  /**
   * Imagen poster (primera frame) que se muestra inmediatamente mientras el
   * video se descarga. Mejora LCP de varios segundos a <1s.
   */
  poster?: string;
}

export default function SeamlessVideo({
  src,
  crossfadeDuration = 1,
  containerClassName = "absolute inset-0 h-full w-full overflow-hidden bg-black",
  videoClassName = "absolute inset-0 h-full w-full object-cover",
  style,
  videoStyle,
  poster,
}: SeamlessVideoProps) {
  const [activeVideo, setActiveVideo] = useState(0); // 0 or 1
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const [durations, setDurations] = useState([0, 0]);
  // Optimización 2026-06-09: el 2º video YA NO carga al inicio (preload="none").
  // Lo despertamos vía .load() cuando el 1º cruza el 50% del playback. Reduce
  // descarga inicial de 2×6.3MB a 1×6.3MB → ~50% más rápido el hero visible.
  const secondVideoLoadedRef = useRef(false);

  useEffect(() => {
    // Initial start
    if (videoRefs[0].current) {
      videoRefs[0].current.play().catch(() => {});
    }
  }, []);

  const handleTimeUpdate = (index: number) => {
    const video = videoRefs[index].current;
    if (!video || index !== activeVideo) return;

    // Lazy-load del 2º video: una sola vez, cuando el activo cruza el 50%.
    // Da margen sobrado para que descargue antes de que el 1º termine.
    if (!secondVideoLoadedRef.current && video.duration && video.currentTime > video.duration / 2) {
      const otherIndex = (index + 1) % 2;
      const other = videoRefs[otherIndex].current;
      if (other) {
        other.load();
        secondVideoLoadedRef.current = true;
      }
    }

    // Check if we are near the end
    if (video.duration && video.currentTime > video.duration - crossfadeDuration) {
      const nextIndex = (index + 1) % 2;
      const nextVideo = videoRefs[nextIndex].current;

      if (nextVideo && nextVideo.paused) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(() => {});
        setActiveVideo(nextIndex);
      }
    }
  };

  const handleLoadedMetadata = (index: number) => {
    if (videoRefs[index].current) {
      const newDurations = [...durations];
      newDurations[index] = videoRefs[index].current!.duration;
      setDurations(newDurations);
    }
  };

  return (
    <div className={containerClassName} style={style}>
      {[0, 1].map((index) => (
        <motion.video
          key={index}
          ref={videoRefs[index]}
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ opacity: activeVideo === index ? 1 : 0 }}
          transition={{ duration: crossfadeDuration, ease: "linear" }}
          onTimeUpdate={() => handleTimeUpdate(index)}
          onLoadedMetadata={() => handleLoadedMetadata(index)}
          muted
          playsInline
          loop={false}
          // 1er video: preload completo (visible al cargar la página).
          // 2º video: preload="none" — solo lo despertamos vía .load() al 50%.
          preload={index === 0 ? 'auto' : 'none'}
          poster={index === 0 ? poster : undefined}
          className={index === 0 ? videoClassName : `${videoClassName} absolute top-0 left-0 w-full h-full`}
          style={videoStyle}
        >
          <source src={src} type="video/mp4" />
        </motion.video>
      ))}
    </div>
  );
}
