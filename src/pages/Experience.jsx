import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Database, LineChart, Smartphone, Server } from "lucide-react";

const experienceData = {
  currentRole: {
    company: "Techsavannah",
    logo: "/techsavannah-logo.png", // Replace with actual logo path
    period: "2023 - Present",
    role: "Full Stack Engineer",
    description: "Techsavanna excels as a top-tier provider of bespoke software solutions, elite IT consulting, and unwavering support services. Our mission is clear: empower businesses across diverse industries to optimize operations and achieve unparalleled success.",
    projects: [
      {
        name: "JamiiBudget",
        description: "A full-stack React Native expense tracking application with comprehensive financial management features.",
        technologies: ["React Native", "Appwrite", "Node.js", "Mobile Development"],
        icon: <Smartphone className="w-5 h-5" />
      }
    ],
    tags: ["Full Stack", "Mobile Development", "Cloud Services"]
  },
  previousRole: {
    company: "Huawei Technologies",
    logo: "/huawei-logo.png", // Replace with actual logo path
    period: "June 2023 - August 2023",
    role: "Undergraduate Industrial Attachment",
    description: "Contributed to data management and analytics projects, focusing on network experience monitoring and data visualization.",
    achievements: [
      {
        title: "GDE Implementation",
        description: "Created and refined data models for efficient data organization and management. Developed interactive dashboards for enhanced data visualization.",
        icon: <Database className="w-5 h-5" />
      },
      {
        title: "Data Cube Development",
        description: "Collaborated with team members to build and maintain data cubes for advanced analytics.",
        icon: <Server className="w-5 h-5" />
      },
      {
        title: "Network Monitoring",
        description: "Compiled comprehensive network experience monitoring reports and utilized data analysis techniques to extract actionable insights.",
        icon: <LineChart className="w-5 h-5" />
      }
    ],
    tags: ["Data Analysis", "Dashboard Development", "Network Monitoring"]
  }
};

export default function Experience() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-h1-sm md:text-h1-md lg:text-h1-lg font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey through my professional experience, showcasing my contributions and growth in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Current Role */}
          <motion.div
            // initial={{ opacity: 0, x: -20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">T</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {experienceData.currentRole.company}
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {experienceData.currentRole.period}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    Current
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {experienceData.currentRole.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {experienceData.currentRole.projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                        {project.icon}
                        <h3 className="font-semibold">{project.name}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary" 
                            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Previous Role */}
          <motion.div
            // initial={{ opacity: 0, x: -20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5, delay: 0.2 }}
            // viewport={{ once: true }}
          >
            <Card className=" backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-400 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-600 dark:text-red-200">H</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {experienceData.previousRole.company}
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {experienceData.previousRole.period}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {experienceData.previousRole.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="p-2 bg-red-100 dark:bg-red-300 rounded-lg h-fit">
                        {achievement.icon}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {experienceData.previousRole.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}