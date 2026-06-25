'use client';

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

export interface YouTubeBackgroundProps {
  /** YouTube video ID (the part after watch?v=). */
  videoId: string;
  /** Poster image shown before the video loads / as a fallback. */
  posterSrc: string;
  alt?: string;
  /** Seconds into the clip to begin playback. */
  start?: number;
  /** 0 = no tint, 1 = solid navy. Controls legibility of overlaid text. */
  overlayOpacity?: number;
  /** Directional gradient so text stays readable on the leading edge. */
  isArabic?: boolean;
  /** When true, video only mounts once scrolled into view (use for mid-page bands). */
  lazy?: boolean;
  priority?: boolean;
}

export function YouTubeBackground({
  videoId,
  posterSrc,
  alt = '',
  start = 0,
  overlayOpacity = 0.55,
  isArabic = false,
  lazy = false,
  priority = false,
}: YouTubeBackgroundProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Heroes mount immediately; lazy bands wait until scrolled near.
  const [mount, setMount] = useState(() => !lazy);
  const [loaded, setLoaded] = useState(false);
  // Stable across server/client render to avoid hydration mismatches.
  const classId = `ytbg-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const reducedMotion = useReducedMotion();

  // Lazy bands: mount the iframe once near the viewport.
  useEffect(() => {
    if (!lazy) return;
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMount(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lazy]);

  const overlay = isArabic
    ? `linear-gradient(-105deg, rgba(11,27,50,${overlayOpacity}) 0%, rgba(11,27,50,${overlayOpacity * 0.6}) 55%, rgba(11,27,50,${overlayOpacity * 0.35}) 100%)`
    : `linear-gradient(105deg, rgba(11,27,50,${overlayOpacity}) 0%, rgba(11,27,50,${overlayOpacity * 0.6}) 55%, rgba(11,27,50,${overlayOpacity * 0.35}) 100%)`;

  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    loop: '1',
    playlist: videoId,
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    disablekb: '1',
    fs: '0',
    playsinline: '1',
    start: String(start),
    enablejsapi: '0',
  });

  return (
    <div
      ref={wrapperRef}
      className={classId}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0B1B32' }}
      aria-hidden="true"
    >
      {/* Poster — instant paint + fallback. Fades out once video is ready. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: loaded && !reducedMotion ? 0 : 1,
          transition: 'opacity 1.1s ease',
          zIndex: 1,
        }}
      >
        <Image
          src={posterSrc}
          alt={alt}
          fill
          priority={priority}
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {mount && !reducedMotion && (
        <div className="ytbg-frame" style={{ zIndex: 0 }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
            title={alt || 'Background video'}
            allow="autoplay; encrypted-media; picture-in-picture"
            onLoad={() => setLoaded(true)}
            style={{ border: 'none', width: '100%', height: '100%', pointerEvents: 'none' }}
          />
        </div>
      )}

      {/* Legibility tint */}
      <div style={{ position: 'absolute', inset: 0, background: overlay, zIndex: 2 }} />

      <style>{`
        .${classId} .ytbg-frame {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.02);
          /* 16:9 frame that always covers the viewport in both dimensions */
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.78vh;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
