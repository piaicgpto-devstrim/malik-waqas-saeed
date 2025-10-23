import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Globe, MessageCircle } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  setActiveSection: (section: string) => void;
}

export default function Footer({ darkMode, setActiveSection }: FooterProps) {
  const quickLinks = ['Home', 'About', 'Services', 'Contact'];

  const socials = [
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/Malik.Waqas.Saeed?utm_source=wa4a&utm_campaign=wa_vpl_m2_uvf_web' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Mail, label: 'Email', url: 'mailto:malikwaqas@example.com' },
  ];

  return (
    <footer className="bg-[#0E0E0E] text-white py-12 border-t border-[#75FFD8]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="text-[#007F5B]">MW</span>.S
            </h3>
            <p className="text-gray-400 mb-4">
              Creative Vision through Lens
            </p>
            <p className="text-gray-500 text-sm">
              Capturing moments, telling stories, creating timeless visuals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveSection(link)}
                  className="block text-gray-400 hover:text-[#75FFD8] transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#007F5B] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-2">
              <motion.a
                whileHover={{ x: 5 }}
                href="https://www.whatsapp.com/channel/0029VbAkTpT1NCrTqHKgKm0d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Channel
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="https://apnakamao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Official Website
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-gray-500"
        >
          <p>
            © 2025 Malik Waqas Saeed. Built with ❤️ using React & TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
