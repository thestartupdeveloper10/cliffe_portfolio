import { useState, useRef, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ChevronLeft, ChevronRight, ChevronDown,
  ExternalLink, Sun, Moon,
} from "lucide-react";
import projectData from "@/assets/projectdata";
import { useTheme } from "@/components/ThemeProvider";

const CATEGORIES = {
  fullstack: { label: "Full-Stack", color: "#a4bcd1" },
  devops:    { label: "DevOps",     color: "#74bba4" },
  ai:        { label: "AI & ML",    color: "#a4bcd1" },
  mobile:    { label: "Mobile",     color: "#dcf4ff" },
};

const slideVariants = {
  enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

function SectionRule({ label, color }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="h-px flex-1" style={{ background: `${color}33` }} />
      <span
        className="text-xs font-bold tracking-[0.22em] uppercase terminal-text shrink-0"
        style={{ color }}
      >
        {label}
      </span>
      <div className="h-px flex-1" style={{ background: `${color}33` }} />
    </div>
  );
}

function ProjectStory({ project, cat, direction, index }) {
  const hasHighlights = project.highlights?.length > 0;
  const hasFeatures   = project.features?.length > 0;
  const hasLive       = project.liveLink !== "#";
  const hasMore       = hasFeatures || hasHighlights;

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end px-8 sm:px-14 pb-24 pt-28">

        {/* Large index watermark */}
        <span
          className="absolute bottom-20 right-8 sm:right-14 font-bold select-none pointer-events-none leading-none"
          style={{
            fontFamily: "Syne, sans-serif",
            color: cat.color + "12",
            fontSize: "clamp(5rem, 17vw, 15rem)",
          }}
        >
          {String(index).padStart(2, "0")}
        </span>

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-4"
        >
          <span
            className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase terminal-text"
            style={{
              background: cat.color + "22",
              color: cat.color,
              border: `1px solid ${cat.color}55`,
              backdropFilter: "blur(4px)",
            }}
          >
            {cat.label}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.13 }}
          className="font-bold text-white leading-[1.04] mb-5"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
          }}
        >
          {project.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="text-base sm:text-lg leading-relaxed mb-7 max-w-xl"
          style={{ color: "rgba(255,255,255,0.68)" }}
        >
          {project.description}
        </motion.p>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.techStack.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full text-xs terminal-text"
              style={{
                background: "rgba(0,0,0,0.52)",
                color: cat.color,
                border: `1px solid ${cat.color}35`,
                backdropFilter: "blur(8px)",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTA + scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
          className="flex items-center gap-5"
        >
          {hasLive && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:brightness-110"
              style={{
                background: "#88b5a1",
                color: "#0d1a14",
                fontFamily: "Syne, sans-serif",
              }}
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          )}
          {hasMore && (
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1.5 text-xs terminal-text"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              scroll
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          )}
        </motion.div>
      </section>

      {/* ── THE BUILD ─────────────────────────────────────────────────── */}
      {hasFeatures && (
        <section
          className="px-8 sm:px-14 py-20"
          style={{
            background: "rgba(8,10,14,0.84)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <SectionRule label="The Build" color={cat.color} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="shrink-0 text-xs font-bold terminal-text mt-0.5 tabular-nums"
                    style={{ color: cat.color + "cc" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {feat}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ── BY THE NUMBERS ────────────────────────────────────────────── */}
      {hasHighlights && (
        <section
          className="px-8 sm:px-14 py-20"
          style={{
            background: "rgba(6,8,12,0.78)",
            backdropFilter: "blur(14px)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <SectionRule label="By the Numbers" color={cat.color} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative p-8 rounded-2xl overflow-hidden text-center"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}1e 0%, transparent 70%)`,
                    border: `1px solid ${cat.color}35`,
                  }}
                >
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl"
                    style={{ background: cat.color + "18" }}
                  />
                  <div
                    className="relative text-5xl font-bold mb-2"
                    style={{ fontFamily: "Syne, sans-serif", color: cat.color }}
                  >
                    {h.value}
                  </div>
                  <div
                    className="relative text-sm terminal-text"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {h.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      <div className="h-16" />
    </motion.div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ProjectCategory() {
  const { category }       = useParams();
  const [searchParams]     = useSearchParams();
  const navigate           = useNavigate();
  const { isDark, toggle } = useTheme();
  const scrollRef          = useRef(null);

  const cat      = CATEGORIES[category];
  const projects = projectData.filter((p) => p.category === category);

  const startIndex = Math.min(
    parseInt(searchParams.get("index") ?? "0", 10),
    Math.max(0, projects.length - 1),
  );

  const [current,   setCurrent]   = useState(startIndex);
  const [direction, setDirection] = useState(1);
  const [bgSlide,   setBgSlide]   = useState(0);

  if (!cat || projects.length === 0) {
    navigate("/", { replace: true });
    return null;
  }

  const project  = projects[current];
  const bgImages = project.images?.gallery ?? [];
  const hasImages = bgImages.length > 0;

  // Auto-advance background image carousel every 3 s
  useEffect(() => {
    setBgSlide(0);
    const imgs = projects[current]?.images?.gallery ?? [];
    if (imgs.length <= 1) return;
    const timer = setInterval(() => {
      setBgSlide((prev) => (prev + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [current, projects]);

  const goTo = (index, dir) => {
    setDirection(dir);
    setCurrent(index);
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
  };

  const prev = () => goTo((current - 1 + projects.length) % projects.length, -1);
  const next = () => goTo((current + 1) % projects.length, 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     navigate("/#projects");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">

      {/* ── BACKGROUND CAROUSEL ────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          {hasImages ? (
            <motion.img
              key={`bg-${current}-${bgSlide}`}
              src={bgImages[bgSlide]}
              alt=""
              aria-hidden
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.div
              key={`bg-grad-${current}`}
              className={`absolute inset-0 bg-gradient-to-br ${
                project.images?.gradient ?? "from-slate-900 via-gray-950 to-slate-950"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
            />
          )}
        </AnimatePresence>

        {/* Bottom-to-top dark vignette for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.54) 45%, rgba(0,0,0,0.28) 100%)",
          }}
        />
        {/* Left-side vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.42) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header
        className="relative flex items-center justify-between px-6 sm:px-10 py-4 shrink-0 z-30"
        style={{
          background: "rgba(0,0,0,0.28)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "DM Sans, sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="h-4 w-px" style={{ background: "rgba(255,255,255,0.12)" }} />

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
            <span
              className="text-sm font-bold tracking-wider uppercase terminal-text"
              style={{ color: cat.color }}
            >
              {cat.label}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="text-xs terminal-text hidden sm:block"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {project.title}
          </span>
          <span
            className="text-xs terminal-text"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={toggle}
            className="p-1.5 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* ── SCROLLABLE STORY ────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto min-h-0 relative z-10"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <ProjectStory
            key={project.id}
            project={project}
            cat={cat}
            direction={direction}
            index={current + 1}
          />
        </AnimatePresence>
      </div>

      {/* ── FOOTER NAV ──────────────────────────────────────────────── */}
      <footer
        className="relative flex items-center justify-between px-6 sm:px-10 py-3 shrink-0 z-30"
        style={{
          background: "rgba(0,0,0,0.28)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Background image slide dots (shown only when multiple gallery images) */}
        {hasImages && bgImages.length > 1 && (
          <div className="absolute -top-6 right-6 sm:right-10 flex items-center gap-1.5">
            {bgImages.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width:      i === bgSlide ? 18 : 5,
                  height:     5,
                  background: i === bgSlide ? cat.color : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
        )}

        {/* Prev */}
        <motion.button
          onClick={prev}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.94 }}
          disabled={projects.length <= 1}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all disabled:opacity-30"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.82)",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">
            {projects[(current - 1 + projects.length) % projects.length]?.title}
          </span>
          <span className="sm:hidden">Prev</span>
        </motion.button>

        {/* Project dot indicators */}
        <div className="flex items-center gap-1.5">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              title={p.title}
              className="rounded-full transition-all duration-250"
              style={{
                width:      i === current ? 24 : 7,
                height:     7,
                background: i === current ? cat.color : "rgba(255,255,255,0.22)",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <motion.button
          onClick={next}
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.94 }}
          disabled={projects.length <= 1}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all disabled:opacity-30"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.82)",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <span className="hidden sm:inline">
            {projects[(current + 1) % projects.length]?.title}
          </span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </footer>
    </div>
  );
}
