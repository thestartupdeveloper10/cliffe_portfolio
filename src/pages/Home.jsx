import Nav from '@/components/Nav'
import Opening from '@/sections/Opening'
import Split from '@/sections/Split'
import Record from '@/sections/Record'

/* Part one is now two screens — a statement and a comparison — so there is no
   scroll narrative left to track. The transaction rail, the chapter component
   and the mobile progress hairline were all removed with it. */
export default function Home() {
  return (
    <>
      <a href="#record" className="skip-link">
        Skip to the record
      </a>

      <Nav />

      <div id="top" />

      {/* ── PART ONE — on ink ──────────────────────────────────────── */}
      <main>
        <div className="frame">
          <Opening />
          <Split />
        </div>

        {/* ── PART TWO — on paper ──────────────────────────────────── */}
        <Record />
      </main>
    </>
  )
}
