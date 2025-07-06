"use client";
import { useEffect, useState, useCallback } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkIsMobile();
    
    // Throttle resize events to improve performance
    let timeoutId: NodeJS.Timeout;
    const throttledCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 100);
    };
    
    window.addEventListener("resize", throttledCheck);
    return () => {
      window.removeEventListener("resize", throttledCheck);
      clearTimeout(timeoutId);
    };
  }, [checkIsMobile]);

  return isMobile;
};
