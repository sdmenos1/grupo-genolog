'use client';

import React, { useState, useEffect } from 'react';

interface ServicesTabsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const serviceCardsData = [
  {
    id: 'servicio-1',
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
    id: 'servicio-2',
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
    id: 'servicio-3',
    category: '3. Montaje de Estructuras',
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
    id: 'servicio-4',
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
    id: 'servicio-5',
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

export default function ServicesTabs({ onOpenQuoteModal }: ServicesTabsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Optional subtle auto-advance every 7s with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % serviceCardsData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIdx((prev) => (prev - 1 + serviceCardsData.length) % serviceCardsData.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIdx((prev) => (prev + 1) % serviceCardsData.length);
  };

  const handleSelectPill = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIdx(idx);
  };

  return (
    <section id="servicios" className="py-24 bg-brand-titanium border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1 rounded-full mb-3">
            Capacidades Operativas B2B
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nuestros Servicios de Ingeniería &amp; Mantenimiento
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            &quot;Somos la mejor opción en ingeniería&quot; — Seleccione cualquier categoría para examinar en detalle nuestra capacidad instalada.
          </p>
        </div>

        {/* Main Grid Layout: Left Selector + Right Visor Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Category Selector Pills & Progress Indicator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 bg-brand-deepObsidian/90 rounded-2xl border border-slate-800 space-y-3">
              <div className="font-bold text-xs text-brand-gold uppercase tracking-wider">Compromiso de Calidad B2B</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Garantizamos cero incidentes, cumplimiento estricto de cronogramas y dossier de calidad auditado por <strong>Bureau Veritas (Nivel B - )</strong>.
              </p>
            </div>

            {/* Category Progress Bar */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="text-brand-gold uppercase tracking-wider">Especialidad Seleccionada</span>
                <span className="bg-slate-900 border border-brand-gold/40 text-brand-gold px-2.5 py-0.5 rounded-full text-[11px]">
                  0{activeIdx + 1} / 0{serviceCardsData.length}
                </span>
              </div>

              {/* Smooth Progress Indicator Bar */}
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-brand-petroleum via-brand-gold to-brand-copper h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((activeIdx + 1) / serviceCardsData.length) * 100}%` }}
                />
              </div>

              {/* Hardware-Accelerated Interactive Category Pills */}
              <div className="space-y-2 pt-2">
                {serviceCardsData.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectPill(idx)}
                    className={`w-full text-left text-xs font-semibold py-3 px-4 rounded-xl transition-all duration-300 ease-out border flex items-center justify-between cursor-pointer ${
                      activeIdx === idx
                        ? 'bg-brand-petroleum text-white border-brand-gold/50 shadow-md font-bold transform translate-x-2'
                        : 'bg-brand-deepObsidian/60 text-slate-400 border-slate-800/80 hover:text-white hover:border-slate-700 hover:bg-slate-900/80'
                    }`}>
                    <span>{s.category}</span>
                    <i className={`fa-solid fa-chevron-right text-[10px] transition-transform duration-300 ${activeIdx === idx ? 'translate-x-1 text-brand-gold' : 'opacity-30'}`}></i>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onOpenQuoteModal(serviceCardsData[activeIdx].serviceName)} 
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum hover:from-brand-gold hover:to-brand-copper text-white font-extrabold text-xs px-7 py-4 rounded-2xl border border-brand-gold/30 shadow-lg transition duration-300 hover:scale-[1.02]">
                <i className="fa-solid fa-calculator"></i>
                <span>Cotizar {serviceCardsData[activeIdx].category}</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: GPU HARDWARE-ACCELERATED VISOR SHOWCASE */}
          <div 
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}>
            
            {/* Top Controls Bar */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-shield-cat text-brand-gold"></i>
                <span>Visor B2B de Especialidad</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  title="Anterior Especialidad"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-gold hover:border-brand-gold/50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md">
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button
                  onClick={handleNext}
                  title="Siguiente Especialidad"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-gold hover:border-brand-gold/50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md">
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            {/* Hardware-Accelerated 60fps Card Layer Container */}
            <div className="relative min-h-[520px] sm:min-h-[560px]">
              {serviceCardsData.map((card, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={card.id}
                    className={`transition-all duration-500 ease-out transform ${
                      isActive
                        ? 'opacity-100 translate-y-0 scale-100 relative z-10'
                        : 'opacity-0 translate-y-4 scale-95 absolute inset-0 pointer-events-none z-0'
                    } bg-gradient-to-b from-slate-900/95 to-brand-steel/85 backdrop-blur-xl rounded-3xl border border-brand-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between`}>
                    
                    {/* HD Image Header */}
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 bg-brand-titanium/90 border border-brand-gold/40 text-brand-gold text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                        {card.badge}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-brand-gold font-bold text-xs uppercase tracking-wider">{card.category}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 drop-shadow-md font-heading">{card.title}</h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {card.desc}
                      </p>

                      <div className="bg-brand-deepObsidian/90 p-5 rounded-2xl border border-slate-800/80 space-y-3">
                        <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Alcances &amp; Entregables Certificados:</div>
                        <ul className="space-y-2 text-xs text-slate-400">
                          {card.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <i className="fa-solid fa-circle-check text-brand-gold mt-0.5 text-xs"></i>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 flex items-center justify-between border-t border-slate-800">
                        <button 
                          onClick={() => onOpenQuoteModal(card.serviceName)} 
                          className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300">
                          <span>Solicitar Atención B2B</span>
                          <i className="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                        <span className="text-[10px] text-slate-500 font-semibold uppercase">CIP / AWS Approved</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
