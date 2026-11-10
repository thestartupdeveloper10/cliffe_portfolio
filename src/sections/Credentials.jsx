import { ArrowUpRight } from 'lucide-react'
import { credentials } from '@/data/record'

/* Seven full-bleed cards became five lines. A certificate is a fact, not a
   feature — and the only one that can be checked is the only one with a link. */
export default function Credentials() {
  return (
    <section id="credentials" className="frame py-20 sm:py-24">
      <h2
        className="text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: 'var(--paper-dim)', fontFamily: 'Inter, sans-serif' }}
      >
        Credentials
      </h2>

      <div className="mt-8">
        {credentials.map((c) => (
          <div key={c.title} className="ledger-row">
            <span className="ledger-key">{c.year}</span>
            <div>
              <p className="text-[0.9375rem] leading-snug">{c.title}</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--paper-dim)' }}>
                {c.issuer}
              </p>
            </div>
            {c.verify ? (
              <a
                href={c.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--settled-deep)' }}
              >
                Verify
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
