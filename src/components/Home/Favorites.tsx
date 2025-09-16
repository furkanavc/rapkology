"use client";
import React from "react";
import Image from "next/image";
import FavoritesLogos from "@/assets/images/favorites-logos.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { FavoritesData } from "@/utils/constants/sliderData";
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import { useState, useEffect } from "react";
const Favorites = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row pt-24 lg:pt-0 gap-5 lg:gap-0 w-full items-center min-h-[447px] justify-between">
      <Image
        src={FavoritesLogos}
        alt="Logos"
        className="absolute top-0 left-0"
      />
      <h1 className="text-center lg:text-start font-bold text-[40px] lg:text-6xl font-saira-condensed w-full lg:ml-72">
        AYIN <br /> FAVORİLERİ
      </h1>
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        spaceBetween={isMobile ? 10 : 40}
        centeredSlides={isMobile ? true : false}
        slidesPerView={isMobile ? 2 : 3}
        loop={isMobile ? false : true}
        className="w-full !pb-10"
      >
        {FavoritesData.map((item) => (
          <SwiperSlide key={item.id} className=" max-w-fit ">
            <Link href={item.href} className="relative">
              <Image
                src={isMobile ? item.imageMobile : item.image}
                alt={item.name}
                className=""
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Favorites;
