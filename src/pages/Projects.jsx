import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projectData from "@/assets/projectdata";

const CATEGORIES = [
  { id: "fullstack", label: "Full-Stack", color: "#a4bcd1" },
  { id: "devops",    label: "DevOps",     color: "#74bba4" },
  { id: "ai",        label: "AI & ML",    color: "#a4bcd1" },
  { id: "mobile",    label: "Mobile",     color: "#dcf4ff" },
];

function FolderSVG({ color, projects, size = 120 }) {
  const h = Math.round(size * (96 / 120));
  return (
    <svg
      viewBox="0 0 120 96"
      width={size}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.35))" }}
    >
      <path
        d="M10,22 Q10,18 13,18 L47,18 Q51,18 53,22 L58,30 Q60,33 63,33 L110,33 L110,85 Q110,88 107,88 L13,88 Q10,88 10,85 Z"
        fill={color + "55"}
      />
      <rect x="10" y="36" width="100" height="52" rx="5" fill={color + "aa"} />
      <rect x="10" y="36" width="100" height="16" rx="5" fill="rgba(255,255,255,0.12)" />
      {projects.slice(0, 3).map((p, i) => {
        const rot = [-9, 0, 9][i];
        const tx  = [-11, 0, 11][i];
        return (
          <g key={p.id} transform={`translate(${60 + tx},64) rotate(${rot})`}>
            <rect x="-14" y="-10" width="28" height="22" rx="3" fill="rgba(0,0,0,0.28)" />
            <rect x="-13" y="-9"  width="26" height="20" rx="2.5" fill="rgba(255,255,255,0.15)" />
          </g>
        );
      })}
    </svg>
  );
}

function CategoryCard({ category, projects }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(`/projects/${category.id}?index=0`)}
      className="cursor-pointer rounded-2xl border p-8 flex flex-col items-center gap-5 transition-colors duration-200"
      style={{ background: "var(--bg-card)", borderColor: `${category.color}22` }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${category.color}55`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${category.color}22`; }}
    >
      <FolderSVG color={category.color} projects={projects} size={120} />

      <div className="text-center space-y-1">
        <p
          className="font-bold text-lg text-foreground"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {category.label}
        </p>
        <p
          className="text-xs terminal-text tabular-nums"
          style={{ color: `${category.color}bb` }}
        >
          {projects.length} projects
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {projects.slice(0, 3).map((p) => (
          <span
            key={p.id}
            className="text-xs px-2.5 py-1 rounded-full terminal-text"
            style={{
              background: `${category.color}12`,
              color: `${category.color}cc`,
              border: `1px solid ${category.color}22`,
            }}
          >
            {p.title}
          </span>
        ))}
        {projects.length > 3 && (
          <span
            className="text-xs px-2.5 py-1 rounded-full terminal-text"
            style={{
              background: "rgba(136,181,161,0.06)",
              color: "var(--text-secondary, #888)",
              border: "1px solid rgba(136,181,161,0.12)",
            }}
          >
            +{projects.length - 3} more
          </span>
        )}
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "var(--bg-page-alt)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="gradient-orb w-[500px] h-[500px] top-[-80px] right-[-80px]"
          style={{ background: "rgba(164,188,209,0.05)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">What I&apos;ve Built</span>
          <h2
            className="mt-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Selected{" "}
            <span className="ember-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
            15+ projects across full-stack web, DevOps infrastructure, AI/ML pipelines,
            and cross-platform mobile.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CATEGORIES.map((cat) => {
            const catProjects = projectData.filter((p) => p.category === cat.id);
            return (
              <motion.div key={cat.id} variants={cardVariants}>
                <CategoryCard category={cat} projects={catProjects} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
