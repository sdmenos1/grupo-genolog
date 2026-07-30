'use client';

import React, { useState, useEffect } from 'react';

export default function LeftScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollPercentage(Math.round((winScroll / height) * 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 pointer-events-none">
      <div className="bg-slate-900/90 backdrop-blur-md p-2 rounded-full border border-brand-gold/30 shadow-2xl flex flex-col items-center gap-3 pointer-events-auto">
        <span className="text-[9px] font-black text-brand-gold uppercase tracking-tighter">
          {scrollPercentage}%
        </span>
        <div className="w-1.5 h-24 bg-slate-800 rounded-full overflow-hidden relative">
          <div 
            className="w-full bg-gradient-to-b from-brand-petroleum via-brand-gold to-brand-copper transition-all duration-150 rounded-full"
            style={{ height: `${scrollPercentage}%` }}
          />
        </div>
        <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></div>
      </div>
    </div>
  );
}
