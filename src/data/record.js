/* ═══════════════════════════════════════════════════════════════════════════
   ACT II — THE RECORD
   ───────────────────────────────────────────────────────────────────────────
   Everything here is checkable, or is marked as the thing that isn't. That is
   the only rule this file follows.

   ⚠  EDITORIAL DECISIONS MADE FOR YOU — reverse any of them if you disagree:

   1. Removed the soft metrics from personal projects: "95% query recall",
      "90% coherence score", "85% user satisfaction in beta", "35% engagement
      uplift". They are unverifiable, they sit on projects with no demo and no
      repo, and the first question any interviewer asks is "how did you measure
      coherence?" The projects read stronger without them.

   2. Work was cut from nine items to four (2026-11-09), then the four internal
      M-Pesa platforms were added above them (2026-11-10). `work` is now
      grouped by `origin`: 'work' for the internal platforms, 'own' for
      everything built outside the job. Selected work leads with the internal
      group because it is the strongest engineering on this site.

   3. `internal: true` suppresses the Live/Source row and prints "No public
      link — internal system" in its place. Without that, four cards with a
      silently missing link would read as the weakest items in the list rather
      than the largest systems in it.

   4. RCA Pulsar and AI LMS carry `role: 'Team project'`. They were
      collaborations and the page says so unprompted, because a reference check
      is a bad place for that to come up first. Neither card claims a specific
      personal contribution — add one to `role` when you decide the wording.

   5. RAG Document Intelligence was demoted out of featured and off Part One
      entirely. It is a practice-scale version of what the four internal
      platforms do properly, and next to them it subtracted.

   6. The internal platforms carry no dates. Their start dates are not recorded
      anywhere verifiable, so they state a status instead. Add real ranges when
      you have them.
   ═══════════════════════════════════════════════════════════════════════════ */

export const positions = [
  {
    period: '2025 —',
    range: 'Sep 2025 — Present',
    current: true,
    org: 'Prodapt Ltd',
    role: 'Software Engineer · Core Payment Services',
    note: 'M-Pesa operations across five markets — Tanzania, Ghana, Mozambique, Lesotho and the DRC — under Prodapt’s partnership with Vodacom for M-Pesa Africa. Platforms serving millions of users, with billions transacted.',
    points: [
      'Built and shipped four internal platforms for M-Pesa engineering and support teams — see selected work below',
      'Operate Linux production servers for M-Pesa core payment infrastructure handling 1M+ daily transactions',
      'Reduced database query latency ~15% through monitoring, tuning and query optimisation',
      'Automated recurring operational work in Python and Bash, cutting manual errors ~30%',
      'Sustained 99.9% uptime via certificate lifecycle management and incident response',
      'Contributing to TZ Fintech 2.0 — cloud rebuild with AI-driven fraud detection',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Linux', 'Kubernetes', 'Milvus', 'Huawei Cloud'],
  },
  {
    period: '2024 — 25',
    range: 'Sep 2024 — Jul 2025',
    current: false,
    org: 'Techsavannah',
    role: 'Backend Web Developer',
    note: 'Software development and IT consulting for clients across Kenya.',
    points: [
      'Shipped microservice, Docker and Kubernetes deployments across 10+ client projects',
      'Built high-availability systems behind NGINX reverse proxies at ~99% availability',
      'Implemented Linux server automation, scheduled jobs and Jenkins CI/CD pipelines',
      'Modernised legacy infrastructure using Terraform for infrastructure-as-code',
    ],
    stack: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'NGINX', 'Node.js'],
  },
  {
    period: '2023',
    range: 'Jun 2023 — Aug 2023',
    current: false,
    org: 'Huawei Technologies (Kenya)',
    role: 'Industrial Attachment · Data Analyst',
    note: 'Network analytics and monitoring during undergraduate attachment.',
    points: [
      'Designed data models for network performance data management',
      'Built reporting dashboards in Python and Excel for network performance',
      'Produced monitoring reports and flagged performance anomalies',
      'Worked hands-on with cloud architecture and virtualisation',
    ],
    stack: ['Python', 'SPSS', 'Excel', 'Huawei Cloud'],
  },
]

/* Grouped by what it's FOR, not by language. Build leads, because building is
   the claim the site makes. Retrieval has its own group now — four shipped
   platforms is past the point where Milvus belongs under "Store". */
export const systems = [
  { group: 'Build',     items: ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'React', 'Express', 'Celery'] },
  { group: 'Retrieval', items: ['Milvus', 'BM25 hybrid search', 'LangChain', 'Azure OpenAI', 'Embeddings', 'RAG evaluation'] },
  { group: 'Store',     items: ['PostgreSQL', 'MySQL', 'SQLAlchemy 2', 'Prisma', 'MongoDB', 'Redis'] },
  { group: 'Integrate', items: ['M-Pesa Daraja', 'Keycloak · OIDC', 'Socket.IO', 'OAuth 2.0', 'Cloudinary'] },
  { group: 'Test',      items: ['Pytest', 'Vitest', 'Jest', 'Playwright', 'Schemathesis'] },
  { group: 'Operate',   items: ['Linux', 'Kubernetes', 'Docker', 'VMware', 'NGINX', 'Bash'] },
  { group: 'Observe',   items: ['Prometheus', 'Grafana', 'ELK Stack', 'Cloud Monitoring'] },
  { group: 'Provision', items: ['Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'Huawei Cloud'] },
]

/* `origin`   — 'work' (internal, M-Pesa Africa) or 'own' (built outside the job)
   `internal` — no public link exists; the card says so instead of going quiet
   `role`     — only set where the honest answer is not "I built this"
   `live`     — verified reachable at build time, or null
   `slow`     — free-tier host, cold start measured over 30s. Flagged honestly
                rather than silently linked; a recruiter closes the tab at five.
   `repo`     — Kicksawa and Royal Watches are public. PichaKonnect's
                repository exists but is still PRIVATE, and both parts of the
                site link to it. The Shorts pipeline has no remote yet. */
export const work = [
  /* ── Internal platforms — M-Pesa Africa ─────────────────────────────── */
  {
    slug: 'fintechhub',
    title: 'FintechHub',
    kind: 'AI platform',
    origin: 'work',
    internal: true,
    featured: true,
    role: 'Building now — working MVP',
    summary:
      'Learning platform and knowledge assistant for an M-Pesa Africa platform upgrade. Teams take a ' +
      'structured certification programme on the new platform’s documentation, and completing it ' +
      'unlocks an AI assistant grounded in the same material.',
    detail:
      'A sandboxed pipeline ingests vendor help archives, PDF, Word and PowerPoint, checking every ' +
      'archive entry before opening it, then cleans, chunks and embeds the content into Milvus and ' +
      'extracts a knowledge graph in three layers: structural, lexical, and model-assisted behind a ' +
      'cost-approval step. Curators’ corrections survive re-extraction, and comparing releases shows ' +
      'which modules a documentation update affects, which is what starts a recertification campaign. ' +
      'Two reviewers sign off every module before it publishes. Assessments sample and shuffle ' +
      'questions, autosave, and grade on the server; certificates come out as reproducible PDFs a ' +
      'third party can verify. The assistant streams cited answers over Server-Sent Events, reranks ' +
      'them and checks them for faithfulness, and opens only once a learner finishes the programme, ' +
      'with waivers needing two ' +
      'approvers. An evaluation harness gates each release on recall@12 and judged faithfulness ' +
      'against a golden question set.',
    metric: { value: '1,100+', caption: 'Backend tests at ~91% coverage' },
    stack: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2', 'MySQL', 'Celery', 'Milvus', 'React', 'TypeScript', 'Azure OpenAI', 'Keycloak'],
    live: null,
    repo: null,
  },
  {
    slug: 'rca-pulsar',
    title: 'RCA Pulsar',
    kind: 'AI platform',
    origin: 'work',
    internal: true,
    featured: true,
    role: 'Team project',
    summary:
      'Root cause analysis for M-Pesa problem management. An engineer describes an incident and gets ' +
      'a grounded 5-Whys analysis built from past incidents; approved RCAs are signed off and fed ' +
      'back into the knowledge base that answers the next one.',
    detail:
      'Retrieval fuses dense vector search with BM25 keyword scoring, so exact error codes, ticket ' +
      'IDs and hostnames still rank. It puts the incident’s own market first and reports the Nth ' +
      'occurrence in that market. Four checks enforce grounding, in order: a gate for ' +
      'under-specified queries, a minimum relevance score, a model judge of subject relevance, and a ' +
      'guard that discards ungrounded output. It then calibrates confidence against how well the ' +
      'retrieved sources support the answer, and declines rather than invent a cause it cannot ' +
      'ground. Approved analyses become versioned documents moving through a fixed state machine ' +
      'with maker-checker at every stage, so no one approves a document they wrote or edited, and ' +
      'final approval re-indexes the document so it informs later answers. ' +
      'Each RCA gives root cause, impact, corrective and preventive actions, similar incidents and a ' +
      'citation per “why”, streams progress stage by stage, and exports to PDF, Word, Markdown and ' +
      'JSON. A separate chat assistant can look up and list incidents but by design never writes an ' +
      'RCA, so no chat path can invent an incident.',
    metric: { value: '1,570', caption: 'Backend tests' },
    stack: ['Python', 'FastAPI', 'SQLAlchemy 2', 'MySQL', 'Milvus', 'Redis', 'React 19', 'TypeScript', 'LangChain', 'Azure OpenAI'],
    live: null,
    repo: null,
  },
  {
    slug: 'ai-lms',
    title: 'AI LMS',
    kind: 'AI platform',
    origin: 'work',
    internal: true,
    featured: true,
    role: 'Team project',
    summary:
      'Learning platform that turns a support team’s SOPs into courses. It writes the lessons and ' +
      'assessments, enrols learners, tracks progress and deadlines, and gives team leads and admins ' +
      'compliance reporting.',
    detail:
      'A LangChain agent builds courses from the knowledge base or from uploaded documents, writing ' +
      'structured lessons and three rotating sets of questions per module, with a coverage check ' +
      'confirming each question is answerable from its lesson. An hourly job hashes each module’s ' +
      'source content and confirms a change across several runs before acting on it, then regenerates ' +
      'into a staging area for the course owner to review. Applying an update retires the old ' +
      'questions instead of deleting them, and will not run while a learner has an attempt in ' +
      'progress. Each assessment runs on a timer, shuffles question order from a fixed seed so I can ' +
      'rebuild an exact paper later, states pass marks as counts rather than percentages, and ' +
      'enforces attempt caps, cooldowns and prerequisites; it holds back correct answers until no ' +
      'further attempt can serve those questions. A reversible PII vault swaps hostnames, IPs, ' +
      'emails and phone numbers for derived tokens at ingestion and restores the real values in one ' +
      'place on the way out, so the model sees only masked IDs. A tutor per module cites its ' +
      'sources, and screens for off-topic questions and attempts to fish for answers.',
    metric: { value: '1,600+', caption: 'Backend tests, 185+ frontend' },
    stack: ['Python', 'FastAPI', 'SQLAlchemy 2', 'MySQL', 'Celery', 'Redis', 'Milvus', 'React', 'Tailwind', 'Azure OpenAI'],
    live: null,
    repo: null,
  },
  {
    slug: 'opshub',
    title: 'OpsHub',
    kind: 'Operations platform',
    origin: 'work',
    internal: true,
    featured: true,
    summary:
      'The hub that runs the day-to-day work of M-Pesa’s CPS payments support team: on-call, rotas, ' +
      'incidents, planned changes and a retrieval-augmented incident assistant.',
    detail:
      'A live dashboard of who is on call and which incidents are open, filterable by priority; an ' +
      'incident log; on-call schedules with overrides; a calendar of planned changes; and a daily rota ' +
      'that the system drafts from fairness rules (round-robin queues that let people catch up ' +
      'after leave) for a team lead to review, approve and publish. The assistant combines BM25 and ' +
      'vector ' +
      'search over SOPs and ticket history to return cited triage steps, routing and a draft worklog, ' +
      'masking phone numbers, emails, IPs, hostnames and long ID numbers before anything is sent to ' +
      'the model, and copies the team’s SOPs hourly from a shared knowledge base over read-only ' +
      'access. A permission test covers every API route, and the database is backed up before each ' +
      'deploy.',
    metric: { value: '500+', caption: 'Backend tests, 160+ frontend' },
    stack: ['Python', 'FastAPI', 'SQLAlchemy 2', 'Alembic', 'MySQL', 'React', 'TypeScript', 'TanStack Query', 'Azure OpenAI'],
    live: null,
    repo: null,
  },

  /* ── Built outside the job ──────────────────────────────────────────── */
  {
    slug: 'pichakonnect',
    title: 'PichaKonnect',
    kind: 'Marketplace · live',
    origin: 'own',
    featured: true,
    summary:
      'Two-sided photography marketplace for Kenya. Clients book photographers, photographers manage ' +
      'availability and deliver paid galleries, and real money moves between them over M-Pesa.',
    detail:
      'M-Pesa Daraja STK push with a verified callback and duplicate-prompt guard, a ledger carrying ' +
      'payouts, refunds and disputes, signed Cloudinary assets behind payment-gated galleries, ' +
      'Socket.IO chat, Google and Facebook sign-in, and an audit log on every admin action. I wrote ' +
      'up three rounds of self-audit in the repository. 155 commits since March 2024.',
    metric: { value: '81', caption: 'Backend tests' },
    stack: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO', 'M-Pesa Daraja', 'Cloudinary'],
    live: 'https://pichakonnect.live/',
    repo: 'https://github.com/thestartupdeveloper10/PichaKonnect',
  },
  {
    slug: 'kicksawa',
    title: 'Kicksawa',
    kind: 'Commerce · live',
    origin: 'own',
    featured: true,
    summary:
      'Sneaker and streetwear store built as three packages — customer storefront, admin dashboard ' +
      'and REST API — with Firebase authentication and a Redux-backed cart.',
    detail:
      'Still shipping after two years: 73 commits, most recent October 2026. I hardened the backend ' +
      'with helmet, rate limiting and JWT sessions, and gave the admin side its own dashboard with ' +
      'order and revenue charts.',
    metric: { value: '73', caption: 'Commits' },
    stack: ['React', 'Redux Toolkit', 'Express', 'MongoDB', 'Firebase', 'Tailwind'],
    live: 'https://kicksawa.store/',
    repo: 'https://github.com/thestartupdeveloper10/kicksawa',
  },
  {
    slug: 'shorts-pipeline',
    title: 'Shorts Pipeline',
    kind: 'Tooling · AI',
    origin: 'own',
    featured: true,
    summary:
      'Command-line tool that turns long-form interviews into captioned 9:16 short-form video — ' +
      'transcription, clip selection, speaker-tracked reframing, captions and a voiced intro.',
    detail:
      'Runs on local models end to end: faster-whisper for transcription, MediaPipe face detection and ' +
      'landmarks to keep the speaker in a recropped frame, scene detection for cut points. Every stage ' +
      'checkpoints its results, because a two-hour source takes three and a half hours to process and ' +
      'runs get interrupted. Thirteen test files.',
    metric: { value: '3,400', caption: 'Lines of Python' },
    stack: ['Python', 'faster-whisper', 'MediaPipe', 'OpenCV', 'FFmpeg', 'Pytest'],
    live: null,
    repo: null,
  },
  {
    slug: 'royal-watches',
    title: 'Royal Watches',
    kind: 'Commerce · live',
    origin: 'own',
    featured: false,
    summary:
      'Luxury watch storefront with a separate admin package, Stripe and Paystack payment ' +
      'integrations, reviews and transactional email.',
    detail:
      'I audited it end to end in June 2026 and fixed 20 backend issues, documenting the findings, ' +
      'the API reference and the remaining work in the repository.',
    metric: { value: '78', caption: 'Commits' },
    stack: ['React', 'MUI', 'Redux Toolkit', 'Express', 'MongoDB', 'Stripe', 'Paystack'],
    live: 'https://royalwatcheske.onrender.com/',
    repo: 'https://github.com/thestartupdeveloper10/RoyalWatches',
  },
  {
    slug: 'the-board-fc',
    title: 'The Board FC',
    kind: 'Product',
    origin: 'own',
    featured: false,
    summary:
      'Football club platform with a merchandise store, admin dashboard, blog and fan feed. ' +
      'Real-time data via TanStack Query, transactional email through SendGrid.',
    metric: null,
    stack: ['React', 'TypeScript', 'Supabase', 'TanStack Query', 'SendGrid'],
    live: 'https://theboardfc-uiff8.kinsta.page',
    repo: null,
  },
  {
    slug: 'rag-document-intelligence',
    title: 'RAG Document Intelligence',
    kind: 'AI systems',
    origin: 'own',
    featured: false,
    summary:
      'Retrieval-augmented generation pipeline over PDF and DOCX sources using Hugging Face ' +
      'embeddings and vector search, served behind FastAPI and containerised. Handles documents up ' +
      'to 100 MB.',
    metric: null,
    stack: ['Python', 'LangChain', 'Hugging Face', 'FastAPI', 'MongoDB', 'Docker'],
    live: null,
    repo: null,
  },
]

/* Was seven cards taking a full screen. Now one line each.
   Only the first is verifiable, so only the first gets a link —
   and "AWS / Azure" is dropped, because no such issuer exists. */
export const credentials = [
  {
    title: 'Generative AI and LLMs: Architecture and Data Preparation',
    issuer: 'IBM · Coursera',
    year: '2026',
    verify: 'https://coursera.org/verify/TUQFDODE6BEQ',
  },
  { title: 'Huawei Cloud Fundamentals (HCIA)', issuer: 'Huawei', year: '2023', verify: null },
  { title: 'Docker Fundamentals',              issuer: 'Docker', year: '2025', verify: null },
  { title: 'Postman API Development',          issuer: 'Postman', year: '2025', verify: null },
  { title: 'SPSS for Data Analysis',           issuer: 'IBM SPSS', year: '2024', verify: null },
]

export const education = {
  degree: 'BSc Software Engineering',
  school: 'Kisii University',
  place: 'Kenya',
}

export const links = {
  email: 'owinocliffe10@gmail.com',
  github: 'https://github.com/thestartupdeveloper10',
  linkedin: 'https://www.linkedin.com/in/cliffe-ibande-2973b2261/',
  x: 'https://x.com/_startup_Dev',
}
