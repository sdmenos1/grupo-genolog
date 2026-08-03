'use client';

import React, { useState, useEffect } from 'react';
import HeroCanvas from './HeroCanvas';

interface HeroProps {
  onOpenDownloadModal: () => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

const heroSlides = [
  {
    image: '/images/hero/hero_sag_mill.jpg',
    badge: 'MANTENIMIENTO INDUSTRIAL & PDP',
    tag: 'Paradas de Planta Operativas en Vivo',
    title: 'Ingeniería, Mantenimiento & Paradas de Planta Concentradora',
    desc: 'Ejecución de proyectos metalmecánicos y mantenimiento continuo en plantas concentradoras e industriales. Innovación tecnológica y cero incidentes bajo los más altos estándares de calidad.',
    serviceName: 'Mantenimiento de Planta Concentradora / PDP'
  },
  {
    image: '/images/hero/hero_welder.jpg',
    badge: 'DISEÑO AUTOCAD 3D & WELDING',
    tag: 'Desarrollo de Ingeniería de Detalle',
    title: 'Diseño en AutoCAD 3D & Fabricación Metalmecánica',
    desc: 'Suministro y fabricación de estructuras metalmecánicas adaptadas a proyectos mineros e industriales con equipos de soldadura de última generación y homologación AWS D1.1 / ASME IX.',
    serviceName: 'Fabricación y Montaje Metalmecánico'
  },
  {
    image: '/images/hero/hero_flotation_cells.jpg',
    badge: 'MONTAJE ESTRUCTURAL & OVERHAUL',
    tag: 'Montaje de Estructuras & Maquinaria',
    title: 'Montaje de Estructuras & Overhaul de Equipos Industriales',
    desc: 'Aplicación estricta de estándares de medición, seguridad industrial y controles de calidad con personal técnico especializado para prolongar la vida útil de sus activos.',
    serviceName: 'Fabricación y Montaje Metalmecánico'
  },
  {
    image: '/images/hero/hero_heavy_machinery.jpg',
    badge: 'OBRAS CIVILES & REMEDIACIÓN AMBIENTAL',
    tag: 'Maquinaria Pesada & Conservación de Vías',
    title: 'Movimiento de Tierras, Obras Civiles & Cierre Ambiental',
    desc: 'Infraestructura de concreto armado, mantenimiento de accesos mineros, apertura de vías y remediación ambiental de pasivos con reforestación según ISO 14001.',
    serviceName: 'Maquinaria Pesada y Cierre Ambiental'
  }
];

export default function Hero({ onOpenDownloadModal, onOpenQuoteModal }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentSlide = heroSlides[currentSlideIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((oldIdx) => (oldIdx + 1) % heroSlides.length);
          return 0;
        }
        return prev + 2;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden border-b border-slate-200 bg-slate-50 pt-24 pb-12">
      
      {/* Particle dust canvas simulation */}
      <HeroCanvas />

      {/* Background Images Slider */}
      {heroSlides.map((slide, idx) => (
        <div 
          key={idx}
          className={`full-hero-slide absolute inset-0 w-full h-full ${idx === currentSlideIndex ? 'active' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={slide.image} 
            alt={slide.title} 
            loading={idx === currentSlideIndex ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered light vignette for rich text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/40" />
          <div className="absolute inset-0 bg-white/20" />
        </div>
      ))}

      {/* Foreground Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 py-6 sm:py-10 w-full mt-2 sm:mt-4">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          
          {/* Badge Pill Adaptable */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-3 bg-white/90 border border-slate-200 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-brand-petroleum font-extrabold uppercase tracking-wider text-[10px] sm:text-[11px]">{currentSlide.badge}</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-slate-600 text-[10px] sm:text-xs hidden sm:inline">{currentSlide.tag}</span>
          </div>

          {/* Título Principal Tipográfico Adaptativo */}
          <h1 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-black leading-snug sm:leading-[1.12] tracking-tight text-slate-900 transition-all duration-500">
            {currentSlide.title}
          </h1>

          {/* Descripción */}
          <p className="text-slate-700 text-xs sm:text-lg leading-relaxed font-medium max-w-2xl">
            {currentSlide.desc}
          </p>

          {/* Banner de Slogan Compacto */}
          <div className="inline-block bg-brand-gold/10 border border-brand-gold/30 p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs text-brand-petroleum font-bold backdrop-blur-md leading-tight">
            <i className="fa-solid fa-quote-left mr-1.5"></i>
            <span>&quot;Somos la mejor opción en ingeniería&quot; — GRUPO GENOLG</span>
          </div>

          {/* Cajas de Métricas Responsivas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-1">
            <div className="bg-white/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 flex items-center gap-3 sm:gap-4 hover:border-brand-gold transition duration-300 shadow-sm backdrop-blur-md">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 text-brand-petroleum flex items-center justify-center text-base sm:text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Auditoría Internacional</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">Bureau Veritas: <span className="text-brand-petroleum">87.81%</span></div>
              </div>
            </div>

            <div className="bg-white/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 flex items-center gap-3 sm:gap-4 hover:border-brand-gold transition duration-300 shadow-sm backdrop-blur-md">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 text-brand-petroleum flex items-center justify-center text-base sm:text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-file-shield"></i>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Habilitación Legal</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">MINEM R.D. 0288-2021</div>
              </div>
            </div>
          </div>

          {/* Botones de Acción (Full Width en Mobile) */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button 
              onClick={() => onOpenQuoteModal(currentSlide.serviceName)} 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-md transition-all duration-300 border border-brand-gold/30">
              <span>Cotizar Este Servicio</span>
              <i className="fa-solid fa-calculator text-xs"></i>
            </button>
            <a 
              href="/brochure" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-900 hover:text-brand-petroleum font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-300 hover:border-brand-gold/50 transition-all duration-300 shadow-sm">
              <i className="fa-solid fa-book-open text-brand-gold text-sm"></i>
              <span>Ver Brochure Web 2026</span>
            </a>
          </div>

        </div>
      </div>

      {/* Flechas Flotantes (Ocultas en celular para no tapar el texto, visibles en pantallas sm+) */}
      <button 
        onClick={handlePrevSlide}
        aria-label="Diapositiva Anterior"
        className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-slate-100 hover:text-brand-petroleum border border-slate-300 text-slate-600 items-center justify-center text-base sm:text-lg transition duration-300 shadow-md">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button 
        onClick={handleNextSlide}
        aria-label="Siguiente Diapositiva"
        className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-slate-100 hover:text-brand-petroleum border border-slate-300 text-slate-600 items-center justify-center text-base sm:text-lg transition duration-300 shadow-md">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Autoplay Progress Line */}
      <div className="relative z-30 w-full h-1.5 bg-slate-200">
        <div 
          className="h-full bg-brand-gold transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
