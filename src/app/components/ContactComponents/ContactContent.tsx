import { CircularText } from "@/app/components";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

export const ContactContent = () => {
  const redes = [
    {
      id: 1,
      icon: <ImFacebook2 size={40} className="w-full h-full text-[var(--texts)]" />, // Aquí pasamos el componente
      text: "FACEBOOK*FACEBOOK*",
      link: "https://www.facebook.com/prubasdeusuarios/",
      bg: "#f00",
    },
    {
      id: 2,
      icon: <FaInstagram size={40} className="w-full h-full text-[var(--texts)]" />,
      text: "INSTAGRAM*INSTAGRAM*",
      link: "https://www.instagram.com/prubasdeusuarios/",
      bg: "#0f0",
    },
    {
      id: 3,
      icon: <RiTwitterXFill size={40} className="w-full h-full text-[var(--texts)]" />,
      text: "X*X*X*TWITTER*",
      link: "https://www.twitter.com/prubasdeusuarios/",
      bg: "#00f",
    },
    {
      id: 4,
      icon: <IoIosMail size={40} className="w-full h-full text-[var(--texts)]" />,
      text: "MAIL*MAIL*MAIL*",
      link: "mailto:prubasdeusuarios@example.com",
      bg: "#ff0",
    },
  ];

  return (
    <div className="w-full  h-full flex flex-col justify-start items-start gap-10 ">
      <h1 className="text-6xl font-extrabold">Contactemos</h1>
      <div className=" w-full h-auto flex justify-center items-center">
        {redes.map((red) => (
          <a
            key={red.id} // Es importante incluir una `key` única aquí
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
            <div className="w-5 md:w-14 h-5 md:h-14  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              {red.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
