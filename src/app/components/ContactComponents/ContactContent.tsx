// import { CircularText } from "@/app/components";
// import { ImFacebook2 } from "react-icons/im";
// import { FaInstagram } from "react-icons/fa";
// import { RiTwitterXFill } from "react-icons/ri";
// import { IoIosMail } from "react-icons/io";
import { Title } from "@/app/Elements";
import { ButtonPrimary } from "@/app/Elements/ReusableElements/ButtonPrimary";
import { SubTitle } from "@/app/Elements/ReusableElements/SubTitle";
import { FooterContent } from "@/app/components/FooterComponents/FooterContent";

const CountryCodeOptions = [{ value: "+54", label: "🇦🇷 +54" }];

export const ContactContent = () => {
  // const redes = [
  //   {
  //     id: 1,
  //     icon: (
  //       <ImFacebook2 size={40} className="w-full h-full text-[var(--texts)]" />
  //     ), // Aquí pasamos el componente
  //     text: "FACEBOOK*FACEBOOK*",
  //     link: "https://www.facebook.com/prubasdeusuarios/",
  //     bg: "#f00",
  //   },
  //   {
  //     id: 2,
  //     icon: (
  //       <FaInstagram size={40} className="w-full h-full text-[var(--texts)]" />
  //     ),
  //     text: "INSTAGRAM*INSTAGRAM*",
  //     link: "https://www.instagram.com/prubasdeusuarios/",
  //     bg: "#0f0",
  //   },
  //   {
  //     id: 3,
  //     icon: (
  //       <RiTwitterXFill
  //         size={40}
  //         className="w-full h-full text-[var(--texts)]"
  //       />
  //     ),
  //     text: "X*X*X*TWITTER*",
  //     link: "https://www.twitter.com/prubasdeusuarios/",
  //     bg: "#00f",
  //   },
  //   {
  //     id: 4,
  //     icon: (
  //       <IoIosMail size={40} className="w-full h-full text-[var(--texts)]" />
  //     ),
  //     text: "MAIL*MAIL*MAIL*",
  //     link: "mailto:prubasdeusuarios@example.com",
  //     bg: "#ff0",
  //   },
  // ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 rounded-3xl w-full relative px-5 ">
      <Title value="Contactemos" shiny />
      <div className="w-full max-w-5xl min-h-[50vh] flex flex-col  justify-center items-center gap-10 px-5">
        <form
          className="flex flex-col rounded-2xl bg-[var(--foreground)] w-full max-w-96  justify-center items-center gap-5 p-5 text-base"
          style={{
            boxShadow: "0px 0px 10px var(--shadow)",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full  rounded-xl bg-[var(--background)] p-3  text-[var(--texts)]  capitalize"
          />
          <input
            type="mail"
            placeholder="Email"
            className="w-full   rounded-xl bg-[var(--background)] p-3  text-[var(--texts)]  capitalize"
          />
          <div className="w-full rounded-xl bg-[var(--background)] p-3  text-[var(--texts)]  capitalize flex gap-2">
            <select
              className="bg-[var(--background)] outline-none text-[var(--texts)]"
              defaultValue="+58"
              name="countryCode"
            >
              {CountryCodeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Ej: 11 1234 5678"
              className="w-full bg-transparent outline-none"
            />
          </div>

          <ButtonPrimary
            text="Enviar"
            className="w-full"
            variant="outline"
            leve
          ></ButtonPrimary>
        </form>
        <div className="w-full h-full  rounded-xl">
          <Title value="¡Queremos estar en contacto!" />
          <SubTitle
            value="Completá tus datos para recibir información importante sobre el acceso exclusivo a nuestra beta y novedades de nuestra empresa. Solo te enviaremos mensajes relevantes y útiles."
            center
          />
        </div>
      </div>
      {/* <div className=" w-full h-auto flex justify-center items-center">
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
      </div> */}
      <FooterContent />
    </div>
  );
};
