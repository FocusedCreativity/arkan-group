'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';

interface SectorPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  capabilities: string[];
  sectorColor?: string;
  image?: string;
}

export const SectorPageHero = ({ 
  badge, 
  title, 
  subtitle, 
  cta, 
  capabilities, 
  sectorColor = '#C9A84C',
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80'
}: SectorPageHeroProps) => {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center',
      overflow: 'hidden',
      background: '#FAFAFA'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <Image 
          src={image}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* Light elegant frosted overlays for text legibility */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, transparent 20%)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          padding: 'clamp(2rem, 5vw, 4rem)',
          maxWidth: '800px',
          borderRadius: '24px',
          border: '1px solid rgba(0,0,0,0.05)',
          boxShadow: 'var(--shadow-card)',
        }}>
          {/* Badge */}
          <div className="mb-6" style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1.25rem',
            background: 'rgba(201, 168, 76, 0.1)',
            border: '1px solid rgba(201, 168, 76, 0.3)',
            borderRadius: '999px',
            color: 'var(--color-navy)',
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            <span style={{ position: 'relative', zIndex: 1 }}>{badge}</span>
          </div>
          
          <h1 style={{ 
            marginBottom: '1.5rem', 
            color: 'var(--color-navy)',
            fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
            lineHeight: 1.1,
            textWrap: 'balance'
          }}>
            {title}
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', 
            marginBottom: '2.5rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8
          }}>
            {subtitle}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <Link href="/contact" className="group" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--color-navy)',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.0625rem',
              transition: 'all var(--transition-base)',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-gold)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-navy)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-glow)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-navy)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-sm)';
            }}
            >
              {cta}
              <IconArrowRight size={20} className="group-hover:translate-x-1" style={{ transition: 'transform 0.2s' }} />
            </Link>
            
            <a href="/Arkan_Company_Profile.pdf" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              color: 'var(--color-navy)',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.0625rem',
              transition: 'all var(--transition-base)'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#FAFAFA';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#FFFFFF';
            }}
            >
              Download Profile
            </a>
          </div>

          {/* Capabilities List */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            paddingTop: '2rem'
          }}>
            {capabilities.map((cap, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'rgba(201, 168, 76, 0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <IconCheck size={14} color="var(--color-navy)" stroke={3} />
                </div>
                <span style={{ color: 'var(--color-navy)', fontSize: '0.9375rem', fontWeight: 600, lineHeight: 1.4 }}>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
