import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Hero darkMode={darkMode} setActiveSection={setActiveSection} />;
      case 'About':
        return <About darkMode={darkMode} />;
      case 'Portfolio':
        return <Portfolio darkMode={darkMode} />;
      case 'Services':
        return <Services darkMode={darkMode} />;
      case 'Testimonials':
        return <Testimonials darkMode={darkMode} />;
      case 'Contact':
        return <Contact darkMode={darkMode} />;
      default:
        return <Hero darkMode={darkMode} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? 'bg-[#0E0E0E]' : 'bg-[#F8F9FA]'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderSection()}
        </motion.main>
      </AnimatePresence>

      <Footer darkMode={darkMode} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
