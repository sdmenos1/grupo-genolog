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
    <section id="inicio" className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden border-b border-slate-800 bg-brand-deepObsidian pt-24 pb-12">
      
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
          {/* Multi-layered dark vignette for rich text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deepObsidian via-brand-deepObsidian/85 to-brand-deepObsidian/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deepObsidian via-transparent to-brand-deepObsidian/70" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Foreground Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full mt-4">
        <div className="max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-3 bg-brand-titanium/90 border border-brand-gold/40 px-4 py-2 rounded-full text-xs font-semibold shadow-2xl backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 animate-pulse"></span>
            <span className="text-brand-gold font-extrabold uppercase tracking-wider text-[11px]">{currentSlide.badge}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-200">{currentSlide.tag}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight text-white drop-shadow-lg transition-all duration-500">
            {currentSlide.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl drop-shadow-md">
            {currentSlide.desc}
          </p>

          {/* Slogan Banner */}
          <div className="inline-block bg-brand-gold/15 border border-brand-gold/40 p-3 rounded-xl text-xs text-brand-gold font-bold backdrop-blur-md">
            <i className="fa-solid fa-quote-left mr-2"></i>
            <span>&quot;Somos la mejor opción en ingeniería&quot; — GRUPO GENOLG (Minería &amp; Construcción)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="bg-brand-titanium/95 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 hover:border-brand-gold transition duration-300 shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/40 border border-brand-petroleum/50 text-brand-gold flex items-center justify-center text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Auditoría Internacional</div>
                <div className="text-sm font-bold text-white">Bureau Veritas: <span className="text-brand-gold"></span></div>
              </div>
            </div>

            <div className="bg-brand-titanium/95 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 hover:border-brand-gold transition duration-300 shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/40 border border-brand-petroleum/50 text-brand-gold flex items-center justify-center text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-file-shield"></i>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Habilitación Legal</div>
                <div className="text-sm font-bold text-white">MINEM R.D. 0288-2021</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => onOpenQuoteModal(currentSlide.serviceName)} 
              className="inline-flex items-center justify-center gap-3 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-md transition-all duration-300 border border-brand-gold/30 transform hover:-translate-y-1">
              <span>Cotizar Este Servicio</span>
              <i className="fa-solid fa-calculator"></i>
            </button>
            <button 
              onClick={onOpenDownloadModal} 
              className="inline-flex items-center justify-center gap-3 bg-brand-titanium/90 hover:bg-brand-steel text-white font-bold text-sm px-7 py-4 rounded-2xl border border-slate-700 hover:border-brand-gold/40 transition-all duration-300 backdrop-blur-md shadow-lg">
              <i className="fa-solid fa-file-pdf text-brand-gold text-lg"></i>
              <span>Descargar Brochure PDF</span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Arrows */}
      <button 
        onClick={handlePrevSlide}
        aria-label="Diapositiva Anterior"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-brand-titanium/80 hover:bg-brand-gold hover:text-brand-deepObsidian border border-slate-700 text-white flex items-center justify-center text-lg transition duration-300 backdrop-blur-md shadow-2xl">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button 
        onClick={handleNextSlide}
        aria-label="Siguiente Diapositiva"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-brand-titanium/80 hover:bg-brand-gold hover:text-brand-deepObsidian border border-slate-700 text-white flex items-center justify-center text-lg transition duration-300 backdrop-blur-md shadow-2xl">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Autoplay Progress Line */}
      <div className="relative z-30 w-full h-1.5 bg-slate-900">
        <div 
          className="h-full bg-brand-gold transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
