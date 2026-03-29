import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/header";
import { JetBrains_Mono } from "next/font/google";
import { Background } from "@/components/Background/background";
import { NavigationProvider } from "@/context/navigationContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "LoiLam | Web Developer",
  description:
    "Portfolio of Loi Lam — Software Engineering student specializing in Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} font-mono overflow-x-hidden`}
      >
        <NavigationProvider>
          <Background>
            <Header />
            {children}
          </Background>
        </NavigationProvider>
      </body>
    </html>
  );
}
