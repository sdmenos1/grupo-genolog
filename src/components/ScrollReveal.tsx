'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = 'main section:not(.a4-page)';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );

    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => {
        section.dataset.scrollReveal = 'visible';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target as HTMLElement;
          section.dataset.scrollReveal = 'visible';
          observer.unobserve(section);
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    sections.forEach((section) => {
      const bounds = section.getBoundingClientRect();

      if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
        section.dataset.scrollReveal = 'visible';
        return;
      }

      section.dataset.scrollReveal = 'pending';
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        delete section.dataset.scrollReveal;
      });
    };
  }, [pathname]);

  return null;
}
