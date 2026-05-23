import theboard from "@/assets/imgs/TheBoard/1.png";
import label1 from "@/assets/imgs/label/1.png";
import label2 from "@/assets/imgs/label/2.png";
import picha1 from "@/assets/imgs/picha/1.png";
import picha2 from "@/assets/imgs/picha/2.png";
import royal1 from "@/assets/imgs/royalWatches/1.png";
import osasuna1 from "@/assets/imgs/Osasuna/7.jpg";

const projectData = [
  // ── FULLSTACK ──────────────────────────────────────────────────────────────
  {
    id: "board-fc",
    title: "The Board FC",
    description:
      "Full-featured football club web app with merchandise store, admin dashboard, blog, fan zone, real-time data fetching via Tanstack Query, and SendGrid email notifications.",
    category: "fullstack",
    techStack: ["React", "TypeScript", "Supabase", "Tanstack Query", "SendGrid"],
    liveLink: "https://theboardfc-uiff8.kinsta.page",
    images: { gallery: [theboard], gradient: null },
    features: [
      "Merchandise store with cart & checkout",
      "Admin dashboard for content management",
      "Blog & fan zone community feed",
      "Real-time data via Tanstack Query",
      "Email notifications with SendGrid",
    ],
    highlights: [],
  },
  {
    id: "label-safi",
    title: "Label Safi",
    description:
      "Premium fashion e-commerce platform with real-time inventory, personalized recommendations, Redux state management, and 500+ item catalog with fuzzy search.",
    category: "fullstack",
    techStack: ["React", "MongoDB", "Express.js", "Node.js", "Redux", "Tailwind CSS"],
    liveLink: "https://labalsafike.onrender.com/",
    images: { gallery: [label1, label2], gradient: null },
    features: [
      "500+ item catalog with fuzzy search",
      "Real-time inventory management",
      "Personalised product recommendations",
      "Redux-powered shopping cart",
    ],
    highlights: [
      { value: "500+", label: "Catalog Items" },
    ],
  },
  {
    id: "motimarket",
    title: "Motimarket",
    description:
      "Car sales platform with advanced filters, JWT auth, role-based access, Redis caching, and 1 000+ listings. 25% load-time reduction through query optimization.",
    category: "fullstack",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-slate-900 via-blue-950 to-slate-900" },
    features: [
      "1,000+ vehicle listings",
      "Advanced multi-criteria filter system",
      "JWT authentication & role-based access",
      "Redis caching layer",
      "25% faster load via query optimisation",
    ],
    highlights: [
      { value: "1K+", label: "Car Listings" },
      { value: "25%", label: "Faster Load Time" },
    ],
  },
  {
    id: "royal-watches",
    title: "Royal Watches",
    description:
      "Luxury watch e-commerce with GraphQL API, high-res image zoom, customizable watch configurators, user reviews system, and integrated payment gateway.",
    category: "fullstack",
    techStack: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
    liveLink: "https://royalwatcheske.onrender.com/",
    images: { gallery: [royal1], gradient: null },
    features: [
      "GraphQL API for flexible data querying",
      "High-resolution image zoom viewer",
      "Customisable watch configurator",
      "User reviews & rating system",
      "Integrated payment gateway",
    ],
    highlights: [],
  },
  {
    id: "picha-connect",
    title: "PichaConnect",
    description:
      "Photographer booking platform with location-based discovery, Google Maps geofencing, Socket.io live chat, portfolio uploads, and integrated payment for service bookings.",
    category: "fullstack",
    techStack: ["React", "MongoDB", "Node.js", "Google Maps API", "Socket.io"],
    liveLink: "#",
    images: { gallery: [picha1, picha2], gradient: null },
    features: [
      "Location-based photographer discovery",
      "Google Maps geofencing zones",
      "Socket.io real-time live chat",
      "Portfolio upload & showcase",
      "Integrated service payment",
    ],
    highlights: [],
  },
  {
    id: "osasuna-fc",
    title: "Osasuna FC",
    description:
      "Dynamic football club web app delivering real-time match updates, player stats, and news to fans with a Redux-powered state layer and MongoDB backend.",
    category: "fullstack",
    techStack: ["Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
    liveLink: "https://osasuna-fc.onrender.com/",
    images: { gallery: [osasuna1], gradient: null },
    features: [
      "Real-time match updates",
      "Player statistics hub",
      "News & content management",
      "Redux global state management",
    ],
    highlights: [],
  },

  // ── DEVOPS ─────────────────────────────────────────────────────────────────
  {
    id: "linux-monitor",
    title: "Linux Microservice Monitor",
    description:
      "Production-ready microservice stack on Kubernetes with Prometheus + Grafana custom dashboards, ELK Stack logging, and automated deployments reducing deployment time by 40%.",
    category: "devops",
    techStack: ["Docker", "Kubernetes", "Prometheus", "Grafana", "FastAPI", "Terraform"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-emerald-950 via-slate-900 to-cyan-950" },
    features: [
      "Kubernetes-orchestrated microservices",
      "Custom Prometheus + Grafana dashboards",
      "ELK Stack centralised logging",
      "Automated CI/CD deployment pipeline",
    ],
    highlights: [
      { value: "40%", label: "Faster Deployments" },
    ],
  },
  {
    id: "nginx-ssl",
    title: "NGINX SSL Automation",
    description:
      "Automated SSL certificate lifecycle with Let's Encrypt, Ansible playbooks for consistent multi-server deployment, HSTS headers, and certificate expiry alerting.",
    category: "devops",
    techStack: ["Linux", "NGINX", "Certbot", "Ansible", "Bash", "OpenSSL"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-slate-900 via-orange-950 to-slate-900" },
    features: [
      "Automated Let's Encrypt SSL lifecycle",
      "Ansible multi-server playbooks",
      "HSTS security headers",
      "Certificate expiry alerting",
    ],
    highlights: [],
  },
  {
    id: "huawei-cloud",
    title: "Huawei Cloud Automation",
    description:
      "Cloud resource provisioning scripts for ECS instances and OBS storage, automated container deployments with scaling rules, reducing infrastructure costs by 20%.",
    category: "devops",
    techStack: ["Huawei Cloud", "Python", "Bash", "Docker", "Cloud Monitoring"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-rose-950 via-slate-900 to-slate-900" },
    features: [
      "ECS instance provisioning scripts",
      "OBS storage automation",
      "Auto-scaling container deployments",
      "Cloud monitoring integration",
    ],
    highlights: [
      { value: "20%", label: "Infrastructure Cost Saved" },
    ],
  },

  // ── AI & ML ────────────────────────────────────────────────────────────────
  {
    id: "rag-intelligence",
    title: "RAG Document Intelligence",
    description:
      "Retrieval-Augmented Generation pipeline with 95% query recall on real-world datasets. Processes PDFs/DOCX up to 100 MB using Hugging Face embeddings and vector search.",
    category: "ai",
    techStack: ["Python", "LangChain", "Hugging Face", "FastAPI", "MongoDB", "Docker"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-violet-950 via-purple-950 to-slate-900" },
    features: [
      "Retrieval-Augmented Generation pipeline",
      "PDF & DOCX ingestion up to 100 MB",
      "Hugging Face embedding models",
      "Vector search for semantic retrieval",
    ],
    highlights: [
      { value: "95%", label: "Query Recall" },
      { value: "100 MB", label: "Max File Size" },
    ],
  },
  {
    id: "conversa-assist",
    title: "ConversaAssist",
    description:
      "Multilingual customer-support chatbot with multi-turn context retention, sentiment-based agent routing, and containerised deployment achieving 35% engagement uplift.",
    category: "ai",
    techStack: ["Python", "Flask", "Hugging Face", "Docker", "NLTK"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-indigo-950 via-blue-950 to-slate-900" },
    features: [
      "Multilingual conversation support",
      "Multi-turn context retention",
      "Sentiment-based agent routing",
      "Containerised Docker deployment",
    ],
    highlights: [
      { value: "35%", label: "Engagement Uplift" },
    ],
  },
  {
    id: "smartdoc",
    title: "SmartDoc Summarizer",
    description:
      "Document summarisation service using pre-trained LLMs, achieving 90% coherence. Supports PDF and Word with PostgreSQL version history and NLTK preprocessing.",
    category: "ai",
    techStack: ["Python", "FastAPI", "Hugging Face", "PostgreSQL", "NLTK"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-teal-950 via-slate-900 to-cyan-950" },
    features: [
      "Pre-trained LLM document summarisation",
      "PDF & Word (.docx) support",
      "PostgreSQL version history",
      "NLTK text preprocessing pipeline",
    ],
    highlights: [
      { value: "90%", label: "Coherence Score" },
    ],
  },

  // ── MOBILE ─────────────────────────────────────────────────────────────────
  {
    id: "jamii-budget",
    title: "JamiiBudget",
    description:
      "Full-stack expense tracking app with budget categories, real-time Appwrite analytics, cross-device sync, recurring reminders, and CSV export. Tested on iOS & Android.",
    category: "mobile",
    techStack: ["React Native", "Appwrite", "TypeScript"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-emerald-950 via-slate-900 to-green-950" },
    features: [
      "Budget categories & expense tracking",
      "Real-time Appwrite analytics dashboard",
      "Cross-device data sync",
      "Recurring reminders",
      "CSV export — tested on iOS & Android",
    ],
    highlights: [],
  },
  {
    id: "skillup",
    title: "SkillUp",
    description:
      "ML-powered skill-gap analyser with K-means clustering, LLM-driven personalised training recommendations, and a React Native app. 85% user satisfaction in beta.",
    category: "mobile",
    techStack: ["Python", "Flask", "React Native", "K-means", "OpenAI", "Docker"],
    liveLink: "#",
    images: { gallery: null, gradient: "from-amber-950 via-slate-900 to-yellow-950" },
    features: [
      "K-means skill-gap clustering",
      "LLM-driven training recommendations",
      "Cross-platform React Native app",
      "Beta-tested with real users",
    ],
    highlights: [
      { value: "85%", label: "User Satisfaction" },
    ],
  },
];

export default projectData;
