import Hua from "@/components/Hua";
import HuaButtonGroup from "@/components/HuaButton";
import menu_ico from "@/public/assets/menu_ico.svg";
import down_arrow from "@/public/assets/down_arrow.svg";
import up_arrow from "@/public/assets/up_arrow.svg";
import { HuaContext } from "@/context/HuaContext";

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";

function Info({ info }) {
  return (
    <div className="space-x-2">
      <Image className="inline-block" src={menu_ico} alt="menu_ico" />
      <p className="inline-block font-FZLT text-2xl">{info}</p>
    </div>
  );
}

export default function Panel() {
  
  const  {huaState, setHuaState}= useContext(HuaContext);
  const {
    canvasHW,
    cenImgSrc,
    corImgSrc,
    borImgSrc,
    numberImage,
    typeHua,
  } = huaState;

  const colorArr = [
    "bg-panel-blue",
    "bg-panel-green",
    "bg-panel-yellow",
    "bg-panel-red",
  ];

  const onClickIncreaseNum = () => {
    setHuaState({
      ...huaState,
      numberImage:numberImage+1,
    })
  };

  const onClickDecreaseNum = () => {
    setHuaState({
      ...huaState,
      numberImage:huaState.numberImage - 1 > 1?huaState.numberImage - 1:1,
    })
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="justify-self-center">
        <Hua
          numberImage={numberImage}
          canvasHW={canvasHW}
          typeHua={typeHua}
          cenImgSrc={cenImgSrc}
          corImgSrc={corImgSrc}
          borImgSrc={borImgSrc}
        />
      </div>

      <div className="grid items-center space-y-2 grid-cols-3 lg:space-y-0">
        <>
          <Info info="排布" />
          <div className="flex col-span-2">
            <div className="grid grid-rows-2 grid-cols-4 grid-flow-row border-4 border-black">
              <p className="text-center text-xl font-FZLT row-span-2 col-span-3 place-self-center">
                {numberImage}x{numberImage}
              </p>
              <button>
                <Image
                  src={up_arrow}
                  alt={"up_arrow"}
                  onClick={onClickIncreaseNum}
                  className="active:opacity-40 active:bg-gray-100 hover:bg-gray-200 rounded-lg"
                />
              </button>
              <button>
                <Image
                  src={down_arrow}
                  alt={"down_arrow"}
                  onClick={onClickDecreaseNum}
                  className="active:opacity-40 active:bg-gray-100 hover:bg-gray-200 rounded-lg"
                />
              </button>
            </div>
          </div>
        </>

        <>
          <Info info="花心" />
          <HuaButtonGroup numButton={2} typeButton={"Hua"} />
          <HuaButtonGroup
            numButton={4}
            typeButton={"Color"}
            colorArr={colorArr}
          />
        </>

        <>
          <Info info="花瓣" />
          <HuaButtonGroup numButton={3} typeButton={"Hua"} />
          <HuaButtonGroup
            numButton={4}
            typeButton={"Color"}
            colorArr={colorArr}
          />
        </>
        <>
          <Info info="角隅" />
          <HuaButtonGroup numButton={2} typeButton={"Hua"} />
          <HuaButtonGroup
            numButton={4}
            typeButton={"Color"}
            colorArr={colorArr}
          />
        </>
      </div>
      <>
        <div className="col-span-1" />
        <Link href="/preview">
          <button className="">
            <p className="font-FZLT text-2xl w-fit px-8 bg-panel-gray active:translate-y-1">
              效果预览
            </p>
          </button>
        </Link>
      </>
    </div>
  );
}
