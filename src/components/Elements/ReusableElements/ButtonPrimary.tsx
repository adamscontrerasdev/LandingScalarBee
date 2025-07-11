import CountUp from "./CountUp";
import { Magnet } from "./Magnet";
import { useQueryParams } from "@/app/Hooks/useQueryParams";

interface ButtonPrimaryProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  notify?: boolean;
  variant?: "fill" | "outline";
  leve?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  black?: boolean;
  type?: "button" | "submit" | "reset"; // Agregamos el atributo type
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text = "Reservar una demostración",
  className,
  style,
  notify = false,
  variant,
  leve = false,
  onClick,
  disabled = false,
  type = "button", 
  black// Valor predeterminado para type
}) => {
  const { sellerId, leadId } = useQueryParams();

  const getRegisterLink = () => {
    const params = new URLSearchParams();
    params.append("tab", "register");
    if (sellerId) params.append("seller_id", sellerId);
    if (leadId) params.append("lead_id", leadId);
    return `https://app.beescend.com/?${params.toString()}`;
  };

  return (
    <Magnet 
      padding={200}
      disabled={false}
      magnetStrength={!leve ? 20 : 50}
      className="relative overflow-visible w-full"
    >
      <button
        type={type} // Pasamos el atributo type al botón
        className={`text-base font-bold rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 relative z-[99999] text-[var(--texts)] ${className} p-3 text-base md:text-xl ${black ? "text-black" : ""} ${
          variant
            ? variant === "fill"
              ? "bg-[var(--primary)]"
              : "bg-transparent border-[var(--primary)] border-2"
            : "bg-[var(--foreground)]"
        }`}
        style={style}
        onClick={onClick ? onClick : () => {
          window.open(getRegisterLink(), "_blank");
        }}
        disabled={disabled}
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