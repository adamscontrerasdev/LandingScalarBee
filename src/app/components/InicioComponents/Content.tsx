"use client";
import { ButtonPrimary } from "@/app/Elements";
import SplitText from "@/app/Elements/SplitText";
import { easings } from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";

export const Content = () => {
  const [viewText, setViewText] = useState(false);
  const [viewButtons, setViewButtons] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = () => {
    setViewText(true);
  };

  useEffect(() => {
    if (viewText) {
      setTimeout(() => {
        setViewButtons(true);
      }, 1000);
    }
  }, [viewText]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const content = contentRef.current;
      if (content) {
        const maxScroll = 1000;

        let scaleValue;
        if (currentScrollY <= maxScroll / 2) {
          scaleValue = 1 - currentScrollY / (maxScroll / 2);
        } else {
          scaleValue = (currentScrollY - maxScroll / 2) / (maxScroll / 2);
        }

        const blurValue = currentScrollY / 50;

        content.style.filter = `blur(${blurValue}px)`;
        content.style.transform = `scale(${scaleValue})`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-[90%]  flex flex-col justify-start items-start  relative z-40 md:p-10 gap-5 rounded-3xl"
      ref={contentRef}
    >
      <div className="flex flex-col items-start justify-start xl:w-[45%]">
        <SplitText
          text={`Impulsa tu empresa con inteligencIA`}
          className=" font-extrabold pb-5"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing={easings.easeOutCubic}
          threshold={0.2}
          rootMargin="-50px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <p
          className=" font-bold transition-all duration-1000  text-left w-3/4"
          style={{
            opacity: viewText ? 1 : 0,
            filter: viewText ? "blur(0px)" : "blur(100px)",
          }}
        >
          Impulsa tu negocio{" "}
          <span className="text-[var(--primary-color)]">emergente</span> con
          soluciones de software a medida: innovación, eficiencia y crecimiento
          en cada <span className="text-[var(--primary-color)]">Click</span>
        </p>
      </div>

      <div className="flex gap-3">
        <ButtonPrimary
          style={{
            filter: viewButtons ? "blur(0px)" : "blur(100px)",
          }}
        />
      </div>
    </div>
  );
};
