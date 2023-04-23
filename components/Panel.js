import Hua from "@/components/Hua";
import HuaButtonGroup from "@/components/HuaButton";
import menu_ico from "@/public/assets/menu_ico.svg";
import down_arrow from "@/public/assets/down_arrow.svg"
import up_arrow from "@/public/assets/up_arrow.svg"

import { useState } from "react";
import Image from "next/image";

function Info({info}){
return (
    <div className="space-x-2">
    <Image className="inline-block" src={menu_ico} alt="menu_ico" />
    <p className="inline-block font-FZLT text-2xl">{info}</p>
    </div>
)
};


export default function Panel() {
  const [numberImage,setNumberImage] = useState(1);
  const [canvasHW,setCanvasHW] = useState(400);
  const [cenImgSrc,corImgSrc,borImgSrc] = ["/thua/cen.svg", "/thua/cor.svg", "/thua/bor.svg"];
  const colorArr = ["bg-panel-blue","bg-panel-green","bg-panel-yellow","bg-panel-red"]

  const onClickIncreaseNum = ()=>{
    setNumberImage(numberImage+1);
    setCanvasHW(canvasHW);
  }

  const onClickDecreaseNum = ()=>{
    var num = 1;
    if(numberImage-1>1){
      num = numberImage-1;
    }
    setNumberImage(num);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      
      <div className="justify-self-center">
          <Hua numberImage={numberImage} canvasHW={canvasHW} typeHua={'s'} cenImgSrc={cenImgSrc} corImgSrc={corImgSrc} borImgSrc={borImgSrc}/>
      </div>

      <div className="grid items-center space-y-2 grid-cols-3 lg:space-y-0">
        <Info info="排布"/>
        <div className='flex col-span-2'>
          <div className="grid grid-rows-2 grid-cols-4 grid-flow-row border-4 border-black">
          <p className='text-center text-xl font-FZLT row-span-2 col-span-3 place-self-center'>{numberImage}x{numberImage}</p>
          <Image src={up_arrow} alt={"up_arrow"} onClick={onClickIncreaseNum} className="active:opacity-40 active:bg-gray-100 hover:bg-gray-200 rounded-lg"/>
          <Image src={down_arrow} alt={"down_arrow"} onClick={onClickDecreaseNum} className="active:opacity-40 active:bg-gray-100 hover:bg-gray-200 rounded-lg"/>
          </div>
        </div>


        <Info info="花心"/>
        <HuaButtonGroup numButton={2} typeButton={'Hua'}/>
        <HuaButtonGroup numButton={4} typeButton={'Color'} colorArr={colorArr}/>

        <Info info="花瓣"/>
        <HuaButtonGroup numButton={3} typeButton={'Hua'}/>
        <HuaButtonGroup numButton={4} typeButton={'Color'} colorArr={colorArr}/>

        <Info info="角隅"/>
        <HuaButtonGroup numButton={2} typeButton={'Hua'}/>
        <HuaButtonGroup numButton={4} typeButton={'Color'} colorArr={colorArr}/>
        {/* <Info info="边饰"/> */}
      </div>
    </div>
  );
}
