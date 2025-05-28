"use client";
import React from "react";
import { SubTitle } from "@/components/Elements/ReusableElements/SubTitle";
import Link from "next/link";

export const FooterContent = () => {
  return (
    <footer
      className="w-full max-w-7xl mx-auto px-4 py-10 bg-[var(--background)] rounded-xl shadow-md"
      style={{
        background:
          "linear-gradient(to bottom, var(--background) 0%, transparent 50%)",
      }}
    >
      <div className="flex flex-col items-center text-center gap-6">
        <SubTitle value="©2025 all rights reserved by Aubia Corporation S.A.S." center />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-4xl gap-4 text-sm text-[var(--texts)]">
          <div className="space-y-1">
            <p className="font-semibold">Contacto</p>
            <p>
              <a
                href="mailto:alejandrobiarrieta@gmail.com"
                className="underline hover:text-primary transition"
              >
                alejandrobiarrieta@gmail.com
              </a>
            </p>
            <p>
              <a
                href="mailto:business@aubia.com.ar"
                className="underline hover:text-primary transition"
              >
                business@aubia.com.ar
              </a>
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold">Legal</p>
            <p>
              <Link
                href="/politicas-de-uso"
                className="underline hover:text-primary transition"
                target="_blank"
              >
                Políticas de uso
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
