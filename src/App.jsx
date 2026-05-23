import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import ProjectCategory from "./pages/ProjectCategory";
import Skills from "./pages/Skills";

function MainLayout() {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/projects/:category" element={<ProjectCategory />} />
    </Routes>
  );
}

export default App;
