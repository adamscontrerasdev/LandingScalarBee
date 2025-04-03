"use client";
import { ButtonPrimary, FadeContent, Title, SubTitle } from "@/app/Elements";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/app/Hooks/themeContext";

export const Content = () => {
  const { isDarkMode } = useTheme();

  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
      className=" h-full flex flex-col lg:flex-row-reverse justify-center items-center  rounded-2xl  z-10"
    >
      {/* Imagen Arriba en Mobile, Derecha en Desktop */}
      <div className="w-full h-1/2 md:h-auto flex justify-center lg:justify-start items-center ">
        <Image
          src={
            isDarkMode
              ? "/Img/Inicio/ResponsiveDark.png"
              : "/Img/Inicio/ResponsiveLight.png"
          }
          width={3000}
          height={3000}
          alt="QLQ"
          className="w-full object-contain max-w-2xl "
        />
      </div>

      {/* Contenido de Texto */}
      <div className="w-full h-1/2 md:h-full flex justify-center items-start md:items-center  md:p-5 ">
        <div
          className="flex flex-col items-start justify-center gap-3  md:p-5"
          style={{
            background:
              "linear-gradient(150deg, var(--background) 30%, transparent 40%)",
            borderRadius: "20px 0 0 0",
          }}
        >
          <Title value="Optimiza tu negocio de reparación con la mejor gestión" />
          <SubTitle value="!Organiza!, delega y crece sin perder el control" />

          <ButtonPrimary text="Prueba gratis por 14 días" />
        </div>
      </div>
    </FadeContent>
  );
};
