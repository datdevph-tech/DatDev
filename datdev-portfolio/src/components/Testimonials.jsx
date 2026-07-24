import { useState, useEffect } from 'react'
import { testimonials } from '../data/data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[current]

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">Kind words.</h2>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">"{t.quote}"</p>
          <div className="testimonial-author">
            <img src={t.avatar} alt={t.author} loading="lazy" />
            <div>
              <strong>{t.author}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`tdot ${i === current ? 'tdot-active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
          padding: 0 16px;
        }
        .testimonial-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 32px;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .testimonial-author img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }
        .testimonial-author strong {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .testimonial-author span {
          display: block;
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }
        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 32px;
        }
        .tdot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border);
          border: none;
          transition: background 0.2s ease;
        }
        .tdot-active {
          background: var(--accent);
        }
      `}</style>
    </section>
  )
}
