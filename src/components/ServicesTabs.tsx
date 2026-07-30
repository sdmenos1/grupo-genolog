'use client';

import React, { useState, useRef } from 'react';

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
  const [activeCardId, setActiveCardId] = useState(serviceCardsData[0].id);
  const rightScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSelectCategory = (id: string) => {
    setActiveCardId(id);
    const targetEl = document.getElementById(`right-${id}`);
    if (targetEl && rightScrollContainerRef.current) {
      const topOffset = targetEl.offsetTop;
      rightScrollContainerRef.current.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleRightScroll = () => {
    if (!rightScrollContainerRef.current) return;
    const container = rightScrollContainerRef.current;
    const scrollTop = container.scrollTop;

    serviceCardsData.forEach((s) => {
      const el = document.getElementById(`right-${s.id}`);
      if (el) {
        const elTop = el.offsetTop - 80;
        const elBottom = elTop + el.offsetHeight;
        if (scrollTop >= elTop && scrollTop < elBottom) {
          setActiveCardId(s.id);
        }
      }
    });
  };

  return (
    <section id="servicios" className="py-24 bg-brand-titanium border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Fixed Description Panel + Right Independent Scrollable Feed */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: DESCRIPTION & CATEGORY SELECTOR */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1 rounded-full">
              Capacidades Operativas B2B
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Nuestros Servicios de Ingeniería &amp; Mantenimiento
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Desarrollamos soluciones integrales en diseño 3D, fabricación metalmecánica, montaje de alta precisión y mantenimiento en plantas concentradoras e industriales con estándares internacionales de seguridad.
            </p>

            <div className="p-4 bg-brand-deepObsidian rounded-2xl border-l-4 border-brand-gold text-xs text-slate-300 shadow-md">
              <div className="font-bold text-brand-gold mb-1">&quot;Somos la mejor opción en ingeniería&quot;</div>
              <div>Garantizamos cero incidentes, cumplimiento de cronogramas y dossier de calidad auditado por Bureau Veritas.</div>
            </div>

            {/* Category Selector Buttons */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>SELECCIONAR CATEGORÍA:</span>
                <span className="text-[10px] text-brand-gold font-normal">Scroll independiente a la derecha &rarr;</span>
              </div>
              {serviceCardsData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectCategory(s.id)}
                  className={`w-full text-left text-xs font-semibold py-3 px-4 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                    activeCardId === s.id
                      ? 'bg-brand-petroleum text-white border-brand-gold/40 shadow-md font-bold transform translate-x-1.5'
                      : 'bg-brand-deepObsidian/70 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}>
                  <span>{s.category}</span>
                  <i className={`fa-solid fa-chevron-right text-[10px] transition-transform ${activeCardId === s.id ? 'translate-x-1 text-brand-gold' : 'opacity-40'}`}></i>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onOpenQuoteModal()} 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum hover:from-brand-gold hover:to-brand-copper text-white font-extrabold text-xs px-7 py-4 rounded-2xl border border-brand-gold/30 shadow-lg transition duration-300">
                <i className="fa-solid fa-calculator"></i>
                <span>Solicitar Cotización de Ingeniería</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: INDEPENDENT SCROLLABLE CONTAINER */}
          <div className="lg:col-span-7 relative">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3 flex items-center justify-between lg:hidden">
              <span>Catálogo de Servicios:</span>
              <span className="text-brand-gold">Deslizar &darr;</span>
            </div>

            <div 
              ref={rightScrollContainerRef}
              onScroll={handleRightScroll}
              className="max-h-[640px] sm:max-h-[700px] overflow-y-auto pr-2 sm:pr-3 space-y-8 rounded-3xl border border-slate-800/80 p-2 sm:p-4 bg-brand-deepObsidian/40 backdrop-blur-md shadow-2xl scrollbar-thin scrollbar-thumb-brand-gold/40 scrollbar-track-slate-900">
              
              {serviceCardsData.map((card) => (
                <div 
                  key={card.id}
                  id={`right-${card.id}`}
                  className={`bg-gradient-to-b from-slate-900/95 to-brand-steel/85 backdrop-blur-xl rounded-3xl border overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500 ${
                    activeCardId === card.id
                      ? 'border-brand-gold/60 ring-1 ring-brand-gold/40 shadow-glow-gold'
                      : 'border-slate-700/60 opacity-90'
                  }`}>
                  
                  {/* Image Header */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden">
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
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 drop-shadow-md">{card.title}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {card.desc}
                    </p>

                    <div className="bg-brand-deepObsidian/90 p-4 rounded-2xl border border-slate-800/80 space-y-2">
                      <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Alcances &amp; Entregables:</div>
                      <ul className="space-y-1.5 text-xs text-slate-400">
                        {card.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <i className="fa-solid fa-circle-check text-brand-gold mt-0.5 text-xs"></i>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button 
                        onClick={() => onOpenQuoteModal(card.serviceName)} 
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300">
                        <span>Cotizar {card.category}</span>
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </button>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Estándar ISO / AWS</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
