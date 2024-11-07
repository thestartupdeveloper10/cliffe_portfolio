import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Quote from "./components/Quote"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Landing from "./pages/Landing"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import { useTheme } from '@/components/ThemeProvider';

function App() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar />
      <div className="bg-[#fafafa] dark:bg-[#161515]">
        <Landing />
        <About />
        <div className="my-10 py-20 px-4 md:px-16 bg-white dark:bg-[#130d14] rounded-[80px] shadow-lg mb-28">
          <Quote />
          <Projects />
          <Experience/>
          <Services />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App
