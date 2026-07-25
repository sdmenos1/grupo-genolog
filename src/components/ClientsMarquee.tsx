'use client';

import React from 'react';

const clients = [
  'Pan American Silver',
  'Glencore',
  'Volcan Minera',
  'Nexa Resources',
  'Buenaventura',
  'El Brocal',
  'Catalina Huanca',
  'Austria Duvaz',
  'Minera Kolpa',
  'Atacocha',
  'Sierra Antapite',
  'Milpo'
];

export default function ClientsMarquee() {
  return (
    <section className="py-16 bg-brand-titanium border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Respaldo Sectorial</span>
        <h3 className="text-lg font-bold text-white mt-1">Empresas Líderes que Confían en GRUPO GENOLG</h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee space-x-6">
          <div className="flex items-center space-x-6 font-heading font-extrabold text-slate-300 text-sm uppercase tracking-wider">
            {clients.map((c, idx) => (
              <span key={idx} className="bg-brand-steel px-6 py-3 rounded-xl border border-white/10 hover:border-brand-gold transition whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-6 font-heading font-extrabold text-slate-300 text-sm uppercase tracking-wider" aria-hidden="true">
            {clients.map((c, idx) => (
              <span key={`dup-${idx}`} className="bg-brand-steel px-6 py-3 rounded-xl border border-white/10 hover:border-brand-gold transition whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
