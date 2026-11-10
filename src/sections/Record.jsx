import { motion, useReducedMotion } from 'framer-motion'
import Positions from '@/sections/Positions'
import Systems from '@/sections/Systems'
import Work from '@/sections/Work'
import Credentials from '@/sections/Credentials'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

/* Act II. The surface changes from ink to paper because the mode of reading
   changes: the story asked to be read, the record asks to be checked. */
export default function Record() {
  const reduced = useReducedMotion()

  return (
    <div id="record" className="act-two">
      {/* Part title */}
      <div className="frame pb-4 pt-24 sm:pt-32">
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[0.6875rem] font-medium uppercase"
            style={{ letterSpacing: '0.16em', color: 'var(--paper-dim)' }}
          >
            Part two
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.02]">
            The record.
          </h2>
          <p className="mt-6 max-w-[30rem] text-[1.0625rem] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
            Where I have worked, what I have shipped, and how to check it.
          </p>
        </motion.div>
      </div>

      <Positions />
      <Systems />
      <Work />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  )
}
