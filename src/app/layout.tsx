"use client";

import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { globalStyles } from "@/styles/global";
import { getCssText } from "@/stitches.config";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import Sidebar from "./home/components/sidebar";
import { styled } from "@stitches/react";

const nunito = Nunito({
  variable: "--nunito-font",
  subsets: ["latin"],
});

const LayoutContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "100vh",
  padding: "$4",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={nunito.variable}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider refetchOnWindowFocus={false}>
            <LayoutContainer>
              <Sidebar />
              {children}
            </LayoutContainer>
            {globalStyles()}
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
