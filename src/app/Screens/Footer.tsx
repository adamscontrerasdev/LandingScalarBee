"use client";
import { FooterContent } from "../components";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const fatherRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  const [restaPadding, setRestaPadding] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!fatherRef.current) return;
      const top = fatherRef.current.getBoundingClientRect().top;
      setTop(top);

      // Invertimos el cálculo para que el padding disminuya conforme te acercas a top 0
      const paddingAdjustment = Math.min(top / 20); // Aseguramos que no sea negativo
      console.log(paddingAdjustment);
      setRestaPadding(paddingAdjustment);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-screen md:h-[50vh]  relative overflow-hidden"
      ref={fatherRef}
      style={{
        padding: `0 ${restaPadding}px`, // El padding disminuirá conforme se acerque a 0
      }}
    >
      <FooterContent fatherTop={top} />
    </div>
  );
};
