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
    <button
      className={`text-base font-bold bg-[var(--primary-color)] rounded-xl cursor-pointer hover:scale-105 hover:bg-[var(--primary-color-dark)] transition-all duration-500 relative z-[99999] text-black ${className} p-[10px]`}
      style={style}
    >
      {text}
    </button>
  );
};
