"use client";
import React from "react";
import { Content } from "../../components";
import { useTheme } from "../Hooks/themeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PropsForScreens } from "../Types";
import { useIsMobile } from "../Hooks/useIsMobile";

export const InicioScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  const { isDarkMode } = useTheme();
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div
        className="w-full md:h-[100dvh] flex justify-center items-center overflow-hidden md:py-10 md:pt-10 px-3 md:px-10 xl:px-52 top-0 left-0 z-0 pb-10 "
        id="Inicio"
        initial={{
          filter: "blur(0px)",
          pointerEvents: "auto",
          scale: 1,
        }}
        animate={{
          pointerEvents: !isFocus ? "none" : "auto",
          scale: !isMobile ? (!isFocus ? 0.5 : 1) : 1,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: !isMobile ? "fixed" : "relative",
        }}
      >
        <Content />

        <div className="top-0 left-0 w-auto h-full z-0 absolute">
          <Image
            src={
              isDarkMode
          ? "/Img/Backgrounds/BlackPanalFinal4k.webp"
          : "/Img/Backgrounds/withePanal.webp"
            }
            width={1600}
            height={2843} 
            alt="bg"
            className="w-full h-full hidden lg:block"
          />
        </div>
        
      </motion.div>
    </>
  );
};
