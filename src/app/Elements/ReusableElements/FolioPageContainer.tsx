"use client";
import React, { useRef } from "react";
interface FolioPageContainerProps {
  sectionTitle: string;
  title?: string;
  children?: React.ReactNode;
  id?: string;
  positionOrden: number;
  isFocus?: boolean;
}

export const FolioPageContainer: React.FC<FolioPageContainerProps> = ({
  children,
  id,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full z-50  pb-10 relative" ref={containerRef} id={id}>
      {children}
      {/* <div className="absolute top-0 left-0 bg-amber-300 w-full h-full opacity-50"></div> */}
    </div>
  );
};
