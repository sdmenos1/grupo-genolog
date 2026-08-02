'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ConstructionRoadDividerProps {
  title?: string;
  subtitle?: string;
}

export default function ConstructionRoadDivider({ 
  title = "Infraestructura & Obras Civiles en Proceso",
  subtitle = "Despliegue de Maquinaria Pesada, Pavimentación & Mantenimiento de Vías en Mina"
}: ConstructionRoadDividerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const roadLineRef = useRef<SVGLineElement | null>(null);
  const tractorIconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && roadLineRef.current && tractorIconRef.current) {
      // Animate road paving laser line laying down on scroll
      gsap.fromTo(
        roadLineRef.current,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );

      // Animate Tractor / Heavy Loader moving horizontally across the road line
      gsap.fromTo(
        tractorIconRef.current,
        { left: '0%' },
        {
          left: '92%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'bottom 30%',
            scrub: 1.2,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="py-12 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Industrial Pavement Grid Pattern */}
      <div className="blueprint-grid absolute inset-0 opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Subtitle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/40 text-brand-gold flex items-center justify-center text-lg font-bold">
              <i className="fa-solid fa-road text-brand-gold animate-pulse"></i>
            </div>
            <div>
              <div className="text-xs font-bold text-brand-gold uppercase tracking-wider">{title}</div>
              <div className="text-sm font-semibold text-slate-700">{subtitle}</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Avance de Pavimentación en Vivo</span>
          </div>
        </div>

        {/* Interactive Construction Pavement Animation Track */}
        <div className="relative w-full h-12 flex items-center">
          
          {/* Base Road Bed Line */}
          <div className="absolute inset-x-0 h-3 bg-slate-50 rounded-full border border-slate-200 shadow-inner"></div>

          {/* SVG Paved Asphalt Road Line with GSAP Scrub */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line 
              ref={roadLineRef}
              x1="0" 
              y1="50%" 
              x2="100%" 
              y2="50%" 
              stroke="#C59B27" 
              strokeWidth="6" 
              strokeDasharray="1000"
              strokeDashoffset="1000"
              strokeLinecap="round"
            />
          </svg>

          {/* Moving Heavy Machinery / Tractor Icon along the Pavement Line */}
          <div 
            ref={tractorIconRef}
            className="absolute top-1/2 -translate-y-1/2 z-20 transition-transform duration-100 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-brand-petroleum border border-brand-gold text-white flex items-center justify-center shadow-lg transform -scale-x-100">
              <i className="fa-solid fa-truck-monster text-brand-gold text-base"></i>
            </div>
            <div className="hidden sm:inline-block bg-white/90 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded border border-brand-gold/30 shadow-md">
              Pavimentando Vía Minera...
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
