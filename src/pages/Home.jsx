import React, { useState } from 'react';
import { 
  Calendar, UserCheck, FileText, CreditCard, ChevronRight, 
  Shield, Award, Clock, Star, Users, ShieldCheck, DollarSign,
  Search, Download, Headphones, Phone, Mail, MapPin, Send, 
  Target, Eye as VisionIcon, CheckCircle2, XCircle, X, User, Activity
} from 'lucide-react';
import StatBanner from '../components/StatBanner';
import EmergencyBar from '../components/EmergencyBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [docFilter, setDocFilter] = useState('All');
  const [docSearch, setDocSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    problem: '',
    dept: 'Cardiology',
    doctor: 'Dr. Rahul Sharma',
    date: '',
    time: ''
  });

  // 1. Departments Data
  const departments = [
    { id: 1, name: "Cardiology", desc: "Comprehensive heart care including diagnosis, treatment and prevention.", img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Neurology", desc: "Advanced care for brain, spine, and nervous system disorders.", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&auto=format&fit=crop&q=80" },
    { id: 3, name: "Orthopedics", desc: "Expert care for bones, joints, ligaments, and muscle conditions.", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80" },
    { id: 4, name: "Pediatrics", desc: "Complete healthcare for infants, children and adolescents.", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80" },
    { id: 5, name: "Gynecology", desc: "Women's health, maternity care and advanced treatments.", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&auto=format&fit=crop&q=80" },
    { id: 6, name: "General Medicine", desc: "Primary care for all ages and management of common illnesses.", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=80" },
    { id: 7, name: "Pulmonology", desc: "Diagnosis and treatment of lung and respiratory conditions.", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=80" },
    { id: 8, name: "Nephrology", desc: "Comprehensive kidney care and treatment for renal disorders.", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=80" },
  ];

  // 2. Doctors Data (Dr. Rahul Sharma & Dr. Neha Kapoor working high-res links)
  const doctorsList = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      degree: "MBBS, MD (Cardiology)",
      exp: "15+ Years Experience",
      dept: "Cardiology",
      badgeColor: "bg-blue-600",
      about: "Expert in interventional cardiology, heart failure & preventive cardiology.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Dr. Priya Mehta",
      degree: "MBBS, MD (Neurology)",
      exp: "12+ Years Experience",
      dept: "Neurology",
      badgeColor: "bg-purple-600",
      about: "Specialist in brain & spine disorders, stroke & headache management.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      degree: "MBBS, MS (Orthopedics)",
      exp: "14+ Years Experience",
      dept: "Orthopedics",
      badgeColor: "bg-emerald-600",
      about: "Joint replacement, arthroscopy, sports injuries & spine care expert.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Dr. Neha Kapoor",
      degree: "MBBS, MD (Pediatrics)",
      exp: "10+ Years Experience",
      dept: "Pediatrics",
      badgeColor: "bg-amber-500",
      about: "Child healthcare, vaccinations, newborn care & growth monitoring.",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  // 3. Appointments Data
  const [appointmentsList, setAppointmentsList] = useState([
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
      doctorImg: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100',
      dept: 'Pediatrics', 
      date: '16 May 2024', 
      time: '10:30 AM', 
      status: 'Pending' 
    }
  ]);

  // 4. Testimonials Data
  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Patient",
      text: "The doctors and staff at PRISM Hospital are very caring and professional. I had a great experience with the treatment.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Priya Singh",
      role: "Patient",
      text: "Excellent facilities and well-maintained hospital. The medical nursing staff is very supportive and attentive.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Amit Verma",
      role: "Patient",
      text: "I highly recommend PRISM Hospital for any medical needs. Truly the best healthcare facility in the region!",
      rating: 5,
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'Pending': return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'Cancelled': return 'bg-rose-50 text-rose-600 border border-rose-200';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: `APT-2024-000${appointmentsList.length + 1}`,
      patient: formData.patientName,
      phone: formData.phone,
      patientImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      doctor: formData.doctor,
      doctorRole: 'Consultant',
      doctorImg: formData.doctor === 'Dr. Neha Kapoor' 
        ? 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100'
        : formData.doctor === 'Dr. Priya Mehta'
        ? 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80',
      dept: formData.dept,
      date: formData.date || 'Today',
      time: formData.time || '11:00 AM',
      status: 'Confirmed'
    };

    setAppointmentsList([newEntry, ...appointmentsList]);
    setShowModal(false);
    setFormData({ patientName: '', phone: '', problem: '', dept: 'Cardiology', doctor: 'Dr. Rahul Sharma', date: '', time: '' });
  };

  const filteredAppointments = appointmentsList.filter(item => 
    item.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.includes(searchTerm) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDoctors = doctorsList.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(docSearch.toLowerCase()) || doc.dept.toLowerCase().includes(docSearch.toLowerCase());
    const matchesDept = docFilter === 'All' || doc.dept === docFilter;
    return matchesSearch && matchesDept;
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-r from-blue-50/80 via-white to-blue-50/30 py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100/80 px-3 py-1 rounded-full">
              Your Health, Our Priority
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Compassionate Care, <br />
              <span className="text-blue-600">Advanced Medicine</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
              PRISM Hospital is committed to providing world-class healthcare services with a patient-first approach and advanced medical technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-xs shadow hover:bg-blue-700 transition cursor-pointer"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => scrollTo('about')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold text-xs hover:bg-gray-100 transition cursor-pointer"
              >
                Learn More →
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-gray-600">
              <div className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-blue-600" /> Expert Doctors</div>
              <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-blue-600" /> 24/7 Care</div>
              <div className="flex items-center gap-1.5"><Award className="h-4 w-4 text-blue-600" /> Modern Facilities</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&auto=format&fit=crop&q=80" 
              alt="PRISM Hospital Doctor" 
              className="rounded-2xl shadow-xl w-full object-cover h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION CARDS */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Book Appointment", desc: "Schedule an appointment with our expert doctors.", icon: Calendar, action: () => setShowModal(true) },
          { title: "Find a Doctor", desc: "Search for doctors by specialization.", icon: UserCheck, action: () => scrollTo('doctors') },
          { title: "Our Departments", desc: "Explore our specialized treatment centers.", icon: FileText, action: () => scrollTo('departments') },
          { title: "24/7 Emergency", desc: "Instant emergency care and ambulances.", icon: CreditCard, action: () => scrollTo('contact') }
        ].map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} onClick={c.action} className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0"><Icon className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{c.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">{c.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Caring for the Community with Compassion</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              At PRISM Hospital, we provide state-of-the-art medical services with international safety protocols and personalized care for every single patient.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <Target className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Our Mission</h4>
                  <p className="text-[11px] text-gray-500">Provide accessible, ethical, and high-quality care.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <VisionIcon className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Our Vision</h4>
                  <p className="text-[11px] text-gray-500">To be the trusted healthcare destination nationally.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&auto=format&fit=crop&q=80" 
              alt="PRISM Hospital Exterior" 
              className="rounded-2xl shadow-lg h-80 w-full object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Why Choose PRISM</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">We Are Dedicated to Your Health</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Patient-Centered Care", desc: "Personalized care plans tailored for best recovery.", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&auto=format&fit=crop&q=80" },
            { title: "Expert Medical Team", desc: "Board-certified doctors with decades of surgical experience.", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=80" },
            { title: "Advanced Technology", desc: "Latest robotic surgery and ultra-sound imaging devices.", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80" },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={c.img} alt={c.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <h4 className="font-bold text-sm text-gray-900 mb-1">{c.title}</h4>
                <p className="text-xs text-gray-500">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STAT BANNER */}
      <StatBanner />

      {/* 5. DEPARTMENTS SECTION */}
      <section id="departments" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Specialties</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Specialized Departments</h2>
          <p className="text-xs text-gray-500 mt-2">Comprehensive medical care across premier disciplines</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <img src={dept.img} alt={dept.name} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{dept.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{dept.desc}</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button 
                  onClick={() => { setFormData({...formData, dept: dept.name}); setShowModal(true); }} 
                  className="text-xs font-semibold text-blue-600 flex items-center justify-between hover:underline pt-2 border-t border-gray-100 w-full cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DOCTORS SECTION */}
      <section id="doctors" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Meet Our Specialist Doctors</h2>
            <p className="text-xs text-gray-500 mt-1">Experienced and certified healthcare professionals</p>
          </div>

          {/* Filter Bar */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-gray-200 mb-10 flex flex-wrap gap-3 items-center justify-between">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by doctor name or specialty..." 
                value={docSearch}
                onChange={(e) => setDocSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-blue-500"
              />
            </div>
            <select 
              value={docFilter}
              onChange={(e) => setDocFilter(e.target.value)}
              className="border border-gray-200 px-3 py-1.5 rounded-lg text-xs text-gray-600 bg-white"
            >
              <option value="All">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
          </div>

          {/* 4 Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="relative">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-52 object-cover bg-gray-100"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=500";
                      }}
                    />
                    <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm ${doc.badgeColor}`}>
                      {doc.dept}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/95 text-emerald-600 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Available
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-gray-900">{doc.name}</h3>
                    <p className="text-[11px] text-blue-600 font-semibold">{doc.degree}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 mb-2">{doc.exp}</p>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{doc.about}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button 
                    onClick={() => { setFormData({...formData, doctor: doc.name, dept: doc.dept}); setShowModal(true); }}
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg text-xs hover:bg-blue-700 transition cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPOINTMENTS SECTION */}
      <section id="appointments" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Appointments</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Book & Track Your Appointments</h2>
            <p className="text-xs text-gray-500 mt-1">Real-time scheduling and patient consultations status</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer w-fit"
          >
            <Calendar className="h-4 w-4" /> Book New Appointment
          </button>
        </div>

        {/* 4 Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Appointments</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{appointmentsList.length}</h3>
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

        {/* Table + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-white p-4 rounded-t-xl border border-b-0 border-gray-200 flex items-center justify-between">
              <h3 className="text-base font-bold text-gray-900">Current Schedule</h3>
              <button className="flex items-center gap-1 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                <Download className="h-3.5 w-3.5" /> Export
              </button>
            </div>
            <div className="bg-white p-4 border border-b-0 border-gray-200">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by patient name, phone or ID..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-blue-500"
                />
              </div>
            </div>
            <div className="bg-white rounded-b-xl border border-gray-200 overflow-x-auto shadow-sm">
              <table className="w-full text-left text-xs text-gray-600">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-3">ID</th>
                    <th className="py-3 px-3">Patient</th>
                    <th className="py-3 px-3">Doctor</th>
                    <th className="py-3 px-3">Department</th>
                    <th className="py-3 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAppointments.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-semibold text-blue-600">{row.id}</td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <img src={row.patientImg} alt={row.patient} className="w-8 h-8 rounded-full object-cover shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">{row.patient}</p>
                            <p className="text-[10px] text-gray-400">{row.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <img 
                            src={row.doctorImg} 
                            alt={row.doctor} 
                            className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-100 bg-gray-100" 
                            onError={(e) => {
                              e.currentTarget.src = "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100";
                            }}
                          />
                          <div>
                            <p className="font-semibold text-gray-800">{row.doctor}</p>
                            <p className="text-[10px] text-gray-400">{row.doctorRole}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">{row.dept}</td>
                      <td className="py-3 px-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${getStatusBadge(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-sm">
              <Calendar className="h-6 w-6 text-white mb-2" />
              <h3 className="text-lg font-bold">Book an Appointment</h3>
              <p className="text-xs text-blue-100 mt-1 mb-4">Book with our specialists instantly without waiting in queue.</p>
              <button onClick={() => setShowModal(true)} className="w-full py-2.5 bg-white text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-50 transition cursor-pointer">
                Send Request Now
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
              <Headphones className="h-6 w-6 text-blue-600 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">Need Immediate Help?</h4>
                <p className="text-xs text-gray-500 mt-0.5">24/7 dedicated patient support desk.</p>
                <a href="tel:+917073889265" className="mt-2 text-xs font-bold text-blue-600 flex items-center gap-1.5 hover:underline">
                  <Phone className="h-3.5 w-3.5" /> +91 7073889265
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-gray-200/70 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-600 italic leading-relaxed mb-4">"{t.text}"</p>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{t.name}</h4>
                    <p className="text-[10px] text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EMERGENCY & WHATSAPP BAR */}
      <EmergencyBar />

      {/* 10. CONTACT US SECTION */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Contact PRISM Hospital</h2>
          <p className="text-xs text-gray-500 mt-1">Reach out for any emergency, doctor inquiries, or general support</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200">
              <Phone className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="text-xs font-bold text-gray-800">Phone & Emergency</h4>
              <p className="text-xs text-gray-600 mt-1 font-semibold">+91 7073889265</p>
              <p className="text-xs text-emerald-600 font-semibold">Available 24/7</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200">
              <Mail className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="text-xs font-bold text-gray-800">Email Address</h4>
              <p className="text-xs text-gray-500 mt-1">info@prismhospital.com</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200">
              <MapPin className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="text-xs font-bold text-gray-800">Hospital Location</h4>
              <p className="text-xs text-gray-500 mt-1">123, HealthCare Street, Medical District, New Delhi - 110001</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Send Us a Direct Message</h3>
            <p className="text-xs text-gray-400 mb-6">Our PRISM clinic coordinators will contact you within 15 minutes.</p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent to PRISM Hospital!'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="Your Name" className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" />
                <input type="tel" required placeholder="Phone Number" className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" required placeholder="Email Address" className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" />
                <input type="text" placeholder="Subject / Department" className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500" />
              </div>
              <textarea rows="4" required placeholder="Your Message or Health Concern" className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-blue-500"></textarea>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition cursor-pointer">
                Send Message <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* APPOINTMENT BOOKING MODAL FORM */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-blue-600 px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <h3 className="font-bold text-sm sm:text-base">Book Patient Appointment - PRISM Hospital</h3>
              </div>
              <button onClick={() => setShowModal(false)} className="hover:bg-white/20 p-1.5 rounded-full transition cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
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
                <label className="block text-xs font-semibold text-gray-700 mb-1">Bimari / Samasya (Health Issue / Symptoms) *</label>
                <div className="relative">
                  <Activity className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Chest pain, Fever, Joint pain, Child checkup" 
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
                    <option value="Dr. Rahul Sharma">Dr. Rahul Sharma (Cardiology)</option>
                    <option value="Dr. Priya Mehta">Dr. Priya Mehta (Neurology)</option>
                    <option value="Dr. Amit Verma">Dr. Amit Verma (Orthopedics)</option>
                    <option value="Dr. Neha Kapoor">Dr. Neha Kapoor (Pediatrics)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Appointment Date *</label>
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
                  className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}