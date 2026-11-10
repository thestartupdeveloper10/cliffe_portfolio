import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { links } from '@/data/record'

const FIELDS = [
  { name: 'first_name', label: 'First name', type: 'text', half: true },
  { name: 'last_name', label: 'Last name', type: 'text', half: true },
  { name: 'user_email', label: 'Email', type: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const CONFIGURED = Boolean(
  import.meta.env.VITE_SERVICE_ID &&
    import.meta.env.VITE_TEMPLATE_ID &&
    import.meta.env.VITE_USER_ID,
)

function validate(fd) {
  const e = {}
  if (!fd.get('first_name')?.trim()) e.first_name = 'Required'
  if (!fd.get('last_name')?.trim()) e.last_name = 'Required'

  const email = fd.get('user_email')?.trim() ?? ''
  if (!email) e.user_email = 'Required'
  else if (!EMAIL_RE.test(email)) e.user_email = 'That does not look like an email address'

  if (!fd.get('subject')?.trim()) e.subject = 'Required'

  const msg = fd.get('message')?.trim() ?? ''
  if (!msg) e.message = 'Required'
  else if (msg.length < 10) e.message = 'A little more detail, please'

  return e
}

const inputClass =
  'w-full rounded-md border bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors ' +
  'placeholder:text-transparent focus:border-settled-deep'

export default function Contact() {
  const form = useRef(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'ok' | 'fail' | null
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const errs = validate(fd)
    setErrors(errs)
    if (Object.keys(errs).length) {
      // Move focus to the first thing that's wrong.
      form.current?.querySelector(`[name="${Object.keys(errs)[0]}"]`)?.focus()
      return
    }

    setSending(true)
    setStatus(null)
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID,
      )
      setStatus('ok')
      e.target.reset()
    } catch {
      setStatus('fail')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="frame py-20 sm:py-24">
      <h2
        className="text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: 'var(--paper-dim)', fontFamily: 'Inter, sans-serif' }}
      >
        Contact
      </h2>

      <div className="mt-8 grid gap-12 border-t pt-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        {/* Left — the direct routes */}
        <div>
          <h3 className="max-w-[20rem] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1]">
            Open to product engineering roles.
          </h3>
          <p className="mt-5 max-w-[26rem] text-[0.9375rem] leading-relaxed" style={{ color: 'var(--paper-dim)' }}>
            Remote, or relocation. If you would rather not use the form, email reaches me
            faster and I read everything.
          </p>

          <div className="mt-8 space-y-0">
            {[
              { label: 'Email', value: links.email, href: `mailto:${links.email}` },
              { label: 'GitHub', value: 'thestartupdeveloper10', href: links.github },
              { label: 'LinkedIn', value: 'cliffe-ibande', href: links.linkedin },
              { label: 'X', value: '@_startup_Dev', href: links.x },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 border-t py-3.5 transition-opacity hover:opacity-70"
              >
                <span className="ledger-key">{l.label}</span>
                <span className="flex items-center gap-1.5 text-sm">
                  {l.value}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — the form */}
        <div>
          {/* Announced to screen readers the moment it changes. */}
          <div aria-live="polite" className="sr-only">
            {status === 'ok' && 'Message sent.'}
            {status === 'fail' && 'Message failed to send.'}
          </div>

          {status && (
            <div
              className="mb-5 flex items-start gap-3 rounded-md border px-4 py-3.5 text-sm"
              style={{
                borderColor: status === 'ok' ? 'var(--settled-deep)' : 'var(--failed)',
                background: status === 'ok' ? 'rgba(12,107,62,0.06)' : 'rgba(229,72,77,0.06)',
              }}
            >
              {status === 'ok' ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--settled-deep)' }} />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--failed)' }} />
              )}
              <p>
                {status === 'ok'
                  ? 'Sent. I will get back to you.'
                  : 'That did not send. '}
                {status === 'fail' && (
                  <a href={`mailto:${links.email}`} className="underline">
                    Email me directly instead.
                  </a>
                )}
              </p>
            </div>
          )}

          {!CONFIGURED && (
            <p className="mb-5 text-sm" style={{ color: 'var(--paper-dim)' }}>
              The form is not configured in this environment —{' '}
              <a href={`mailto:${links.email}`} className="underline">
                email me directly
              </a>
              .
            </p>
          )}

          <form ref={form} onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {FIELDS.filter((f) => f.half).map((f) => (
                <Field key={f.name} field={f} error={errors[f.name]} />
              ))}
            </div>
            {FIELDS.filter((f) => !f.half).map((f) => (
              <Field key={f.name} field={f} error={errors[f.name]} />
            ))}

            <Field
              field={{ name: 'message', label: 'Message', textarea: true }}
              error={errors.message}
            />

            <button
              type="submit"
              disabled={sending || !CONFIGURED}
              className="btn btn-solid w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* A real <label>, a real id, and errors wired up with aria-describedby.
   The previous version had styled spans and no labels at all. */
function Field({ field, error }) {
  const id = `f-${field.name}`
  const errId = `${id}-err`

  return (
    <div>
      <label htmlFor={id} className="ledger-key mb-2 block">
        {field.label}
      </label>
      {field.textarea ? (
        <textarea
          id={id}
          name={field.name}
          rows={5}
          className={`${inputClass} resize-none`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errId : undefined}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          className={inputClass}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errId : undefined}
        />
      )}
      {error && (
        <p id={errId} className="mt-1.5 text-xs" style={{ color: 'var(--failed)' }}>
          {error}
        </p>
      )}
    </div>
  )
}
