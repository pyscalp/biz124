import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Layanan', path: '/services' },
  { name: 'Galeri', path: '/gallery' },
  { name: 'Kontak', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 10);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeLinkClass = 'text-accent';
  const inactiveLinkClass = 'text-primary hover:text-accent transition-colors duration-300';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Sandal China
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-medium`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
          <Button>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Pesan Sekarang
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-secondary shadow-lg"
        >
          <div className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={toggleMenu}
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} text-lg font-medium`}
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="mt-4">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Pesan Sekarang
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;