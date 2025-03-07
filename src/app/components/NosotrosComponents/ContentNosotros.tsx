"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/app/components";

interface ContentNosotrosProps {
  verImage: boolean;
}

export const ContentNosotros: React.FC<ContentNosotrosProps> = ({
  verImage,
}) => {
  const contenToNosotrosRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-[90%] h-96 flex justify-end items-end relative z-40 p-10 gap-5 rounded-3xl "
      ref={contenToNosotrosRef}
      style={{ transition: "transform 0.2s" }} // Transición suave
    >
      <div className="w-1/3 h-full flex justify-end" ref={imageRef}>
        <Image
          src="/Img/Nosotros/pexels-canvastudio-3194519.jpg"
          alt="Logotipo"
          width={1272}
          height={750}
          className="w-auto h-full bg-amber-50 rounded-2xl"
          style={{
            opacity: verImage ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />
      </div>

      <div className="w-1/3 h-full">
        <h2 className="text-6xl font-bold">Sobre nosotros</h2>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={10}
          blurStrength={10}
        >
          En Aubia ponemos a disposición herramientas de gestión accesibles y
          eficientes que permiten a las empresas en crecimiento estandarizar y
          optimizar sus procesos, potenciando su competitividad y capacidad para
          escala
        </ScrollReveal>
      </div>
    </div>
  );
};
