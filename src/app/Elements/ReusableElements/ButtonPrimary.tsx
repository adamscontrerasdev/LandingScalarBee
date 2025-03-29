import { Magnet } from "./Magnet";

interface ButtonPrimaryProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text = "Reservar una demostración",
  className,
  style,
}) => {
  return (
    <Magnet padding={200} disabled={false} magnetStrength={20}>
      <button
        className={`text-base font-bold bg-[var(--foreground)] rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 relative z-[99999] text-[var(--texts)] ${className} p-3 text-base md:text-xl`}
        style={style}
      >
        {text}
      </button>
    </Magnet>
  );
};
