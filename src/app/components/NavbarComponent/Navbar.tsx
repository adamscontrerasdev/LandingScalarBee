"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/Hooks/themeContext";

export const Navbar = () => {
  const { isDarkMode } = useTheme(); // Usando el hook

  const roots = [
    { title: "Inicio", href: "#Inicio" },
    { title: "Nosotros", href: "#Nosotros" },
    { title: "Contacto", href: "#Contacto" },
  ];

  return (
    <div className="w-screen h-20 flex justify-between items-center  fixed top-0 z-[9999] left-0 px-10 backdrop-blur-xs ">
      <div className="h-1/2 w-auto  flex justify-center items-center"
     >
        <Image
          src={
            isDarkMode
              ? "/Img/logo scalarbee/bee-text-white.png"
              : "/Img/logo scalarbee/bee-text-blackpng.png"
          }
          alt="Logo"
          width={1272}
          height={750}
          className="w-auto h-full"
        />
        <Image
          src={
            isDarkMode
              ? "/Img/logo scalarbee/bee-logo-white.png"
              : "/Img/logo scalarbee/bee-logo-black.png"
          }
          alt="Logo"
          width={1272}
          height={750}
          className="w-auto h-full b"
        />
      </div>
      <div className="h-1/2 min-w-20">
        {roots.map((root) => (
          <Link
            key={root.title}
            href={root.href}
            className="text-center p-2 rounded-md hover:text-[var(--primary-color)] transition-colors duration-500 md:text-base lg:text-lg font-bold"
          >
            {root.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
