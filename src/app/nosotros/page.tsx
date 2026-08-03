'use client';

import React from 'react';
import AboutUs from '@/components/AboutUs';
import ClientsMarquee from '@/components/ClientsMarquee';

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      {/* Page Hero Header */}
      <section className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 text-center border-b border-slate-200 overflow-hidden flex items-center justify-center min-h-[60vh]">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-[url('/images/nosotros/nosotros-main.png')] bg-cover bg-center bg-no-repeat"
        ></div>
        
        {/* Dark Overlay for contrast like the reference photo */}
        <div className="absolute inset-0 z-0 bg-brand-petroleum/60"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="bg-brand-gold/20 backdrop-blur-md border border-brand-gold/50 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-4 py-1.5 rounded-full shadow-lg inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-brand-gold inline-block mr-2 shadow-[0_0_8px_rgba(229,168,35,0.8)]"></span>
            Identidad Corporativa &amp; Capital Humano
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-white mt-6 tracking-tight drop-shadow-xl uppercase">
            SOBRE NOSOTROS
          </h1>
          <p className="text-slate-100 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-md">
            &quot;Somos la mejor opción en ingeniería&quot; — Empresa líder en la ejecución de proyectos metalmecánicos, montaje industrial y mantenimiento de plantas concentradoras en el Perú.
          </p>
        </div>
      </section>

      {/* AboutUs Component with Misión, Visión, Valores B2B & 5 Capital Humano Staff Cards */}
      <AboutUs />

      {/* Corporate Clients Marquee */}
      <ClientsMarquee />
    </main>
  );
}
