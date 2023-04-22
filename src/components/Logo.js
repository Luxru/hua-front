import React from "react";
import logo_img from "../asset/logo_img.svg";
function Logo() {
  return (
    <div className="space-x-2">
      <img className="inline-block h-12 w-12" src={logo_img} alt="Logo_img" />
      <p className="inline-block font-FZLT text-2xl">宝相生花·HUA</p>
    </div>
  );
}

export default Logo;
