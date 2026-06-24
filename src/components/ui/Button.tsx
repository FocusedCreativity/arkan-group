import React, { CSSProperties } from 'react';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  id?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
}

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: { padding: '0.5rem 1.25rem', fontSize: '0.825rem' },
  md: { padding: '0.75rem 1.875rem', fontSize: '0.9375rem' },
  lg: { padding: '1rem 2.5rem', fontSize: '1.0625rem' },
};

const baseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  borderRadius: '4px',
  cursor: 'pointer',
  transition:
    'background var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast), border-color var(--transition-fast)',
  textDecoration: 'none',
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  outline: 'none',
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))',
    color: 'var(--color-navy)',
    border: '2px solid transparent',
    boxShadow: '0 4px 16px rgba(201, 168, 76, 0.25)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-gold)',
    border: '2px solid var(--color-gold)',
    boxShadow: 'none',
  },
};

const shineKeyframes = `
@keyframes btn-shine {
  0%   { left: -75%; }
  100% { left: 125%; }
}
`;

/** Inject the shine keyframe once into the document head */
let shineInjected = false;
function injectShine() {
  if (typeof document !== 'undefined' && !shineInjected) {
    const style = document.createElement('style');
    style.textContent = shineKeyframes;
    document.head.appendChild(style);
    shineInjected = true;
  }
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  fullWidth = false,
  id,
  target,
  rel,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  if (typeof window !== 'undefined') injectShine();

  const combinedStyle: CSSProperties = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...(fullWidth ? { width: '100%' } : {}),
    ...(disabled ? { opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' } : {}),
  };

  const shineEl = variant === 'primary' ? (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: '-75%',
        width: '50%',
        height: '100%',
        background:
          'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)',
        pointerEvents: 'none',
        transform: 'skewX(-15deg)',
      }}
      className="btn-shine-inner"
    />
  ) : null;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (variant === 'primary') {
      el.style.background =
        'linear-gradient(135deg, #b8932e, var(--color-gold))';
      el.style.boxShadow = '0 6px 24px rgba(201, 168, 76, 0.45)';
      el.style.transform = 'translateY(-2px)';
      const shine = el.querySelector<HTMLElement>('.btn-shine-inner');
      if (shine) {
        shine.style.animation = 'btn-shine 0.55s ease forwards';
      }
    } else {
      el.style.background = 'var(--color-gold)';
      el.style.color = 'var(--color-navy)';
      el.style.boxShadow = '0 4px 20px rgba(201, 168, 76, 0.35)';
      el.style.transform = 'translateY(-2px)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (variant === 'primary') {
      el.style.background =
        'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))';
      el.style.boxShadow = '0 4px 16px rgba(201, 168, 76, 0.25)';
      el.style.transform = '';
      const shine = el.querySelector<HTMLElement>('.btn-shine-inner');
      if (shine) {
        shine.style.animation = '';
      }
    } else {
      el.style.background = 'transparent';
      el.style.color = 'var(--color-gold)';
      el.style.boxShadow = 'none';
      el.style.transform = '';
    }
  };

  if (href) {
    return (
      <a
        id={id}
        href={href}
        style={combinedStyle}
        className={className}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-disabled={disabled}
      >
        {shineEl}
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      style={combinedStyle}
      className={className}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {shineEl}
      {children}
    </button>
  );
}
