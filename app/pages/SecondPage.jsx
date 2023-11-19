"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

function SecondPage() {
  const layer2 = useRef(null);
  const layer3 = useRef(null);
  const layer4 = useRef(null);
  const layer5 = useRef(null);
  const layer6 = useRef(null);

  gsap.set(layer2.current, { opacity: 0 });
  gsap.set(layer3.current, { opacity: 0 });
  gsap.set(layer4.current, { opacity: 0 });
  gsap.set(layer5.current, { opacity: 0 });
  gsap.set(layer6.current, { opacity: 0 });

  const tl = gsap.timeline();

  tl.fromTo(
    layer6.current,
    {
      xPercent: 10,
    },
    { xPercent: 0, duration: 3, opacity: 1 }
  )
    .fromTo(
      layer2.current,
      {
        xPercent: 5,
      },
      { xPercent: 0, duration: 3, opacity: 1 },
      "<"
    )
    .fromTo(
      layer3.current,
      {
        xPercent: 5,
      },
      { xPercent: 0, duration: 2, opacity: 1 },
      "-=2.3"
    )
    .fromTo(
      layer4.current,
      {
        xPercent: 5,
      },
      { xPercent: 0, duration: 2, opacity: 1 },
      "<"
    )
    .fromTo(
      layer5.current,
      {
        xPercent: 5,
      },
      { xPercent: 0, duration: 2, opacity: 1 },
      "<"
    );

  return (
    <div className="flex flex-col flex-shrink-0 relative pt-[158px] pl-[74px] h-full w-full bg-bg2 gap-y-[33px] whitespace-normal">
      <p className="uppercase w-[180px] text-[22px]">текст сообщения</p>
      {/* white bg for text */}
      <div className="ml-[48px] w-[775px] h-[445px] bg-white rounded-3xl shadow-md] dir-rtl z-10 relative"></div>
      {/* overlay with text and scroll bar */}
      <div className="w-[825px] h-[445px] overflow-y-scroll dir-rtl z-[30] scrollbar bg-transparent absolute bottom-[65px] px-[53px] py-[30px]">
        <p className="dir-ltr text-[22px] z-[35]">
          <span className="font-bold">Lorem ipsum dolor sit amet,</span>{" "}
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum." culpa
          qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    
      {/* details */}
      <Image
        src="/images/second/layer3_6.png"
        width={1024}
        height={736}
        className="absolute top-0 z-0"
        ref={layer6}
        alt="overlay"
      />
      <Image
        src="/images/second/layer3_2.png"
        width={1024}
        height={736}
        className="absolute top-0"
        ref={layer2}
        alt="overlay"
      />
      <Image
        src="/images/second/layer_4.png"
        width={1024}
        height={736}
        className="absolute top-0"
        ref={layer4}
        alt="overlay"
      />
      <Image
        src="/images/second/layer_3.png"
        width={1024}
        height={736}
        className="absolute top-0 right-0 z-0"
        ref={layer3}
        alt="overlay"
      />
      <Image
        src="/images/second/layer_5.png"
        width={1024}
        height={736}
        className="absolute top-0 right-0 z-0"
        ref={layer5}
        alt="overlay"
      />
    </div>
  );
}

export default SecondPage;
