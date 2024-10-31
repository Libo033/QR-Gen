"use client";
import { useInView, animated } from "@react-spring/web";
import Image from "next/image";
import React from "react";

const MyInfo = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 60,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  return (
    <animated.div
      ref={ref}
      style={springs}
      className="w-full pt-6 p-3 border rounded-lg shadow-xl bg-white md:w-10/12 md:mx-auto lg:w-3/6"
    >
      <div className="text-3xl underline decoration-[#0099cc] font-semibold text-center">
        <p>Contact Me</p>
      </div>
      <div className="pt-8 px-8 flex items-center justify-evenly sm:px-20 lg:px-28">
        <a
          href="https://www.linkedin.com/in/valentin-libonati-b608521b7/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            className="duration-150 hover:scale-110"
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1729275646/0-Portfolio/pm9iqprgyfhfgacfapho.svg"
            }
            alt="LinkedIn"
            width={75}
            height={75}
          />
        </a>
        <a href="https://github.com/Libo033" rel="noreferrer" target="_blank">
          <Image
            className="duration-150 hover:scale-110"
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1730310461/0-Portfolio/d3d1rvgq7zejrm7pfcog.png"
            }
            alt="LinkedIn"
            width={75}
            height={75}
          />
        </a>
      </div>
      <div className="text-center pt-8 font-thin">
        <a
          className="underline decoration-black duration-150 text-[#007ea8] hover:text-[#0099cc]"
          href="https://valentinlibonat33.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          Visit my portfolio
        </a>
      </div>
    </animated.div>
  );
};

export default MyInfo;
