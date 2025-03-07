import React from "react";
import { ServiciciosContent } from "../components";

export const ServiciosScreen = () => {
  return (
    <div
      className="flex flex-col items-start justify-start min-h-screen w-screen 
      xl:p-40 gap-10 p-10
    "
    >
        <h1 className="text-6xl font-bold">Que ofrecemos</h1>
      <ServiciciosContent />
    </div>
  );
};
