'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ModalProvider, useModals } from '@/context/ModalContext';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import PageTransition from '@/components/PageTransition';

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const {
    quoteModalOpen,
    quoteServiceName,
    closeQuoteModal,
    downloadModalOpen,
    downloadType,
    closeDownloadModal,
    policyModalOpen,
    policyType,
    closePolicyModal,
    toast,
    showToast,
    openQuoteModal,
    openPolicyModal
  } = useModals();

  const isBrochure = pathname === '/brochure';

  if (isBrochure) {
    return <PageTransition>{children}</PageTransition>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header onOpenQuoteModal={openQuoteModal} />
      
      <main className="flex-grow">
        <PageTransition>{children}</PageTransition>
      </main>

      <Footer onOpenPolicyModal={openPolicyModal} />

      <Modals
        quoteModalOpen={quoteModalOpen}
        quoteServiceName={quoteServiceName}
        onCloseQuoteModal={closeQuoteModal}
        downloadModalOpen={downloadModalOpen}
        downloadType={downloadType}
        onCloseDownloadModal={closeDownloadModal}
        policyModalOpen={policyModalOpen}
        policyType={policyType}
        onClosePolicyModal={closePolicyModal}
        onShowToast={showToast}
      />
      
      <WhatsAppWidget />

      {/* Global Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 border border-slate-700 text-white px-5 py-3 rounded-2xl shadow-xl animate-fade-in flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></div>
          <div>
            <div className="font-bold text-xs uppercase text-brand-gold">{toast.title}</div>
            <div className="text-[11px] text-slate-300 mt-0.5">{toast.message}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </ModalProvider>
  );
}
