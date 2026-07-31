'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HorizontalServicesCarousel from '@/components/HorizontalServicesCarousel';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function ServiciosPage() {
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
    <main className="min-h-screen bg-brand-deepObsidian text-slate-200 font-sans relative">
      <TopBar />
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Page Hero Header */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-brand-titanium to-brand-deepObsidian border-b border-slate-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <span className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-4 py-1 rounded-full">
            Catálogo Corporativo de Ingeniería &amp; Mantenimiento
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Nuestros Servicios Especializados
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Desarrollo de ingeniería en AutoCAD 3D, fabricación metalmecánica homologada (WPS/PQR), montaje de estructuras y mantenimiento en paradas de planta (P.D.P).
          </p>
        </div>
      </section>

      {/* Single Unified Modern Services Showcase */}
      <section className="py-16 bg-brand-titanium border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HorizontalServicesCarousel onOpenQuoteModal={handleOpenQuoteModal} />
        </div>
      </section>

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
