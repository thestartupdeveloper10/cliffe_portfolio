import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import NetworkGraph from "@/components/NetworkGraph";
import { skillsData } from "@/assets/skilldata";

const DATA_TO_GRAPH = {
  languages: "lang",
  webMobile: "web",
  devops: "devops",
  aiMl: "ai",
  cloudData: "cloud",
};

const CAT_HEX = {
  languages: "#88b5a1",
  webMobile: "#a4bcd1",
  devops:    "#74bba4",
  aiMl:      "#c8dcf0",
  cloudData: "#9ecee0",
};

const skillShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
});

const dataShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(skillShape).isRequired,
});

SkillColumn.propTypes = {
  catKey: PropTypes.string.isRequired,
  data: dataShape.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  isDimmed: PropTypes.bool.isRequired,
};

function SkillColumn({ catKey, data, isHighlighted, isDimmed }) {
  const color = CAT_HEX[catKey];

  return (
    <motion.div
      animate={{ opacity: isDimmed ? 0.28 : 1 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl overflow-hidden"
      style={{
        background: isHighlighted ? `${color}10` : "var(--bg-card)",
        border: `1px solid ${isHighlighted ? color + "44" : color + "1a"}`,
        borderLeft: `3px solid ${isHighlighted ? color : color + "55"}`,
        transition: "background 0.22s, border-color 0.22s",
      }}
    >
      <div
        className="px-4 pt-4 pb-3 border-b"
        style={{ borderColor: isHighlighted ? `${color}30` : `${color}15` }}
      >
        <p
          className="text-xs font-semibold terminal-text tracking-wider"
          style={{ color: isHighlighted ? color : `${color}99` }}
        >
          {data.title.toUpperCase()}
        </p>
      </div>

      <div className="p-4 grid grid-cols-2 gap-2">
        {data.skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="flex items-center gap-1.5 min-w-0">
              <Icon
                size={13}
                style={{ color: isHighlighted ? color : `${color}77`, flexShrink: 0 }}
              />
              <span
                className="terminal-text truncate"
                style={{
                  fontSize: "9px",
                  color: isHighlighted ? color : "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCat, setActiveCat] = useState(null);

  const handleGraphCatChange = (graphCat) => {
    setActiveCat(graphCat);
  };

  const handleColumnHover = (dataKey) => {
    setActiveCat(dataKey ? DATA_TO_GRAPH[dataKey] : null);
  };

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-page)" }}
    >
      <div
        className="gradient-orb w-[500px] h-[500px] top-[-80px] right-[-100px]"
        style={{ background: "rgba(136,181,161,0.05)" }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] bottom-[5%] left-[-80px]"
        style={{ background: "rgba(164,188,209,0.05)" }}
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
          <span className="section-label">What I Work With</span>
          <h2
            className="mt-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Technical{" "}
            <span className="ember-violet-text">Expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
            Hover a graph node or a category column — both surfaces light up each other.
          </p>
        </motion.div>

        {/* Network graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border p-4 md:p-6 mb-8"
          style={{
            background: "var(--bg-page-alt)",
            borderColor: "rgba(136,181,161,0.12)",
          }}
        >
          <NetworkGraph activeCat={activeCat} onCatChange={handleGraphCatChange} />
        </motion.div>

        {/* Skill columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {Object.entries(skillsData).map(([catKey, data]) => {
            const graphKey = DATA_TO_GRAPH[catKey];
            const isHighlighted = activeCat === graphKey;
            const isDimmed = activeCat !== null && activeCat !== graphKey;
            return (
              <div
                key={catKey}
                onMouseEnter={() => handleColumnHover(catKey)}
                onMouseLeave={() => handleColumnHover(null)}
              >
                <SkillColumn
                  catKey={catKey}
                  data={data}
                  isHighlighted={isHighlighted}
                  isDimmed={isDimmed}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
