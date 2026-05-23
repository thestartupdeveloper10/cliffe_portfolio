import {
  SiNodedotjs, SiReact, SiMongodb, SiMysql, SiFirebase,
  SiTailwindcss, SiTypescript, SiGraphql,
  SiAppwrite, SiPython, SiScikitlearn, SiTensorflow,
  SiPandas, SiNumpy, SiJupyter, SiOpencv,
  SiDocker, SiKubernetes, SiJenkins, SiNginx, SiAnsible,
  SiTerraform, SiLinux, SiPostgresql, SiRedis, SiGit,
  SiAmazonwebservices, SiGooglecloud, SiGrafana, SiPrometheus,
  SiNextdotjs, SiDjango, SiFlask, SiSpringboot,
  SiJavascript, SiHtml5, SiCss3,
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { SiPytorch } from 'react-icons/si';

export const skillsData = {
  languages: {
    title: "Languages",
    description: "Programming & scripting languages",
    color: "amber",
    gradient: "from-[rgba(136,181,161,0.1)] to-[rgba(106,157,141,0.05)]",
    borderColor: "border-[rgba(136,181,161,0.2)]",
    accentColor: "text-[#88b5a1]",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },

  webMobile: {
    title: "Web & Mobile",
    description: "Full-stack frameworks & libraries",
    color: "blue",
    gradient: "from-[rgba(164,188,209,0.1)] to-[rgba(122,156,184,0.05)]",
    borderColor: "border-[rgba(164,188,209,0.2)]",
    accentColor: "text-[#a4bcd1]",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "React Native", icon: SiReact },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  devops: {
    title: "DevOps & Infrastructure",
    description: "CI/CD, containers & automation",
    color: "emerald",
    gradient: "from-[rgba(116,187,164,0.1)] to-[rgba(88,157,134,0.05)]",
    borderColor: "border-[rgba(116,187,164,0.2)]",
    accentColor: "text-[#74bba4]",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "Jenkins", icon: SiJenkins },
      { name: "NGINX", icon: SiNginx },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
    ],
  },

  aiMl: {
    title: "AI & Machine Learning",
    description: "LLMs, ML frameworks & data science",
    color: "violet",
    gradient: "from-[rgba(200,218,240,0.1)] to-[rgba(164,188,209,0.05)]",
    borderColor: "border-[rgba(200,218,240,0.2)]",
    accentColor: "text-[#c8dcf0]",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "OpenAI", icon: TbBrandOpenai },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Jupyter", icon: SiJupyter },
    ],
  },

  cloudData: {
    title: "Cloud & Databases",
    description: "Cloud platforms, monitoring & data stores",
    color: "cyan",
    gradient: "from-[rgba(158,206,224,0.1)] to-[rgba(120,176,200,0.05)]",
    borderColor: "border-[rgba(158,206,224,0.2)]",
    accentColor: "text-[#9ecee0]",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Grafana", icon: SiGrafana },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Firebase", icon: SiFirebase },
      { name: "Appwrite", icon: SiAppwrite },
    ],
  },
};
