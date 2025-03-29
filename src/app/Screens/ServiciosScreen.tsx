import React from "react";
import { ServiciciosContent } from "../components";
import { FolioPageContainer } from "../Elements/ReusableElements/FolioPageContainer";
import { PropsForScreens } from "../Types";

export const ServiciosScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  return (
    <FolioPageContainer
      sectionTitle="ola"
      positionOrden={2}
      id="Servicios"
      isFocus={isFocus}
    >
      <ServiciciosContent></ServiciciosContent>
    </FolioPageContainer>
  );
};
