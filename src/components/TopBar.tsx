'use client';

import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-brand-titanium border-b border-slate-800 text-xs py-2.5 px-4 sm:px-8 text-slate-300 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        
        {/* Left Info & Slogan */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="inline-flex items-center gap-2 text-brand-gold font-extrabold uppercase tracking-wider text-[11px] bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">
            <i className="fa-solid fa-award"></i>
            <span>&quot;Somos la mejor opción en ingeniería&quot;</span>
          </span>

          <span className="hidden md:inline-flex items-center gap-2 text-slate-300">
            <i className="fa-solid fa-building text-brand-gold"></i>
            <span>RUC: <strong className="text-white font-bold">20608261894</strong> (Activo / Habido)</span>
          </span>

          <span className="hidden lg:inline-flex items-center gap-2 border-l border-slate-800 pl-4 text-slate-300">
            <i className="fa-solid fa-shield-halved text-brand-gold"></i>
            <span>Bureau Veritas (<strong className="text-brand-gold">87.81% - Nivel B</strong>)</span>
          </span>
        </div>

        {/* Right Direct Contacts */}
        <div className="flex items-center gap-6 text-xs">
          <a 
            href="mailto:gerencia@grupogenolg.com" 
            className="hover:text-brand-gold transition-colors flex items-center gap-2">
            <i className="fa-regular fa-envelope text-brand-gold"></i>
            <span className="hidden sm:inline">gerencia@grupogenolg.com</span>
          </a>
          <a 
            href="tel:+51950843157" 
            className="hover:text-brand-gold transition-colors flex items-center gap-2 font-bold text-white bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
            <i className="fa-solid fa-phone text-brand-gold"></i>
            <span>+51 950 843 157</span>
          </a>
        </div>

      </div>
    </div>
  );
}
