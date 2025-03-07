import React from "react";
import { Content } from "../components";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export const InicioScreen = () => {
  return (
    <div
      className="w-screen h-screen relative flex justify-center items-center overflow-hidden"
      id="Inicio"
    >
      {/* <Background /> */}
      <Content />
      {/* <DeviceForm></DeviceForm> */}
      <div className="absolute bottom-0 left-0 w-screen h-20 z-10  opacity-10 flex justify-center items-center">
        <Link href={"#Nosotros"}>
          <IoIosArrowDown className="text-white text-5xl animate-pulse" />
        </Link>
      </div>
    </div>
  );
};
