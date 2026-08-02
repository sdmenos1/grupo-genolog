'use client';

import React from 'react';

export default function WhatsAppWidget() {
  return (
    <a 
      href="https://wa.me/51902967134?text=Hola%20GRUPO%20GENOLG,%20deseo%20consultar%20por%20servicios%20de%20parada%20de%20planta" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition duration-300 flex items-center justify-center text-2xl group border border-emerald-400/50">
      <i className="fa-brands fa-whatsapp"></i>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        WhatsApp Directo
      </span>
    </a>
  );
}
