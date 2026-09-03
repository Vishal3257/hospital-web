import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, Stethoscope } from 'lucide-react';
import { departments } from '../data/departmentsData';
import { doctors } from '../data/doctorsData';

export default function AppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment request sent for ${formData.name}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900">Book an Appointment</h3>
          <p className="text-xs text-gray-500 mt-1">Fill out the form below and our clinic will confirm your slot.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="relative">
            <User className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              required
              placeholder="Full Patient Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-blue-500" 
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Phone className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <input 
                type="tel" 
                required
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-blue-500" 
              />
            </div>
            <div className="relative">
              <Mail className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-blue-500" 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <select 
              required
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-blue-500 text-gray-600 bg-white"
            >
              <option value="">Select Department</option>
              {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
            </select>

            <select 
              required
              value={formData.doctor}
              onChange={(e) => setFormData({...formData, doctor: e.target.value})}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-blue-500 text-gray-600 bg-white"
            >
              <option value="">Select Doctor</option>
              {doctors.map(doc => <option key={doc.id} value={doc.name}>{doc.name}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input 
              type="date" 
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-blue-500 text-gray-600" 
            />
            <input 
              type="time" 
              required
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-blue-500 text-gray-600" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}