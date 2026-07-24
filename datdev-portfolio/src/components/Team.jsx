import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { teamMembers } from '../data/data'

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Team</div>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">
            A small but dedicated team passionate about building great digital
            products.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((m) => (
            <div key={m.name} className="team-card">
              <div className="team-avatar">
                <img src={m.image} alt={m.name} loading="lazy" />
              </div>
              <h3 className="team-name">{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <p className="team-bio">{m.bio}</p>
              <div className="team-social">
                <a href={m.github} aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href={m.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={m.twitter} aria-label="X (Twitter)" target="_blank" rel="noreferrer"><FaTwitter /></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .team-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          text-align: center;
          transition: border-color 0.2s ease;
        }
        .team-card:hover {
          border-color: var(--border-hover);
        }
        .team-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 16px;
        }
        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-name {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .team-role {
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 450;
          display: block;
          margin-bottom: 12px;
        }
        .team-bio {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .team-social {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .team-social a {
          color: var(--text-tertiary);
          font-size: 1rem;
          transition: color 0.2s ease;
        }
        .team-social a:hover {
          color: var(--accent);
        }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
