import React from "react";
import logo_img from "@/public/assets/logo.svg";
import Image from "next/image";
function Logo() {
  return (
    <div className="flex items-center px-4">
      <Image className="lg:h-12 lg:w-12" src={logo_img} alt="Logo" priority />
      <p className="font-FZLT text-[15px] lg:text-[30px]">宝相生花·HUA</p>
    </div>
  );
}
export default Logo;
