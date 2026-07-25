import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/data'

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Work</div>
          <h2 className="section-title"></h2>
          <p className="section-subtitle">
            As of now, we have no projects to showcase yet. 
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="project-cat">{p.category}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt size={13} /> Live Demo
                  </a>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .project-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .project-card:hover {
          border-color: var(--border-hover);
        }
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .project-cat {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 0.72rem;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(0,0,0,0.65);
          color: #fff;
          letter-spacing: 0.3px;
        }
        .project-body {
          padding: 24px;
        }
        .project-title {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .project-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .project-tech span {
          font-size: 0.72rem;
          padding: 3px 8px;
          border-radius: 4px;
          background: var(--bg-elevated);
          color: var(--text-tertiary);
        }
        .project-links {
          display: flex;
          gap: 16px;
        }
        .project-links a {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 450;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .project-links a:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
