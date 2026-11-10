/* ═══════════════════════════════════════════════════════════════════════════
   PART ONE — THE SPLIT
   ───────────────────────────────────────────────────────────────────────────
   Rewritten 2026-11-10. Fourth version, and the first one where both columns
   are building.

   The three earlier versions all argued the same thing: the day job pays, the
   side projects are the real work. Version three made that argument
   structurally — "What pays" on the left, "What I build" on the right, the
   right column deliberately older and longer.

   That argument is now retired, because it was understating the record. Four
   full-stack platforms were built inside the day job: a retrieval-augmented
   RCA assistant, two learning platforms and an operations hub, all on FastAPI,
   Milvus and React, all with four-figure test suites. They are product
   engineering, and they are the strongest evidence on this site.

   So the comparison changed rather than disappeared. Left: the large systems,
   which cannot be linked because they are internal. Right: the smaller ones,
   every one of which a reader can open in a new tab right now. The reader is
   meant to notice that the two columns answer each other — scale on one side,
   proof on the other — and that nothing here asks to be taken on trust
   without saying so.

   Still no prose. Every string is a checkable fact, or, where it cannot be
   checked, is marked as such.
   ═══════════════════════════════════════════════════════════════════════════ */

export const statement = {
  name: 'Cliffe Owino Ibande',
  eyebrow: 'Software engineer · Nairobi, Kenya',
  lines: ['I build AI platforms', 'for payment operations.'],
  // The ask, stated as a fact rather than a paragraph of ambition.
  facts: [
    'BSc Software Engineering',
    'Four AI platforms shipped inside M-Pesa Africa; four live products of my own',
    'Open to product engineering — backend or full-stack, remote',
  ],
  cta: { read: 'See the split', skip: 'Skip to the record' },
}

/* ── The split ──────────────────────────────────────────────────────────────
   Both columns now carry built systems. `left` keeps a few rows of context
   first — the platform these systems run on is the reason their constraints
   are interesting — and then lists the four platforms.

   The operational metrics that used to sit in the left column (uptime target,
   query latency, manual error reduction) moved to Positions in Act II. They
   are employment detail, they were duplicated there already, and in a column
   headed "What I build at work" they pulled the eye to the wrong claim.

   Durations are computed from the start dates at render time so they do not go
   stale — see src/lib/duration.js. Do not hard-code "14 months" here.

   The four internal platforms carry `status`, not `period`: their start dates
   are not recorded anywhere I can verify, and inventing them would be the one
   kind of error this file exists to prevent. Replace `status` with `since` and
   `period` once the real dates are to hand. */

export const split = {
  left: {
    key: 'What I build at work',
    org: 'Prodapt Ltd',
    // "Software Engineer", his call (2026-11-10). The CV now carries the same
    // title, so the two documents agree — that was the only real objection.
    role: 'Software Engineer · Core Payment Services',
    since: '2025-09',
    period: 'Sep 2025 —',
    unlinkable: 'Internal systems. I cannot link to any of them.',
    rows: [
      { label: 'Platform',  value: 'M-Pesa Africa, under Prodapt’s partnership with Vodacom' },
      { label: 'Markets',   value: 'Tanzania · Ghana · Mozambique · Lesotho · DR Congo' },
      { label: 'Volume',    value: '1M+ transactions a day' },
      { label: 'Scale',     value: 'Millions of users; billions transacted' },
      { label: 'Built for', value: 'The engineers and support teams who keep that running' },
    ],
    builds: [
      {
        name: 'FintechHub',
        what: 'Certification programme and knowledge assistant for a platform upgrade',
        status: 'Building now — working MVP',
        facts: [
          'Ingests vendor help archives, PDF, Word and PowerPoint into a knowledge graph',
          'Assistant unlocks only once a learner completes the programme',
          'Scores its own retrieval on recall@12; a failing score blocks the release',
          '1,100+ backend tests at ~91% coverage; 670+ frontend',
        ],
      },
      {
        name: 'RCA Pulsar',
        what: 'Root cause analysis grounded in past M-Pesa incidents',
        status: 'Team project',
        facts: [
          'Turns an incident form into a 5-Whys RCA, each “why” carrying its source',
          'Hybrid retrieval — dense vectors fused with BM25, so error codes still rank',
          'Refuses to answer rather than invent a cause it cannot ground',
          '1,570 backend tests',
        ],
      },
      {
        name: 'AI LMS',
        what: 'Turns a support team’s SOPs into courses and assessments',
        status: 'Team project',
        facts: [
          'Writes lessons and three rotating question sets per module',
          'Detects a changed SOP and regenerates the lesson for review',
          'Reversible PII vault: the model sees masked tokens, never real values',
          '1,600+ backend tests; 185+ frontend',
        ],
      },
      {
        name: 'OpsHub',
        what: 'On-call, rotas, incidents and an incident assistant',
        status: 'Shipped',
        facts: [
          'Runs the day-to-day work of the CPS payments support team',
          'Drafts the rota from fairness rules; a team lead reviews and publishes it',
          'Retrieves cited triage steps from SOPs and ticket history',
          '500+ backend tests; 160+ frontend',
        ],
      },
    ],
    network: true,
    before: [
      { org: 'Techsavannah',        role: 'Backend web developer',    period: 'Sep 2024 — Jul 2025' },
      { org: 'Huawei Technologies', role: 'Data analyst, attachment', period: 'Jun — Aug 2023' },
    ],
  },

  right: {
    key: 'What I build on my own',
    linkable: 'Four are live. The fifth runs on my own machine.',
    items: [
      {
        name: 'PichaKonnect',
        what: 'Photography marketplace for Kenya',
        since: '2024-03',
        period: 'Mar 2024 —',
        facts: [
          'Live, with real M-Pesa payments',
          '155 commits',
          '81 backend tests',
          'Ledger, payouts, refunds, disputes',
          'Three rounds of self-audit, written up',
        ],
        live: 'https://pichakonnect.live/',
        repo: 'https://github.com/thestartupdeveloper10/PichaKonnect',
      },
      {
        name: 'Kicksawa',
        what: 'Sneaker and streetwear store',
        since: '2024-08',
        period: 'Aug 2024 —',
        facts: [
          'Live',
          '73 commits, still shipping',
          'Storefront, admin dashboard and REST API',
          'Firebase auth, JWT, helmet, rate limiting',
        ],
        live: 'https://kicksawa.store/',
        repo: 'https://github.com/thestartupdeveloper10/kicksawa',
      },
      {
        name: 'Shorts pipeline',
        what: 'Long interviews to captioned 9:16 video',
        since: '2026-10',
        period: 'Oct 2026 —',
        facts: [
          '~3,400 lines of Python',
          'Local Whisper, MediaPipe face tracking',
          'Resumable — a 2h source takes 3.5h',
          '13 test files',
        ],
        live: null,
        repo: null,
      },
      {
        name: 'Royal Watches',
        what: 'Luxury watch storefront',
        since: '2024-06',
        period: 'Jun 2024 — Jun 2026',
        facts: [
          'Live',
          '78 commits',
          'Stripe and Paystack payments',
          '20 backend issues found and fixed, written up',
        ],
        live: 'https://royalwatcheske.onrender.com/',
        repo: 'https://github.com/thestartupdeveloper10/RoyalWatches',
      },
      {
        name: 'The Board FC',
        what: 'Football club platform and store',
        since: '2025-08',
        period: 'Aug — Sep 2025',
        facts: ['Live', 'Store, admin dashboard, blog, fan feed'],
        live: 'https://theboardfc-uiff8.kinsta.page',
        repo: null,
      },
    ],
  },

}

export const countries = [
  { code: 'TZ', name: 'Tanzania',   x: 62, y: 34 },
  { code: 'GH', name: 'Ghana',      x: 16, y: 26 },
  { code: 'MZ', name: 'Mozambique', x: 70, y: 66 },
  { code: 'LS', name: 'Lesotho',    x: 52, y: 86 },
  { code: 'CD', name: 'DR Congo',   x: 38, y: 46 },
]
