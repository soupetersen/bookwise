import { AllButton } from "./styles";
import { RiArrowRightSLine } from "react-icons/ri";

interface ShowAllButtonProps {
  onClick: () => void;
}

export function ShowAllButton({ onClick }: ShowAllButtonProps) {
  return (
    <AllButton>
      <p>Ver todos</p>
      <RiArrowRightSLine size={22} />
    </AllButton>
  );
}
