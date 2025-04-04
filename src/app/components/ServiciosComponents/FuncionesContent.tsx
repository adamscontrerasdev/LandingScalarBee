import { Title } from "@/app/Elements";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { useIsMobile } from "./../../Hooks/useIsMobile";
import { IoIosArrowDown } from "react-icons/io";

const Sections = [
  {
    id: "inicio",
    title: "Bienvenido",
    icon: GiWorld,
    video: "/Video/Testimonios/DemoApp.mp4",
    description: [
      `¡Bienvenido a tu nueva plataforma de gestión de órdenes de reparación! Diseñada para acompañar tanto a negocios emergentes que buscan crecer como a grandes marcas que necesitan eficiencia y control total sobre su operación.`,

      `Aquí encontrarás todo lo que necesitas para llevar la administración de tu taller al siguiente nivel. Nuestra herramienta te permite centralizar y automatizar procesos clave para que puedas enfocarte en lo más importante: ofrecer un servicio de calidad y escalar tu negocio.`,

      `Dentro de la app encontrarás distintas secciones pensadas para cubrir cada etapa del flujo de trabajo:`,

      `- Clientes: Lleva un registro detallado de todas las personas que han solicitado servicios. Con solo unos datos puedes consultar su historial completo y registrar nuevas órdenes en segundos.`,

      `- Vendedores: Administra tu equipo de ventas o atención al cliente, controla su desempeño y asocia cada orden al miembro responsable para mantener todo organizado.`,

      `- Órdenes: Registra, edita y da seguimiento a cada reparación. Desde el diagnóstico hasta la entrega final, tendrás todo bajo control y accesible en cualquier momento.`,

      `- Finanzas: Visualiza ingresos, gastos y métricas clave para entender la salud de tu negocio en tiempo real.`,

      `Esta plataforma no es solo un sistema, es una herramienta pensada para ayudarte a crecer, optimizar y destacar en el mundo de la reparación de electrónicos. ¡Estás en buenas manos!`,
    ],
  },

  {
    id: "customers",
    title: "Clientes",
    icon: FaUserFriends,
    video: "/Video/Testimonios/DemoApp.mp4",
    description: [
      `La sección Clientes está diseñada para ayudarte a mantener un registro claro, ordenado y accesible de todas las personas que han solicitado un servicio en tu local.`,
      `Cada vez que ingresas una orden de reparación, puedes vincularla a un cliente nuevo o existente. Esto crea automáticamente un historial que te permite saber quién fue atendido, cuándo y qué servicio recibió.`,
      ` Con solo escribir el nombre, teléfono o correo electrónico, podrás acceder de inmediato al perfil del cliente y consultar sus órdenes anteriores, sin perder tiempo.`,
      ` Dentro del perfil del cliente encontrarás:`,
      `- Datos de contacto: nombre, teléfono, email.
  - Historial de reparaciones.
  - Observaciones importantes.`,
      `  Si ese cliente vuelve con otro dispositivo, ¡todo ya está cargado! Solo tienes que abrir su perfil y registrar una nueva orden. Así te aseguras de mantener el control y brindar un servicio más rápido y profesional.`,
    ],
  },

  {
    id: "sellers",
    title: "Vendedores",
    icon: FaUserTag,
    video: "/video/Testimonios/Vendedores.mp4",
    description: [
      "Optimiza la gestión de tus vendedores y mejora la productividad de tu equipo.",
    ],
  },
  {
    id: "orders",
    title: "Órdenes",
    icon: GiAutoRepair,
    video: "/video/Testimonios/Vendedores.mp4",
    description: [
      "Optimiza la gestión de tus vendedores y mejora la productividad de tu equipo.",
    ],
  },
  {
    id: "finances",
    title: "Finanzas",
    icon: FaMoneyBillTrendUp,
    video: "/video/Testimonios/Vendedores.mp4",
    description: [
      "Optimiza la gestión de tus vendedores y mejora la productividad de tu equipo.",
    ],
  },
];

interface section {
  id: string;
  title: string;
  icon: React.ElementType;
  video: string;
  description: string[];
}
interface sectionPathProps {
  section: section;
}

const testimonios = [
  {
    id: 1,
    name: "Team Celular",
    text: "Desde que usamos ZazBee nuestros ingresos han aumentado un 30%. por el simple plus de la productividad",
    img: "/Img/Testimonios/TeamCelular.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    id: 3,
    name: "TechCell",
    text: "god",
    img: "/Img/Testimonios/TEchCell.png",
  },
];

interface TestiMoniosProps {
  name: string;
  text: string;
  img?: string;
}

const TestiMoniosCard: React.FC<TestiMoniosProps> = ({ name, text, img }) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-4 bg-[var(--background)] min-w-80">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full bg-neutral-500 ">
          {img ? (
            <img
              src={img}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-neutral-500 flex justify-center items-center">
              <FaUser className="w-full h-full text-neutral-400 p-2" />
            </div>
          )}
        </div>
        <div className="text-lg font-bold text-[var(--texts)]">{name}</div>
      </div>
      <div className="text-sm text-[var(--texts)]">{text}</div>
    </div>
  );
};

export const FuncionesContent = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [selectedSection, setSelectedSection] = useState<section>(Sections[0]);
  const infoColRef = useRef<HTMLDivElement>(null);
  const [widthItemsMenu, setWidthItemsMenu] = useState(0);
  const carouselRefItemsMenu = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const SectionMenuItem: React.FC<sectionPathProps> = ({ section }) => {
    return (
      <div
        className="w-full flex gap-2 rounded-2xl md:p-3 p-1 px-4 bg-[var(--foreground)]  justify-start items-center cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
        onClick={() => setSelectedSection(section)}
      >
        <section.icon
          className=""
          style={{
            color:
              selectedSection?.id === section.id
                ? "var(--primary)"
                : "var(--texts)",
          }}
        />
        <h2
          className=""
          style={{
            color:
              selectedSection?.id === section.id
                ? "var(--primary)"
                : "var(--texts)",
          }}
        >
          {section.title}
        </h2>
      </div>
    );
  };

  useEffect(() => {
    const widthCalculate = () => {
      if (!carouselRef.current) return;
      if (carouselRef.current) {
        console.log(
          carouselRef.current.scrollWidth,
          carouselRef.current.offsetWidth
        );

        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };
    widthCalculate();
    window.addEventListener("resize", widthCalculate);
    return () => {
      window.removeEventListener("resize", widthCalculate);
    };
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const el = carouselRefItemsMenu.current;

      if (!el) return;

      const scrollWidth = el.scrollWidth;
      const offsetWidth = el.offsetWidth;
      const newWidth = scrollWidth - offsetWidth;
      console.log(scrollWidth, offsetWidth);

      setWidthItemsMenu(newWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    const el = infoColRef.current;
    if (!el) return;

    const handleWheelInfoCtrl = (e: WheelEvent) => {
      const delta = e.deltaY;
      const { scrollTop, scrollHeight, clientHeight } = el;

      const isScrollingDown = delta > 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;
      const isAtTop = scrollTop <= 0;

      const prevent =
        (isScrollingDown && isAtBottom) || (!isScrollingDown && isAtTop);

      if (prevent) {
        e.preventDefault();
      }
      e.stopPropagation(); // <- SIEMPRE lo detenemos
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.stopPropagation();
      // opcionalmente, puedes también prevenir si quieres máximo control:
      // e.preventDefault();
    };

    el.addEventListener("wheel", handleWheelInfoCtrl, { passive: false });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheelInfoCtrl);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      infoColRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isOpen]);

  return (
    <div className=" flex flex-col justify-center items-center gap-5 lg:gap-10 rounded-3xl w-full relative">
      <Title value="Una plataforma simple, potente y eficaz" shiny />
      <div className="w-full  md:h-80 flex-col md:flex-row flex justify-center items-center  gap-5 rounded-3xl relative max-w-7xl px-5 ">
        {/* Columna izquierda */}
        <div
          className="w-full md:w-80 max-w-96 bg-[var(--background)]  relative rounded-2xl md:flex md:flex-col justify-start items-center md:justify-center gap-2 h-10 md:h-80 overflow-hidden "
          style={{ boxShadow: "0px 0px 10px 1px var(--shadow)" }}
        >
          <motion.div
            ref={carouselRefItemsMenu}
            className="flex gap-3 cursor-grab m-auto h-full md:flex-col md:justify-center md:items-center"
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: isMobile ? -widthItemsMenu : 0, right: 0 }}
            whileTap={isMobile ? { cursor: "grabbing" } : {}}
          >
            {Sections.map((section, index) => (
              <SectionMenuItem key={index} section={section} />
            ))}
          </motion.div>
        </div>

        {/* Contenedor del video */}
        <div
          className="w-full max-w-xl bg-[var(--background)] rounded-2xl overflow-hidden "
          style={{
            boxShadow: "0px 0px 10px 1px var(--shadow)",
          }}
        >
          <video
            src={selectedSection?.video}
            className="w-full h-full rounded-2xl"
            autoPlay
            loop
            playsInline
            controls
          />
        </div>

        {/* Columna derecha */}
        <div
          role="button"
          className={`w-full max-w-xl md:w-80 bg-[var(--background)] rounded-2xl flex justify-center py-2 px-4 ${
            isOpen
              ? "h-80 overflow-auto md:h-80 md:overflow-auto"
              : "h-10 overflow-hidden md:h-80 md:overflow-auto active:scale-95 md:active:scale-100"
          } `}
          ref={infoColRef}
          style={{
            boxShadow: "0px 0px 10px 1px var(--shadow)",
            transition: "height 0.3s ease-in-out",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedSection ? (
            <div className="flex flex-col justify-start items-start gap-4 w-full rounded-2xl ">
              <h2 className="text-[var(--texts)] font-bold text-xl xl:text-3xl mb-2 flex items-center justify-between w-full">
                {selectedSection.title}{" "}
                {isMobile ? (
                  <IoIosArrowDown className={`${isOpen ? "rotate-180" : ""}`} />
                ) : null}
              </h2>
              {selectedSection.description.map((text, index) => {
                const isList =
                  text.trim().startsWith("-") || text.includes("\n-");

                return isList ? (
                  <ul
                    key={index}
                    className="list-disc list-inside space-y-1 text-[var(--texts)] text-sm xl:text-xs pl-2"
                  >
                    {text
                      .split("\n")
                      .filter((line) => line.trim().startsWith("-"))
                      .map((line, i) => (
                        <li key={i}>{line.replace("- ", "")}</li>
                      ))}
                  </ul>
                ) : (
                  <p
                    key={index}
                    className="text-[var(--texts)] text-sm leading-relaxed"
                  >
                    {text.trim()}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-2 p-4">
              <h2 className="text-white font-bold text-lg">
                Selecciona una opción
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="w-full max-w-7xl px-5 flex flex-col gap-5">
        <div className="w-full ">
          <Title value="Nuestros clientes dicen:" left variant="small"></Title>
        </div>

        <div className="overflow-hidden w-full  mx-auto relative">
          <motion.div
            ref={carouselRef}
            className="flex gap-3 cursor-grab"
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {testimonios.map(({ name, text, img }, index) => (
              <TestiMoniosCard key={index} name={name} text={text} img={img} />
            ))}
          </motion.div>
          <div
            className="absolute top-0 left-0  w-full pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--foreground) 0%, transparent 2%)",
              height: "200%",
            }}
          ></div>
          <div
            className="absolute top-0 left-0  w-full pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, var(--foreground) 0%, transparent 2%)",
              height: "200%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
