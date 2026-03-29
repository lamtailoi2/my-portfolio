"use client";
import { Button } from "@/components/button";
import { DownloadIcon } from "lucide-react";

export const DowloadCV = () => {
  const handleDowload = () => {
    window.open(
      "https://flowcv.com/resume/mr7sjrtaht",
      "_blank"
    );
  };
  return (
    <>
      <section className="w-full flex justify-center pb-20 lg:pb-32 px-4">
        <Button
          className="bg-dracula-green text-dracula-bg hover:bg-dracula-green/80 w-[170px] p-7 flex justify-center items-center text-xl font-semibold gap-2 transition-colors duration-300"
          onClick={handleDowload}
        >
          <DownloadIcon size={24} />
          Download CV
        </Button>
      </section>
    </>
  );
};
