import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <p className="text-xs text-gray-500 mb-1">Home &gt; Contact Us</p>
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-xs text-gray-500 mt-1 max-w-xl">
            We are here to help you. Reach out to us for appointments, inquiries or any assistance. Our support team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Get In Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <Phone className="h-5 w-5 text-blue-600 mb-2" />
                <h4 className="text-xs font-bold text-gray-800">Phone</h4>
                <p className="text-xs text-gray-500 mt-1">+91 12345 67890</p>
                <p className="text-xs text-gray-500">+91 98765 43210</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <Mail className="h-5 w-5 text-blue-600 mb-2" />
                <h4 className="text-xs font-bold text-gray-800">Email</h4>
                <p className="text-xs text-gray-500 mt-1 break-all">info@citycarehospital.com</p>
                <p className="text-xs text-gray-500 break-all">support@citycarehospital.com</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <MapPin className="h-5 w-5 text-blue-600 mb-2" />
                <h4 className="text-xs font-bold text-gray-800">Address</h4>
                <p className="text-xs text-gray-500 mt-1">123, HealthCare Street, Medical District, New Delhi - 110001</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <Clock className="h-5 w-5 text-blue-600 mb-2" />
                <h4 className="text-xs font-bold text-gray-800">Working Hours</h4>
                <p className="text-xs text-gray-500 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-xs text-rose-500 font-semibold">Emergency: 24/7 Open</p>
              </div>

            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Send Us a Message</h2>
            <p className="text-xs text-gray-400 mb-6">Fill in the details below and we will get back to you.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" 
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" 
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" 
                />
              </div>

              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500"
              ></textarea>

              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
              >
                Send Message <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}