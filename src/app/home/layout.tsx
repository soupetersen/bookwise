"use client";

import Sidebar from "./components/sidebar";
import { useSession } from "next-auth/react";
import { HomeLayoutContainer } from "./styles";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: LayoutProps) {
  const { data: session } = useSession();

  if (!session) {
    return redirect("/auth");
  }

  return (
    <HomeLayoutContainer>
      <Sidebar />
      {children}
    </HomeLayoutContainer>
  );
}
