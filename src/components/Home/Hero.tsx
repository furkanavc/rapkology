"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Hero = () => {
  const pathname = usePathname();
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <SwiperSlide
          className={clsx(
            "w-full",
            pathname === "/" ? "min-h-[100dvh]" : "min-h-[calc(100dvh-80px)]"
          )}
          key={item}
        >
          Slide {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
