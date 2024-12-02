import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h2 className="text-2xl font-bold text-primary-foreground mb-4">
        Connect With Me
      </h2>
      <div className="flex space-x-4">
        <SocialLink
          href="https://www.facebook.com/L14L07I"
          icon={<Facebook size={30} />}
          label="Facebook"
        />
        <SocialLink
          href="https://www.instagram.com/https://www.instagram.com/l14t7l/"
          icon={<Instagram size={30} />}
          label="Instagram"
        />
        <SocialLink
          href="https://www.linkedin.com/in/l%E1%BB%A3i-l%C3%A2m-1b1890294/"
          icon={<Linkedin size={30} />}
          label="LinkedIn"
        />
      </div>
    </div>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-700 w-[55px] h-[55px] rounded-full text-primary-foreground hover:bg-gray-600 transition-colors flex justify-center items-center border-gray-500 border-2"
    aria-label={label}
  >
    {icon}
  </Link>
);
