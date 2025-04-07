import React from "react";
import { BeneficiosContent } from "../../components";
import { FolioPageContainer } from "@/components/Elements/ReusableElements/FolioPageContainer";
import { PropsForScreens } from "../Types";

export const BeneficiosScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  return (
    <FolioPageContainer
      sectionTitle="Beneficios"
      positionOrden={1}
      id={"Beneficios"}
      isFocus={isFocus}
    >
      <BeneficiosContent isFocus={isFocus} />
    </FolioPageContainer>
  );
};
