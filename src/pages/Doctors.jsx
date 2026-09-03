import React, { useState } from 'react';
import { 
  Search, Calendar, Award, UserCheck, Users, 
  CheckCircle, ArrowRight, ShieldCheck, HeartHandshake, Cpu 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const doctorsList = [
  {
    id: 1,
    name: "Dr. Rahul Sharma",
    degree: "MBBS, MD (Cardiology)",
    exp: "15+ Years Experience",
    dept: "Cardiology",
    badgeColor: "bg-blue-600",
    about: "Expert in interventional cardiology, heart failure & preventive cardiology.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 2,
    name: "Dr. Priya Mehta",
    degree: "MBBS, MD (Neurology)",
    exp: "12+ Years Experience",
    dept: "Neurology",
    badgeColor: "bg-purple-600",
    about: "Specialist in brain & spine disorders, epilepsy, stroke & headache treatment.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    degree: "MBBS, MS (Orthopedics)",
    exp: "14+ Years Experience",
    dept: "Orthopedics",
    badgeColor: "bg-emerald-600",
    about: "Joint replacement, arthroscopy, sports injuries & spine care expert.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 4,
    name: "Dr. Neha Kapoor",
    degree: "MBBS, MD (Pediatrics)",
    exp: "10+ Years Experience",
    dept: "Pediatrics",
    badgeColor: "bg-amber-500",
    about: "Child healthcare, vaccinations, newborn care & growth monitoring.",
    image: "https://images.unsplash.com/photo-1594824813637-440f2f01f845?w=500&auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 5,
    name: "Dr. Anjali Singh",
    degree: "MBBS, MS (Gynecology)",
    exp: "13+ Years Experience",
    dept: "Gynecology",
    badgeColor: "bg-teal-600",
    about: "Women's health, pregnancy care, laparoscopy & infertility treatment.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 6,
    name: "Dr. Sandeep Gupta",
    degree: "MBBS, MD (General Medicine)",
    exp: "11+ Years Experience",
    dept: "General Medicine",
    badgeColor: "bg-rose-500",
    about: "Managing acute & chronic illnesses, infections & lifestyle disorders.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 7,
    name: "Dr. Riya Malhotra",
    degree: "MBBS, MD (Dermatology)",
    exp: "9+ Years Experience",
    dept: "Dermatology",
    badgeColor: "bg-indigo-600",
    about: "Skin, hair & nail care, acne, allergies & cosmetic treatments.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 8,
    name: "Dr. Vivek Saxena",
    degree: "MBBS, MS (Ophthalmology)",
    exp: "12+ Years Experience",
    dept: "Ophthalmology",
    badgeColor: "bg-sky-600",
    about: "Cataract, glaucoma, retina & laser eye surgery specialist.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    available: true
  }
];

export default function Doctors() {
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredDoctors = doctorsList.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) ||
                          doc.dept.toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === 'All' || doc.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs text-gray-500 mb-1">Home &gt; Doctors</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Expert Doctors</h1>
            <p className="text-xs sm:text-sm text-gray-600 max-w-lg leading-relaxed">
              Our team of highly qualified and experienced doctors is dedicated to providing the best possible care for you and your family.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                <Users className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">120+</h4>
                  <p className="text-[10px] text-gray-400">Expert Doctors</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                <Award className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">15+</h4>
                  <p className="text-[10px] text-gray-400">Years Experience</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                <UserCheck className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">20+</h4>
                  <p className="text-[10px] text-gray-400">Specialties</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">25,000+</h4>
                  <p className="text-[10px] text-gray-400">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&auto=format&fit=crop&q=80" 
              alt="Doctor Team Banner" 
              className="rounded-2xl shadow-lg w-full object-cover h-72 sm:h-80"
            />
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Team</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">Meet Our Specialist Doctors</h2>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm mb-10 flex flex-wrap gap-3 items-center justify-between">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by doctor name or specialty..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 bg-white"
            >
              <option value="All">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Gynecology">Gynecology</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition">
              <Search className="h-3.5 w-3.5" /> Search Doctors
            </button>
          </div>
        </div>

        {/* 8 Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredDoctors.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-52 object-cover bg-gray-100" 
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

              <div className="p-4 pt-0 grid grid-cols-2 gap-2 text-xs">
                <button className="border border-gray-200 py-1.5 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition">
                  View Profile
                </button>
                <Link 
                  to="/appointments" 
                  className="bg-blue-600 text-white font-semibold py-1.5 rounded-lg text-center hover:bg-blue-700 transition"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="text-center mb-16">
          <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-xs font-semibold hover:bg-white transition inline-flex items-center gap-1.5">
            View All Doctors <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Book Appointment CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md mb-16">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <Calendar className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Book an Appointment</h3>
              <p className="text-xs text-blue-100 mt-0.5">Schedule an appointment with our expert doctors and get the best medical care.</p>
            </div>
          </div>

          <Link 
            to="/appointments" 
            className="whitespace-nowrap bg-white text-blue-600 px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-50 transition flex items-center gap-2"
          >
            Book Appointment Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Why Choose Our Doctors */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Why Choose Our Doctors?</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Highly Qualified</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Our doctors are certified in their respective fields.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <Award className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Experienced Team</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Years of experience in treating complex conditions.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <HeartHandshake className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Patient-Centered Care</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Compassionate care tailored to every patient's needs.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <Cpu className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Advanced Technology</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Using the latest technology for accurate diagnosis.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}