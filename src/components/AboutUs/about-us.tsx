"use client";
import Image from "next/image";
import me from "../../../public/me14.webp";
import { Button } from "@/components/button";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
export const AboutUs = () => {
  const handleClick = () => {
    window.location.href = "mailto:lamtailoi11141@gmail.com";
  };
  const { homeRef } = useContext(NavigationContext);
  return (
    <div
      className="flex justify-around mb-[100px] relative items-center space-x-[300px]"
      ref={homeRef}
    >
      <div className="flex flex-col space-y-3">
        <h1 className="text-5xl text-white font-semibold mt-[50%]">
          Hello World, I&apos;m Loi <span className="text-[#9746fa]">Lam</span>
        </h1>
        <h2 className="text-3xl text-[#BB86FC]">Web Developer</h2>
        <div className="text-gray-100  text-xl  w-[650px]">
          <p className="tracking-tight text-balance">
            A dedicated Software Engineering student with a focus on Web
            Development. Proficient in developing responsive, user-centered
            applications.
          </p>
        </div>
        <div className="flex gap-5 text-xl">
          <Button
            variant={"outline"}
            className="text-xl transition duration-300 border-2 border-transparent"
          >
            About Me
          </Button>
          <Button
            onClick={handleClick}
            variant={"default"}
            className="border-2 text-xl transition duration-300 hover:bg-white hover:border-transparent hover:text-black"
          >
            Let&apos;s Talk
          </Button>
        </div>
        <div className="flex space-x-4 absolute bottom-[-50px]">
          <Link
            href="https://github.com/lamtailoi2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent w-[55px] h-[55px] rounded-full text-white hover:bg-gray-700 transition-colors flex justify-center items-center border-white border-2"
            aria-label="GitHub"
          >
            <Github size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/l%E1%BB%A3i-l%C3%A2m-1b1890294/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent w-[55px] h-[55px] rounded-full text-white hover:bg-gray-700 transition-colors flex justify-center items-center border-white border-2"
            aria-label="LinkedIn"
          >
            <Linkedin size={30} />
          </Link>
          <Link
            href="https://www.facebook.com/L14L07I"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent w-[55px] h-[55px] rounded-full text-white hover:bg-gray-700 transition-colors flex justify-center items-center border-white border-2"
            aria-label="Facebook"
          >
            <Facebook size={30} />
          </Link>
        </div>
      </div>
      <div>
        <Image
          alt="My cool Img"
          src={me}
          width={420}
          className="translate-y-[50px] transition duration-1000 hover:scale-90"
        />
      </div>
    </div>
  );
};
