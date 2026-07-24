import { FaArrowRight } from 'react-icons/fa'
import { socialLinks } from '../data/data'

export default function CTA() {
  return (
    <section id="contact" className="section cta">
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-title">
            Let&apos;s build something together.
          </h2>
          <p className="cta-desc">
            Have a project in mind? We would love to hear from you. Send us a
            message and let us discuss how we can help.
          </p>
          <div className="cta-actions">
            <a href="mailto:datdev.ph@gmail.com" className="btn btn-primary">
              datdev.ph@gmail.com <FaArrowRight size={14} />
            </a>
            <span className="cta-or">or</span>
            <span className="cta-phone"> +63 993 056 1934</span>
          </div>
        </div>
      </div>

      <style>{`
        .cta {
          background: var(--bg-secondary);
        }
        .cta-inner {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }
        .cta-title {
          font-size: clamp(1.5rem, 3.5vw, 2.25rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .cta-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cta-or {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }
        .cta-phone {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  )
}
