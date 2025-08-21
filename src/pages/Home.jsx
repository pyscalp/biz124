import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Package, Truck, Globe } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white px-6" style={{ background: 'linear-gradient(rgba(61, 43, 31, 0.7), rgba(61, 43, 31, 0.7)), url(https://images.unsplash.com/photo-1599819108359-6739f96f65aa?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            Kenyamanan & Gaya
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Temukan koleksi sandal premium yang memadukan desain elegan dengan kenyamanan tak tertandingi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
          >
            <Link to="/gallery">
              <Button>
                Lihat Koleksi <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary mb-4">Layanan Unggulan Kami</motion.h2>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-text-light mb-12 max-w-2xl mx-auto">Kami tidak hanya menjual sandal, kami menawarkan solusi lengkap untuk kebutuhan Anda.</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card icon={<Package size={48} />} title="Desain Kustom" description="Wujudkan ide sandal impian Anda bersama tim desainer ahli kami." />
            <Card icon={<Truck size={48} />} title="Produksi Massal" description="Kapasitas produksi besar dengan kontrol kualitas yang ketat untuk bisnis Anda." />
            <Card icon={<Globe size={48} />} title="Distribusi Global" description="Jangkau pasar internasional dengan jaringan distribusi kami yang luas." />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto text-center">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary mb-12">Apa Kata Mereka</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400" fill="currentColor" />)}</div>
              <p className="text-text-light italic mb-4">"Kualitas sandalnya luar biasa, nyaman dipakai seharian. Desainnya juga sangat modern!"</p>
              <p className="font-bold text-primary">- Budi Santoso, Pelanggan</p>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400" fill="currentColor" />)}</div>
              <p className="text-text-light italic mb-4">"Proses pemesanan custom sangat mudah dan hasilnya melebihi ekspektasi. Sangat direkomendasikan."</p>
              <p className="font-bold text-primary">- Citra Lestari, Pemilik Butik</p>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400" fill="currentColor" />)}</div>
              <p className="text-text-light italic mb-4">"Pengiriman cepat dan layanan pelanggan yang responsif. Partner bisnis yang andal."</p>
              <p className="font-bold text-primary">- Adi Wibowo, Distributor</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4">Siap Meningkatkan Gaya Anda?</motion.h2>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Jelajahi koleksi lengkap kami atau hubungi kami untuk memulai proyek kustom Anda hari ini.</motion.p>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link to="/contact">
              <Button>Hubungi Kami Sekarang</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;