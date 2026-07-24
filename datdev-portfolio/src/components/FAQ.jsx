import { useState } from 'react'
import { faqs } from '../data/data'

function Item({ q, a, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-open' : ''}`}>
      <button className="faq-q" onClick={onClick}>
        {q}
        <span className="faq-chevron">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="faq-a">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Common questions.</h2>
          <p className="section-subtitle">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <Item
              key={i}
              q={f.question}
              a={f.answer}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .faq-list {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-item {
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: border-color 0.2s ease;
        }
        .faq-item:hover {
          border-color: var(--border-hover);
        }
        .faq-open {
          border-color: var(--accent);
        }
        .faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          background: none;
          color: var(--text-primary);
          font-size: 0.92rem;
          font-weight: 500;
          text-align: left;
          font-family: inherit;
        }
        .faq-chevron {
          font-size: 1.2rem;
          color: var(--text-tertiary);
          flex-shrink: 0;
          line-height: 1;
        }
        .faq-a {
          padding: 0 20px 18px;
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  )
}
