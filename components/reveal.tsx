"use client";

import { useEffect, useRef, useState } from 'react';

function useReducedMotion() {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setShouldReduce(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return shouldReduce;
}

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (shouldReduce) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.22 });
    observer.observe(el);

    return () => observer.disconnect();
  }, [shouldReduce]);

  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(16px)' }}>
      {children}
    </div>
  );
}
