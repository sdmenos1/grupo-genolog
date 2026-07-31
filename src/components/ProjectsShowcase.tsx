'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    client: 'Nexa Resources',
    location: 'El Porvenir',
    title: 'Mantenimiento & Cambio de Revestimiento en Molino SAG',
    desc: 'Desmontaje de chaquetas desgastadas, inspección de casco, torqueado neumático y montaje de revestimientos en parada de planta.',
    badge1: '100% en Plazo PDP',
    badge2: '0 Incidentes'
  },
  {
    client: 'Catalina Huanca',
    location: 'Ayacucho',
    title: 'Fabricación & Montaje Metalmecánico de Celdas OK-20',
    desc: 'Fabricación en taller, izaje y montaje en planta de celdas de flotación con ingeniería en AutoCAD 3D y soldadura AWS D1.1.',
    badge1: 'Control UT/PT 100%',
    badge2: 'Aprobado'
  },
  {
    client: 'Pan American Silver',
    location: 'Huaron',
    title: 'Overhaul de Equipos Industriales & Mantenimiento Eléctrico',
    desc: 'Mantenimiento integral en planta concentradora, revisión de motores de alta potencia y pintura de protección anticorrosiva.',
    badge1: '+15% Disponibilidad',
    badge2: 'Conforme'
  },
  {
    client: 'El Brocal / Volcan',
    location: 'Colquijirca / Pasco',
    title: 'Construcción Muro de Contención 1.5M & Apertura de Vías',
    desc: 'Obras civiles de concreto armado, movimiento de tierras y mantenimiento de vías de acceso con maquinaria pesada.',
    badge1: 'Inspección HSE',
    badge2: 'Conforme'
  }
];

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.gsap-proj-header',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.gsap-proj-header', start: 'top 85%' } }
      );

      // Cards Animation
      gsap.fromTo('.gsap-project',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: '.gsap-project', start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="proyectos" className="py-20 bg-brand-deepObsidian border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="gsap-proj-header text-brand-gold font-bold uppercase tracking-widest text-xs inline-block">Evidencia Operativa B2B</span>
          <h2 className="gsap-proj-header font-heading text-3xl sm:text-4xl font-extrabold text-white mt-1">Proyectos Destacados en Unidades Mineras</h2>
          <p className="gsap-proj-header text-slate-400 text-xs sm:text-sm mt-2">Cumplimiento comprobado de cronogramas, calidad y tolerancias en las principales unidades del Perú.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="gsap-project bg-brand-titanium rounded-2xl p-6 border border-slate-800 hover:border-brand-gold transition duration-300 flex flex-col justify-between group custom-ring-hover">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold px-2.5 py-1 rounded-md">{proj.client}</span>
                  <span className="text-slate-400"><i className="fa-solid fa-location-dot text-brand-gold mr-1"></i> {proj.location}</span>
                </div>
                <h3 className="font-bold text-base text-white mb-2 group-hover:text-brand-gold transition">{proj.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{proj.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300"><i className="fa-solid fa-clock-check mr-1 text-brand-gold"></i> {proj.badge1}</span>
                <span className="text-xs font-bold text-brand-gold">{proj.badge2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
