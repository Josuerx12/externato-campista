import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[150px] bg-white flex items-center justify-center">
      <Image
        src="/logo.png"
        width={1920}
        height={1080}
        className="w-72 h-28"
        alt="Logomarca do externato campista"
      />
    </header>
  );
};

export default Header;
