'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BrochureWebPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black">
      
      {/* Top Floating Navigation (Hidden on Print) */}
      <header className="sticky top-0 z-50 bg-brand-deepObsidian/90 backdrop-blur-md border-b border-slate-800 py-3 px-4 sm:px-8 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-brand-gold transition text-xs font-bold">
            <i className="fa-solid fa-arrow-left"></i>
            <span>Volver a la Web</span>
          </Link>
          <span className="text-slate-700">|</span>
          <span className="text-brand-gold text-xs font-extrabold uppercase tracking-wider hidden sm:inline">
            Brochure Corporativo Digital 2026
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum hover:from-brand-gold hover:to-brand-copper text-white text-xs font-bold px-4 py-2 rounded-xl border border-brand-gold/40 shadow-lg transition">
            <i className="fa-solid fa-print"></i>
            <span>Imprimir / Descargar PDF</span>
          </button>
        </div>
      </header>

      {/* BROCHURE CONTAINER (Formatted for Web & Print) */}
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-16 print:p-0 print:space-y-8">
        
        {/* PORTADA / COVER PAGE */}
        <section className="bg-gradient-to-b from-brand-titanium via-brand-deepObsidian to-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl print:border-none print:shadow-none print:bg-white print:text-black print:p-4">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-petroleum via-brand-gold to-brand-copper"></div>
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-slate-900 border-2 border-brand-gold/60 p-2 shadow-2xl flex items-center justify-center print:border-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.jpg" alt="Logo Grupo Genolg" className="w-full h-full object-contain rounded-2xl" />
            </div>
          </div>

          <span className="bg-brand-gold/10 border border-brand-gold/40 text-brand-gold font-extrabold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full inline-block mb-4 print:border-black print:text-black">
            Dossier Empresarial B2B — Versión 2026
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white print:text-black uppercase">
            GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L.
          </h1>
          <p className="text-brand-gold text-sm sm:text-base font-bold mt-2 tracking-wider print:text-black">
            RUC: 20608261894 | R.D. MINEM 0288-2021
          </p>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-normal print:text-black">
            Ingeniería de Detalle, Fabricación Metalmecánica, Montaje de Estructuras, Mantenimiento en Paradas de Planta (P.D.P) y Obras Civiles para la Minería e Industria del Perú.
          </p>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto text-left">
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Auditoría Internacional</div>
              <div className="text-sm font-extrabold text-brand-gold print:text-black">Bureau Veritas: 87.81%</div>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Habilitación Legal</div>
              <div className="text-sm font-extrabold text-white print:text-black">MINEM R.D. 0288-2021</div>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Estándar de Seguridad</div>
              <div className="text-sm font-extrabold text-white print:text-black">Cero Incidentes HSE</div>
            </div>
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Normativa Soldadura</div>
              <div className="text-sm font-extrabold text-brand-gold print:text-black">AWS D1.1 / ASME IX</div>
            </div>
          </div>
        </section>


        {/* SECCIÓN 1: PRESENTACIÓN INSTITUCIONAL */}
        <section className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-10 space-y-6 print:border-gray-300 print:bg-white print:text-black">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">01. Identidad Corporativa</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1 print:text-black">Quienes Somos</h2>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed print:text-black">
            <strong>GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L.</strong> es una empresa peruana especializada en la ejecución integral de servicios metalmecánicos y mantenimiento continuo en plantas concentradoras. Contamos con una amplia trayectoria operativa en la zona central y nacional del Perú, destacando por nuestra capacidad técnica de respuesta inmediata 24/7 en paradas de planta críticas.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2 print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-gold font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-bullseye"></i> Misión
              </div>
              <p className="text-xs text-slate-300 leading-relaxed print:text-black">
                Brindar soluciones de ingeniería, mantenimiento y montaje metalmecánico con los más altos estándares de calidad, seguridad y protección ambiental, superando las expectativas operativas de nuestros clientes mineros.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2 print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-gold font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-eye"></i> Visión
              </div>
              <p className="text-xs text-slate-300 leading-relaxed print:text-black">
                Consolidarnos como el contratista minero e industrial líder en el Perú en paradas de planta y fabricación de estructuras pesadas, reconocido por nuestra homologación internacional y cero incidentes.
              </p>
            </div>
          </div>
        </section>


        {/* SECCIÓN 2: PORTAFOLIO DE SERVICIOS */}
        <section className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-10 space-y-8 print:border-gray-300 print:bg-white print:text-black">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">02. Capacidades Operativas</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1 print:text-black">Nuestros Servicios Principales</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Servicio 1 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 print:border-gray-300 print:bg-gray-50">
              <div className="text-xs font-extrabold text-brand-gold uppercase">01. Ingeniería &amp; Diseño AutoCAD 3D</div>
              <h3 className="text-lg font-bold text-white print:text-black">Diseño en AutoCAD 3D &amp; Memoria de Cálculo</h3>
              <p className="text-xs text-slate-300 leading-relaxed print:text-black">
                Desarrollo de planos estructurales de detalle, despiece técnico y simulaciones de interferencias bajo normativas AISC y AWS D1.1 con firma de Ingenieros CIP.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 print:border-gray-300 print:bg-gray-50">
              <div className="text-xs font-extrabold text-brand-gold uppercase">02. Fabricación Metalmecánica</div>
              <h3 className="text-lg font-bold text-white print:text-black">Fabricación de Celdas, Cajones &amp; Chutes</h3>
              <p className="text-xs text-slate-300 leading-relaxed print:text-black">
                Fabricación de Celdas de Flotación OK-20, cajones de molienda y revestimiento con planchas antidesgastantes (Hardox) con soldadores homologados 3G a 6G.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 print:border-gray-300 print:bg-gray-50">
              <div className="text-xs font-extrabold text-brand-gold uppercase">03. Montaje de Estructuras</div>
              <h3 className="text-lg font-bold text-white print:text-black">Montaje Estructural &amp; Alta Tensión</h3>
              <p className="text-xs text-slate-300 leading-relaxed print:text-black">
                Montaje de naves industriales, plataformas, pasarelas de inspección, tendido de redes de alta tensión e maniobras de izaje crítico con grúas pesadas.
              </p>
            </div>

            {/* Servicio 4 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 print:border-gray-300 print:bg-gray-50">
              <div className="text-xs font-extrabold text-brand-gold uppercase">04. Mantenimiento &amp; PDP</div>
              <h3 className="text-lg font-bold text-white print:text-black">Paradas de Planta Concentradora (P.D.P)</h3>
              <p className="text-xs text-slate-300 leading-relaxed print:text-black">
                Intervención 24/7 en cambio de chaquetas en Molinos SAG 7&apos;x12&apos;, cambio de rodamientos de poleas Overland, Overhaul de chancadoras cónicas y sopladores.
              </p>
            </div>

          </div>
        </section>


        {/* SECCIÓN 3: TRABAJOS DESTACADOS & CLIENTES */}
        <section className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-10 space-y-6 print:border-gray-300 print:bg-white print:text-black">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">03. Experiencia Comprobada</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1 print:text-black">Trabajos Ejecutados</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 print:border-gray-300 print:bg-gray-50 print:text-black">
              <i className="fa-solid fa-check text-brand-gold"></i>
              <span>Servicio Molino 7&apos;x12&apos;: Cambio de Chaquetas del Interior</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 print:border-gray-300 print:bg-gray-50 print:text-black">
              <i className="fa-solid fa-check text-brand-gold"></i>
              <span>Parada de Planta Plomo y Zinc - Chancado</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 print:border-gray-300 print:bg-gray-50 print:text-black">
              <i className="fa-solid fa-check text-brand-gold"></i>
              <span>Celdas de Flotación en Planta Concentradora N°1</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 print:border-gray-300 print:bg-gray-50 print:text-black">
              <i className="fa-solid fa-check text-brand-gold"></i>
              <span>Overland: Cambio de Rodamiento de Polea</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 print:border-gray-300 print:bg-gray-50 print:text-black">
              <i className="fa-solid fa-check text-brand-gold"></i>
              <span>Izaje de Soplador Spencer &amp; Alineamiento</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 print:border-gray-300 print:bg-gray-50 print:text-black">
              <i className="fa-solid fa-check text-brand-gold"></i>
              <span>Montaje de Estructuras y Celdas de Flotación OK-20</span>
            </div>
          </div>
        </section>


        {/* SECCIÓN 4: CONTACTO & DATOS FISCALES */}
        <section className="bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-2xl print:bg-gray-900 print:text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-brand-gold font-bold text-xs uppercase tracking-wider">Contacto Comercial Directo</span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading mt-1">Solicite su Cotización B2B</h2>
              <p className="text-xs text-slate-200 mt-2 max-w-lg">
                Oficina Principal: Mza. C Lote 3 A.H. La Esperanza, Chaupimarca, Pasco. Atendemos proyectos a nivel nacional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto print:hidden">
              <a
                href="https://wa.me/51950302787?text=Hola%20Grupo%20Genolg,%20requiero%20cotizar%20un%20servicio%20desde%20su%20Brochure"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl border border-emerald-400 shadow-md flex items-center justify-center gap-2 transition">
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>WhatsApp Comercial</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/20 text-xs">
            <div>
              <div className="text-slate-300 text-[10px] uppercase font-bold">Teléfono de Operaciones</div>
              <div className="font-extrabold text-sm mt-0.5">+51 950 302 787</div>
            </div>
            <div>
              <div className="text-slate-300 text-[10px] uppercase font-bold">Correo Electrónico</div>
              <div className="font-extrabold text-sm mt-0.5">g_genolg_adrian@hotmail.com</div>
            </div>
            <div>
              <div className="text-slate-300 text-[10px] uppercase font-bold">Datos RUC / Razón Social</div>
              <div className="font-extrabold text-sm mt-0.5">20608261894 — GRUPO GENOLG</div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
