'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ServicesTabsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const serviceItems = [
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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = serviceItems[activeIndex];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const scrollItems = sectionRef.current.querySelectorAll('.gsap-scroll-item');
      
      scrollItems.forEach((item, idx) => {
        gsap.fromTo(
          item,
          { opacity: 0.3, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              end: 'bottom 45%',
              onEnter: () => setActiveIndex(idx),
              onEnterBack: () => setActiveIndex(idx),
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="servicios" className="py-24 bg-brand-titanium border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1 rounded-full mb-3">
            Capacidades Operativas B2B
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nuestros Servicios de Ingeniería &amp; Mantenimiento
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            &quot;Somos la mejor opción en ingeniería&quot; — Desplácese a la izquierda para examinar alcances mientras el visor técnico de la derecha se actualiza en tiempo real.
          </p>
        </div>

        {/* Layout: LEFT Scrollable Content + RIGHT Sticky Fixed Image Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: SCROLLABLE SERVICE DETAILS */}
          <div className="lg:col-span-7 space-y-12">
            {serviceItems.map((item, idx) => (
              <div 
                key={item.id}
                id={item.id}
                className={`gsap-scroll-item bg-gradient-to-b from-slate-900/90 to-brand-steel/80 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] ${
                  activeIndex === idx
                    ? 'border-brand-gold/60 ring-1 ring-brand-gold/30'
                    : 'border-slate-800 opacity-70'
                }`}>
                
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>

                <div className="bg-brand-deepObsidian/90 p-5 rounded-2xl border border-slate-800/80 space-y-3">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Alcances &amp; Entregables Certificados:</div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <i className="fa-solid fa-circle-check text-brand-gold mt-0.5 text-xs"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button 
                    onClick={() => onOpenQuoteModal(item.serviceName)} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300">
                    <i className="fa-solid fa-calculator"></i>
                    <span>Solicitar Cotización de {item.category}</span>
                  </button>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">CIP / AWS Approved</span>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: STICKY FIXED IMAGE SHOWCASE */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-b from-slate-900/95 to-brand-steel/90 backdrop-blur-2xl p-6 rounded-3xl border border-brand-gold/40 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Visor de Imagen en Vivo</span>
                <span className="text-[10px] font-bold text-slate-400">Paso 0{activeIndex + 1} de 05</span>
              </div>

              {/* Dynamic HD Image Container */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-700/60 group shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={activeService.image} 
                  alt={activeService.title} 
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-brand-titanium/90 border border-brand-gold/50 text-brand-gold text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                  {activeService.badge}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-brand-gold font-bold text-xs uppercase">{activeService.category}</div>
                  <div className="text-lg font-bold text-white mt-0.5 leading-snug drop-shadow-md">{activeService.title}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs text-slate-300 leading-relaxed font-medium">
                  {activeService.desc}
                </div>

                <button 
                  onClick={() => onOpenQuoteModal(activeService.serviceName)} 
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-petroleum via-brand-darkPetroleum to-brand-petroleum hover:from-brand-gold hover:to-brand-copper text-white font-extrabold text-xs px-6 py-4 rounded-2xl border border-brand-gold/40 shadow-lg transition duration-300">
                  <i className="fa-solid fa-file-signature"></i>
                  <span>Cotizar {activeService.category}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
