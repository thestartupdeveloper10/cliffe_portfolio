import { ArrowUp } from 'lucide-react'
import { links } from '@/data/record'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="frame border-t py-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium">Cliffe Owino Ibande</p>
          <p className="mt-1 text-sm" style={{ color: 'var(--paper-dim)' }}>
            Software Engineer · Core Payment Services · Nairobi, Kenya
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-sm transition-opacity hover:opacity-60">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm transition-opacity hover:opacity-60">
            LinkedIn
          </a>
          <a href={`mailto:${links.email}`} className="text-sm transition-opacity hover:opacity-60">
            Email
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-60"
            style={{ color: 'var(--paper-dim)' }}
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Top
          </a>
        </div>
      </div>

      <p className="mt-8 text-xs tnum" style={{ color: 'var(--paper-dim)' }}>
        © {year}
      </p>
    </footer>
  )
}
