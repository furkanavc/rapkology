import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { NavLinks } from "@/utils/constants/nav";
import Link from "next/link";
const MobileMenu = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#121212] z-50 flex flex-col items-center gap-5 ">
      <div className="flex items-center h-[80px] px-[18px] w-full justify-between">
        <Image src="/logo.svg" alt="Logo" width={235} height={59} />

        <IoClose
          className="text-3xl  cursor-pointer text-[#F0E74D]"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <nav className="flex flex-col items-center gap-6">
        {NavLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm hover:opacity-70 duration-300"
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col-reverse items-center gap-4 ">
        <Image src="/icons/magnifier.svg" alt="Search" width={23} height={22} />
        <Link
          href="/"
          className="text-sm font-bold text-black bg-white h-[40px] w-[120px] flex items-center justify-center hover:opacity-70 duration-300"
        >
          GİRİŞ YAP
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
