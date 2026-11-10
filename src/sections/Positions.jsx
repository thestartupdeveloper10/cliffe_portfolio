import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { positions, education } from '@/data/record'

function Position({ p, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduced = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="ledger-row"
    >
      <div className="flex items-baseline gap-2">
        <span className="ledger-key">{p.period}</span>
        {p.current && (
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: 'var(--settled-deep)' }}
            title="Current role"
          />
        )}
      </div>

      <div>
        <h3 className="text-[1.375rem] leading-snug">{p.role}</h3>
        <p className="mt-1 text-sm font-medium">{p.org}</p>
        <p className="mt-3 max-w-[38rem] text-sm leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
          {p.note}
        </p>

        <ul className="mt-5 space-y-2.5">
          {p.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed">
              <span
                className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                style={{ background: 'var(--settled-deep)' }}
              />
              <span style={{ color: 'var(--paper-dim)' }}>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>

      <span className="ledger-key hidden md:block md:text-right">{p.range}</span>
    </motion.article>
  )
}

export default function Positions() {
  return (
    <section id="positions" className="frame py-20 sm:py-24">
      <h2 className="text-[0.6875rem] font-medium uppercase" style={{ letterSpacing: '0.16em', color: 'var(--paper-dim)', fontFamily: 'Inter, sans-serif' }}>
        Positions
      </h2>

      <div className="mt-8">
        {positions.map((p, i) => (
          <Position key={p.org} p={p} i={i} />
        ))}

        <div className="ledger-row">
          <span className="ledger-key">Education</span>
          <div>
            <h3 className="text-[1.375rem] leading-snug">{education.degree}</h3>
            <p className="mt-1 text-sm font-medium">
              {education.school} · {education.place}
            </p>
          </div>
          <span />
        </div>
      </div>
    </section>
  )
}
