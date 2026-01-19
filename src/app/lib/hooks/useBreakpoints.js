'use client'

import { useState, useEffect } from 'react';

const BREAKPOINTS = {
  mobile: 375,
  retinaMobile:900,   
  tablet: 1024,  
}

export function useBreakpoints() {

  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isRetinaMobile:false,
    isDesktop: false,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      setBreakpoints({
        isMobile: width < BREAKPOINTS.mobile,
        isRetinaMobile: width < BREAKPOINTS.retinaMobile,
        isTablet: width >= BREAKPOINTS.retinaMobile && width < BREAKPOINTS.tablet,
        isDesktop: width >= BREAKPOINTS.tablet,
        width,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
}