import { ButtonPrimary, Title } from "@/app/Elements";
import { useTheme } from "@/app/Hooks/themeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

// const Planes = [
//   {
//     title: "Standard",
//     description: "Plan ideal para equipos que están empezando.",
//     TextButton: "Ver detalles",
//     price: 900,
//     get MontPrice() {
//       return this.price / 12;
//     },
//     benefit: [
//       "Gestión de órdenes centralizada",
//       "Seguimiento en tiempo real",
//       "Notificaciones automáticas",
//     ],
//     destacado: false,
//     montPriceFix: 80,
//     get priceYearFix() {
//       return this.montPriceFix * 12;
//     },
//   },
//   {
//     title: "Premium",
//     description: "Para negocios que necesitan más automatización.",
//     TextButton: "Ver detalles",
//     price: 1080,
//     get MontPrice() {
//       return this.price / 12;
//     },
//     benefit: [
//       "Todo en Standard",
//       "Automatizaciones avanzadas",
//       "Soporte prioritario",
//     ],
//     destacado: true,
//     montPriceFix: 100,
//     get priceYearFix() {
//       return this.montPriceFix * 12;
//     },
//   },
//   {
//     title: "Ultimate",
//     description: "Máximo rendimiento para empresas consolidadas.",
//     TextButton: "Ver detalles",
//     price: 2000,
//     get MontPrice() {
//       return this.price / 12;
//     },
//     benefit: [
//       "Todo en Premium",
//       "Módulos personalizados",
//       "Asesoramiento técnico dedicado",
//     ],
//     destacado: false,
//     montPriceFix: 200,
//     get priceYearFix() {
//       return this.montPriceFix * 12;
//     },
//   },
// ];

// interface Plan {
//   plan: {
//     title: string;
//     description: string;
//     TextButton: string;
//     price: number;
//     benefit: string[];
//     destacado: boolean;
//     MontPrice: number;
//     montPriceFix: number;
//     priceYearFix: number;
//   };
//   yearly: boolean;
// }

// const PlanesCard: React.FC<Plan> = ({ plan, yearly }) => {
//   return (
//     <div
//       className={`w-full max-w-80 lg:w-1/3 h-full flex flex-col justify-center items-center ${
//         plan.destacado ? "bg-[var(--primary)]" : ""
//       } p-0.5 rounded-2xl  shadow-md`}
//       style={{
//         boxShadow: "0px 0px 10px var(--shadow)",
//       }}
//     >
//       <h2 className={plan.destacado ? "opacity-100" : "opacity-0"}>
//         Mas Popular
//       </h2>
//       <div className="h-full w-full bg-[var(--background)] rounded-2xl p-2 text-[var(--texts)] flex flex-col justify-start items-start">
//         <div className="text-xl w-full font-bold  bg-[var(--foreground)] text-center flex flex-col justify-center items-start rounded-2xl p-5">
//           <p className="font-light">{plan.title}</p>
//           <h1 className="font-extrabold text-3xl">
//             {yearly ? `$${plan.price}/año` : `$${plan.montPriceFix}/mes`}
//           </h1>
//           <p className="font-extralight !text-[var(--primary)] ">
//             {yearly
//               ? `$${plan.MontPrice.toFixed(2)}/mes`
//               : `$${plan.priceYearFix}/año`}
//           </p>
//           <div className="w-full">
//             <ButtonPrimary
//               text={plan.TextButton}
//               className="w-full bg-[var(--primary)]"
//               variant={plan.destacado ? "fill" : "outline"}
//               leve
//             ></ButtonPrimary>
//           </div>
//         </div>

//         <div className=" p-5 flex flex-col justify-start items-start gap-3">
//           <p className="border-b-1 pb-1.5">{plan.description}</p>

//           <ul className="flex flex-col gap-2 ">
//             {plan.benefit.map((benefit, index) => (
//               <li key={index} className="flex gap-2 items-center">
//                 <PiCheckBold className="text-[var(--primary)]" />
//                 {benefit}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

const FAQs = [
  {
    question: "¿Qué es un plan de reparación?",
    answer:
      "Un plan de reparación es un conjunto de servicios que se ofrecen a tus clientes para reparar sus órdenes. ",
  },
  {
    question: "¿Qué tipo de servicios ofrecen los diferentes planes?",
    answer:
      "Los diferentes planes ofrecen servicios de diferentes niveles de servicio. Por ejemplo, un plan ",
  },
  {
    question: "¿Qué es el precio de un plan de reparación?",
    answer:
      "El precio de un plan de reparación puede variar según el tipo de servicio y la cantidad de servicios que ofreces. ",
  },
  {
    question: "¿Qué es el descuento de un plan de reparación?",
    answer:
      "El descuento de un plan de reparación puede variar según el tipo de servicio y la cantidad de servicios que ofreces. ",
  },
  {
    question: "¿Qué es el plazo de un plan de reparación?",
    answer:
      "El plazo de un plan de reparación puede variar según el tipo de servicio y la cantidad de servicios que ofreces. ",
  },
  {
    question:
      "¿Qué es la cantidad de servicios que ofrecen los diferentes planes?",
    answer: "La cantidad de servicios que",
  },
  {
    question: "¿Qué es el precio de un plan de reparación?",
    answer:
      "El precio de un plan de reparación puede variar según el tipo de servicio y la cantidad de servicios que ofreces.",
  },
  {
    question: "¿Qué es el descuento de un plan de reparación?",
    answer:
      "El descuento de un plan de reparación puede variar según el tipo de servicio y la cantidad de servicios que ofreces.",
  },
];

interface FAQ {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQ> = ({ question, answer }) => {
  // Función para generar las clases de borde basadas en el array border
  const [shadow, setShadow] = useState(10);
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`bg-[var(--background)] transition-shadow border-[var(--shadow)] aspect-square border-[1px] p-4 rounded-xl`}
      style={{
        boxShadow: isDarkMode
          ? `0px 0px ${shadow}px var(--primary-dark)`
          : `0px 0px ${shadow}px var(--shadow)`,
        transition: "box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={() => setShadow(shadow + 30)}
      onMouseLeave={() => setShadow(shadow - 30)}
    >
      <h2 className="text-lg font-bold text-[var(--texts)]">{question}</h2>
      <h2 className="text-sm text-[var(--texts)]">{answer}</h2>
    </div>
  );
};

export const PlanesContent = () => {
  // const [isYearly, setIsYearly] = useState(true);
  return (
    // <div className="flex flex-col justify-center items-center gap-10 rounded-3xl w-full relative ">
    //   <div className="flex flex-col items-center justify-center">
    //     <Title value="Planes a Tu Medida"  />
    //     <button
    //       onClick={() => setIsYearly(!isYearly)}
    //       className="relative px-4 py-1 rounded-full border border-[var(--primary)] text-[var(--primary)] text-sm font-semibold transition duration-300 hover:bg-[var(--primary)] hover:text-white cursor-pointer  "
    //     >
    //       {isYearly ? "Por año" : "Por mes"}
    //       <span className="absolute top-1/2 -right-10 text-xs bg-[var(--primary)] text-white rounded-full px-2 py-0.5 animate-pulse">
    //         Cambiar
    //       </span>
    //     </button>
    //   </div>
    //   <div className="w-full lg:h-[50vh]  max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-10 px-5 ">
    //     {Planes.map((plan, index) => (
    //       <PlanesCard key={index} plan={plan} yearly={isYearly} />
    //     ))}
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center gap-10 rounded-3xl w-full relative  min-h-20">
      <Title value="Preguntas Frecuentes" />
      <div className="w-full max-w-5xl  grid grid-cols-2 md:grid-cols-4 gap-2 grid-rows-2 p-5">
        {FAQs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};
