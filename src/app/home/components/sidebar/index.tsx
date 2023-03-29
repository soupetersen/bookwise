import { NavButton } from "@/components/NavButton";
import { SideBarContainer } from "./styles";
import Logo from "public/logo.png";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { BsBinoculars, BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function Sidebar() {
  const pathName = usePathname();
  const params = useSearchParams()?.get("tab");

  function handleLogout() {}

  function handleLogin() {}

  function handleProfile() {
    console.log("profile");
  }

  return (
    <SideBarContainer>
      <Image src={Logo} alt="logo" width={128} height={32} />
      <section>
        <NavButton
          url="/home"
          active={pathName == "/home" && !params}
          Icon={BsGraphUpArrow}
          text="Inicio"
        />

        <NavButton
          url="/home/explore"
          active={pathName == "/home/explore" && !params}
          Icon={BsBinoculars}
          text="Explorar"
        />

        <NavButton
          url="/home?tab=profile"
          active={params == "profile"}
          Icon={AiOutlineUser}
          iconSize={26}
          text="Perfil"
        />
      </section>
      <footer>Fazer logout</footer>
    </SideBarContainer>
  );
}
