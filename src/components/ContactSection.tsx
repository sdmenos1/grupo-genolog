'use client';



import React, { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';



interface ContactSectionProps {

  onShowToast: (title: string, message: string) => void;

}



export default function ContactSection({ onShowToast }: ContactSectionProps) {

  const [fileName, setFileName] = useState('Adjuntar TDR / Especificación (PDF/Zip)');

  const sectionRef = useRef<HTMLDivElement | null>(null);



  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);



    const ctx = gsap.context(() => {

      const items = sectionRef.current?.querySelectorAll('.gsap-contact-item');

      if (items) {

        gsap.fromTo(

          items,

          { opacity: 0, y: 35 },

          {

            opacity: 1,

            y: 0,

            duration: 0.85,

            stagger: 0.2,

            ease: 'power2.out',

            scrollTrigger: {

              trigger: sectionRef.current,

              start: 'top 80%',

            },

          }

        );

      }

    }, sectionRef);



    return () => ctx.revert();

  }, []);



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    onShowToast('Requerimiento Recibido', 'Un ingeniero de proyectos se pondrá en contacto en menos de 24 horas.');

    (e.target as HTMLFormElement).reset();

    setFileName('Adjuntar TDR / Especificación (PDF/Zip)');

  };



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files && e.target.files[0]) {

      setFileName(e.target.files[0].name);

    }

  };



  return (

    <section ref={sectionRef} id="contacto" className="py-20 bg-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        

        <div className="grid lg:grid-cols-12 gap-12">

          

          {/* Form Column */}

          <div className="gsap-contact-item lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-executive">

            <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">Atención B2B Licitaciones y Contratos</span>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Solicitud de Cotización y Requerimiento Técnico</h2>

            <p className="text-xs text-slate-600 mt-1 mb-6">Complete los campos para recibir una propuesta técnica y económica formal en menos de 24 horas.</p>



            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">

                <div>

                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">N°ombre y Apellidos *</label>

                  <input id="name" name="name" type="text" required placeholder="Ing. Roberto Mendoza" className="w-full text-xs px-4 py-3 rounded-xl bg-slate-100 border border-slate-300/60 text-slate-900 focus:outline-none focus:border-brand-gold transition" />

                </div>

                <div>

                  <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1">Empresa / Razón Social *</label>

                  <input id="company" name="company" type="text" required placeholder="Compañía Minera S.A.A." className="w-full text-xs px-4 py-3 rounded-xl bg-slate-100 border border-slate-300/60 text-slate-900 focus:outline-none focus:border-brand-gold transition" />

                </div>

              </div>



              <div className="grid sm:grid-cols-2 gap-4">

                <div>

                  <label htmlFor="ruc" className="block text-xs font-semibold text-slate-700 mb-1">RUC de la Empresa *</label>

                  <input id="ruc" name="ruc" type="text" maxLength={11} required placeholder="20123456789" className="w-full text-xs px-4 py-3 rounded-xl bg-slate-100 border border-slate-300/60 text-slate-900 focus:outline-none focus:border-brand-gold transition" />

                </div>

                <div>

                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">Correo Corporativo *</label>

                  <input id="email" name="email" type="email" required placeholder="rmendoza@minera.com" className="w-full text-xs px-4 py-3 rounded-xl bg-slate-100 border border-slate-300/60 text-slate-900 focus:outline-none focus:border-brand-gold transition" />

                </div>

              </div>



              <div className="grid sm:grid-cols-2 gap-4">

                <div>

                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">Teléfono / WhatsApp *</label>

                  <input id="phone" name="phone" type="tel" required placeholder="+51 902 967 134" className="w-full text-xs px-4 py-3 rounded-xl bg-slate-100 border border-slate-300/60 text-slate-900 focus:outline-none focus:border-brand-gold transition" />

                </div>

                <div>

                  <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1">Tipo de Servicio Requerido *</label>

                  <select id="service" name="service" required className="w-full text-xs px-4 py-3 rounded-xl bg-slate-100 border border-slate-300/60 text-slate-900 focus:outline-none focus:border-brand-gold transition">

                    <option value="">Seleccione una especialidad...</option>

                    <option value="Mantenimiento de Planta Concentradora / PDP">Mantenimiento de Planta Concentradora / Parada de Planta (P.D.P)</option>

                    <option value="Fabricación y Montaje Metalmecánico">Fabricación y Montaje Metalmecánico</option>

                    <option value="Redes Eléctricas e Instrumentación">Redes Eléctricas, Instrumentación y Alta Tensión</option>

                    <option value="Obras Civiles en Mina">Obras Civiles e Infraestructura en Mina</option>

                    <option value="Maquinaria Pesada y Cierre Ambiental">Maquinaria Pesada y Cierre Ambiental</option>

                  </select>

                </div>

              </div>



              <div>

                <label htmlFor="details" className="block text-xs font-semibold text-slate-700 mb-1">Detalle del Trabajo o Alcances *</label>

                <textarea id="details" name="details" rows={4} required placeholder="Describa el alcance de la parada de planta, ubicación de mina, cantidad de técnicos requeridos y plazos estimados..." className="w-full text-xs px-4 py-3 rounded-xl bg-slate-100 border border-slate-300/60 text-slate-900 focus:outline-none focus:border-brand-gold transition"></textarea>

              </div>



              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">

                <div className="w-full sm:w-auto">

                  <label className="cursor-pointer inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-100 text-slate-700 border border-slate-300 px-4 py-3 rounded-xl text-xs font-semibold transition">

                    <i className="fa-solid fa-paperclip text-brand-gold"></i>

                    <span>{fileName}</span>

                    <input id="attachment" name="attachment" type="file" className="hidden" onChange={handleFileChange} />

                  </label>

                </div>

                

                <button type="submit" className="w-full sm:w-auto bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-extrabold text-xs px-8 py-3.5 rounded-xl border border-brand-gold/40 shadow-md transition duration-300">

                  <i className="fa-solid fa-paper-plane mr-1.5"></i> Enviar Requerimiento Técnico

                </button>

              </div>

            </form>

          </div>



          {/* Locations */}

          <div className="gsap-contact-item lg:col-span-5 space-y-6">

            <div className="bg-slate-100 p-7 rounded-3xl border border-slate-200 space-y-4">

              <span className="text-brand-gold font-bold text-xs uppercase tracking-wider">Sedes Corporativas &amp; Operativas</span>

              <h3 className="font-heading text-xl font-bold text-slate-900">Canales Oficiales de Atención</h3>



              <div className="space-y-4 text-xs text-slate-700 pt-2">

                <div className="flex items-start gap-3.5">

                  <div className="w-10 h-10 rounded-xl bg-brand-petroleum text-brand-gold border border-brand-darkPetroleum flex items-center justify-center text-lg font-bold flex-shrink-0">

                    <i className="fa-solid fa-location-dot"></i>

                  </div>

                  <div>

                    <div className="font-bold text-slate-900 text-sm">Sede Central Lima</div>

                    <div className="text-slate-600 mt-0.5">Av. TUPAC AMARU N° 3747 Comas - Lima.</div>

                  </div>

                </div>



                <div className="flex items-start gap-3.5">

                  <div className="w-10 h-10 rounded-xl bg-brand-petroleum text-brand-gold border border-brand-darkPetroleum flex items-center justify-center text-lg font-bold flex-shrink-0">

                    <i className="fa-solid fa-industry"></i>

                  </div>

                  <div>

                    <div className="font-bold text-slate-900 text-sm">Sede Operativa Pasco</div>

                    <div className="text-slate-600 mt-0.5">Av. Los Incas N° 405, Chaupimarca, Cerro de Pasco - Perú.</div>

                  </div>

                </div>



                <div className="flex items-start gap-3.5">

                  <div className="w-10 h-10 rounded-xl bg-brand-petroleum text-brand-gold border border-brand-darkPetroleum flex items-center justify-center text-lg font-bold flex-shrink-0">

                    <i className="fa-solid fa-envelope"></i>

                  </div>

                  <div>

                    <div className="font-bold text-slate-900 text-sm">Correos Electrónicos</div>

                    <div className="text-slate-600 mt-0.5">gerencia@grupogenolg.com | administración@grupogenolg.com</div>

                  </div>

                </div>



                <div className="flex items-start gap-3.5">

                  <div className="w-10 h-10 rounded-xl bg-brand-petroleum text-brand-gold border border-brand-darkPetroleum flex items-center justify-center text-lg font-bold flex-shrink-0">

                    <i className="fa-solid fa-phone"></i>

                  </div>

                  <div>

                    <div className="font-bold text-slate-900 text-sm">Línea Directa Comercial</div>

                    <div className="text-slate-600 mt-0.5">+51 902 967 134 (Atención 24/7 para emergencias de parada)</div>

                  </div>

                </div>

              </div>

            </div>



            {/* Direct WhatsApp B2B Card */}

            <div className="bg-brand-petroleum p-6 rounded-3xl border border-brand-darkPetroleum flex items-center justify-between shadow-xl">

              <div>

                <div className="text-xs text-brand-gold font-bold uppercase">Respuesta Inmediata</div>

                <div className="text-sm font-bold text-white mt-0.5">Atención Comercial por WhatsApp</div>

                <div className="text-xs text-slate-300 mt-1">Conéctese directamente con la Gerencia Comercial.</div>

              </div>

              <a href="https://wa.me/51902967134?text=Estimados%20GRUPO%20GENOLG,%20requiero%20atenci%C3%B3n%20para%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-lg transition duration-300 flex-shrink-0">

                <i className="fa-brands fa-whatsapp"></i>

              </a>

            </div>



          </div>



        </div>

      </div>

    </section>

  );

}

