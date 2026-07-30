'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
      setScrolled(winScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-deepObsidian/95 backdrop-blur-2xl border-b border-brand-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.85)] py-2' 
        : 'bg-brand-deepObsidian/90 backdrop-blur-xl border-b border-slate-800/80 py-3'
    }`}>
      {/* Scroll Reading Progress Line */}
      <div 
        className="h-1 bg-gradient-to-r from-brand-petroleum via-brand-gold to-brand-copper transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20 sm:h-22">
          
          {/* LEFT: Executive Logo Plate */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center group">
              <div className="relative bg-slate-900/90 hover:bg-slate-950 p-2 sm:p-2.5 rounded-2xl border border-brand-gold/40 shadow-soft-gold transition-all duration-300 group-hover:scale-105 flex items-center justify-center backdrop-blur-md">
                <div className="absolute inset-0 bg-white/95 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="GRUPO GENOLG MINERÍA & CONSTRUCCIÓN Logo"
                  className="relative z-10 h-11 sm:h-13 md:h-15 w-auto object-contain max-w-[190px] sm:max-w-[220px]"
                />
              </div>
            </a>
          </div>

          {/* CENTER: Navigation Links Perfectly Centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <nav className="flex items-center space-x-6 xl:space-x-8 text-sm font-bold text-slate-200">
              <a href="#inicio" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#nosotros" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
                Nosotros
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}>
                <a href="#servicios" className="hover:text-brand-gold transition-colors py-2 px-1 inline-flex items-center gap-1.5 group">
                  <span>Servicios</span>
                  <i className={`fa-solid fa-chevron-down text-xs text-brand-gold transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
                </a>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-brand-titanium/98 border border-slate-700/80 rounded-2xl p-3 shadow-2xl space-y-1 text-xs z-50 backdrop-blur-2xl">
                    <a href="#servicios" className="block p-2.5 rounded-xl hover:bg-brand-steel hover:text-brand-gold transition">
                      <div className="font-bold text-white flex items-center gap-2"><i className="fa-solid fa-compass-drafting text-brand-gold"></i> 1. Diseño AutoCAD 3D</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Ingeniería de detalle para fabricación y montaje.</div>
                    </a>
                    <a href="#servicios" className="block p-2.5 rounded-xl hover:bg-brand-steel hover:text-brand-gold transition">
                      <div className="font-bold text-white flex items-center gap-2"><i className="fa-solid fa-industry text-brand-gold"></i> 2. Fabricación Metalmecánica</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Suministro con soldadura WPS/PQR.</div>
                    </a>
                    <a href="#servicios" className="block p-2.5 rounded-xl hover:bg-brand-steel hover:text-brand-gold transition">
                      <div className="font-bold text-white flex items-center gap-2"><i className="fa-solid fa-helmet-safety text-brand-gold"></i> 3. Montaje de Estructuras</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Calidad y seguridad industrial HSE.</div>
                    </a>
                    <a href="#servicios" className="block p-2.5 rounded-xl hover:bg-brand-steel hover:text-brand-gold transition">
                      <div className="font-bold text-white flex items-center gap-2"><i className="fa-solid fa-gears text-brand-gold"></i> 4. Mantenimiento &amp; Overhaul</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Paradas de planta e inspección continua.</div>
                    </a>
                  </div>
                )}
              </div>

              <a href="#acreditaciones" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
                Acreditaciones
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#proyectos" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
                Clientes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a href="#recursos" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
                Descargas B2B
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>

          {/* RIGHT: Action Buttons Aligned Far Right */}
          <div className="hidden sm:flex items-center space-x-3.5 flex-shrink-0">
            <a 
              href="https://wa.me/51950843157?text=Estimados%20GRUPO%20GENOLG,%20solicito%20atenci%C3%B3n%20para%20un%20proyecto%20minero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-steel hover:bg-slate-800 text-brand-gold hover:text-white border border-brand-gold/30 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-md transform hover:-translate-y-0.5">
              <i className="fa-brands fa-whatsapp text-base text-brand-gold"></i>
              <span className="hidden md:inline">WhatsApp B2B</span>
            </a>
            <button 
              onClick={() => onOpenQuoteModal()} 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-petroleum via-brand-darkPetroleum to-brand-petroleum hover:from-brand-gold hover:to-brand-copper text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 border border-brand-gold/30 hover:scale-105">
              <i className="fa-solid fa-calculator"></i>
              <span>Solicitar Cotización</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-slate-200 hover:text-brand-gold p-2 text-2xl focus:outline-none">
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-titanium/98 border-b border-slate-800 px-6 py-6 space-y-4 text-sm font-semibold shadow-2xl backdrop-blur-2xl">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Inicio</a>
          <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Nosotros y Capital Humano</a>
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Servicios (AutoCAD 3D, Montaje, Mantenimiento)</a>
          <a href="#acreditaciones" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Acreditaciones Bureau Veritas &amp; MINEM</a>
          <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Clientes Destacados y Proyectos</a>
          <a href="#recursos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Centro de Descargas Técnicas</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Sedes Lima &amp; Pasco</a>
          <div className="pt-4 space-y-3">
            <a href="https://wa.me/51950843157" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-steel text-brand-gold border border-brand-gold/30 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <i className="fa-brands fa-whatsapp text-lg"></i> Contacto Directo (+51 950 843 157)
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }} 
              className="w-full bg-brand-petroleum text-white border border-brand-gold/40 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md">
              <i className="fa-solid fa-file-signature"></i> Solicitar Cotización B2B
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
