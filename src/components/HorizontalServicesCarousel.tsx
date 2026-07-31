'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HorizontalServicesCarouselProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const serviceCarouselData = [
  {
    id: 'carrusel-1',
    category: '1. Diseño de Ingeniería',
    catShort: '1. Diseño 3D',
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
    catShort: '2. Fabricación',
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
    catShort: '3. Montaje',
    title: 'Montaje de Estructuras & Redes de Alta Tensión',
    image: '/images/servicios/montaje_estructuras.jpg',
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
    catShort: '4. Mantenimiento & PDP',
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
    catShort: '5. Obras Civiles',
    title: 'Obras Civiles, Maquinaria Pesada & Remediación Ambiental',
    image: '/images/servicios/hero_heavy_machinery.jpg',
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
  const totalSlides = serviceCarouselData.length;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Animación Header Carrusel
      gsap.fromTo('.gsap-service-header', 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: '.gsap-service-header', start: 'top 85%' } }
      );

      // Animación de la grilla de 10 soluciones
      gsap.fromTo('.gsap-solution-card',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.gsap-solutions-grid', start: 'top 85%' } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div ref={containerRef} className="py-4 relative overflow-hidden">
      
      {/* Executive Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-1">
          <span className="gsap-service-header inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1 rounded-full">
            SOLUCIONES DE INGENIERÍA MINERA
          </span>
          <h3 className="gsap-service-header text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
            Portafolio de Especialidades
          </h3>
          <p className="gsap-service-header text-xs sm:text-sm text-slate-400">
            &quot;Somos la mejor opción en ingeniería&quot; — Explore nuestro alcance técnico.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="gsap-service-header flex items-center gap-3 flex-shrink-0">
          <button 
            onClick={handlePrev}
            aria-label="Servicio Anterior"
            className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-gold hover:border-brand-gold/60 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 active:scale-95">
            <i className="fa-solid fa-arrow-left text-base"></i>
          </button>

          <span className="text-xs font-extrabold text-slate-300 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
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

      {/* Category Pills Navigation Bar */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8 border-b border-slate-800/80 pb-4">
        {serviceCarouselData.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentSlide(idx)}
            className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 border ${
              currentSlide === idx
                ? 'bg-brand-petroleum text-white border-brand-gold/50 shadow-md font-extrabold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border-slate-800'
            }`}>
            {item.catShort}
          </button>
        ))}
      </div>

      {/* 100% Width Full Viewport Slider Track */}
      <div className="overflow-hidden w-full rounded-3xl shadow-2xl border border-slate-800">
        <div 
          className="flex transition-transform duration-600 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          
          {serviceCarouselData.map((item) => (
            <div 
              key={item.id}
              className="w-full flex-shrink-0 bg-gradient-to-b from-slate-900/95 to-brand-steel/85 backdrop-blur-xl grid md:grid-cols-12 gap-0 min-h-[460px] sm:min-h-[500px]">
              
              {/* HD Image Left */}
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
              <div className="md:col-span-7 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-wider">{item.category}</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white font-heading leading-snug">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                </div>

                <div className="bg-brand-deepObsidian/90 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Entregables Clave &amp; Acreditaciones:</div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <i className="fa-solid fa-circle-check text-brand-gold mt-0.5 text-xs"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-800/80">
                  <button 
                    onClick={() => onOpenQuoteModal(item.serviceName)} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300">
                    <span>Cotizar {item.category}</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">CIP / AWS Approved</span>
                </div>
              </div>

            </div>
          ))}

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

      {/* Full 10 Solutions Grid Breakdown */}
      <div className="mt-16 pt-12 border-t border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="gsap-service-header text-brand-gold font-bold uppercase tracking-wider text-xs">Catálogo Detallado de Trabajos</span>
          <h3 className="gsap-service-header font-heading text-2xl font-bold text-white mt-1">10 Soluciones Especializadas</h3>
        </div>

        <div className="gsap-solutions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-gears mr-1.5"></i>1. Concentradoras</div>
            <p className="text-slate-400">Reparación en molienda y chancado.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-clock mr-1.5"></i>2. Paradas (P.D.P)</div>
            <p className="text-slate-400">Intervenciones críticas en minería.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-bolt mr-1.5"></i>3. Eléctrico</div>
            <p className="text-slate-400">Asistencia técnica e instrumentación.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-tower-broadcast mr-1.5"></i>4. Redes Alta Tensión</div>
            <p className="text-slate-400">Montaje de infraestructura energética.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-industry mr-1.5"></i>5. Estructuras</div>
            <p className="text-slate-400">Fabricación y montaje para naves.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-shield mr-1.5"></i>6. Cercos</div>
            <p className="text-slate-400">Delimitación física de operaciones.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-rotate mr-1.5"></i>7. Overhaul</div>
            <p className="text-slate-400">Reparación mayor de maquinaria.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-trowel-bricks mr-1.5"></i>8. Obras Civiles</div>
            <p className="text-slate-400">Cimentación para proyectos.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-tree mr-1.5"></i>9. Cierre Ambiental</div>
            <p className="text-slate-400">Remediación de pasivos ambientales.</p>
          </div>

          <div className="gsap-solution-card bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
            <div className="font-bold text-brand-gold"><i className="fa-solid fa-truck-monster mr-1.5"></i>10. Maquinaria</div>
            <p className="text-slate-400">Movimiento de tierras y caminos.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
