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
          className="bg-primary text-white w-[150px] p-7  flex justify-center items-center text-xl"
          onClick={handleDowload}
        >
          <DownloadIcon size={24} />
          Dowload CV
        </Button>
      </div>
    </>
  );
};
