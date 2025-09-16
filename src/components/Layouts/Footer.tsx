import React from "react";
import clsx from "clsx";
import { SocialData } from "@/utils/constants/social";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { NavLinks } from "@/utils/constants/nav";
interface FooterProps {
  className?: string;
  textSize?: string;
}
const Footer = ({ className, textSize }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <div
      className={clsx(
        "flex  items-center  gap-10 py-10 px-5 lg:px-0",
        className ?? "flex-col"
      )}
    >
      <div className="flex flex-col gap-7">
        <h2
          className={clsx(
            "font-bold font-saira-condensed",
            textSize ?? "text-[25px] md:text-[40px]"
          )}
        >
          GELİŞMELERDEN İLK SEN HABERDAR OL!
        </h2>
        <div className="flex items-center border-b border-[#3B3B3B] p-3 w-full text-sm gap-2">
          <input
            type="text"
            placeholder="EMAIL"
            className="w-full placeholder:text-white focus:outline-none"
          />
          <button className="flex items-center gap-2 text-[#F0E74D]">
            <span>GÖNDER</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col  gap-5">
        <div className="flex gap-2">
          {SocialData.map((item) => {
            return [
              <Link href={item.href} key={item.id} target="_blank">
                <item.icon className="text-[#F0E74D] text-2xl" />
              </Link>,
            ];
          })}
        </div>
        <div className="flex flex-wrap  gap-5">
          {NavLinks.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.name}
                className="text-sm hover:opacity-70 duration-300"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <span className="text-[#5C5C5C]">
          © RAPKOLOGY All Rights Are Reserved {year}.
        </span>
      </div>
    </div>
  );
};

export default Footer;
