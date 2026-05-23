import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";

const SOCIAL = [
  { label: "GitHub",     icon: <Github className="w-5 h-5" />,           href: "https://github.com/thestartupdeveloper10" },
  { label: "LinkedIn",   icon: <Linkedin className="w-5 h-5" />,         href: "https://www.linkedin.com/in/cliffe-ibande-2973b2261/" },
  { label: "Twitter / X",icon: <FaSquareXTwitter className="w-5 h-5" />, href: "https://x.com/_startup_Dev" },
  { label: "Email",      icon: <Mail className="w-5 h-5" />,              href: "mailto:owinocliffe10@gmail.com" },
];

const NAV_LINKS = [
  { label: "Home",           id: "home" },
  { label: "About",          id: "about" },
  { label: "Skills",         id: "skills" },
  { label: "Projects",       id: "projects" },
  { label: "Experience",     id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact",        id: "contact" },
];

const LIVE_PROJECTS = [
  { label: "The Board FC",  href: "https://theboardfc-uiff8.kinsta.page" },
  { label: "Label Safi",    href: "https://labalsafike.onrender.com/" },
  { label: "Royal Watches", href: "https://royalwatcheske.onrender.com/" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ background: "var(--bg-page)", borderColor: "rgba(136,181,161,0.08)" }}
    >
      {/* Top ember line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(136,181,161,0.4) 50%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto section-padding py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3
                className="font-bold text-xl text-foreground"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Cliffe Owino Ibande
              </h3>
              <p className="text-sm mt-0.5 font-medium terminal-text" style={{ color: "#88b5a1" }}>
                Associate Software Engineer
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building reliable, scalable systems — from M-Pesa fintech infrastructure
              to AI-driven applications.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg text-muted-foreground transition-all duration-200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#88b5a1";
                    e.currentTarget.style.background = "rgba(136,181,161,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.background = "";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4 terminal-text"
              style={{ color: "#88b5a1" }}
            >
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-muted-foreground text-left transition-colors duration-200"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#88b5a1"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Live projects */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-4 terminal-text"
              style={{ color: "#88b5a1" }}
            >
              Live Projects
            </h4>
            <div className="space-y-2.5">
              {LIVE_PROJECTS.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-sm text-muted-foreground transition-colors py-1 border-b"
                  style={{ borderColor: "rgba(136,181,161,0.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.borderColor = "rgba(136,181,161,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.borderColor = "rgba(136,181,161,0.1)";
                  }}
                >
                  <span>{p.label}</span>
                  <ExternalLink
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#88b5a1" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(136,181,161,0.08)" }}
        >
          <p className="text-sm text-muted-foreground terminal-text">
            © {year} Cliffe Owino Ibande. Built with React &amp; ❤️.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground terminal-text">
              Nairobi, Kenya 🇰🇪
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors"
              aria-label="Back to top"
              onMouseEnter={(e) => { e.currentTarget.style.color = "#88b5a1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
