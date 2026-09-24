'use client';

import React from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import ContactSection from '@/components/ContactSection';
import { useModals } from '@/context/ModalContext';

export default function ContactoPage() {
  const { showToast } = useModals();

  return (
    <SubpageLayout
      label="Contacto"
      eyebrow="Hablemos de su proyecto"
      title="Su próximo proyecto"
      accent="empieza con una conversación."
      description="Comparta el alcance de su operación. Nuestro equipo comercial y de ingeniería lo acompaña en consultas, cotizaciones y requerimientos en planta."
      image="/images/nosotros/nosotros-main.png"
      imagePosition="center 65%"
      action={{ label: 'Contactar al equipo', href: '#contacto' }}
    >

      {/* Contact Form & Office Locations Component */}
      <ContactSection onShowToast={showToast} />
    </SubpageLayout>
  );
}
