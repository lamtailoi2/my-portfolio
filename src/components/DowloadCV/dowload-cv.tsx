"use client";
import { Button } from "@/components/button";
import { DownloadIcon } from "lucide-react";

export const DowloadCV = () => {
  const handleDowload = () => {
    window.open(
      "https://drive.google.com/file/d/1bPWc0QdgWMcWdR5AvEEmwzxsdH0WXf7x/view?usp=sharing"
    );
  };
  return (
    <>
      <div>
        <Button
          className="bg-dracula-green text-dracula-bg hover:bg-dracula-green/80 w-[170px] p-7 flex justify-center items-center text-xl font-semibold gap-2 transition-colors duration-300"
          onClick={handleDowload}
        >
          <DownloadIcon size={24} />
          Download CV
        </Button>
      </div>
    </>
  );
};
