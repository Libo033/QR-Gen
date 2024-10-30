import React from "react";

const QrSearcher = () => {
  return (
    <div className="w-full md:w-fit">
      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium" htmlFor="qr-searcher">
          Search your QR
        </label>
        <div className="flex gap-2">
          <input
            className="border px-2 py-3 rounded-lg outline-[var(--background)] w-full md:w-96"
            id="qr-searcher"
            placeholder="id"
            type="text"
          />
          <button className="border border-[var(--background)] px-4 rounded-lg duration-150 hover:shadow-lg">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrSearcher;
