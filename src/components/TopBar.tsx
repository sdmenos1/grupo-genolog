'use client';

import React, { useState, useEffect } from 'react';

const topBarTickerItems = [
  {
    icon: 'fa-award',
    label: 'PROMESA DE VALOR',
    text: '"Somos la mejor opción en ingeniería" — GRUPO GENOLG (Minería & Construcción)',
  },
  {
    icon: 'fa-building',
    label: 'RUC OFICIAL',
    text: 'RUC: 20608261894 — Estado Activo / Habido en SUNAT (Sedes Lima & Pasco)',
  },
  {
    icon: 'fa-certificate',
    label: 'HABILITACIÓN LEGAL',
    text: 'MINEM R.D. N° 0288-2021-MINEM/DGM — Registro Oficial de Contratistas Mineros',
  },
  {
    icon: 'fa-shield-halved',
    label: 'AUDITORÍA B2B',
    text: 'Bureau Veritas Certificado HP0017249 — Homologación Calificación Global  (Nivel B)',
  },
];

export default function TopBar() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % topBarTickerItems.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const currentItem = topBarTickerItems[currentIdx];

  return (
    <div className="bg-brand-petroleum border-b border-brand-darkPetroleum text-xs py-2 px-4 sm:px-8 text-white relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        
        {/* Left: Executive Passing Ticker Animation */}
        <div className="flex items-center gap-3 overflow-hidden min-h-[26px]">
          <span className="text-[10px] font-black uppercase tracking-wider bg-brand-gold text-brand-darkPetroleum border border-brand-gold/40 px-2.5 py-0.5 rounded-full flex-shrink-0 flex items-center gap-1.5">
            <i className={`fa-solid ${currentItem.icon}`}></i>
            <span>{currentItem.label}</span>
          </span>

          <div className="text-white text-xs font-semibold truncate transition-all duration-500 transform translate-y-0 opacity-100">
            {currentItem.text}
          </div>
        </div>

        {/* Right: Direct Contacts */}
        <div className="hidden md:flex items-center gap-5 text-xs flex-shrink-0">
          <a 
            href="mailto:supervisor@grupogenolg.com" 
            className="hover:text-brand-gold transition-colors flex items-center gap-2">
            <i className="fa-regular fa-envelope text-brand-gold"></i>
            <span>supervisor@grupogenolg.com</span>
          </a>
          <a 
            href="tel:+51902967134" 
            className="hover:text-brand-darkPetroleum transition-colors flex items-center gap-2 font-bold text-brand-darkPetroleum bg-brand-gold px-3 py-1 rounded-lg border border-brand-gold">
            <i className="fa-solid fa-phone text-brand-darkPetroleum"></i>
            <span>+51 902 967 134</span>
          </a>
        </div>

      </div>
    </div>
  );
}
