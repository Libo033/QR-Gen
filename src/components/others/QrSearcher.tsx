import React from "react";

const QrSearcher = () => {
  return (
    <div className="w-full pt-6 p-3 border rounded-lg shadow-xl bg-white md:w-fit">
      <div className="text-3xl underline font-semibold text-center">
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
          className="border px-2 py-3 rounded-lg outline-[var(--background)] w-full md:w-96"
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
    </div>
  );
};

export default QrSearcher;
