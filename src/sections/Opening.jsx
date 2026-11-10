import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import { statement } from '@/data/story'
import cv from '@/assets/cv/Cliffe_Owino_Ibande_CV.pdf'

/* Screen one. A name, three lines, three facts, three ways out. No hook, no
   narration — the argument is made by the section below this one. */
export default function Opening() {
  const reduced = useReducedMotion()

  const line = (i) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.1 + i * 0.11, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section className="grain relative flex min-h-[100svh] flex-col justify-center py-28">
      <motion.p
        {...line(0)}
        className="text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: 'var(--settled)' }}
      >
        {statement.name}
      </motion.p>

      <motion.p
        {...line(1)}
        className="mt-3 text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: 'var(--dim)' }}
      >
        {statement.eyebrow}
      </motion.p>

      <h1 className="mt-9 text-[clamp(2.35rem,7.4vw,5.5rem)] leading-[1.02]">
        {statement.lines.map((l, i) => (
          <motion.span key={i} {...line(i + 2)} className="block">
            {l}
          </motion.span>
        ))}
      </h1>

      {/* The facts strip, ruled off so it reads as data and not as a subtitle. */}
      <motion.ul {...line(statement.lines.length + 2)} className="mt-12 max-w-[34rem] border-t" style={{ borderColor: 'var(--ink-line)' }}>
        {statement.facts.map((f) => (
          <li
            key={f}
            className="border-b py-3 text-[0.9375rem] leading-snug"
            style={{ borderColor: 'var(--ink-line)', color: 'var(--cream)' }}
          >
            {f}
          </li>
        ))}
      </motion.ul>

      <motion.div {...line(statement.lines.length + 3)} className="mt-11 flex flex-wrap items-center gap-3">
        <a href="#split" className="btn btn-solid">
          {statement.cta.read}
          <ArrowDown className="h-4 w-4" />
        </a>
        <a href="#record" className="btn btn-quiet">
          {statement.cta.skip}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={cv}
          download="Cliffe_Owino_Ibande_CV.pdf"
          className="btn text-sm font-medium"
          style={{ color: 'var(--dim)' }}
        >
          <Download className="h-4 w-4" />
          CV
        </a>
      </motion.div>
    </section>
  )
}
