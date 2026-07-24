import { services } from '../data/data'

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Services</div>
          <h2 className="section-title">What we do.</h2>
          <p className="section-subtitle">
            We offer a focused set of digital services to help you establish and
            grow your online presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="card service-card">
              <s.icon size={20} className="service-icon" />
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .service-card {
          padding: 32px;
        }
        .service-icon {
          color: var(--accent);
          margin-bottom: 16px;
        }
        .service-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .service-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
