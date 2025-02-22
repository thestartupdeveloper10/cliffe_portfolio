import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiKenya } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import resume from "../assets/cliffe ibande CV1.pdf";

const combinedVariants = {
  hidden: {
    y: 25,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
};

const socialVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const iconVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const kenyaFlagVariants = {
  initial: {
    scale: 1,
    color: "green"
  },
  hover: {
    scale: 2,
    color: ["#000000", "#bb0000", "#228b22", "#000000"],
    transition: {
      scale: {
        duration: 0.3,
        ease: "easeInOut"
      },
      color: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }
};

const buttonVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function Landing() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#fafafa] dark:bg-[#161515]" id="home">
      <motion.div
        variants={combinedVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center flex-col gap-5 justify-center"
      >
        <div className="flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="text-gray-600 dark:text-gray-400">
            <FaLocationDot />
          </div>
          <h4 className="text-gray-600 dark:text-gray-400">Based in Kenya,</h4>
          <motion.div
            variants={kenyaFlagVariants}
            initial="initial"
            whileHover="hover"
            className="text-2xl cursor-pointer text-gray-900 dark:text-white"
          >
            <GiKenya />
          </motion.div>
        </div>

        <motion.h1 className="text-h1-sm md:text-h1-md lg:text-h1-lg capitalize text-gray-900 dark:text-white">
          CLIFFE OWINO IBANDE
        </motion.h1>

        <motion.div className="flex-col lg:flex-row flex gap-2 items-center text-gray-600 dark:text-gray-400">
          <h3>Full-stack Web and Mobile Developer </h3>
          <h3>• ML Engineer</h3>
        </motion.div>

        <motion.a
          href={resume}
          download='Resume'
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
        >
          <FaDownload className="text-sm" />
          <span>Download CV</span>
        </motion.a>

        <motion.div
          variants={socialVariants}
          className="flex gap-5"
        >
          <motion.a
            href="https://x.com/_startup_Dev"
            variants={iconVariants}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <FaSquareXTwitter className="h-8 w-8" />
          </motion.a>

          <motion.a
            href="https://github.com/thestartupdeveloper10"
            variants={iconVariants}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithubSquare className="h-8 w-8" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/cliffe-ibande-2973b2261/"
            variants={iconVariants}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin className="h-8 w-8" />
          </motion.a>
        </motion.div>

        {/* Optional: Add a subtle gradient or background effect */}
        {/* <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-transparent to-white dark:from-transparent dark:to-gray-900 pointer-events-none" /> */}
      </motion.div>
    </div>
  );
}