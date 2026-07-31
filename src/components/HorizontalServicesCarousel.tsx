'use client';

import React, { useState, useRef } from 'react';

interface HorizontalServicesCarouselProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const serviceCarouselData = [
  {
    id: 'carrusel-1',
    category: '1. Diseño de Ingeniería',
    title: 'Desarrollo de Ingeniería de Detalle en AutoCAD 3D',
    image: '/images/hero_welder.jpg',
    badge: 'INNOVACIÓN TECNOLÓGICA',
    desc: 'Desarrollo de ingeniería de detalle para la fabricación y montaje de estructuras metalmecánicas. Utilización de sistemas de última generación y software AutoCAD 3D para análisis de interferencias y memoria de cálculo.',
    features: [
      'Modelado 3D estructurado & despiece en AutoCAD 3D.',
      'Memoria de cálculo bajo normas AISC / AWS D1.1.',
      'Planos de detalle aprobados por Ingenieros CIP.'
    ],
    serviceName: 'Diseño de Ingeniería AutoCAD 3D'
  },
  {
    id: 'carrusel-2',
    category: '2. Fabricación Metalmecánica',
    title: 'Fabricación Metalmecánica & Estructuras en Taller/Campo',
    image: '/images/hero_flotation_cells.jpg',
    badge: 'SOLDADURA HOMOLOGADA',
    desc: 'Suministro y fabricación de estructuras metálicas adaptadas a proyectos industriales y mineros. Equipos de soldadura ágiles y versátiles con calificación de procedimientos WPS/PQR.',
    features: [
      'Celdas de flotación OK-20, cajones de molienda y chutes.',
      'Calificación de soldadores 3G a 6G (SMAW, GTAW, FCAW).',
      'Revestimiento con planchas antidesgastantes (Hardox).'
    ],
    serviceName: 'Fabricación Metalmecánica'
  },
  {
    id: 'carrusel-3',
    category: '3. Montaje de Estructuras',
    title: 'Montaje de Estructuras & Redes de Alta Tensión',
    image: '/images/hero_heavy_machinery.jpg',
    badge: 'SEGURIDAD HSE AUDITADA',
    desc: 'Aplicación estricta de estándares de medición, seguridad industrial y controles de calidad con personal técnico especializado. Montaje e infraestructura para tendidos eléctricos.',
    features: [
      'Montaje de naves industriales, plataformas y pasarelas.',
      'Tendido de redes de alta tensión y subestaciones.',
      'Maniobras de izaje crítico con grúas de alto tonelaje.'
    ],
    serviceName: 'Montaje de Estructuras'
  },
  {
    id: 'carrusel-4',
    category: '4. Mantenimiento Industrial',
    title: 'Mantenimiento de Plantas Concentradoras & Paradas de Planta (P.D.P)',
    image: '/images/hero_sag_mill.jpg',
    badge: 'DISPONIBILIDAD CONTINUA',
    desc: 'Servicios de mantenimiento integral en plantas concentradoras, cambio de chaquetas en Molinos SAG 7\'x12\', mantenimiento eléctrico industrial, pintura anticorrosiva y Overhaul de equipos.',
    features: [
      'Intervención continua 24/7 en Paradas de Planta (P.D.P).',
      'Overhaul de chancadoras cónicas, quijada y fajas transportadoras.',
      'Aplicación de sistemas de pintura epóxica y poliuretano.'
    ],
    serviceName: 'Mantenimiento Industrial & PDP'
  },
  {
    id: 'carrusel-5',
    category: '5. Obras Civiles & Cierre Ambiental',
    title: 'Obras Civiles, Maquinaria Pesada & Remediación Ambiental',
    image: '/images/hero_heavy_machinery.jpg',
    badge: 'SOSTENIBILIDAD ISO 14001',
    desc: 'Cimentaciones de concreto armado para maquinaria de alto tonelaje, muros de contención 1.5M, apertura y conservación de accesos mineros, y cierre de pasivos ambientales.',
    features: [
      'Excavación, movimiento de tierras y construcción de caminos.',
      'Construcción de muros ciclópeos y losas pesadas.',
      'Reforestación y remediación de pasivos ambientales.'
    ],
    serviceName: 'Maquinaria Pesada y Cierre Ambiental'
  }
];

export default function HorizontalServicesCarousel({ onOpenQuoteModal }: HorizontalServicesCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = serviceCarouselData.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="py-8 relative overflow-hidden">
      
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Deslizado Horizontal B2B</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-0.5">Carrusel de Especialidades Técnicas</h3>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handlePrev}
            aria-label="Servicio Anterior"
            className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-gold hover:border-brand-gold/60 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 active:scale-95">
            <i className="fa-solid fa-arrow-left text-base"></i>
          </button>
          
          <span className="text-xs font-bold text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <strong className="text-brand-gold">0{currentSlide + 1}</strong> / 0{totalSlides}
          </span>

          <button 
            onClick={handleNext}
            aria-label="Siguiente Servicio"
            className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-gold hover:border-brand-gold/60 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 active:scale-95">
            <i className="fa-solid fa-arrow-right text-base"></i>
          </button>
        </div>
      </div>

      {/* Horizontal Track Viewport */}
      <div className="overflow-hidden w-full rounded-3xl py-2">
        <div 
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-8 transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentSlide * 82}%)` }}>
          
          {serviceCarouselData.map((item, idx) => {
            const isActive = currentSlide === idx;
            return (
              <div 
                key={item.id}
                className={`w-[88vw] sm:w-[680px] md:w-[750px] lg:w-[840px] flex-shrink-0 bg-gradient-to-b from-slate-900/95 to-brand-steel/85 backdrop-blur-xl rounded-3xl border transition-all duration-500 overflow-hidden grid md:grid-cols-12 gap-0 shadow-2xl ${
                  isActive 
                    ? 'border-brand-gold/60 ring-1 ring-brand-gold/40 scale-100 opacity-100 shadow-glow-gold' 
                    : 'border-slate-800 scale-95 opacity-65 hover:opacity-80'
                }`}>
                
                {/* Rectangular Image Left */}
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-brand-titanium/90 border border-brand-gold/40 text-brand-gold text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                    {item.badge}
                  </div>
                </div>

                {/* Rectangular Content Right */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-brand-gold font-bold text-xs uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                  </div>

                  <div className="bg-brand-deepObsidian/90 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Entregables Clave:</div>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-check text-brand-gold mt-0.5 text-xs"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                    <button 
                      onClick={() => onOpenQuoteModal(item.serviceName)} 
                      className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300">
                      <span>Cotizar {item.category}</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">Estándar ISO / CIP</span>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {serviceCarouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir al servicio ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-8 bg-brand-gold' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
            }`}
          />
        ))}
      </div>

    </div>
  );
}
