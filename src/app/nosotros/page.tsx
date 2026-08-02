'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import ClientsMarquee from '@/components/ClientsMarquee';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function NosotrosPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      <TopBar />
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Page Hero Header */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-brand-titanium to-slate-950 border-b border-slate-200 text-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <span className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-extrabold uppercase tracking-widest text-[11px] px-4 py-1 rounded-full">
            Identidad Corporativa &amp; Capital Humano
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Sobre GRUPO GENOLG
          </h1>
          <p className="text-slate-700 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            &quot;Somos la mejor opción en ingeniería&quot; — Empresa líder en la ejecución de proyectos metalmecánicos, montaje industrial y mantenimiento de plantas concentradoras en el Perú.
          </p>
        </div>
      </section>

      {/* AboutUs Component with Misión, Visión, Valores B2B & 5 Capital Humano Staff Cards */}
      <AboutUs />

      {/* Corporate Clients Marquee */}
      <ClientsMarquee />

      <Footer onOpenPolicyModal={(type) => { setPolicyType(type); setPolicyModalOpen(true); }} />

      <Modals
        quoteModalOpen={quoteModalOpen}
        quoteServiceName=""
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
