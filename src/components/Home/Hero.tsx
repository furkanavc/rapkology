"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { HomeHeroData } from "@/utils/constants/sliderData";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useIsMobile } from "@/utils/hooks/useIsMobile";
const CustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <Image
          src="/icons/arrow.svg"
          alt="Prev"
          width={24}
          height={24}
          className="rotate-180"
        />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <Image src="/icons/arrow.svg" alt="Next" width={24} height={24} />
      </button>
    </>
  );
};

interface CustomPaginationProps {
  activeIndex: number;
  total: number;
  onSlideChange: (index: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  activeIndex,
  total,
  onSlideChange,
}) => {
  const swiper = useSwiper();

  return (
    <span className=" z-20 flex justify-center lg:justify-start items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => {
            swiper.slideTo(index);
            onSlideChange(index);
          }}
          className={clsx(
            " rounded-full transition-all duration-300 cursor-pointer",
            activeIndex === index
              ? "bg-[#F0E74D] size-3"
              : "bg-[#1e1e1e] size-1.5 "
          )}
        />
      ))}
    </span>
  );
};
const Hero = () => {
  const pathname = usePathname();
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.realIndex);
  };
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        onSlideChange={handleSlideChange}
      >
        {HomeHeroData.map((item) => (
          <SwiperSlide
            className={clsx(
              "w-full relative !flex pt-24 lg:pt-0 lg:items-center ",
              pathname === "/"
                ? "h-[100dvh] min-h-[100dvh]"
                : "min-h-[calc(100dvh-80px)]",
              item.textColor
            )}
            key={item.id}
          >
            <Image
              src={isMobile ? item.mobileImage : item.image}
              alt={item.title}
              fill
              className="object-cover object-center w-full h-full max-h-[100dvh] -z-10"
            />
            <div className="container mx-auto flex w-full justify-center lg:justify-end lg:px-12">
              <div className="flex flex-col items-center lg:items-start  gap-5 max-w-sm">
                <h1 className="font-saira-condensed font-bold lg:text-6xl text-3xl text-center lg:text-start">
                  {item.title}
                </h1>
                <p className="text-center lg:text-start">{item.description}</p>
                <Link
                  href={item.href}
                  className="relative h-10 w-[136px] group "
                >
                  <div
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 93%)",
                    }}
                    className="relative bg-[#F0E74D] h-10 w-[136px] flex items-center justify-center text-black text-sm font-bold group-hover:-bottom-1 group-hover:-right-1 z-10"
                  >
                    Devamını Oku
                  </div>
                  <div
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 93%)",
                    }}
                    className="absolute bg-black h-10 w-[136px] font-bold z-0 -right-1 -bottom-1"
                  ></div>
                </Link>
                <CustomPagination
                  activeIndex={activeSlide}
                  total={HomeHeroData.length}
                  onSlideChange={setActiveSlide}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
};

export default Hero;
