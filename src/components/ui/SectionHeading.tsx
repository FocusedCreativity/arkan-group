import React, { CSSProperties } from 'react';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  const wrapperStyle: CSSProperties = {
    textAlign: isCenter ? 'center' : 'left',
    maxWidth: isCenter ? '700px' : undefined,
    margin: isCenter ? '0 auto' : undefined,
  };

  const overlineStyle: CSSProperties = {
    display: 'inline-block',
    fontFamily: 'var(--font-body)',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--color-gold)',
    marginBottom: '0.625rem',
  };

  const ruleWrapperStyle: CSSProperties = {
    display: 'flex',
    justifyContent: isCenter ? 'center' : 'flex-start',
    marginBottom: '1.25rem',
    marginTop: '0.25rem',
  };

  const ruleStyle: CSSProperties = {
    width: '60px',
    height: '3px',
    background: isCenter
      ? 'linear-gradient(90deg, transparent, var(--color-gold), transparent)'
      : 'linear-gradient(90deg, var(--color-gold), transparent)',
    border: 'none',
    borderRadius: '2px',
    margin: 0,
  };

  const headingStyle: CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: 'var(--color-text)',
    marginBottom: subtitle ? '1rem' : 0,
  };

  const subtitleStyle: CSSProperties = {
    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
    color: 'var(--color-text-muted)',
    lineHeight: 1.8,
    maxWidth: isCenter ? '600px' : '560px',
    margin: isCenter ? '0 auto' : undefined,
  };

  return (
    <div style={wrapperStyle} className={className}>
      {overline && (
        <>
          <span style={overlineStyle}>{overline}</span>
          <div style={ruleWrapperStyle}>
            <hr style={ruleStyle} />
          </div>
        </>
      )}
      <h2 style={headingStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
}
