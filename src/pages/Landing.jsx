import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaDownload } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import resume from "../assets/cv/CLIFFE OWINO IBANDE-1.pdf";

// ── Static data ──────────────────────────────────────────────────────────────

const BOOT_LINES = [
  { text: "$ portfolio --init", type: "cmd" },
  { text: "Booting system...", type: "log" },
  { text: "[████████████████████████████████] 100%", type: "prog" },
  { text: "> Identity resolved", type: "ok" },
  { text: "  name       CLIFFE OWINO IBANDE", type: "data" },
  { text: "  role       Associate Software Engineer", type: "data" },
  { text: "  company    Prodapt Ltd", type: "data" },
  { text: "  location   Nairobi, Kenya 🇰🇪", type: "data" },
  { text: "  status     ● ONLINE", type: "status" },
  { text: "  nations    TZ · GH · MZ · LS · DRC", type: "data" },
  { text: "  uptime     99.9%", type: "data" },
  { text: "All systems operational. Ready.", type: "success" },
];

const LINE_DELAYS = [200, 350, 900, 220, 180, 180, 160, 160, 160, 160, 160, 350];

const LINE_STYLE = {
  cmd:     { color: "var(--text-primary)", fontWeight: 500 },
  log:     { color: "#8d8480" },
  prog:    { color: "#88b5a1" },
  ok:      { color: "#74bba4", fontWeight: 500 },
  data:    { color: "var(--text-secondary)" },
  status:  { color: "#74bba4" },
  success: { color: "#dcf4ff", fontWeight: 600 },
};

const ROLES = [
  "Associate Software Engineer",
  "DevOps & Cloud Engineer",
  "Full-Stack Developer",
  "AI / ML Engineer",
];

const STATS = [
  { value: "1M+",   label: "Daily Transactions" },
  { value: "5",     label: "African Nations" },
  { value: "15+",   label: "Projects Shipped" },
  { value: "99.9%", label: "Uptime SLA" },
];

// Lines that type out inside the hero terminal card
const CARD_LINES = [
  { text: "$ whoami", delay: 0,    type: "cmd"  },
  { text: "cliffe",   delay: 180,  type: "ok"   },
  { text: "",         delay: 80,   type: "gap"  },
  { text: "$ cat profile.json", delay: 120, type: "cmd" },
  { text: "{",                  delay: 180, type: "data" },
  { text: '  "role":     "Assoc. Software Engineer",', delay: 100, type: "data" },
  { text: '  "company":  "Prodapt Ltd",',              delay: 90,  type: "data" },
  { text: '  "base":     "Nairobi, Kenya 🇰🇪",',       delay: 90,  type: "data" },
  { text: '  "stack":    "Full-Stack · DevOps · AI",', delay: 90,  type: "data" },
  { text: '  "nations":  ["TZ","GH","MZ","LS","DRC"],',delay: 90,  type: "data" },
  { text: '  "status":   "● ONLINE"',                  delay: 90,  type: "status"},
  { text: "}",                  delay: 100, type: "data" },
  { text: "",         delay: 80,   type: "gap"  },
  { text: "$ uptime --brief", delay: 120, type: "cmd" },
  { text: "99.9%  —  systems nominal", delay: 180, type: "success" },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 300);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {ROLES[index]}
    </span>
  );
}

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 80) setVisible(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="hidden sm:flex flex-col items-center gap-2 mt-8 select-none"
        >
          <div className="relative w-px h-12" style={{ background: "rgba(136,181,161,0.18)" }}>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 rounded-full w-1.5 h-1.5"
              style={{ background: "#88b5a1" }}
              animate={{ y: [0, 28, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="terminal-text text-xs text-muted-foreground">scroll</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HeroTerminalCard() {
  const reduced = useReducedMotion();
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const ids = [];
    let cumulative = 800; // start delay after hero mounts
    CARD_LINES.forEach((line, i) => {
      cumulative += line.delay;
      const t = cumulative;
      ids.push(setTimeout(() => setLineCount(i + 1), t));
    });
    return () => ids.forEach(clearTimeout);
  }, []);

  const floatAnim = reduced
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 2 }}
      transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
      className="relative"
    >
      {/* Glow behind card */}
      <div
        className="absolute inset-0 rounded-2xl blur-3xl -z-10"
        style={{ background: "rgba(136,181,161,0.1)", transform: "scale(0.85) translateY(12px)" }}
      />

      {/* Floating wrapper */}
      <motion.div {...floatAnim}>
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            borderColor: "rgba(136,181,161,0.22)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
          }}
        >
          {/* macOS chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{
              background: "var(--bg-card-elevated)",
              borderColor: "rgba(136,181,161,0.12)",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 terminal-text text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              cliffe.profile
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="terminal-text text-xs text-emerald-400">live</span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            className="p-5 space-y-0.5 min-h-[280px]"
            style={{ background: "var(--bg-terminal)" }}
          >
            {CARD_LINES.slice(0, lineCount).map((line, i) => {
              if (line.type === "gap") return <div key={i} className="h-2" />;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className="terminal-text text-xs sm:text-sm leading-relaxed"
                  style={LINE_STYLE[line.type] ?? { color: "var(--text-secondary)" }}
                >
                  {line.text}
                </motion.div>
              );
            })}
            {lineCount < CARD_LINES.length && (
              <div className="terminal-text text-sm" style={{ height: 20 }}>
                <span className="animate-cursor-blink" style={{ color: "#88b5a1" }}>█</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Dot-grid texture accent */}
      <div
        className="absolute -bottom-4 -right-4 w-24 h-24 dot-grid-ember opacity-30 -z-10"
        style={{ borderRadius: 4 }}
      />
    </motion.div>
  );
}

function HeroLeftColumn() {
  return (
    <div className="flex flex-col gap-5">
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <span
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm terminal-text w-fit"
          style={{
            borderColor: "rgba(136,181,161,0.22)",
            color: "#88b5a1",
            background: "rgba(136,181,161,0.05)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available · Nairobi, Kenya 🇰🇪
        </span>
      </motion.div>

      {/* Name — outline / filled / ember gradient */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="leading-[0.88] tracking-tight"
          style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
        >
          {/* Stroke-only — ghost weight */}
          <span
            className="block text-[clamp(3rem,8.5vw,7rem)]"
            style={{
              WebkitTextStroke: "1.5px var(--text-primary)",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            CLIFFE
          </span>
          {/* Solid fill */}
          <span className="block text-[clamp(3rem,8.5vw,7rem)] text-foreground">
            OWINO
          </span>
          {/* Ember gradient — payoff */}
          <span className="block text-[clamp(3rem,8.5vw,7rem)] ember-text">
            IBANDE
          </span>
        </h1>

        {/* Punctuation rule */}
        <div
          className="mt-3 h-0.5 w-12 rounded-full"
          style={{ background: "rgba(136,181,161,0.6)" }}
        />
      </motion.div>

      

      {/* Terminal card — mobile only (appears between bio and CTAs) */}
      <div className="sm:hidden">
        <HeroTerminalCard />
      </div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        className="flex flex-wrap gap-3"
      >
        <a href={resume} download="Cliffe_Owino_Ibande_CV.pdf" className="ember-btn">
          <FaDownload className="text-sm" />
          Download CV
        </a>
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="ghost-ember-btn"
        >
          View My Work
          <ChevronDown className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="flex items-center gap-4 pt-1"
      >
        <a
          href="https://github.com/thestartupdeveloper10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <FaGithubSquare className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/cliffe-ibande-2973b2261/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/_startup_Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-sky-400 transition-colors"
          aria-label="Twitter / X"
        >
          <FaSquareXTwitter className="w-6 h-6" />
        </a>
        <div className="h-4 w-px bg-border mx-1" />
        <a
          href="mailto:owinocliffe10@gmail.com"
          className="text-sm text-muted-foreground hover:text-[#88b5a1] transition-colors terminal-text"
        >
          owinocliffe10@gmail.com
        </a>
      </motion.div>

      <ScrollIndicator />
    </div>
  );
}

function HeroContent() {
  return (
    <motion.div
      key="hero"
      className="relative z-10 w-full flex-1 flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto section-padding pt-28 pb-10 w-full">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <HeroLeftColumn />

          {/* Right column — desktop only */}
          <div className="hidden sm:block">
            <HeroTerminalCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TerminalBoot({ onSkip }) {
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const ids = [];
    let cumulative = 0;
    LINE_DELAYS.forEach((delay, i) => {
      cumulative += delay;
      ids.push(setTimeout(() => setLineCount(i + 1), cumulative));
    });
    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="terminal"
      className="absolute inset-0 flex items-center justify-center z-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97, filter: "blur(4px)" }}
      transition={{ duration: 0.4 }}
      onClick={onSkip}
    >
      <div className="w-full max-w-xl">
        <div
          className="rounded-xl overflow-hidden border"
          style={{ borderColor: "rgba(136,181,161,0.18)" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2.5 border-b"
            style={{
              background: "var(--bg-card-elevated)",
              borderColor: "rgba(136,181,161,0.1)",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 terminal-text text-xs text-muted-foreground">
              cliffe@portfolio — zsh
            </span>
            <button
              className="ml-auto terminal-text text-xs text-muted-foreground hover:text-[#88b5a1] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onSkip();
              }}
            >
              skip →
            </button>
          </div>

          <div
            className="p-5 min-h-[300px] space-y-1"
            style={{ background: "var(--bg-terminal)" }}
          >
            {BOOT_LINES.slice(0, lineCount).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className="terminal-text text-sm leading-relaxed"
                style={LINE_STYLE[line.type]}
              >
                {line.text}
              </motion.div>
            ))}
            {lineCount < BOOT_LINES.length && (
              <div className="terminal-text text-sm leading-relaxed" style={{ height: "21px" }}>
                <span className="animate-cursor-blink" style={{ color: "#88b5a1" }}>
                  █
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="text-center terminal-text text-xs text-muted-foreground mt-3">
          Click anywhere to skip
        </p>
      </div>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────

export default function Landing() {
  const [phase, setPhase] = useState("boot");
  const skip = useCallback(() => setPhase("hero"), []);

  useEffect(() => {
    const total = LINE_DELAYS.reduce((s, d) => s + d, 0) + 900;
    const id = setTimeout(skip, total);
    return () => clearTimeout(id);
  }, [skip]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--bg-page)" }}
    >
      {/* ── Background ── */}

      {/* Diagonal warmth sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, rgba(136,181,161,0.015) 40%, rgba(164,188,209,0.015) 60%, transparent 100%)",
        }}
      />

      {/* Gradient orbs — repositioned for card-column alignment */}
      <div
        className="gradient-orb w-[420px] h-[420px]"
        style={{
          background: "rgba(136,181,161,0.05)",
          top: "10%",
          right: "18%",
        }}
      />
      <div
        className="gradient-orb w-[360px] h-[360px]"
        style={{
          background: "rgba(164,188,209,0.05)",
          bottom: "15%",
          left: "12%",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-ember opacity-50" />

      {/* Large monogram watermark */}
      <div
        className="absolute top-0 right-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(16rem, 38vw, 34rem)",
            lineHeight: 0.82,
            color: "rgba(136,181,161,0.022)",
            display: "block",
          }}
        >
          COI
        </span>
      </div>

      {/* ── Phase transitions ── */}
      <AnimatePresence mode="wait">
        {phase === "boot" ? (
          <TerminalBoot key="boot" onSkip={skip} />
        ) : (
          <HeroContent key="hero" />
        )}
      </AnimatePresence>

      {/* ── Stats strip ── */}
      <AnimatePresence>
        {phase === "hero" && (
          <motion.div
            className="relative z-10 w-full mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div
              className="border-t backdrop-blur-sm"
              style={{
                borderColor: "rgba(136,181,161,0.1)",
                background: "var(--stats-bg)",
              }}
            >
              <div className="max-w-6xl mx-auto section-padding py-5">
                {/* Section label row */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="section-label shrink-0">Impact</span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(136,181,161,0.12)" }}
                  />
                </div>

                {/* Stat items */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {STATS.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + i * 0.08 }}
                      className="pl-4 border-l transition-colors duration-200"
                      style={{ borderColor: "rgba(136,181,161,0.18)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(136,181,161,0.55)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(136,181,161,0.18)")
                      }
                    >
                      <span
                        className="font-bold text-3xl sm:text-4xl ember-text block"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground terminal-text">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
