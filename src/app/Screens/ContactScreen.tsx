import { ContactContent } from "../components";
import { FolioPageContainer } from "../Elements/ReusableElements/FolioPageContainer";
import { PropsForScreens } from "../Types";

export const ContactScreen: React.FC<PropsForScreens> = ({ isFocus }) => {
  return (
    <FolioPageContainer
      positionOrden={4}
      sectionTitle="Last"
      id="Contacto"
      isFocus={isFocus}
    >
      <ContactContent />
    </FolioPageContainer>
  );
};
