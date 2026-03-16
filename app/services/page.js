'use client';
import { useState } from 'react';

const tabs = [
  {
    label: 'Development',
    heading: 'Commercial real estate takes years to conceive, design, finance',
    body: ['At still88, we specialize in transforming visionary concepts into stunning hotel properties that not only captivate guests but also drive profitability for owners and investors. Our comprehensive development services encompass every stage of the process, ensuring a seamless transition from initial idea to finished project.','We begin with meticulous site and asset selection, leveraging in-depth market analysis to identify the best opportunities for new developments or redevelopments of existing properties. Our team conducts thorough feasibility studies that assess market trends, demographic insights, and competitive landscapes.','Sustainability is a core principle of our development philosophy. We prioritize eco-friendly practices and materials, ensuring that our hotels minimize their environmental impact while enhancing their appeal to today's conscientious travelers.'],
  },
  {
    label: 'Operations',
    heading: 'Efficient Operations Transform Guests into Lifelong Patrons',
    body: ['Efficient operations are the backbone of any successful hotel, and at still88, we pride ourselves on delivering exceptional operational management tailored to unique needs. Our dedicated team of seasoned professionals adopts a hands-on approach, meticulously overseeing daily operations.','We implement industry best practices and leverage advanced technology to streamline processes. By optimizing workflows and enhancing team performance, we create an environment that fosters both operational excellence and an outstanding guest experience.','Training and development are at the core of our operations strategy. Our tailored training programs equip your team with the skills and knowledge necessary to exceed guest expectations, transforming each interaction into a memorable experience.'],
  },
  {
    label: 'Strategic Consulting',
    heading: 'Strategic Insights That Drive Success in Hospitality',
    body: ['In today's rapidly evolving hospitality landscape, making informed decisions is crucial for long-term success. At still88, we provide expert guidance and strategic foresight through our comprehensive advisory and consulting services.','We conduct in-depth feasibility studies, financial modeling, and market analysis to assess potential projects and investments, ensuring you are well-prepared for the road ahead.','Our services include competitive benchmarking and tailored operational assessments that help identify growth opportunities and areas for improvement. With ongoing support in risk management, brand development, and market positioning, we empower you to stay competitive.'],
  },
  {
    label: 'Expert Advisory Services',
    heading: 'Navigate Market Challenges with Expert Guidance',
    body: ['At still88, we offer expert testimony and litigation support, ensuring you have the strategic insights needed to navigate market dynamics and capitalize on emerging trends. Our seasoned professionals provide independent opinions on a range of hospitality assets.','Our services include Expert Testimony: credible opinions based on thorough research and industry standards. Asset Valuations: comprehensive assessments for bankruptcy proceedings, partnership disputes, and market rent adjustments. Quantification of Loss: evaluating impacts from construction defects and operational disruptions.','In addition to litigation support, our advisory services encompass feasibility studies, financial modeling, and ongoing assistance in risk management and brand development.'],
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  return (
    <>
      <section className="page-hero">
        <img src="/images/services-hero.jpg" alt="Services" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(100%)', opacity:0.55 }} />
        <div className="page-hero-overlay" />
      </section>

      <section className="section-light" style={{ paddingBottom: '2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h1 className="section-heading">Our <span>Services</span></h1>
          <div className="heading-rule" />
          <p style={{ maxWidth: 860, margin: '0 auto', color: '#555', lineHeight: 1.85, fontSize: '0.95rem' }}>
            At still88, we recognize that clients have high expectations for the performance and potential of assets. In today's competitive hospitality landscape, optimizing every aspect of properties is crucial for achieving exceptional results. With deep industry expertise and a commitment to deploying best practices across all facets of hotel management—development, operations, strategic consulting, and expert advisory services—we empower maximum returns and enhance guest satisfaction.
          </p>
        </div>
      </section>

      <section className="section-white" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="tabs-row">
            {tabs.map((t, i) => (
              <button key={t.label} className={`tab-btn${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <div>
              <h3>{tab.heading}</h3>
              {tab.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div>
              <div className="tab-img" style={{ background: '#d0d0d0', display:'flex', alignItems:'center', justifyContent:'center', color:'#999', fontSize:'0.8rem' }}>
                Image
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
