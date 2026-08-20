'use client';

import React from 'react';
import { trabajosData } from '@/components/TrabajosRealizados';

export default function BrochurePrintPage() {
  // 2 trabajos por página para mayor respiro y diseño premium
  const trabajosPerPage = 2;
  const portafolioPages = [];
  for (let i = 0; i < trabajosData.length; i += trabajosPerPage) {
    portafolioPages.push(trabajosData.slice(i, i + trabajosPerPage));
  }

  // Imágenes para la portada
  const portadaImg1 = trabajosData[0]?.galleryImages[0] || '/images/logo.png';
  const portadaImg2 = trabajosData[1]?.galleryImages[0] || '/images/logo.png';
  const portadaImg3 = trabajosData[2]?.galleryImages[0] || '/images/logo.png';

  const clientes = ['PAN AMERICAN', 'VOLCAN', 'NEXA', 'GLENCORE', 'EL BROCAL', 'MILPO'];

  return (
    <div className="bg-gray-200 min-h-screen py-8 print:py-0 print:bg-white font-sans text-slate-900">
      
      {/* PÁGINA 1: PORTADA */}
      <section className="a4-page flex flex-col relative bg-white overflow-hidden">
        {/* Top section with Logo - MUCH LARGER */}
        <div className="w-full pt-20 pb-4 flex justify-center z-10 bg-white relative">
           <img src="/images/logo.png" alt="Logo" className="w-auto h-72 object-contain relative z-20 drop-shadow-xl" />
        </div>
        
        {/* Middle Band with Geometrics */}
        <div className="relative w-full h-[450px] flex items-center justify-center mt-6">
          {/* Orange Band */}
          <div className="absolute top-[10%] left-0 w-full h-[35%] bg-[#F28C28] z-0"></div>
          {/* Teal Band */}
          <div className="absolute top-[40%] left-0 w-full h-[60%] bg-[#006979] z-0"></div>
          
          {/* Hexagonal Images overlapping */}
          <div className="flex gap-2 z-10 relative px-4 w-full justify-center items-center h-full">
             {/* Left Hex */}
             <div className="w-[240px] h-[270px] clip-hexagon bg-white overflow-hidden relative flex justify-center items-center">
                <div className="w-[220px] h-[250px] clip-hexagon overflow-hidden">
                   <img src={portadaImg1} className="w-full h-full object-cover scale-110" alt="Portada 1"/>
                </div>
             </div>
             {/* Center Hex */}
             <div className="w-[300px] h-[340px] clip-hexagon bg-white overflow-hidden relative z-20 flex justify-center items-center shadow-2xl">
                <div className="w-[280px] h-[320px] clip-hexagon overflow-hidden">
                   <img src={portadaImg2} className="w-full h-full object-cover scale-110" alt="Portada 2"/>
                </div>
             </div>
             {/* Right Hex */}
             <div className="w-[240px] h-[270px] clip-hexagon bg-white overflow-hidden relative flex justify-center items-center">
                <div className="w-[220px] h-[250px] clip-hexagon overflow-hidden">
                   <img src={portadaImg3} className="w-full h-full object-cover scale-110" alt="Portada 3"/>
                </div>
             </div>
          </div>
        </div>

        {/* Website band */}
        <div className="w-full bg-[#006979] text-center text-white py-6 z-10 clip-diagonal mb-[-40px] pb-16">
           <h2 className="text-4xl font-bold tracking-wide">www.grupogenolg.com</h2>
        </div>

        {/* Bottom Text Area */}
        <div className="flex-1 w-full bg-slate-50 flex items-center justify-center p-12 text-center relative z-0 mt-8">
           <div className="relative z-10 space-y-4">
              <h1 className="text-[32px] font-black text-[#006979] leading-tight uppercase">
                SOMOS LA MEJOR OPCIÓN EN INGENIERÍA<br/>
                SERVICIO DE MANTENIMIENTO MECÁNICO<br/>
                ELÉCTRICO E INSTRUMENTACIÓN<br/>
                PARA LA MINERÍA Y CONSTRUCCIÓN
              </h1>
           </div>
        </div>
      </section>

      {/* PÁGINA 2: PERFIL CORPORATIVO */}
      <section className="a4-page flex flex-col bg-[#F9FAFB] relative overflow-hidden justify-between py-10">
        {/* Header Banner */}
        <div className="w-full bg-[#006979] text-white pt-10 pb-8 px-16 clip-chevron-right relative z-10 shadow-lg">
           <h1 className="text-center text-4xl font-black tracking-wide">
             NOSOTROS<br/>
             <span className="text-[#F28C28]">GRUPO GENOLG</span>
           </h1>
        </div>

        {/* Top Text Content */}
        <div className="px-16 py-3 relative z-10">
           <p className="text-base text-center text-slate-800 font-medium leading-relaxed max-w-3xl mx-auto">
             Somos una empresa dedicada a la <strong>ejecución de proyectos metal mecánica, mantenimiento en plantas concentradoras e industriales</strong> para los principales sectores de la economía, privadas y públicas a través de la continua innovación tecnológica, humana de procesos y respeto por el medio ambiente.
           </p>
        </div>

        {/* VISIÓN */}
        <div className="relative w-full flex flex-row items-center justify-between px-8">
           {/* Left Content (Banner + Box expanded to touch the hexagon) */}
           <div className="flex-1 pr-2 z-10">
             <div className="bg-[#006979] text-white py-3 px-10 clip-chevron-right w-full shadow-md mb-2">
               <h2 className="text-2xl font-black tracking-wider">VISIÓN</h2>
             </div>
             <div className="bg-white border-l-4 border-[#006979] p-4 shadow-md rounded-r-lg">
               <p className="text-[13px] text-slate-700 leading-relaxed text-justify">
                 Ser reconocidos como la empresa líder a nivel nacional en servicios de ingeniería, mantenimientos de plantas concentradoras del sector minero, fabricación montaje y mantenimiento de estructuras metal mecánicas, con altos estándares de seguridad, calidad y cumplimiento.
               </p>
             </div>
           </div>

           {/* Decorational Hex right */}
           <div className="z-20 w-[270px] h-[300px] clip-hexagon bg-[#006979] flex items-center justify-center shadow-xl flex-shrink-0 -ml-4">
             <div className="w-[250px] h-[280px] clip-hexagon bg-slate-200 overflow-hidden">
                <img src={trabajosData[4]?.galleryImages[0] || portadaImg1} className="w-full h-full object-cover scale-110" alt="Visión"/>
             </div>
           </div>
        </div>

        {/* MISIÓN */}
        <div className="relative w-full flex flex-row-reverse items-center justify-between px-8">
           {/* Right Content (Banner + Box expanded to touch the hexagon) */}
           <div className="flex-1 pl-2 z-10 text-right">
             <div className="bg-[#F28C28] text-white py-3 px-10 clip-chevron-left w-full shadow-md mb-2 flex justify-end">
               <h2 className="text-2xl font-black tracking-wider text-right">MISIÓN</h2>
             </div>
             <div className="bg-white border-r-4 border-[#F28C28] p-4 shadow-md rounded-l-lg text-right">
               <p className="text-[13px] text-slate-700 leading-relaxed text-justify" style={{textAlignLast: 'right'}}>
                 Diseñar, fabricar y suministrar soluciones en infraestructura metal mecánica obteniendo la satisfacción de nuestros clientes, el desarrollo de nuestros colaboradores y el desarrollo social.
               </p>
             </div>
           </div>

           {/* Decorational Hex left */}
           <div className="z-20 w-[270px] h-[300px] clip-hexagon bg-[#F28C28] flex items-center justify-center shadow-xl flex-shrink-0 -mr-4">
             <div className="w-[250px] h-[280px] clip-hexagon bg-slate-200 overflow-hidden">
                <img src={trabajosData[5]?.galleryImages[0] || portadaImg2} className="w-full h-full object-cover scale-110" alt="Misión"/>
             </div>
           </div>
        </div>

        {/* VALORES */}
        <div className="relative w-full px-8 pb-2">
           <div className="bg-[#006979] text-white py-2.5 px-10 clip-chevron-right inline-block shadow-md mb-2">
             <h2 className="text-2xl font-black tracking-wider">VALORES</h2>
           </div>
           <div className="bg-white border-l-4 border-[#006979] p-4 shadow-md rounded-r-lg max-w-4xl">
             <p className="text-[13px] text-slate-700 leading-relaxed">
               Fomentamos su motivación e implicación. Creemos en el sentido de la responsabilidad, en su afán de superación y en su orgullo profesional.
             </p>
           </div>
        </div>
      </section>

      {/* PÁGINAS DE PORTAFOLIO (2 por página, grandes) */}
      {portafolioPages.map((pageGroup, pageIdx) => (
        <section key={pageIdx} className="a4-page flex flex-col bg-white relative overflow-hidden">
          
          <div className="w-full bg-[#006979] text-white pt-12 pb-8 px-16 clip-chevron-right relative z-10 shadow-lg">
             <h1 className="text-3xl font-black tracking-wide">
               REALIZAMOS:
             </h1>
          </div>

          <div className="flex flex-col flex-1 justify-center gap-12 py-10">
            {pageGroup.map((trabajo, idx) => {
              const isEven = idx % 2 === 0;
              
              if (isEven) {
                // Layout: Hexagon on Left, Banner and text on Right
                return (
                  <div key={idx} className="flex flex-row relative h-[420px] w-full items-center">
                    {/* Hexagon on Left - LARGER */}
                    <div className="absolute left-6 z-20 w-[380px] h-[430px] clip-hexagon bg-[#F28C28] flex justify-center items-center shadow-xl">
                      <div className="w-[360px] h-[410px] clip-hexagon overflow-hidden">
                         <img src={trabajo.galleryImages[0]} className="w-full h-full object-cover scale-110"/>
                      </div>
                    </div>

                    {/* Content on Right */}
                    <div className="w-full ml-[230px] pl-[140px] relative z-10 flex flex-col justify-center">
                       <div className="bg-[#F28C28] clip-chevron-left py-5 px-10 mb-4 w-full shadow-lg relative z-20">
                          <h3 className="text-white text-[20px] font-black uppercase leading-tight pl-12 pr-8">{trabajo.title}</h3>
                       </div>
                       
                       {/* Boxed Text Area */}
                       <div className="bg-slate-50 border-l-4 border-[#F28C28] p-6 pr-12 shadow-md ml-12 mr-8 rounded relative z-10">
                          <p className="text-[14px] text-slate-700 leading-relaxed mb-4 text-justify">{trabajo.description}</p>
                          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                             {trabajo.highlights.slice(0, 4).map((h, hIdx) => (
                               <li key={hIdx} className="text-[12px] text-slate-700 flex items-start gap-2 font-medium">
                                 <i className="fa-solid fa-check text-[#F28C28] mt-1"></i> <span className="leading-snug">{h}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                  </div>
                );
              } else {
                // Layout: Hexagon on Right, Banner and text on Left
                return (
                  <div key={idx} className="flex flex-row relative h-[420px] w-full items-center">
                    {/* Content on Left */}
                    <div className="w-full mr-[230px] pr-[140px] relative z-10 flex flex-col justify-center text-right">
                       <div className="bg-[#006979] clip-chevron-right py-5 px-10 mb-4 w-full flex justify-end shadow-lg relative z-20">
                          <h3 className="text-white text-[20px] font-black uppercase leading-tight pr-12 pl-8 text-right">{trabajo.title}</h3>
                       </div>
                       
                       {/* Boxed Text Area */}
                       <div className="bg-slate-50 border-r-4 border-[#006979] p-6 pl-12 shadow-md mr-12 ml-8 rounded relative z-10 text-right">
                          <p className="text-[14px] text-slate-700 leading-relaxed mb-4 text-justify" style={{textAlignLast: 'right'}}>{trabajo.description}</p>
                          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-left pl-4">
                             {trabajo.highlights.slice(0, 4).map((h, hIdx) => (
                               <li key={hIdx} className="text-[12px] text-slate-700 flex items-start gap-2 font-medium">
                                 <i className="fa-solid fa-check text-[#006979] mt-1"></i> <span className="leading-snug">{h}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                    </div>

                    {/* Hexagon on Right - LARGER */}
                    <div className="absolute right-6 z-20 w-[380px] h-[430px] clip-hexagon bg-[#006979] flex justify-center items-center shadow-xl">
                      <div className="w-[360px] h-[410px] clip-hexagon overflow-hidden">
                         <img src={trabajo.galleryImages[0]} className="w-full h-full object-cover scale-110"/>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>
      ))}

      {/* PÁGINA FINAL: CLIENTES Y CONTACTO */}
      <section className="a4-page flex flex-col bg-[#F9FAFB] relative overflow-hidden">
        
        {/* Clientes Section */}
        <div className="flex-1 py-10 px-16 relative z-10 flex flex-col items-center justify-center">
           <div className="w-full bg-[#006979] text-white py-4 clip-chevron-right inline-block text-center shadow-md px-16 mb-8 max-w-xl mx-auto block">
             <h2 className="text-3xl font-black uppercase tracking-widest">NUESTROS CLIENTES</h2>
           </div>
           
           <div className="w-full max-w-4xl bg-white rounded-3xl p-8 shadow-xl border border-slate-200 flex items-center justify-center">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src="/images/clientes.png" 
               alt="Nuestros Clientes Mineros" 
               className="w-full h-auto object-contain max-h-[440px]"
             />
           </div>
        </div>

        {/* Contacto Section */}
        <div className="h-[45%] w-full bg-[#006979] relative flex flex-col px-16 py-12 text-white overflow-hidden">
           <div className="absolute top-[-30px] left-0 bg-[#F28C28] text-white py-4 px-16 clip-chevron-right shadow-xl">
             <h2 className="text-4xl font-black tracking-widest pt-8">CONTACTOS:</h2>
           </div>

           <div className="mt-12 flex justify-between h-full relative z-10">
              <div className="space-y-6 max-w-sm w-[60%]">
                <div>
                  <h3 className="text-2xl font-black mb-1">DIRECCIÓN:</h3>
                  <p className="text-xl">Av. TUPAC AMARU N° 3747<br/>Comas - Lima</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1 text-[#F28C28]">Página Web:</h3>
                  <p className="text-lg">www.grupogenolg.com</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1 text-[#F28C28]">E-mail:</h3>
                  <p className="text-lg">supervisor@grupogenolg.com</p>
                </div>

                <div>
                  <h3 className="text-2xl font-black mb-1">TELÉFONOS:</h3>
                  <p className="text-2xl font-bold">+51 950 843 157<br/>+51 902 967 134</p>
                </div>
              </div>
              
              {/* Decorative Hex Image for Contact */}
              <div className="absolute right-[-40px] bottom-[-40px] w-[350px] h-[400px] clip-hexagon bg-[#006979] flex items-center justify-center z-0">
                <div className="w-[330px] h-[380px] clip-hexagon bg-slate-200 overflow-hidden shadow-2xl">
                  <img src={portadaImg3} className="w-full h-full object-cover scale-110"/>
                </div>
              </div>
           </div>
        </div>

      </section>

    </div>
  );
}
