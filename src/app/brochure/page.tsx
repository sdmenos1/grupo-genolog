'use client';

import React from 'react';
import styles from './brochure.module.css';
import Image from 'next/image';

// Importamos el dataset completo de los 12 trabajos con sus imágenes reales de alta resolución
import { trabajosData } from '@/components/TrabajosRealizados';

export default function BrochureWebPage() {
  return (
    <div className={styles.brochure}>
      
      <section className={styles.hero} aria-labelledby="brochure-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>GRUPO GENOLG <span aria-hidden="true">/</span> Brochure corporativo 2026</p>
            <h1 id="brochure-title">Capacidad técnica.<br /><span>Experiencia en campo.</span></h1>
            <p className={styles.heroDescription}>Ingeniería, mantenimiento y construcción para la industria minera. Conozca nuestro equipo, capacidad operativa y proyectos ejecutados.</p>
            <div className={styles.heroActions}>
              <a href="/documentos/BROCHURE.pdf" download="BROCHURE_CORPORATIVO_2026.pdf" className={styles.primaryButton}>
                <i aria-hidden="true" className="fa-solid fa-arrow-down" /> Descargar brochure PDF
              </a>
              <a href="#brochure-proyectos" className={styles.secondaryButton}>Explorar proyectos <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.heroFootnote}><span>Minería &amp; construcción</span><span>Perú · Edición 2026</span></div>
          </div>
          <figure className={styles.coverImage}>
            <Image src={trabajosData[0].galleryImages[0]} alt="Equipo de trabajo interviniendo un molino en planta" fill priority sizes="(max-width: 800px) 100vw, 45vw" />
            <figcaption><span className={styles.photoNumber}>01 / 12</span><div><strong>Ingeniería en acción</strong><span>Mantenimiento de molino · Fotografía de campo</span></div></figcaption>
          </figure>
        </div>
      </section>
      <nav className={styles.contentsNav} aria-label="Contenido del brochure">
        <div><span className={styles.indexLabel}>En este brochure</span>{[
          ['perfil', '01', 'Empresa'], ['equipo', '02', 'Equipo'], ['proyectos', '03', 'Proyectos'],
          ['capacidad', '04', 'Infraestructura'], ['clientes', '05', 'Clientes'], ['contacto', '06', 'Contacto'],
        ].map(([id, number, label]) => <a key={id} href={`#brochure-${id}`}><span>{number}</span>{label}</a>)}</div>
      </nav>
      <div id="contenido-brochure" className={styles.content}>
        <section className={styles.introduction} aria-label="Presentación de la empresa">
          <div><p className={styles.sectionLabel}>Una mirada a nuestra empresa</p><h2>Un equipo. Múltiples especialidades.</h2><p>GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L. es una empresa peruana especializada en proyectos metalmecánicos, montaje de estructuras, mantenimiento en paradas de planta, sistemas eléctricos e instrumentación.</p></div>
          <dl className={styles.credentials}>
            <div><dt>Homologación empresarial</dt><dd>Bureau Veritas</dd><span>Informe HP0017249 · Nivel B</span></div>
            <div><dt>Registro de contratista minero</dt><dd>MINEM</dd><span>R.D. 0288-2021 · RUC 20608261894</span></div>
            <div><dt>Calificación de soldadura</dt><dd>AWS D1.1 / ASME IX</dd><span>Soldadores 3G a 6G</span></div>
          </dl>
        </section>

        {/* SLIDE 2: PRESENTACIÓN INSTITUCIONAL & OBJETIVOS */}
        <section id="brochure-perfil" className={styles.chapter}>
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
            <div>
              <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">01. Perfil Corporativo</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1 print:text-black">El compromiso detrás de cada proyecto</h2>
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
        <section id="brochure-equipo" className={styles.teamChapter}>
          <div className="border-b border-slate-200 pb-4">
            <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">02. Talento Humano &amp; Especialidades</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1 print:text-black">Especialistas para cada operación</h2>
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
        <section id="brochure-proyectos" className={styles.projectsChapter}>
          <div className="bg-slate-50/90 rounded-3xl border border-slate-200 p-8 sm:p-10 print:border-gray-300 print:bg-white print:text-black">
            <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">03. Portafolio de Campo</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading mt-1 print:text-black">
              Experiencia que se ve en cada proyecto
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
                className={styles.projectCard}>
                
                {/* Header del Trabajo */}
                <div className={styles.projectHeading}>
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
                <div className={styles.projectGallery}>
                  {trabajo.galleryImages.map((imgUrl, imgIdx) => (
                    <div key={imgIdx} className="relative aspect-video rounded-2xl overflow-hidden bg-white border border-slate-200 group shadow-sm print:border-gray-300">
                      <Image
                        src={imgUrl} 
                        alt={`${trabajo.title} - Foto ${imgIdx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded">
                        {String(imgIdx + 1).padStart(2, '0')} / Registro en campo
                      </div>
                    </div>
                  ))}
                </div>

                {/* Entregables Técnicos */}
                <div className={styles.deliverables}>
                  <span className="text-[11px] font-bold text-brand-petroleum uppercase tracking-wider print:text-black">Alcance de la intervención</span>
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
        <section id="brochure-capacidad" className={styles.chapter}>
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
        <section id="brochure-clientes" className={styles.chapter}>
          <div className="border-b border-slate-200 pb-4 text-center sm:text-left">
            <span className="text-brand-petroleum text-xs font-bold uppercase tracking-wider">05. Respaldo Comercial</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1 print:text-black">Nuestros Clientes</h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-2">
              Empresas mineras líderes e instituciones que confían en las operaciones de GRUPO GENOLG.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex items-center justify-center">
            <Image
              src="/images/clientes.png" 
              alt="Nuestros Clientes Mineros" 
              width={977}
              height={484}
              className="w-full h-auto max-h-[380px] object-contain"
            />
          </div>
        </section>


        {/* SLIDE FINAL: INFORMACIÓN FISCAL & COTIZACIÓN B2B */}
        <section id="brochure-contacto" className={styles.contactChapter}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-brand-petroleum font-extrabold text-xs uppercase tracking-widest">Atención Comercial Minera 24/7</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900">Conversemos sobre su próximo proyecto.</h2>
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
                <Image
                  src="/images/logo.png" 
                  alt="Logo GRUPO GENOLG MINERÍA & CONSTRUCCIÓN" 
                  width={300}
                  height={120}
                  className="w-full h-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Información de Contacto (Gerencia) */}
              <div className="flex flex-col justify-center space-y-3 text-center md:text-left pt-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading uppercase tracking-tight print:text-black drop-shadow-sm">
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
    </div>
  );
}
