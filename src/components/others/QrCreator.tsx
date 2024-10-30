import React from "react";

const QrCreator = () => {
  return (
    <div className="w-full pt-6 p-3 border rounded-lg shadow-xl bg-white md:w-10/12 md:mx-auto lg:w-3/6 ">
      <div className="text-3xl underline decoration-[#0099cc] font-semibold text-center">
        <p>Create your QR</p>
      </div>
      <div className="flex flex-col gap-1 w-full pt-5">
        <label className="font-medium" htmlFor="url-to-qr">
          URL
        </label>
        <input
          className="border px-2 py-3 rounded-lg outline-[#ccf2ff] w-full"
          id="url-to-qr"
          placeholder="Place your URL here"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1 w-full pt-2">
        <button className="border border-[var(--background)] px-4 py-3 rounded-lg duration-150 hover:shadow-md">
          CREATE QR
        </button>
      </div>
    </div>
  );
};

export default QrCreator;
