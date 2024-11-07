import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { 
    scale: 0,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

export default function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      variants={cardVariants}
    >
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <motion.div
            variants={iconVariants}
            className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300"
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          {/* <motion.div
            className="flex items-center text-indigo-600 cursor-pointer"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mr-2">Read More</p>
            <ArrowRight size={16} />
          </motion.div> */}
        </CardFooter>
      </Card>
    </motion.div>
  );
}