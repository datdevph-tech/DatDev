import { useState, useEffect } from 'react'
import { navLinks } from '../data/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); handleClick('#home') }}>
          DatDev
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => { e.preventDefault(); handleClick(link.href) }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileOpen ? 'hamburger-open' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile">
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
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: background 0.3s ease, padding 0.3s ease;
        }
        .nav-scrolled {
          background: rgba(11, 11, 11, 0.95);
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-links a {
          font-size: 0.85rem;
          font-weight: 450;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--text-primary);
        }
        .nav-toggle {
          display: none;
          background: none;
          padding: 8px;
        }
        .hamburger {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--text-primary);
          position: relative;
          transition: background 0.2s ease;
        }
        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--text-primary);
          transition: transform 0.2s ease;
        }
        .hamburger::before { top: -6px; }
        .hamburger::after { top: 6px; }
        .hamburger-open { background: transparent; }
        .hamburger-open::before { transform: translateY(6px) rotate(45deg); }
        .hamburger-open::after { transform: translateY(-6px) rotate(-45deg); }
        .nav-mobile {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          padding: 16px 24px;
        }
        .nav-mobile ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .nav-mobile a {
          font-size: 0.95rem;
          color: var(--text-secondary);
          display: block;
          padding: 8px 0;
        }
        .nav-mobile a:hover {
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-toggle { display: block; }
        }
      `}</style>
    </nav>
  )
}
