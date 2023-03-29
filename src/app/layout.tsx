"use client";

import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { globalStyles } from "@/styles/global";
import { getCssText } from "@/stitches.config";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

const nunito = Nunito({
  variable: "--nunito-font",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={nunito.variable}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider refetchOnWindowFocus={false}>
            {children}
            {globalStyles()}
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
