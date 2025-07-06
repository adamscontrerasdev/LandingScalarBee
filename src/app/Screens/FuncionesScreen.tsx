import React from "react";
import { FuncionesContent } from "../../components";
import { FolioPageContainer } from "@/components/Elements/ReusableElements/FolioPageContainer";
import type { PropsForScreens } from "../Types";

export const FuncionesScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  return (
    <FolioPageContainer
      sectionTitle="ola"
      positionOrden={2}
      id="Servicios"
      isFocus={isFocus}
    >
      <FuncionesContent />
    </FolioPageContainer>
  );
};
