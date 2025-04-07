"use client";
import React, { useRef, useState } from "react";
import { ContentNosotros } from "../../components";

export const NosotrosScreen = () => {
  const contenToNosotrosRef = useRef<HTMLDivElement>(null);
  const [verImage] = useState(false);

  return (
    <div
      className="w-screen h-screen relative flex justify-center items-center"
      id="Nosotros"
      ref={contenToNosotrosRef}
    >
      <ContentNosotros verImage={verImage} />
    </div>
  );
};
