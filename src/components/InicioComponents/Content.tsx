"use client";
import {
  ButtonPrimary,
  FadeContent,
  // Title,
  // SubTitle,
} from "@/components/Elements";
import React, { useEffect, useState } from "react";
import MetallicPaint, {
  parseLogoImage,
} from "@/components/Elements/MetallicPaint";
import RotatingText from "@/components/Elements/RotatingText";
import { MdPhonelinkSetup } from "react-icons/md";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const Content = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch("/Img/logo scalarbee/AbejaNegra.svg");
        const blob = await response.blob();
        const file = new File([blob], "default.png", {
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
    <>
      <FadeContent
        blur={true}
        duration={1500}
        easing="ease-out"
        initialOpacity={0}
        className=" h-full flex flex-col lg:flex-row-reverse justify-center items-center  rounded-2xl  z-10 "
      >
        {/* Imagen Arriba en Mobile, Derecha en Desktop */}
        <div className=" flex justify-center items-center w-full h-1/2 lg:h-auto lg:p-32 max-w-3xl">
          {imageData && (
            <FadeContent
              blur={true}
              duration={1500}
              easing="ease-out"
              initialOpacity={0}
            >
              <MetallicPaint
                imageData={imageData}
                params={{
                  patternScale: 2,
                  refraction: 0,
                  edge: 0,
                  patternBlur: 0,
                  liquid: 0,
                  speed: 0.15,
                }}
              />
            </FadeContent>
          )}
        </div>

        {/* Contenido de Texto */}
        <div className="w-full h-1/2 md:h-full flex justify-center items-start lg:items-center  lg:p-5  ">
          <div
            className="flex flex-col items-start justify-center gap-5 md:p-5"
            style={{
              background:
                "linear-gradient(150deg, var(--background) 30%, transparent 15%)",
              borderRadius: "30px 0 0 0",
            }}
          >
            <div className="flex items-center gap-3">
              <h1
                className={`font-bold text-[var(--primary)]
                            text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl
                            text-left  `}
              >
                <span
                  className={`${baiJamjuree.className} font-normal tracking-wider`}
                >
                  Fix<span className="font-bold">Bee</span>
                </span>
              </h1>
              <MdPhonelinkSetup className=" text-[var(--texts)] text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl" />
              <RotatingText
                texts={["Controla", "Administra", "Ordena", "Gestiona"]}
                mainClassName="text-xl xl:text-3xl p-4 sm:px-2 font-bold md:px-3 bg-[var(--primary)] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={2500}
              />
            </div>
            <h2
              className={`text-[var(--texts)] 
                          text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl
                          text-left  `}
            >
              Gestiona tu servicio técnico como lo hacen los profesionales.
            </h2>
            {/* <SubTitle
            value="Hecho para técnicos que quieren más que sobrevivir:
quieren dominar."
          /> */}

            <ButtonPrimary text="Prueba el acceso anticipado" variant="outline" />
          </div>
        </div>
      </FadeContent>
    </>
  );
};
