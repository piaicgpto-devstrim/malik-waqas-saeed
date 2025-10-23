import { motion } from 'framer-motion';
import { Camera, Video, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const skills = ['Adobe Lightroom', 'Canon EOS R5', 'Portraits', 'Color Grading', 'Brand Visuals'];
  const timeline = [
    { period: '2017-2020', role: 'Freelance Photographer' },
    { period: '2020-2023', role: 'Cinematographer & Editor' },
    { period: '2023-Present', role: 'Creative Director' },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-5xl font-bold text-center mb-16 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          About <span className="text-[#007F5B]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${
              darkMode ? 'bg-white/5' : 'bg-gray-900/5'
            } backdrop-blur-xl rounded-3xl p-8 border ${
              darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
            }`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden mb-6">
              <img
                src="/image-removebg-preview.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 justify-center">
              <Camera className="w-8 h-8 text-[#007F5B]" />
              <Video className="w-8 h-8 text-[#75FFD8]" />
              <Award className="w-8 h-8 text-[#007F5B]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p
              className={`text-lg md:text-xl mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              I tell stories through my lens — blending realism and emotion into timeless visuals.
              Every frame captures a moment, every moment tells a story.
            </p>
            <p
              className={`text-lg md:text-xl ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              With years of experience in photography and cinematography, I've worked with brands,
              couples, and creatives to bring their visions to life through powerful imagery.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3
            className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            My Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex gap-6 mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`${
                    darkMode ? 'bg-white/5' : 'bg-gray-900/5'
                  } backdrop-blur-xl rounded-2xl p-6 border ${
                    darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
                  } max-w-md`}
                >
                  <div className="text-[#007F5B] font-bold mb-2">{item.period}</div>
                  <div
                    className={`text-xl font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Tools & Expertise
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`px-6 py-3 ${
                  darkMode ? 'bg-white/5' : 'bg-gray-900/5'
                } backdrop-blur-xl rounded-full border ${
                  darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
                } ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
