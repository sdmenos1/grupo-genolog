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
    desc: 'Obras de concreto armado, movimiento de tierras y muros de contención.'
  }
];

const policiesData = [
  { title: 'Política Ambiental', file: 'POLITICA AMBIENTAL.pdf', icon: 'fa-leaf' },
  { title: 'Política de RSE', file: 'POLITICA DE RSE.pdf', icon: 'fa-hand-holding-heart' },
  { title: 'Política de SST', file: 'POLITICA DE SST.pdf', icon: 'fa-hard-hat' },
  { title: 'Políticas de Calidad', file: 'POLITICAS DE CALIDAD.pdf', icon: 'fa-award' },
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

      // Animar Galeria Secundaria
      gsap.fromTo('.gsap-gallery > div',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: (i, target) => target.classList.contains('lg:-translate-y-8') && window.innerWidth >= 1024 ? -32 : 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.gsap-gallery', start: 'top 85%' }
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
              <strong>Somos una empresa dedicada a la ejecución de proyectos metal mecánica, mantenimiento en plantas concentradoras e industriales</strong> para los principales sectores de la economía, privadas y públicas a través de la continua innovación tecnológica, humana de procesos y respeto por el medio ambiente.
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
                Diseñar, fabricar y suministrar soluciones en infraestructura metal mecánica obteniendo la satisfacción de nuestros clientes, el desarrollo de nuestros colaboradores y el desarrollo social.
              </p>
            </div>

            <div className="gsap-card bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-gold/40 transition duration-300 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/10 text-brand-petroleum flex items-center justify-center text-xl font-bold mb-4">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="font-bold text-base text-slate-900">Visión</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Ser reconocidos como la empresa líder a nivel nacional en servicios de ingeniería, mantenimientos de plantas concentradoras del sector minero, fabricación montaje y mantenimiento de estructuras metal mecánicas, con altos estándares de seguridad, calidad y cumplimiento.
              </p>
            </div>

            <div className="gsap-card p-6 rounded-2xl text-slate-900 border border-slate-200 bg-slate-100/50">
              <h3 className="font-bold text-sm text-brand-petroleum mb-3 flex items-center gap-2">
                <i className="fa-solid fa-flag-checkered"></i>
                <span>Objetivos</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-chevron-right text-brand-gold mt-0.5"></i>
                  <span>Garantizar la máxima eficiencia operativa en los proyectos mineros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-chevron-right text-brand-gold mt-0.5"></i>
                  <span>Mantener un estricto récord de Cero Incidentes HSE.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-chevron-right text-brand-gold mt-0.5"></i>
                  <span>Innovar continuamente en procesos y ejecución metalmecánica.</span>
                </li>
              </ul>
            </div>

            <div className="gsap-card p-6 rounded-2xl text-slate-900 border border-slate-200 bg-slate-100/50">
              <h3 className="font-bold text-sm text-brand-petroleum mb-3 flex items-center gap-2">
                <i className="fa-solid fa-shield-heart"></i>
                <span>Valores B2B</span>
              </h3>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Motivación e Implicación</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Sentido de Responsabilidad</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Afán de Superación</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-petroleum"></i> Orgullo Profesional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Galería Secundaria (Agregada para UX/UI premium) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-16 gsap-gallery max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl shadow-xl border border-slate-200 h-64 sm:h-[400px]">
            <img 
              src="/images/nosotros/nosotros-secundaria-1.png" 
              alt="Actividad de Equipo en Campo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <span className="text-white font-black text-xl drop-shadow-md block">Inspección en Terreno</span>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Desarrollo de Procesos</span>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-xl border border-slate-200 h-64 sm:h-[400px] lg:-translate-y-12">
            <img 
              src="/images/nosotros/nosotros-secundaria-2.png" 
              alt="Charla de Seguridad HSE" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <span className="text-white font-black text-xl drop-shadow-md block">Capacitaciones HSE Diarias</span>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Cultura Preventiva</span>
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

        {/* Políticas Corporativas */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-petroleum font-bold uppercase tracking-wider text-xs">Transparencia y Normativas</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Nuestras Políticas Corporativas</h3>
            <p className="text-slate-600 text-sm mt-3">Documentos oficiales que rigen nuestro compromiso con la excelencia, seguridad y responsabilidad social.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {policiesData.map((policy, idx) => (
              <a 
                key={idx}
                href={`/documentos/pdfs/${policy.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:bg-brand-petroleum hover:border-brand-petroleum transition duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 group-hover:bg-white/20 group-hover:text-brand-gold flex items-center justify-center text-xl transition duration-300 mb-3">
                  <i className={`fa-solid ${policy.icon}`}></i>
                </div>
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-white transition duration-300">{policy.title}</h4>
                <span className="mt-auto pt-3 text-[10px] uppercase font-bold text-slate-500 group-hover:text-brand-gold flex items-center gap-1 transition duration-300">
                  <i className="fa-solid fa-download"></i> Descargar PDF
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
