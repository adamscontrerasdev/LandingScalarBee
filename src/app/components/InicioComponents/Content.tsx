"use client";
import { ButtonPrimary, FadeContent, Title, SubTitle } from "@/app/Elements";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/Hooks/themeContext";
import MetallicPaint, {
    parseLogoImage,
} from "./../../../../Elements/MetallicPaint/MetallicPaint";

export const Content = () => {
    const { isDarkMode } = useTheme();
    const [imageData, setImageData] = useState<ImageData | null>(null);

    useEffect(() => {
        async function loadDefaultImage() {
            try {
                // Crear un archivo directamente desde la URL importada
                // console.log(logo)
                const response = await fetch(
                    "/Img/logo scalarbee/Abeja.svg"
                );
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
            className=" h-full flex flex-col lg:flex-row-reverse justify-center items-center  rounded-2xl  z-10">
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
                    <MetallicPaint
                      imageData={imageData ?? new ImageData(1,1)}
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
            <div className="w-full h-1/2 md:h-full flex justify-center items-start md:items-center  md:p-5 ">
                <div
                    className="flex flex-col items-start justify-center gap-3  md:p-5"
                    style={{
                        background:
                            "linear-gradient(150deg, var(--background) 30%, transparent 40%)",
                        borderRadius: "20px 0 0 0",
                    }}>
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
