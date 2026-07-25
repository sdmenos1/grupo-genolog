'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Accreditations from '@/components/Accreditations';
import AboutUs from '@/components/AboutUs';
import ServicesTabs from '@/components/ServicesTabs';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import ClientsMarquee from '@/components/ClientsMarquee';
import DownloadsCenter from '@/components/DownloadsCenter';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceName, setQuoteServiceName] = useState('');

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadType, setDownloadType] = useState('brochure');

  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('antisoborno');

  const [toast, setToast] = useState<{ show: boolean; title: string; message: string }>({
    show: false,
    title: '',
    message: '',
  });

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

  const handleOpenDownloadModal = (type: string = 'brochure') => {
    setDownloadType(type);
    setDownloadModalOpen(true);
  };

  const handleOpenPolicyModal = (type: string = 'antisoborno') => {
    setPolicyType(type);
    setPolicyModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-brand-deepObsidian text-slate-200 font-sans relative">
      
      {/* 1. Top Regulatory Bar */}
      <TopBar />

      {/* 2. Main Sticky Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 3. Hero Showcase */}
      <Hero 
        onOpenDownloadModal={() => handleOpenDownloadModal('brochure')} 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 4. Accreditations */}
      <Accreditations onOpenDownloadModal={handleOpenDownloadModal} />

      {/* 5. About Us & Squads */}
      <AboutUs />

      {/* 6. Technical Services Catalog */}
      <ServicesTabs onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 7. Featured Projects */}
      <ProjectsShowcase />

      {/* 8. Clients Marquee Ticker */}
      <ClientsMarquee />

      {/* 9. Technical Downloads Center */}
      <DownloadsCenter onOpenDownloadModal={handleOpenDownloadModal} />

      {/* 10. Contact & RFQ Form */}
      <ContactSection onShowToast={showToast} />

      {/* 11. Corporate Footer */}
      <Footer onOpenPolicyModal={handleOpenPolicyModal} />

      {/* 12. Modals */}
      <Modals
        quoteModalOpen={quoteModalOpen}
        quoteServiceName={quoteServiceName}
        onCloseQuoteModal={() => setQuoteModalOpen(false)}
        downloadModalOpen={downloadModalOpen}
        downloadType={downloadType}
        onCloseDownloadModal={() => setDownloadModalOpen(false)}
        policyModalOpen={policyModalOpen}
        policyType={policyType}
        onClosePolicyModal={() => setPolicyModalOpen(false)}
        onShowToast={showToast}
      />

      {/* 13. Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* 14. Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 bg-brand-titanium text-white p-4 rounded-2xl shadow-executive border border-brand-gold/40 z-50 transition duration-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <i className="fa-solid fa-check"></i>
            </div>
            <div>
              <div className="font-bold text-sm">{toast.title}</div>
              <div className="text-xs text-slate-300">{toast.message}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
