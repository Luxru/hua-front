import Hua from "./components/Hua";
import menu_ico from "./asset/menu_ico.svg";
import HuaButtonGroup from "./components/HuaButton";
import { useState } from "react";

function Info({info}){
return (
    <div className="space-x-2">
    <img className="inline-block" src={menu_ico} alt="menu_ico" />
    <p className="inline-block font-FZLT text-2xl">{info}</p>
    </div>
)
};

function CheckBox({color}){
  return (<div className={color+' rounded-full w-8 h-8 inline-block opacity-50 active:opacity-100'}/>)
}
function CheckBoxGroup(){
  return (
  <div className="flex space-x-2">
        <CheckBox color="bg-panel-blue"/>
        <CheckBox color="bg-panel-green"/>
        <CheckBox color="bg-panel-yellow"/>
        <CheckBox color="bg-panel-red"/>
  </div>)
}

export default function Panel() {
  const [numberImage,setNumberImage] = useState(1);
  const [canvasHW,setCanvasHW] = useState(300);
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
    <div className="grid grid-flow-col">
      
      <div className="justify-self-center">
          <Hua numberImage={numberImage} canvasHW={canvasHW} typeHua={'s'}/>
      </div>

      <div className="grid items-center grid-cols-3">
        <Info info="排布"/>
        <div className='flex'>
          <p className='bg-gray-300 p-1 text-center font-bold w-12 rounded-md'>{numberImage}x{numberImage}</p>
          <button onClick={onClickIncreaseNum} className='bg-emerald-800 active:bg-emerald-900 text-white rounded-md w-12 mx-2'>增加</button>
          <button onClick={onClickDecreaseNum} className='bg-red-800 active:bg-red-900  text-white shadow-sm rounded-md w-12'>减少</button>
        </div>
        <CheckBoxGroup/> 


        <Info info="花心"/>
        <HuaButtonGroup numButton={2}/>
        <CheckBoxGroup/>

        <Info info="花瓣"/>
        <HuaButtonGroup numButton={3}/>
        <CheckBoxGroup/>

        <Info info="角隅"/>
        <HuaButtonGroup numButton={2}/>
        <CheckBoxGroup/>
        {/* <Info info="边饰"/> */}
      </div>
    </div>
  );
}
