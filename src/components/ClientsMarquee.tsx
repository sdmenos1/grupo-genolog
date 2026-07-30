'use client';

import React from 'react';

const clients = [
  'Pan American Silver',
  'Glencore',
  'Volcan',
  'Nexa Resources',
  'Compañía de Minas Buenaventura',
  'Austria Duvaz S.A.C.',
  'El Brocal',
  'E.A. Cerro S.A.C.',
  'Kolpa',
  'Compañía Minera Atacocha S.A.',
  'Sierra Antapite',
  'Milpo',
  'Catalina Huanca Sociedad Minera S.A.C.',
  'Gobierno Regional Pasco'
];

export default function ClientsMarquee() {
  return (
    <section className="py-12 bg-brand-titanium border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Respaldo Comercial &amp; Experiencia Acreditada</span>
        <h3 className="font-heading text-lg font-bold text-slate-300 mt-1">Clientes Destacados y Compañías Mineras</h3>
      </div>

      {/* Infinite Horizontal Ticker */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {clients.concat(clients).map((client, idx) => (
            <div 
              key={idx} 
              className="bg-brand-deepObsidian hover:bg-brand-steel border border-slate-800 hover:border-brand-gold/50 px-6 py-3 rounded-2xl text-xs font-bold text-slate-200 hover:text-brand-gold transition duration-300 flex items-center gap-3 shadow-md flex-shrink-0">
              <i className="fa-solid fa-building-user text-brand-gold"></i>
              <span>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
