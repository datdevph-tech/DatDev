import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { navLinks, socialLinks } from '../data/data'

export default function Footer() {
  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">DatDev</span>
            <p className="footer-tagline">
              Student-led software &amp; digital solutions team from Divine Word
              College of Legazpi.
            </p>
            <div className="footer-social">
              <a href={socialLinks.github} aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href={socialLinks.twitter} aria-label="X (Twitter)" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href={`mailto:${socialLinks.email}`} aria-label="Email" target="_blank" rel="noreferrer"><FaEnvelope /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href) }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope size={13} />
                <a href={`mailto: datdev.ph@gmail.com`}>datdev.ph@gmail.com</a>
              </li>
              <li>
                <FaMapMarkerAlt size={13} />
                <span>Legazpi City, Albay</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} DatDev. All rights reserved.</span>
          <span>Made with care by DatDev</span>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 60px 0 0;
          background: var(--bg-primary);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 40px;
        }
        .footer-logo {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-tertiary);
          line-height: 1.6;
          margin: 12px 0 20px;
          max-width: 280px;
        }
        .footer-social {
          display: flex;
          gap: 10px;
        }
        .footer-social a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          font-size: 0.9rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .footer-social a:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .footer-col h4 {
          font-size: 0.82rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-tertiary);
          margin-bottom: 16px;
        }
        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-col a {
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .footer-col a:hover {
          color: var(--text-primary);
        }
        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .footer-contact svg {
          color: var(--accent);
          flex-shrink: 0;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-top: 1px solid var(--border);
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 4px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
