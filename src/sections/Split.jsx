import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Code2, Lock } from 'lucide-react'
import { split } from '@/data/story'
import { formatDuration } from '@/lib/duration'
import CountryNetwork from '@/components/CountryNetwork'

/* ───────────────────────────────────────────────────────────────────────────
   Part one, and the whole of it. Two columns, both of them building: the four
   internal platforms on the left, the products anyone can open on the right.

   The comparison is no longer paid-versus-unpaid. It is scale against proof,
   and each column states its own weakness in one line directly under its
   heading: the left cannot be linked, the right can.

   The "4 platforms" count sits directly above FintechHub rather than in the
   column header, because four rows of employer context stand between the two
   and a count that far from the thing it counts just reads as a claim. In the
   right column the equivalent heading already touches its list, so it stays
   where it is. Both lists are introduced the same way, at the same size.

   On narrow screens they stack and those two lines carry the comparison alone.
   ─────────────────────────────────────────────────────────────────────────── */

function ColumnHead({ eyebrow, title, sub, duration, note, locked }) {
  return (
    <header className="border-b pb-5" style={{ borderColor: 'var(--ink-line)' }}>
      <p
        className="text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: 'var(--settled)' }}
      >
        {eyebrow}
      </p>
      <h3 className="mt-4 text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">{title}</h3>
      <p className="mt-2 text-[0.9375rem]" style={{ color: 'var(--dim)' }}>
        {sub}
      </p>

      {/* The honesty line. Each column admits what it cannot do before the
          reader finds out by trying. */}
      {note && (
        <p
          className="mt-4 flex items-start gap-2 text-[0.8125rem] leading-snug"
          style={{ color: 'var(--dim)' }}
        >
          {locked && <Lock className="mt-[0.2rem] h-3 w-3 shrink-0" aria-hidden="true" />}
          {note}
        </p>
      )}

      <p className="tnum mt-4 text-[0.8125rem] font-medium" style={{ color: 'var(--cream)' }}>
        {duration}
      </p>
    </header>
  )
}

/* One built system: a name, a line on what it is, a date range or a status,
   facts, and links where links exist. Used by both columns. */
function BuildItem({ item }) {
  return (
    <article className="border-b py-6" style={{ borderColor: 'var(--ink-line)' }}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-[1.0625rem] font-medium" style={{ color: 'var(--cream)' }}>
          {item.name}
        </h4>
        {item.period && (
          <span className="tnum text-[0.8125rem]" style={{ color: 'var(--dim)' }}>
            {item.period}
          </span>
        )}
        {/* Status stands in for a date range on the internal platforms, whose
            start dates are not recorded anywhere verifiable. It is coloured
            differently so it cannot be misread as a date. */}
        {!item.period && item.status && (
          <span className="text-[0.8125rem] font-medium" style={{ color: 'var(--settled)' }}>
            {item.status}
          </span>
        )}
      </div>

      <p className="mt-1.5 text-[0.9375rem]" style={{ color: 'var(--dim)' }}>
        {item.what}
      </p>

      <ul className="mt-4 space-y-1.5">
        {item.facts.map((f) => (
          <li
            key={f}
            className="flex gap-2.5 text-[0.9375rem] leading-snug"
            style={{ color: 'var(--cream)' }}
          >
            <span aria-hidden="true" style={{ color: 'var(--settled)' }}>
              ·
            </span>
            {f}
          </li>
        ))}
      </ul>

      {(item.live || item.repo) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--settled)' }}
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
              style={{ color: 'var(--settled)' }}
            >
              <Code2 className="h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div>
      )}
    </article>
  )
}

/* Left: context rows for the platform these systems run on, then the systems,
   then the country network and the two earlier employers. */
function WorkColumn({ data }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref}>
      <ColumnHead
        eyebrow={data.key}
        title={data.org}
        sub={`${data.role} · ${data.period}`}
        duration={formatDuration(data.since)}
        note={data.unlinkable}
        locked
      />

      <dl>
        {data.rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[7.5rem_1fr] gap-4 border-b py-3.5"
            style={{ borderColor: 'var(--ink-line)' }}
          >
            <dt
              className="text-[0.6875rem] font-medium uppercase leading-relaxed"
              style={{ letterSpacing: '0.1em', color: 'var(--dim)' }}
            >
              {r.label}
            </dt>
            <dd className="text-[0.9375rem] leading-relaxed" style={{ color: 'var(--cream)' }}>
              {r.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-12">
        {/* Same size and rule as the right column's "5 products", so the two
            lists are introduced identically. Counted from the array so it
            cannot go stale against the list beneath it. */}
        <h4
          className="border-b pb-4 text-[clamp(1.5rem,2.6vw,2rem)] leading-tight"
          style={{ borderColor: 'var(--ink-line)' }}
        >
          {data.builds.length} platforms
        </h4>
        {data.builds.map((item) => (
          <BuildItem key={item.name} item={item} />
        ))}
      </div>

      {data.network && (
        <div className="mt-10">
          <CountryNetwork active={inView} />
        </div>
      )}

      <div className="mt-10">
        <p
          className="text-[0.6875rem] font-medium uppercase"
          style={{ letterSpacing: '0.16em', color: 'var(--dim)' }}
        >
          Before that
        </p>
        {data.before.map((b) => (
          <div
            key={b.org}
            className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
          >
            <span className="text-[0.9375rem]" style={{ color: 'var(--cream)' }}>
              {b.org} — {b.role}
            </span>
            <span className="tnum text-[0.8125rem]" style={{ color: 'var(--dim)' }}>
              {b.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Right: the same item shape, every one of them linkable. */
function OwnColumn({ data }) {
  const oldest = data.items.reduce((a, b) => (a.since < b.since ? a : b))

  return (
    <div>
      <ColumnHead
        eyebrow={data.key}
        title={`${data.items.length} products`}
        sub={`Longest-running since ${oldest.period.replace(' —', '')}`}
        duration={formatDuration(oldest.since)}
        note={data.linkable}
      />
      {data.items.map((item) => (
        <BuildItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export default function Split() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  const reduced = useReducedMotion()

  const rise = (delay = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={ref} id="split" className="py-24 sm:py-32">
      {/* The two columns, and the whole of part one. A hairline between them on
          wide screens, because the comparison is the only content there is —
          nothing below states the conclusion in words. */}
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-0">
        <motion.div {...rise(0)} className="lg:pr-14">
          <WorkColumn data={split.left} />
        </motion.div>

        <motion.div
          {...rise(0.12)}
          className="lg:border-l lg:pl-14"
          style={{ borderColor: 'var(--ink-line)' }}
        >
          <OwnColumn data={split.right} />
        </motion.div>
      </div>
    </section>
  )
}
