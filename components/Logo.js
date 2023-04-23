import React from "react";
import logo_img from "@/public/assets/logo_img.svg";
import Image from "next/image";
function Logo({className}) {
  return (
    <div className={className="space-x-2"}>
      <Image className="inline-block h-12 w-12" src={logo_img} alt="Logo_img" />
      <p className="inline-block font-FZLT text-2xl">宝相生花·HUA</p>
    </div>
  );
}

export default Logo;
