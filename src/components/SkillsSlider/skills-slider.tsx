"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { type Skill } from "@/interfaces";
import Image from "next/image";
import { Suspense } from "react";
import { Spinner } from "../spinner";
interface SkillsSliderProps {
  skills: Skill[];
}

export const SkillsSlider = ({ skills }: SkillsSliderProps) => {
  const settings: Settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="w-[75%] flex justify-center my-[70px]">
      {skills.map((skill) => {
        return (
          <Suspense
            key={skill.name}
            fallback={<Spinner size={"medium"} className="text-white" />}
          >
            <div className="flex flex-col justify-center items-center">
              <Image
                src={skill.image}
                alt={skill.name}
                width={80}
                height={80}
              />
            </div>
          </Suspense>
        );
      })}
    </Slider>
  );
};
