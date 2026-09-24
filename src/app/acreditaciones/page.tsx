'use client';

import React from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import Accreditations from '@/components/Accreditations';
import { useModals } from '@/context/ModalContext';

export default function AcreditacionesPage() {
  const { openDownloadModal } = useModals();

  return (
    <SubpageLayout
      label="Acreditaciones"
      eyebrow="Calidad y cumplimiento"
      title="Confianza respaldada."
      accent="Compromiso en cada operación."
      description="Conozca nuestra homologación Bureau Veritas y registro de contratista minero MINEM, junto con los estándares que guían nuestro trabajo."
      image="/images/nosotros/nosotros-secundaria-1.png"
      imagePosition="center 66%"
      action={{ label: 'Conocer acreditaciones', href: '#acreditaciones' }}
    >

      {/* Accreditations Component */}
      <Accreditations onOpenDownloadModal={openDownloadModal} />
    </SubpageLayout>
  );
}
