"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import ButtonPink, { ButtonPinkMore } from "../components/ButtonPink";
import FourthPage from "./FourthPage";
import { useState } from "react";
import gsap from "gsap";

function ThirdPage() {
  const third = useRef(null);
  const [open, setOpen] = useState(false);
//refs
  const bubble1 = useRef(null);
  const bubble2 = useRef(null);
  const bubble3 = useRef(null);
  const bubble4 = useRef(null);
  const bubble5 = useRef(null);
  const bubble6 = useRef(null);
  const bubble7 = useRef(null);
  const bubble8 = useRef(null);
 
  useEffect(() => {
    gsap.timeline({ repeat: -1, yoyo: true }).to(bubble1.current, {
      yPercent: 40,
      xPercent: -40,
      duration: 3,
      ease: "power1.in",
    }).to(bubble2.current, {
      yPercent: 40,
      xPercent: 60,
      duration: 3,
       ease: "power1.in",
    }, '<').to(bubble3.current, {
      yPercent: 20,
      xPercent: 70,
      duration: 3,
       ease: "power1.in",
    }, '<').to(bubble4.current, {
      yPercent: -30,
      xPercent: 20,
      duration: 3,
       ease: "power1.in",
    }, '<').to(bubble5.current, {
      yPercent: -20,
      xPercent: 20,
      duration: 3,
       ease: "power1.in",
    }, '<').to(bubble6.current, {
      scale: 0.8,
      yPercent: -5,
      duration: 3,
       ease: "power1.in",
    }, '<').to(bubble7.current, {
      yPercent: -10,
      xPercent: 20,
      duration: 3,
       ease: "power1.in",
    }, '<').to(bubble8.current, {
      yPercent: 15,
      xPercent: 10,
      duration: 3,
       ease: "power1.in",
    },'<')
  }, []);

  return (
    <div
      className="flex flex-col  h-full w-full bg-bg3 flex-shrink-0 relative gap-y-[90px] whitespace-normal"
      ref={third}
    >
      {/* bottle with bubbles */}
      <div className="w-full h-full absolute bottom-0 left-0">
        <Image
          src="/images/third/bottle.png"
          width={1024}
          height={736}
          className="absolute bottom-0 left-0 z-50"
          alt="bottle"
        />
        <Image
          src="/images/third/3.png"
          width={37}
          height={33}
          className="absolute top-[65px] left-[197px] z-40"
          alt="bubble"
          ref={bubble1}
        />
        <Image
          src="/images/third/5.png"
          width={68}
          height={69}
          className="absolute top-[155px] left-[184px] z-[70]"
          alt="bubble"
          ref={bubble2}
        />
        <Image
          src="/images/third/1.png"
          width={34}
          height={34}
          className="absolute top-[212px] left-[77px] z-40"
          alt="bubble"
          ref={bubble3}
        />
        <Image
          src="/images/third/2.png"
          width={112}
          height={112}
          className="absolute top-[317px] left-[186px] z-40"
          alt="bubble"
          ref={bubble4}
        />
        <Image
          src="/images/third/7.png"
          width={33}
          height={33}
          className="absolute bottom-[282px] left-[10px] z-40"
          alt="bubble"
          ref={bubble5}
        />
        <Image
          src="/images/third/8.png"
          width={75}
          height={75}
          className="absolute bottom-[139px] left-[25px] z-[70]"
          alt="bubble"
          ref={bubble6}
        />
        <Image
          src="/images/third/4.png"
          width={61}
          height={61}
          className="absolute bottom-[118px] left-[242px] z-40"
          alt="bubble"
          ref={bubble7}
        />
        <Image
          src="/images/third/6.png"
          width={142}
          height={65}
          className="absolute bottom-0 left-[183px] z-[70] "
          alt="bubble"
          ref={bubble8}
        />
      </div>
      {!open && (
        <div className="flex flex-col relative pt-[168px] gap-y-[90px]">
          {/* headings */}
          <div
            className="z-[60] text-left relative  pl-[354px] self-start flex flex-col gap-y-[10px]
      "
          >
            <h3 className="uppercase text-[27px]">ключевое сообщение</h3>
            <h2 className="uppercase tracking-wide leading-none font-light text-[85px] ">
              Brend<span className="font-bold">XY</span>
            </h2>
          </div>
          {/* first plates */}

          <div className="relative ml-[228px] pl-[125px] bg-white pt-[54px] pr-[62px] pb-[74px] rounded-[40px] shadow-md z-[30] self-start text-[22px] ">
            <Image
              src="/images/third/icon2.png"
              width={67}
              height={63}
              className="absolute -top-[33px]"
              alt="icon2"
            />
            <p className="w-[229px] ">
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultrices
            </p>
          </div>
          {/* second plate */}
          <div className="absolute flex flex-col gap-y-[35px] text-[22px]  z-[70] bottom-0 right-[75px] ">
            <div className="relative pt-[54px] bg-white pl-[45px] pb-[49px] rounded-[40px] shadow-lg">
              <Image
                src="/images/third/icon1.png"
                width={70}
                height={57}
                className="absolute -top-[35px]"
                alt="icon1"
              />
              <p className="w-[134px]">A acru cursus vitae</p>
            </div>
            <ButtonPinkMore setOpen={setOpen} />
          </div>
        </div>
      )}

      {open && <FourthPage setOpen={setOpen} />}
    </div>
  );
}

export default ThirdPage;
