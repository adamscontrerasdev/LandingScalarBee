"use client";
import React from "react";
import { SubTitle } from "@/app/Elements/ReusableElements/SubTitle";
import Link from "next/link";
import { useTheme } from "@/app/Hooks/themeContext";

export const FooterContent = ({}) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className=" w-full h-50 max-w-2xl  bottom-0 left-0 flex justify-center items-center gap-10  py-5 relative rounded-xl shadow-md bg-[var(--background)]"
      style={{
        background:
          "linear-gradient(to bottom, var(--background) 0%, transparent 50%)",
      }}
    >
      <img
        src={
          isDarkMode
            ? "/Img/Logo scalarbee/bee-logo-white.png"
            : "/Img/Logo scalarbee/bee-logo-black.png"
        }
        width={200}
        height={50}
        alt="logo"
        className="w-10 h-10 object-contain absolute top-5  left-5 bg-[var(--foreground)] rounded-xl"
      />

      <div className="w-full min-h-20 py-10   relative flex-col justify-center items-center gap-2 px-5">
        <SubTitle value="©2025 all rights reserved by ZazBee." center />
        <div className=" flex gap-1 text-xs md:text-base text-[var(--texts)] justify-center items-center">
          <Link href={""}> Política de privacidad</Link>|
          <Link href={""}> Condiciones de uso</Link>|
          <Link href={""}> Aviso legal</Link>
        </div>
      </div>
    </div>
  );
};
