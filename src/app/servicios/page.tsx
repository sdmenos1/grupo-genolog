'use client';

import React from 'react';
import HorizontalServicesCarousel from '@/components/HorizontalServicesCarousel';
import { useModals } from '@/context/ModalContext';

export default function ServiciosPage() {
  const { openQuoteModal } = useModals();

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 font-sans relative">
      {/* Page Hero Header */}
      <section className="py-20 bg-brand-petroleum border-b border-brand-darkPetroleum text-center relative shadow-inner">
        <div className="max-w-4xl mx-auto px-4">
          <span className="bg-white/10 border border-white/20 text-white font-extrabold uppercase tracking-widest text-[11px] px-4 py-1 rounded-full shadow-sm">
            Catálogo Corporativo de Ingeniería &amp; Mantenimiento
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight drop-shadow-md">
            Nuestros Servicios Especializados
          </h1>
          <p className="text-white/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Desarrollo de ingeniería en AutoCAD 3D, fabricación metalmecánica homologada (WPS/PQR), montaje de estructuras y mantenimiento en paradas de planta (P.D.P).
          </p>
        </div>
      </section>

      {/* Single Unified Modern Services Showcase */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HorizontalServicesCarousel onOpenQuoteModal={openQuoteModal} />
        </div>
      </section>
    </main>
  );
}
