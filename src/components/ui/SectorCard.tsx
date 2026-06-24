import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectorCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  cta: string;
  image?: string;
  className?: string;
}

export function SectorCard({
  id,
  title,
  subtitle,
  description,
  icon,
  color,
  href,
  cta,
  image,
  className = '',
}: SectorCardProps) {
  const handleCardMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const img = el.querySelector('.card-image') as HTMLImageElement;
    if (img) img.style.transform = 'scale(1.05)';
    el.style.transform = 'translateY(-6px)';
    el.style.boxShadow = 'var(--shadow-deep)';
    el.style.borderColor = 'var(--color-navy)';
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const img = el.querySelector('.card-image') as HTMLImageElement;
    if (img) img.style.transform = 'scale(1)';
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = 'var(--shadow-sm)';
    el.style.borderColor = 'var(--border-glass)';
  };

  return (
    <Link
      href={href}
      id={`sector-card-${id}`}
      className={`group ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#FFFFFF',
        border: '1px solid var(--border-glass)',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        textDecoration: 'none',
      }}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {image && (
        <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="card-image"
            style={{ 
              objectFit: 'cover', 
              transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)' 
            }} 
            sizes="(max-width: 768px) 100vw, 350px"
          />
          {/* Subtle dark gradient from bottom for contrast */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,21,41,0.6) 0%, transparent 100%)',
            pointerEvents: 'none'
          }} />
          
          {/* Floating Icon inside image */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.5rem',
            width: '3rem',
            height: '3rem',
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(8px)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            {icon}
          </div>
        </div>
      )}

      {/* Solid color stripe representing the sector */}
      <div style={{ height: '4px', width: '100%', background: `linear-gradient(90deg, ${color}, transparent)` }} />

      <div style={{
        padding: '1.75rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.35rem',
          fontWeight: 700,
          color: 'var(--color-navy)',
          marginBottom: '0.5rem',
          transition: 'color 0.3s ease',
        }} className="group-hover:text-gold">
          {title}
        </h3>
        
        <p style={{
          fontSize: '0.9375rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
          flexGrow: 1,
        }}>
          {description}
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: color,
          marginTop: 'auto',
          transition: 'gap 0.3s ease',
        }} className="group-hover:gap-3">
          {cta}
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
