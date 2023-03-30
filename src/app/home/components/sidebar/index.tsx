import { NavButton } from "@/components/NavButton";
import { SideBarContainer } from "./styles";
import Logo from "public/logo.png";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { BsBinoculars, BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const pathName = usePathname();
  const params = useSearchParams()?.get("tab");

  function handleLogout() {
    signOut({
      callbackUrl: "http://localhost:3000",
    });
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
          url="/home/profile"
          active={params == "/home/profile"}
          Icon={AiOutlineUser}
          iconSize={26}
          text="Perfil"
        />
      </section>
      <footer>
        <button onClick={handleLogout}>Fazer logout</button>
      </footer>
    </SideBarContainer>
  );
}
