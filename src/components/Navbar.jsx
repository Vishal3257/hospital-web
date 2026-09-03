import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Departments', id: 'departments' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Appointments', id: 'appointments' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Brand Logo: PRISM Geometric Facet + Medical Plus Icon */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="p-1.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
            <svg 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
            >
              <defs>
                <linearGradient id="prismGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="prismGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="prismGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>

              {/* Prism Facets */}
              <polygon points="24,3 45,39 3,39" fill="url(#prismGrad1)" />
              <polygon points="24,3 3,39 24,28" fill="url(#prismGrad2)" opacity="0.85" />
              <polygon points="3,39 45,39 24,28" fill="url(#prismGrad3)" opacity="0.65" />

              {/* Medical Plus (+) Symbol */}
              <rect x="21" y="16" width="6" height="18" rx="1.5" fill="#ffffff" />
              <rect x="15" y="22" width="18" height="6" rx="1.5" fill="#ffffff" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-black text-gray-900 block leading-none tracking-tight">PRISM</span>
            <span className="text-[10px] tracking-widest text-blue-600 font-bold uppercase">Hospital</span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-semibold text-gray-600 hover:text-blue-600 transition cursor-pointer uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* 24/7 Emergency Number */}
        <div className="hidden lg:flex items-center gap-3 bg-blue-50/70 border border-blue-100 py-1.5 px-3.5 rounded-full">
          <div className="p-1.5 bg-blue-600 text-white rounded-full">
            <Phone className="h-4 w-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">24/7 Emergency</p>
            <a href="tel:+917073889265" className="text-xs font-bold text-gray-900 hover:text-blue-600 transition">
              +91 7073889265
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-700">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 border-b border-gray-50"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 flex items-center gap-2 text-xs font-bold text-blue-600">
            <Phone className="h-4 w-4" /> +91 7073889265 (24/7 Emergency)
          </div>
        </div>
      )}
    </header>
  );
}