'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Category = 'todas' | 'desmontaje-bombas' | 'izaje-soplador' | 'metalmecanica' | 'obras-civiles';

interface MediaItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  category: Category;
  title: string;
}

const galeriaData: MediaItem[] = [
  // Desmontaje Bombas
  { id: 'db-1', type: 'image', src: '/media/galeria/desmontaje-bombas/WhatsApp Image 2026-07-25 at 17.50.09.jpeg', category: 'desmontaje-bombas', title: '' },
  { id: 'db-2', type: 'image', src: '/media/galeria/desmontaje-bombas/WhatsApp Image 2026-07-25 at 17.50.09 (1).jpeg', category: 'desmontaje-bombas', title: '' },
  { id: 'db-3', type: 'image', src: '/media/galeria/desmontaje-bombas/WhatsApp Image 2026-07-25 at 17.50.09 (2).jpeg', category: 'desmontaje-bombas', title: '' },
  
  // Izaje Soplador
  { id: 'is-1', type: 'image', src: '/media/galeria/izaje-soplador/WhatsApp Image 2026-07-25 at 17.50.10.jpeg', category: 'izaje-soplador', title: '' },
  { id: 'is-2', type: 'image', src: '/media/galeria/izaje-soplador/WhatsApp Image 2026-07-25 at 17.50.10 (1).jpeg', category: 'izaje-soplador', title: '' },
  { id: 'is-3', type: 'image', src: '/media/galeria/izaje-soplador/WhatsApp Image 2026-07-25 at 17.50.10 (2).jpeg', category: 'izaje-soplador', title: '' },
  
  // Metalmecánica
  { id: 'mm-1', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.15.jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-2', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.15 (1).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-3', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.16.jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-4', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.16 (1).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-5', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.16 (2).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-6', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.16 (3).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-7', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.16 (4).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-8', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.17.jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-9', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.17 (1).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-10', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.17 (2).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-11', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.17 (3).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-12', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.17 (4).jpeg', category: 'metalmecanica', title: '' },
  { id: 'mm-13', type: 'image', src: '/media/galeria/metalmecanica/WhatsApp Image 2026-07-25 at 17.50.17 (5).jpeg', category: 'metalmecanica', title: '' },
  
  // Otros Trabajos (Videos)
  { id: 'ot-1', type: 'video', src: '/media/galeria/obras-civiles/WhatsApp Video 2026-07-25 at 17.52.18.mp4', category: 'obras-civiles', title: '' },
  { id: 'ot-2', type: 'video', src: '/media/galeria/obras-civiles/WhatsApp Video 2026-07-25 at 17.54.00.mp4', category: 'obras-civiles', title: '' },
  { id: 'ot-3', type: 'video', src: '/media/galeria/obras-civiles/WhatsApp Video 2026-07-25 at 17.54.01.mp4', category: 'obras-civiles', title: '' },
  { id: 'ot-4', type: 'video', src: '/media/galeria/obras-civiles/WhatsApp Video 2026-07-25 at 17.54.01 (1).mp4', category: 'obras-civiles', title: '' },
];

export default function GaleriaMultimedia() {
  const [activeCategory, setActiveCategory] = useState<Category>('todas');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Referencias dinámicas a los elementos de video para optimización
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-gal-header',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.gsap-gal-header', start: 'top 85%' } }
      );
      gsap.fromTo('.gsap-gal-item',
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.gsap-gal-grid', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [activeCategory]);

  // Optimización de rendimiento extrema: IntersectionObserver 
  // Solo reproduce los videos cuando están en pantalla.
  // Mantiene el sitio 100% rápido al pausar los videos fuera del campo de visión.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.muted = true;
          video.play().catch(() => {
            // Intentar reproducir si el navegador lo requiere
          });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.15 });

    videoRefs.current.forEach((vid) => {
      if (vid) {
        vid.muted = true;
        observer.observe(vid);
      }
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredData = activeCategory === 'todas' 
    ? galeriaData 
    : galeriaData.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'todas', label: 'Todas las Galerías' },
    { id: 'desmontaje-bombas', label: 'Desmontaje de Bombas' },
    { id: 'izaje-soplador', label: 'Izaje Soplador Spencer' },
    { id: 'metalmecanica', label: 'Metalmecánica' },
    { id: 'obras-civiles', label: 'Otros Trabajos' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-brand-titanium border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="gsap-gal-header text-brand-gold font-extrabold uppercase tracking-widest text-xs inline-block bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 rounded-full mb-3 shadow-md">
            <i className="fa-solid fa-play mr-2"></i> Videogalería Multimedia
          </span>
          <h2 className="gsap-gal-header font-heading text-3xl sm:text-5xl font-black text-white mt-1 tracking-tight">
            Nuestros Trabajos en Acción
          </h2>
          <p className="gsap-gal-header text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Explora de cerca nuestras operaciones con videos en vivo e imágenes detalladas de maniobras críticas y mantenimientos.
          </p>
        </div>

        {/* Filtros por Categoría */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum text-white border-brand-gold/60 shadow-lg scale-105'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cuadrícula Multimedia */}
        <div className="gsap-gal-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div key={item.id} className="gsap-gal-item group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-brand-gold/50 shadow-lg aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center">
              
              {item.type === 'video' ? (
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      videoRefs.current.set(item.id, el);
                    } else {
                      videoRefs.current.delete(item.id);
                    }
                  }}
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const fallback = target.parentElement.querySelector('.media-fallback');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const fallback = target.parentElement.querySelector('.media-fallback');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
              )}

              {/* Mensaje Limpio de Estado cuando no existe el archivo */}
              <div className="media-fallback hidden flex-col items-center justify-center w-full h-full bg-slate-900/90 text-slate-500 p-4 text-center">
                <i className={`${item.type === 'video' ? 'fa-solid fa-video' : 'fa-solid fa-image'} text-2xl mb-2 text-brand-gold/50`}></i>
                <span className="text-[11px] font-mono text-slate-400 font-semibold">
                  Subir archivo: <br/>
                  <code className="text-brand-gold text-[10px]">{item.src.split('/').pop()}</code>
                </span>
              </div>

              {/* Icono indicador de Tipo */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center border border-slate-700 text-white shadow-lg z-10">
                {item.type === 'video' ? (
                  <i className="fa-solid fa-play text-[10px] ml-0.5 text-brand-gold"></i>
                ) : (
                  <i className="fa-solid fa-image text-[10px] text-brand-gold"></i>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
