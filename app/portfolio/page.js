'use client';
import { useState } from 'react';

const current = [
  'Sonesta Select Dallas North Park',
  'Hampton Inn & Suites Trophy Club / Fort Worth',
  'Hampton Inn & Suites PVD Airport / Warwick',
];

const past = [
  'Courtyard by Marriott Dallas',
  'Embassy Suites Las Colinas / Dallas',
  'Homewood Suites by Hilton Dallas',
  'TownePlace Suites by Marriott Dallas',
  'Tryp By Wyndham College Station',
  'Wingate by Wyndham Dallas / Las Colinas',
  'Wingate by Wyndham Richardson / Dallas',
];

export default function PortfolioPage() {
  const [tab, setTab] = useState('current');
  const hotels = tab === 'current' ? current : past;

  return (
    <>
      <section className="page-hero">
        <img src="/images/portfolio-hero.jpg" alt="Portfolio" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(100%)', opacity:0.55 }} />
        <div className="page-hero-overlay" />
      </section>

      <section className="section-light">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 className="section-heading">Our <span>Hotels</span></h1>
          <div className="heading-rule" />

          <div className="portfolio-tabs">
            <button className={`ptab-btn${tab === 'current' ? ' active' : ''}`} onClick={() => setTab('current')}>Current</button>
            <button className={`ptab-btn${tab === 'past' ? ' active' : ''}`} onClick={() => setTab('past')}>Past</button>
          </div>

          <div>
            {hotels.map((h) => (
              <div key={h} className="hotel-item">{h}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
