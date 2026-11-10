import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

/* The old app had no catch-all route, so any unknown path rendered a blank
   page. Uses the failed-transaction colour, which is the honest one here. */
export default function NotFound() {
  return (
    <main className="frame flex min-h-[100svh] flex-col justify-center py-24">
      <p
        className="text-[0.6875rem] font-medium uppercase"
        style={{ letterSpacing: '0.16em', color: 'var(--failed)' }}
      >
        404 · Not found
      </p>
      <h1 className="mt-6 max-w-[28rem] text-[clamp(2.25rem,6vw,4rem)] leading-[1.05]">
        This one didn’t settle.
      </h1>
      <p className="lede measure mt-6">
        There is nothing at this address. The story starts at the beginning.
      </p>
      <Link to="/" className="btn btn-solid mt-10 w-fit">
        <ArrowLeft className="h-4 w-4" />
        Back to the start
      </Link>
    </main>
  )
}
