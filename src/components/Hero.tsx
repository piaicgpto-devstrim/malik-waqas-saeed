import { motion } from 'framer-motion';
import { Camera, MessageCircle, Globe } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  setActiveSection: (section: string) => void;
}

export default function Hero({ darkMode, setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.9))',
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${
            darkMode ? 'bg-black/30' : 'bg-white/10'
          } backdrop-blur-xl rounded-3xl p-12 border border-[#75FFD8]/30 shadow-2xl max-w-4xl mx-auto`}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#007F5B] to-[#75FFD8] rounded-full blur-2xl opacity-50"></div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#75FFD8]/40 shadow-2xl bg-white/5 backdrop-blur-sm"
              >
                <img
                  src="/image-waqas.png"
                  alt="Malik Waqas Saeed"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Hi, I'm <span className="text-[#75FFD8]">Malik Waqas Saeed</span> 👋
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Creative Photographer & Visual Storyteller
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(117, 255, 216, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('Portfolio')}
              className="px-8 py-4 bg-gradient-to-r from-[#007F5B] to-[#00A877] text-white rounded-full font-semibold shadow-lg"
            >
              <Camera className="inline-block mr-2 w-5 h-5" />
              View Portfolio
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(117, 255, 216, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('Contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-[#75FFD8]/50 shadow-lg"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              href="https://www.whatsapp.com/channel/0029VbAkTpT1NCrTqHKgKm0d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500/20 backdrop-blur-sm text-white rounded-full font-medium border border-green-400/50 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Channel
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              href="https://apnakamao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500/20 backdrop-blur-sm text-white rounded-full font-medium border border-blue-400/50 flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Official Website
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#75FFD8]/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-[#75FFD8] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
