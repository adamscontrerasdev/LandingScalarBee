"use client";
import React, { useEffect, useRef, useState } from "react";
import { ContentNosotros } from "../components";

export const NosotrosScreen = () => {
  const contenToNosotrosRef = useRef<HTMLDivElement>(null);
  const [verImage, setVerImage] = useState(false);

  useEffect(() => {
    const content = contenToNosotrosRef.current;

    const handleScroll = () => {
      if (content) {
        const top = content.getBoundingClientRect().top; // Posición superior del elemento
        if (top <= 0) {
          setVerImage(true);
        } else {
          setVerImage(false); // Ocultar la imagen si el elemento no está en el tope
        }
      }
    };

    // Agregar el listener de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-screen h-screen relative flex justify-center items-center"
      id="Nosotros"
      ref={contenToNosotrosRef}
    >
      <ContentNosotros verImage={verImage} />
    </div>
  );
};
