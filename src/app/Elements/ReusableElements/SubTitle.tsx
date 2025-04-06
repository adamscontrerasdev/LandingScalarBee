import React from "react";

export const SubTitle = ({
  value,
  center = false,
}: {
  value: string;
  center?: boolean;
}) => {
  const regex = /!([^!¡]+)!/g; // Busca texto entre signos de exclamación

  const parsedText = value.split(regex).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-[var(--primary)]">
        {part}
      </span>
    ) : (
      part
    ),
  );

  return (
    <h2
      className={`md:text-[1.4rem] font-bold text-[var(--texts)] ${
        center ? "text-center" : ""
      }`}
    >
      {parsedText}
    </h2>
  );
};
