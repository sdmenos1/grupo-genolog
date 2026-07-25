'use client';

import React, { useState, useEffect } from 'react';
import HeroCanvas from './HeroCanvas';

interface HeroProps {
  onOpenDownloadModal: () => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

const heroSlides = [
  {
    image: '/images/hero_sag_mill.jpg',
    badge: 'MOLIENDA & CHANCADO CRÍTICO',
    tag: 'Paradas de Planta (P.D.P) en Vivo',
    title: 'Mantenimiento & Cambio de Revestimientos en Molinos SAG',
    desc: 'GRUPO GENOLG garantiza máxima disponibilidad operacional y cero incidentes en el desmontaje, torqueado neumático e instalación de chaquetas de acero y caucho en Molinos 7\'x12\'.',
    serviceName: 'Mantenimiento de Planta Concentradora / PDP'
  },
  {
    image: '/images/hero_welder.jpg',
    badge: 'HOMOLOGACIÓN AWS D1.1 & ASME IX',
    tag: 'Estructuras Metalmecánicas de Alta Precisión',
    title: 'Soldadura Calificada 3G a 6G & Ensayos NDT al 100%',
    desc: 'Cuadrillas especializadas de soldadores homologados con procedimientos WPS/PQR certificados para estructuras críticas, recipientes a presión y naves industriales mineras.',
    serviceName: 'Fabricación y Montaje Metalmecánico'
  },
  {
    image: '/images/hero_flotation_cells.jpg',
    badge: 'TECNOLOGÍA DE FLOTACIÓN OK-20',
    tag: 'Montaje Electromecánico en Concentradoras',
    title: 'Fabricación, Izaje & Montaje de Celdas de Flotación',
    desc: 'Fabricación en taller y maniobras complejas de izaje en planta para celdas OK-20, cajones de molienda y chutes revestidos con planchas antidesgastantes Hardox.',
    serviceName: 'Fabricación y Montaje Metalmecánico'
  },
  {
    image: '/images/hero_heavy_machinery.jpg',
    badge: 'INFRAESTRUCTURA & CIERRE AMBIENTAL',
    tag: 'Flota Pesada & Preservación Minera',
    title: 'Movimiento de Tierras & Obras Civiles en Mina',
    desc: 'Cimentaciones de concreto armado para maquinaria de alto tonelaje, muros de contención 1.5M, preservación de accesos mineros y remediación ambiental ISO 14001.',
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
    <section id="inicio" className="relative min-h-[85vh] sm:min-h-[90vh] w-full flex flex-col justify-between overflow-hidden border-b border-slate-800 bg-brand-deepObsidian">
      
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
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered dark vignette for rich text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deepObsidian via-brand-deepObsidian/85 to-brand-deepObsidian/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deepObsidian via-transparent to-brand-deepObsidian/70" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Foreground Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full my-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-brand-titanium/95 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 hover:border-brand-gold transition duration-300 shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/40 border border-brand-petroleum/50 text-brand-gold flex items-center justify-center text-xl font-bold flex-shrink-0">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Auditoría Internacional</div>
                <div className="text-sm font-bold text-white">Bureau Veritas: <span className="text-brand-gold">87.81%</span></div>
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

          <div className="flex flex-col sm:flex-row gap-4 pt-3">
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
