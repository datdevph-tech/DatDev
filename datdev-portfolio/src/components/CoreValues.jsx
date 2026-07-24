import { coreValues } from '../data/data'

export default function CoreValues() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Values</div>
          <h2 className="section-title">What we stand for.</h2>
          <p className="section-subtitle">
            The principles that guide our work and culture.
          </p>
        </div>

        <div className="values-grid">
          {coreValues.map((v) => (
            <div key={v.title} className="card value-card">
              <v.icon size={18} className="value-icon" />
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .value-card {
          padding: 28px 20px;
          text-align: center;
        }
        .value-icon {
          color: var(--accent);
          margin-bottom: 14px;
        }
        .value-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .value-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .values-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 400px) {
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
