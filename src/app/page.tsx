import {
  InicioScreen,
  BeneficiosScreen,
  ServiciosScreen,
  LastCtaScreen,
  ContactScreen,
  Footer,
} from "./Screens";

export default function Home() {
  return (
    <div className="">
      <InicioScreen />
      <BeneficiosScreen />
      <ServiciosScreen />
      {/* <TestimoniosScreen /> */}
      <LastCtaScreen />
      <ContactScreen />
      <Footer />
    </div>
  );
}
