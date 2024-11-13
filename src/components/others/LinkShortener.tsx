"use client";
import { LinkShortenerErrorOptions } from "@/libs/interface";
import { motion } from "motion/react";
import React, { FormEvent, useState } from "react";

const input_default: string =
  "border px-2 py-3 rounded-lg outline-[#ccf2ff] w-full";
const input_error: string =
  "border-2 border-[#f44336] px-2 py-3 rounded-lg outline-[#ccf2ff] w-full";

const LinkShortener = () => {
  const [created, setCreated] = useState<boolean>(false);
  const [creationError, setCreationError] = useState<LinkShortenerErrorOptions>(
    {
      URL: false,
      Alias: false,
    }
  );

  const handleShortURL = (Event: FormEvent) => {
    try {
      Event.preventDefault();

      const URL = (document.getElementById("url-to-short") as HTMLInputElement)
        .value;
      const Alias = (document.getElementById("url-alias") as HTMLInputElement)
        .value;

      if (URL === "" || Alias === "") {
        setCreationError({
          URL:
            URL === ""
              ? new Error("The URL field is required.", {
                  cause: "empty_object",
                })
              : false,
          Alias:
            Alias === ""
              ? new Error("The Alias field is required.", {
                  cause: "empty_object",
                })
              : false,
        });
      }
    } catch (error) {
      console.error("Error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-300px" }}
      animate={{ opacity: 1, translateX: "0px", transition: { duration: 0.3 } }}
      exit={{ opacity: 1, translateX: "0px" }}
      className="w-full pt-6 p-3 border rounded-lg shadow-xl bg-white md:w-10/12 md:mx-auto lg:w-3/6 "
    >
      <section>
        <form onSubmit={(Event: FormEvent) => handleShortURL(Event)}>
          <div className="text-3xl underline decoration-[#0099cc] font-semibold text-center">
            <p>Short your URL</p>
          </div>
          <motion.div
            animate={creationError.URL ? "active" : "inactive"}
            className="flex flex-col gap-1 w-full pt-5"
          >
            <label className="font-medium" htmlFor="url-to-short">
              URL
            </label>
            <input
              className={creationError.URL ? input_error : input_default}
              id="url-to-short"
              placeholder="Place your URL here"
              type="text"
              onFocus={() => setCreationError({ ...creationError, URL: false })}
            />
            <motion.span
              variants={{
                active: {
                  height: "fit-content",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                inactive: {
                  height: "0px",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              className="text-[#f44336] text-xs font-medium cursor-default"
            >
              {creationError.URL && creationError.URL.message}
            </motion.span>
          </motion.div>
          <motion.div
            animate={creationError.Alias ? "active" : "inactive"}
            className="flex flex-col gap-1 w-full pt-2"
          >
            <label className="font-medium" htmlFor="url-alias">
              Alias
            </label>
            <input
              className={creationError.Alias ? input_error : input_default}
              id="url-alias"
              placeholder="Alias for your website"
              type="text"
              onFocus={() =>
                setCreationError({ ...creationError, Alias: false })
              }
            />
            <motion.span
              variants={{
                active: {
                  height: "fit-content",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                inactive: {
                  height: "0px",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              className="text-[#f44336] text-xs font-medium cursor-default"
            >
              {creationError.Alias && creationError.Alias.message}
            </motion.span>
          </motion.div>
          <div className="flex flex-col gap-1 w-full pt-2">
            <button
              type="submit"
              className="border border-[var(--background)] px-4 py-3 rounded-lg duration-150 hover:shadow-md"
            >
              CREATE URL
            </button>
          </div>
        </form>
      </section>
      <section></section>
    </motion.div>
  );
};

export default LinkShortener;
