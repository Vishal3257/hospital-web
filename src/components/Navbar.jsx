import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 text-left focus:outline-none"
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
              <polygon points="24,3 45,39 3,39" fill="url(#prismGrad1)" />
              <polygon points="24,3 3,39 24,28" fill="url(#prismGrad2)" opacity="0.85" />
              <polygon points="3,39 45,39 24,28" fill="url(#prismGrad3)" opacity="0.65" />
              <rect x="21" y="16" width="6" height="18" rx="1.5" fill="#ffffff" />
              <rect x="15" y="22" width="18" height="6" rx="1.5" fill="#ffffff" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-black text-gray-900 block leading-none tracking-tight">PRISM</span>
            <span className="text-[10px] tracking-widest text-blue-600 font-bold uppercase">Hospital</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Emergency Contact */}
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

        {/* Mobile Hamburger Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-700">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Clean Routing) */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block w-full text-left py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex items-center gap-2 text-xs font-bold text-blue-600">
            <Phone className="h-4 w-4" /> +91 7073889265 (24/7 Emergency)
          </div>
        </div>
      )}
    </header>
  );
}