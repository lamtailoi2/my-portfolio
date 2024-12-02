"use client";
import { Card, CardTitle, CardDescription } from "@/components/card";
import Image from "next/image";
import { StaticImageData } from "next/image";
import macos from "../../../public/MacOS.jpg";
interface ProjectCardProps {
  title: string;
  description: string;
  img?: string | StaticImageData;
  teamSize?: number;
  owner?: string;
  role?: string;
}

export const ProjectCard = ({
  title,
  description,
  img,
  teamSize,
  role,
}: ProjectCardProps) => {
  const imageSrc = img ?? macos;
  return (
    <Card className="w-[500px] max-h-screen h-[600px] py-5 px-10 flex flex-col justify-center items-center space-y-5 my-[50px] hover:scale-105 hover:duration-1000 hover:transition cursor-pointer">
      <CardTitle className="text-xl">{title}</CardTitle>
      <Image
        src={imageSrc}
        height={250}
        width={450}
        alt={`${title} image`}
        className="rounded-md border-2 border-gray-800"
      />

      <CardDescription>
        {teamSize && (
          <span>
            <strong className="font-bold">Team Size: </strong> {teamSize}
          </span>
        )}
        <br />
        {role && (
          <span>
            <strong className="font-bold">Role: </strong>
             {role}
          </span>
        )}
        <br />
        <span>
          <strong className="font-bold">Description: </strong>
          {description}
        </span>
      </CardDescription>
    </Card>
  );
};
