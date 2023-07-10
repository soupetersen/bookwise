"use client";

import { Container, ImageContainer, LoginCard, LoginContainer } from "./styles";
import Image from "next/image";

import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { LoginButton } from "@/components/LoginButton";
import LoginImage from "public/login-image.png";
import Logo from "public/logo.png";

export default function Signin() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    redirect("/home");
  }

  async function handleGoogleSignin() {
    await signIn("google", { callbackUrl: "/" });
  }

  async function handleGithubSignin() {
    await signIn("github", {
      callbackUrl: "/",
    });
  }

  async function handleAnonymousSignin() {
    router.push("/home");
  }

  return (
    <Container>
      {status === "loading" ? (
        <></>
      ) : (
        <>
          <ImageContainer>
            <Image
              width={598}
              height={912}
              src={LoginImage}
              alt="login image"
            />
            <Image className="logo" src={Logo} alt="logo" />
          </ImageContainer>
          <LoginContainer>
            <LoginCard>
              <h1>Boas vindas!</h1>
              <p>Faça seu login ou acesse como visitante.</p>
            </LoginCard>
            <LoginButton
              icon="google"
              text="Entrar com Google"
              onClick={handleGoogleSignin}
            />
            <LoginButton
              icon="github"
              text="Entrar com Github"
              onClick={handleGithubSignin}
            />
            <LoginButton
              icon="anonymous"
              text="Acessar como visitante"
              onClick={handleAnonymousSignin}
            />
          </LoginContainer>
        </>
      )}
    </Container>
  );
}
