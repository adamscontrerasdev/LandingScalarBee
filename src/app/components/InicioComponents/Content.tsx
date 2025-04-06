"use client";
import { ButtonPrimary, FadeContent, Title, SubTitle } from "@/app/Elements";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/Hooks/themeContext";
import logo from "./react-bits-solid-black-CFfyrfKs.svg";
import MetallicPaint, {
  parseLogoImage,
} from "./../../../../Elements/MetallicPaint/MetallicPaint";

export const Content = () => {
  const { isDarkMode } = useTheme();
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "react-bits-solid-black-CFfyrfKs.svg", {
          type: blob.type,
        });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
      className=" h-full flex flex-col lg:flex-row-reverse justify-center items-center  rounded-2xl  z-10"
    >
      {/* Imagen Arriba en Mobile, Derecha en Desktop */}
      <div className="w-full h-1/2 lg:h-auto flex justify-center lg:justify-start items-center ">
        {/* <Image
          src={
            isDarkMode
              ? "/Img/Inicio/ResponsiveDark.png"
              : "/Img/Inicio/ResponsiveLight.png"
          }
          width={3000}
          height={3000}
          alt="QLQ"
          className="w-full object-contain max-w-2xl "
        /> */}
        <div style={{ width: "100%", height: "100vh", zIndex: 9999999 }}>
          <MetallicPaint
            imageData={imageData ?? new ImageData(1, 1)}
            params={{
              edge: 2,
              patternBlur: 0.005,
              patternScale: 2,
              refraction: 0.015,
              speed: 0.3,
              liquid: 0.07,
            }}
          />
        </div>
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
          <Title
            value="Tu laboratorio de reparación al siguiente nivel."
            left
          />
          <SubTitle
            value="Gestiona tu negocio de móviles como lo hacen los mejores:
organiza, controla y crece sin perder el control."
          />
          <SubTitle
            value="Hecho para técnicos que quieren más que sobrevivir:
quieren dominar."
          />

          <ButtonPrimary text="Demo Exlusiva" />
        </div>
      </div>
    </FadeContent>
  );
};
