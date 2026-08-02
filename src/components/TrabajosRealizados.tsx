'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface TrabajoRealizado {
  id: string;
  category: 'molienda-pdp' | 'celdas-tuberias' | 'mecanismos-izaje';
  categoryLabel: string;
  title: string;
  shortCode: string;
  description: string;
  imageFolder: string;
  galleryImages: string[];
  icon: string;
  highlights: string[];
  badges: string[];
  unitLocation?: string;
}

export const trabajosData: TrabajoRealizado[] = [
  {
    id: 'molino-7x12-chaquetas',
    category: 'molienda-pdp',
    categoryLabel: 'Molienda & Parada de Planta',
    title: 'SERVICIO MOLINO 7’X12’ CAMBIO DE CHAQUETAS DEL INTERIOR',
    shortCode: 'TR-01',
    description: 'Desmontaje técnico de revestimientos e inspección Ultrasónica de casco. Instalación de nuevas chaquetas de acero aleado con torqueado controlado en parada de planta.',
    imageFolder: '/images/trabajos_realizados/molino-7x12-chaquetas',
    galleryImages: [
      '/images/trabajos_realizados/molino-7x12-chaquetas/Imagen2.jpg',
      '/images/trabajos_realizados/molino-7x12-chaquetas/Imagen4.jpg'
    ],
    icon: 'fa-gears',
    highlights: ['Torque neumático calibrado', 'Inspección NDT de casco', 'Reemplazo total de pernos'],
    badges: ['100% en Plazo PDP', 'Calidad Aprobada'],
    unitLocation: 'Planta Concentradora'
  },
  {
    id: 'parada-plomo-zinc-chancado',
    category: 'molienda-pdp',
    categoryLabel: 'Molienda & Parada de Planta',
    title: 'SERVICIO DE PARADA DE PLANTA PLOMO Y ZINC - CHANCADO',
    shortCode: 'TR-02',
    description: 'Ejecución integral de mantenimiento preventivo y correctivo en circuito de chancado secundario y terciario para líneas de plomo y zinc durante ventana operativa de parada.',
    imageFolder: '/images/trabajos_realizados/parada-plomo-zinc-chancado',
    galleryImages: [
      '/images/trabajos_realizados/parada-plomo-zinc-chancado/Imagen7.png',
      '/images/trabajos_realizados/parada-plomo-zinc-chancado/Imagen8.png',
      '/images/trabajos_realizados/parada-plomo-zinc-chancado/Imagen9.png'
    ],
    icon: 'fa-cubes-stacked',
    highlights: ['Mantenimiento fajas transportadoras', 'Cambio de forros de chancadora', 'Calibración de chancado'],
    badges: ['Cero Incidentes HSE', 'Disponibilidad 24/7'],
    unitLocation: 'Circuito Chancado PDP'
  },
  {
    id: 'celdas-flotacion-planta-n1',
    category: 'celdas-tuberias',
    categoryLabel: 'Celdas de Flotación & Tuberías',
    title: 'CELDAS DE FLOTACIÓN UBICADO EN LA PLANTA N°1',
    shortCode: 'TR-03',
    description: 'Intervención y optimización de celdas de flotación operativas en Planta N°1. Reparación de mecanismos de agitación, rotores, estatores y recubrimiento epóxico.',
    imageFolder: '/images/trabajos_realizados/celdas-flotacion-planta-n1',
    galleryImages: [
      '/images/trabajos_realizados/celdas-flotacion-planta-n1/Imagen10.jpg',
      '/images/trabajos_realizados/celdas-flotacion-planta-n1/Imagen11.jpg',
      '/images/trabajos_realizados/celdas-flotacion-planta-n1/Imagen12.jpg'
    ],
    icon: 'fa-vial-virus',
    highlights: ['Alineamiento de eje del rotor', 'Prueba de estanqueidad', 'Recubrimiento anticorrosivo'],
    badges: ['Planta Concentradora N°1', 'PQR Aprobado'],
    unitLocation: 'Planta N°1'
  },
  {
    id: 'overland-rodamiento-polea',
    category: 'mecanismos-izaje',
    categoryLabel: 'Mecanismos & Izaje',
    title: 'OVERLAND CAMBIO DE RODAMIENTO DE POLEA',
    shortCode: 'TR-04',
    description: 'Desacople, maniobra de izaje con grúa de alta capacidad y sustitución de rodamientos de chumacera en polea motriz de faja transportadora Overland.',
    imageFolder: '/images/trabajos_realizados/overland-rodamiento-polea',
    galleryImages: [
      '/images/trabajos_realizados/overland-rodamiento-polea/Imagen13.jpg',
      '/images/trabajos_realizados/overland-rodamiento-polea/Imagen14.jpg',
      '/images/trabajos_realizados/overland-rodamiento-polea/Imagen15.jpg'
    ],
    icon: 'fa-dharmachakra',
    highlights: ['Extracción hidráulica de rodamiento', 'Calibración de juego radial SKF', 'Alineamiento láser de polea'],
    badges: ['Maniobra Crítica', 'Rigging Homologado'],
    unitLocation: 'Sistema Faja Overland'
  },
  {
    id: 'izaje-soplador-spencer',
    category: 'mecanismos-izaje',
    categoryLabel: 'Mecanismos & Izaje',
    title: 'IZAJE DE SOPLADOR SPENCER',
    shortCode: 'TR-05',
    description: 'Plan de izaje riguroso (Rigging Plan) y montaje de soplador industrial Spencer de alto tonelaje en plataforma elevada con supervisión de ingeniería de maniobras.',
    imageFolder: '/images/trabajos_realizados/izaje-soplador-spencer',
    galleryImages: [
      '/images/trabajos_realizados/izaje-soplador-spencer/Imagen16.png',
      '/images/trabajos_realizados/izaje-soplador-spencer/Imagen17.png'
    ],
    icon: 'fa-truck-ramp-box',
    highlights: ['Plan de izaje con Rigger Nivel III', 'Nivelación micrométrica de base', 'Prueba de vibración estática'],
    badges: ['Estándar HSE Minero', 'Operación de Izaje'],
    unitLocation: 'Área de Sopladores'
  },
  {
    id: 'mantenimiento-mecanismo-alimentacion',
    category: 'mecanismos-izaje',
    categoryLabel: 'Mecanismos & Izaje',
    title: 'MANTENIMIENTO DE MECANISMO DE ALIMENTACIÓN',
    shortCode: 'TR-06',
    description: 'Revisión técnica, cambio de componentes de desgaste y lubricación de alta presión en alimentadores de placas (Apron Feeders) y tolvas de finos.',
    imageFolder: '/images/trabajos_realizados/mantenimiento-mecanismo-alimentacion',
    galleryImages: [
      '/images/trabajos_realizados/mantenimiento-mecanismo-alimentacion/Imagen18.png',
      '/images/trabajos_realizados/mantenimiento-mecanismo-alimentacion/Imagen19.png',
      '/images/trabajos_realizados/mantenimiento-mecanismo-alimentacion/Imagen20.png'
    ],
    icon: 'fa-wrench',
    highlights: ['Ajuste de cadenas de oruga', 'Sustitución de rodillos de apoyo', 'Regulación de variador impulsión'],
    badges: ['Mantenimiento Continuo', 'Mayor Disponibilidad'],
    unitLocation: 'Alimentación de Molienda'
  },
  {
    id: 'mantenimiento-chancadora-conica',
    category: 'molienda-pdp',
    categoryLabel: 'Molienda & Parada de Planta',
    title: 'MANTENIMIENTO DE CHANCADORA CÓNICA',
    shortCode: 'TR-07',
    description: 'Overhaul y cambio de manto y cóncavo en chancadora cónica secundaria. Ajuste de excéntrica, reemplazo de bocinas de bronce y recarga de resina epóxica.',
    imageFolder: '/images/trabajos_realizados/mantenimiento-chancadora-conica',
    galleryImages: [
      '/images/trabajos_realizados/mantenimiento-chancadora-conica/Imagen21.png',
      '/images/trabajos_realizados/mantenimiento-chancadora-conica/Imagen22.png',
      '/images/trabajos_realizados/mantenimiento-chancadora-conica/Imagen23.png'
    ],
    icon: 'fa-industry',
    highlights: ['Vaciado de resina de respaldo', 'Ajuste de CSS operativo', 'Inspección del sistema hidráulico'],
    badges: ['Chancado Secundario', 'Garantía Técnica'],
    unitLocation: 'Área Chancado'
  },
  {
    id: 'fabricacion-cajon-molienda',
    category: 'molienda-pdp',
    categoryLabel: 'Molienda & Parada de Planta',
    title: 'FABRICACIÓN DE CAJÓN MOLIENDA',
    shortCode: 'TR-08',
    description: 'Ingeniería, habilitado de planchas estructurales de alto espesor, soldeo continuo homologado y revestimiento de goma antiabrasiva para cajón de distribución de molienda.',
    imageFolder: '/images/trabajos_realizados/fabricacion-cajon-molienda',
    galleryImages: [
      '/images/trabajos_realizados/fabricacion-cajon-molienda/Imagen24.png',
      '/images/trabajos_realizados/fabricacion-cajon-molienda/Imagen25.png',
      '/images/trabajos_realizados/fabricacion-cajon-molienda/Imagen26.png'
    ],
    icon: 'fa-compass-drafting',
    highlights: ['Soldadura FCAW/GMAW AWS D1.1', 'Prueba NDT por Tintes Penetrantes', 'Protección antiabrasiva interna'],
    badges: ['AWS D1.1 Homologado', 'Taller Metalmecánico'],
    unitLocation: 'Circuito Molienda'
  },
  {
    id: 'montaje-estructuras-celdas-ok20',
    category: 'celdas-tuberias',
    categoryLabel: 'Celdas de Flotación & Tuberías',
    title: 'MONTAJE ESTRUCTURAS - CELDAS DE FLOTACIÓN OK - 20',
    shortCode: 'TR-09',
    description: 'Ensamble y montaje estructural de soporte para banco de celdas de flotación OK-20 de gran volumen. Alineamiento de columnas, vigas estructurales y pernería grado 8.',
    imageFolder: '/images/trabajos_realizados/montaje-estructuras-celdas-ok20',
    galleryImages: [
      '/images/trabajos_realizados/montaje-estructuras-celdas-ok20/Imagen27.png',
      '/images/trabajos_realizados/montaje-estructuras-celdas-ok20/Imagen28.png',
      '/images/trabajos_realizados/montaje-estructuras-celdas-ok20/Imagen29.png'
    ],
    icon: 'fa-layer-group',
    highlights: ['Estructuras estructurales A36/A572', 'Alineamiento óptico de precisión', 'Torque de pernos de alta resistencia'],
    badges: ['Celdas OK-20', 'Montaje Pesado'],
    unitLocation: 'Planta Flotación'
  },
  {
    id: 'soldeo-montaje-tuberia-14in',
    category: 'celdas-tuberias',
    categoryLabel: 'Celdas de Flotación & Tuberías',
    title: 'SOLDEO DE TUBERÍA Y MONTAJE DE TUBERÍA DE 14 IN PARA CELDAS OK20',
    shortCode: 'TR-10',
    description: 'Fabricación de spools, bisexuales y montaje de líneas de pulpa en tubería de 14 pulgadas Schedule 40 para interconexión del banco de celdas OK20.',
    imageFolder: '/images/trabajos_realizados/soldeo-montaje-tuberia-14in',
    galleryImages: [
      '/images/trabajos_realizados/soldeo-montaje-tuberia-14in/Imagen30.jpg',
      '/images/trabajos_realizados/soldeo-montaje-tuberia-14in/Imagen31.jpg',
      '/images/trabajos_realizados/soldeo-montaje-tuberia-14in/Imagen32.jpg'
    ],
    icon: 'fa-water',
    highlights: ['Soldadura de tubería ASME IX / API 1104', 'Radiografía / Inspección UT en juntas', 'Montaje con soportería regulable'],
    badges: ['ASME IX Soldadura', 'Tubería 14" SCH40'],
    unitLocation: 'Línea de Pulpa OK20'
  },
  {
    id: 'armado-soldeo-plataformas-ok',
    category: 'celdas-tuberias',
    categoryLabel: 'Celdas de Flotación & Tuberías',
    title: 'ARMADO Y SOLDEO DE PLATAFORMAS CELDAS OK',
    shortCode: 'TR-11',
    description: 'Fabricación e instalación de plataformas de operación, pasarelas de inspección, barandas de seguridad y pisos de parrilla electroforjada Grating para celdas OK.',
    imageFolder: '/images/trabajos_realizados/armado-soldeo-plataformas-ok',
    galleryImages: [
      '/images/trabajos_realizados/armado-soldeo-plataformas-ok/Imagen33.png',
      '/images/trabajos_realizados/armado-soldeo-plataformas-ok/Imagen34.jpg',
      '/images/trabajos_realizados/armado-soldeo-plataformas-ok/Imagen36.jpg'
    ],
    icon: 'fa-shield-halved',
    highlights: ['Pisos Grating galvanizados en caliente', 'Barandas según norma OSHA/MINEM', 'Pintura epóxica de alta durabilidad'],
    badges: ['Seguridad Operativa', 'Norma OSHA'],
    unitLocation: 'Acceso Celdas OK'
  },
  {
    id: 'montaje-cajon-alimentacion-descarga',
    category: 'celdas-tuberias',
    categoryLabel: 'Celdas de Flotación & Tuberías',
    title: 'MONTAJE DE CAJÓN DE ALIMENTACIÓN Y DESCARGA',
    shortCode: 'TR-12',
    description: 'Izaje de precisión y fijación mecánica de cajones de alimentación y descarga en banco de flotación. Sellado hidro-estanco e interconexión de válvulas dardos.',
    imageFolder: '/images/trabajos_realizados/montaje-cajon-alimentacion-descarga',
    galleryImages: [
      '/images/trabajos_realizados/montaje-cajon-alimentacion-descarga/Imagen37.png',
      '/images/trabajos_realizados/montaje-cajon-alimentacion-descarga/Imagen38.png',
      '/images/trabajos_realizados/montaje-cajon-alimentacion-descarga/Imagen39.png'
    ],
    icon: 'fa-filter',
    highlights: ['Calibración de Válvula Dardo', 'Juntas vulcanizadas herméticas', 'Soportería pesada antivibratoria'],
    badges: ['Hermeticidad 100%', 'Calidad Entregada'],
    unitLocation: 'Cabecera de Flotación'
  }
];

interface TrabajosRealizadosProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export default function TrabajosRealizados({ onOpenQuoteModal }: TrabajosRealizadosProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedTrabajo, setSelectedTrabajo] = useState<TrabajoRealizado | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-tr-header',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.gsap-tr-header', start: 'top 85%' } }
      );

      gsap.fromTo('.gsap-tr-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openTrabajoModal = (trabajo: TrabajoRealizado) => {
    setSelectedTrabajo(trabajo);
    setActiveImgIndex(0);
  };

  const handleNextImg = () => {
    if (!selectedTrabajo) return;
    setActiveImgIndex((prev) => (prev + 1) % selectedTrabajo.galleryImages.length);
  };

  const handlePrevImg = () => {
    if (!selectedTrabajo) return;
    setActiveImgIndex((prev) => (prev - 1 + selectedTrabajo.galleryImages.length) % selectedTrabajo.galleryImages.length);
  };

  const filteredTrabajos = activeCategory === 'todos'
    ? trabajosData
    : trabajosData.filter(t => t.category === activeCategory);

  return (
    <section ref={sectionRef} id="trabajos-realizados" className="py-24 bg-slate-200 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-petroleum/15 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="gsap-tr-header text-brand-gold font-extrabold uppercase tracking-widest text-xs inline-block bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 rounded-full mb-3 shadow-md">
            <i className="fa-solid fa-images mr-2"></i> Fotografía Operativa Real por Proyecto
          </span>
          <h2 className="gsap-tr-header font-heading text-3xl sm:text-5xl font-black text-slate-900 mt-1 tracking-tight">
            Trabajos Realizados en Campo &amp; Planta
          </h2>
          <p className="gsap-tr-header text-slate-800 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Fotografías reales de intervenciones técnicas en molienda, paradas de planta PDP, celdas OK-20 y montajes mecánicos.
          </p>
        </div>



        {/* 12 Works Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrabajos.map((trabajo) => (
            <div
              key={trabajo.id}
              className="gsap-tr-card group bg-white/90 rounded-3xl p-6 border border-slate-200 hover:border-brand-gold/50 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-gold/5">
              
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-black text-brand-petroleum bg-slate-100 border border-brand-gold/30 px-2.5 py-1 rounded-md tracking-wider">
                    {trabajo.shortCode}
                  </span>
                </div>

                {/* Card Main Image Container */}
                <div 
                  onClick={() => openTrabajoModal(trabajo)}
                  className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 border border-slate-200/80 cursor-pointer group/img bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={trabajo.galleryImages[0]}
                    alt={trabajo.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20 opacity-80 group-hover/img:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md border border-brand-gold/40 text-brand-petroleum w-8 h-8 rounded-full flex items-center justify-center text-xs opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform group-hover/img:scale-110">
                    <i className="fa-solid fa-images"></i>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => openTrabajoModal(trabajo)}
                  className="font-heading font-black text-slate-900 text-base leading-snug mb-3 group-hover:text-brand-petroleum transition-colors cursor-pointer">
                  {trabajo.title}
                </h3>

                {/* Description */}
                <p className="text-slate-800 text-xs leading-relaxed mb-4 line-clamp-3">
                  {trabajo.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-200/80">
                  {trabajo.highlights.map((h, i) => (
                    <li key={i} className="text-[11px] text-slate-800 flex items-center gap-2 font-medium">
                      <i className="fa-solid fa-check text-brand-petroleum text-[10px]"></i>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Modal De Galería de Fotos de Trabajo Realizado */}
        {selectedTrabajo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="bg-white border border-brand-gold/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl space-y-5 max-h-[95vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrabajo(null)}
                className="absolute top-5 right-5 text-slate-600 hover:text-brand-petroleum w-9 h-9 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-lg transition z-20">
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="flex items-center gap-3">
                <span className="bg-brand-gold/10 border border-brand-gold/30 text-brand-petroleum text-xs font-black px-3 py-1 rounded-md">
                  {selectedTrabajo.shortCode}
                </span>
                <span className="text-xs text-slate-600 uppercase font-bold tracking-wider">
                  {selectedTrabajo.categoryLabel}
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 leading-tight pr-10">
                {selectedTrabajo.title}
              </h3>

              {/* Interactive Multi-Photo Gallery Viewer */}
              <div className="space-y-3">
                <div className="h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-300 relative bg-black flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedTrabajo.galleryImages[activeImgIndex]}
                    alt={`${selectedTrabajo.title} foto ${activeImgIndex + 1}`}
                    className="w-full h-full object-contain bg-white transition-all duration-300"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Navigation Arrows (if > 1 image) */}
                  {selectedTrabajo.galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImg}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-brand-gold hover:text-brand-deepObsidian border border-slate-300 text-slate-900 flex items-center justify-center text-base transition backdrop-blur-md shadow-lg">
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>

                      <button
                        onClick={handleNextImg}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-brand-gold hover:text-brand-deepObsidian border border-slate-300 text-slate-900 flex items-center justify-center text-base transition backdrop-blur-md shadow-lg">
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </>
                  )}

                  {/* Photo Counter Tag */}
                  <div className="absolute bottom-3 left-3 bg-white/90 text-xs text-brand-petroleum font-bold px-3.5 py-1.5 rounded-lg border border-brand-gold/40 backdrop-blur-md flex items-center gap-2">
                    <i className="fa-solid fa-camera"></i>
                    <span>Foto {activeImgIndex + 1} de {selectedTrabajo.galleryImages.length}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/90 text-[11px] text-slate-800 font-semibold px-3 py-1.5 rounded-lg border border-slate-200 backdrop-blur-md font-mono">
                    {selectedTrabajo.galleryImages[activeImgIndex].split('/').pop()}
                  </div>
                </div>

                {/* Thumbnails Gallery Bar */}
                {selectedTrabajo.galleryImages.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
                    {selectedTrabajo.galleryImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`relative h-16 sm:h-20 w-24 sm:w-28 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-white ${
                          activeImgIndex === idx
                            ? 'border-brand-gold scale-105 shadow-glow-gold'
                            : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400'
                        }`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imgUrl}
                          alt={`Miniatura ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 right-1 text-[9px] font-black text-white bg-black/80 px-1.5 rounded">
                          #{idx + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed">
                {selectedTrabajo.description}
              </p>

              <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-brand-petroleum uppercase tracking-wider">Especificaciones Técnicas &amp; Tolerancias</div>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-800">
                  {selectedTrabajo.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <i className="fa-solid fa-check-double text-brand-petroleum"></i>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-200">
                <div className="text-xs text-slate-600">
                  Imágenes cargadas desde <code className="text-brand-petroleum font-mono">{selectedTrabajo.imageFolder}/</code>
                </div>

                <button
                  onClick={() => {
                    const title = selectedTrabajo.title;
                    setSelectedTrabajo(null);
                    if (onOpenQuoteModal) onOpenQuoteModal(`Cotizar Operaciones de ${title}`);
                  }}
                  className="w-full sm:w-auto bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-extrabold text-xs px-6 py-3 rounded-xl border border-brand-gold/40 shadow-md transition">
                  <i className="fa-solid fa-calculator mr-2"></i> Cotizar Servicio Similar
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
