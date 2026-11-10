import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '@/data/record'
import cv from '@/assets/cv/CLIFFE OWINO IBANDE-1.pdf'

const ITEMS = [
  { href: '#record', label: 'Record' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

/* Quiet by design. It stays out of the way through the opening, then appears
   once the reader has committed to scrolling. */
export default function Nav() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {shown && (
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-30 border-b backdrop-blur-md"
          style={{ background: 'rgba(10,12,16,0.72)', borderColor: 'var(--ink-line-2)' }}
        >
          <div className="frame flex h-14 items-center justify-between">
            <a
              href="#top"
              className="text-sm font-medium tracking-tight"
              style={{ color: 'var(--cream)' }}
            >
              Cliffe Owino Ibande
            </a>

            <nav className="flex items-center gap-1">
              {ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-[0.8125rem] transition-colors"
                  style={{ color: 'var(--dim)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dim)')}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hidden rounded-full px-3 py-1.5 text-[0.8125rem] transition-colors sm:block"
                style={{ color: 'var(--dim)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dim)')}
              >
                GitHub
              </a>
              <a
                href={cv}
                download="Cliffe_Owino_Ibande_CV.pdf"
                className="ml-2 rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors"
                style={{ background: 'var(--settled)', color: 'var(--ink)' }}
              >
                CV
              </a>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
