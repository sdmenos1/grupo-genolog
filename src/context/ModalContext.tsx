'use client';

import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  openQuoteModal: (serviceName?: string) => void;
  closeQuoteModal: () => void;
  quoteModalOpen: boolean;
  quoteServiceName: string;
  
  openDownloadModal: (type?: string) => void;
  closeDownloadModal: () => void;
  downloadModalOpen: boolean;
  downloadType: string;

  openPolicyModal: (type?: string) => void;
  closePolicyModal: () => void;
  policyModalOpen: boolean;
  policyType: string;

  toast: { show: boolean; title: string; message: string };
  showToast: (title: string, message: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
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
    setTimeout(() => setToast({ show: false, title: '', message: '' }), 4000);
  };

  const openQuoteModal = (serviceName = '') => {
    setQuoteServiceName(serviceName);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => setQuoteModalOpen(false);

  const openDownloadModal = (type = 'brochure') => {
    setDownloadType(type);
    setDownloadModalOpen(true);
  };

  const closeDownloadModal = () => setDownloadModalOpen(false);

  const openPolicyModal = (type = 'antisoborno') => {
    setPolicyType(type);
    setPolicyModalOpen(true);
  };

  const closePolicyModal = () => setPolicyModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openQuoteModal,
        closeQuoteModal,
        quoteModalOpen,
        quoteServiceName,
        openDownloadModal,
        closeDownloadModal,
        downloadModalOpen,
        downloadType,
        openPolicyModal,
        closePolicyModal,
        policyModalOpen,
        policyType,
        toast,
        showToast,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
}
