import { motion } from "framer-motion";
import { Clock, ArrowRight, Terminal } from "lucide-react";

const POSTS = [
  {
    id: 1,
    title: "Building a RAG Pipeline with LangChain and Hugging Face",
    excerpt:
      "A walkthrough of building a production-ready Retrieval-Augmented Generation system — from chunking strategy to vector store selection and latency optimisation.",
    tags: ["AI/ML", "LangChain", "Python"],
    readTime: "8 min",
    accentHex: "#a4bcd1",
  },
  {
    id: 2,
    title: "Kubernetes in Production: Lessons from Supporting M-Pesa",
    excerpt:
      "Real-world insights from managing high-availability Kubernetes clusters that process millions of mobile money transactions across five African nations.",
    tags: ["DevOps", "Kubernetes", "Fintech"],
    readTime: "10 min",
    accentHex: "#74bba4",
  },
  {
    id: 3,
    title: "Why Terraform + Ansible is My Go-To IaC Stack",
    excerpt:
      "Comparing popular infrastructure-as-code approaches and explaining why I pair Terraform for provisioning with Ansible for configuration management.",
    tags: ["DevOps", "Terraform", "Ansible"],
    readTime: "6 min",
    accentHex: "#a4bcd1",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-page)" }}>
      <div
        className="gradient-orb w-[350px] h-[350px] bottom-[10%] right-[-60px]"
        style={{ background: "rgba(164,188,209,0.05)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">Thoughts &amp; Writings</span>
            <h2
              className="mt-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Tech{" "}
              <span className="ember-violet-text">Blog</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
              Deep dives into DevOps, AI engineering, and full-stack development. Articles
              coming soon.
            </p>
          </div>

          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium w-fit shrink-0 terminal-text"
            style={{
              borderColor: "rgba(136,181,161,0.2)",
              color: "#88b5a1",
              background: "rgba(136,181,161,0.05)",
            }}
          >
            <Clock className="w-4 h-4" />
            Coming Soon
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden border flex flex-col transition-all duration-300"
              style={{ background: "var(--bg-card)", borderColor: `${post.accentHex}18` }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${post.accentHex}35`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${post.accentHex}18`; }}
            >
              {/* Header gradient */}
              <div
                className="h-32 flex items-center justify-center relative"
                style={{ background: `linear-gradient(135deg, ${post.accentHex}15 0%, var(--bg-card) 100%)` }}
              >
                <Terminal className="w-8 h-8" style={{ color: `${post.accentHex}30` }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs border terminal-text"
                    style={{
                      background: "rgba(0,0,0,0.12)",
                      color: `${post.accentHex}80`,
                      borderColor: `${post.accentHex}25`,
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tech-tag text-xs">{tag}</span>
                  ))}
                </div>

                <h3
                  className="font-semibold text-sm leading-snug mb-2 flex-1 text-foreground"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {post.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="text-xs text-muted-foreground flex items-center gap-1 terminal-text"
                  >
                    <Clock className="w-3 h-3" />
                    {post.readTime} read
                  </span>
                  <span
                    className="text-xs flex items-center gap-1 terminal-text cursor-not-allowed"
                    style={{ color: `${post.accentHex}45` }}
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
