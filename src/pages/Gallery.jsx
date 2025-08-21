import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Image } from 'lucide-react';

const allImages = [
  { id: 1, src: '/images/sandal-1.svg', category: 'Kasual', name: 'Sandal Santai Merah' },
  { id: 2, src: '/images/sandal-2.svg', category: 'Formal', name: 'Sandal Kulit Coklat' },
  { id: 3, src: '/images/sandal-3.svg', category: 'Sport', name: 'Sandal Olahraga Putih' },
  { id: 4, src: '/images/sandal-4.svg', category: 'Kasual', name: 'Sandal Pantai Merah' },
  { id: 5, src: '/images/sandal-5.svg', category: 'Formal', name: 'Sandal Pesta Elegan' },
  { id: 6, src: '/images/sandal-6.svg', category: 'Sport', name: 'Sandal Lari Ergonomis' },
];

const categories = ['Semua', 'Kasual', 'Formal', 'Sport'];

const Gallery = () => {
  const [filter, setFilter] = useState('Semua');

  const filteredImages = filter === 'Semua' ? allImages : allImages.filter(img => img.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Galeri Koleksi Kami</h1>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            Jelajahi ragam desain sandal kami yang unik dan berkualitas tinggi.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${filter === category ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input type="text" placeholder="Cari desain..." className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-accent/50" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={itemVariants}
              layout
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end p-6">
                <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">{image.name}</h3>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
              {/* Lightbox placeholder icon */}
              <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image className="w-6 h-6 text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;