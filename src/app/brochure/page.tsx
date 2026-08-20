'use client';

import React from 'react';
import Link from 'next/link';

// Importamos el dataset completo de los 12 trabajos con sus imágenes reales de alta resolución
import { trabajosData } from '@/components/TrabajosRealizados';

export default function BrochureWebPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleDownloadPDF = () => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href = '/documentos/BROCHURE.pdf';
      link.download = 'BROCHURE_CORPORATIVO_GRUPO_GENOLG_2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-100 font-sans print:bg-white print:text-black">
      
      {/* Barra de Navegación Flotante Superior (Oculta al imprimir) */}
      <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-md border-b border-slate-200 py-3 px-4 sm:px-8 flex items-center justify-between print:hidden shadow-xl">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-brand-gold transition text-xs font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <i className="fa-solid fa-arrow-left text-brand-gold"></i>
            <span>Volver a la Web</span>
          </Link>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <span className="text-brand-gold text-xs font-extrabold uppercase tracking-wider hidden md:inline flex items-center gap-2">
            <i className="fa-solid fa-book-open"></i> Brochure Corporativo Digital 2026 — GRUPO GENOLG
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/documentos/BROCHURE.pdf"
            download="BROCHURE_CORPORATIVO_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-petroleum to-brand-darkPetroleum hover:from-brand-gold hover:to-brand-copper text-white text-xs font-extrabold px-4 py-2 rounded-xl border border-brand-gold/40 shadow-lg transition">
            <i className="fa-solid fa-download"></i>
            <span>Descargar PDF</span>
          </a>
        </div>
      </header>


      {/* CONTENEDOR PRINCIPAL DEL DOSSIER CORPORATIVO */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-16 print:p-0 print:space-y-8">
        
        {/* SLIDE 1: PORTADA CORPORATIVA B2B */}
        <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl print:border-none print:shadow-none print:bg-white print:text-black print:p-4">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-petroleum via-brand-gold to-brand-copper"></div>
          
          {/* Logo Oficial GG */}
          <div className="flex justify-center mb-8">
            <div className="bg-white px-6 py-4 rounded-3xl border-2 border-slate-200 shadow-sm inline-block max-w-md w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/logo.png" 
                alt="Logo GRUPO GENOLG MINERÍA & CONSTRUCCIÓN" 
                className="w-full h-auto max-h-24 sm:max-h-28 object-contain"
              />
            </div>
          </div>

          <span className="bg-white border border-slate-200 text-brand-petroleum font-extrabold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm print:border-black print:text-black">
            &quot;SOMOS LA MEJOR OPCIÓN EN INGENIERÍA&quot; — DOSSIER CORPORATIVO 2026
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900 print:text-black uppercase">
            GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L.
          </h1>
          <p className="text-brand-petroleum text-sm sm:text-base font-bold mt-2 tracking-wider print:text-black">
            RUC: 20608261894 | REGISTRO MINEM R.D. 0288-2021 | HOMOLOGADO BUREAU VERITAS
          </p>

          <p className="text-slate-700 text-sm sm:text-base max-w-3xl mx-auto mt-6 leading-relaxed font-normal print:text-black">
            Empresa peruana especializada en la ejecución de proyectos metalmecánicos, montaje de estructuras, mantenimiento mecánico en paradas de planta (P.D.P), sistemas eléctricos e instrumentación para los principales sectores mineros e industriales.
          </p>

          {/* Tarjetas de Acreditaciones Destacadas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto text-left">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Auditoría Internacional</div>
              <div className="text-sm font-extrabold text-brand-petroleum print:text-black">Bureau Veritas</div>
              <div className="text-[10px] text-slate-500 mt-1">Informe HP0017249 (Nivel B)</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Habilitación Legal</div>
              <div className="text-sm font-extrabold text-slate-900 print:text-black">MINEM R.D. 0288-2021</div>
              <div className="text-[10px] text-slate-500 mt-1">Registro Contratista Minero</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Estándar HSE &amp; Calidad</div>
              <div className="text-sm font-extrabold text-slate-900 print:text-black">Cero Incidentes</div>
              <div className="text-[10px] text-slate-500 mt-1">Norma ISO 14001 Ambiental</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Calificación Soldadura</div>
              <div className="text-sm font-extrabold text-brand-petroleum print:text-black">AWS D1.1 / ASME IX</div>
              <div className="text-[10px] text-slate-500 mt-1">Soldadores 3G a 6G</div>
            </div>
          </div>
        </section>


        {/* SLIDE 2: PRESENTACIÓN INSTITUCIONAL & OBJETIVOS */}
        <section className="bg-slate-50/90 rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6 print:border-gray-300 print:bg-white print:text-black">
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
            <div>
              <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">01. Perfil Corporativo</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1 print:text-black">Misión, Visión y Compromisos</h2>
            </div>
            <span className="text-slate-600 font-mono text-xs hidden sm:inline">GRUPO GENOLG S.C.R.L.</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-petroleum font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-flag"></i> Nuestra Misión
              </div>
              <p className="text-xs text-slate-700 leading-relaxed print:text-black">
                Satisfacer plenamente las necesidades de nuestros clientes mineros e industriales mediante la continua innovación tecnológica, capacitación del talento humano y estricto respeto ambiental, garantizando la eficiencia operativa y productividad de cada unidad minera intervenida.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-petroleum font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-eye"></i> Nuestra Visión
              </div>
              <p className="text-xs text-slate-700 leading-relaxed print:text-black">
                Posicionarnos como la empresa líder y referente a nivel nacional en la ejecución de proyectos metalmecánicos, mantenimiento de plantas y montajes industriales, reconocidos por nuestros altos estándares de calidad, seguridad y compromiso sostenible.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-sm print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-petroleum font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-gem"></i> Valores
              </div>
              <ul className="space-y-2 text-xs text-slate-700 print:text-black">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-brand-gold"></i> Integridad y Ética Operativa
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-brand-gold"></i> Compromiso con la Excelencia
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-brand-gold"></i> Trabajo en Equipo Efectivo
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-brand-gold"></i> Innovación y Mejora Continua
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-sm print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-petroleum font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-bullseye"></i> Compromisos B2B
              </div>
              <ul className="space-y-2 text-[11px] sm:text-xs text-slate-700 print:text-black">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-brand-gold mt-0.5"></i>
                  <span><strong>Eficiencia:</strong> Reducción de tiempos en P.D.P.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-brand-gold mt-0.5"></i>
                  <span><strong>Disponibilidad:</strong> Cuadrillas operativas 24/7.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-brand-gold mt-0.5"></i>
                  <span><strong>Calidad:</strong> Dossier y certificaciones NDT.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-sm print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-petroleum font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-shield-cat"></i> Seguridad HSE
              </div>
              <ul className="space-y-2 text-[11px] sm:text-xs text-slate-700 print:text-black">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-brand-gold mt-0.5"></i>
                  <span><strong>Cero Incidentes:</strong> PETS, IPERC, Charlas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-brand-gold mt-0.5"></i>
                  <span><strong>ISO 14001:</strong> Residuos y cuidado ambiental.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-brand-gold mt-0.5"></i>
                  <span><strong>ISO 37001:</strong> Gestión antisoborno auditada.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* SLIDE 9: ORGANIGRAMA & PERSONAL TÉCNICO HOMOLOGADO */}
        <section className="bg-slate-50/90 rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6 print:border-gray-300 print:bg-white print:text-black">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">02. Talento Humano &amp; Especialidades</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1 print:text-black">Organigrama Técnico Operativo</h2>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed print:text-black">
            Contamos con personal altamente especializado en maniobras de alto riesgo, mantenimiento mecánico, calderería e izajes críticos en minería de socavón y tajo abierto:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-user-gear text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Técnico Mecánico</div>
                <div className="text-[10px] text-slate-500">Especialista Planta</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-helmet-safety text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Mecánico Montajista</div>
                <div className="text-[10px] text-slate-500">Montajes Pesados</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-cubes text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Mecánico Andamiero</div>
                <div className="text-[10px] text-slate-500">Norma Layher/OSHA</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-oil-can text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Mecánico Lubricador</div>
                <div className="text-[10px] text-slate-500">Tribología &amp; Aceites</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-fire text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Mecánico Calderero</div>
                <div className="text-[10px] text-slate-500">Trazos &amp; Habilitado</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-crosshairs text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Mecánico Alineador</div>
                <div className="text-[10px] text-slate-500">Alineamiento Láser</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-burst text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Soldador 3G, 4G, 5G, 6G</div>
                <div className="text-[10px] text-slate-500">SMAW, GTAW, FCAW</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm print:bg-gray-100 print:border-gray-300 print:text-black">
              <i className="fa-solid fa-users text-brand-gold text-base"></i>
              <div>
                <div className="font-bold text-slate-900 print:text-black">Ayudante Soldador</div>
                <div className="text-[10px] text-slate-500">Soporte Operativo</div>
              </div>
            </div>
          </div>
        </section>


        {/* SLIDES 11-22: CATÁLOGO COMPLETO DE LOS 12 TRABAJOS REALIZADOS (CON FOTOS REALES) */}
        <section className="space-y-10">
          <div className="bg-slate-50/90 rounded-3xl border border-slate-200 p-8 sm:p-10 print:border-gray-300 print:bg-white print:text-black">
            <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">03. Portafolio de Campo</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading mt-1 print:text-black">
              Trabajos Realizados &amp; Operaciones en Vivo
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed print:text-black">
              A continuación presentamos la evidencia fotográfica y ficha técnica de los 12 principales proyectos ejecutados en plantas concentradoras e instalaciones mineras:
            </p>
          </div>

          {/* Bucle dinámico por cada uno de los 12 proyectos reales */}
          <div className="space-y-12">
            {trabajosData.map((trabajo, idx) => (
              <div 
                key={trabajo.id}
                className="bg-slate-50/80 rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-8 space-y-6 print:border-gray-300 print:bg-white print:text-black print:break-inside-avoid">
                
                {/* Header del Trabajo */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-brand-gold/10 border border-brand-gold/40 text-brand-petroleum font-extrabold text-[10px] px-2.5 py-0.5 rounded-md uppercase">
                        {trabajo.shortCode}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading leading-snug print:text-black">
                      {trabajo.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 flex-shrink-0">
                    {trabajo.badges.map((b, bIdx) => (
                      <span key={bIdx} className="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm print:border-gray-300 print:bg-gray-100 print:text-black">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed print:text-black">
                  {trabajo.description}
                </p>

                {/* Galería de Fotografías Reales del Proyecto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {trabajo.galleryImages.map((imgUrl, imgIdx) => (
                    <div key={imgIdx} className="relative aspect-video rounded-2xl overflow-hidden bg-white border border-slate-200 group shadow-sm print:border-gray-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={imgUrl} 
                        alt={`${trabajo.title} - Foto ${imgIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded">
                        Foto Real Campo #{imgIdx + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Entregables Técnicos */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2 shadow-sm print:border-gray-300 print:bg-gray-50">
                  <span className="text-[11px] font-bold text-brand-petroleum uppercase tracking-wider print:text-black">Entregables Técnicos Certificados:</span>
                  <div className="grid sm:grid-cols-3 gap-2 text-xs text-slate-700 print:text-black">
                    {trabajo.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <i className="fa-solid fa-check-double text-brand-gold text-xs"></i>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>


        {/* SLIDES 23-24: TALLER & ALMACÉN DE HERRAMIENTAS */}
        <section className="bg-slate-50/90 rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6 print:border-gray-300 print:bg-white print:text-black">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">04. Infraestructura &amp; Equipamiento</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1 print:text-black">Taller de Fabricación &amp; Almacén</h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed print:text-black">
            Contamos con taller propio equipado con máquinas de soldar de alta frecuencia, corte por oxicorte y plasma, prensas hidráulicas de 100Tn, torqueadoras neumáticas calibradas y stock permanente de EPPs normados para respuesta inmediata.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-gold font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-warehouse"></i> Equipamiento de Taller
              </div>
              <ul className="space-y-2 text-xs text-slate-700 print:text-black">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-brand-gold"></i>
                  <span>Máquinas de soldar Miller / Lincoln (FCAW, SMAW, GTAW).</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-brand-gold"></i>
                  <span>Equipos de oxicorte automatizado y corte por plasma.</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-brand-gold"></i>
                  <span>Prensas hidráulicas de 100 Toneladas y esmeriles industriales.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 print:border-gray-300 print:bg-gray-50">
              <div className="text-brand-gold font-bold text-sm flex items-center gap-2 print:text-black">
                <i className="fa-solid fa-toolbox"></i> Almacén &amp; Logística
              </div>
              <ul className="space-y-2 text-xs text-slate-700 print:text-black">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-brand-gold"></i>
                  <span>Torqueadoras neumáticas HYTORC y llaves de impacto.</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-brand-gold"></i>
                  <span>Tecles de cadena de 1.5Tn a 10Tn con certificado vigente.</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-brand-gold"></i>
                  <span>Arneses de seguridad, líneas de vida y detectores de gas.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* SLIDE: NUESTROS CLIENTES */}
        <section className="bg-slate-50/90 rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6 print:border-gray-300 print:bg-white print:text-black">
          <div className="border-b border-slate-200 pb-4 text-center sm:text-left">
            <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">05. Respaldo Comercial</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1 print:text-black">Nuestros Clientes</h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-2">
              Empresas mineras líderes e instituciones que confían en las operaciones de GRUPO GENOLG.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/clientes.png" 
              alt="Nuestros Clientes Mineros" 
              className="w-full h-auto max-h-[380px] object-contain"
            />
          </div>
        </section>


        {/* SLIDE FINAL: INFORMACIÓN FISCAL & COTIZACIÓN B2B */}
        <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm print:bg-gray-50 print:border-gray-300 print:text-black">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-brand-petroleum font-extrabold text-xs uppercase tracking-widest">Atención Comercial Minera 24/7</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900">Contrate Nuestros Servicios</h2>
              <p className="text-xs sm:text-sm text-slate-700 max-w-xl leading-relaxed">
                Oficina Principal: Av. TUPAC AMARU N° 3747 Comas - Lima. Operaciones continuas a nivel nacional en unidades mineras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto print:hidden">
              <a
                href="https://wa.me/51950302787?text=Hola%20Grupo%20Genolg,%20estoy%20revisando%20el%20Brochure%20Oficial%202026%20y%20deseo%20solicitar%20una%20cotizacion."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-6 py-4 rounded-2xl border border-emerald-400 shadow-md flex items-center justify-center gap-2 transition">
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>WhatsApp Comercial</span>
              </a>

              <a
                href="/documentos/BROCHURE.pdf"
                download="BROCHURE_CORPORATIVO_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-brand-petroleum font-black text-xs px-6 py-4 rounded-2xl border border-slate-300 shadow-sm flex items-center justify-center gap-2 transition">
                <i className="fa-solid fa-download text-base"></i>
                <span>Descargar PDF</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200 text-xs">
            <div>
              <div className="text-slate-500 text-[10px] uppercase font-bold">Teléfono Directo</div>
              <div className="font-extrabold text-slate-900 text-sm mt-0.5">+51 950 302 787</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase font-bold">Correo Institucional</div>
              <div className="font-extrabold text-slate-900 text-sm mt-0.5">g_genolg_adrian@hotmail.com</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase font-bold">Razón Social &amp; RUC</div>
              <div className="font-extrabold text-slate-900 text-sm mt-0.5">20608261894 — GRUPO GENOLG</div>
            </div>
          </div>

          {/* TARJETA DE GERENCIA GENERAL - RÉPLICA DE DISEÑO */}
          <div className="mt-8 pt-8 border-t border-slate-200 print:border-gray-300">
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12 shadow-xl shadow-slate-200/50 print:shadow-none print:border-gray-400">
              {/* Logo */}
              <div className="flex-shrink-0 bg-white p-4 rounded-2xl border-2 border-slate-100 flex items-center justify-center w-full max-w-[280px] md:w-72 shadow-sm print:border-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/logo.png" 
                  alt="Logo GRUPO GENOLG MINERÍA & CONSTRUCCIÓN" 
                  className="w-full h-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Información de Contacto (Gerencia) */}
              <div className="flex flex-col justify-center space-y-3 text-center md:text-left pt-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading uppercase tracking-tight print:text-black drop-shadow-sm whitespace-nowrap">
                  Ing. Teofilo Frank Sanchez T.
                </h3>
                <p className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-700 uppercase tracking-widest print:text-black">
                  Gerente General – Grupo Genolg
                </p>
                <div className="pt-2">
                  <a href="mailto:gerencia@grupogenolg.com" className="text-lg sm:text-xl lg:text-2xl text-blue-600 hover:text-blue-800 hover:underline font-bold transition print:text-blue-700 drop-shadow-sm">
                    gerencia@grupogenolg.com
                  </a>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 print:text-black pt-1">
                  Cel. 950843157 – 902967134
                </p>
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}
