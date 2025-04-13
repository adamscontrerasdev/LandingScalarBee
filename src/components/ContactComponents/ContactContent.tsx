import { useState } from "react";
import CircularText from "@/components/Elements/ReusableElements/CircularText";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { Title } from "@/components/Elements";
import { ButtonPrimary } from "@/components/Elements/ReusableElements/ButtonPrimary";
import { SubTitle } from "@/components/Elements/ReusableElements/SubTitle";
import { FooterContent } from "@/components/FooterComponents/FooterContent";
import { useIsMobile } from "@/app/Hooks/useIsMobile";
import { createLead } from "@/actions/leadsApi";
import {Bai_Jamjuree } from "next/font/google"

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300","400","500", "600", "700"], 
});

const CountryCodeOptions = [
  { value: "+54", label: "🇦🇷 +54" },
  { value: "+55", label: "🇧🇷 +55" },
  { value: "+57", label: "🇨🇴 +57" },
  { value: "+52", label: "🇲🇽 +52" },
  { value: "+598", label: "🇺🇾 +598" },
  { value: "+56", label: "🇨🇱 +56" },
  { value: "+51", label: "🇵🇪 +51" },
  { value: "+503", label: "🇸🇻 +503" },
  { value: "+504", label: "🇭🇳 +504" },
  { value: "+505", label: "🇳🇮 +505" },
  { value: "+506", label: "🇨🇷 +506" },
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+34", label: "🇪🇸 +34" },
  { value: "+44", label: "🇬🇧 +44" },
  { value: "+33", label: "🇫🇷 +33" },
  { value: "+49", label: "🇩🇪 +49" },
  { value: "+39", label: "🇮🇹 +39" },
  { value: "+81", label: "🇯🇵 +81" },
  { value: "+86", label: "🇨🇳 +86" },
  { value: "+61", label: "🇦🇺 +61" },
];

const SuccessAnimation = () => (
  <div className="success-animation">
    <svg
      className="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="checkmark__circle"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  </div>
);

export const ContactContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    const leadData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: `${formData.get("countryCode")}${formData.get("phone")}` as string,
    };

    try {
      await createLead(leadData);
      setIsSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === "string") {
        setError(error);
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const redes = [
    {
      id: 1,
      icon: (
        <ImFacebook2 size={40} className="w-full h-full text-[var(--texts)]" />
      ),
      text: "FACEBOOK*FACEBOOK*",
      link: "https://www.facebook.com/prubasdeusuarios/",
      bg: "#f00",
    },
    {
      id: 2,
      icon: (
        <FaInstagram size={40} className="w-full h-full text-[var(--texts)]" />
      ),
      text: "INSTAGRAM*INSTAGRAM*",
      link: "https://www.instagram.com/prubasdeusuarios/",
      bg: "#0f0",
    },
    {
      id: 3,
      icon: (
        <RiTwitterXFill
          size={40}
          className="w-full h-full text-[var(--texts)]"
        />
      ),
      text: "X*X*X*TWITTER*",
      link: "https://www.twitter.com/prubasdeusuarios/",
      bg: "#00f",
    },
    {
      id: 4,
      icon: (
        <IoIosMail size={40} className="w-full h-full text-[var(--texts)]" />
      ),
      text: "MAIL*MAIL*MAIL*",
      link: "mailto:prubasdeusuarios@example.com",
      bg: "#ff0",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 rounded-3xl w-full relative">
      <Title
        value="Bienvenido al lado PRO de las reparaciones."
        left={useIsMobile()}
      />
      <div className="w-full max-w-5xl min-h-[50vh] flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col text-center">
          <h6 className="text-2xl text-[var(--texts)] m-5">
            <strong>🏅 <span className={`${baiJamjuree.className} font-normal text-3xl tracking-wider`}>Fix</span><span className="font-bold">Bee</span> Partner - Nivel Fundador</strong>
          </h6>
          <SubTitle
            value="No es para todos. Pero si es para vos, lo vas a sentir desde el día uno."
            center
          />
          <p>
            Sé de los primeros talleres en usar esta tecnología 🚀.
          </p>
          <p>
          No estará abierto para siempre.
          </p>
        </div>

        <form
          className="flex flex-col rounded-2xl bg-[var(--foreground)] w-full max-w-96 justify-center items-center gap-5 p-5 text-base"
          style={{
            boxShadow: "0px 0px 10px var(--shadow)",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="tu nombre"
            className="w-full rounded-xl bg-[var(--background)] p-3 text-[var(--texts)] capitalize"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="tu e-mail"
            className="w-full rounded-xl bg-[var(--background)] p-3 text-[var(--texts)]"
            required
          />
          <div className="w-full rounded-xl bg-[var(--background)] p-3 text-[var(--texts)] capitalize flex gap-2">
            <select
              className="bg-[var(--background)] outline-none text-[var(--texts)]"
              defaultValue="+54"
              name="countryCode"
              required
            >
              {CountryCodeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={11}
              placeholder="numero de negocio"
              className="w-full bg-transparent outline-none"
              required
            />
          </div>

          <ButtonPrimary
            text={isLoading ? "Enviando..." : "Asegurar mi lugar 🔥"}
            className="w-full h-12 flex items-center justify-center"
            variant="outline"
            leve
            type="submit" // Aseguramos que el botón sea de tipo submit
            disabled={isLoading}
          />
        </form>

        {isSuccess && (
          <div className="mt-4 flex flex-col items-center animate-fade-in">
            <SuccessAnimation />
            <p className="text-green-500 text-lg font-semibold mt-4">
              ¡Gracias por contactarnos! Nos pondremos en contacto pronto.
            </p>
          </div>
        )}

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
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
