import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="h-32 bg-[var(--background)] shadow-lg grid place-content-center">
      <Link href={"/"}>
        <Image
          className="bg-white border border-gray-400 w-28 h-auto rounded-full"
          src={"/img/traceqr.png"}
          alt="traceQR"
          width={500}
          height={500}
        />
      </Link>
    </nav>
  );
};

export default NavigationBar;
