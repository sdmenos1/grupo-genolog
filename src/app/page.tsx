'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientsMarquee from '@/components/ClientsMarquee';
import TrabajosRealizados from '@/components/TrabajosRealizados';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';
import Modals from '@/components/Modals';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceName, setQuoteServiceName] = useState('');
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('antisoborno');

  const [toast, setToast] = useState<{ show: boolean; title: string; message: string }>({
    show: false,
    title: '',
    message: '',
  });

  React.useEffect(() => {
    // Animación de levitación industrial pesada
    const ctx = gsap.context(() => {
      gsap.to('.industrial-float-1', { y: -8, duration: 3.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.industrial-float-2', { y: -10, duration: 4.2, delay: 0.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.industrial-float-3', { y: -9, duration: 3.8, delay: 1, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.industrial-float-4', { y: -11, duration: 4.5, delay: 1.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    });
    return () => ctx.revert();
  }, []);

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => {
      setToast({ show: false, title: '', message: '' });
    }, 4000);
  };

  const handleOpenQuoteModal = (serviceName: string = '') => {
    setQuoteServiceName(serviceName);
    setQuoteModalOpen(true);
  };

  const handleOpenPolicyModal = (type: string = 'antisoborno') => {
    setPolicyType(type);
    setPolicyModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 font-sans relative">
      
      <TopBar />
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 3. Hero Showcase (GSAP Animations are inside Hero component) */}
      <Hero 
        onOpenDownloadModal={() => {}} // Descargas movido a su propia pagina
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 4. Resumen Ejecutivo Estratégico (Conciso para el Inicio) */}
      <section className="py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-brand-petroleum font-bold tracking-widest text-xs uppercase border border-brand-petroleum/30 bg-brand-petroleum/10 px-3 py-1 rounded-full">
                MÁS DE 15 AÑOS DE EXPERIENCIA
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-heading leading-tight">
                Somos la Mejor Opción en <span className="text-brand-petroleum">Ingeniería &amp; Construcción</span>
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L. es una empresa peruana contratista minera registrada ante el MINEM. Nos especializamos en la ejecución rigurosa de proyectos metalmecánicos, montaje de estructuras pesadas, mantenimiento en paradas de planta (P.D.P) y obras civiles.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/nosotros" className="bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-lg border border-brand-gold/30 flex items-center gap-2">
                  <span>Conocer Más</span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="/acreditaciones" className="bg-slate-100 hover:bg-slate-200 text-brand-gold font-bold py-3 px-6 rounded-xl transition duration-300 shadow-lg border border-slate-300 flex items-center gap-2">
                  <span>Ver Acreditaciones</span> <i className="fa-solid fa-certificate"></i>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5 lg:gap-6">
              <div className="industrial-float-1 bg-slate-100/90 p-6 rounded-3xl border border-brand-gold/20 shadow-2xl backdrop-blur-md text-center transform transition hover:scale-105 duration-300 hover:border-brand-gold/50 flex flex-col justify-center items-center h-full">
                <i className="fa-solid fa-helmet-safety text-4xl text-brand-gold mb-3 drop-shadow-md"></i>
                <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 drop-shadow-sm">100%</div>
                <div className="text-[10px] lg:text-xs text-slate-600 font-bold uppercase tracking-wider">Cumplimiento Legal</div>
              </div>
              <div className="industrial-float-2 bg-slate-100/90 p-6 rounded-3xl border border-brand-gold/20 shadow-2xl backdrop-blur-md text-center transform transition hover:scale-105 duration-300 hover:border-brand-gold/50 flex flex-col justify-center items-center h-full lg:translate-y-8">
                <i className="fa-solid fa-award text-4xl text-brand-gold mb-3 drop-shadow-md"></i>
                <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 drop-shadow-sm">100%</div>
                <div className="text-[10px] lg:text-xs text-slate-600 font-bold uppercase tracking-wider">Homologados B2B</div>
              </div>
              <div className="industrial-float-3 bg-slate-100/90 p-6 rounded-3xl border border-brand-gold/20 shadow-2xl backdrop-blur-md text-center transform transition hover:scale-105 duration-300 hover:border-brand-gold/50 flex flex-col justify-center items-center h-full">
                <i className="fa-solid fa-users-gear text-4xl text-brand-gold mb-3 drop-shadow-md"></i>
                <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 drop-shadow-sm">+150</div>
                <div className="text-[10px] lg:text-xs text-slate-600 font-bold uppercase tracking-wider">Técnicos Expertos</div>
              </div>
              <div className="industrial-float-4 bg-slate-100/90 p-6 rounded-3xl border border-brand-gold/20 shadow-2xl backdrop-blur-md text-center transform transition hover:scale-105 duration-300 hover:border-brand-gold/50 flex flex-col justify-center items-center h-full lg:translate-y-8">
                <i className="fa-solid fa-industry text-4xl text-brand-gold mb-3 drop-shadow-md"></i>
                <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 drop-shadow-sm">24/7</div>
                <div className="text-[10px] lg:text-xs text-slate-600 font-bold uppercase tracking-wider">Disponibilidad PDP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. 12 Trabajos Realizados Showcase */}
      <TrabajosRealizados onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 5. Clientes Marquee Ticker */}
      <ClientsMarquee />

      {/* 6. Enlace a Servicios de Ingeniería */}
      <section className="py-20 bg-brand-petroleum relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading mb-6">Soluciones de Ingeniería a Medida</h2>
          <p className="text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Desde el diseño 3D hasta la fabricación metalmecánica con soldadura homologada (WPS/PQR) y el montaje de estructuras pesadas en campo. Conozca nuestro portafolio de servicios.
          </p>
          <Link href="/servicios" className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-brand-petroleum font-extrabold text-sm px-8 py-4 rounded-2xl border border-white/20 shadow-executive hover:scale-105 transition-all duration-300 group">
            <span>Explorar Servicios</span>
            <i className="fa-solid fa-arrow-right text-brand-petroleum group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
      </section>

      {/* 11. Corporate Footer */}
      <Footer onOpenPolicyModal={handleOpenPolicyModal} />

      {/* 12. Modals */}
      <Modals
        quoteModalOpen={quoteModalOpen}
        quoteServiceName={quoteServiceName}
        onCloseQuoteModal={() => setQuoteModalOpen(false)}
        downloadModalOpen={false}
        downloadType={'brochure'}
        onCloseDownloadModal={() => {}}
        policyModalOpen={policyModalOpen}
        policyType={policyType}
        onClosePolicyModal={() => setPolicyModalOpen(false)}
        onShowToast={showToast}
      />

      <WhatsAppWidget />
      
      {/* Toast */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 bg-white text-white p-4 rounded-2xl shadow-executive border border-brand-gold/40 z-50 transition duration-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <i className="fa-solid fa-check"></i>
            </div>
            <div>
              <div className="font-bold text-sm">{toast.title}</div>
              <div className="text-xs text-slate-700">{toast.message}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
