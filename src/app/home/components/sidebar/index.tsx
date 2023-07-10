import { NavButton } from "@/components/NavButton";
import { SideBarContainer } from "./styles";
import Logo from "public/logo.png";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsBinoculars, BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const params = useSearchParams()?.get("tab");

  const authenticated = status === "authenticated";

  function handleLogout() {
    signOut({
      callbackUrl: "http://localhost:3000",
    });
  }

  function handleLogin() {
    router.push("/auth");
  }

  if (pathName == "/auth") {
    return <></>;
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

        {authenticated && ( 
          <NavButton
            url="/home/profile"
            active={params == "/home/profile"}
            Icon={AiOutlineUser}
            iconSize={26}
            text="Perfil"
          /> 
        )}
       
      </section>
      <footer>
        {authenticated ? (
          <button onClick={handleLogout}>Fazer logout</button>
        ) : (
          <button onClick={handleLogin}>Fazer login</button>
        )}
      </footer>
    </SideBarContainer>
  );
}
