import { motion, useReducedMotion } from 'framer-motion'
import { countries } from '@/data/story'

/* ───────────────────────────────────────────────────────────────────────────
   The left column's illustration. An abstract routing mesh, not a map — the
   point is "five jurisdictions, one path", and a literal map of Africa would
   invite arguments about borders that have nothing to do with the story.

   Edges are drawn in SVG; labels are HTML positioned on top, so type stays
   crisp and consistently sized instead of scaling with the viewBox.
   ─────────────────────────────────────────────────────────────────────────── */

const EDGES = [
  ['GH', 'CD'],
  ['CD', 'TZ'],
  ['TZ', 'MZ'],
  ['MZ', 'LS'],
  ['CD', 'MZ'],
  ['GH', 'TZ'],
]

/* The route the pulse takes, west to south. All five are on it: Ghana used to
   be left out, which rendered it as a dead grey node while the caption claimed
   all five markets. Every pair here is also in EDGES above. */
const ROUTE = ['GH', 'CD', 'TZ', 'MZ', 'LS']

const at = (code) => countries.find((c) => c.code === code)

/* Quadratic curve with the control point pushed perpendicular to the chord,
   so overlapping edges separate visually instead of stacking. */
function curve(a, b, bow = 0.16) {
  const p1 = at(a)
  const p2 = at(b)
  const mx = (p1.x + p2.x) / 2
  const my = (p1.y + p2.y) / 2
  const dx = p2.x - p1.x
  const dy = p2.y - p1.y
  return `M ${p1.x} ${p1.y} Q ${mx - dy * bow} ${my + dx * bow} ${p2.x} ${p2.y}`
}

function routePath() {
  return ROUTE.slice(0, -1)
    .map((code, i) => {
      const seg = curve(code, ROUTE[i + 1])
      return i === 0 ? seg : seg.replace(/^M [\d.]+ [\d.]+ /, '')
    })
    .join(' ')
}

export default function CountryNetwork({ active }) {
  const reduced = useReducedMotion()
  const route = routePath()

  return (
    <figure className="w-full max-w-[34rem]">
      <div className="relative w-full" style={{ aspectRatio: '4 / 3.4' }}>
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="Routing mesh across Tanzania, Ghana, Mozambique, Lesotho and the DR Congo"
        >
          {/* Quiet mesh */}
          {EDGES.map(([a, b]) => (
            <motion.path
              key={`${a}-${b}`}
              d={curve(a, b)}
              fill="none"
              stroke="var(--cream)"
              strokeOpacity={0.13}
              strokeWidth={0.4}
              initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
              animate={active ? { pathLength: 1 } : {}}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          ))}

          {/* The live route */}
          <motion.path
            id="route"
            d={route}
            fill="none"
            stroke="var(--settled)"
            strokeOpacity={0.55}
            strokeWidth={0.55}
            strokeLinecap="round"
            initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
            animate={active ? { pathLength: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.5, ease: 'easeInOut' }}
          />

          {/* Nodes */}
          {countries.map((c, i) => {
            const onRoute = ROUTE.includes(c.code)
            return (
              <motion.circle
                key={c.code}
                cx={c.x}
                cy={c.y}
                r={1.6}
                fill={onRoute ? 'var(--settled)' : 'var(--ink)'}
                stroke={onRoute ? 'var(--settled)' : 'rgba(237,234,227,0.4)'}
                strokeWidth={0.5}
                initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
                animate={active ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{ transformOrigin: `${c.x}px ${c.y}px` }}
              />
            )
          })}

          {/* The transfer in flight.
              A short dash travelling along the route via strokeDashoffset,
              rather than <animateMotion><mpath>, which Safari handles badly.
              pathLength="100" normalises the dash units to the path. */}
          {!reduced && active && (
            <path
              className="route-pulse"
              d={route}
              pathLength="100"
              fill="none"
              stroke="var(--settled)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeDasharray="1.5 100"
            />
          )}
        </svg>

        {/* Labels — HTML so the type doesn't scale with the viewBox */}
        {countries.map((c, i) => (
          <motion.span
            key={c.code}
            className="absolute -translate-x-1/2 text-[0.625rem] font-medium uppercase"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              marginTop: '0.75rem',
              letterSpacing: '0.16em',
              color: ROUTE.includes(c.code) ? 'var(--cream)' : '#6B7076',
            }}
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
          >
            {c.code}
          </motion.span>
        ))}
      </div>

      <figcaption
        className="mt-6 text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: '#6B7076' }}
      >
        Tanzania · Ghana · Mozambique · Lesotho · DR Congo
      </figcaption>
    </figure>
  )
}
