'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    if (pathname) {
      setTransitionStage('fadeOut');
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [pathname, children]);

  return (
    <div
      className={`transition-all duration-300 ease-out transform ${
        transitionStage === 'fadeIn'
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-2 scale-[0.99]'
      }`}>
      {displayChildren}
    </div>
  );
}
