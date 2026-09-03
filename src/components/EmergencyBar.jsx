import React from 'react';
import { Calendar, PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';

export default function EmergencyBar() {
  const whatsappNumber = "917073889265";
  const displayPhone = "+91 7073889265";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        
        {/* Left item: Callback */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="p-3 bg-white/10 rounded-xl shrink-0">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-base font-bold">Can't find a suitable time?</h4>
            <p className="text-xs text-blue-100">We will help you find the best available slot.</p>
          </div>
          <a 
            href={`tel:${displayPhone}`}
            className="ml-auto md:ml-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-50 flex items-center gap-2 shrink-0 transition"
          >
            <PhoneCall className="h-3.5 w-3.5" /> Request a Callback
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-blue-400/40"></div>

        {/* Right item: WhatsApp with your number */}
        <div className="flex items-center justify-between w-full md:w-auto gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500 rounded-xl shrink-0">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-base font-bold">Book via WhatsApp</h4>
              <p className="text-xs text-blue-100">Quick & easy appointment booking ({displayPhone})</p>
            </div>
          </div>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hello%20PRISM%20Hospital,%20I%20want%20to%20book%20an%20appointment.`}
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition shrink-0"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </a>
        </div>

      </div>
    </div>
  );
}