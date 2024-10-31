"use client";
import { useInView, animated } from "@react-spring/web";
import React from "react";

const QrSearcher = () => {
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
        <p>Keep track</p>
      </div>
      <div className="pt-3">
        <p className="text-sm text-center text-pretty">
          If you already have an QR code, keep track of it.
        </p>
      </div>
      <div className="flex flex-col gap-1 w-full pt-4">
        <label className="font-medium" htmlFor="qr-searcher">
          Search your QR
        </label>
        <input
          className="border px-2 py-3 rounded-lg outline-[#ccf2ff] w-full"
          id="qr-searcher"
          placeholder="id"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1 w-full pt-2">
        <button className="border border-[var(--background)] px-4 py-3 rounded-lg duration-150 hover:shadow-md">
          TRACE
        </button>
      </div>
    </animated.div>
  );
};

export default QrSearcher;
