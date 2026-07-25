'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    client: 'Nexa Resources',
    location: 'El Porvenir',
    title: "Mantenimiento y Cambio de Revestimiento en Molino 7'x12'",
    desc: 'Desmontaje de chaquetas desgastadas, inspección de casco, torqueado neumático y montaje de revestimientos.',
    badge1: '100% en Plazo PDP',
    badge2: '0 Incidentes'
  },
  {
    client: 'Catalina Huanca',
    location: 'Ayacucho',
    title: 'Fabricación y Montaje Metalmecánico Celdas OK-20',
    desc: 'Fabricación en taller, izaje y montaje en planta de celdas de flotación con soldadura AWS D1.1.',
    badge1: 'Control UT/PT 100%',
    badge2: 'Aprobado'
  },
  {
    client: 'ECOSEM Huaraucaca',
    location: 'Volcan Pasco',
    title: 'Overhaul General de Faja Transportadora Overland',
    desc: 'Cambio de rodamientos SKF de alta capacidad, alineación láser de poleas y mantenimiento de polines.',
    badge1: '+15% Eficiencia',
    badge2: 'Continuo'
  },
  {
    client: 'Minera El Brocal',
    location: 'Colquijirca',
    title: 'Construcción Muro de Contención 1.5M y Obras Civiles',
    desc: 'Excavación, armado de fianza, encofrado y vaciado de concreto en zona de alta complejidad climática.',
    badge1: 'Inspección HSE',
    badge2: 'Conforme'
  }
];

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.gsap-project');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="proyectos" className="py-20 bg-brand-deepObsidian border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Evidencia Operativa B2B</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-1">Proyectos Destacados en Unidades Mineras</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">Cumplimiento comprobado de cronogramas y tolerancias en las unidades más exigentes del país.</p>
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
