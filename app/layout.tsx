import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Container from "@/components/global/Container";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { ClerkProvider } from '@clerk/nextjs'



export const metadata: Metadata = {
  title: "GizmoNest | Soft, Modern Furniture for Your Cozy Space",
  description: "GizmoNest offers pastel chairs, soft rugs, and cute home essentials curated for a calming, stylish, and Instagram-worthy living space.",
};

export default function RootLayout({children,}
  : Readonly<{children: React.ReactNode;}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Toaster />
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <NavBar />
              
            <Container className="pt-20">
              {children}
            </Container>
              
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
