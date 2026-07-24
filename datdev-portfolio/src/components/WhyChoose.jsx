import { whyChoose } from '../data/data'

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Why Us</div>
          <h2 className="section-title">Why choose DatDev.</h2>
          <p className="section-subtitle">
            What sets us apart as your digital partner.
          </p>
        </div>

        <div className="why-grid">
          {whyChoose.map((item) => (
            <div key={item.title} className="why-card">
              <item.icon size={18} className="why-icon" />
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .why-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
          transition: border-color 0.2s ease;
        }
        .why-card:hover {
          border-color: var(--border-hover);
        }
        .why-icon {
          color: var(--accent);
          margin-bottom: 14px;
        }
        .why-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .why-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
