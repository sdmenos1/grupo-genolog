'use client';

import React from 'react';

export default function ClientsMarquee() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-brand-petroleum font-extrabold uppercase tracking-widest text-xs bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-gold inline-block mr-2"></span>
          Respaldo Comercial &amp; Experiencia Acreditada
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
          Nuestros Clientes
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 mb-10 leading-relaxed font-medium">
          Confían en la calidad operativa y técnica de <strong className="text-slate-800">GRUPO GENOLG</strong> las empresas mineras e instituciones líderes del país.
        </p>

        {/* Imagen Oficial de Logos de Clientes */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center transition-all hover:shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/clientes.png" 
            alt="Nuestros Clientes - Empresas Mineras del Perú (Pan American Silver, Nexa, Glencore, Volcan, Milpo, Buenaventura, etc.)"
            className="w-full h-auto max-h-[420px] object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
