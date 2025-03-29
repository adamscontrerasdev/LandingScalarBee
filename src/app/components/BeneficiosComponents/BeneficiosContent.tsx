import React from "react";
import { Title } from "@/app/Elements";

export const BeneficiosContent = () => {
  return (
    <div className="  flex flex-col justify-start items-center gap-10 p-5 rounded-3xl   w-full relative">
      <Title value="Que aportamos a tu negocio?" shiny />
      <div className="flex gap-2 justify-center items-center">
        <div className=" w-52 h-52  bg-fuchsia-400 rounded-2xl"></div>
        <div className=" w-52 h-52  bg-red-400 rounded-2xl"></div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className=" w-52 h-52  bg-fuchsia-400 rounded-2xl"></div>
        <div className=" w-52 h-52  bg-red-400 rounded-2xl"></div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className=" w-52 h-52  bg-fuchsia-400 rounded-2xl"></div>
        <div className=" w-52 h-52  bg-red-400 rounded-2xl"></div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className=" w-52 h-52  bg-fuchsia-400 rounded-2xl"></div>
        <div className=" w-52 h-52  bg-red-400 rounded-2xl"></div>
      </div>
    </div>
  );
};
