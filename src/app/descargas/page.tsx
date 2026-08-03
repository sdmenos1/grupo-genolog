'use client';

import React from 'react';
import DownloadsCenter from '@/components/DownloadsCenter';
import { useModals } from '@/context/ModalContext';

export default function DescargasPage() {
  const { openDownloadModal } = useModals();

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
            Recursos Técnicos &amp; Documentación Auditada
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-slate-900 mt-5 tracking-tight drop-shadow-sm">
            Centro de Descargas B2B
          </h1>
          <p className="text-slate-700 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-medium">
            Descargue el Brochure Corporativo 2026, Fichas de Soldadura WPS/PQR, Certificado Bureau Veritas y Constancia MINEM oficial.
          </p>
        </div>
      </section>

      {/* Downloads Center Component */}
      <DownloadsCenter onOpenDownloadModal={openDownloadModal} />
    </main>
  );
}
