import React from "react";

const LinkShortener = () => {
  return (
    <div className="w-full pt-6 md:w-fit">
      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium" htmlFor="qr-searcher">
          URL
        </label>
        <div className="flex gap-2">
          <input
            className="border px-2 py-3 rounded-lg outline-[var(--background)] w-full md:w-96"
            id="qr-searcher"
            placeholder="Place your URL here"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full pt-2">
        <label className="font-medium" htmlFor="qr-searcher">
          Alias
        </label>
        <div className="flex gap-2">
          <input
            className="border px-2 py-3 rounded-lg outline-[var(--background)] w-full md:w-96"
            id="qr-searcher"
            placeholder="Alias for your website"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full pt-2">
        <button className="border border-[var(--background)] px-4 py-3 rounded-lg duration-150 hover:shadow-lg">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default LinkShortener;
