"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { NavLinks } from "@/utils/constants/nav";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="border-b border-[#2A2A2A] bg-[#121212]/10 backdrop-blur-2xl">
        <div className="h-[80px] flex items-center justify-between px-[18px] lg:px-0 container mx-auto ">
          <Image src="/logo.svg" alt="Logo" width={235} height={59} />
          <Image
            src="/icons/hamburger-menu.svg"
            alt="Menu"
            width={30}
            height={10}
            className="block lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
          <nav className="hidden lg:flex  items-center gap-6">
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
          <div className="hidden items-center gap-4 lg:flex">
            <Image
              src="/icons/magnifier.svg"
              alt="Search"
              width={23}
              height={22}
            />
            <Link
              href="/"
              className="text-sm font-bold text-black bg-white h-[40px] w-[120px] flex items-center justify-center hover:opacity-70 duration-300"
            >
              GİRİŞ YAP
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileMenu setIsOpen={setIsMenuOpen} />}
    </>
  );
};

export default Header;
