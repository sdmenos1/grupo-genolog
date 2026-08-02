'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const squadData = [
  {
    icon: 'fa-user-gear',
    title: 'Staff de Ingenieros',
    desc: 'Especialistas en ingeniería de detalle 3D, seguridad HSE y gestión.'
  },
  {
    icon: 'fa-fire-burner',
    title: 'Soldadores Homologados',
    desc: 'Calificados 3G-6G (ASME Sec. IX y AWS D1.1 - SMAW, GTAW, FCAW).'
  },
  {
    icon: 'fa-wrench',
    title: 'Armadores & Montajistas',
    desc: 'Montaje de precisión y torqueado neumático estructural.'
  },
  {
    icon: 'fa-bolt',
    title: 'Técnicos Electricistas',
    desc: 'Mantenimiento industrial e instrumentación de planta.'
  },
  {
    icon: 'fa-person-digging',
    title: 'Operarios Civiles',
    desc: 'Obras de concreto armado y movimiento de tierras.'
  }
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animar Textos Principales
      gsap.fromTo('.gsap-title',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.gsap-title', start: 'top 85%' }
        }
      );

      // Animar Tarjetas Estratégicas (Misión/Visión)
      gsap.fromTo('.gsap-card',
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: '.gsap-card-container', start: 'top 85%' }
        }
      );

      // Animar Capital Humano (Squads)
      gsap.fromTo('.gsap-squad',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.squads-container', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="nosotros" className="py-20 bg-slate-200 relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="gsap-title inline-block text-brand-petroleum font-bold uppercase tracking-widest text-xs border border-brand-gold/30 bg-brand-petroleum/10 px-3 py-1 rounded-full">Identidad Corporativa</span>
            <h2 className="gsap-title font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">Innovación Tecnológica y Respeto Ambiental</h2>
            <p className="gsap-title text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>GRUPO GENOLG</strong> ejecuta proyectos metalmecánicos y mantenimiento en plantas concentradoras, destacando por la innovación, el desarrollo humano y los más altos estándares de seguridad HSE en la industria.
            </p>
          </div>

          {/* Strategic Pillars Cards (Misión, Visión, Valores) */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5 gsap-card-container">
            <div className="gsap-card bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-gold/40 transition duration-300 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/10 text-brand-petroleum flex items-center justify-center text-xl font-bold mb-4">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="font-bold text-base text-slate-900">Misión</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Diseñar, fabricar y suministrar soluciones en infraestructura metalmecánica, garantizando la satisfacción de nuestros clientes B2B.
              </p>
            </div>

            <div className="gsap-card bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-gold/40 transition duration-300 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/10 text-brand-petroleum flex items-center justify-center text-xl font-bold mb-4">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="font-bold text-base text-slate-900">Visión</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Ser líderes a nivel nacional en ingeniería especializada, paradas de planta y montaje metalmecánico.
              </p>
            </div>

            <div className="gsap-card sm:col-span-2 p-6 rounded-2xl text-slate-900 border border-slate-200 bg-slate-100/50">
              <h3 className="font-bold text-sm text-brand-petroleum mb-3 flex items-center gap-2">
                <i className="fa-solid fa-shield-heart"></i>
                <span>Valores B2B</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Motivación e Implicación</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Sentido de Responsabilidad</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Afán de Superación</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Orgullo Profesional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Capital Humano (Equipment & Staff) */}
        <div className="squads-container mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white/40">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-petroleum font-bold uppercase tracking-wider text-xs">Equipo Humano Calificado</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Capital Humano de Alto Rendimiento</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {squadData.map((squad, idx) => (
              <div 
                key={idx} 
                className="gsap-squad bg-slate-100 p-5 rounded-2xl border border-slate-200 text-center hover:border-brand-gold/50 transition duration-300">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-petroleum/40 text-brand-petroleum flex items-center justify-center text-xl font-bold mb-3">
                  <i className={`fa-solid ${squad.icon}`}></i>
                </div>
                <h4 className="font-bold text-sm text-slate-900">{squad.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-tight">{squad.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
