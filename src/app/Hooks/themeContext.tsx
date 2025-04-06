"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Tipado del contexto
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
};

// Provider para envolver la app
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); // Inicializamos en null para detectar primero
  const [isMounted, setIsMounted] = useState(false); // Estado para controlar la carga inicial

  // Detectar tema del sistema
  useEffect(() => {
    // Detectamos el tema preferido por el dispositivo
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Establecemos el tema según la preferencia del dispositivo
    setIsDarkMode(mediaQuery.matches);

    // Escuchamos cambios en el tema del dispositivo
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  // Evitar el flash configurando el tema antes de mostrar la app
  useEffect(() => {
    if (isDarkMode !== null) {
      document.documentElement.classList.toggle("dark", isDarkMode);
      setIsMounted(true); // La app puede renderizarse
    }
  }, [isDarkMode]);

  // Alternar manualmente el tema
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Renderizamos solo cuando se haya aplicado el tema
  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={{ isDarkMode: isDarkMode!, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
