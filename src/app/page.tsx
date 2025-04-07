"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "./Hooks/useIsMobile";
import {
  InicioScreen,
  BeneficiosScreen,
  FuncionesScreen,
  PlanesScreen,
  ContactScreen,
} from "./Screens";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const [hasScrolledSections, setHasScrolledSections] = useState({
    beneficios: false,
    funciones: false,
    FAQ: false,
    contact: false,
  });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (currentIndex === 0 && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0 });
    }
  }, [currentIndex]);

  const handleClickHome = () => {
    scrollToSection(0);
  };

  // Función que maneja el desplazamiento para cada sección
  const handleScroll = (e: React.UIEvent<HTMLDivElement>, section: string) => {
    if (e.currentTarget.scrollTop > 0) {
      setHasScrolledSections((prev) => ({ ...prev, [section]: true }));
    } else {
      setHasScrolledSections((prev) => ({ ...prev, [section]: false }));
    }
  };
  const sectionIds = ["inicio", "beneficios", "funciones", "FAQ", "contact"];

  const bgtodos = "var(--foreground)";

  const scrollToSection = (index: number) => {
    if (isScrolling.current || index < 0 || index >= sectionIds.length) return;

    isScrolling.current = true;
    setCurrentIndex(index);
    window.history.replaceState(null, "", `#${sectionIds[index]}`);

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling.current) return;

    const section = document.querySelector(
      `#${sectionIds[currentIndex]}`
    ) as HTMLElement;
    const scrollableDiv = section?.querySelector(
      ".scrollable-content"
    ) as HTMLElement;

    if (scrollableDiv) {
      const atTop = scrollableDiv.scrollTop === 0;
      const atBottom =
        Math.ceil(scrollableDiv.scrollTop + scrollableDiv.clientHeight) >=
        scrollableDiv.scrollHeight;

      console.log({
        section: sectionIds[currentIndex],
        scrollTop: scrollableDiv.scrollTop,
        clientHeight: scrollableDiv.clientHeight,
        scrollHeight: scrollableDiv.scrollHeight,
        atTop,
        atBottom,
      });

      if (e.deltaY > 0) {
        if (!atBottom) return; // Si no está en el fondo, no cambiar de sección
        e.preventDefault();
        scrollToSection(currentIndex + 1);
      } else {
        if (!atTop) return; // Si no está en la parte superior, no cambiar de sección
        e.preventDefault();
        scrollToSection(currentIndex - 1);
      }
    } else {
      e.preventDefault();
      scrollToSection(currentIndex + (e.deltaY > 0 ? 1 : -1));
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartY.current === null ||
      touchEndY.current === null ||
      isScrolling.current
    )
      return;

    const deltaY = touchStartY.current - touchEndY.current;
    const threshold = 10; // sensibilidad mínima para considerar swipe

    const section = document.querySelector(
      `#${sectionIds[currentIndex]}`
    ) as HTMLElement;
    const scrollableDiv = section?.querySelector(
      ".scrollable-content"
    ) as HTMLElement;

    if (scrollableDiv) {
      const atTop = scrollableDiv.scrollTop === 0;
      const atBottom =
        Math.ceil(scrollableDiv.scrollTop + scrollableDiv.clientHeight) >=
        scrollableDiv.scrollHeight;

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
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const initialIndex = sectionIds.indexOf(hash);
    if (initialIndex !== -1) setCurrentIndex(initialIndex);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  const durationTime = 0.3;

  return (
    <div className="">
      {isMobile ? (
        <div className="px-5 overflow-x-hidden ">
          <InicioScreen></InicioScreen>
          <BeneficiosScreen></BeneficiosScreen>
          <FuncionesScreen></FuncionesScreen>
          <PlanesScreen></PlanesScreen>
          <ContactScreen></ContactScreen>
        </div>
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
              y: currentIndex >= 1 ? "80px" : "80%",

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
              y: currentIndex >= 2 ? "96px" : "100%",
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
              y: currentIndex >= 3 ? "112px" : "100%",
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
              y: currentIndex >= 4 ? "128px" : "100%",
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
              top: currentIndex === 0 ? "80vh" : "2.5rem",
              opacity: currentIndex === 0 ? 0 : 1,
              background:
                currentIndex === 0 ? "var(--background)" : "var(--foreground)",
            }}
            transition={
              isMobile
                ? { duration: durationTime }
                : { type: "spring", stiffness: 120, damping: 15 }
            }
            id={sectionIds[1]}
          >
            <h2>{sectionIds[1]}</h2>
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
                  ? "3.5rem"
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
            id={sectionIds[2]}
          >
            <h2>{sectionIds[2]}</h2>
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
                  ? "4.5rem"
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
            id={sectionIds[3]}
          >
            <h2>{sectionIds[3]}</h2>
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
                  ? "5.5rem"
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
            id={sectionIds[4]}
          >
            <h2>{sectionIds[4]}</h2>
          </motion.div>
        </div>
      )}
    </div>
  );
}
