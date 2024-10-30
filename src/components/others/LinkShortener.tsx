import React from "react";

const LinkShortener = () => {
  return (
    <div className="w-full pt-6 p-3 border rounded-lg shadow-xl bg-white md:w-fit">
      <div className="text-3xl underline font-semibold text-center">
        <p>Short your URL</p>
      </div>
      <div className="flex flex-col gap-1 w-full pt-5">
        <label className="font-medium" htmlFor="url-to-short">
          URL
        </label>
        <input
          className="border px-2 py-3 rounded-lg outline-[var(--background)] w-full md:w-96"
          id="url-to-short"
          placeholder="Alias for your website"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1 w-full pt-2">
        <label className="font-medium" htmlFor="url-alias">
          Alias
        </label>
        <input
          className="border px-2 py-3 rounded-lg outline-[var(--background)] w-full md:w-96"
          id="url-alias"
          placeholder="Alias for your website"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1 w-full pt-2">
        <button className="border border-[var(--background)] px-4 py-3 rounded-lg duration-150 hover:shadow-md">
          CREATE URL
        </button>
      </div>
    </div>
  );
};

export default LinkShortener;
