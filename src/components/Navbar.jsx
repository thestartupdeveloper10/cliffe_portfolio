import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/imgs/logo2.png";
import { useTheme } from "@/components/ThemeProvider";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

const menuVariants = {
  closed: { opacity: 0, x: "100%", transition: { duration: 0.22 } },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, when: "beforeChildren", staggerChildren: 0.06 },
  },
};
const itemVariants = {
  closed: { opacity: 0, x: 30 },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const ids = NAV_ITEMS.map((n) => n.id);
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b"
      style={{
        background: isScrolled ? "var(--nav-bg)" : "transparent",
        borderColor: isScrolled ? "rgba(136,181,161,0.08)" : "transparent",
        backdropFilter: isScrolled && !isOpen ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled && !isOpen ? "blur(12px)" : "none",
        boxShadow: isScrolled && !isOpen ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="max-w-6xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16 py-3">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("home")}
            className="relative z-50"
          >
            <img src={logo} alt="Cliffe Ibande" className="h-10" />
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-2 rounded-lg text-sm transition-colors duration-200 font-display ${
                  active === item.id
                    ? "text-[#88b5a1]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 500 }}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: "#88b5a1" }}
                  />
                )}
              </button>
            ))}

            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={toggle}
              className="ml-1 p-3 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-colors duration-200"
              style={{
                fontFamily: "Syne, sans-serif",
                borderColor: "rgba(136,181,161,0.4)",
                color: "#88b5a1",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(136,181,161,0.08)";
                e.currentTarget.style.borderColor = "rgba(136,181,161,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "";
                e.currentTarget.style.borderColor = "rgba(136,181,161,0.4)";
              }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={toggle}
              className="relative z-50 p-3 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div key="sun-m" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Sun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div key="moon-m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Moon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              className="relative z-50 p-2.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 backdrop-blur-lg z-40 md:hidden flex flex-col"
            style={{ background: "var(--nav-bg-mobile)" }}
          >
            <div className="px-5 pt-5">
              <img src={logo} alt="Cliffe Ibande" className="h-10" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => scrollTo(item.id)}
                  className={`w-64 text-center px-6 py-4 rounded-xl text-2xl font-bold transition-colors duration-200 ${
                    active === item.id
                      ? "text-[#88b5a1] bg-[rgba(136,181,161,0.08)]"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                variants={itemVariants}
                className="mt-4 terminal-text text-xs text-muted-foreground"
              >
                cliffe@portfolio:~$
              </motion.div>
            </div>

            {/* Bottom ember line */}
            <div
              className="h-0.5 w-full"
              style={{ background: "linear-gradient(90deg, transparent, #88b5a1 50%, transparent)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
