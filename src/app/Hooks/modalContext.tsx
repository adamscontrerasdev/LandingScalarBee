// contexts/ModalContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
