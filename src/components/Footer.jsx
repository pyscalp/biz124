import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sandal China</h3>
            <p className="text-gray-300 text-sm">
              Menyediakan sandal berkualitas tinggi dengan desain modern dan kenyamanan maksimal, langsung dari produsen terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-accent transition-colors">Tentang Kami</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Layanan</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Galeri</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span>info@sandalchina.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent mt-1" />
                <span>Jl. Industri Sandal No. 123, Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social/Partners */}
          <div>
            <h3 className="text-xl font-bold mb-4">Partner Kami</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Global Partner" className="text-gray-300 hover:text-accent transition-colors"><Globe size={24} /></a>
              <a href="#" aria-label="Community Partner" className="text-gray-300 hover:text-accent transition-colors"><Users size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Sandal China. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;