import { motion } from 'framer-motion';
import { Camera, Video, Sparkles } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const services = [
    {
      icon: Camera,
      title: 'Photography Packages',
      description: 'Event, portrait, and commercial photography sessions with post-editing.',
      features: ['Professional editing', 'High-res delivery', 'Multiple locations', 'Flexible timing'],
    },
    {
      icon: Video,
      title: 'Cinematography',
      description: 'Short films, ads, and music videos with professional color grading.',
      features: ['4K recording', 'Color grading', 'Sound design', 'Fast turnaround'],
    },
    {
      icon: Sparkles,
      title: 'Creative Consultation',
      description: 'Brand storytelling and creative direction for social campaigns.',
      features: ['Brand strategy', 'Content planning', 'Creative direction', 'Campaign management'],
    },
  ];

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
          My <span className="text-[#007F5B]">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${
                darkMode ? 'bg-white/5' : 'bg-gray-900/5'
              } backdrop-blur-xl rounded-3xl p-8 border ${
                darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
              } shadow-xl`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#007F5B] to-[#75FFD8] rounded-2xl flex items-center justify-center mb-6"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`mb-6 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#007F5B] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
