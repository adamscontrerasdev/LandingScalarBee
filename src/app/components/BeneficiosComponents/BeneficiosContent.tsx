import React from "react";
import Image from "next/image";
import { SpotlightCard } from "../ReusableComponents/SpotlightCard";

interface Beneficios {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const BeneficiosContent = () => {
  const benefits: Beneficios[] = [
    {
      title: "Soluciones personalizadas.",
      description:
        "Con nuestra personalización, podrás crear un plan de negocios específico para tu negocio.",
      icon: "💡",
      image: "/Img/image.png",
    },
    {
      title: "Ahorro de tiempo y costos.",
      description:
        "Con nuestra planificación, podrás crear un plan de negocios específico para tu negocio.",
      icon: "📅",
      image: "/Img/image.png",
    },
    {
      title: "Escalabilidad y adaptabilidad.",
      description:
        "Con nuestra gestión, podrás crear un plan de negocios específico para tu negocio.",
      icon: "📊",
      image: "/Img/image.png",
    },
    {
      title: "Soporte técnico continuo.",
      description:
        "Con nuestra gestión, podrás crear un plan de negocios específico para tu negocio.",
      icon: "📈",
      image: "/Img/image.png",
    },
  ];

  return (
    <div className="w-[90%] flex justify-center items-center flex-col gap-10 xl:gap-20 z-50">
      <h1 className="pl-5 md:pl-10 xl:pl-20 2xl:pl-40 text-left  font-extrabold  bg-black w-screen ">
        ¿Por qué elegirnos?
      </h1>
      <ul className="flex flex-wrap gap-5  justify-center items-center">
        {/* Usando Grid */}
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex flex-col w-80 md:w-96 xl:w-[20%] justify-center items-center"
          >
            <SpotlightCard
              className="bg-black"
              spotlightColor="rgba(245, 204, 0, 0.5)"
            >
              <Image
                src={benefit.image}
                width={500}
                height={500}
                alt={benefit.title}
                className="invert"
              />
              <div className="p-5 md:px-10 md:pb-5">
                <h2 className="text-white ">
                  {benefit.title}
                </h2>
                <p className="text-white">
                  {benefit.description}
                </p>
              </div>
            </SpotlightCard>
          </li>
        ))}
      </ul>
    </div>
  );
};
