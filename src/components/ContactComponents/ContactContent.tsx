import CircularText from "@/components/Elements/ReusableElements/CircularText";
import { FaInstagram } from "react-icons/fa";
import { ButtonPrimary } from "@/components/Elements/ReusableElements/ButtonPrimary";
import { FooterContent } from "@/components/FooterComponents/FooterContent";

export const ContactContent = () => {
  const redes = [
    // {
    //   id: 1,
    //   icon: (
    //     <ImFacebook2 size={40} className="w-full h-full text-[var(--texts)]" />
    //   ),
    //   text: "FACEBOOK*FACEBOOK*",
    //   link: "https://www.facebook.com/prubasdeusuarios/",
    //   bg: "#f00",
    // },
    {
      id: 2,
      icon: (
        <FaInstagram size={40} className="w-full h-full text-[var(--texts)]" />
      ),
      text: "INSTAGRAM*INSTAGRAM*",
      link: "https://www.instagram.com/beescend.app/",
      bg: "#0f0",
    },
    // {
    //   id: 3,
    //   icon: (
    //     <RiTwitterXFill
    //       size={40}
    //       className="w-full h-full text-[var(--texts)]"
    //     />
    //   ),
    //   text: "X*X*X*TWITTER*",
    //   link: "https://www.twitter.com/prubasdeusuarios/",
    //   bg: "#00f",
    // },
    // {
    //   id: 4,
    //   icon: (
    //     <IoIosMail size={40} className="w-full h-full text-[var(--texts)]" />
    //   ),
    //   text: "MAIL*MAIL*MAIL*",
    //   link: "mailto:business@aubia.com.ar",
    //   bg: "#ff0",
    // },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 rounded-3xl w-full relative">
      <div className="flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-yellow-300 via-transparent to-yellow-400 rounded-2xl shadow-2xl p-6 max-w-2xl w-full animate-fade-in border-4 border-yellow-500 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--texts)] mb-2 drop-shadow-lg">
          ¡Acceso exclusivo al <br />
          <span className="text-[var(--primary)]">Pre-Lanzamiento</span>!
        </h2>
        <p className="text-lg md:text-xl text-yellow-900 mb-4 font-semibold">
          Sé de los primeros en descubrir FixBee. Esta oportunidad es única y
          limitada solo para talleres visionarios.
        </p>
        <ButtonPrimary
          text="Quiero mi lugar en el pre-lanzamiento 🚀"
          variant="fill"
          black
          leve
        />
        <span className="text-xs text-[var(--texts)] opacity-80 mt-2 font-medium">
          ¡Cupos súper limitados para el pre-lanzamiento fundador!
        </span>
      </div>

      <div className="w-full h-auto flex justify-center items-center">
        {redes.map((red) => (
          <a
            key={red.id}
            href={red.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/4 h-full flex justify-center items-center relative"
            style={{
              marginTop: red.id === 2 || red.id === 3 ? "50px" : "",
            }}
          >
            <CircularText
              text={red.text}
              onHover="pause"
              spinDuration={20}
              className="custom-class z-20 scale-30 md:scale-60 lg:scale-80 xl:scale-100"
            />
            <div className="w-5 md:w-14 h-5 md:h-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              {red.icon}
            </div>
          </a>
        ))}
      </div>
      <FooterContent />
    </div>
  );
};

export default ContactContent;
