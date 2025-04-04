import React from "react";
import { ButtonPrimary, Title } from "@/app/Elements";
import Image from "next/image";

interface Beneficios {
  title: string;
  image: string;
  description: string;
  TextButton: string;
}

interface BeneficiosProps {
  benefit: Beneficios;
  order: number;
}

const benefits = [
  {
    title: "Gestión centralizada de órdenes",
    image: "/Img/Beneficio/Ordenes.png",
    description:
      "Administra todas las órdenes en un solo lugar, mejorando la organización y el control del negocio.",
    TextButton: "Descúbrelo ahora",
  },
  {
    title: "Seguimiento en tiempo real",
    image: "/Img/Beneficio/Ordenes.png",
    description:
      "Mantente informado sobre el estado de cada orden en cualquier momento, sin perder detalles importantes.",
    TextButton: "Seguir órdenes",
  },
  {
    title: "Reducción de errores y más eficiencia",
    image: "/Img/Beneficio/Ordenes.png",
    description:
      "Optimiza los procesos y minimiza fallos en la gestión de reparaciones, aumentando la productividad.",
    TextButton: "Mejorar eficiencia",
  },
  {
    title: "Notificaciones automáticas para clientes",
    image: "/Img/Beneficio/Ordenes.png",
    description:
      "Mantén a tus clientes informados sobre el estado de sus órdenes sin esfuerzo adicional.",
    TextButton: "Activar notificaciones",
  },
  {
    title: "Interfaz intuitiva y fácil de usar",
    image: "/Img/Beneficio/Ordenes.png",
    description:
      "Una plataforma diseñada para ser accesible y sencilla, sin necesidad de largas curvas de aprendizaje.",
    TextButton: "Explorar interfaz",
  },
  {
    title: "Mayor rentabilidad con mejor organización",
    image: "/Img/Beneficio/Ordenes.png",
    description:
      "Mejora la administración de recursos y tiempos, lo que se traduce en mayores beneficios para tu negocio.",
    TextButton: "Optimizar negocio",
  },
];

const Card: React.FC<BeneficiosProps> = ({ benefit, order }) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center py-20 px-40  ${
        order === 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={`w-1/2 h-full flex justify-center items-center `}>
        <Image
          src={benefit.image}
          width={1920}
          height={1080}
          alt="benefit"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-start gap-2 p-5 ">
        <Title value={benefit.title} variant="small" />
        <p className="text-sm text-gray-500">{benefit.description}</p>
        <ButtonPrimary
          text={benefit.TextButton}
          style={{
            background: "var(--background)",
            boxShadow: "0px 0px 50px 10px var(--shadow)",
          }}
          notify={benefit.TextButton === "Activar notificaciones"}
        />
      </div>
    </div>
  );
};

export const BeneficiosContent = () => {
  return (
    <div className=" flex flex-col justify-start items-center gap-10 rounded-3xl   w-full relative">
      <Title value="Más control, menos esfuerzo" shiny redirect="#beneficios" />
      <div className=" w-full min-h-20  flex flex-col justify-center items-center ">
        {benefits.map((benefit, index) => (
          <Card key={index} benefit={benefit} order={index % 2 === 0 ? 1 : 0} />
        ))}
      </div>
    </div>
  );
};
