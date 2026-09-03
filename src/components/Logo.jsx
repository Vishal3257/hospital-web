import React from 'react';

export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Prism Geometric Facets */}
      <defs>
        <linearGradient id="prismGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="prismGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="prismGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Outer Prism Body */}
      <polygon points="24,3 45,39 3,39" fill="url(#prismGradient1)" />
      
      {/* Left Light Refraction Facet */}
      <polygon points="24,3 3,39 24,28" fill="url(#prismGradient2)" opacity="0.85" />
      
      {/* Bottom Facet */}
      <polygon points="3,39 45,39 24,28" fill="url(#prismGradient3)" opacity="0.65" />

      {/* Clean White Medical Cross (+) in Center */}
      <rect x="21" y="16" width="6" height="18" rx="1.5" fill="#ffffff" />
      <rect x="15" y="22" width="18" height="6" rx="1.5" fill="#ffffff" />
    </svg>
  );
}