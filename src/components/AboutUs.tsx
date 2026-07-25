'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const squadData = [
  {
    icon: 'fa-wrench',
    title: 'Mecánicos Montajistas',
    desc: 'Alineación de ejes, torqueado neumático e instalación de equipos pesados.'
  },
  {
    icon: 'fa-fire-burner',
    title: 'Soldadores Homologados',
    desc: 'Calificados 3G a 6G bajo código ASME Sec. IX y AWS D1.1 (SMAW, GTAW, FCAW).'
  },
  {
    icon: 'fa-cubes-stacked',
    title: 'Andamieros Certificados',
    desc: 'Estructuras multinivel y trabajo en altura bajo normativa OSHA / ANSI.'
  },
  {
    icon: 'fa-compass-drafting',
    title: 'Caldereros & Trazadores',
    desc: 'Conformado y ajuste de recipientes a presión, chutes y ductos de alta resistencia.'
  },
  {
    icon: 'fa-oil-can',
    title: 'Lubricadores Industriales',
    desc: 'Gestión de tribología y lubricación centralizada en componentes de planta.'
  }
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.gsap-squad');
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.squads-container'),
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="nosotros" className="py-20 bg-brand-deepObsidian relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Respaldo, Disciplina y Capacidad Operativa</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">Liderazgo Operacional y Rigurosidad en Campo</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Bajo la Gerencia General de <strong>Teófilo Frank Sánchez Taquire</strong>, <strong>GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L.</strong> ha consolidado estándares estrictos de ejecución sin incidentes, garantizando el cumplimiento de los cronogramas en Paradas de Planta (P.D.P) y proyectos metalmecánicos de gran envergadura.
            </p>
            <div className="p-5 bg-brand-titanium rounded-2xl border-l-4 border-brand-gold text-xs sm:text-sm text-slate-300 font-medium shadow-md">
              &quot;Nuestra filosofía operacional combina la cultura de seguridad absoluta (Safety First) con alineación normativa internacional (AWS, ASME, OSHA) para asegurar la máxima continuidad operativa de la planta.&quot;
            </div>
          </div>

          {/* Strategic Pillars Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
            <div className="bg-brand-titanium p-6 rounded-2xl border border-slate-800 hover:border-brand-gold/40 transition duration-300 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/30 text-brand-gold flex items-center justify-center text-xl font-bold mb-4">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="font-bold text-base text-white">Misión</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Proveer servicios de mantenimiento industrial, fabricación metalmecánica y obras civiles con cero incidentes y máxima eficiencia.
              </p>
            </div>

            <div className="bg-brand-titanium p-6 rounded-2xl border border-slate-800 hover:border-brand-gold/40 transition duration-300 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/30 text-brand-gold flex items-center justify-center text-xl font-bold mb-4">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="font-bold text-base text-white">Visión 2030</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Consolidarnos como la empresa contratista referente a nivel nacional por nuestra excelencia en Paradas de Planta y seguridad de clase mundial.
              </p>
            </div>

            <div className="sm:col-span-2 glass-panel p-6 rounded-2xl text-white border border-slate-800">
              <h3 className="font-bold text-sm text-brand-gold mb-3 flex items-center gap-2">
                <i className="fa-solid fa-shield-heart"></i>
                <span>Valores Corporativos B2B</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Seguridad Absoluta</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Rigurosidad Técnica</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Integridad Anti-Soborno</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Sostenibilidad Ambiental</div>
              </div>
            </div>
          </div>
        </div>

        {/* Squads */}
        <div className="squads-container mt-16 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">Personal Técnico Homologado</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">Cuadrillas Especializadas de Alto Rendimiento</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Despliegue inmediato de técnicos calificados bajo estándares internacionales.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {squadData.map((squad, idx) => (
              <div 
                key={idx} 
                className="gsap-squad bg-brand-titanium p-5 rounded-2xl border border-slate-800 text-center hover:border-brand-gold transition duration-300 group custom-ring-hover">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-petroleum/40 text-brand-gold flex items-center justify-center text-xl font-bold mb-3 group-hover:scale-110 transition duration-300">
                  <i className={`fa-solid ${squad.icon}`}></i>
                </div>
                <h4 className="font-bold text-sm text-white">{squad.title}</h4>
                <p className="text-xs text-slate-400 mt-2">{squad.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
