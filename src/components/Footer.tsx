'use client';

import React from 'react';

interface FooterProps {
  onOpenPolicyModal: (type: string) => void;
}

export default function Footer({ onOpenPolicyModal }: FooterProps) {
  return (
    <footer className="bg-brand-deepObsidian border-t border-white/10 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          <div className="space-y-4 md:col-span-2">
            <div className="font-heading font-extrabold text-lg text-white tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-gears text-brand-gold"></i>
              <span>GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L.</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Empresa contratista minera especializada en paradas de planta, montaje metalmecánico, obras civiles y mantenimiento integral de plantas concentradoras en el Perú.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="bg-brand-titanium px-3 py-1 rounded-full border border-white/10">RUC: <strong>20608261894</strong></span>
              <span className="bg-brand-titanium px-3 py-1 rounded-full border border-white/10">Bureau Veritas: <strong className="text-brand-gold">87.81%</strong></span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Navegación Rápida</h4>
            <ul className="space-y-2.5">
              <li><a href="#inicio" className="hover:text-brand-gold transition">Inicio</a></li>
              <li><a href="#acreditaciones" className="hover:text-brand-gold transition">Acreditaciones Bureau Veritas</a></li>
              <li><a href="#nosotros" className="hover:text-brand-gold transition">Nosotros &amp; Cuadrillas</a></li>
              <li><a href="#servicios" className="hover:text-brand-gold transition">Servicios Técnicos</a></li>
              <li><a href="#proyectos" className="hover:text-brand-gold transition">Proyectos Mineros</a></li>
              <li><a href="#recursos" className="hover:text-brand-gold transition">Centro de Descargas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Políticas &amp; Ética</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => onOpenPolicyModal('antisoborno')} className="hover:text-brand-gold transition text-left">Política Antisoborno (ISO 37001)</button></li>
              <li><button onClick={() => onOpenPolicyModal('hse')} className="hover:text-brand-gold transition text-left">Política HSE (Seguridad &amp; Ambiente)</button></li>
              <li><button onClick={() => onOpenPolicyModal('privacidad')} className="hover:text-brand-gold transition text-left">Política de Confidencialidad B2B</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            © 2026 GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Diseño UX/UI en Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
