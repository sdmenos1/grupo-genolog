'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const squadData = [
  {
    icon: 'fa-user-gear',
    title: 'Staff de Ingenieros',
    desc: 'Especialistas en ingeniería de detalle 3D, supervisión de seguridad HSE y gestión de proyectos.'
  },
  {
    icon: 'fa-fire-burner',
    title: 'Soldadores Homologados',
    desc: 'Calificados 3G a 6G bajo código ASME Sec. IX y AWS D1.1 (SMAW, GTAW, FCAW).'
  },
  {
    icon: 'fa-wrench',
    title: 'Armadores & Montajistas',
    desc: 'Montaje de precisión, torqueado neumático e instalación de naves e infraestructura.'
  },
  {
    icon: 'fa-bolt',
    title: 'Técnicos Electricistas',
    desc: 'Mantenimiento eléctrico industrial, instrumentación de planta y redes de alta tensión.'
  },
  {
    icon: 'fa-person-digging',
    title: 'Operarios Civiles & Maquinaria',
    desc: 'Ejecución de obras de concreto armado, movimiento de tierras y apertura de vías.'
  }
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.gsap-squad');
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.squads-container'),
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="nosotros" className="py-20 bg-brand-deepObsidian relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Identidad Corporativa &amp; Capital Humano</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">Innovación Tecnológica, Desarrollo Humano y Respeto Ambiental</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>GRUPO GENOLG (Minería &amp; Construcción)</strong> es una empresa dedicada a la ejecución de proyectos metalmecánicos y mantenimiento en plantas concentradoras e industriales. Operamos en sectores de la economía pública y privada mediante la innovación tecnológica, el desarrollo humano de procesos y el respeto al medio ambiente.
            </p>
            <div className="p-5 bg-brand-titanium rounded-2xl border-l-4 border-brand-gold text-xs sm:text-sm text-slate-300 font-medium shadow-md">
              &quot;Somos la mejor opción en ingeniería: Priorizamos la seguridad absoluta, la calidad certificada y el desarrollo integral de nuestro capital humano en cada operación minera e industrial.&quot;
            </div>
          </div>

          {/* Strategic Pillars Cards (Misión, Visión, Valores) */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
            <div className="bg-brand-titanium p-6 rounded-2xl border border-slate-800 hover:border-brand-gold/40 transition duration-300 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/30 text-brand-gold flex items-center justify-center text-xl font-bold mb-4">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="font-bold text-base text-white">Misión</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Diseñar, fabricar y suministrar soluciones en infraestructura metalmecánica para lograr la satisfacción de sus clientes, el desarrollo de sus colaboradores y el desarrollo social.
              </p>
            </div>

            <div className="bg-brand-titanium p-6 rounded-2xl border border-slate-800 hover:border-brand-gold/40 transition duration-300 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-petroleum/30 text-brand-gold flex items-center justify-center text-xl font-bold mb-4">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="font-bold text-base text-white">Visión</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Ser reconocidos como la empresa líder a nivel nacional en servicios de ingeniería, mantenimiento de plantas concentradoras, fabricación, montaje y mantenimiento de estructuras metalmecánicas.
              </p>
            </div>

            <div className="sm:col-span-2 glass-panel p-6 rounded-2xl text-white border border-slate-800">
              <h3 className="font-bold text-sm text-brand-gold mb-3 flex items-center gap-2">
                <i className="fa-solid fa-shield-heart"></i>
                <span>Valores Corporativos B2B</span>
              </h3>
              <p className="text-xs text-slate-300 mb-3">
                Fomento de la motivación, implicación, sentido de responsabilidad, afán de superación y orgullo profesional en todo nuestro personal.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Motivación e Implicación</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Sentido de Responsabilidad</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Afán de Superación</div>
                <div className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-gold"></i> Orgullo Profesional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Capital Humano (Equipment & Staff) */}
        <div className="squads-container mt-16 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">Equipo Humano Calificado</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">Capital Humano de Alto Rendimiento</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Staff multidisciplinario preparado para despliegue en unidades mineras e industriales con estándares internacionales de seguridad.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {squadData.map((squad, idx) => (
              <div 
                key={idx} 
                className="gsap-squad bg-brand-titanium p-5 rounded-2xl border border-slate-800 text-center hover:border-brand-gold transition duration-300 group custom-ring-hover">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-petroleum/40 text-brand-gold flex items-center justify-center text-xl font-bold mb-3 group-hover:scale-110 transition duration-300">
                  <i className={`fa-solid ${squad.icon}`}></i>
                </div>
                <h4 className="font-bold text-sm text-white">{squad.title}</h4>
                <p className="text-xs text-slate-400 mt-2">{squad.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
