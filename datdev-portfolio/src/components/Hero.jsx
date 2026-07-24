import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-meta">
          <span className="hero-badge">Est. 2026</span>
        </div>
        <h1 className="hero-title">
          Building Ideas<br />
          <span className="hero-accent">Creating Impacts</span>
        </h1>
        <p className="hero-desc">
          We are DatDev, a software and digital solutions team. 
          Specialize in web development, mobile applications, UI/UX design, and graphic design. 
          Every project is an opportunity to create something meaningful and expand what we are capable of.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
            View Our Work <FaArrowRight size={14} />
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('#contact')}>
            Get in Touch
          </button>
        </div>
      </div>

      <div className="hero-marquee">
        <div className="marquee-track">
          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>UI/UX Design</span>
          <span>Graphic Design</span>
          <span>Brand Identity</span>
          <span>Digital Solutions</span>
          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>UI/UX Design</span>
          <span>Graphic Design</span>
          <span>Brand Identity</span>
          <span>Digital Solutions</span>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 24px 0;
          position: relative;
          background: var(--bg-primary);
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-grid {
          max-width: var(--max-width);
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        .hero-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }
        .hero-badge {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .hero-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          max-width: 900px;
        }
        .hero-accent {
          color: var(--accent);
        }
        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
        }
        .hero-marquee {
          margin-top: 80px;
          padding: 20px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          gap: 48px;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .marquee-track span {
          font-size: 0.85rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 2px;
          white-space: nowrap;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .hero { padding: 100px 16px 0; }
          .hero-meta { flex-direction: column; gap: 8px; }
          .hero-actions { flex-direction: column; }
          .hero-actions .btn { width: 100%; justify-content: center; }
          .hero-marquee { margin-top: 60px; }
        }
      `}</style>
    </section>
  )
}
