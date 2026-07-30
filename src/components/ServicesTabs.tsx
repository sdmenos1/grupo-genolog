'use client';

import React, { useState } from 'react';

interface ServicesTabsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const serviceItems = [
  {
    id: 'servicio-1',
    category: '1. Diseño de Ingeniería',
    catKey: 'diseno',
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
    catKey: 'fabricacion',
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
    catKey: 'montaje',
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
    catKey: 'mantenimiento',
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
    catKey: 'obras',
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
  const [filter, setFilter] = useState('all');

  const filteredServices = filter === 'all' 
    ? serviceItems 
    : serviceItems.filter(item => item.catKey === filter);

  return (
    <section id="servicios" className="py-24 bg-brand-titanium border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1 rounded-full mb-3">
            Capacidades Operativas B2B
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nuestros Servicios de Ingeniería &amp; Mantenimiento
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            &quot;Somos la mejor opción en ingeniería&quot; — Soluciones especializadas en diseño 3D, fabricación metalmecánica, montaje e intervenciones en plantas concentradoras.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition duration-300 ${
              filter === 'all'
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md'
                : 'bg-brand-deepObsidian text-slate-400 hover:text-white border border-slate-800'
            }`}>
            Todos los Servicios (05)
          </button>
          <button
            onClick={() => setFilter('diseno')}
            className={`text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition duration-300 ${
              filter === 'diseno'
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md'
                : 'bg-brand-deepObsidian text-slate-400 hover:text-white border border-slate-800'
            }`}>
            1. Diseño 3D
          </button>
          <button
            onClick={() => setFilter('fabricacion')}
            className={`text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition duration-300 ${
              filter === 'fabricacion'
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md'
                : 'bg-brand-deepObsidian text-slate-400 hover:text-white border border-slate-800'
            }`}>
            2. Fabricación
          </button>
          <button
            onClick={() => setFilter('montaje')}
            className={`text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition duration-300 ${
              filter === 'montaje'
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md'
                : 'bg-brand-deepObsidian text-slate-400 hover:text-white border border-slate-800'
            }`}>
            3. Montaje
          </button>
          <button
            onClick={() => setFilter('mantenimiento')}
            className={`text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition duration-300 ${
              filter === 'mantenimiento'
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md'
                : 'bg-brand-deepObsidian text-slate-400 hover:text-white border border-slate-800'
            }`}>
            4. Mantenimiento &amp; PDP
          </button>
        </div>

        {/* Executive 2-Column Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredServices.map((card) => (
            <div 
              key={card.id}
              className="bg-gradient-to-b from-slate-900/90 to-brand-steel/80 backdrop-blur-xl rounded-3xl border border-slate-700/60 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] group hover:border-brand-gold/50 transition-all duration-500 flex flex-col justify-between">
              
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-brand-titanium/90 border border-brand-gold/40 text-brand-gold text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                  {card.badge}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-wider">{card.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 drop-shadow-md">{card.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {card.desc}
                </p>

                <div className="bg-brand-deepObsidian/90 p-4 rounded-2xl border border-slate-800/80 space-y-2">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Alcances &amp; Entregables Certificados:</div>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <i className="fa-solid fa-circle-check text-brand-gold mt-0.5 text-xs"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button 
                    onClick={() => onOpenQuoteModal(card.serviceName)} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300 group-hover:translate-x-1">
                    <span>Cotizar Servicio B2B</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">CIP / AWS Approved</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
