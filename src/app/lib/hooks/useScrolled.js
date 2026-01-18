'use client'

import { useState, useEffect, useLayoutEffect } from 'react';

export function useScrolled(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  // useLayoutEffect выполняется после рендера, но перед отрисовкой
  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Инициализация
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}