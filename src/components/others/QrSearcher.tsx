import React from "react";

const QrSearcher = () => {
  return (
    <div className="w-full md:w-fit">
      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium" htmlFor="qr-searcher">
          QR Searcher
        </label>
        <input
          className="border px-2 py-3 rounded-lg outline-[var(--background)] w-full md:w-96"
          id="qr-searcher"
          type="text"
        />
      </div>
    </div>
  );
};

export default QrSearcher;
