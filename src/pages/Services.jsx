import ServiceCard from "@/components/ServiceCard";
import { IoMdAnalytics } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";
import { motion } from "framer-motion";


const services = [
  {
    id: 1,
    title: 'Fullstack Web Development',
    description: 'React and Node.js web apps, from UI to API to deployment. I handle both ends of the stack.',
    icon: <CgWebsite size={120} className="text-indigo-600" />
  },
  {
    id: 2,
    title: 'Fullstack Mobile Development',
    description: 'Cross-platform React Native apps with real backends. Offline-first where the network can\'t be trusted.',
    icon: <CiMobile3 size={120} className="text-indigo-600" />
  },
  {
    id: 3,
    title: 'ML and Data Analysis',
    description: 'ML pipelines, RAG systems, and data dashboards. Focused on models that ship, not just notebooks that run.',
    icon: <IoMdAnalytics size={120} className="text-indigo-600" />
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07
    }
  }
};

export default function Services() {
  return (
    <motion.div 
      className="py-28 px-4 mx-auto" 
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
  className="text-center mb-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-h1-sm md:text-h1-md lg:text-h1-lg font-bold text-gray-900 dark:text-white mb-4">
    Services
  </h2>
  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
    Web, mobile, and ML work — built to production standards.
  </p>
</motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </motion.div>
  );
}