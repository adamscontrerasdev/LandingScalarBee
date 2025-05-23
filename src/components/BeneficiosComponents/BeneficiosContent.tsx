import React from "react";
import { Title } from "@/components/Elements/";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

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
  // {
  //   title: "Reducción de errores y más eficiencia",
  //   image: "/Img/Beneficio/Ordenes.png",
  //   description:
  //     "Optimiza los procesos y minimiza fallos en la gestión de reparaciones, aumentando la productividad.",
  //   TextButton: "Mejorar eficiencia",
  // },
  // {
  //   title: "Notificaciones automáticas para clientes",
  //   image: "/Img/Beneficio/Ordenes.png",
  //   description:
  //     "Mantén a tus clientes informados sobre el estado de sus órdenes sin esfuerzo adicional.",
  //   TextButton: "Activar notificaciones",
  // },
  {
    title: "Interfaz intuitiva y fácil de usar",
    image: "/Img/Beneficio/Ordenes.png",
    description:
      "Una plataforma diseñada para ser accesible y sencilla, sin necesidad de largas curvas de aprendizaje.",
    TextButton: "Explorar interfaz",
  },
  {
    title: "Compatibilidad con todos tus dispositivos",
    image: "/Img/Inicio/ResponsiveDark.png",
    description:
      "Accede a la plataforma desde cualquier dispositivo, ya sea móvil o de escritorio, para mayor comodidad.",
    TextButton: "Ver compatibilidad",
  },
];

const Card: React.FC<BeneficiosProps> = ({ benefit, order }) => {
  return (
    <div
      className={`w-full h-full flex flex-col lg:flex-row justify-center items-center lg:py-20 lg:px-40 relative  ${
        order === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className={`lg:w-1/2 h-full flex justify-center items-center `}>
        <Image
          src={benefit.image}
          width={1280}
          height={720}
          alt="benefit"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="lg:w-1/2 h-full flex flex-col justify-center items-start gap-2 md:p-5 pb-5">
        <Title value={benefit.title} variant="small" left />
        <p className="text-sm text-gray-500">{benefit.description}</p>
        {/* <ButtonPrimary
          text={benefit.TextButton}
          style={{
            background: "var(--background)",
            boxShadow: "0px 0px 50px 10px var(--shadow)",
          }}
          notify={benefit.TextButton === "Activar notificaciones"}
        /> */}
      </div>
      <div className="bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent w-full max-w-3xl h-[1px] absolute bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  );
};

interface BeneficiosContentProps {
  isFocus?: boolean;
}

export const BeneficiosContent: React.FC<BeneficiosContentProps> = ({
  isFocus,
}) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4 rounded-3xl w-full relative ">
      <div
        className={`w-full  flex flex-row justify-around items-center rounded-full  gap-6 max-w-2xl  ${
          isFocus ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div className="">
          <span className="md:text-3xl text-[var(--primary-dark)]">
            Clientes
          </span>
        </div>
        <div>
          <span className="md:text-3xl text-[var(--primary-dark)]">
            Ordenes de reparacion
          </span>
        </div>
        <div>
          <span className="md:text-3xl text-[var(--primary-dark)]">
            Finanzas
          </span>
        </div>
      </div>

      <div
        className={`w-full  flex justify-center items-center rounded-full h-10  text-white text-6xl animate-bounce ${
          isFocus ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <MdKeyboardArrowDown />
      </div>
      <div
        className={`${isFocus ? "opacity-100" : "opacity-0"} `}
        style={{
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Title value="Más control, menos esfuerzo" redirect="#beneficios" />
      </div>
      <div className=" w-full min-h-20  flex flex-col justify-center items-center md:px-0">
        {benefits.map((benefit, index) => (
          <Card key={index} benefit={benefit} order={index % 2 === 0 ? 1 : 0} />
        ))}
      </div>
    </div>
  );
};
