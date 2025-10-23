import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      client: 'Ali Raza',
      project: 'Wedding Shoot',
      feedback: 'Malik captured our moments beautifully — truly cinematic work!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      client: 'Ayesha Khan',
      project: 'Brand Campaign',
      feedback: 'Professional, creative, and incredibly easy to work with!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      client: 'Ahmed Hassan',
      project: 'Corporate Event',
      feedback: 'Outstanding quality and attention to detail. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #007F5B 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-5xl font-bold text-center mb-16 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Client <span className="text-[#007F5B]">Testimonials</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`${
              darkMode ? 'bg-white/5' : 'bg-gray-900/5'
            } backdrop-blur-xl rounded-3xl p-12 border ${
              darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
            } shadow-2xl relative`}
          >
            <Quote className="absolute top-8 left-8 w-16 h-16 text-[#007F5B] opacity-20" />

            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].client}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#007F5B]/30"
              />
              <div>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {testimonials[currentIndex].client}
                </h3>
                <p className="text-[#007F5B] font-semibold">
                  {testimonials[currentIndex].project}
                </p>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>

            <p
              className={`text-xl md:text-2xl italic ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } relative z-10`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              "{testimonials[currentIndex].feedback}"
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className={`p-4 ${
                darkMode ? 'bg-white/10' : 'bg-gray-900/10'
              } backdrop-blur-xl rounded-full border ${
                darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
              }`}
            >
              <ChevronLeft className={darkMode ? 'text-white' : 'text-gray-900'} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className={`p-4 ${
                darkMode ? 'bg-white/10' : 'bg-gray-900/10'
              } backdrop-blur-xl rounded-full border ${
                darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
              }`}
            >
              <ChevronRight className={darkMode ? 'text-white' : 'text-gray-900'} />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex
                    ? 'bg-[#007F5B] w-8'
                    : darkMode
                    ? 'bg-white/30'
                    : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
