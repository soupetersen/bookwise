import { Button } from "./styles";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";

interface LoginButtonProps {
  icon: "google" | "github" | "anonymous";
  text: string;
  onClick: () => void;
}

export function LoginButton({ icon, text, onClick }: LoginButtonProps) {
  return (
    <Button onClick={onClick}>
      {icon === "google" && <FcGoogle size={32} />}
      {icon === "github" && <BsGithub size={32} />}
      {icon === "anonymous" && <BiRocket size={32} color="#8381D9" />}
      <h2>{text}</h2>
    </Button>
  );
}
