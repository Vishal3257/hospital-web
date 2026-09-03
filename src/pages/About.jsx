import React from 'react';
import StatBanner from '../components/StatBanner';
import { 
  Target, Eye, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const leadershipTeam = [
  { name: "Dr. Rajesh Sharma", role: "Chief Executive Officer", exp: "25+ years of experience in healthcare management.", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80" },
  { name: "Dr. Anjali Mehta", role: "Medical Director", exp: "Expert in clinical operations and patient care services.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80" },
  { name: "Dr. Vikram Singh", role: "Head of Operations", exp: "Specialist in hospital operations and safety standards.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80" },
  { name: "Dr. Neha Kapoor", role: "Head of Nursing", exp: "Leading nursing services with passion for patient care.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80" },
];

export default function About() {
  const featuresWithImages = [
    { 
      title: "Patient-Centered Care", 
      desc: "We put our patients first and focus on personalized care for better recovery and health outcomes.", 
      img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      title: "Expert Medical Team", 
      desc: "Our experienced doctors and medical staff are dedicated to providing compassionate, top-tier care.", 
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      title: "Advanced Technology", 
      desc: "We use state-of-the-art medical technology and digital imaging for ultra-precise diagnostics.", 
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      title: "24/7 Emergency Care", 
      desc: "Round-the-clock rapid emergency services, ICU monitoring, and critical trauma care always ready.", 
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      title: "Safe & Hygienic", 
      desc: "We strictly maintain international sterilization protocols, patient hygiene, and sanitized wards.", 
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=80" 
    },
    { 
      title: "Affordable Healthcare", 
      desc: "Transparent billing, insurance cashless support, and affordable health plans for all families.", 
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=80" 
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Hero Section with Exterior Hospital Building */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-6 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">About Us</h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              At PRISM Hospital, we are committed to providing exceptional healthcare with compassion, advanced technology, and a patient-first approach.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our mission is to improve lives and build healthier communities through excellence in medical care and innovation.
            </p>
            <Link 
              to="/appointments" 
              className="inline-block bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>
          </div>
          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&auto=format&fit=crop&q=80" 
              alt="Hospital Exterior Building" 
              className="rounded-2xl shadow-md object-cover h-72 sm:h-80 w-full"
            />
          </div>
        </div>

        {/* 25,000+ Stat Banner */}
        <StatBanner />

        {/* Why Choose Us */}
        <div className="my-16 text-center">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-8">We Are Dedicated to Your Health</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {featuresWithImages.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-44 object-cover" 
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Our Mission & Vision</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Better Healthcare <br />for a Better World
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We envision a healthier society where every individual has access to quality healthcare. Our mission is to deliver compassionate, innovative, and affordable medical services.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Our Mission</h4>
                  <p className="text-xs text-gray-500">To provide exceptional healthcare services with compassion, integrity, and excellence.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Our Vision</h4>
                  <p className="text-xs text-gray-500">To be a leading healthcare provider recognized for clinical excellence and patient trust.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&auto=format&fit=crop&q=80" 
              alt="Medical Team in Hospital" 
              className="rounded-2xl shadow-md object-cover h-80 w-full"
            />
          </div>
        </div>

        {/* Leadership Section */}
        <div className="my-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Our Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Meet Our Leadership Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-blue-500" 
                />
                <h3 className="font-bold text-sm text-gray-900">{leader.name}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">{leader.role}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{leader.exp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="text-base font-bold">We Are Here to Help You</h3>
            <p className="text-xs text-blue-100 mt-0.5">Have questions or need assistance? Our team is always ready to support you.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-50 transition flex items-center gap-1.5"
            >
              Contact Us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <div className="text-xs text-right hidden sm:block">
              <p className="text-blue-100 text-[11px]">24/7 Emergency Support</p>
              <p className="font-bold">+91 7073889265</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}