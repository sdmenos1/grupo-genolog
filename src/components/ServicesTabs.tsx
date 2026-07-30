'use client';

import React, { useState } from 'react';

interface ServicesTabsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function ServicesTabs({ onOpenQuoteModal }: ServicesTabsProps) {
  const [activeTab, setActiveTab] = useState('cat1');

  return (
    <section id="servicios" className="py-20 bg-brand-titanium border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Ingeniería &amp; Especialidades B2B</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-1">Catálogo Completo de Servicios &amp; Soluciones</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">&quot;Somos la mejor opción en ingeniería&quot; — Explore nuestras 4 categorías principales y las 10 líneas de trabajo garantizadas.</p>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <button 
            onClick={() => setActiveTab('cat1')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'cat1' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-compass-drafting mr-2 text-brand-gold"></i> 1. Diseño de Ingeniería (AutoCAD 3D)
          </button>

          <button 
            onClick={() => setActiveTab('cat2')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'cat2' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-industry mr-2 text-brand-gold"></i> 2. Fabricación Metalmecánica
          </button>

          <button 
            onClick={() => setActiveTab('cat3')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'cat3' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-helmet-safety mr-2 text-brand-gold"></i> 3. Montaje de Estructuras
          </button>

          <button 
            onClick={() => setActiveTab('cat4')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'cat4' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-gears mr-2 text-brand-gold"></i> 4. Mantenimiento Industrial
          </button>
        </div>

        {/* Tab Content Display */}
        <div>
          
          {/* Category 1: Diseño de Ingeniería */}
          {activeTab === 'cat1' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Categoría 1 — Innovación Tecnológica</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Diseño de Ingeniería de Detalle con Software AutoCAD 3D</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Desarrollo de ingeniería de detalle utilizando sistemas de última generación y software especializado <strong>AutoCAD 3D</strong> para la fabricación precisa y montaje de estructuras metalmecánicas.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-cube text-brand-gold mr-2"></i>Modelado 3D &amp; Despiece</div>
                    <p className="text-xs text-slate-400">Generación de planos de detalle, simulación de interferencias y listas de materiales exactas.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-calculator text-brand-gold mr-2"></i>Cálculo Estructural</div>
                    <p className="text-xs text-slate-400">Verificación de cargas, esfuerzos y momentos de inercia bajo norma AISC / AWS.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Diseño de Ingeniería AutoCAD 3D')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Diseño de Ingeniería
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Entregables de Ingeniería</h4>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Planos de fabricación y montaje aprobados por CIP.</li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Memoria de cálculo y especificaciones técnicas.</li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Archivos AutoCAD 3D / DWG / IFC.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Category 2: Fabricación Metalmecánica */}
          {activeTab === 'cat2' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Categoría 2 — Capacidad Taller &amp; Campo</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Fabricación Metalmecánica con Equipamiento de Soldadura Avanzado</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Suministro y fabricación de estructuras metalmecánicas adaptadas a todo tipo de proyectos industriales y mineros. Integramos equipos de soldadura ágiles y versátiles para acelerar procesos eficientemente.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-warehouse text-brand-gold mr-2"></i>Estructuras para Naves &amp; Plantas</div>
                    <p className="text-xs text-slate-400">Vigas de gran peralte, columnas, tijerales y puentes grúa.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Cercos Perimétricos Metálicos</div>
                    <p className="text-xs text-slate-400">Delimitación y protección física de operaciones, terrenos e instalaciones mineras.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Fabricación Metalmecánica')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Fabricación Metalmecánica
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Garantía de Soldadura WPS/PQR</h4>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Homologación bajo código AWS D1.1 y ASME IX.</li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Inspección NDT: Tintes Penetrantes (PT), Ultrasonido (UT) y Partículas Magnéticas (MT).</li>
                </ul>
              </div>
            </div>
          )}

          {/* Category 3: Montaje de Estructuras */}
          {activeTab === 'cat3' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Categoría 3 — Ejecución Rigurosa</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Montaje de Estructuras &amp; Seguridad Industrial Auditada</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Aplicación estricta de estándares de medición, seguridad industrial y controles de calidad con personal técnico especializado en izajes y alineación estructural.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-tower-cell text-brand-gold mr-2"></i>Redes de Alta Tensión &amp; Energía</div>
                    <p className="text-xs text-slate-400">Montaje y mantenimiento de estructuras para infraestructura energética y tendidos eléctricos.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-building text-brand-gold mr-2"></i>Plataformas &amp; Naves Industriales</div>
                    <p className="text-xs text-slate-400">Maniobras de izaje con grúas de alto tonelaje y torqueado neumático certificado.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Montaje de Estructuras')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Montaje de Estructuras
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Rigurosidad en Campo</h4>
                <p className="text-xs text-slate-300">
                  Supervisión permanente por ingenieros colegiados de seguridad HSE con permisos EPP / PETAR / ATS en vivo.
                </p>
              </div>
            </div>
          )}

          {/* Category 4: Mantenimiento Industrial */}
          {activeTab === 'cat4' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Categoría 4 — Disponibilidad Continua</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Mantenimiento Industrial, Paradas de Planta &amp; Overhaul</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Servicios de mantenimiento integral en plantas concentradoras, refuerzo de soldadura, mantenimiento eléctrico industrial, pintura de protección y reconstrucción mayor.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-wrench text-brand-gold mr-2"></i>Overhaul de Equipos Industriales</div>
                    <p className="text-xs text-slate-400">Reconstrucción, reparación mayor y optimización de maquinaria y componentes críticos.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-paint-roller text-brand-gold mr-2"></i>Pintura de Protección Industrial</div>
                    <p className="text-xs text-slate-400">Sistemas epóxicos y poliuretano para prolongar la vida útil de estructuras expuestas a corrosión.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Mantenimiento Industrial & Overhaul')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Mantenimiento Industrial
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Aseguramiento Operativo</h4>
                <p className="text-xs text-slate-300">
                  Planes de intervención diseñados para minimizar tiempos de parada y maximizar el OEE (Overall Equipment Effectiveness).
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Full 10 Solutions Grid Catalog */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">Catálogo Detallado de Trabajos</span>
            <h3 className="font-heading text-2xl font-bold text-white mt-1">10 Soluciones Especializadas en Minería &amp; Construcción</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-gears mr-1.5"></i>1. Plantas Concentradoras</div>
              <p className="text-slate-400">Inspección, reparación y aseguramiento operativo continuo en molienda y chancado.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-clock mr-1.5"></i>2. Paradas de Planta (P.D.P)</div>
              <p className="text-slate-400">Ejecución de intervenciones críticas durante paradas operativas en minería.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-bolt mr-1.5"></i>3. Eléctrico e Instrumentación</div>
              <p className="text-slate-400">Asistencia e instalación técnica en plantas industriales y motores.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-tower-broadcast mr-1.5"></i>4. Redes de Alta Tensión</div>
              <p className="text-slate-400">Montaje y mantenimiento de infraestructura energética y tendidos eléctricos.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-industry mr-1.5"></i>5. Estructuras Metálicas</div>
              <p className="text-slate-400">Fabricación y montaje para naves, plataformas y plantas concentradoras.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-shield mr-1.5"></i>6. Cercos Perimétricos</div>
              <p className="text-slate-400">Instalación, delimitación y protección física de terrenos y operaciones.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-rotate mr-1.5"></i>7. Overhaul de Equipos</div>
              <p className="text-slate-400">Reconstrucción, reparación mayor y optimización de maquinaria industrial.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-trowel-bricks mr-1.5"></i>8. Obras Civiles</div>
              <p className="text-slate-400">Ejecución de obras de infraestructura y cimentación para proyectos industriales.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-tree mr-1.5"></i>9. Cierre Ambiental</div>
              <p className="text-slate-400">Reforestación de áreas perturbadas y remediación de pasivos ambientales.</p>
            </div>

            <div className="bg-brand-deepObsidian p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 hover:border-brand-gold/50 transition">
              <div className="font-bold text-brand-gold"><i className="fa-solid fa-truck-monster mr-1.5"></i>10. Maquinaria &amp; Vías</div>
              <p className="text-slate-400">Excavación, movimiento de tierras, construcción y conservación de caminos.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
