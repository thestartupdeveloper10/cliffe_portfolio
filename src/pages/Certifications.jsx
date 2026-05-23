import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";

const CERTS = [
  {
    id: 1,
    title: "Generative AI and LLMs: Architecture and Data Preparation",
    issuer: "IBM",
    platform: "Coursera",
    year: "2026",
    featured: true,
    accentHex: "#dcf4ff",
    verifyUrl: "https://coursera.org/verify/TUQFDODE6BEQ",
    description:
      "Deep dive into LLM architectures, training data preparation, tokenisation, and prompt engineering fundamentals — authorised by IBM.",
  },
  {
    id: 2,
    title: "Cloud Architecture & DevOps Essentials",
    issuer: "AWS / Azure",
    platform: "Cloud",
    year: "2023",
    accentHex: "#a4bcd1",
  },
  {
    id: 3,
    title: "Docker Fundamentals",
    issuer: "Docker",
    platform: "Official",
    year: "2025",
    accentHex: "#9ecee0",
  },
  {
    id: 4,
    title: "Postman API Development",
    issuer: "Postman",
    platform: "Official",
    year: "2025",
    accentHex: "#a6cbbf",
  },
  {
    id: 5,
    title: "Huawei Cloud Fundamentals",
    issuer: "Huawei",
    platform: "HCIA",
    year: "2023",
    accentHex: "#e11d48",
  },
  {
    id: 6,
    title: "SPSS for Data Analysis",
    issuer: "IBM SPSS",
    platform: "Academic",
    year: "2024",
    accentHex: "#a4bcd1",
  },
  {
    id: 7,
    title: "Computer Architecture and Design",
    issuer: "Coursera",
    platform: "Online",
    year: "2026",
    accentHex: "#74bba4",
  },
];

function FeaturedCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="col-span-full relative rounded-2xl overflow-hidden border p-8"
      style={{
        background: "linear-gradient(135deg, var(--bg-card-elevated) 0%, var(--bg-card) 100%)",
        borderColor: `${cert.accentHex}35`,
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: `${cert.accentHex}0a`, filter: "blur(60px)" }}
      />
      {/* Shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${cert.accentHex}60 50%, transparent)` }}
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
        {/* Icon */}
        <div
          className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border"
          style={{
            background: `${cert.accentHex}12`,
            borderColor: `${cert.accentHex}30`,
          }}
        >
          <ShieldCheck className="w-8 h-8" style={{ color: cert.accentHex }} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <span
              className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full terminal-text border"
              style={{
                background: `${cert.accentHex}12`,
                color: cert.accentHex,
                borderColor: `${cert.accentHex}30`,
              }}
            >
              Featured
            </span>
            <span className="text-xs text-muted-foreground terminal-text">{cert.year}</span>
          </div>
          <h3
            className="font-bold text-xl leading-tight mb-1 text-foreground"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {cert.title}
          </h3>
          <p
            className="font-medium text-sm"
            style={{ color: cert.accentHex }}
          >
            {cert.issuer} · {cert.platform}
          </p>
          {cert.description && (
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-2xl">
              {cert.description}
            </p>
          )}
        </div>

        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 shrink-0 self-start md:self-center"
            style={{
              borderColor: `${cert.accentHex}40`,
              color: cert.accentHex,
              fontFamily: "Syne, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${cert.accentHex}0e`;
              e.currentTarget.style.borderColor = `${cert.accentHex}70`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "";
              e.currentTarget.style.borderColor = `${cert.accentHex}40`;
            }}
          >
            Verify
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CertCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-300"
      style={{ background: "var(--bg-card)", borderColor: `${cert.accentHex}18` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${cert.accentHex}40`;
        e.currentTarget.style.background = "var(--bg-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${cert.accentHex}18`;
        e.currentTarget.style.background = "var(--bg-card)";
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div
          className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
          style={{ background: `${cert.accentHex}0e`, borderColor: `${cert.accentHex}28` }}
        >
          <ShieldCheck className="w-5 h-5" style={{ color: cert.accentHex }} />
        </div>
        <span className="text-xs text-muted-foreground terminal-text">{cert.year}</span>
      </div>

      <div>
        <h3
          className="font-semibold text-sm leading-snug mb-1 text-foreground"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {cert.title}
        </h3>
        <p className="text-xs font-medium terminal-text" style={{ color: cert.accentHex }}>
          {cert.issuer} · {cert.platform}
        </p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const featured = CERTS.filter((c) => c.featured);
  const rest = CERTS.filter((c) => !c.featured);

  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-page-alt)" }}
    >
      <div
        className="gradient-orb w-[400px] h-[400px] top-[-60px] left-[-60px]"
        style={{ background: "rgba(220,244,255,0.04)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Credentials</span>
          <h2
            className="mt-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Certifications &amp;{" "}
            <span className="spark-text">Courses</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
            Continuously levelling up across cloud, DevOps, and AI/ML — verified credentials
            from industry-leading organisations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((cert, i) => (
            <FeaturedCard key={cert.id} cert={cert} index={i} />
          ))}
          {rest.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
