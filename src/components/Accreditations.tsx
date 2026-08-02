'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AccreditationsProps {
  onOpenDownloadModal: (type: string) => void;
}

export default function Accreditations({ onOpenDownloadModal }: AccreditationsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      // Reveal Header with GSAP
      const headers = sectionRef.current.querySelectorAll('.gsap-acc-header');
      gsap.fromTo(
        headers,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );

      // Reveal Cards with GSAP
      const cards = sectionRef.current.querySelectorAll('.gsap-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate Audit Progress Bars with GSAP
      const progressBars = sectionRef.current.querySelectorAll('.gsap-progress');
      progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-width') || '100%';
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: targetWidth,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="acreditaciones" className="py-24 bg-slate-100 relative border-b border-slate-200/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-petroleum/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="gsap-acc-header inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-3.5 py-1 rounded-full mb-3">
            Respaldo Normativo Auditado
          </span>
          <h2 className="gsap-acc-header font-heading text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Garantía Legal, Operativa y de Seguridad</h2>
          <p className="gsap-acc-header text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Acreditaciones oficiales auditadas para agilizar la inclusión inmediata en el padrón de proveedores mineros del Perú.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: MINEM PERÚ */}
          <div className="gsap-card bg-white p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-brand-gold/50 transition-all duration-500 shadow-xl">
            <div className="absolute top-0 right-0 bg-brand-petroleum text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-md">
              MINEM PERÚ
            </div>

            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-brand-petroleum/30 border border-brand-petroleum/60 text-brand-gold flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-file-contract"></i>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-petroleum transition duration-300">Empresa Contratista Minera Registrada</h3>
                <p className="text-xs font-semibold text-brand-petroleum">Resolución Directoral N° 0288-2021-MINEM/DGM</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5 text-xs text-slate-700 border-t border-slate-200 pt-5">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-brand-petroleum mt-0.5 text-sm"></i>
                <span><strong>Alcance Autorizado:</strong> Exploración, Explotación, Desarrollo y Beneficio Minero a nivel nacional.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-brand-petroleum mt-0.5 text-sm"></i>
                <span><strong>Cobertura Total:</strong> Habilitación legal activa tanto en operaciones de socavón como en tajo abierto.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check text-brand-petroleum mt-0.5 text-sm"></i>
                <span><strong>Despliegue Inmediato:</strong> Personal calificado y equipos adaptados para unidades mineras de alta exigencia.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <button 
                onClick={() => onOpenDownloadModal('minem')} 
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-petroleum hover:text-brand-gold transition duration-300 group-hover:translate-x-1">
                <i className="fa-solid fa-download"></i>
                <span>Descargar Constancia MINEM (PDF)</span>
              </button>
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Vigencia Activa</span>
            </div>
          </div>

          {/* Card 2: Bureau Veritas */}
          <div className="gsap-card bg-white p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-brand-gold/50 transition-all duration-500 shadow-xl">
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-deepObsidian text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-md">
              HOMOLOGACIÓN B2B
            </div>

            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 border border-brand-gold/40 text-brand-gold flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div className="w-full space-y-1">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-petroleum transition duration-300">Homologación Bureau Veritas</h3>
                <p className="text-xs font-semibold text-slate-700">
                  Certificado N° HP0017249 (<strong className="text-brand-gold">Nivel B</strong>)
                </p>
              </div>
            </div>

            {/* Executive Progress Indicators */}
            <div className="mt-6 space-y-4 border-t border-slate-200 pt-5">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span>Legal, Corporativo &amp; Activos Financieros</span>
                  <span className="text-white font-bold">100.00%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-slate-200">
                  <div className="bg-slate-300 h-2 rounded-full gsap-progress w-0" data-width="100%"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span>Planeamiento Estratégico &amp; Resp. Social</span>
                  <span className="text-white font-bold">100.00%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-slate-200">
                  <div className="bg-slate-300 h-2 rounded-full gsap-progress w-0" data-width="100%"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span>Sistema Antisoborno (ISO 37001)</span>
                  <span className="text-brand-gold font-bold">98.00%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-slate-200">
                  <div className="bg-[#0F4C5C] h-2 rounded-full gsap-progress w-0" data-width="98%"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span>Seguridad, Salud &amp; Medio Ambiente (HSE)</span>
                  <span className="text-brand-gold font-bold">93.79%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-slate-200">
                  <div className="bg-brand-gold h-2 rounded-full gsap-progress w-0" data-width="93.79%"></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <button 
                onClick={() => onOpenDownloadModal('bv')} 
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition duration-300 group-hover:translate-x-1">
                <i className="fa-solid fa-download"></i>
                <span>Descargar Homologación BV (PDF)</span>
              </button>
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Auditoría Aprobada</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
