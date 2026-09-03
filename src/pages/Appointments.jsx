import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Clock, XCircle, Search, 
  Filter, Download, Eye, MoreVertical, ArrowRight, Headphones, Phone, X, User, Activity
} from 'lucide-react';
import EmergencyBar from '../components/EmergencyBar';

const initialAppointments = [
  { 
    id: 'APT-2024-0001', 
    patient: 'Rahul Kumar', 
    phone: '+91 98765 43210', 
    patientImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    doctor: 'Dr. Rahul Sharma', 
    doctorRole: 'Cardiologist',
    doctorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80',
    dept: 'Cardiology', 
    date: '15 May 2024', 
    time: '10:00 AM', 
    status: 'Confirmed' 
  },
  { 
    id: 'APT-2024-0002', 
    patient: 'Priya Singh', 
    phone: '+91 87654 32109', 
    patientImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    doctor: 'Dr. Priya Mehta', 
    doctorRole: 'Neurologist',
    doctorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80',
    dept: 'Neurology', 
    date: '15 May 2024', 
    time: '11:30 AM', 
    status: 'Pending' 
  },
  { 
    id: 'APT-2024-0003', 
    patient: 'Amit Gupta', 
    phone: '+91 76543 21098', 
    patientImg: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
    doctor: 'Dr. Amit Verma', 
    doctorRole: 'Orthopedic',
    doctorImg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop&q=80',
    dept: 'Orthopedics', 
    date: '15 May 2024', 
    time: '02:00 PM', 
    status: 'Confirmed' 
  },
  { 
    id: 'APT-2024-0004', 
    patient: 'Neha Sharma', 
    phone: '+91 65432 10987', 
    patientImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    doctor: 'Dr. Neha Kapoor', 
    doctorRole: 'Pediatrician',
    doctorImg: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&auto=format&fit=crop&q=80',
    dept: 'Pediatrics', 
    date: '16 May 2024', 
    time: '10:30 AM', 
    status: 'Pending' 
  },
  { 
    id: 'APT-2024-0005', 
    patient: 'Sandeep Yadav', 
    phone: '+91 54321 09876', 
    patientImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    doctor: 'Dr. Anjali Singh', 
    doctorRole: 'Gynecologist',
    doctorImg: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=100&auto=format&fit=crop&q=80',
    dept: 'Gynecology', 
    date: '16 May 2024', 
    time: '12:00 PM', 
    status: 'Cancelled' 
  }
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    problem: '',
    doctor: 'Dr. Rahul Sharma',
    dept: 'Cardiology',
    date: '',
    time: ''
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'Cancelled':
        return 'bg-rose-50 text-rose-600 border border-rose-200';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: `APT-2024-000${appointments.length + 1}`,
      patient: formData.patientName,
      phone: formData.phone,
      patientImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      doctor: formData.doctor,
      doctorRole: 'Specialist',
      doctorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80',
      dept: formData.dept,
      date: formData.date || 'Today',
      time: formData.time || '11:00 AM',
      status: 'Confirmed'
    };

    setAppointments([newAppointment, ...appointments]);
    setShowModal(false);
    setFormData({ patientName: '', phone: '', problem: '', doctor: 'Dr. Rahul Sharma', dept: 'Cardiology', date: '', time: '' });
  };

  const filteredAppointments = appointments.filter(item => 
    item.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.includes(searchTerm) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-1">Home &gt; Appointments</p>
          <h1 className="text-3xl font-extrabold text-gray-900">Appointments</h1>
          <p className="text-xs text-gray-500 mt-1">Book an appointment with our expert doctors. We are here to care for you and your family.</p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Appointments</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{appointments.length}</h3>
              <span className="text-[11px] text-emerald-600 font-semibold">+12.5% this month</span>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Calendar className="h-6 w-6" /></div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Confirmed</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">2,830</h3>
              <span className="text-[11px] text-gray-400">66.5% of total</span>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="h-6 w-6" /></div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Pending</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">1,046</h3>
              <span className="text-[11px] text-gray-400">24.6% of total</span>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg"><Clock className="h-6 w-6" /></div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Cancelled</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">380</h3>
              <span className="text-[11px] text-gray-400">8.9% of total</span>
            </div>
            <div className="p-3 bg-rose-50 text-rose-600 rounded-lg"><XCircle className="h-6 w-6" /></div>
          </div>
        </div>

        {/* Main Grid: Left Table (8 cols) + Right Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8">
            <div className="bg-white p-4 rounded-t-xl border border-b-0 border-gray-200 flex flex-wrap gap-3 items-center justify-between">
              <h2 className="text-base font-bold text-gray-900">All Appointments</h2>
              <button className="flex items-center gap-1 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                <Download className="h-3.5 w-3.5" /> Export
              </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 border border-b-0 border-gray-200 grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="relative sm:col-span-5">
                <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by patient name, phone or ID..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="sm:col-span-7 flex flex-wrap gap-2">
                <select className="text-xs border border-gray-200 px-3 py-2 rounded-lg text-gray-600 bg-white">
                  <option>Department</option>
                </select>
                <select className="text-xs border border-gray-200 px-3 py-2 rounded-lg text-gray-600 bg-white">
                  <option>Doctor</option>
                </select>
                <select className="text-xs border border-gray-200 px-3 py-2 rounded-lg text-gray-600 bg-white">
                  <option>Status</option>
                </select>
                <button className="flex items-center gap-1 border border-gray-200 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                  <Filter className="h-3.5 w-3.5" /> Filter
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-b-xl border border-gray-200 overflow-x-auto shadow-sm">
              <table className="w-full text-left text-xs text-gray-600">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-3">Appointment ID</th>
                    <th className="py-3 px-3">Patient</th>
                    <th className="py-3 px-3">Doctor</th>
                    <th className="py-3 px-3">Department</th>
                    <th className="py-3 px-3">Date & Time</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAppointments.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-semibold text-blue-600 whitespace-nowrap">{row.id}</td>
                      
                      <td className="py-3 px-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <img src={row.patientImg} alt={row.patient} className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-100" />
                          <div>
                            <p className="font-semibold text-gray-900 leading-tight">{row.patient}</p>
                            <p className="text-[10px] text-gray-400">{row.phone}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <img src={row.doctorImg} alt={row.doctor} className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-100 bg-gray-50" />
                          <div>
                            <p className="font-semibold text-gray-800 leading-tight">{row.doctor}</p>
                            <p className="text-[10px] text-gray-400">{row.doctorRole}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-3 whitespace-nowrap">{row.dept}</td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <p className="text-gray-900">{row.date}</p>
                        <p className="text-[10px] text-gray-400">{row.time}</p>
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${getStatusBadge(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center space-x-1.5 text-gray-400">
                          <button className="hover:text-blue-600"><Eye className="h-4 w-4" /></button>
                          <button className="hover:text-gray-600"><MoreVertical className="h-4 w-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Book Now Card */}
            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-sm">
              <div className="p-2.5 bg-white/10 w-fit rounded-lg mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold">Book an Appointment</h3>
              <p className="text-xs text-blue-100 mt-1 mb-4 leading-relaxed">
                Fill in the details below to book an appointment with our specialists.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full py-2.5 bg-white text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Now <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Need Help */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-full shrink-0">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Need Help?</h4>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Our support team is available 24/7 to assist you with appointments.
                </p>
                <a href="tel:+917073889265" className="mt-2 text-xs font-bold text-blue-600 flex items-center gap-1.5 hover:underline">
                  <Phone className="h-3.5 w-3.5" /> +91 7073889265
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                <Clock className="h-4 w-4 text-blue-600" />
                Working Hours
              </div>
              <div className="text-xs space-y-2 pt-2 border-t border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-rose-600 font-semibold pt-1">
                  <span>Emergency</span>
                  <span>24/7 Open</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal: Book Appointment Form */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="bg-blue-600 px-6 py-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <h3 className="font-bold text-base">Book Patient Appointment</h3>
                </div>
                <button onClick={() => setShowModal(false)} className="hover:bg-white/20 p-1 rounded-full transition">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Mareez ka Naam (Patient Name) *</label>
                    <div className="relative">
                      <User className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Vishal Thakur" 
                        value={formData.patientName}
                        onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number *</label>
                    <div className="relative">
                      <Phone className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 7073889265" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Bimari ya Samasya (Problem / Symptoms) *</label>
                  <div className="relative">
                    <Activity className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Chest pain, Fever, Joint pain, Headache" 
                      value={formData.problem}
                      onChange={(e) => setFormData({...formData, problem: e.target.value})}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Department</label>
                    <select 
                      value={formData.dept}
                      onChange={(e) => setFormData({...formData, dept: e.target.value})}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-blue-500 bg-white"
                    >
                      <option value="Cardiology">Cardiology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Gynecology">Gynecology</option>
                      <option value="General Medicine">General Medicine</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Doctor ka Naam</label>
                    <select 
                      value={formData.doctor}
                      onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-blue-500 bg-white"
                    >
                      <option value="Dr. Rahul Sharma">Dr. Rahul Sharma (Cardiologist)</option>
                      <option value="Dr. Priya Mehta">Dr. Priya Mehta (Neurologist)</option>
                      <option value="Dr. Amit Verma">Dr. Amit Verma (Orthopedic)</option>
                      <option value="Dr. Neha Kapoor">Dr. Neha Kapoor (Pediatrician)</option>
                      <option value="Dr. Anjali Singh">Dr. Anjali Singh (Gynecologist)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Date *</label>
                    <input 
                      type="date" 
                      required 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Time *</label>
                    <input 
                      type="time" 
                      required 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <EmergencyBar />

      </div>
    </div>
  );
}