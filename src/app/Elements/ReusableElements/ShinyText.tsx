"use client";
import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  color = "#b5b5b5a4",
}) => {
  return (
    <span
      className={`inline-block ${className} text-center lg:text-left`}
      style={{
        color: color,
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        animation: disabled ? "none" : `shine ${speed}s linear infinite`,
      }}
    >
      {text}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </span>
  );
};
