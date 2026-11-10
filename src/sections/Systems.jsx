import { systems } from '@/data/record'

/* Grouped by what the tool is FOR. The previous version was 41 logos across
   five columns, which is a list of nouns rather than a claim about ability. */
export default function Systems() {
  return (
    <section id="systems" className="frame py-20 sm:py-24">
      <h2
        className="text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: 'var(--paper-dim)', fontFamily: 'Inter, sans-serif' }}
      >
        Systems
      </h2>

      <div className="mt-8">
        {systems.map((s) => (
          <div key={s.group} className="ledger-row">
            <span className="ledger-key">{s.group}</span>
            <p className="text-[0.9375rem] leading-relaxed">
              {s.items.join(' · ')}
            </p>
            <span />
          </div>
        ))}
      </div>
    </section>
  )
}
