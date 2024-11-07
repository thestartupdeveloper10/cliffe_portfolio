import { 
    SiNodedotjs, SiReact, SiMongodb, SiMysql, SiFirebase, 
    SiTailwindcss, SiTypescript, SiGraphql, SiCreatereactapp,
    SiAppwrite, SiPython, SiScikitlearn, SiTensorflow, 
    SiPandas, SiNumpy, SiJupyter, SiOpencv
  } from 'react-icons/si';
  import { TbBrandOpenai } from 'react-icons/tb';
  
  export const skillsData = {
    webDevelopment: {
      title: "Web Development",
      description: "Full-stack web development with modern technologies",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: "Advanced" },
        { name: "React", icon: SiReact, level: "Advanced" },
        { name: "MongoDB", icon: SiMongodb, level: "Advanced" },
        { name: "MySQL", icon: SiMysql, level: "Intermediate" },
        { name: "Firebase", icon: SiFirebase, level: "Intermediate" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
        { name: "TypeScript", icon: SiTypescript, level: "Intermediate" },
        { name: "GraphQL", icon: SiGraphql, level: "Intermediate" }
      ]
    },
    mobileDevelopment: {
      title: "Mobile Development",
      description: "Cross-platform mobile app development",
      skills: [
        { name: "React Native", icon:SiCreatereactapp, level: "Advanced" },
        { name: "Appwrite", icon: SiAppwrite, level: "Intermediate" }
      ]
    },
    machineLearning: {
      title: "Machine Learning & Data Science",
      description: "Data analysis and ML model development",
      skills: [
        { name: "Python", icon: SiPython, level: "Advanced" },
        { name: "Scikit-learn", icon: SiScikitlearn, level: "Advanced" },
        { name: "TensorFlow", icon: SiTensorflow, level: "Intermediate" },
        { name: "Pandas", icon: SiPandas, level: "Advanced" },
        { name: "NumPy", icon: SiNumpy, level: "Advanced" },
        { name: "Jupyter", icon: SiJupyter, level: "Advanced" },
        { name: "OpenCV", icon: SiOpencv, level: "Intermediate" },
        { name: "OpenAI", icon: TbBrandOpenai, level: "Intermediate" }
      ]
    }
  };