import React from "react";
import Image from "next/image";

function ButtonPink({ nextSlideHandler }) {
  return (
    <button
      className="flex btn-pink rounded-full py-[15px] pl-[20px] text-[25px] gap-x-[20px] pr-[35px] items-center text-[#171717]"
      onClick={() => nextSlideHandler()}
    >
      <div className="rounded-full bg-[#171717] text-white w-[50px] h-[49px] flex items-center justify-center btn-shadow btn-shadow-2">
        <Image src="/images/first/arrow.png" width={19} height={14} />
      </div>
      Что дальше?
    </button>
  );
}

export default ButtonPink;

export function ButtonPinkMore({ setOpen }) {
  return (
    <button
      className="flex btn-pink rounded-full py-[15px] pl-[20px] text-[25px] gap-x-[20px] pr-[35px] items-center text-[#171717] z-[80]"
      onClick={() => setOpen(true)}
    >
      <div className="rounded-full bg-[#171717] text-white w-[50px] h-[49px] flex items-center justify-center btn-shadow btn-shadow-2">
        <Image src="/images/third/plus.png" width={19} height={14} />
      </div>
      Подробнее
    </button>
  );
}
