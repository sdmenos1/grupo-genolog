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
      // Reveal Cards with GSAP
      const cards = sectionRef.current.querySelectorAll('.gsap-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.25,
          ease: 'power2.out',
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
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 88%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="acreditaciones" className="py-20 bg-brand-titanium relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Respaldo Normativo e Idoneidad Técnica</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-2">Garantía Legal, Operativa y de Seguridad Auditada</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">Acreditaciones oficiales para agilizar la inclusión inmediata en el padrón de proveedores mineros.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card MINEM */}
          <div className="gsap-card glass-card p-8 rounded-3xl relative overflow-hidden group custom-ring-hover">
            <div className="absolute top-0 right-0 bg-brand-petroleum text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">MINEM PERÚ</div>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-brand-petroleum/40 border border-brand-petroleum/60 text-brand-gold flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-md">
                <i className="fa-solid fa-file-contract"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Empresa Contratista Minera Registrada</h3>
                <p className="text-xs font-semibold text-brand-gold mt-1">Resolución Directoral N° 0288-2021-MINEM/DGM</p>
                
                <ul className="mt-5 space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <i className="fa-solid fa-circle-check text-brand-gold mt-0.5"></i>
                    <span><strong>Alcance Autorizado:</strong> Exploración, Explotación, Desarrollo y Beneficio Minero.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <i className="fa-solid fa-circle-check text-brand-gold mt-0.5"></i>
                    <span><strong>Cobertura:</strong> Habilitación legal activa a nivel nacional en socavón y tajo abierto.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <i className="fa-solid fa-circle-check text-brand-gold mt-0.5"></i>
                    <span><strong>Ingreso Inmediato:</strong> Personal y equipos adaptados para unidades mineras de alta exigencia.</span>
                  </li>
                </ul>

                <button 
                  onClick={() => onOpenDownloadModal('minem')} 
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition underline">
                  <i className="fa-solid fa-download"></i> Descargar Constancia de Registro MINEM (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* Card Bureau Veritas */}
          <div className="gsap-card glass-card p-8 rounded-3xl relative overflow-hidden group custom-ring-hover">
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-deepObsidian text-xs font-bold px-4 py-1.5 rounded-bl-2xl">HOMOLOGACIÓN B2B</div>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 border border-brand-gold/40 text-brand-gold flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-md">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-white">Homologación Bureau Veritas</h3>
                <p className="text-xs font-semibold text-slate-300 mt-1">Certificado N° HP0017249 (Calificación Global <strong className="text-brand-gold">87.81% - Nivel B</strong>)</p>
                
                {/* Executive Progress Bars with Muted Serious Palette */}
                <div className="mt-5 space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>Legal, Corporativo &amp; Activos Financieros</span>
                      <span className="text-slate-200 font-bold">100.00%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50">
                      <div className="bg-slate-300 h-2 rounded-full gsap-progress w-0" data-width="100%"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>Planeamiento Estratégico &amp; Resp. Social</span>
                      <span className="text-slate-200 font-bold">100.00%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50">
                      <div className="bg-slate-300 h-2 rounded-full gsap-progress w-0" data-width="100%"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>Sistema Antisoborno (ISO 37001)</span>
                      <span className="text-brand-gold font-bold">98.00%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50">
                      <div className="bg-[#0F4C5C] h-2 rounded-full gsap-progress w-0" data-width="98%"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                      <span>Seguridad, Salud &amp; Medio Ambiente (HSE)</span>
                      <span className="text-brand-gold font-bold">93.79%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50">
                      <div className="bg-brand-gold h-2 rounded-full gsap-progress w-0" data-width="93.79%"></div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenDownloadModal('bv')} 
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition underline">
                  <i className="fa-solid fa-download"></i> Descargar Ficha de Homologación Bureau Veritas (PDF)
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
