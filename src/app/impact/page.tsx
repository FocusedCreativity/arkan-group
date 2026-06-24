'use client';
import Image from 'next/image';
import { useLang } from '@/lib/LangContext';

export default function ImpactPage() {
  const { t, isArabic } = useLang();

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr', textAlign: isArabic ? 'right' : 'left' }}>
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80" alt="Impact Hero" fill priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,27,50,0.8)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '160px clamp(24px,6vw,80px) 100px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ width: '32px', height: '1px', background: '#B89460', flexShrink: 0 }}></span>
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: '#B89460', textTransform: 'uppercase' }}>{isArabic ? 'الأثر' : 'OUR IMPACT'}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>{isArabic ? 'يقاس بالحياة التي نحسنها.' : 'Measured in lives improved.'}</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>{isArabic ? 'كل مشروع نبنيه يغير الطريقة التي يعيش بها المجتمع ويعمل وينمو.' : 'Every project we build changes how a community lives, works, and grows.'}</p>
        </div>
      </section>

      <section style={{ background: '#0B1B32', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px,6vw,80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
            <span style={{ width: '32px', height: '1px', background: '#B89460', flexShrink: 0 }}></span>
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: '#B89460', textTransform: 'uppercase' }}>{t.stats.overline}</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            <div>
              <p style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>300k+</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{isArabic ? 'عائلة مستفيدة' : 'Households reached'}</p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>15k+</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{isArabic ? 'فرصة عمل' : 'Jobs created'}</p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 700, color: '#fff', marginBottom: '8px', direction: 'ltr', textAlign: isArabic ? 'right' : 'left' }}>$2B+</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{isArabic ? 'رأس مال مستثمر' : 'Capital deployed'}</p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>6</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{isArabic ? 'قطاعات ذات أهمية وطنية' : 'Sectors of national importance'}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px,6vw,80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ width: '32px', height: '1px', background: '#B89460', flexShrink: 0 }}></span>
            <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: '#B89460', textTransform: 'uppercase' }}>{isArabic ? 'قصص الأثر' : 'IMPACT STORIES'}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#0B1B32', marginBottom: '48px' }}>{isArabic ? 'تغيير حقيقي، مجتمعات حقيقية.' : 'Real change, real communities.'}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div>
              <div style={{ width: '100%', height: '200px', position: 'relative', marginBottom: '20px' }}>
                <Image src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80" alt="Energy" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0B1B32', marginBottom: '12px' }}>{isArabic ? 'الوصول للطاقة في جنوب ليبيا' : 'Energy access in southern Libya'}</h3>
            </div>
            <div>
              <div style={{ width: '100%', height: '200px', position: 'relative', marginBottom: '20px' }}>
                <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Industry" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0B1B32', marginBottom: '12px' }}>{isArabic ? 'العمالة الصناعية في مصراتة' : 'Industrial employment in Misrata'}</h3>
            </div>
            <div>
              <div style={{ width: '100%', height: '200px', position: 'relative', marginBottom: '20px' }}>
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Urban" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0B1B32', marginBottom: '12px' }}>{isArabic ? 'التجديد الحضري في بنغازي' : 'Urban renewal in Benghazi'}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
