import React from 'react';
import { 
  Building2, Users, Cpu, ChevronRight, Phone, ArrowRight, 
  Award, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const departmentCards = [
  {
    id: 1,
    name: "Cardiology",
    desc: "Comprehensive heart care including diagnosis, treatment and prevention.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Neurology",
    desc: "Advanced care for brain, spine, and nervous system disorders.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Orthopedics",
    desc: "Expert care for bones, joints, ligaments, and muscle conditions.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Pediatrics",
    desc: "Complete healthcare for infants, children and adolescents.",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Gynecology",
    desc: "Women's health, maternity care and advanced treatments.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "General Medicine",
    desc: "Primary care for all ages and management of common illnesses.",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Pulmonology",
    desc: "Diagnosis and treatment of lung and respiratory conditions.",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Nephrology",
    desc: "Comprehensive kidney care and treatment for renal disorders.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Ophthalmology",
    desc: "Complete eye care services including surgery and vision correction.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Dermatology",
    desc: "Treatment for skin, hair and nail conditions with advanced care.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    name: "Oncology",
    desc: "Comprehensive cancer care with advanced technology and compassion.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    name: "Dental Care",
    desc: "Complete dental care for your healthy and confident smile.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&auto=format&fit=crop&q=80"
  }
];

export default function Departments() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Section (Breadcrumbs Removed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Departments</h1>
            <p className="text-xs sm:text-sm text-gray-600 max-w-lg leading-relaxed">
              We offer a wide range of specialized departments to meet your healthcare needs. Our expert doctors and advanced technology ensure the best possible care for you and your family.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><Building2 className="h-4 w-4" /></div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">20+</h4>
                  <p className="text-[10px] text-gray-400">Specialized Depts</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><Users className="h-4 w-4" /></div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">120+</h4>
                  <p className="text-[10px] text-gray-400">Expert Doctors</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><Cpu className="h-4 w-4" /></div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Advanced</h4>
                  <p className="text-[10px] text-gray-400">Technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80" 
              alt="Hospital Corridor" 
              className="rounded-2xl shadow-lg w-full object-cover h-72 sm:h-80"
            />
            <div className="absolute -bottom-4 right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg max-w-[240px]">
              <h5 className="text-xs font-bold">Compassionate Care Across Every Specialty</h5>
              <p className="text-[10px] text-blue-100 mt-1">Our departments work together to provide comprehensive and personalized care for every patient.</p>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Specialized Departments</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Comprehensive Care for Every Need</h2>
        </div>

        {/* 12 Departments Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {departmentCards.map((dept) => (
            <div 
              key={dept.id} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <img 
                  src={dept.img} 
                  alt={dept.name} 
                  className="w-full h-36 object-cover" 
                />
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{dept.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{dept.desc}</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link 
                  to="/doctors" 
                  className="text-xs font-semibold text-blue-600 flex items-center justify-between hover:underline pt-2 border-t border-gray-100"
                >
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Departments Button */}
        <div className="text-center mb-16">
          <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-xs font-semibold hover:bg-white transition inline-flex items-center gap-1.5 cursor-pointer">
            View All Departments <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Medical Emergency Banner */}
        <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md mb-16">
          <div>
            <h3 className="text-lg font-bold">Medical Emergency?</h3>
            <p className="text-xs text-blue-100 mt-0.5">Our emergency team is available 24/7 to provide immediate care when you need it most.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-blue-100">24/7 Emergency Support</p>
                <a href="tel:+917073889265" className="text-sm font-bold text-white hover:underline">
                  +91 7073889265
                </a>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-50 transition"
            >
              Contact Emergency
            </Link>
          </div>
        </div>

        {/* Why Choose PRISM Hospital - 4 Cards */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Why Choose PRISM Hospital</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">Excellence in Every Department</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <Award className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Expert Specialists</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Highly qualified and experienced doctors in every specialty.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <Cpu className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Advanced Technology</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">State-of-the-art equipment for accurate diagnosis and treatment.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <Users className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Patient-Centered Care</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Personalized care and support for every patient.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Safety & Quality</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Highest standards of safety and quality in healthcare.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}