"use client";
import React from "react";
import Breadcrumb from "../Layouts/Breadcrumb";
import Image from "next/image";
import { usePosts } from "@/context/PostContext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";
import { useState } from "react";
const Hero = () => {
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
      <span className="z-20 flex justify-center lg:justify-start items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              swiper.slideTo(index);
              onSlideChange(index);
            }}
            className={clsx(
              " rounded-full transition-all duration-300",
              activeIndex === index
                ? "bg-black size-3"
                : "bg-[#676103] size-1.5 "
            )}
          />
        ))}
      </span>
    );
  };
  const posts = usePosts();
  const slicedPosts = posts.slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.realIndex);
  };
  return (
    <div className="min-h-[calc(100dvh-80px)] lg:h-[calc(100dvh-80px)] lg:min-h-0 relative ">
      <Image
        src="/images/blog-hero.png"
        alt="Hero"
        fill
        className="object-cover lg:object-fill -z-10"
      />
      <div className="container mx-auto pt-8 pb-20">
        <Breadcrumb className="hidden lg:flex" />
        <h1 className="hidden lg:block font-bold text-black font-saira-condensed text-6xl leading-none pt-8">
          BLOG
        </h1>
        <div className="flex flex-col lg:flex-row px-5 gap-5 lg:px-0">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            onSlideChange={handleSlideChange}
            className="w-full lg:w-3/5"
          >
            {posts.map((item) => (
              <SwiperSlide
                className="w-full relative h-[950px] !flex flex-col"
                key={item._id}
              >
                <Image
                  src={item.attributes.img}
                  alt={item.attributes.title}
                  width={740}
                  height={430}
                  className="object-cover object-center w-full h-full -z-10"
                />
                <h1 className="absolute bottom-42 left-5 line-clamp-1 lg:line-clamp-none lg:bottom-34 lg:left-10   font-saira-condensed font-bold lg:text-[40px] text-[25px] lg:max-w-lg">
                  {item.attributes.title}
                </h1>
                <div className="flex w-full flex-col justify-center lg:flex-row lg:justify-between gap-10">
                  <p className="font-saira-condensed text-[20px] lg:text-[25px] line-clamp-3 text-black font-bold">
                    {item.attributes.content}
                  </p>

                  <CustomPagination
                    activeIndex={activeSlide}
                    total={posts.length}
                    onSlideChange={setActiveSlide}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col gap-4 w-full lg:w-2/5">
            {slicedPosts.map((item) => {
              return (
                <div key={item._id} className="flex gap-5 items-center">
                  <Image
                    src={item.attributes.img}
                    alt={item.attributes.title}
                    width={180}
                    height={105}
                    className="object-cover object-center w-full h-full -z-10 max-w-[180px]"
                  />
                  <span className="line-clamp-3 font-bold  text-black w-full uppercase text-[20px]">
                    {item.attributes.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
