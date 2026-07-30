'use client';

import React from 'react';

interface FooterProps {
  onOpenPolicyModal: (type: string) => void;
}

export default function Footer({ onOpenPolicyModal }: FooterProps) {
  return (
    <footer className="bg-brand-deepObsidian text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-100/95 p-2.5 rounded-2xl border border-brand-gold/40 inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="GRUPO GENOLG Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              <strong>GRUPO GENOLG (Minería &amp; Construcción)</strong> — &quot;Somos la mejor opción en ingeniería&quot;. Ejecución de proyectos metalmecánicos, montaje y mantenimiento en plantas concentradoras con innovación tecnológica y respeto ambiental.
            </p>
            <div className="text-slate-400 text-[11px]">
              RUC: <strong className="text-white">20608261894</strong> | MINEM R.D. N° 0288-2021-MINEM/DGM
            </div>
          </div>

          {/* Column 2: Servicios Principales */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 text-brand-gold">Servicios Principales</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-white transition">Diseño de Ingeniería AutoCAD 3D</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Fabricación Metalmecánica</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Montaje de Estructuras</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Mantenimiento Industrial &amp; PDP</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Overhaul de Equipos Industriales</a></li>
            </ul>
          </div>

          {/* Column 3: Soluciones B2B */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 text-brand-gold">Soluciones B2B</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-white transition">Redes de Alta Tensión</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Cercos Perimétricos Metálicos</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Ejecución de Obras Civiles</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Cierre de Minas &amp; Remediación</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Maquinaria Pesada &amp; Vías</a></li>
            </ul>
          </div>

          {/* Column 4: Políticas & Certificaciones */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 text-brand-gold">Políticas &amp; Cumplimiento</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenPolicyModal('antisoborno')} className="hover:text-white transition text-left">
                  Sistema Anti-Soborno ISO 37001
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('hse')} className="hover:text-white transition text-left">
                  Política de Seguridad HSE
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('homologacion')} className="hover:text-white transition text-left">
                  Homologación Bureau Veritas (87.81%)
                </button>
              </li>
              <li>
                <a href="#acreditaciones" className="hover:text-white transition">
                  Registro de Contratistas MINEM
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <span>Lima — Carabayllo</span>
            <span>Pasco — Chaupimarca</span>
            <span>Atención 24/7 en Mina</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
