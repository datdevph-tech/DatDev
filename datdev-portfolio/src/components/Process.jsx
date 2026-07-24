import { processSteps } from '../data/data'

export default function Process() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Process</div>
          <h2 className="section-title">How we work.</h2>
          <p className="section-subtitle">
            From idea to launch, we follow a structured approach to deliver
            quality software.
          </p>
        </div>

        <div className="process-list">
          {processSteps.map((step, i) => (
            <div key={step.title} className="process-item">
              <div className="process-number">{(i + 1).toString().padStart(2, '0')}</div>
              <div className="process-divider" />
              <div className="process-body">
                <div className="process-head">
                  <step.icon size={16} className="process-icon" />
                  <h3 className="process-title">{step.title}</h3>
                </div>
                <p className="process-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-list {
          max-width: 700px;
          margin: 0 auto;
        }
        .process-item {
          display: flex;
          gap: 24px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }
        .process-item:last-child {
          border-bottom: none;
        }
        .process-number {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-tertiary);
          width: 28px;
          flex-shrink: 0;
          padding-top: 2px;
        }
        .process-divider {
          width: 1px;
          background: var(--border);
          flex-shrink: 0;
        }
        .process-body {
          flex: 1;
        }
        .process-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }
        .process-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .process-title {
          font-size: 1rem;
          font-weight: 600;
        }
        .process-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </section>
  )
}
