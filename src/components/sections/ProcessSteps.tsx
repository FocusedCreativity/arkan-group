'use client';

import { useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export const ProcessSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        padding: 'clamp(80px, 10vw, 120px) 0',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          overline="HOW WE WORK"
          title="From First Conversation to Full Operation"
          align="center"
        />
        
        <div 
          className="mt-16 reveal" 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            marginTop: 'clamp(48px, 6vw, 80px)'
          }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .process-row { display: flex; flex-direction: column; gap: 3rem; position: relative; }
            .process-step { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.5rem; flex: 1; z-index: 1; position: relative; }
            
            .step-number-wrapper { 
              position: relative; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              width: 80px; 
              height: 80px; 
              background: #FFFFFF; 
              border: 1px solid rgba(0, 0, 0, 0.08); 
              border-radius: 50%; 
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05); 
              backdrop-filter: blur(8px);
              transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            }
            
            .process-step:hover .step-number-wrapper {
              transform: translateY(-5px) scale(1.05);
              border-color: var(--color-gold);
              box-shadow: 0 12px 40px rgba(201, 168, 76, 0.15);
            }
            
            .step-number { 
              font-family: var(--font-display); 
              font-size: 2rem; 
              font-weight: 700; 
              color: var(--color-navy);
              line-height: 1; 
            }
            
            .step-title { 
              font-family: var(--font-body); 
              font-weight: 700; 
              font-size: 1.25rem; 
              color: var(--color-navy); 
              letter-spacing: 0.02em;
            }
            
            .step-desc { 
              font-family: var(--font-body); 
              font-size: 0.95rem; 
              color: var(--color-text-muted); 
              max-width: 280px; 
              line-height: 1.6;
            }
            
            .connecting-line { 
              display: none; 
              position: absolute; 
              top: 40px; 
              left: 10%; 
              right: 10%; 
              height: 2px; 
              background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.08) 20%, rgba(0, 0, 0, 0.08) 80%, transparent);
              z-index: 0; 
            }
            
            @media (min-width: 768px) {
              .process-row { flex-direction: row; gap: 1rem; }
              .connecting-line { display: block; }
            }
          `}} />
          <div className="process-row">
            <div className="connecting-line"></div>
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className={`process-step reveal reveal-delay-${index + 1}`}>
                <div className="step-number-wrapper">
                  <span className="step-number">{step.number}</span>
                </div>
                <div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc mt-2">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
