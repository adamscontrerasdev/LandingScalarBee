import React from "react";
import { PlanesContent } from "../components";
import { FolioPageContainer } from "../Elements/ReusableElements/FolioPageContainer";
import { PropsForScreens } from "../Types";

export const PlanesScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  return (
    <FolioPageContainer
      positionOrden={3}
      sectionTitle="Last"
      id="Last"
      isFocus={isFocus}
    >
      <PlanesContent />
    </FolioPageContainer>
  );
};
