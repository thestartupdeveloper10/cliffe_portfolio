import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, XCircle, Mail, Github, Linkedin } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: <Mail className="w-5 h-5" style={{ color: "#88b5a1" }} />,
    label: "Email",
    value: "owinocliffe10@gmail.com",
    href: "mailto:owinocliffe10@gmail.com",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/thestartupdeveloper10",
    href: "https://github.com/thestartupdeveloper10",
    iconClass: "text-foreground",
  },
  {
    icon: <Linkedin className="w-5 h-5" style={{ color: "#a4bcd1" }} />,
    label: "LinkedIn",
    value: "linkedin.com/in/cliffe-ibande",
    href: "https://www.linkedin.com/in/cliffe-ibande-2973b2261/",
  },
];

const inputCls =
  "w-full bg-transparent border-b pb-2 text-sm outline-none transition-colors duration-200 terminal-text placeholder:text-muted-foreground/40 text-foreground";
const inputStyle = {
  borderColor: "rgba(136,181,161,0.2)",
};

export default function Contact() {
  const form = useRef();
  const [notification, setNotification] = useState({ show: false, success: false });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = (fd) => {
    const e = {};
    if (!fd.get("first_name").trim()) e.first_name = "Required";
    if (!fd.get("last_name").trim())  e.last_name  = "Required";
    const email = fd.get("user_email").trim();
    if (!email) e.user_email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      e.user_email = "Invalid email";
    if (!fd.get("subject").trim()) e.subject = "Required";
    const msg = fd.get("message").trim();
    if (!msg) e.message = "Required";
    else if (msg.length < 10) e.message = "Min 10 characters";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setErrors({});
    const fd = new FormData(e.target);
    const errs = validate(fd);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setSending(false);
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then(() => {
        setNotification({ show: true, success: true });
        e.target.reset();
        setSending(false);
        setTimeout(() => setNotification({ show: false, success: true }), 5000);
      })
      .catch(() => {
        setNotification({ show: true, success: false });
        setSending(false);
        setTimeout(() => setNotification({ show: false, success: false }), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-page-alt)" }}
    >
      <div
        className="gradient-orb w-[400px] h-[400px] bottom-[-80px] right-[-80px]"
        style={{ background: "rgba(136,181,161,0.05)" }}
      />
      <div
        className="gradient-orb w-[300px] h-[300px] top-[-60px] left-[-60px]"
        style={{ background: "rgba(164,188,209,0.04)" }}
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
          <span className="section-label">Let&apos;s Connect</span>
          <h2
            className="mt-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get In{" "}
            <span className="ember-text">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
            Open to full-time roles, freelance projects, or just a good technical conversation.
            I&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have a project, a role, or a technical question — send it through.
            </p>

            <div className="space-y-3 pt-2">
              {CONTACT_INFO.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border transition-colors duration-200 group"
                  style={{ background: "var(--bg-card)", borderColor: "rgba(136,181,161,0.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(136,181,161,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(136,181,161,0.1)";
                  }}
                >
                  <div className={`shrink-0 mt-0.5 ${info.iconClass || ""}`}>{info.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide terminal-text">
                      {info.label}
                    </p>
                    <p
                      className="text-sm font-medium mt-0.5 terminal-text transition-colors text-muted-foreground"
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div
              className="flex items-center gap-2.5 p-4 rounded-xl border"
              style={{ borderColor: "rgba(34,197,94,0.2)", background: "rgba(34,197,94,0.05)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-sm" style={{ color: "#16a34a" }}>
                <span className="font-semibold">Available</span> for new opportunities
              </p>
            </div>
          </motion.div>

          {/* Right — terminal form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {/* Notification */}
            {notification.show && (
              <div
                className={`mb-4 flex items-start gap-3 p-4 rounded-xl border text-sm ${
                  notification.success
                    ? "border-emerald-500/20 text-emerald-700"
                    : "border-red-500/20 text-red-600"
                }`}
                style={{
                  background: notification.success
                    ? "rgba(34,197,94,0.05)"
                    : "rgba(239,68,68,0.05)",
                }}
              >
                {notification.success ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold terminal-text">
                    {notification.success ? "Message sent!" : "Failed to send"}
                  </p>
                  <p className="text-xs opacity-80 mt-0.5">
                    {notification.success
                      ? "I'll get back to you within 24 hours."
                      : "Please try again or email me directly."}
                  </p>
                </div>
              </div>
            )}

            {/* Terminal window */}
            <div
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: "rgba(136,181,161,0.18)" }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b"
                style={{ background: "var(--bg-card-elevated)", borderColor: "rgba(136,181,161,0.1)" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 terminal-text text-xs text-muted-foreground">
                  cliffe@portfolio:~ $ contact --init
                </span>
              </div>

              {/* Form body */}
              <div className="p-6 md:p-8" style={{ background: "var(--bg-terminal)" }}>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="terminal-text text-xs font-medium" style={{ color: "#88b5a1" }}>
                          ~/first_name
                        </span>
                        {errors.first_name && (
                          <span className="text-red-500 text-xs terminal-text">— {errors.first_name}</span>
                        )}
                      </div>
                      <input
                        name="first_name"
                        placeholder="John"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#88b5a1"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(136,181,161,0.2)"; }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="terminal-text text-xs font-medium" style={{ color: "#88b5a1" }}>
                          ~/last_name
                        </span>
                        {errors.last_name && (
                          <span className="text-red-500 text-xs terminal-text">— {errors.last_name}</span>
                        )}
                      </div>
                      <input
                        name="last_name"
                        placeholder="Doe"
                        className={inputCls}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#88b5a1"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(136,181,161,0.2)"; }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="terminal-text text-xs font-medium" style={{ color: "#88b5a1" }}>
                        ~/email
                      </span>
                      {errors.user_email && (
                        <span className="text-red-500 text-xs terminal-text">— {errors.user_email}</span>
                      )}
                    </div>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="john@example.com"
                      className={inputCls}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#88b5a1"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(136,181,161,0.2)"; }}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="terminal-text text-xs font-medium" style={{ color: "#88b5a1" }}>
                        ~/subject
                      </span>
                      {errors.subject && (
                        <span className="text-red-500 text-xs terminal-text">— {errors.subject}</span>
                      )}
                    </div>
                    <input
                      name="subject"
                      placeholder="Project inquiry / Hiring / Collaboration"
                      className={inputCls}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#88b5a1"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(136,181,161,0.2)"; }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="terminal-text text-xs font-medium" style={{ color: "#88b5a1" }}>
                        ~/message
                      </span>
                      {errors.message && (
                        <span className="text-red-500 text-xs terminal-text">— {errors.message}</span>
                      )}
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputCls} resize-none`}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#88b5a1"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(136,181,161,0.2)"; }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: "#88b5a1",
                      color: "#0d1a14",
                      fontFamily: "Syne, sans-serif",
                      letterSpacing: "0.03em",
                    }}
                    onMouseEnter={(e) => { if (!sending) e.currentTarget.style.background = "#a6cbbf"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#88b5a1"; }}
                  >
                    <Send className="w-4 h-4" />
                    {sending ? "Transmitting..." : "Transmit Message"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
