import { TestimoniosContent } from "../components";

export const TestimoniosScreen = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center  px-10 py-0 relative gap-10  md:px-10 md:py-0 xl:px-40 xl:py-20 "
      id="Testimonios"
    >
      <h2 className="text-xl md:text-6xl font-extrabold w-full text-left">
        Quienes confian en nosotros
      </h2>
      <TestimoniosContent />
    </div>
  );
};
