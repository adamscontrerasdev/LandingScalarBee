"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/app/Hooks/themeContext";
import {Bai_Jamjuree } from "next/font/google"

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300","400","500", "600", "700"], 
});

export const Navbar = () => {
  const { isDarkMode } = useTheme(); // Usando el hook

  // const roots = [
  //   { title: "Nosotros", href: "#Nosotros" },
  //   { title: "Contacto", href: "#Contacto" },
  // ];


  return (
    <div className="w-screen h-20 flex justify-between items-center  fixed top-0 z-[99999999] left-0 p-3 md:p-0 md:px-5 xl:px-10 backdrop-blur-xs ">
      <div className="h-1/2 w-auto flex gap-2 justify-center items-center">
        <Image
          src={
            isDarkMode
              ? "/Img/logo scalarbee/bee-logo-white.webp"
              : "/Img/logo scalarbee/bee-logo-black.webp"
          }
          alt="Logo"
          width={1272}
          height={750}
          className="w-auto h-full"
        />
        <h5
          className={`tracking-wider text-2xl font-normal ${
        isDarkMode ? "text-white" : "text-black"
          } ${baiJamjuree.className}`}
        >
          <span className="font-bold">Bee</span>scend
        </h5>
      </div>
      <div className="h-1/2 min-w-20">
        {/* {roots.map((root) => (
          <Link
            key={root.title}
            href={root.href}
            className="text-center p-2 rounded-md hover:text-[var(--primary)] transition-colors duration-500 md:text-base lg:text-lg font-bold text-[var(--texts)]"
          >
            {root.title}
          </Link>
        ))} */}
      </div>
    </div>
  );
};
