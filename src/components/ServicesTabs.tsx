'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
  const cardDisplayRef = useRef<HTMLDivElement | null>(null);

  const activeCard = serviceCardsData[activeIdx];

  const handleSelectService = (idx: number) => {
    if (idx === activeIdx) return;
    
    // Smooth GSAP Crossfade Transition
    if (cardDisplayRef.current) {
      gsap.to(cardDisplayRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.25,
        onComplete: () => {
          setActiveIdx(idx);
          gsap.fromTo(
            cardDisplayRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
          );
        },
      });
    } else {
      setActiveIdx(idx);
    }
  };

  const handlePrev = () => {
    const nextIdx = (activeIdx - 1 + serviceCardsData.length) % serviceCardsData.length;
    handleSelectService(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % serviceCardsData.length;
    handleSelectService(nextIdx);
  };

  return (
    <section id="servicios" className="py-24 bg-brand-titanium border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Side Selector + Right Side Visor Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Header & Category Selector Pills */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1 rounded-full">
              Capacidades Operativas B2B
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Nuestros Servicios de Ingeniería &amp; Mantenimiento
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Desarrollamos soluciones integrales en diseño 3D, fabricación metalmecánica, montaje de alta precisión y mantenimiento en plantas concentradoras e industriales.
            </p>

            <div className="p-4 bg-brand-deepObsidian rounded-2xl border-l-4 border-brand-gold text-xs text-slate-300 shadow-md">
              <div className="font-bold text-brand-gold mb-1">&quot;Somos la mejor opción en ingeniería&quot;</div>
              <div>Garantizamos cero incidentes, cumplimiento de cronogramas y dossier de calidad auditado por Bureau Veritas.</div>
            </div>

            {/* Category Navigation Pills */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="text-brand-gold uppercase tracking-wider">Avance de Especialidades</span>
                <span className="bg-slate-900 border border-brand-gold/40 text-brand-gold px-2.5 py-0.5 rounded-full text-[11px]">
                  0{activeIdx + 1} / 0{serviceCardsData.length}
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-brand-petroleum via-brand-gold to-brand-copper h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((activeIdx + 1) / serviceCardsData.length) * 100}%` }}
                />
              </div>

              {/* Interactive Pill Buttons */}
              <div className="space-y-2 pt-2">
                {serviceCardsData.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectService(idx)}
                    className={`w-full text-left text-xs font-semibold py-3 px-4 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                      activeIdx === idx
                        ? 'bg-brand-petroleum text-white border-brand-gold/40 shadow-md font-bold transform translate-x-2'
                        : 'bg-brand-deepObsidian/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    }`}>
                    <span>{s.category}</span>
                    <i className={`fa-solid fa-chevron-right text-[10px] transition-transform ${activeIdx === idx ? 'translate-x-1 text-brand-gold' : 'opacity-30'}`}></i>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onOpenQuoteModal(activeCard.serviceName)} 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum hover:from-brand-gold hover:to-brand-copper text-white font-extrabold text-xs px-7 py-4 rounded-2xl border border-brand-gold/30 shadow-lg transition duration-300">
                <i className="fa-solid fa-calculator"></i>
                <span>Cotizar {activeCard.category}</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: EXECUTIVE VISOR SHOWCASE (100% BUG-FREE) */}
          <div className="lg:col-span-7 relative">
            
            {/* Top Visor Header Controls */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Visor Técnico de Capacidad Instalada
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-gold hover:border-brand-gold/50 flex items-center justify-center transition shadow-md">
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-brand-gold hover:border-brand-gold/50 flex items-center justify-center transition shadow-md">
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            {/* Display Card with Smooth Crossfade */}
            <div 
              ref={cardDisplayRef}
              className="bg-gradient-to-b from-slate-900/95 to-brand-steel/85 backdrop-blur-xl rounded-3xl border border-brand-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              
              {/* HD Image Header */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={activeCard.image} 
                  alt={activeCard.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-brand-titanium/90 border border-brand-gold/40 text-brand-gold text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                  {activeCard.badge}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-wider">{activeCard.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 drop-shadow-md">{activeCard.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-5">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {activeCard.desc}
                </p>

                <div className="bg-brand-deepObsidian/90 p-5 rounded-2xl border border-slate-800/80 space-y-3">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Alcances &amp; Entregables Certificados:</div>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {activeCard.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <i className="fa-solid fa-circle-check text-brand-gold mt-0.5 text-xs"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-800">
                  <button 
                    onClick={() => onOpenQuoteModal(activeCard.serviceName)} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300">
                    <span>Cotizar {activeCard.category}</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">CIP / AWS Approved</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
