'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onOpenPolicyModal: (policyType: string) => void;
}

export default function Footer({ onOpenPolicyModal }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Logo & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative bg-white p-2 rounded-xl border border-brand-gold/40 inline-block shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="GRUPO GENOLG MINERÍA & CONSTRUCCIÓN"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-slate-300 font-bold text-sm">
              &quot;Somos la mejor opción en ingeniería&quot;
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L. (RUC 20608261894). Ejecución de proyectos metalmecánicos, montaje de estructuras y mantenimiento en plantas concentradoras e industriales.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <span className="bg-brand-petroleum/40 text-brand-gold border border-brand-gold/30 px-3 py-1 rounded-full font-bold">
                MINEM R.D. 0288-2021
              </span>
              <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/40 px-3 py-1 rounded-full font-bold">
                Bureau Veritas 87.81%
              </span>
            </div>
          </div>

          {/* Col 2: Navegación Corporativa */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider border-b border-slate-800 pb-2">Secciones Web</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-brand-gold transition">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-brand-gold transition">Nosotros &amp; Capital Humano</Link></li>
              <li><Link href="/servicios" className="hover:text-brand-gold transition">Servicios de Ingeniería</Link></li>
              <li><Link href="/acreditaciones" className="hover:text-brand-gold transition">Acreditaciones &amp; MINEM</Link></li>
              <li><Link href="/proyectos" className="hover:text-brand-gold transition">Clientes &amp; Proyectos</Link></li>
              <li><Link href="/descargas" className="hover:text-brand-gold transition">Centro de Descargas B2B</Link></li>
              <li><Link href="/contacto" className="hover:text-brand-gold transition">Contacto &amp; Sedes</Link></li>
            </ul>
          </div>

          {/* Col 3: Servicios Principales */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider border-b border-slate-800 pb-2">Especialidades</h4>
            <ul className="space-y-2">
              <li><Link href="/servicios" className="hover:text-brand-gold transition">Diseño AutoCAD 3D</Link></li>
              <li><Link href="/servicios" className="hover:text-brand-gold transition">Fabricación Metalmecánica</Link></li>
              <li><Link href="/servicios" className="hover:text-brand-gold transition">Montaje de Estructuras</Link></li>
              <li><Link href="/servicios" className="hover:text-brand-gold transition">Paradas de Planta (P.D.P)</Link></li>
              <li><Link href="/servicios" className="hover:text-brand-gold transition">Overhaul de Equipos</Link></li>
              <li><Link href="/servicios" className="hover:text-brand-gold transition">Obras Civiles &amp; Remediación</Link></li>
            </ul>
          </div>

          {/* Col 4: Sedes & Políticas Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider border-b border-slate-800 pb-2">Cumplimiento Legal</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenPolicyModal('antisoborno')} className="hover:text-brand-gold transition text-left">
                  Política Antisoborno (ISO 37001)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('hse')} className="hover:text-brand-gold transition text-left">
                  Política de Seguridad &amp; Salud HSE
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('calidad')} className="hover:text-brand-gold transition text-left">
                  Política de Calidad &amp; Garantía CIP
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicyModal('privacidad')} className="hover:text-brand-gold transition text-left">
                  Protección de Datos Personales
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} GRUPO GENOLG MINERÍA &amp; CONSTRUCCIÓN S.C.R.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>RUC: 20608261894</span>
            <span>•</span>
            <span>MINEM R.D. 0288-2021</span>
            <span>•</span>
            <span>Bureau Veritas HP0017249</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
