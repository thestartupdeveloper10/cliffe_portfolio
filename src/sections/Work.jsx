import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Code2, Clock, Lock } from 'lucide-react'
import { work } from '@/data/record'

/* Internal systems print this in place of the Live/Source row. A card that
   simply has no links reads as the weakest item in a list where everything
   else is linked; a card that says why reads as the largest. */
function Links({ item }) {
  if (item.internal) {
    return (
      <div className="mt-6 flex items-center gap-2 border-t pt-5 text-xs" style={{ color: 'var(--paper-dim)' }}>
        <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />
        No public link: internal system. I can talk through the architecture.
      </div>
    )
  }

  if (!item.live && !item.repo) return null

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 border-t pt-5">
      {item.live && (
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: 'var(--settled-deep)' }}
        >
          Live
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {item.repo && (
        <a
          href={item.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
        >
          <Code2 className="h-3.5 w-3.5" />
          Source
        </a>
      )}
      {item.slow && (
        <span
          className="inline-flex items-center gap-1.5 text-xs"
          style={{ color: 'var(--paper-dim)' }}
          title="Hosted on a free tier that sleeps when idle"
        >
          <Clock className="h-3 w-3" />
          cold start, allow ~30s
        </span>
      )}
    </div>
  )
}

function Metric({ metric }) {
  if (!metric) return null
  return (
    <span className="tnum shrink-0 text-sm font-medium" style={{ color: 'var(--settled-deep)' }}>
      {metric.value}{' '}
      <span className="font-normal" style={{ color: 'var(--paper-dim)' }}>
        {metric.caption.toLowerCase()}
      </span>
    </span>
  )
}

/* Only set where the honest answer is not "I built this" — a collaboration, or
   something still in progress. Rendered next to the kind so a reader meets it
   before the claims, not after. */
function Role({ role }) {
  if (!role) return null
  return (
    <span className="ledger-key" style={{ color: 'var(--settled-deep)' }}>
      {role}
    </span>
  )
}

function reveal(inView, reduced, delay) {
  return {
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

/* Featured work gets the full measure and a two-column split, so the summary
   reads as prose rather than as a caption. */
function FeaturedCard({ item, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      {...reveal(inView, reduced, i * 0.06)}
      className="border-t py-8 md:grid md:grid-cols-[1fr_1.35fr] md:gap-12"
    >
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="ledger-key">{item.kind}</span>
          <span className="md:hidden">
            <Metric metric={item.metric} />
          </span>
        </div>
        <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] leading-tight">{item.title}</h3>
        {item.role && (
          <div className="mt-2.5">
            <Role role={item.role} />
          </div>
        )}
        <div className="mt-3 hidden md:block">
          <Metric metric={item.metric} />
        </div>
      </div>

      <div className="mt-5 md:mt-0">
        <p className="text-[0.9375rem] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
          {item.summary}
        </p>
        {item.detail && (
          <p className="mt-3 text-[0.9375rem] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
            {item.detail}
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
        <Links item={item} />
      </div>
    </motion.article>
  )
}

function SmallCard({ item, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      {...reveal(inView, reduced, (i % 2) * 0.06)}
      className="flex flex-col rounded-lg border p-6"
      style={{ background: 'var(--paper-card)' }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="ledger-key">{item.kind}</span>
        <Metric metric={item.metric} />
      </div>

      <h3 className="mt-3.5 text-[1.3125rem] leading-snug">{item.title}</h3>
      {item.role && (
        <div className="mt-2">
          <Role role={item.role} />
        </div>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
        {item.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>

      <Links item={item} />
    </motion.article>
  )
}

/* One group — the internal platforms, or the work built outside the job. Each
   carries its own heading and its own one-line caveat, because the two groups
   are checkable in completely different ways. */
function Group({ label, note, items }) {
  const featured = items.filter((w) => w.featured)
  const rest = items.filter((w) => !w.featured)

  return (
    <div className="mt-14 first:mt-0">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <h3 className="text-[1.0625rem] font-medium">{label}</h3>
        <p className="text-sm" style={{ color: 'var(--paper-dim)' }}>
          {note}
        </p>
      </div>

      {featured.length > 0 && (
        <div className="mt-7">
          {featured.map((item, i) => (
            <FeaturedCard key={item.slug} item={item} i={i} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {rest.map((item, i) => (
            <SmallCard key={item.slug} item={item} i={i} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Work() {
  const internal = work.filter((w) => w.origin === 'work')
  const own = work.filter((w) => w.origin === 'own')

  return (
    <section id="work" className="frame py-20 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2
          className="text-[0.6875rem] font-medium uppercase"
          style={{ letterSpacing: '0.16em', color: 'var(--paper-dim)', fontFamily: 'Inter, sans-serif' }}
        >
          Selected work
        </h2>
        <p className="text-sm" style={{ color: 'var(--paper-dim)' }}>
          The large systems first, then the ones you can open.
        </p>
      </div>

      <div className="mt-10">
        <Group
          label="Platforms built at M-Pesa Africa"
          note="Internal — no public links"
          items={internal}
        />
        <Group
          label="Built outside the job"
          note="Four live — links on each"
          items={own}
        />
      </div>
    </section>
  )
}
