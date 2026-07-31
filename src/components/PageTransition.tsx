'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (transitionRef.current) {
      // Elegante animación GSAP al cambiar de ruta (Solo Fade-in para evitar saltos en layout)
      gsap.fromTo(
        transitionRef.current,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.5, 
          ease: 'power2.out',
          clearProps: 'opacity'
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
