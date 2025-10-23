import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ darkMode, toggleDarkMode, activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode ? 'bg-black/40' : 'bg-white/40'
      } backdrop-blur-lg border-b border-[#75FFD8]/20`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold font-heading"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="text-[#007F5B]">MW</span>
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>.S</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(link)}
              className={`font-medium transition-colors ${
                activeSection === link
                  ? 'text-[#007F5B]'
                  : darkMode
                  ? 'text-gray-300 hover:text-[#75FFD8]'
                  : 'text-gray-700 hover:text-[#007F5B]'
              }`}
            >
              {link}
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'
            } backdrop-blur-sm`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={darkMode ? 'text-white' : 'text-gray-900'} />
            ) : (
              <Menu className={darkMode ? 'text-white' : 'text-gray-900'} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden ${
            darkMode ? 'bg-black/90' : 'bg-white/90'
          } backdrop-blur-xl border-t border-[#75FFD8]/20`}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActiveSection(link);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 ${
                activeSection === link
                  ? 'text-[#007F5B] bg-[#007F5B]/10'
                  : darkMode
                  ? 'text-gray-300'
                  : 'text-gray-700'
              }`}
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
