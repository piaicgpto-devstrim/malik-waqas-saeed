import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface PortfolioProps {
  darkMode: boolean;
}

export default function Portfolio({ darkMode }: PortfolioProps) {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filters = ['All', 'Portraits', 'Events', 'Products', 'Cinematic'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Portraits',
      image: 'https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Urban Portrait',
      description: 'Street portrait with natural lighting',
      camera: 'Canon EOS R5',
      location: 'Lahore, Pakistan',
    },
    {
      id: 2,
      category: 'Events',
      image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Wedding Celebration',
      description: 'Capturing joyful moments',
      camera: 'Sony A7III',
      location: 'Islamabad',
    },
    {
      id: 3,
      category: 'Cinematic',
      image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Golden Hour',
      description: 'Cinematic landscape shot',
      camera: 'Canon EOS R5',
      location: 'Northern Areas',
    },
    {
      id: 4,
      category: 'Products',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Product Showcase',
      description: 'Commercial photography',
      camera: 'Nikon D850',
      location: 'Studio',
    },
    {
      id: 5,
      category: 'Portraits',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fashion Portrait',
      description: 'Editorial fashion shoot',
      camera: 'Canon EOS R5',
      location: 'Karachi',
    },
    {
      id: 6,
      category: 'Cinematic',
      image: 'https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Night Lights',
      description: 'Urban night photography',
      camera: 'Sony A7III',
      location: 'Lahore',
    },
  ];

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

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
          My <span className="text-[#007F5B]">Portfolio</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-[#007F5B] to-[#00A877] text-white shadow-lg'
                  : darkMode
                  ? 'bg-white/5 text-gray-300 border border-[#75FFD8]/20'
                  : 'bg-gray-100 text-gray-700 border border-gray-300'
              } backdrop-blur-xl`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className={`${
                darkMode ? 'bg-white/5' : 'bg-gray-900/5'
              } backdrop-blur-xl rounded-2xl overflow-hidden border ${
                darkMode ? 'border-[#75FFD8]/20' : 'border-gray-300/30'
              } cursor-pointer shadow-xl`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-[#007F5B] text-sm font-semibold mb-2">
                  {item.category}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className={`${
              darkMode ? 'bg-white/10' : 'bg-white/20'
            } backdrop-blur-xl rounded-3xl p-8 max-w-4xl w-full border border-[#75FFD8]/30 relative`}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-red-500/20 rounded-full hover:bg-red-500/40 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl mb-6"
            />

            <h3 className="text-3xl font-bold text-white mb-4">
              {selectedImage.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedImage.description}</p>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div>
                <span className="text-[#75FFD8] font-semibold">Camera:</span> {selectedImage.camera}
              </div>
              <div>
                <span className="text-[#75FFD8] font-semibold">Location:</span> {selectedImage.location}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
