"use client";
import React from "react";
import { Content } from "../components";
import { useTheme } from "../Hooks/themeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { PropsForScreens } from "../Types";

export const InicioScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className="w-screen h-[100dvh] flex justify-center items-center overflow-hidden md:py-20 pt-20 px-3 md:px-10 xl:px-52 fixed top-0 left-0 z-0 "
      id="Inicio"
      initial={{ filter: "blur(0px)", pointerEvents: "auto", scale: 1 }}
      animate={{
        pointerEvents: !isFocus ? "none" : "auto",
        scale: !isFocus ? 0.5 : 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Content />

      <div className="top-0 left-0 w-auto h-full z-0 absolute">
        <Image
          src={
            isDarkMode
              ? "/Img/Backgrounds/BlackPanalFinal4k.png"
              : "/Img/Backgrounds/withePanal.png"
          }
          width={3200}
          height={5687}
          alt="bg"
          className="w-full h-full hidden lg:block"
        />
      </div>
    </motion.div>
  );
};
