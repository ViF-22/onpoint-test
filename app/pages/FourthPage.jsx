"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import { pointsOne, pointsTwo } from "../dataPoints";

function FourthPage({ setOpen }) {
  const [firstPoints, setFirstPoints] = useState(true);

  return (
    <div className="absolute top-0  h-full w-full border whitespace-normal">
      <Image
        src="/images/third/bg4.png"
        width={1024}
        height={736}
        className="absolute top-0 left-0 z-30"
      />
      <div className="relative w-full h-full ">
        {/* container with lower z-index */}
        <div className="bg-white w-[822px] h-[573px] rounded-[40px] mt-[123px] ml-[140px] pl-[212px]  relative z-[35]"></div>
        {/* overlay with greater z-index */}
        <div className=" w-[822px] h-[573px] rounded-[40px]  ml-[140px] pl-[212px]   z-[80] absolute top-0">
          {/* close btn */}
          <Image
            src="/images/third/close.png"
            alt="close btn"
            width={33}
            height={35}
            className="absolute right-[36px] top-[31px] cursor-pointer z-[80]"
            onClick={() => setOpen(false)}
          />
          {/* headings */}
          <div
            className=" text-left relative pt-[45px] self-start flex flex-col gap-y-[10px] pb-[25px]
      "
          >
            <h3 className="uppercase text-[27px] z-[60]">преимущества</h3>
            <h2 className="uppercase tracking-wide leading-none font-light text-[85px] ">
              Brend<span className="font-bold">XY</span>
            </h2>
          </div>
          {/* points */}
          {firstPoints && (
            <div className="flex flex-col gap-y-[20px] z-[80]">
              {pointsOne.map((p) => (
                <div className="text-[20px] max-w-[450px]" key={p.num}>
                  <p className=" font-semibold text-[rgb(140,201,232)]">
                    {p.num}
                  </p>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          )}
          {!firstPoints && (
            <div className="flex flex-col gap-y-[20px] z-[80]">
              {pointsTwo.map((p) => (
                <div className="text-[20px] max-w-[450px]" key={p.num}>
                  <p className=" font-semibold text-[rgb(140,201,232)]">
                    {p.num}
                  </p>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          )}
          {/* pagination */}
          <div className="absolute bottom-[35px] flex gap-x-[20px] items-center z-[80]">
            <Image
              src="/images/third/arrow_pagination.png"
              width={9}
              height={15}
              className="self-start rotate-180 cursor-pointer"
              onClick={() => setFirstPoints(true)}
            />
            <div className="flex gap-x-[10px]  shrink-0">
              <div
                className={
                  firstPoints
                    ? "w-[11px] h-[11px]  rounded-full bg-pink-600 border-[2px] border-pink-600 cursor-pointer"
                    : "w-[11px] h-[11px]  rounded-full border-[2px] border-black cursor-pointer "
                }
              />
              <div
                className={
                  !firstPoints
                    ? "w-[11px] h-[11px]  rounded-full bg-pink-600 border-[2px] border-pink-600 cursor-pointer"
                    : "w-[11px] h-[11px]  rounded-full border-[2px] border-black cursor-pointer "
                }
              />
            </div>
            <Image
              src="/images/third/arrow_pagination.png"
              width={9}
              height={15}
              className="self-start cursor-pointer"
              onClick={() => setFirstPoints(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
