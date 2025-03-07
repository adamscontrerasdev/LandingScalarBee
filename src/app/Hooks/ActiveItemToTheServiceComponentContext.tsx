"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir el tipo para el contexto
interface ActiveItemToTheServiceComponentContextType {
  activeItemG: string;
  setActiveItemG: (item: string) => void;
}

// Crear el contexto con un valor por defecto (opcional)
const ActiveItemContext = createContext<
  ActiveItemToTheServiceComponentContextType | undefined
>(undefined);

// Definir las props para el proveedor
interface ActiveItemProviderProps {
  children: ReactNode;
}

// Crear el proveedor del contexto
export const ActiveItemProvider = ({ children }: ActiveItemProviderProps) => {
  const [activeItemG, setActiveItemG] = useState<string>("");

  // Valor que se proporcionará a los componentes hijos
  const value = {
    activeItemG,
    setActiveItemG,
  };

  return (
    <ActiveItemContext.Provider value={value}>
      {children}
    </ActiveItemContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useActiveItem = (): ActiveItemToTheServiceComponentContextType => {
  const context = useContext(ActiveItemContext);
  if (!context) {
    throw new Error("useActiveItem must be used within an ActiveItemProvider");
  }
  return context;
};
