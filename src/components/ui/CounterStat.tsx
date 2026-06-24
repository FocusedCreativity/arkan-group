'use client';

import React, { useEffect, useRef, useState, CSSProperties } from 'react';

interface CounterStatProps {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  className?: string;
}

/** Ease-out cubic easing function */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

const DURATION_MS = 2000;

export function CounterStat({
  value,
  suffix = '',
  label,
  description,
  className = '',
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / DURATION_MS, 1);
            const eased = easeOutCubic(progress);
            setCount(Math.round(eased * value));
            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick);
            }
          };

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, hasAnimated]);

  const wrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.5rem 1rem',
  };

  const valueStyle: CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
    fontWeight: 800,
    lineHeight: 1,
    background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.375rem',
  };

  const labelStyle: CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--color-text)',
    marginBottom: description ? '0.5rem' : 0,
  };

  const descriptionStyle: CSSProperties = {
    fontSize: '0.875rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
    maxWidth: '180px',
  };

  const dividerStyle: CSSProperties = {
    width: '40px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
    border: 'none',
    borderRadius: '1px',
    margin: '0.625rem auto',
  };

  return (
    <div ref={containerRef} style={wrapperStyle} className={className}>
      <div style={valueStyle}>
        {count}
        {suffix}
      </div>
      <hr style={dividerStyle} />
      <div style={labelStyle}>{label}</div>
      {description && <p style={descriptionStyle}>{description}</p>}
    </div>
  );
}
