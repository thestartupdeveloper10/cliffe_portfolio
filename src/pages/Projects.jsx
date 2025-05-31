// src/app/(root)/projects/page.js
import LargeProjectCard from "@/components/LargeProjectCard";
import SmallProjectCard from "@/components/SmallProjectCard";
import projectData from "@/assets/projectdata";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="p-4  mx-auto" id="projects">
      <div className="text-center mb-12">
  <h2 className="text-h1-sm md:text-h1-md lg:text-h1-lg font-bold text-gray-900 dark:text-white mb-4">
    Projects
  </h2>
  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
    A showcase of successful solutions spanning e-commerce, sports, and educational platforms.
  </p>
</div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <motion.div
        className="md:col-span-4">
          <LargeProjectCard project={projectData[0]} />
        </motion.div>
        <motion.div
        className="md:col-span-2">
          <SmallProjectCard project={projectData[1]} />
        </motion.div>

        <motion.div 
        className="md:col-span-2">
          <SmallProjectCard project={projectData[5]} />
        </motion.div>
       
        <motion.div
        className="md:col-span-4">
          <LargeProjectCard project={projectData[3]} />
        </motion.div>
        <motion.div
        className="md:col-span-4">
          <LargeProjectCard project={projectData[4]} />
        </motion.div>

        <motion.div 
        className="md:col-span-2">
          <SmallProjectCard project={projectData[2]} />
        </motion.div>

        
      </div>
    </div>
  );
}