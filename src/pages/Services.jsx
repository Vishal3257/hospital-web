import React from 'react';
import { 
  Shield, Users, Clock, ChevronRight, Cpu, 
  HeartHandshake, DollarSign, Calendar, Phone, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import StatBanner from '../components/StatBanner';

const serviceList = [
  {
    id: 1,
    title: "Cardiology",
    desc: "Comprehensive heart care including diagnosis, treatment and prevention.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Neurology",
    desc: "Advanced treatment for brain, spine and nervous system disorders.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Orthopedics",
    desc: "Expert care for bones, joints, ligaments, and muscle conditions.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Pediatrics",
    desc: "Specialized healthcare for infants, children and adolescents.",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Gynecology",
    desc: "Women's health, maternity care and advanced treatments.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Pulmonology",
    desc: "Diagnosis and treatment of lung and respiratory conditions.",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    title: "Nephrology",
    desc: "Comprehensive kidney care and treatment for renal disorders.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    title: "Ophthalmology",
    desc: "Complete eye care services including surgery and vision correction.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    title: "Dermatology",
    desc: "Treatment for skin, hair and nail conditions with advanced care.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    title: "Dental Care",
    desc: "Complete dental care for your healthy and confident smile.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Top Banner (Clean - No Breadcrumbs) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Our Services</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Comprehensive Healthcare <br />
              Services for You and <br />
              <span className="text-blue-600">Your Family</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 max-w-lg leading-relaxed">
              At PRISM Hospital, we offer a wide range of healthcare services using advanced technology and a patient-first approach to deliver the best possible care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><Shield className="h-5 w-5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Quality Care</h4>
                  <p className="text-[10px] text-gray-500">High quality medical care</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><Users className="h-5 w-5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Expert Team</h4>
                  <p className="text-[10px] text-gray-500">Experienced specialists</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><Clock className="h-5 w-5" /></div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">24/7 Support</h4>
                  <p className="text-[10px] text-gray-500">Round-the-clock care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80" 
              alt="Hospital Reception" 
              className="rounded-2xl shadow-md w-full object-cover h-72 sm:h-80"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&auto=format&fit=crop&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Grid With Real Photos */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Our Healthcare Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {serviceList.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="p-4 text-center">
                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed line-clamp-2">{item.desc}</p>
                <Link 
                  to="/appointments" 
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 mt-3 hover:underline"
                >
                  Book Now <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-32 object-cover border-t border-gray-100 bg-gray-50" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Why Choose PRISM</span>
            <h3 className="text-2xl font-bold text-gray-900">Your Health is Our Priority</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We are committed to providing exceptional healthcare services with compassion, advanced technology, and a patient-first approach.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                to="/appointments" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
              >
                <Calendar className="h-4 w-4" /> Book an Appointment
              </Link>
              <a 
                href="tel:+917073889265"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition"
              >
                <Phone className="h-3.5 w-3.5 text-blue-600" /> +91 7073889265
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-gray-100 bg-slate-50 flex items-start gap-3">
              <Cpu className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-gray-900">Advanced Technology</h5>
                <p className="text-[11px] text-gray-500 mt-0.5">State-of-the-art equipment for accurate diagnosis and treatment.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-100 bg-slate-50 flex items-start gap-3">
              <Users className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-gray-900">Experienced Doctors</h5>
                <p className="text-[11px] text-gray-500 mt-0.5">Our team of expert doctors provides the best medical care.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-100 bg-slate-50 flex items-start gap-3">
              <HeartHandshake className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-gray-900">Patient-Centered Care</h5>
                <p className="text-[11px] text-gray-500 mt-0.5">Personalized care and attention for every patient.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-100 bg-slate-50 flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-gray-900">Affordable Healthcare</h5>
                <p className="text-[11px] text-gray-500 mt-0.5">Quality healthcare services at affordable prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <StatBanner />

    </div>
  );
}