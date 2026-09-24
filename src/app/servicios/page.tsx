'use client';

import React from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import HorizontalServicesCarousel from '@/components/HorizontalServicesCarousel';
import { useModals } from '@/context/ModalContext';

export default function ServiciosPage() {
  const { openQuoteModal } = useModals();

  return (
    <SubpageLayout
      label="Servicios"
      eyebrow="Ingeniería y mantenimiento"
      title="Soluciones para su planta."
      accent="De principio a fin."
      description="Ingeniería de detalle, fabricación metalmecánica, montaje de estructuras y mantenimiento. Especialidades que trabajan juntas para su operación."
      image="/images/hero/hero_welder.jpg"
      imagePosition="center"
      action={{ label: 'Explorar especialidades', href: '#especialidades' }}
    >

      {/* Single Unified Modern Services Showcase */}
      <section id="especialidades" className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HorizontalServicesCarousel onOpenQuoteModal={openQuoteModal} />
        </div>
      </section>
    </SubpageLayout>
  );
}
