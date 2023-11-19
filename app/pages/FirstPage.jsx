"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ButtonPink from "../components/ButtonPink";
import gsap from "gsap";
function FirstPage({ nextSlideHandler }) {
  const bakti1 = useRef(null);
  const layer4 = useRef(null);
  const layer8 = useRef(null);
  const layer5 = useRef(null);

  useEffect(() => {
    const baktiAnim = gsap
    .timeline({ repeat: -1, yoyo: true })
    .to(bakti1.current, {
      yPercent: -10,
      xPercent: -10,
      duration: 2,
      ease: "power1.inOut",
    })
    .to(bakti1.current, {
      yPercent: 100,
      xPercent: 50,
      duration: 7,
      ease: "power1.out",
    });
  
  const layer4Anim = gsap.timeline({ repeat: -1, yoyo: true }).to(layer4.current, {
    scale: 1.1,
    duration: 4,
    xPercent: -10,
    ease: "power1.out",
  });

const layer8Anim = gsap
  .timeline()
  .to(layer8.current, {
    yPercent: 10,
    xPercent: -40,
    duration: 2,
    rotation: 30,
  })
  .to(layer8.current, {
    yPercent: -60,
    xPercent: -70,
    duration: 4,
    rotation: 60,
    ease: "power1.in",
  })
  .to(layer8.current, {
    yPercent: -30,
    xPercent: 10,
    duration: 3,
    rotation: 90,
    ease: "power1.inOut",
  })
  .to(layer8.current, {
    yPercent: 0,
    xPercent: 0,
    duration: 2,
    rotation: 120,
    ease: "power1.out",
  });

const layer5Anim = gsap.timeline().to(layer5.current, {
  xPercent: 40,
  yPercent: 60,

  duration: 3,
});
  }, []);

 




  return (
    <div className="flex flex-col uppercase relative  pl-[74px] pt-[181px] flex-shrink-0 bg-bg1 gap-y-[33px] w-[1024px] h-[768px] whitespace-normal ">
      <h3 className="text-[30px] z-2">привет,</h3>
      <div className="relative z-10 ">
        <h2 className="text-[90px] font-light leading-tight ">
          Это <span className="font-bold">Не</span> коммерческое
          <span className="flex items-center  gap-x-[50px] ">
            задание
            <ButtonPink
              text="Что дальше?"
              icon="/images/first/arrow.png"
              nextSlideHandler={nextSlideHandler}
            />
          </span>
        </h2>
      </div>
      {/* details  */}

      <Image
        src="/images/first/Layer7.png"
        width={140}
        height={115}
        className="left-0 top-[72px] absolute"
        alt="layer7"
      />
      <Image
        src="/images/first/bakti_1.png"
        width={73}
        height={71}
        className="left-[22px] absolute bottom-[192px]"
        ref={bakti1}
        alt="bakti1"
      />

      <Image
        src="/images/first/pink_sperm.png"
        width={280}
        height={175}
        className="left-[0] absolute bottom-0"
        alt="pink1"
      />

      <Image
        src="/images/first/Layer5.png"
        width={62}
        height={57}
        className="right-[216px] absolute top-[61px]"
        alt="layer5"
        ref={layer5}
      />

      <Image
        src="/images/first/Layer8.png"
        width={110}
        height={113}
        className="right-[43px] absolute top-[200px] z-[20]"
        ref={layer8}
        alt="layer8"
      />

      <Image
        src="/images/first/pink_sperm_1.png"
        width={591}
        height={92}
        className="right-0 absolute top-[187px]"
        alt="pink"
      />

      <Image
        src="/images/first/Layer4_2.png"
        width={71}
        height={68}
        className="right-[35px] absolute top-[30px]"
        alt="layer4_2"
      />

      <Image
        src="/images/first/Layer4.png"
        width={227}
        height={126}
        className=" right-[254px] absolute bottom-0"
        ref={layer4}
        alt="layer4"
      />

      <Image
        src="/images/first/Layer4_1.png"
        width={84}
        height={77}
        className="left-[347px] absolute bottom-[58px]"
        alt="layer4"
      />
    </div>
  );
}

export default FirstPage;
