'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface DownloadsCenterProps {
  onOpenDownloadModal: (type: string) => void;
}

export default function DownloadsCenter({ onOpenDownloadModal }: DownloadsCenterProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-dl-header',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.gsap-dl-header', start: 'top 85%' } }
      );

      gsap.fromTo('.gsap-download',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.gsap-download', start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="recursos" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="gsap-dl-header text-brand-gold font-bold uppercase tracking-widest text-xs inline-block">Documentación Técnica B2B</span>
          <h2 className="gsap-dl-header font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Centro de Descargas</h2>
          <p className="gsap-dl-header text-slate-600 text-xs sm:text-sm mt-2">Acceda directamente a nuestras constancias para homologación inmediata.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="gsap-download glass-panel rounded-2xl p-6 border border-slate-200 hover:border-brand-gold transition duration-300 text-center flex flex-col justify-between custom-ring-hover">
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl  bg-slate-800  bg-brand-petroleum/30 text-brand-gold border border-brand-petroleum/50 flex items-center justify-center text-3xl font-bold mb-4 shadow-md">
                <i className="fa-solid fa-book-open text-brand-gold"></i>
              </div>
              <h3 className="font-bold text-base text-slate-900">Brochure Corporativo 2026</h3>
              <p className="text-xs text-slate-600 mt-2">Dossier web interactivo con capacidad instalada, flota y servicios.</p>
              <div className="mt-3 inline-block bg-slate-100 text-slate-700 font-bold text-[10px] px-2.5 py-1 rounded-full border border-slate-300">Web / PDF Interactivo</div>
            </div>
            
            <div className="mt-6">
              <a 
                href="/brochure"
                className="w-full bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum hover:from-brand-gold hover:to-brand-copper text-white border border-brand-gold/40 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md">
                <i className="fa-solid fa-eye"></i> Visualizar Brochure Web
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gsap-download glass-panel rounded-2xl p-6 border border-slate-200 hover:border-brand-gold transition duration-300 text-center flex flex-col justify-between custom-ring-hover">
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 text-brand-gold border border-brand-petroleum/50 flex items-center justify-center text-3xl font-bold mb-4 shadow-md">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="font-bold text-base text-slate-900">Certificado Bureau Veritas</h3>
              <p className="text-xs text-slate-600 mt-2">Informe de homologación empresarial HP0017249 (Puntaje ).</p>
              <div className="mt-3 inline-block bg-slate-100 text-slate-700 font-bold text-[10px] px-2.5 py-1 rounded-full border border-slate-300">PDF (1.1 MB)</div>
            </div>
            <button 
              onClick={() => onOpenDownloadModal('bv')} 
              className="mt-6 w-full bg-brand-petroleum hover:bg-brand-darkPetroleum text-white border border-brand-gold/30 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md">
              <i className="fa-solid fa-download"></i> Descargar Certificado
            </button>
          </div>

          {/* Card 3 */}
          <div className="gsap-download glass-panel rounded-2xl p-6 border border-slate-200 hover:border-brand-gold transition duration-300 text-center flex flex-col justify-between custom-ring-hover">
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 text-brand-gold border border-brand-petroleum/50 flex items-center justify-center text-3xl font-bold mb-4 shadow-md">
                <i className="fa-solid fa-building-flag"></i>
              </div>
              <h3 className="font-bold text-base text-slate-900">Registro MINEM RD 0288-2021</h3>
              <p className="text-xs text-slate-600 mt-2">Inscripción oficial en el Registro de Empresas Contratistas Mineras.</p>
              <div className="mt-3 inline-block bg-slate-100 text-slate-700 font-bold text-[10px] px-2.5 py-1 rounded-full border border-slate-300">PDF (850 KB)</div>
            </div>
            <button 
              onClick={() => onOpenDownloadModal('minem')} 
              className="mt-6 w-full bg-brand-petroleum hover:bg-brand-darkPetroleum text-white border border-brand-gold/30 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md">
              <i className="fa-solid fa-download"></i> Descargar Constancia
            </button>
          </div>

          {/* Card 4 */}
          <div className="gsap-download glass-panel rounded-2xl p-6 border border-slate-200 hover:border-brand-gold transition duration-300 text-center flex flex-col justify-between custom-ring-hover">
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 text-brand-gold border border-brand-petroleum/50 flex items-center justify-center text-3xl font-bold mb-4 shadow-md">
                <i className="fa-solid fa-file-invoice"></i>
              </div>
              <h3 className="font-bold text-base text-slate-900">Ficha RUC y SUNAT</h3>
              <p className="text-xs text-slate-600 mt-2">RUC 20608261894 en estado Activo y Habido para procesos contables.</p>
              <div className="mt-3 inline-block bg-slate-100 text-brand-gold font-bold text-[10px] px-2.5 py-1 rounded-full border border-slate-300">PDF (500 KB)</div>
            </div>
            <button 
              onClick={() => onOpenDownloadModal('ruc')} 
              className="mt-6 w-full bg-brand-petroleum hover:bg-brand-darkPetroleum text-white border border-brand-gold/30 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md">
              <i className="fa-solid fa-download"></i> Descargar Ficha RUC
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
