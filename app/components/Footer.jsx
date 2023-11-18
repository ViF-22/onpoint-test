import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="pl-[74px] z-[60] absolute bottom-[15px]">
      <Image src="/images/logo.png" width={57} height={12} />
    </footer>
  );
}

export default Footer;
