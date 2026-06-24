'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface VideoBackgroundProps {
  videoSrc?: string | null;
  posterSrc: string;
  alt: string;
  isArabic?: boolean;
  overlayOpacity?: number;
}

export function VideoBackground({
  videoSrc,
  posterSrc,
  alt,
  isArabic = false,
  overlayOpacity = 0.82,
}: VideoBackgroundProps) {
  const [videoFailed, setVideoFailed] = useState(!videoSrc);

  const gradient = isArabic
    ? `linear-gradient(-105deg, rgba(11,27,50,${overlayOpacity}) 0%, rgba(11,27,50,${overlayOpacity * 0.73}) 60%, rgba(11,27,50,${overlayOpacity * 0.55}) 100%)`
    : `linear-gradient(105deg, rgba(11,27,50,${overlayOpacity}) 0%, rgba(11,27,50,${overlayOpacity * 0.73}) 60%, rgba(11,27,50,${overlayOpacity * 0.55}) 100%)`;

  return (
    <>
      {!videoFailed && videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={posterSrc}
            alt={alt}
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradient,
          zIndex: 1,
        }}
      />
    </>
  );
}
