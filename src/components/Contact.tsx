import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, Globe } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-5xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Let's <span className="text-[#007F5B]">Collaborate</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-3xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#007F5B] to-[#75FFD8] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Location
                  </div>
                  <div className={darkMode ? 'text-white' : 'text-gray-900'}>
                    Lahore, Pakistan
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#007F5B] to-[#75FFD8] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Email
                  </div>
                  <div className={darkMode ? 'text-white' : 'text-gray-900'}>
                    malikwaqas@example.com
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#007F5B] to-[#75FFD8] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Phone
                  </div>
                  <div className={darkMode ? 'text-white' : 'text-gray-900'}>
                    +92 331 5720670
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.a
                whileHover={{ scale: 1.05, x: 10 }}
                href="https://www.whatsapp.com/channel/0029VbAkTpT1NCrTqHKgKm0d"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 ${
                  darkMode ? 'bg-white/5' : 'bg-gray-900/5'
                } backdrop-blur-xl rounded-2xl border ${
                  darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
                }`}
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
                <div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    WhatsApp Channel
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Join for updates
                  </div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, x: 10 }}
                href="https://apnakamao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 ${
                  darkMode ? 'bg-white/5' : 'bg-gray-900/5'
                } backdrop-blur-xl rounded-2xl border ${
                  darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
                }`}
              >
                <Globe className="w-6 h-6 text-blue-500" />
                <div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Official Website
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Visit apnakamao.com
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className={`${
              darkMode ? 'bg-white/5' : 'bg-gray-900/5'
            } backdrop-blur-xl rounded-3xl p-8 border ${
              darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
            } shadow-2xl`}
          >
            <div className="space-y-6">
              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl ${
                    darkMode
                      ? 'bg-white/10 text-white border-[#75FFD8]/20'
                      : 'bg-white text-gray-900 border-gray-300'
                  } border focus:outline-none focus:border-[#007F5B] transition-colors backdrop-blur-sm`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl ${
                    darkMode
                      ? 'bg-white/10 text-white border-[#75FFD8]/20'
                      : 'bg-white text-gray-900 border-gray-300'
                  } border focus:outline-none focus:border-[#007F5B] transition-colors backdrop-blur-sm`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl ${
                    darkMode
                      ? 'bg-white/10 text-white border-[#75FFD8]/20'
                      : 'bg-white text-gray-900 border-gray-300'
                  } border focus:outline-none focus:border-[#007F5B] transition-colors backdrop-blur-sm resize-none`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(117, 255, 216, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#007F5B] to-[#00A877] text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
