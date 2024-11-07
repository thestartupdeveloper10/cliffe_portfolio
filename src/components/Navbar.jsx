import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home,
  User,
  Code2,
  FolderOpen,
  Send,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from './ThemeProvider';
import logo from '@/assets/imgs/logo2.png';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
};

const menuItemVariants = {
  closed: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2
    }
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
    { id: 'services', label: 'Services', icon: <Code2 className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Send className="w-5 h-5" /> },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 w-full z-50 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-[#2a2e27] backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 md:px-16 mx-auto">
        <div className="flex items-center justify-between h-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className="font-bold text-2xl text-gray-900 dark:text-white relative z-50"
          >
            <img src={logo} alt="Logo" className="h-14" />
          </motion.button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-2 rounded-lg flex items-center space-x-2
                  ${activeSection === item.id 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleDarkMode}
                className="ml-2"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ backgroundColor: "rgb(243 244 246)" }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative z-50 p-2 rounded-lg dark:hover:bg-[#161515]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 dark:text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 dark:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-white dark:bg-[#2a2e27] z-40 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div 
                className="absolute top-3 left-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img src={logo} alt="Logo" className="h-14" />
              </motion.div>

              <div className="flex flex-col items-center bg-white dark:bg-[#2a2e27] z-40 justify-center min-h-screen">
                <div className="flex flex-col items-center space-y-8">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      variants={menuItemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        w-64 px-6 py-3 rounded-lg flex flex-col items-center space-y-2
                        ${activeSection === item.id 
                          ? 'bg-gray-100 dark:bg-[#161515] text-gray-900 dark:text-white' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161515] hover:text-gray-900 dark:hover:text-white'}
                      `}
                    >
                      {item.icon}
                      <span className="text-xl font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                  
                  <motion.div
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="ghost" 
                      onClick={toggleDarkMode}
                      className="w-64 flex flex-col items-center space-y-2"
                    >
                      <AnimatePresence mode="wait">
                        {isDarkMode ? (
                          <motion.div
                            key="sun"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center"
                          >
                            <Sun className="h-5 w-5" />
                            {/* <span className="text-xl font-medium">Light Mode</span> */}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="moon"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center"
                          >
                            <Moon className="h-5 w-5" />
                            {/* <span className="text-xl font-medium">Dark Mode</span> */}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}