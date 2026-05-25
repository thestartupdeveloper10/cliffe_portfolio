import { motion } from "framer-motion";
import TiltedCard from "@/components/TiltedCard";
import HeroIMG from "@/assets/imgs/hero.png";

const highlights = [
  { label: "Role", value: "Software Engineer @ Prodapt Ltd", color: "#88b5a1" },
  { label: "Education", value: "BSc Software Engineering — Kisii University", color: "#a4bcd1" },
  { label: "Location", value: "Nairobi, Kenya", color: "#74bba4" },
  { label: "Focus", value: "DevOps · Full-Stack · AI/ML", color: "#a4bcd1" },
];

const interests = ["Football ⚽", "Travelling ✈️", "Reading 📚", "Open Source 🚀", "Fintech 💳"];

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden relative" style={{ background: "var(--bg-page-alt)" }}>
      {/* Orbs */}
      <div
        className="gradient-orb w-[400px] h-[400px] top-[-80px] right-[0%]"
        style={{ background: "rgba(164,188,209,0.05)" }}
      />
      <div
        className="gradient-orb w-[300px] h-[300px] bottom-[-60px] left-[5%]"
        style={{ background: "rgba(136,181,161,0.04)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Who I Am</span>
          <h2
            className="mt-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            About{" "}
            <span className="ember-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a software engineer with a BSc in Software Engineering and hands-on
              experience across DevOps, full-stack development, and AI/ML. Currently I support{" "}
              <span style={{ color: "#88b5a1" }} className="font-medium">
                M-Pesa operations across 5 African nations
              </span>{" "}
              at Prodapt Ltd, keeping platforms reliable that process over 1 million daily
              transactions.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I build scalable systems — from microservice deployments orchestrated with Kubernetes
              and Terraform, to RAG pipelines powered by Hugging Face Transformers. Infrastructure
              and application code: I&apos;m comfortable in both.
            </p>

            {/* Key details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start gap-3 p-3 rounded-xl border"
                  style={{ background: "var(--bg-card)", borderColor: "rgba(136,181,161,0.1)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                    style={{ background: h.color }}
                  />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide terminal-text">
                      {h.label}
                    </p>
                    <p className="text-sm font-medium mt-0.5 text-foreground">
                      {h.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="pt-1">
              <p className="section-label mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-sm rounded-full border transition-colors duration-200 hover:border-[rgba(136,181,161,0.4)] text-muted-foreground"
                    style={{
                      background: "rgba(136,181,161,0.04)",
                      borderColor: "rgba(136,181,161,0.15)",
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Ember glow ring */}
              <div
                className="absolute inset-[-20px] rounded-3xl border pointer-events-none"
                style={{ borderColor: "rgba(136,181,161,0.15)" }}
              />
              {/* Violet glow corner accent */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: "rgba(164,188,209,0.25)",
                  filter: "blur(30px)",
                }}
              />
              <TiltedCard
                imageSrc={HeroIMG}
                altText="Cliffe Owino Ibande"
                captionText="Cliffe Owino Ibande"
                containerHeight="380px"
                containerWidth="300px"
                imageHeight="380px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.04}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
