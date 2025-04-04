import CountUp from "./CountUp";
import { Magnet } from "./Magnet";

interface ButtonPrimaryProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  notify?: boolean;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text = "Reservar una demostración",
  className,
  style,
  notify = false,
}) => {
  return (
    <Magnet
      padding={200}
      disabled={false}
      magnetStrength={20}
      className="relative overflow-visible w-full"
    >
      <button
        className={`text-base font-bold bg-[var(--foreground)] rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 relative z-[99999] text-[var(--texts)] ${className} p-3 text-base md:text-xl`}
        style={style}
      >
        {text}
        {notify && (
          <div className="w-6 h-6 absolute -top-3 -right-3 bg-red-500 rounded-full z-50 flex justify-center items-center text-sm text-white">
            <CountUp
              from={1}
              to={99}
              separator=","
              direction="up"
              duration={1}
              delay={0.5}
              className="count-up-text"
            />
          </div>
        )}
      </button>
    </Magnet>
  );
};
