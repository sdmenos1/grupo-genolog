'use client';

import React from 'react';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TrabajosRealizados from '@/components/TrabajosRealizados';
import GaleriaMultimedia from '@/components/GaleriaMultimedia';
import ClientsMarquee from '@/components/ClientsMarquee';
import { useModals } from '@/context/ModalContext';

export default function ProyectosPage() {
  const { openQuoteModal } = useModals();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      {/* Page Hero Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 text-center relative overflow-hidden">
        {/* Subtle Light Gradients for background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-petroleum/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="bg-white border border-slate-200 text-brand-petroleum font-extrabold uppercase tracking-widest text-[11px] px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gold inline-block mr-2"></span>
            Respaldo Comercial &amp; Operaciones en Campo
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-slate-900 mt-5 tracking-tight drop-shadow-sm">
            Clientes Destacados &amp; Trabajos Realizados
          </h1>
          <p className="text-slate-700 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-medium">
            Ejecución rigurosa de proyectos metalmecánicos, montaje de celdas OK-20 y mantenimiento en plantas concentradoras para las principales empresas mineras del Perú.
          </p>
        </div>
      </section>

      {/* 12 Trabajos Realizados Component */}
      <TrabajosRealizados onOpenQuoteModal={openQuoteModal} />

      {/* Galería Multimedia de Videos y Fotos */}
      <GaleriaMultimedia />

      {/* Projects Showcase Component */}
      <ProjectsShowcase />

      {/* 14 Official Clients Marquee Ticker */}
      <ClientsMarquee />
    </main>
  );
}
