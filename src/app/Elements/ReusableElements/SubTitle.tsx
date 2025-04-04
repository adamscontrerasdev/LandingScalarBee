import React from "react";

export const SubTitle = ({ value }: { value: string }) => {
  const regex = /!([^!¡]+)!/g; // Busca texto entre signos de exclamación

  const parsedText = value.split(regex).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-[var(--primary)]">
        {part}
      </span>
    ) : (
      part
    )
  );

  return (
    <h2 className={`md:text-[1.4rem] font-bold text-[var(--texts)]`}>
      {parsedText}
    </h2>
  );
};
