'use client';

import React, { useState } from 'react';

interface ModalsProps {
  quoteModalOpen: boolean;
  quoteServiceName: string;
  onCloseQuoteModal: () => void;

  downloadModalOpen: boolean;
  downloadType: string;
  onCloseDownloadModal: () => void;

  policyModalOpen: boolean;
  policyType: string;
  onClosePolicyModal: () => void;

  onShowToast: (title: string, message: string) => void;
}

export default function Modals({
  quoteModalOpen,
  quoteServiceName,
  onCloseQuoteModal,
  downloadModalOpen,
  downloadType,
  onCloseDownloadModal,
  policyModalOpen,
  policyType,
  onClosePolicyModal,
  onShowToast,
}: ModalsProps) {
  const [serviceName, setServiceName] = useState(quoteServiceName);

  // Sync service name if provided
  React.useEffect(() => {
    setServiceName(quoteServiceName || 'Mantenimiento de Planta Concentradora / PDP');
  }, [quoteServiceName]);

  const handleModalQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCloseQuoteModal();
    onShowToast('Solicitud Enviada', 'Su requerimiento fue derivado a la gerencia comercial.');
  };

  const handleSimulateDownload = () => {
    onCloseDownloadModal();
    const link = document.createElement('a');
    if (downloadType === 'brochure') {
      link.href = '/documentos/BROCHURE.pdf';
      link.download = 'BROCHURE_GRUPO_GENOLG_2026.pdf';
    } else {
      link.href = '/documentos/BROCHURE.pdf';
      link.download = 'DOCUMENTO_GRUPO_GENOLG.pdf';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('Descarga Iniciada', 'El archivo PDF corporativo se ha descargado correctamente.');
  };

  let downloadTitle = 'Brochure Corporativo Oficial 2026';
  let downloadDesc = 'Capacidad instalada, flota y portafolio de ingeniería.';

  if (downloadType === 'bv') {
    downloadTitle = 'Certificado Bureau Veritas HP0017249';
    downloadDesc = 'Documento de homologación con nivel B';
  } else if (downloadType === 'minem') {
    downloadTitle = 'Registro MINEM R.D. 0288-2021';
    downloadDesc = 'Habilitación oficial para beneficio, exploración y explotación.';
  } else if (downloadType === 'ruc') {
    downloadTitle = 'Ficha RUC SUNAT 20608261894';
    downloadDesc = 'Constancia de RUC Activo y Habido para la orden de servicio.';
  }

  let policyTitle = 'Política Corporativa';
  let policyBody = 'GRUPO GENOLG MINERÍA & CONSTRUCCIÓN S.C.R.L. cumple rigurosamente con todos los lineamientos legales y éticos del sector.';

  if (policyType === 'antisoborno') {
    policyTitle = 'Política Antisoborno (ISO 37001)';
    policyBody = 'GRUPO GENOLG MINERÍA & CONSTRUCCIÓN S.C.R.L. prohíbe taxativamente cualquier acto de soborno o corrupción en licitaciones públicas y privadas. Contamos con una calificación del 98.00% en el Sistema Antisoborno en la auditoría de Bureau Veritas.';
  } else if (policyType === 'hse') {
    policyTitle = 'Política de Seguridad, Salud y Medio Ambiente (HSE)';
    policyBody = 'Cero tolerancia a actos e incidentes inseguros. Mantenemos el compromiso firme de preservar la integridad de nuestro personal y del entorno ambiental en todas las operaciones.';
  } else if (policyType === 'privacidad') {
    policyTitle = 'Política de Privacidad y Confidencialidad B2B';
    policyBody = 'La información remitida mediante nuestros formularios técnicos es tratada de manera estrictamente confidencial para fines exclusivos de evaluación de propuestas técnicas.';
  }

  return (
    <>
      {/* Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-brand-gold/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-industrial">
            <button 
              onClick={onCloseQuoteModal} 
              className="absolute top-5 right-5 text-slate-600 hover:text-white text-xl">
              <i className="fa-solid fa-xmark"></i>
            </button>

            <span className="text-brand-gold font-bold uppercase text-[10px] tracking-wider">Atención Comercial B2B</span>
            <h3 className="font-bold text-xl text-white mt-1">Solicitar Cotización de Servicio</h3>
            <p className="text-xs text-slate-600 mt-1 mb-5">Ingrese sus datos para derivar la solicitud directamente con la Gerencia Comercial.</p>

            <form onSubmit={handleModalQuoteSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Nombre Completo *</label>
                <input type="text" required placeholder="Ing. Juan Pérez" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-white/10 text-white focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Empresa / RUC *</label>
                  <input type="text" required placeholder="Compañía Minera" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-white/10 text-white focus:outline-none focus:border-brand-gold" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Teléfono *</label>
                  <input type="tel" required placeholder="+51 902 967 134" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-white/10 text-white focus:outline-none focus:border-brand-gold" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Servicio a Cotizar *</label>
                <input 
                  type="text" 
                  required 
                  value={serviceName} 
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-white/10 text-white focus:outline-none focus:border-brand-gold" 
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Detalle del Trabajo *</label>
                <textarea rows={3} required placeholder="Especificaciones o plazos estimados..." className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-white/10 text-white focus:outline-none focus:border-brand-gold"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-petroleum hover:bg-brand-darkPetroleum border border-brand-gold/40 text-white font-bold text-xs py-3.5 rounded-xl transition shadow-glow-petroleum mt-2">
                Enviar Requerimiento
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Download Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-brand-gold/30 rounded-3xl max-w-md w-full p-6 text-center relative shadow-industrial">
            <button 
              onClick={onCloseDownloadModal} 
              className="absolute top-4 right-4 text-slate-600 hover:text-white text-xl">
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-petroleum/40 border border-brand-gold/30 text-brand-gold flex items-center justify-center text-3xl font-bold mb-4 shadow-glow-petroleum">
              <i className="fa-solid fa-file-circle-check"></i>
            </div>
            
            <h3 className="font-bold text-lg text-white">{downloadTitle}</h3>
            <p className="text-xs text-slate-600 mt-2">{downloadDesc}</p>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl text-xs text-left space-y-1 text-slate-700 border border-white/10">
              <div><strong>Empresa:</strong> GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L.</div>
              <div><strong>RUC:</strong> 20608261894</div>
              <div><strong>Verificación:</strong> Documento Oficial SUNAT / MINEM / Bureau Veritas</div>
            </div>

            <button 
              onClick={handleSimulateDownload} 
              className="mt-6 w-full bg-brand-petroleum hover:bg-brand-darkPetroleum border border-brand-gold/40 text-white font-bold text-xs py-3.5 rounded-xl transition shadow-glow-petroleum">
              <i className="fa-solid fa-download mr-1"></i> Iniciar Descarga PDF
            </button>
          </div>
        </div>
      )}

      {/* Policy Modal */}
      {policyModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-brand-gold/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-industrial">
            <button 
              onClick={onClosePolicyModal} 
              className="absolute top-4 right-4 text-slate-600 hover:text-white text-xl">
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <h3 className="font-bold text-lg text-white mb-2">{policyTitle}</h3>
            <p className="text-xs text-slate-700 leading-relaxed space-y-2">{policyBody}</p>

            <button 
              onClick={onClosePolicyModal} 
              className="mt-6 w-full bg-brand-steel hover:bg-white text-white border border-white/10 font-bold text-xs py-3 rounded-xl transition">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
