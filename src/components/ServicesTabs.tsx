'use client';

import React, { useState } from 'react';

interface ServicesTabsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function ServicesTabs({ onOpenQuoteModal }: ServicesTabsProps) {
  const [activeTab, setActiveTab] = useState('pilar1');

  return (
    <section id="servicios" className="py-20 bg-brand-titanium border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Capacidades Operativas de Gran Ingeniería</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-1">Catálogo de Servicios Técnicos</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">Seleccione una especialidad para examinar alcances y entregables garantizados.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <button 
            onClick={() => setActiveTab('pilar1')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'pilar1' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-gears mr-2 text-brand-gold"></i> 1. Plantas Concentradoras &amp; PDP
          </button>

          <button 
            onClick={() => setActiveTab('pilar2')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'pilar2' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-industry mr-2"></i> 2. Fabricación Metalmecánica
          </button>

          <button 
            onClick={() => setActiveTab('pilar3')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'pilar3' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-bolt mr-2"></i> 3. Redes Eléctricas &amp; Izaje
          </button>

          <button 
            onClick={() => setActiveTab('pilar4')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'pilar4' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-helmet-safety mr-2"></i> 4. Obras Civiles en Mina
          </button>

          <button 
            onClick={() => setActiveTab('pilar5')} 
            className={`font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition duration-300 ${
              activeTab === 'pilar5' 
                ? 'bg-brand-petroleum text-white border border-brand-gold/40 shadow-md' 
                : 'bg-brand-steel text-slate-300 hover:text-white border border-slate-800'
            }`}>
            <i className="fa-solid fa-truck-monster mr-2"></i> 5. Maquinaria &amp; Cierre
          </button>
        </div>

        {/* Tab Content Container */}
        <div>
          
          {/* Pilar 1 */}
          {activeTab === 'pilar1' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Pilar 1 - Operación Crítica</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Mantenimiento de Plantas Concentradoras &amp; Paradas de Planta (P.D.P)</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Intervención especializada en componentes de molienda, chancado y flotación, optimizando tiempos de inactividad con cero desviaciones en seguridad.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Cambio de Chaquetas en Molinos</div>
                    <p className="text-xs text-slate-400">Desmontaje y montaje de revestimientos de acero al manganeso y caucho en Molinos SAG y de Bolas (e.g. Molino 7&apos;x12&apos;).</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Chancadoras Cónicas y Quijada</div>
                    <p className="text-xs text-slate-400">Overhaul integral, cambio de cóncavos, mantos, bocinas de bronce y sistemas hidráulicos.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Fajas Transportadoras Overland</div>
                    <p className="text-xs text-slate-400">Cambio de polines, alineación de poleas motrices, reemplazo de rodamientos SKF/FAG y vulcanizado.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Celdas Flotación &amp; Espesadores</div>
                    <p className="text-xs text-slate-400">Mantenimiento de mecanismos de agitación, rotores, estatores y overhaul estructural.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Mantenimiento de Planta Concentradora / PDP')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Servicio de Parada de Planta
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Entregables y Garantía PDP</h4>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Plan de trabajo detallado por horas (Gantt Operativo).</li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Dossier de Calidad e Inspección NDT (Ensayos No Destructivos).</li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Certificados de torqueado hidráulico y alineación láser.</li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-brand-gold mt-0.5"></i> Informe diario de avance físico y curva S.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Pilar 2 */}
          {activeTab === 'pilar2' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Pilar 2 - Estructuras Metálicas</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Fabricación &amp; Montaje Metalmecánico de Alta Precisión</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Soluciones estructurales a medida con modelado de ingeniería en AutoCAD 3D y control de calidad estricto bajo normas AWS D1.1 y ASME.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Celdas de Flotación OK-20</div>
                    <p className="text-xs text-slate-400">Fabricación en taller, izaje y montaje con tintes penetrantes y ultrasonido al 100%.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Cajones de Molienda &amp; Chutes</div>
                    <p className="text-xs text-slate-400">Revestimiento con planchas antidesgastantes (Hardox / Creusabro).</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Modelado AutoCAD 3D</div>
                    <p className="text-xs text-slate-400">Planos de detalle, simulación de cargas y despiece estructurado.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Naves &amp; Plataformas</div>
                    <p className="text-xs text-slate-400">Estructuras metálicas, puentes grúa y pasarelas de mantenimiento bajo AWS D1.1.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Fabricación y Montaje Metalmecánico')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Fabricación Metalmecánica
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Calificación de Soldadura</h4>
                <p className="text-xs text-slate-300">
                  Procedimientos WPS y PQR aprobados para soldadores homologados en posiciones 3G a 6G.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-xs font-bold text-brand-gold">AWS D1.1</span>
                  <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-xs font-bold text-brand-gold">ASME Sec. IX</span>
                  <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-xs font-bold text-brand-gold">SMAW/GTAW/FCAW</span>
                </div>
              </div>
            </div>
          )}

          {/* Pilar 3 */}
          {activeTab === 'pilar3' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Pilar 3 - Energía e Izaje</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Redes Eléctricas, Instrumentación &amp; Maniobras de Izaje</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Infraestructura eléctrica de potencia e izaje crítico para equipos industriales en plantas concentradoras.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Mantenimiento de Motores</div>
                    <p className="text-xs text-slate-400">Diagnóstico, megado, pruebas de aislamiento y mantenimiento de motores de gran potencia.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Izaje de Precisión (Soplador Spencer)</div>
                    <p className="text-xs text-slate-400">Maniobras complejas para sopladores de aire, transformadores y tableros MCC.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Líneas de Alta / Media Tensión</div>
                    <p className="text-xs text-slate-400">Tendido de redes, montaje de subestaciones y pozos a tierra en altura geográfica.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Instrumentación de Planta</div>
                    <p className="text-xs text-slate-400">Calibración de sensores de nivel, flujo, presión y automatización PLC.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Redes Eléctricas e Instrumentación')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Servicio Eléctrico / Izaje
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Seguridad Eléctrica LOTO</h4>
                <p className="text-xs text-slate-300">
                  Cumplimiento riguroso de procedimientos de Bloqueo y Etiquetado (Lockout/Tagout) en media y alta tensión.
                </p>
              </div>
            </div>
          )}

          {/* Pilar 4 */}
          {activeTab === 'pilar4' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Pilar 4 - Infraestructura Minera</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Obras Civiles e Infraestructura en Unidades Mineras</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Infraestructura civil de concreto armado y estructuras modulares diseñadas para resistir condiciones climáticas extremas.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Muros de Contención (Muro 1.5M)</div>
                    <p className="text-xs text-slate-400">Construcción de muros ciclópeos y armados para estabilización de taludes.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Losas de Concreto Armado</div>
                    <p className="text-xs text-slate-400">Cimentaciones para maquinaria pesada con aditivos de alta resistencia temprana.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Campamentos &amp; Módulos</div>
                    <p className="text-xs text-slate-400">Habilitación de módulos habitacionales, comedores y oficinas con aislación térmica.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Obras Civiles en Mina')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Obras Civiles
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Control Geotécnico y Calidad</h4>
                <p className="text-xs text-slate-300">
                  Pruebas de esclerometría, rotura de probetas de concreto y certificados de ensayo geotécnico.
                </p>
              </div>
            </div>
          )}

          {/* Pilar 5 */}
          {activeTab === 'pilar5' && (
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 font-bold text-xs px-3.5 py-1 rounded-full uppercase">Pilar 5 - Sostenibilidad</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Maquinaria Pesada, Movimiento de Tierras &amp; Cierre Ambiental</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Operaciones de flota pesada para preservación de accesos, perfilado de botaderos y restauración de pasivos ambientales.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Movimiento de Tierras</div>
                    <p className="text-xs text-slate-400">Excavaciones, conformación de botaderos y nivelación de plataformas en mina.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Mantenimiento de Vías</div>
                    <p className="text-xs text-slate-400">Afirmado, cuneteado y preservación de accesos mineros en zonas de alta montaña.</p>
                  </div>
                  <div className="bg-brand-steel/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-sm text-white mb-1"><i className="fa-solid fa-circle-dot text-brand-gold mr-2"></i>Cierre de Minas &amp; Reforestación</div>
                    <p className="text-xs text-slate-400">Recuperación ambiental, coberturas orgánicas y revegetación nativa.</p>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Maquinaria Pesada y Cierre Ambiental')} 
                  className="inline-flex items-center gap-2 bg-brand-petroleum hover:bg-brand-darkPetroleum text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-brand-gold/40 transition shadow-md">
                  <i className="fa-solid fa-calculator"></i> Cotizar Maquinaria / Cierre
                </button>
              </div>

              <div className="lg:col-span-5 bg-brand-deepObsidian p-7 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-base text-brand-gold border-b border-slate-800 pb-2">Gestión Ambiental ISO 14001</h4>
                <p className="text-xs text-slate-300">
                  Intervenciones sostenibles respetando los Límites Máximos Permisibles (LMP) y compromisos comunitarios.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
