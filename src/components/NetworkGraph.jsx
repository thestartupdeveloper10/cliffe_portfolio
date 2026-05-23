import { useState, useMemo } from "react";

const NODES = [
  // Languages — sage #88b5a1
  { id: "python",      label: "Python",      x: 380, y: 290, cat: "lang",   r: 18 },
  { id: "js",          label: "JS",           x: 295, y: 232, cat: "lang",   r: 16 },
  { id: "ts",          label: "TS",           x: 460, y: 242, cat: "lang",   r: 16 },
  { id: "go",          label: "Go",           x: 325, y: 348, cat: "lang",   r: 14 },
  { id: "bash",        label: "Bash",         x: 255, y: 308, cat: "lang",   r: 14 },

  // Web/Frontend — blue #3b82f6
  { id: "react",       label: "React",        x: 592, y: 202, cat: "web",    r: 17 },
  { id: "node",        label: "Node",         x: 668, y: 272, cat: "web",    r: 16 },
  { id: "next",        label: "Next.js",      x: 618, y: 318, cat: "web",    r: 14 },
  { id: "django",      label: "Django",       x: 555, y: 358, cat: "web",    r: 14 },
  { id: "fastapi",     label: "FastAPI",      x: 712, y: 352, cat: "web",    r: 13 },

  // DevOps — green #22c55e
  { id: "docker",      label: "Docker",       x: 195, y: 438, cat: "devops", r: 16 },
  { id: "k8s",         label: "K8s",          x: 108, y: 385, cat: "devops", r: 17 },
  { id: "terraform",   label: "Terraform",    x: 288, y: 492, cat: "devops", r: 15 },
  { id: "ansible",     label: "Ansible",      x: 155, y: 478, cat: "devops", r: 13 },
  { id: "nginx",       label: "NGINX",        x: 348, y: 462, cat: "devops", r: 13 },
  { id: "jenkins",     label: "Jenkins",      x: 422, y: 508, cat: "devops", r: 13 },

  // AI/ML — ice steel #c8dcf0
  { id: "tensorflow",  label: "TensorFlow",   x: 498, y: 118, cat: "ai",     r: 16 },
  { id: "langchain",   label: "LangChain",    x: 640, y: 105, cat: "ai",     r: 15 },
  { id: "huggingface", label: "HuggingFace",  x: 568, y: 55,  cat: "ai",     r: 14 },
  { id: "pandas",      label: "Pandas",       x: 438, y: 68,  cat: "ai",     r: 13 },
  { id: "sklearn",     label: "Scikit-Learn", x: 708, y: 148, cat: "ai",     r: 13 },

  // Cloud — cyan #06b6d4
  { id: "aws",         label: "AWS",          x: 858, y: 268, cat: "cloud",  r: 16 },
  { id: "gcp",         label: "GCP",          x: 878, y: 362, cat: "cloud",  r: 14 },
  { id: "huawei",      label: "Huawei Cloud", x: 820, y: 185, cat: "cloud",  r: 13 },
  { id: "azure",       label: "Azure",        x: 790, y: 438, cat: "cloud",  r: 13 },
  { id: "grafana",     label: "Grafana",      x: 760, y: 512, cat: "cloud",  r: 13 },
];

const EDGES = [
  ["python", "js"], ["python", "ts"], ["js", "ts"], ["python", "go"],
  ["js", "react"], ["ts", "react"], ["js", "node"], ["ts", "node"],
  ["python", "django"], ["python", "fastapi"],
  ["react", "next"], ["node", "next"], ["node", "fastapi"],
  ["python", "ansible"], ["bash", "docker"], ["bash", "ansible"], ["bash", "k8s"],
  ["python", "tensorflow"], ["python", "langchain"], ["python", "pandas"], ["python", "sklearn"],
  ["docker", "k8s"], ["docker", "jenkins"], ["jenkins", "terraform"],
  ["docker", "ansible"], ["k8s", "grafana"], ["k8s", "nginx"],
  ["k8s", "aws"], ["k8s", "gcp"], ["terraform", "aws"],
  ["terraform", "gcp"], ["terraform", "huawei"], ["terraform", "azure"],
  ["tensorflow", "huggingface"], ["langchain", "huggingface"],
  ["pandas", "sklearn"], ["pandas", "tensorflow"],
  ["node", "aws"], ["node", "docker"], ["react", "aws"],
  ["tensorflow", "aws"], ["langchain", "gcp"],
  ["aws", "gcp"], ["aws", "huawei"], ["gcp", "azure"], ["azure", "grafana"],
];

const CAT_COLORS = {
  lang:   "#88b5a1",
  web:    "#a4bcd1",
  devops: "#74bba4",
  ai:     "#c8dcf0",
  cloud:  "#9ecee0",
};

const CAT_LABELS = {
  lang: "Languages", web: "Web", devops: "DevOps", ai: "AI / ML", cloud: "Cloud",
};

const FLOAT_CLASSES = [
  "node-float-0", "node-float-1", "node-float-2",
  "node-float-3", "node-float-4", "node-float-5",
];

// activeCat — externally driven category highlight (uses graph key space: lang/web/devops/ai/cloud)
// onCatChange(cat | null) — fires when internal hover changes category
export default function NetworkGraph({ activeCat, onCatChange }) {
  const [hovered, setHovered] = useState(null);

  const nodeMap = useMemo(() => {
    const m = {};
    NODES.forEach((n) => { m[n.id] = n; });
    return m;
  }, []);

  const adjacency = useMemo(() => {
    const adj = {};
    NODES.forEach((n) => { adj[n.id] = new Set(); });
    EDGES.forEach(([a, b]) => { adj[a].add(b); adj[b].add(a); });
    return adj;
  }, []);

  const connected = useMemo(() => {
    if (!hovered) return null;
    return adjacency[hovered] || new Set();
  }, [hovered, adjacency]);

  const nodeOpacity = (id) => {
    const node = nodeMap[id];
    // External category highlight (no internal hover active)
    if (activeCat && !hovered) {
      return node.cat === activeCat ? 0.92 : 0.12;
    }
    // Internal node hover
    if (!hovered) return 0.72;
    if (id === hovered) return 1;
    if (connected.has(id)) return 0.88;
    return 0.18;
  };

  const edgeStyle = (a, b) => {
    const na = nodeMap[a];
    const nb = nodeMap[b];
    // External category highlight
    if (activeCat && !hovered) {
      const bothInCat = na.cat === activeCat && nb.cat === activeCat;
      if (bothInCat) return { stroke: CAT_COLORS[activeCat], opacity: 0.7, width: 1.3 };
      const oneInCat = na.cat === activeCat || nb.cat === activeCat;
      if (oneInCat) return { stroke: CAT_COLORS[activeCat], opacity: 0.2, width: 0.7 };
      return { stroke: "var(--graph-edge)", opacity: 0.04, width: 0.5 };
    }
    // Internal node hover
    if (!hovered) return { stroke: "var(--graph-edge)", opacity: 0.55, width: 0.8 };
    const hit = (a === hovered && connected.has(b)) || (b === hovered && connected.has(a));
    if (hit) return { stroke: "#88b5a1", opacity: 0.75, width: 1.4 };
    return { stroke: "var(--graph-edge)", opacity: 0.07, width: 0.6 };
  };

  const handleEnter = (node) => {
    setHovered(node.id);
    onCatChange?.(node.cat);
  };

  const handleLeave = () => {
    setHovered(null);
    onCatChange?.(null);
  };

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1000 560"
        className="w-full"
        style={{ maxHeight: "520px" }}
        aria-label="Skills neural network"
      >
        {/* Edges */}
        <g>
          {EDGES.map(([a, b], i) => {
            const na = nodeMap[a];
            const nb = nodeMap[b];
            if (!na || !nb) return null;
            const s = edgeStyle(a, b);
            return (
              <line
                key={i}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke={s.stroke}
                strokeOpacity={s.opacity}
                strokeWidth={s.width}
                style={{ transition: "stroke 0.22s, stroke-opacity 0.22s, stroke-width 0.22s" }}
              />
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {NODES.map((node, i) => {
            const color  = CAT_COLORS[node.cat];
            const isHov  = hovered === node.id;
            const isCat  = activeCat === node.cat && !hovered;
            const floatCls = FLOAT_CLASSES[i % FLOAT_CLASSES.length];

            return (
              <g
                key={node.id}
                className={floatCls}
                onMouseEnter={() => handleEnter(node)}
                onMouseLeave={handleLeave}
                style={{
                  cursor: "pointer",
                  opacity: nodeOpacity(node.id),
                  transition: "opacity 0.22s",
                }}
              >
                {/* Outer glow */}
                {(isHov || isCat) && (
                  <circle
                    cx={node.x} cy={node.y}
                    r={node.r + (isCat ? 7 : 9)}
                    fill="none"
                    stroke={color}
                    strokeOpacity={isCat ? 0.25 : 0.35}
                    strokeWidth={1.5}
                  />
                )}
                {/* Body */}
                <circle
                  cx={node.x} cy={node.y} r={node.r}
                  fill={color}
                  fillOpacity={isHov ? 0.85 : isCat ? 0.6 : 0.18}
                  stroke={color}
                  strokeWidth={isHov || isCat ? 1.6 : 1}
                  strokeOpacity={isHov || isCat ? 1 : 0.55}
                  style={{ transition: "all 0.2s" }}
                />
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + node.r + 13}
                  textAnchor="middle"
                  fontSize={8.5}
                  fill={color}
                  fillOpacity={isHov || isCat ? 1 : 0.6}
                  fontFamily="'JetBrains Mono', monospace"
                  style={{ transition: "fill-opacity 0.2s", userSelect: "none" }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Legend — hoverable to trigger external cat highlight */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 justify-center">
        {Object.entries(CAT_COLORS).map(([cat, color]) => (
          <div
            key={cat}
            className="flex items-center gap-1.5 cursor-default"
            onMouseEnter={() => onCatChange?.(cat)}
            onMouseLeave={() => onCatChange?.(null)}
          >
            <div
              className="w-2 h-2 rounded-full transition-transform duration-150"
              style={{
                background: color,
                transform: activeCat === cat ? "scale(1.5)" : "scale(1)",
              }}
            />
            <span
              className="text-xs terminal-text transition-colors duration-150"
              style={{ color: activeCat === cat ? color : "hsl(var(--muted-foreground))" }}
            >
              {CAT_LABELS[cat]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
