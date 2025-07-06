"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "./Hooks/useIsMobile";
import {
  InicioScreen,
  BeneficiosScreen,
  FuncionesScreen,
  PlanesScreen,
  ContactScreen,
} from "./Screens";

// Memoizar las secciones para evitar re-creaciones
const SECTION_IDS = ["inicio", "beneficios", "funciones", "FAQ", "contact"];
const INITIAL_SCROLL_STATE = {
  beneficios: false,
  funciones: false,
  FAQ: false,
  contact: false,
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const [hasScrolledSections, setHasScrolledSections] = useState(INITIAL_SCROLL_STATE);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const isMobile = useIsMobile();

  const scrollToSection = useCallback((index: number) => {
    if (isScrolling.current || index < 0 || index >= SECTION_IDS.length) return;

    isScrolling.current = true;
    setCurrentIndex(index);
    window.history.replaceState(null, "", `#${SECTION_IDS[index]}`);

    setTimeout(() => {
      isScrolling.current = false;
    }, 300); // Reducido de 500ms a 300ms
  }, []);

  // Memoizar funciones para evitar re-renders innecesarios
  const handleClickHome = useCallback(() => {
    scrollToSection(0);
  }, [scrollToSection]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>, section: string) => {
    const isScrolled = e.currentTarget.scrollTop > 0;
    setHasScrolledSections((prev) => {
      if (prev[section as keyof typeof prev] !== isScrolled) {
        return { ...prev, [section]: isScrolled };
      }
      return prev;
    });
  }, []);

  // Optimizar handleWheel con throttling
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrolling.current) return;

    const section = document.querySelector(`#${SECTION_IDS[currentIndex]}`) as HTMLElement;
    const scrollableDiv = section?.querySelector(".scrollable-content") as HTMLElement;

    if (scrollableDiv) {
      const atTop = scrollableDiv.scrollTop === 0;
      const atBottom = Math.ceil(scrollableDiv.scrollTop + scrollableDiv.clientHeight) >= scrollableDiv.scrollHeight;

      if (e.deltaY > 0 && atBottom) {
        e.preventDefault();
        scrollToSection(currentIndex + 1);
      } else if (e.deltaY < 0 && atTop) {
        e.preventDefault();
        scrollToSection(currentIndex - 1);
      }
    } else {
      e.preventDefault();
      scrollToSection(currentIndex + (e.deltaY > 0 ? 1 : -1));
    }
  }, [currentIndex, scrollToSection]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches[0]) {
      touchStartY.current = e.touches[0].clientY;
    }
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches[0]) {
      touchEndY.current = e.touches[0].clientY;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartY.current === null || touchEndY.current === null || isScrolling.current) return;

    const deltaY = touchStartY.current - touchEndY.current;
    const threshold = 10;

    const section = document.querySelector(`#${SECTION_IDS[currentIndex]}`) as HTMLElement;
    const scrollableDiv = section?.querySelector(".scrollable-content") as HTMLElement;

    if (scrollableDiv) {
      const atTop = scrollableDiv.scrollTop === 0;
      const atBottom = Math.ceil(scrollableDiv.scrollTop + scrollableDiv.clientHeight) >= scrollableDiv.scrollHeight;

      if (deltaY > threshold && atBottom) {
        scrollToSection(currentIndex + 1);
      } else if (deltaY < -threshold && atTop) {
        scrollToSection(currentIndex - 1);
      }
    } else {
      if (deltaY > threshold) {
        scrollToSection(currentIndex + 1);
      } else if (deltaY < -threshold) {
        scrollToSection(currentIndex - 1);
      }
    }

    touchStartY.current = null;
    touchEndY.current = null;
  }, [currentIndex, scrollToSection]);

  useEffect(() => {
    if (currentIndex === 0 && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0 });
    }
  }, [currentIndex]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const initialIndex = SECTION_IDS.indexOf(hash);
    if (initialIndex !== -1) setCurrentIndex(initialIndex);

    // Usar passive: false solo cuando sea necesario
    const wheelOptions = { passive: false };
    const touchOptions = { passive: true };

    window.addEventListener("wheel", handleWheel, wheelOptions);
    window.addEventListener("touchstart", handleTouchStart, touchOptions);
    window.addEventListener("touchmove", handleTouchMove, touchOptions);
    window.addEventListener("touchend", handleTouchEnd, touchOptions);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  const durationTime = 0.2; // Reducido de 0.3 a 0.2
  const bgtodos = "var(--foreground)";

  // Memoizar el contenido móvil
  const mobileContent = useMemo(() => (
    <div className="px-5 overflow-x-hidden">
      <InicioScreen />
      <BeneficiosScreen />
      <FuncionesScreen />
      <PlanesScreen />
      <ContactScreen />
    </div>
  ), []);

  return (
    <div className="">
      {isMobile ? (
        mobileContent
      ) : (
        <div className="relative h-[100dvh] overflow-hidden" aria-live="polite">
          {/* InicioScreen - Siempre visible en el fondo */}
          <div
            className="fixed top-0 left-0 w-full h-full z-0"
            onClick={() => handleClickHome()}
          >
            <InicioScreen isFocus={currentIndex === 0} />
          </div>

          {/* BeneficiosScreen */}
          <motion.div
            key="beneficios"
            initial={{
              y: "100%",
              width: "100%",
              borderRadius: isMobile ? "20px 20px 0 0" : "0 20px 20px 0",
            }}
            animate={{
              y: currentIndex >= 1 ? "120px" : "80%",

              background: currentIndex >= 1 ? bgtodos : "var(--background)",
              boxShadow:
                currentIndex >= 1 ? "0px 0px 50px var(--background)" : "none",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            className={`absolute w-full h-full left-1/2 -translate-x-1/2 flex justify-center items-start p-20 ${
              currentIndex !== 1 ? "fixed" : ""
            }`}
            id="beneficios"
          >
            <div
              className="scrollable-content  absolute md:top-[45%] top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-0 overflow-y-auto"
              onScroll={(e) => handleScroll(e, "beneficios")}
              ref={scrollRef}
            >
              <BeneficiosScreen isFocus={currentIndex === 1} />
            </div>

            <motion.div
              className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hasScrolledSections.beneficios ? 1 : 0 }}
              transition={
                isMobile ? {} : { type: "spring", stiffness: 120, damping: 15 }
              }
            >
              <motion.div
                className="absolute inset-0 rounded-t-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hasScrolledSections.beneficios ? 1 : 0.2 }}
                transition={
                  isMobile
                    ? {}
                    : { type: "spring", stiffness: 120, damping: 15 }
                }
                style={{
                  background:
                    "linear-gradient(to bottom, var(--foreground) 2%, transparent 20%)",
                }}
              />
            </motion.div>

            <div
              className=" to-transparent absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, var(--foreground)2%, transparent 10%)",
              }}
            ></div>
          </motion.div>

          {/* FuncionesScreen */}
          <motion.div
            key="funciones"
            initial={{ y: "100%" }}
            animate={{
              y: currentIndex >= 2 ? "136px" : "100%",
              background: currentIndex >= 2 ? bgtodos : "var(--background)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            className={`absolute w-full h-full left-1/2 -translate-x-1/2 flex justify-center items-start p-20 ${
              currentIndex !== 2 ? "fixed" : ""
            }`}
            id="funciones"
          >
            <div
              className="scrollable-content  absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-0 overflow-y-auto"
              onScroll={(e) => handleScroll(e, "funciones")}
            >
              <FuncionesScreen isFocus={currentIndex === 2} />
            </div>
            <div
              className=" to-transparent absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, var(--foreground) 0%, transparent 10%) ",
                opacity: hasScrolledSections.funciones ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
              }}
            ></div>
          </motion.div>

          {/* FAQScreen */}
          <motion.div
            key="FAQ"
            initial={{ y: "100%" }}
            animate={{
              y: currentIndex >= 3 ? "120px" : "100%",
              background: currentIndex >= 3 ? bgtodos : "var(--background)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            className={`absolute w-full h-full  left-1/2 -translate-x-1/2 flex justify-center items-start p-20 ${
              currentIndex !== 3 ? "fixed" : ""
            }`}
            id="FAQ"
          >
            <div
              className="scrollable-content  absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-0 overflow-y-auto"
              onScroll={(e) => handleScroll(e, "FAQ")}
            >
              <PlanesScreen isFocus={currentIndex === 3} />
            </div>
            <div
              className=" to-transparent absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, var(--foreground)0%, transparent 10%)",
                opacity: hasScrolledSections.FAQ ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
              }}
            ></div>
          </motion.div>

          {/* ContactScreen */}
          <motion.div
            key="contact"
            initial={{ y: "100%" }}
            animate={{
              y: currentIndex >= 4 ? "136px" : "100%",
              background: currentIndex >= 4 ? bgtodos : "var(--background)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            className={`absolute w-full h-full overflow-y-visible overflow-x-hidden left-1/2 -translate-x-1/2 flex justify-center items-start p-20 ${
              currentIndex !== 4 ? "fixed" : ""
            }`}
            id="contact"
          >
            <div
              className="scrollable-content  absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-0 overflow-y-auto"
              onScroll={(e) => handleScroll(e, "contact")}
            >
              <ContactScreen isFocus={currentIndex === 4} />
            </div>
            <div
              className=" to-transparent absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, var(--foreground) 0%, transparent 10%)",
                opacity: hasScrolledSections.contact ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
              }}
            ></div>
          </motion.div>

          <motion.div
            className={`w-28 h-10 absolute left-0  md:left-10 z-[9999999999999999] cursor-pointer rounded-t-xl flex justify-center items-center text-[var(--texts)] capitalize`}
            onClick={() => scrollToSection(1)}
            initial={{ top: "calc(80% - 2.5rem)", opacity: 0 }}
            animate={{
              top: currentIndex === 0 ? "80vh" : "5rem",
              opacity: currentIndex === 0 ? 0 : 1,
              background:
                currentIndex === 0 ? "var(--background)" : "var(--foreground)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            id={SECTION_IDS[1]}
          >
            <h2>{SECTION_IDS[1]}</h2>
          </motion.div>

          <motion.div
            className={`w-28 h-10  absolute left-30 md:left-40 z-[9999999999999999] cursor-pointer rounded-t-xl flex justify-center items-center text-[var(--texts)] capitalize`}
            onClick={() => scrollToSection(2)}
            initial={{ top: "100dvh" }}
            animate={{
              top:
                currentIndex === 0
                  ? "100dvh"
                  : currentIndex >= 2
                  ? "6rem"
                  : isMobile
                  ? "94dvh"
                  : "96vh",
              background:
                currentIndex !== 0
                  ? currentIndex >= 2
                    ? "var(--foreground)"
                    : "var(--background)"
                  : "var(--background)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            id={SECTION_IDS[2]}
          >
            <h2>{SECTION_IDS[2]}</h2>
          </motion.div>

          <motion.div
            className={`w-28 h-10  absolute left-60 md:left-[17.5rem] z-[9999999999999999] cursor-pointer rounded-t-xl flex justify-center items-center text-[var(--texts)] capitalize`}
            onClick={() => scrollToSection(3)}
            initial={{ top: "100vh" }}
            animate={{
              top:
                currentIndex === 0
                  ? "100vh"
                  : currentIndex >= 3
                  ? "5rem"
                  : isMobile
                  ? "94dvh"
                  : "96vh",
              background:
                currentIndex !== 0
                  ? currentIndex >= 3
                    ? "var(--foreground)"
                    : "var(--background)"
                  : "var(--background)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            id={SECTION_IDS[3]}
          >
            <h2>{SECTION_IDS[3]}</h2>
          </motion.div>

          <motion.div
            className={`w-28 h-10 absolute left-0 md:left-[25rem] 
          z-[9999999999999999] cursor-pointer rounded-t-xl flex justify-center items-center text-[var(--texts)] capitalize`}
            onClick={() => scrollToSection(4)}
            initial={{ top: "100vh" }}
            animate={{
              top:
                currentIndex === 0
                  ? "100vh"
                  : currentIndex >= 4
                  ? "6rem"
                  : isMobile
                  ? "94dvh"
                  : "96vh",
              background:
                currentIndex !== 0
                  ? currentIndex >= 4
                    ? "var(--foreground)"
                    : "var(--background)"
                  : "var(--background)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            id={SECTION_IDS[4]}
          >
            <h2>{SECTION_IDS[4]}</h2>
          </motion.div>
        </div>
      )}
    </div>
  );
}
