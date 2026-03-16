'use client';
import { useState } from 'react';

export default function CareersPage() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', position:'', location:'', comments:'' });
  const set = (k, v) => setForm(p => ({...p, [k]: v}));

  return (
    <>
      <section className="page-hero">
        <img src="/images/careers-hero.jpg" alt="Careers" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(20%)', opacity:0.6 }} />
        <div className="page-hero-overlay" />
      </section>

      <section className="section-light">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="section-heading">Fill up form below to <span>apply for job</span></h1>
          <div className="heading-rule" />

          <form action={`mailto:info@still88.com`} method="post" encType="text/plain">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">Name (required)</label>
                <input className="form-input" type="text" required value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone (required)</label>
                <input className="form-input" type="tel" required value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="Your phone number" />
              </div>
              <div className="form-group">
                <label className="form-label">Email (required)</label>
                <input className="form-input" type="email" required value={form.email} onChange={e => set('email', e.target.value)} placeholder="Your email address" />
              </div>
              <div className="form-group">
                <label className="form-label">Position Applying For (required)</label>
                <input className="form-input" type="text" required value={form.position} onChange={e => set('position', e.target.value)} placeholder="Position" />
              </div>
              <div className="form-group">
                <label className="form-label">Location Applying For (required)</label>
                <input className="form-input" type="text" required value={form.location} onChange={e => set('location', e.target.value)} placeholder="Location" />
              </div>
              <div className="form-group">
                <label className="form-label">Upload Your Resume (required)</label>
                <input className="form-input" type="file" accept=".pdf,.doc,.docx" required style={{ padding: '0.5rem 1rem' }} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Comments</label>
              <textarea className="form-input" rows={5} value={form.comments} onChange={e => set('comments', e.target.value)} placeholder="Additional comments..." style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" className="btn-dark">Submit Application</button>
          </form>
        </div>
      </section>
    </>
  );
}
