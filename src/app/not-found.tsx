import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 text-brand-gold flex items-center justify-center text-3xl font-bold mb-4 border border-brand-gold/40">
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>
      <h1 className="text-4xl font-extrabold text-white mb-2 font-heading">404 — Página no Encontrada</h1>
      <p className="text-slate-600 text-sm max-w-md mb-6">
        La ruta solicitada no se encuentra disponible en el portal corporativo de GRUPO GENOLG.
      </p>
      <a 
        href="/" 
        className="bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3 rounded-xl border border-brand-gold/40 transition">
        Volver al Inicio
      </a>
    </div>
  );
}
