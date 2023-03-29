"use client";

import Sidebar from "./components/sidebar";
import { HomeLayoutContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: LayoutProps) {
  return (
    <HomeLayoutContainer>
      <Sidebar />
      {children}
    </HomeLayoutContainer>
  );
}
