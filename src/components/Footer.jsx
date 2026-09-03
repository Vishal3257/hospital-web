import React from 'react';
import { PlusSquare, Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1b3d] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Hospital Info */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <PlusSquare className="h-7 w-7 text-blue-500" />
            <div>
              <span className="text-xl font-bold block leading-none">PRISM</span>
              <span className="text-xs tracking-widest text-blue-400 font-semibold uppercase">Hospital</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            PRISM Hospital is committed to providing world-class healthcare services with compassion, advanced technology, and patient-first approach.
          </p>

          <div className="flex space-x-3 text-gray-400">
            <a href="#" className="hover:text-white transition">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => scrollTo('home')} className="hover:underline cursor-pointer">Home</button></li>
            <li><button onClick={() => scrollTo('about')} className="hover:underline cursor-pointer">About Us</button></li>
            <li><button onClick={() => scrollTo('departments')} className="hover:underline cursor-pointer">Departments</button></li>
            <li><button onClick={() => scrollTo('doctors')} className="hover:underline cursor-pointer">Doctors</button></li>
            <li><button onClick={() => scrollTo('appointments')} className="hover:underline cursor-pointer">Appointments</button></li>
            <li><button onClick={() => scrollTo('contact')} className="hover:underline cursor-pointer">Contact Us</button></li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Our Departments</h4>
          <ul className="space-y-2 text-xs">
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
            <li>Gynecology</li>
            <li>General Medicine</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Contact PRISM</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
              <span>123, HealthCare Street, Medical District, New Delhi - 110001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 shrink-0" />
              <span>+91 7073889265</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 shrink-0" />
              <span>info@prismhospital.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-500 shrink-0" />
              <span>www.prismhospital.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Newsletter</h4>
          <p className="text-xs text-gray-400 mb-3">Subscribe to PRISM Hospital updates.</p>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 text-xs rounded bg-white text-gray-900 border-none focus:outline-none"
            />
            <button className="w-full bg-blue-600 text-white text-xs font-semibold py-2 rounded hover:bg-blue-700 transition cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-4 border-t border-gray-800 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
        <p>© 2026 PRISM Hospital. All Rights Reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}