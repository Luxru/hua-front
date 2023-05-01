import React from "react";
import logo_img from "@/public/assets/logo_img.svg";
import Image from "next/image";
function Logo() {
  return (
    <div className="flex items-center">
      <Image className="lg:h-12 lg:w-12" src={logo_img} alt="Logo"/>
      <p className="font-FZLT text-sm lg:text-2xl">宝相生花·HUA</p>
    </div>
  );
}
export default Logo;
