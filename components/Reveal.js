'use client';

import { useEffect, useRef, useState } from 'react';

const variants = {
  up: { hidden: 'opacity-0 translate-y-8', shown: 'opacity-100 translate-y-0' },
  left: { hidden: 'opacity-0 -translate-x-8', shown: 'opacity-100 translate-x-0' },
  right: { hidden: 'opacity-0 translate-x-8', shown: 'opacity-100 translate-x-0' },
  scale: { hidden: 'opacity-0 scale-95', shown: 'opacity-100 scale-100' },
  fade: { hidden: 'opacity-0', shown: 'opacity-100' },
};

export default function Reveal({ children, className = '', delay = 0, variant = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const v = variants[variant] || variants.up;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal transition-all duration-700 ease-out ${visible ? v.shown : v.hidden} ${className}`}
    >
      {children}
    </div>
  );
}
