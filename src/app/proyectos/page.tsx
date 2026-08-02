'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TrabajosRealizados from '@/components/TrabajosRealizados';
import GaleriaMultimedia from '@/components/GaleriaMultimedia';
import ClientsMarquee from '@/components/ClientsMarquee';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function ProyectosPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceName, setQuoteServiceName] = useState('');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('antisoborno');

  const [toast, setToast] = useState<{ show: boolean; title: string; message: string }>({
    show: false,
    title: '',
    message: '',
  });

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => setToast({ show: false, title: '', message: '' }), 4000);
  };

  const handleOpenQuoteModal = (serviceName: string = '') => {
    setQuoteServiceName(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      <TopBar />
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Page Hero Header */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-brand-titanium to-slate-950 border-b border-slate-200 text-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <span className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-4 py-1 rounded-full">
            Respaldo Comercial &amp; Operaciones en Campo
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Clientes Destacados &amp; Trabajos Realizados
          </h1>
          <p className="text-slate-700 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Ejecución rigurosa de proyectos metalmecánicos, montaje de celdas OK-20 y mantenimiento en plantas concentradoras para las principales empresas mineras del Perú.
          </p>
        </div>
      </section>

      {/* 12 Trabajos Realizados Component */}
      <TrabajosRealizados onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Galería Multimedia de Videos y Fotos */}
      <GaleriaMultimedia />

      {/* Projects Showcase Component */}
      <ProjectsShowcase />

      {/* 14 Official Clients Marquee Ticker */}
      <ClientsMarquee />

      <Footer onOpenPolicyModal={(type) => { setPolicyType(type); setPolicyModalOpen(true); }} />

      <Modals
        quoteModalOpen={quoteModalOpen}
        quoteServiceName={quoteServiceName}
        onCloseQuoteModal={() => setQuoteModalOpen(false)}
        downloadModalOpen={downloadModalOpen}
        downloadType="brochure"
        onCloseDownloadModal={() => setDownloadModalOpen(false)}
        policyModalOpen={policyModalOpen}
        policyType={policyType}
        onClosePolicyModal={() => setPolicyModalOpen(false)}
        onShowToast={showToast}
      />

      <WhatsAppWidget />
    </main>
  );
}
