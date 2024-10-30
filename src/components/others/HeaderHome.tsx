import React from "react";

const HeaderHome = () => {
  return (
    <div className="flex flex-col items-center my-2 sm:my-5">
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl">Welcome to Trace QR</h1>
        <h2 className="pt-2 text-xl font-semibold text-pretty">
          QR Code Generator & Tracker
        </h2>
        <h3 className="pt-2 text-lg text-pretty text-justify">
          Effortlessly create custom QR codes and keep track of their
          performance in one place. Whether you're promoting a business, event,
          or product, our tool helps you generate QR codes quickly and monitor
          their activity to maximize engagement and insights.
        </h3>
      </div>
    </div>
  );
};

export default HeaderHome;
