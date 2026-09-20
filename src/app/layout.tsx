import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/header";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Background } from "@/components/Background/background";
import { profile } from "@/content/profile";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.targetRole}`,
  description: profile.valueProposition,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Background>
          <Header />
          <main id="main-content">{children}</main>
        </Background>
      </body>
    </html>
  );
}
