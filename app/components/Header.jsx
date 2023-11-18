import React from "react";
import Image from "next/image";

function Header({ firstPage }) {
  return (
    <header
      href="/pages/FirstPage"
      className="flex flex-row h-[25px]  gap-x-[15px] items-center pl-[74px] mt-[30px] absolute top-0 z-[60] cursor-pointer"
      onClick={firstPage}
    >
      <div className="w-[20px] h-[17px] relative">
        <Image src="/images/home.png" alt="home" fill />
      </div>
      <div className="h-[17px] w-[1px] bg-gray-700" />
      <p className="text-[17px] tracking-wide ">PROJECT</p>
    </header>
  );
}

export default Header;
