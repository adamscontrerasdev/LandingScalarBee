"use client";
import { InfiniteMenu } from "../ReusableComponents/InfiniteMenu";

export const TestimoniosContent = () => {
  const items = [
    {
      image: "/Img/Testimonios/httpssubstack-post-media.s3.amaz.png",
      link: "https://google.com/",
      title: "Apple",
      description: "Sistemas de gestion de empleados automatizada",
    },
    {
      image: "/Img/Testimonios/images.png",
      link: "https://google.com/",
      title: "Fravega",
      description: "Pagos de sueldos automaticos",
    },
    {
      image: "/Img/Testimonios/imagesKioco.png",
      link: "https://google.com/",
      title: "Kioscos Open 25",
      description: "This is pretty cool, right?",
    },
    {
      image: "/Img/Testimonios/samsung-logo-samsung-icon-free-f.png",
      link: "https://google.com/",
      title: "Samsung",
      description: "This is pretty cool, right?",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full gap-">
      <div className="w-[90vw] md:w-[50vw] lg:w-[30vw] flex justify-center items-center top-0 left-0 rounded-3xl overflow-hidden border-[1px] border-gray-600 bg-amber-200 aspect-square">
        <InfiniteMenu items={items} />
      </div>
      <div className="bg-blue-600 w-[90vw] md:w-[50vw] lg:w-[30vw] flex justify-center items-center rounded-3xl overflow-hidden border-[1px] border-gray-600 aspect-square">
        <p>{}</p>
      </div>
    </div>
  );
};
