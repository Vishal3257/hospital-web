import React from 'react';
import { Users, UserCheck, Bed, Award } from 'lucide-react';

export default function StatBanner() {
  const stats = [
    { icon: Users, count: "25,000+", label: "Happy Patients" },
    { icon: UserCheck, count: "120+", label: "Expert Doctors" },
    { icon: Bed, count: "250+", label: "Hospital Beds" },
    { icon: Award, count: "15+", label: "Years of Experience" },
  ];

  return (
    <div className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="flex flex-col items-center justify-center space-y-2">
              <Icon className="h-8 w-8 opacity-90" />
              <span className="text-2xl md:text-3xl font-bold">{s.count}</span>
              <span className="text-xs md:text-sm text-blue-100">{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}