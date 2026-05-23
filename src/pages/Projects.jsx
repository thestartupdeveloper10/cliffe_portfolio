import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "@/assets/projectdata";

const CATEGORIES = [
  { id: "fullstack", label: "Full-Stack", color: "#a4bcd1" },
  { id: "devops",    label: "DevOps",     color: "#74bba4" },
  { id: "ai",        label: "AI & ML",    color: "#a4bcd1" },
  { id: "mobile",    label: "Mobile",     color: "#dcf4ff" },
];

const FOLDER_POSITIONS = [
  { x: 60,  y: 40  },
  { x: 340, y: 40  },
  { x: 80,  y: 300 },
  { x: 340, y: 300 },
];

// ── Folder SVG ──────────────────────────────────────────────────────────────

function FolderSVG({ color, projects, size = 140 }) {
  const h = Math.round(size * (96 / 120));
  return (
    <svg
      viewBox="0 0 120 96"
      width={size}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.45))" }}
    >
      {/* Folder back — tab + body */}
      <path
        d="M10,22 Q10,18 13,18 L47,18 Q51,18 53,22 L58,30 Q60,33 63,33 L110,33 L110,85 Q110,88 107,88 L13,88 Q10,88 10,85 Z"
        fill={color + "66"}
      />
      {/* Folder front face */}
      <rect x="10" y="36" width="100" height="52" rx="5" fill={color + "bb"} />
      {/* Gloss highlight */}
      <rect x="10" y="36" width="100" height="16" rx="5" fill="rgba(255,255,255,0.14)" />
      {/* Mini preview cards stacked inside */}
      {projects.slice(0, 3).map((p, i) => {
        const rot = [-9, 0, 9][i];
        const tx  = [-11, 0, 11][i];
        return (
          <g key={p.id} transform={`translate(${60 + tx},64) rotate(${rot})`}>
            <rect x="-14" y="-10" width="28" height="22" rx="3" fill="rgba(0,0,0,0.35)" />
            <rect x="-13" y="-9"  width="26" height="20" rx="2.5" fill="rgba(255,255,255,0.18)" />
          </g>
        );
      })}
    </svg>
  );
}

// ── Orbit thumbnails (appear in a circle on hover) ─────────────────────────

function OrbitThumbnails({ projects, onClickProject }) {
  const radius = Math.max(115, 90 + projects.length * 9);

  return (
    <>
      {projects.map((p, i) => {
        const angle  = (2 * Math.PI * i) / projects.length - Math.PI / 2;
        const ox     = Math.cos(angle) * radius;
        const oy     = Math.sin(angle) * radius;
        const hasImg = p.images?.gallery?.length > 0;

        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
            animate={{ opacity: 1, x: ox, y: oy, scale: 1 }}
            exit={{   opacity: 0, x: 0, y: 0, scale: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{ left: -32, top: -24, zIndex: 40, pointerEvents: "all" }}
            whileHover={{ scale: 1.18 }}
            onClick={(e) => { e.stopPropagation(); onClickProject(i); }}
          >
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <div
                className="w-16 h-12 rounded-lg overflow-hidden shadow-xl"
                style={{ border: "2px solid rgba(255,255,255,0.22)" }}
              >
                {hasImg ? (
                  <img src={p.images.gallery[0]} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${p.images.gradient}`} />
                )}
              </div>
              <span
                className="text-center leading-tight"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 10,
                  color: "rgba(255,255,255,0.78)",
                  maxWidth: 72,
                  display: "block",
                }}
              >
                {p.title}
              </span>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

// ── Draggable folder ────────────────────────────────────────────────────────

function DraggableFolder({ category, projects, initialX, initialY }) {
  const navigate   = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const dragged    = useRef(false);

  const goToCategory = (index = 0) => {
    navigate(`/projects/${category.id}?index=${index}`);
  };

  // Orbit anchor sits at the visual centre of the folder SVG
  const ORBIT_X = 70;
  const ORBIT_Y = 52;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ x: initialX, y: initialY }}
      style={{ position: "absolute", left: 0, top: 0, cursor: "grab" }}
      whileDrag={{ cursor: "grabbing", zIndex: 60 }}
      onDragStart={() => { dragged.current = true; }}
      onDragEnd={()   => { setTimeout(() => { dragged.current = false; }, 60); }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={()   => setIsHovered(false)}
      onTap={() => { if (!dragged.current) goToCategory(0); }}
    >
      <div className="relative" style={{ width: 140, userSelect: "none" }}>

        {/* Orbit anchor — zero-size, centred on folder icon */}
        <div
          style={{
            position: "absolute",
            left: ORBIT_X,
            top:  ORBIT_Y,
            width: 0,
            height: 0,
            pointerEvents: "none",
            zIndex: 40,
          }}
        >
          <AnimatePresence>
            {isHovered && (
              <div style={{ pointerEvents: "all" }}>
                <OrbitThumbnails
                  projects={projects}
                  onClickProject={(i) => goToCategory(i)}
                />
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Folder icon */}
        <motion.div
          animate={{ scale: isHovered ? 1.07 : 1, y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FolderSVG color={category.color} projects={projects} size={140} />
        </motion.div>

        {/* Labels */}
        <div className="flex flex-col items-center mt-1">
          <span
            className="text-sm font-semibold transition-colors duration-200"
            style={{
              fontFamily: "Syne, sans-serif",
              color: isHovered ? category.color : "var(--text-primary)",
            }}
          >
            {category.label}
          </span>
          <span className="text-xs terminal-text" style={{ color: "var(--text-muted, #888)" }}>
            {projects.length} projects
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ────────────────────────────────────────────────────────────

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
          className="mb-16"
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
            and cross-platform mobile.{" "}
            <span className="terminal-text" style={{ color: "rgba(136,181,161,0.55)" }}>
              Hover folders to explore · drag to rearrange
            </span>
          </p>
        </motion.div>

        {/* Draggable folder canvas */}
        <div className="relative w-full" style={{ height: 570 }}>
          {CATEGORIES.map((cat, i) => {
            const catProjects = projectData.filter((p) => p.category === cat.id);
            return (
              <DraggableFolder
                key={cat.id}
                category={cat}
                projects={catProjects}
                initialX={FOLDER_POSITIONS[i].x}
                initialY={FOLDER_POSITIONS[i].y}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
