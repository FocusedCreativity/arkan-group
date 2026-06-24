'use client';

import React from 'react';

interface VideoHeroProps {
  videoId: string;
  children: React.ReactNode;
  height?: string;
}

export function VideoHero({ videoId, children, height = '100vh' }: VideoHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        height,
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#F8FAFC',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.77vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%) scale(1.1)',
            opacity: 0.6,
            transition: 'opacity 1s ease',
            border: 'none',
          }}
          allow="autoplay; fullscreen"
          title="Background Video"
        />
      </div>

      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.4) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, transparent 15%)' }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {children}
      </div>
    </section>
  );
}
