import ServiceCard from "@/components/ServiceCard";
import { IoMdAnalytics } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: 'Fullstack Web Development',
    description: 'Building responsive and scalable web applications using modern technologies like React, Node.js, and cloud services. Specializing in creating seamless user experiences with robust backend solutions.',
    icon: <CgWebsite size={120} className="text-indigo-600" />
  },
  {
    id: 2,
    title: 'Fullstack Mobile Development',
    description: 'Developing cross-platform mobile applications using React Native. Crafting native-like experiences with efficient backend integration, offline-first capabilities and scalable applications that grow with user demands.',
    icon: <CiMobile3 size={120} className="text-indigo-600" />
  },
  {
    id: 3,
    title: 'ML and Data Analysis',
    description: 'Implementing machine learning solutions and data analytics pipelines. Specializing in predictive modeling, data visualization, and extracting actionable insights from complex datasets.',
    icon: <IoMdAnalytics size={120} className="text-indigo-600" />
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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
    Leveraging cutting-edge technologies to deliver comprehensive solutions across web, mobile, and data science domains.
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