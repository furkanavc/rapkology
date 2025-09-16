"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TwitchImage from "@/assets/icons/twitch.svg";
import { FaRegHeart, FaChevronDown } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
const Live = () => {
  return (
    <div className="w-full h-[624px] flex flex-col bg-[url('@/assets/images/live-mobile.png')] md:bg-[url('@/assets/images/live.png')] bg-cover bg-center gap-6  px-10 items-center">
      <div className="flex divide-x-2 items-center divide-[#3B3B3B] max-h-[200px] md:max-h-[240px] relative gap-2 -rotate-4 pt-14 md:pt-5">
        <Image
          src={TwitchImage}
          alt="Twitch"
          className="max-w-[140px] md:max-w-none object-cover"
        />
        <div className="flex flex-col  font-saira-condensed text-[46px] md:text-[68px]">
          <h2 className="font-light leading-none">HER HAFTA</h2>
          <h2 className="text-[#F0E74D] font-bold leading-none">CANLIDAYIZ</h2>
          <span className="font-bold text-base">Bizi Takip Edin!</span>
        </div>
      </div>
      <div className="rounded-[19px] h-16 border border-[#2a2a2a] bg-[#151515] flex items-center -rotate-4 justify-center p-3 gap-4">
        <Link
          href={"https://www.twitch.tv/"}
          target="_blank"
          className="bg-[#864CF6] rounded-[7px] flex gap-1 items-center p-2 font-helvetica"
        >
          <FaRegHeart />
          <span className="">Takip Et</span>
        </Link>
        <Link
          href={"https://www.twitch.tv/"}
          target="_blank"
          className="bg-[#222123] rounded-[7px] flex gap-1 items-center p-2 font-helvetica"
        >
          <FaRegStar />
          <span className="">Abone Ol</span>
          <FaChevronDown className="text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default Live;
