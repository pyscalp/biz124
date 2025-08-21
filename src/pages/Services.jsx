import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Globe, Check, Star } from 'lucide-react';
import Button from '../components/Button';

const services = [
  {
    icon: <Package size={40} className="text-accent" />,
    title: "Desain & Prototyping Kustom",
    description: "Tim desainer kami siap membantu Anda mengubah konsep menjadi prototipe sandal yang siap produksi.",
    features: ["Konsultasi Desain", "Pemilihan Material", "Pembuatan Sampel Cepat", "Revisi Tanpa Batas"]
  },
  {
    icon: <Truck size={40} className="text-accent" />,
    title: "Produksi Skala Besar",
    description: "Dengan fasilitas modern, kami mampu memproduksi sandal dalam jumlah besar dengan efisiensi dan kualitas terjamin.",
    features: ["Kapasitas Fleksibel", "Kontrol Kualitas Ketat", "Harga Kompetitif", "Pengerjaan Tepat Waktu"]
  },
  {
    icon: <Globe size={40} className="text-accent" />,
    title: "Distribusi & Logistik Global",
    description: "Kami menangani seluruh proses pengiriman, memastikan produk Anda sampai ke tujuan di seluruh dunia dengan aman.",
    features: ["Jaringan Pengiriman Luas", "Pengurusan Dokumen Ekspor", "Pelacakan Real-time", "Opsi Pengemasan Kustom"]
  }
];

const pricingTiers = [
  {
    name: "Basic",
    price: "Mulai dari",
    amount: "IDR 5jt",
    features: ["1 Desain Kustom", "Produksi min. 500 pasang", "Dukungan Email"],
    isPopular: false
  },
  {
    name: "Business",
    price: "Paket Populer",
    amount: "IDR 25jt",
    features: ["3 Desain Kustom", "Produksi min. 2500 pasang", "Dukungan Prioritas", "Bantuan Logistik Dasar"],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Solusi Lengkap",
    amount: "Hubungi Kami",
    features: ["Desain Tanpa Batas", "Produksi Skala Penuh", "Manajer Akun Khusus", "Logistik Global Terkelola"],
    isPopular: false
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Layanan Komprehensif Kami</h1>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            Dari ide hingga pasar, kami menyediakan solusi end-to-end untuk kebutuhan sandal Anda.
          </p>
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col" variants={itemVariants}>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-text-light mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-text-light">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Section */}
        <section className="py-16 bg-white rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Paket Harga</h2>
            <p className="text-text-light mt-2">Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`border rounded-lg p-8 flex flex-col ${tier.isPopular ? 'border-accent-dark ring-2 ring-accent' : 'border-gray-200'}`}>
                {tier.isPopular && (
                  <div className="text-center mb-4">
                    <span className="bg-accent text-white px-3 py-1 text-sm font-semibold rounded-full uppercase">Populer</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary text-center">{tier.name}</h3>
                <p className="text-text-light text-center mb-4">{tier.price}</p>
                <p className="text-4xl font-extrabold text-primary text-center mb-6">{tier.amount}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 mr-3 text-green-500" />
                      <span className="text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={tier.isPopular ? 'primary' : 'secondary'} className="w-full">
                  Pilih Paket
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;