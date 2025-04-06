"use client";
import { ButtonPrimary, FadeContent, Title, SubTitle } from "@/app/Elements";
import React, { useEffect, useState } from "react";
import MetallicPaint, {
  parseLogoImage,
} from "./../../../../Elements/MetallicPaint/MetallicPaint";

export const Content = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch("/Img/logo scalarbee/AbejaNegra.svg");
        console.log(response);
        const blob = await response.blob();
        const file = new File([blob], "default.png", {
          type: blob.type,
        });

        const parsedData = await parseLogoImage(file);
        console.log(parsedData);
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
      className=" h-full flex flex-col lg:flex-row-reverse justify-center items-center  rounded-2xl  z-10 "
    >
      {/* Imagen Arriba en Mobile, Derecha en Desktop */}
      <div className=" flex justify-center items-center w-full h-1/2 lg:h-auto lg:pb-64 lg:p-32 max-w-3xl">
        <MetallicPaint
          imageData={imageData ?? new ImageData(1, 1)}
          params={{
            patternScale: 2,
            refraction: 0,
            edge: 0,
            patternBlur: 0,
            liquid: 0,
            speed: 0.15,
          }}
        />
      </div>

      {/* Contenido de Texto */}
      <div className="w-full h-1/2 md:h-full flex justify-center items-start lg:items-center  lg:p-5  ">
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
          <SubTitle value="Gestiona tu negocio de móviles como lo hacen los mejores" />
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
