"use client";
import Image from "next/image";
import me from "../../../public/me14.webp";
import { Button } from "@/components/button";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
import { Typewriter } from "react-simple-typewriter";
export const AboutUs = () => {
  const handleClick = () => {
    window.location.href = "mailto:lamtailoi11141@gmail.com";
  };
  const { homeRef } = useContext(NavigationContext);
  return (
    <div
      className="flex justify-around mb-[100px] mt-[50px] mx-[50px] relative items-center space-x-[300px] "
      ref={homeRef}
    >
      <div className="flex flex-col gap-y-5">
        <h1 className="text-5xl text-white font-semibold ">
          Hello World, I&apos;m Loi <span className="text-[#9746fa]">Lam</span>
        </h1>
        {/* <h2 className="text-3xl text-[#BB86FC] animate-typewriter">Web Developer</h2> */}
        <h2 className="text-3xl text-[#BB86FC]">
          <Typewriter words={["Web Developer"]} loop cursor delaySpeed={3000} typeSpeed={100} />
        </h2>

        <div className="text-gray-100  text-xl  w-[650px] flex flex-col gap-y-2">
          <p className="tracking-tight text-left">
            I am a dedicated Software Engineering student specializing in Web
            Development, passionate about creating responsive, user-centered
            applications that solve real-world problems.
          </p>
          <p className="tracking-tight text-left">
            <strong className="italic">
              &quot;Your future is created by what you do today, not
              tomorrow.&quot;
            </strong>
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
        <div className="flex gap-5">
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
          width={300}
          className=" transition duration-1000 hover:scale-90"
        />
      </div>
    </div>
  );
};
