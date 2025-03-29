import React from "react";
import { LastCtaContent } from "../components";
import { FolioPageContainer } from "../Elements/ReusableElements/FolioPageContainer";
import { PropsForScreens } from "../Types";

export const LastCtaScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  return (
    <FolioPageContainer positionOrden={3} sectionTitle="Last" id="Last" isFocus={isFocus}>
      <LastCtaContent />
    </FolioPageContainer>
  );
};
