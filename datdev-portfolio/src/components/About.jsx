import { FaCode, FaUsers, FaCalendar } from 'react-icons/fa'

const stats = [
  { icon: FaCalendar, value: '2026', label: 'Founded' },
  { icon: FaUsers, value: '4+', label: 'Team Members' },
  { icon: FaCode, value: '0', label: 'Projects' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-label">About</div>
            <h2 className="section-title">
              Recently graduated students that are passionate about building digital solutions.
            </h2>
            <p className="about-text">
              We are a team of passionate developers and designers dedicated to creating innovative digital solutions.
            </p>
            <p className="about-text">
              Our mission is to help businesses, organizations, and students
              build a strong digital presence through thoughtful design and
              clean, reliable code.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-row">
                <s.icon size={16} className="stat-icon" />
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-text {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.8;
          margin-top: 16px;
        }
        .about-text strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .about-text:first-of-type {
          margin-top: 24px;
        }
        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 8px;
        }
        .stat-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .stat-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .stat-value {
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .stat-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  )
}
