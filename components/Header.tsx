import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Chi Sono', href: '#chi-sono' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Prodotti', href: '#prodotti' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contatti', href: '#contatti' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-regal-cream py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-slate-800">
          V<span className="text-regal-gold">A</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-sm xl:text-base uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors font-sans"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contatti"
            className="ml-4 px-6 py-2 bg-slate-800 text-white font-serif italic rounded-sm hover:bg-slate-700 transition-all shadow-sm hover:shadow-md text-lg"
          >
            Prenota
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-slate-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-6 px-6 flex flex-col space-y-4 animate-fade-in-down">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-xl font-serif text-slate-700 hover:text-regal-gold transition-colors text-center border-b border-slate-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
           <a 
            href="#contatti"
            className="w-full text-center px-6 py-3 bg-slate-800 text-white font-serif italic rounded-sm hover:bg-slate-700 mt-2 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Prenota la consulenza
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;