import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Check } from 'lucide-react';
import Card from '../components/Card';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Tentang Sandal China</h1>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            Perjalanan kami dalam menghadirkan sandal berkualitas yang memadukan tradisi, inovasi, dan gaya.
          </p>
        </motion.div>

        {/* Company Story */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop" 
              alt="Proses pembuatan sandal" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Kisah Kami</h2>
            <p className="text-text-light mb-4">
              Berawal dari kecintaan pada kerajinan tangan dan kenyamanan, Sandal China didirikan dengan satu tujuan: menciptakan alas kaki yang tidak hanya indah dipandang, tetapi juga nyaman dipakai setiap hari. Kami berkeliling untuk menemukan material terbaik dan pengrajin paling terampil.
            </p>
            <p className="text-text-light">
              Kini, kami bangga menjadi jembatan antara keahlian tradisional dan tren fashion modern, menghadirkan produk yang dicintai oleh pelanggan di seluruh dunia.
            </p>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Nilai-Nilai Kami</h2>
            <p className="text-text-light mt-2">Prinsip yang memandu setiap langkah kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            <Card 
              icon={<Heart size={40} />} 
              title="Kualitas & Gairah" 
              description="Kami terobsesi dengan detail dan hanya menggunakan material terbaik untuk setiap produk."
            />
            <Card 
              icon={<Users size={40} />} 
              title="Kemitraan & Integritas" 
              description="Membangun hubungan yang jujur dan saling menguntungkan dengan pelanggan dan pemasok."
            />
            <Card 
              icon={<Globe size={40} />} 
              title="Inovasi Berkelanjutan" 
              description="Terus berinovasi dalam desain dan proses produksi yang ramah lingkungan."
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-primary text-white p-8 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="space-y-2">
                <li className="flex"><Check className="w-6 h-6 mr-2 text-accent flex-shrink-0" />Menyediakan sandal dengan standar kualitas internasional.</li>
                <li className="flex"><Check className="w-6 h-6 mr-2 text-accent flex-shrink-0" />Memberikan pengalaman pelanggan yang tak terlupakan.</li>
                <li className="flex"><Check className="w-6 h-6 mr-2 text-accent flex-shrink-0" />Mendorong praktik bisnis yang etis dan berkelanjutan.</li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
              <p className="text-text-light">
                Menjadi pemimpin pasar global dalam industri sandal, dikenal karena inovasi, kualitas, dan komitmen kami terhadap kepuasan pelanggan dan keberlanjutan lingkungan.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;