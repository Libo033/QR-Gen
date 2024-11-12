"use client";
import { useInView, animated } from "@react-spring/web";
import React, { FormEvent, useState } from "react";

const LinkShortener = () => {
  const [created, setCreated] = useState<boolean>(false);
  const [creationError, setCreationError] = useState<boolean>(true);

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

  const handleShortURL = (Event: FormEvent) => {
    try {
      Event.preventDefault();

      setCreated(true);
    } catch (error) {
      console.error("Error");
    }
  };

  return (
    <animated.div
      ref={ref}
      style={springs}
      className="w-full pt-6 p-3 border rounded-lg shadow-xl bg-white md:w-10/12 md:mx-auto lg:w-3/6 "
    >
      <section>
        <form onSubmit={(Event: FormEvent) => handleShortURL(Event)}>
          <div className="text-3xl underline decoration-[#0099cc] font-semibold text-center">
            <p>Short your URL</p>
          </div>
          <div className="flex flex-col gap-1 w-full pt-5">
            <label className="font-medium" htmlFor="url-to-short">
              URL
            </label>
            <input
              className="border px-2 py-3 rounded-lg outline-[#ccf2ff] w-full"
              id="url-to-short"
              placeholder="Place your URL here"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1 w-full pt-2">
            <label className="font-medium" htmlFor="url-alias">
              Alias
            </label>
            <input
              className="border px-2 py-3 rounded-lg outline-[#ccf2ff] w-full"
              id="url-alias"
              placeholder="Alias for your website"
              type="text"
            />
          </div>
          <animated.div className="flex flex-col gap-1 w-full pt-2">
            <button
              type="submit"
              className="border border-[var(--background)] px-4 py-3 rounded-lg duration-150 hover:shadow-md"
            >
              CREATE URL
            </button>
          </animated.div>
        </form>
      </section>
      <section></section>
    </animated.div>
  );
};

export default LinkShortener;
