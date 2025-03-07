"use client";
import { ButtonPrimary } from "@/app/Elements";
import { ShapeBlur } from "../ReusableComponents/ShapeBlur";

export const LastCta = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center  gap-3  relative ">
      <div className="md:w-[30rem] px-5 md:px-0 lg:w-[40rem] aspect-square  flex flex-col justify-center items-center gap-5 z-50 ">
        <h1 className="text-center">
          Impulsa tu empresa con tecnología inteligente
        </h1>
        <p className="w-3/4 text-center">
          ¿Necesitas optimizar procesos, mejorar tu presencia digital o
          automatizar tareas? Desarrollamos soluciones de software
          personalizadas que escalan contigo. 💼 Más eficiencia. Más innovación.
          Más crecimiento. 📈 ¡Contáctanos hoy y lleva tu empresa al siguiente
          nivel!
        </p>
        <ButtonPrimary></ButtonPrimary>
      </div>
      <div className="absolute  h-[90%] md:h-full lg:h-[160%] aspect-square">
        <ShapeBlur
          className=""
          variation={0}
          pixelRatioProp={window.devicePixelRatio || 1}
          shapeSize={1}
          roundness={0.3}
          borderSize={0.01}
          circleSize={0.1}
          circleEdge={0.5}
        />
      </div>
    </div>
  );
};
