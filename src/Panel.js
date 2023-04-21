import HuaTypeS from "./components/Hua";
import menu_ico from "./asset/menu_ico.svg";
import HuaButtonGroup from "./components/HuaButton";
import { useState } from "react";

function Info({info}){
return (
    <div class="space-x-2">
    <img class="inline-block" src={menu_ico} alt="menu_ico" />
    <p class="inline-block font-FZLT text-2xl">{info}</p>
    </div>
)
};

function CheckBox({color}){
  return (<div class={color+' rounded-full w-8 h-8 inline-block opacity-50 active:opacity-100'}/>)
}
function CheckBoxGroup(){
  return (
  <div class="flex space-x-2">
        <CheckBox color="bg-panel-blue"/>
        <CheckBox color="bg-panel-green"/>
        <CheckBox color="bg-panel-yellow"/>
        <CheckBox color="bg-panel-red"/>
  </div>)
}

export default function Panel() {
  const [numberImage,setNumberImage] = useState(1);
  const onClickIncreaseNum = ()=>{
    setNumberImage(numberImage+1);
  }
  const onClickDecreaseNum = ()=>{
    var num = 1;
    if(numberImage-1>1){
      num = numberImage-1;
    }
    setNumberImage(num);
  }
  return (
    <div class="grid grid-flow-col">
      
      <div class="justify-self-center">
          <HuaTypeS numberImage={numberImage} canvasHW={300} />
      </div>

      <div class="grid items-center grid-cols-3">
        <Info info="排布"/>
        <div class='flex'>
          <p class='bg-gray-300 p-1 text-center font-bold w-12 rounded-md'>{numberImage}x{numberImage}</p>
          <button onClick={onClickIncreaseNum} class='bg-emerald-800 active:bg-emerald-900 text-white rounded-md w-12 mx-2'>增加</button>
          <button onClick={onClickDecreaseNum} class='bg-red-800 active:bg-red-900  text-white shadow-sm rounded-md w-12'>减少</button>
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
