import React from 'react';

const LOGOS = [
  'Acme Corp', 'Quantum', 'Echo', 'Vertex', 'Nebula', 'Cyberdyne', 'Massive', 'Global'
];

export const SocialProof: React.FC = () => {
  return (
    <div className="py-10 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-8">
          Trusted by innovative teams worldwide
        </p>
        <div className="relative flex overflow-hidden group">
          <div className="flex space-x-16 animate-scroll whitespace-nowrap py-4">
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <div className="w-8 h-8 bg-white/20 rounded-md" />
                <span className="text-xl font-bold font-sans text-white">{logo}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030712] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030712] to-transparent" />
        </div>
      </div>
    </div>
  );
};