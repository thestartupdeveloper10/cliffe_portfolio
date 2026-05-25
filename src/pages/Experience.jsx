import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    bgWord: "PRODAPT",
    company: "Prodapt Ltd",
    role: "Software Engineer",
    period: "Sep 2025 — Present",
    isCurrent: true,
    accentHex: "#88b5a1",
    bgVar: "var(--bg-page)",
    description:
      "Core Payment Services division — supporting M-Pesa operations across Mozambique, Lesotho, Tanzania, Ghana, and DRC through Prodapt's award-winning partnership with Vodacom.",
    achievements: [
      "Manage Linux-based production servers for M-Pesa core payment infrastructure handling 1M+ daily transactions",
      "Reduced database query latency by 15% through monitoring, tuning, and query optimisation",
      "Automated repetitive tasks using Python & Bash, reducing manual errors by 30%",
      "Maintained 99.9% uptime via certificate lifecycle management and incident response",
      "Contributing to TZ Fintech 2.0 — a cloud-based upgrade with AI-driven fraud detection",
    ],
    tags: ["Linux", "Kubernetes", "VMware", "Python", "Grafana", "Huawei Cloud"],
  },
  {
    id: 2,
    bgWord: "TECHSAVANNAH",
    company: "Techsavannah",
    role: "Backend Web Developer",
    period: "Sep 2024 — Jul 2025",
    isCurrent: false,
    accentHex: "#a4bcd1",
    bgVar: "var(--bg-page-alt)",
    description:
      "Software development and IT consulting for clients across Kenya.",
    achievements: [
      "Integrated microservices, Docker, and Kubernetes deployments across 10+ client projects",
      "Built high-availability systems with NGINX reverse proxies achieving 99% availability",
      "Implemented Linux server automation, cron jobs, and Jenkins CI/CD pipelines",
      "Modernised legacy systems using Terraform for infrastructure-as-code",
    ],
    tags: ["Docker", "Kubernetes", "Jenkins", "Terraform", "NGINX", "Node.js"],
  },
  {
    id: 3,
    bgWord: "HUAWEI",
    company: "Huawei Tech. (Kenya) CO., LTD",
    role: "Undergraduate Industrial Attachment — Data Analyst",
    period: "Jun 2023 — Aug 2023",
    isCurrent: false,
    accentHex: "#a4bcd1",
    bgVar: "var(--bg-page)",
    description:
      "Data analytics, network monitoring, and cloud exposure at Huawei Kenya.",
    achievements: [
      "Designed and refined data models for efficient network data management",
      "Built interactive dashboards with Python and Excel for network performance reporting",
      "Generated network monitoring reports and flagged performance anomalies",
      "Worked hands-on with cloud architecture, virtualisation, and distributed systems",
    ],
    tags: ["Python", "SPSS", "Excel", "Data Analysis", "Huawei Cloud"],
  },
];

function ExpSection({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: exp.bgVar }}
    >
      {/* Giant faded company word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-foreground"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(80px, 18vw, 220px)",
            letterSpacing: "-0.03em",
            opacity: 0.04,
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          {exp.bgWord}
        </span>
      </div>

      {/* Subtle orb */}
      <div
        className="gradient-orb w-[500px] h-[500px]"
        style={{
          background: `${exp.accentHex}08`,
          top: "10%",
          right: index % 2 === 0 ? "-100px" : "auto",
          left: index % 2 !== 0 ? "-100px" : "auto",
        }}
      />

      {/* Horizontal rule top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${exp.accentHex}22 50%, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto section-padding w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {/* Period */}
            <div className="flex items-center gap-3">
              <span
                className="terminal-text text-xs uppercase tracking-widest text-muted-foreground"
              >
                {exp.period}
              </span>
              {exp.isCurrent && (
                <span className="flex items-center gap-1.5 text-xs terminal-text font-medium"
                  style={{ color: "#74bba4" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>

            {/* Role */}
            <h3
              className="font-bold leading-tight text-foreground"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              }}
            >
              {exp.role}
            </h3>

            {/* Company */}
            <p
              className="text-lg font-semibold"
              style={{ color: exp.accentHex, fontFamily: "Syne, sans-serif" }}
            >
              {exp.company}
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {exp.description}
            </p>

            {/* Index marker */}
            <div
              className="terminal-text text-xs mt-6 pt-6 border-t"
              style={{
                borderColor: `${exp.accentHex}20`,
                color: `${exp.accentHex}60`,
              }}
            >
              0{index + 1} / 0{EXPERIENCES.length}
            </div>
          </motion.div>

          {/* Right: achievements + tags */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="space-y-4 mb-8">
              {exp.achievements.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: exp.accentHex }}
                  />
                  {a}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <div id="experience">
      {/* Section intro */}
      <div
        className="relative py-16 flex items-center justify-center border-t"
        style={{ background: "var(--bg-page-alt)", borderColor: "rgba(136,181,161,0.08)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-label">Career Journey</span>
          <h2
            className="mt-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Professional{" "}
            <span className="spark-text">Experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            From data analytics at Huawei to supporting mission-critical M-Pesa fintech
            infrastructure across Africa.
          </p>
        </motion.div>
      </div>

      {/* Cinematic sections */}
      {EXPERIENCES.map((exp, i) => (
        <ExpSection key={exp.id} exp={exp} index={i} />
      ))}
    </div>
  );
}
