import React from "react";
import { ShinyText } from "./ShinyText";

interface TitleProps {
  value: string;
  separated?: boolean;
  shiny?: boolean;
  variant?: "small" | "big";
  redirect?: string;
}

export const Title: React.FC<TitleProps> = ({
  value,
  separated = false,
  shiny = false,
  variant = "big",
  redirect,
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
              ? "text-4xl md:text-5xl lg:text-6xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          }`}
        />
      ) : (
        <h1
          className={`font-bold text-[var(--texts)] ${
            variant === "small"
              ? "text-xl md:text-3xl lg:text-5xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          }`}
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
