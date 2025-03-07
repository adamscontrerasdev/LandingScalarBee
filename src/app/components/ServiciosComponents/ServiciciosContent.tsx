import React from "react";
import Image from "next/image";
import { ButtonPrimary } from "@/app/Elements";

export const ServiciciosContent = () => {
  const Services = [
    {
      title: "Personalización impulsada por IA",
      description:
        "Adapte el contenido en tiempo real en función de los términos de búsqueda, palabras clave y datos de audiencia, garantizando que cada visitante interactúe con contenido adaptado a sus intereses. ",
      image: "/Img/imageService3.png",
      bg: "#f00",
      order: 1,
      cta: "Mas información",
    },
    {
      title: "Pruebas A/B automatizadas",
      description:
        "Deje que nuestra plataforma haga el trabajo, realizando pruebas multivariadas y generando información para optimizar sus páginas. ",
      image: "/Img/imageService2.png",
      bg: "#0f0",
      order: 0,
      cta: "Explorar más",
    },
    {
      title: "Velocidad de página líder en la industria",
      description:
        "Nuestras páginas optimizadas se cargan rápidamente, lo que garantiza una experiencia de usuario fluida y una mejor clasificación en los motores de búsqueda. ",
      image: "/Img/imageService3.png",
      bg: "#00f",
      order: 1,
      cta: "Descubre más",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-20 items-center z-50 ">
      {Services.map((Service, index) => (
        <div
        key={index}
        className={`w-full md:h-[50vh] flex flex-col-reverse ${
          Service.order ? "md:flex-row" : "md:flex-row-reverse"
        } justify-center items-start md:items-center rounded-3xl`}
      >
      
          <div className="md:w-[40%]  h-full flex flex-col justify-center items-start p-5 gap-3 relative ">
            <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold">
              {Service.title}
            </h2>
            <p>{Service.description}</p>

            <ButtonPrimary text={Service.cta} />
          </div>
          <div className="w-[60%]  h-full flex justify-center items-center relative">
            <Image
              src={Service.image}
              width={1920}
              height={1080}
              alt="Fiti"
              className="w-96 md:w-3/4 h-auto invert"
            ></Image>
            <div
              className={`h-0 w-0 md:h-full md:w-[2px] bg-white absolute ${
                Service.order ? "left-0" : "right-0"
              }`}
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #fff4, transparent)",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
