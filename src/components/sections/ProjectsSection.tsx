'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';

export function ProjectsSection() {
  const { t, isArabic } = useLang();

  const projectImages = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: '#FFFFFF', padding: '120px 0', direction: isArabic ? 'rtl' : 'ltr' }}
      aria-labelledby="projects-heading"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '32px',
                height: '1px',
                backgroundColor: '#B89460',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#B89460',
              }}
            >
              {t.projects.overline}
            </span>
          </div>
          <h2
            id="projects-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#0B1B32',
              margin: 0,
            }}
          >
            {t.projects.headline}
          </h2>
        </div>

        {/* Project cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {t.projects.items.map((project, idx) => (
            <article
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 2',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  marginBottom: '24px',
                }}
              >
                <Image
                  src={projectImages[idx]}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  className="project-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Title row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0B1B32',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <Link
                  href={`/projects`}
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '20px',
                    color: '#B89460',
                    textDecoration: 'none',
                    flexShrink: 0,
                    marginLeft: isArabic ? '0' : '16px',
                    marginRight: isArabic ? '16px' : '0',
                    transition: 'transform 0.2s ease',
                    display: 'inline-block',
                    transform: isArabic ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  className="project-arrow"
                  aria-label={`View project: ${project.title}`}
                >
                  &rarr;
                </Link>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: '#6B7280',
                  margin: 0,
                }}
              >
                {project.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .project-img-wrapper:hover .project-img,
        article:hover .project-img {
          transform: scale(1.04) !important;
        }
        .project-arrow:hover {
          transform: ${isArabic ? 'translateX(-4px) rotate(180deg)' : 'translateX(4px)'} !important;
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
