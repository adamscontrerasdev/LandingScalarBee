import React from "react";
import { ShinyText } from "./ShinyText";

interface TitleProps {
  value: string;
  separated?: boolean;
  shiny?: boolean;
}

export const Title: React.FC<TitleProps> = ({
  value,
  separated = false,
  shiny = false,
}) => {
  return (
    <div className="">
      {shiny ? (
        <ShinyText
          text={value}
          disabled={false}
          speed={5}
          className={`text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--texts)] ${
            separated ? "tracking-widest" : ""
          }`}
        />
      ) : (
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--texts)]"
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
