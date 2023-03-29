import { IconType } from "react-icons/lib";
import { NavLink } from "./styles";

interface NavButtonProps {
  text: string;
  url: string;
  Icon: IconType;
  active: boolean;
  iconSize?: number;
  size?: number;
  onClick?: () => void;
}

export function NavButton({
  text,
  Icon,
  url,
  iconSize,
  active,
  onClick,
}: NavButtonProps) {
  return (
    <NavLink onClick={onClick} href={url} className={active ? "active" : ""}>
      <Icon size={iconSize ? iconSize : 24} />
      {text}
    </NavLink>
  );
}
