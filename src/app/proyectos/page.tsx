'use client';

import React from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TrabajosRealizados from '@/components/TrabajosRealizados';
import GaleriaMultimedia from '@/components/GaleriaMultimedia';
import ClientsMarquee from '@/components/ClientsMarquee';
import { useModals } from '@/context/ModalContext';

export default function ProyectosPage() {
  const { openQuoteModal } = useModals();

  return (
    <SubpageLayout
      label="Proyectos"
      eyebrow="Experiencia en campo"
      title="Cada proyecto,"
      accent="un compromiso cumplido."
      description="Explore nuestros trabajos en plantas concentradoras e instalaciones mineras: montaje, mantenimiento y ejecución de soluciones en campo."
      image="/images/servicios/montaje_estructuras.jpg"
      imagePosition="center 45%"
      action={{ label: 'Ver trabajos realizados', href: '#trabajos-realizados' }}
    >

      {/* 12 Trabajos Realizados Component */}
      <TrabajosRealizados onOpenQuoteModal={openQuoteModal} />

      {/* Galería Multimedia de Videos y Fotos */}
      <GaleriaMultimedia />

      {/* Projects Showcase Component */}
      <ProjectsShowcase />

      {/* 14 Official Clients Marquee Ticker */}
      <ClientsMarquee />
    </SubpageLayout>
  );
}
