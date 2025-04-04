import React from "react";
import { ShinyText } from "./ShinyText";

interface TitleProps {
  value: string;
  separated?: boolean;
  shiny?: boolean;
  variant?: "small" | "big";
  redirect?: string;
  left?: boolean;
}

export const Title: React.FC<TitleProps> = ({
  value,
  separated = false,
  shiny = false,
  variant = "big",
  redirect,
  left = false,
}) => {
  const RedirecTo = (url: string) => () => {
    window.location.href = url;
  };

  return (
    <div
      className={`redirect ${redirect ? "cursor-pointer" : ""}`}
      onClick={RedirecTo(redirect || "/")}
    >
      {shiny ? (
        <ShinyText
          text={value}
          disabled={false}
          speed={5}
          className={`font-bold text-[var(--texts)] ${
            separated ? "tracking-widest" : ""
          } ${
            variant === "small"
              ? "text-3xl md:text-5xl lg:text-6xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          } ${left ? "text-left" : "text-center"}`}
        />
      ) : (
        <h1
          className={`font-bold text-[var(--texts)] ${
            variant === "small"
              ? "text-xl md:text-2xl lg:text-3xl"
              : "text-xl md:text-5xl lg:text-6xl"
          } text-center lg:text-left ${left ? "text-left" : "text-center"}`}
          style={{
            letterSpacing: separated ? "0.1em" : "normal",
          }}
        >
          {value}
        </h1>
      )}
    </div>
  );
};
