import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/header";
import { Roboto } from "next/font/google";
import { Background } from "@/components/Background/background";
import { NavigationProvider } from "@/context/navigationContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LoiLam",
  description: "This is my Portfolio",
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
      <body className={`${roboto.className} overflow-x-hidden`}>
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
