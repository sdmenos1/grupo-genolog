'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
      setScrolled(winScroll > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-deepObsidian/95 backdrop-blur-2xl border-b border-brand-gold/30 shadow-2xl py-2' 
        : 'bg-brand-deepObsidian/90 backdrop-blur-xl border-b border-slate-800/80 py-3'
    }`}>
      {/* Scroll Reading Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-brand-petroleum via-brand-gold to-brand-copper transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20 sm:h-24">
          
          {/* Executive Logo Backplate for Perfect Contrast */}
          <a href="#inicio" className="flex items-center group flex-shrink-0">
            <div className="bg-slate-100/95 hover:bg-white p-2.5 sm:p-3 rounded-2xl border border-brand-gold/40 shadow-soft-gold transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="GRUPO GENOLG MINERÍA & CONSTRUCCIÓN Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[200px] sm:max-w-[240px]"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 lg:space-x-8 text-sm font-bold text-slate-100">
            <a href="#inicio" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#acreditaciones" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
              Acreditaciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#nosotros" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
              Nosotros &amp; Cuadrillas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#servicios" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
              Servicios Técnicos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#proyectos" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
              Proyectos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#recursos" className="hover:text-brand-gold transition-colors py-2 px-1 relative group">
              Descargas B2B
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3 flex-shrink-0">
            <a 
              href="https://wa.me/51950843157?text=Estimados%20GRUPO%20GENOLG,%20solicito%20atenci%C3%B3n%20para%20un%20proyecto%20minero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-steel hover:bg-slate-800 text-brand-gold hover:text-white border border-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-md">
              <i className="fa-brands fa-whatsapp text-base text-brand-gold"></i>
              <span className="hidden md:inline">WhatsApp B2B</span>
            </a>
            <button 
              onClick={() => onOpenQuoteModal()} 
              className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 border border-brand-gold/30 hover:scale-105">
              <i className="fa-solid fa-calculator"></i>
              <span>Solicitar Cotización</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
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
        <div className="xl:hidden bg-brand-titanium/98 border-b border-slate-800 px-6 py-6 space-y-4 text-sm font-semibold shadow-2xl">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Inicio</a>
          <a href="#acreditaciones" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Acreditaciones Bureau Veritas</a>
          <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Nosotros y Cuadrilla Homologada</a>
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Servicios de Ingeniería</a>
          <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Proyectos en Unidades Mineras</a>
          <a href="#recursos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Centro de Descargas Técnicas</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-brand-gold py-1">Sedes Lima &amp; Pasco</a>
          <div className="pt-4 space-y-3">
            <a href="https://wa.me/51950843157" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-steel text-brand-gold border border-slate-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <i className="fa-brands fa-whatsapp text-lg"></i> Contacto Directo (+51 950 843 157)
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }} 
              className="w-full bg-brand-petroleum text-white border border-brand-gold/40 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <i className="fa-solid fa-file-signature"></i> Solicitar Cotización B2B
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
