'use client';

import React from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import AboutUs from '@/components/AboutUs';
import ClientsMarquee from '@/components/ClientsMarquee';

export default function NosotrosPage() {
  return (
    <SubpageLayout
      label="Nosotros"
      eyebrow="Identidad y equipo"
      title="Ingeniería con propósito."
      accent="Personas que la hacen posible."
      description="Somos GRUPO GENOLG. Un equipo peruano especializado en proyectos metalmecánicos, montaje industrial y mantenimiento de plantas concentradoras."
      image="/images/nosotros/nosotros-main.png"
      imagePosition="center 60%"
      action={{ label: 'Conozca nuestro equipo', href: '#nosotros' }}
    >

      {/* AboutUs Component with Misión, Visión, Valores B2B & 5 Capital Humano Staff Cards */}
      <AboutUs />

      {/* Corporate Clients Marquee */}
      <ClientsMarquee />
    </SubpageLayout>
  );
}
