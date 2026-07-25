'use client';

import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-brand-darkPetroleum/90 border-b border-brand-petroleum/40 text-xs py-2.5 px-4 sm:px-8 text-slate-300 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-2 font-semibold text-slate-200">
            <i className="fa-solid fa-building text-brand-gold"></i>
            <span>RUC: <strong className="text-white">20608261894</strong> (Activo / Habido)</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-2 border-l border-slate-700 pl-4">
            <i className="fa-solid fa-certificate text-brand-gold"></i>
            <span>MINEM R.D. N° 0288-2021-MINEM/DGM</span>
          </span>
          <span className="hidden lg:inline-flex items-center gap-2 border-l border-slate-700 pl-4">
            <i className="fa-solid fa-shield-halved text-brand-gold"></i>
            <span>Bureau Veritas HP0017249 (<strong className="text-brand-gold">87.81% - Nivel B</strong>)</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <a href="mailto:gerencia@grupogenolg.com" className="hover:text-brand-gold transition-colors flex items-center gap-2">
            <i className="fa-regular fa-envelope text-brand-gold"></i>
            <span className="hidden sm:inline">gerencia@grupogenolg.com</span>
          </a>
          <a href="tel:+51950843157" className="hover:text-brand-gold transition-colors flex items-center gap-2 font-bold text-white">
            <i className="fa-solid fa-phone text-brand-gold"></i>
            <span>+51 950 843 157</span>
          </a>
        </div>
      </div>
    </div>
  );
}
