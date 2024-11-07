import { useState, useEffect } from 'react';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

export const personalQuotes = [
  "From concept to deployment, I thrive on bringing innovative ideas to life through clean code, intuitive design, and cutting-edge technology stack implementation",
  "Dedicated full-stack developer with a vision for creating intuitive applications that bridge the gap between human needs and technological possibilities",
  "Merging the art of design with the precision of code, I create digital experiences that resonate with users and deliver lasting impact across platforms",
  "Leveraging the power of AI and machine learning to transform raw data into meaningful insights, while crafting intelligent solutions that adapt and evolve",
  "Passionate about crafting digital solutions that transform complex challenges into seamless experiences, combining innovation with technical excellence",
  "Committed to pushing the boundaries of what's possible in web and mobile development, while ensuring every line of code contributes to a more efficient digital world",
  "Combining technical expertise with creative problem-solving to develop robust applications that not only meet current needs but anticipate future challenges",
  "Building bridges between data science and user experience, creating intelligent applications that make complex technologies accessible and meaningful",
  "Driven by the belief that great software is born from the perfect balance of innovative thinking, technical excellence, and user-centered design principles",
  "Transforming visions into reality through the seamless integration of front-end creativity and back-end reliability, powered by modern technology stacks"
];

export default function Quote() {
  const [currentQuote, setCurrentQuote] = useState(personalQuotes[0]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(false);
      
      setTimeout(() => {
        const currentIndex = personalQuotes.indexOf(currentQuote);
        const nextIndex = (currentIndex + 1) % personalQuotes.length;
        setCurrentQuote(personalQuotes[nextIndex]);
        setIsAnimating(true);
      }, 500);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentQuote]);

  const renderWords = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordVariants}
        className="inline-block mr-[0.3em] text-gray-800 dark:text-gray-200"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <div className="flex items-center justify-center flex-col gap-8 text-center min-h-screen px-6 py-20 ">
      <motion.div
      initial={{ scale: 0 }}
      whileInView={{scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
      viewport={{ once: true }}
        className="text-blue-600 dark:text-blue-400"
      >
        <ImQuotesLeft size={50} />
      </motion.div>

      <div className="w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote}
            variants={containerVariants}
            initial="hidden"
            animate={isAnimating ? "visible" : "exit"}
            exit="exit"
            className="overflow-hidden px-4"
          >
            <motion.p 
              className="text-h1-sm md:text-h1-md lg:text-h1-lg font-bold text-gray-800 dark:text-gray-200 leading-relaxed"
            >
              {renderWords(currentQuote)}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
        className="text-blue-600 dark:text-blue-400"
      >
        <ImQuotesRight size={50} />
      </motion.div>
    </div>
  );
}