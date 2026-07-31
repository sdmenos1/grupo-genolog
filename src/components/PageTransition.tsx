'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (transitionRef.current) {
      // Elegante animación GSAP al cambiar de ruta
      gsap.fromTo(
        transitionRef.current,
        { opacity: 0, y: 15, scale: 0.995 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          ease: 'power3.out',
          clearProps: 'all' // Limpiar para evitar problemas de z-index o overflow posteriores
        }
      );
    }
  }, [pathname]);

  return (
    <div ref={transitionRef} className="w-full">
      {children}
    </div>
  );
}
