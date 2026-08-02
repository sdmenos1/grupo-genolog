'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-lg shadow-black/5 py-2' 
        : 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3'
    }`}>
      {/* Reading Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-brand-petroleum via-brand-gold to-brand-copper"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20 sm:h-24">
          
          {/* LEFT: Executive Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group py-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/corporativo/logo.png"
                alt="GRUPO GENOLG MINERÍA & CONSTRUCCIÓN Logo"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
              />
            </Link>
          </div>

          {/* CENTER: Multi-Page Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <nav className="flex items-center space-x-5 xl:space-x-7 text-sm font-bold text-slate-800">
              <Link 
                href="/" 
                className={`py-2 px-1 relative group transition-colors ${isActive('/') ? 'text-brand-gold font-extrabold' : 'hover:text-brand-gold'}`}>
                Inicio
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <Link 
                href="/nosotros" 
                className={`py-2 px-1 relative group transition-colors ${isActive('/nosotros') ? 'text-brand-petroleum font-extrabold' : 'hover:text-brand-petroleum'}`}>
                Nosotros
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-petroleum transition-all duration-300 ${isActive('/nosotros') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}>
                <Link 
                  href="/servicios" 
                  className={`py-2 px-1 inline-flex items-center gap-1.5 group transition-colors ${isActive('/servicios') ? 'text-brand-petroleum font-extrabold' : 'hover:text-brand-petroleum'}`}>
                  <span>Servicios</span>
                  <i className={`fa-solid fa-chevron-down text-xs text-brand-petroleum transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
                </Link>

                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-300 ease-out origin-top
                    ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-3 scale-95'}
                  `}>
                  <div className="w-80 bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl shadow-black/10 space-y-1 text-xs text-slate-800">
                    <Link href="/servicios" className="block p-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-petroleum transition">
                      <div className="font-bold text-slate-900 flex items-center gap-2"><i className="fa-solid fa-compass-drafting text-brand-petroleum"></i> 1. Diseño AutoCAD 3D</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Ingeniería de detalle para fabricación y montaje.</div>
                    </Link>
                    <Link href="/servicios" className="block p-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-petroleum transition">
                      <div className="font-bold text-slate-900 flex items-center gap-2"><i className="fa-solid fa-industry text-brand-petroleum"></i> 2. Fabricación Metalmecánica</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Suministro con soldadura WPS/PQR.</div>
                    </Link>
                    <Link href="/servicios" className="block p-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-petroleum transition">
                      <div className="font-bold text-slate-900 flex items-center gap-2"><i className="fa-solid fa-helmet-safety text-brand-petroleum"></i> 3. Montaje de Estructuras</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Calidad y seguridad industrial HSE.</div>
                    </Link>
                    <Link href="/servicios" className="block p-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-petroleum transition">
                      <div className="font-bold text-slate-900 flex items-center gap-2"><i className="fa-solid fa-gears text-brand-petroleum"></i> 4. Mantenimiento &amp; Overhaul</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Paradas de planta e inspección continua.</div>
                    </Link>
                    <Link href="/servicios" className="block p-2.5 rounded-xl hover:bg-slate-50 hover:text-brand-petroleum transition">
                      <div className="font-bold text-slate-900 flex items-center gap-2"><i className="fa-solid fa-person-digging text-brand-petroleum"></i> 5. Obras Civiles &amp; Ambientales</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Cimentaciones pesadas y remediación de pasivos.</div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                href="/acreditaciones" 
                className={`py-2 px-1 relative group transition-colors ${isActive('/acreditaciones') ? 'text-brand-petroleum font-extrabold' : 'hover:text-brand-petroleum'}`}>
                Acreditaciones
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-petroleum transition-all duration-300 ${isActive('/acreditaciones') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <Link 
                href="/proyectos" 
                className={`py-2 px-1 relative group transition-colors ${isActive('/proyectos') ? 'text-brand-petroleum font-extrabold' : 'hover:text-brand-petroleum'}`}>
                Clientes
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-petroleum transition-all duration-300 ${isActive('/proyectos') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <Link 
                href="/descargas" 
                className={`py-2 px-1 relative group transition-colors text-center ${isActive('/descargas') ? 'text-brand-petroleum font-extrabold' : 'hover:text-brand-petroleum'}`}>
                <span>Descargas B2B</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-petroleum transition-all duration-300 ${isActive('/descargas') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              <Link 
                href="/contacto" 
                className={`py-2 px-1 relative group transition-colors ${isActive('/contacto') ? 'text-brand-petroleum font-extrabold' : 'hover:text-brand-petroleum'}`}>
                Contacto
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-petroleum transition-all duration-300 ${isActive('/contacto') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </nav>
          </div>

          {/* RIGHT: Certificates */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Bureau Veritas Image Logo */}
            <img src="/images/bureau-veritas.png" alt="Bureau Veritas Empresa Homologada" className="h-10 w-auto object-contain rounded shadow-sm" />

            <button
              onClick={() => onOpenQuoteModal()}
              className="hidden xl:flex bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum hover:from-brand-gold hover:to-brand-copper text-white font-extrabold text-[11px] px-3.5 py-2 rounded-lg border border-brand-gold/40 shadow-md transition duration-300 items-center gap-2 transform hover:scale-105">
              <i className="fa-solid fa-calculator"></i>
              <span>Cotizar</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-slate-800 hover:text-brand-gold p-2 text-2xl focus:outline-none">
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-6 py-6 space-y-4 text-sm font-semibold shadow-2xl backdrop-blur-2xl">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-brand-gold py-1">Inicio</Link>
          <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-brand-gold py-1">Nosotros &amp; Capital Humano</Link>
          <Link href="/servicios" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-brand-gold py-1">Servicios de Ingeniería</Link>
          <Link href="/acreditaciones" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-brand-gold py-1">Acreditaciones Bureau Veritas &amp; MINEM</Link>
          <Link href="/proyectos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-brand-gold py-1">Clientes Destacados &amp; Proyectos</Link>
          <Link href="/descargas" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-brand-gold py-1">Centro de Descargas Técnicas</Link>
          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-brand-gold py-1">Contacto &amp; Sedes</Link>
          <div className="pt-4 space-y-3">
            <a href="https://wa.me/51902967134" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-steel text-brand-gold border border-brand-gold/30 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <i className="fa-brands fa-whatsapp text-lg"></i> Contacto Directo (+51 902 967 134)
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
