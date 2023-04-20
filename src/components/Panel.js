import HuaTypeS from "./Hua";
import menu_ico from "../asset/menu_ico.svg";
import footer_img from "../asset/footer_menu.svg";
import footer_clicked_img from "../asset/footer_menu_red.svg";
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
  return (<div class={color+' hover:border-2 hover:border-green-500 rounded-full w-8 h-8 inline-block'}/>)
}
function CheckBoxGroup(props){
  const {children} = props;
  return (
  <div class="space-x-2">
    {children}
  </div>)
}

function HuaRadioButton(props){
  const { onClick, disabled,clicked} = props;
  
  return (
  <button class="w-fit hover:bg-gray-200 rounded-md p-1" onClick={onClick} disabled={disabled} >
    <img src={clicked?footer_clicked_img:footer_img} alt={""}/>
  </button>)
} 

export default function Panel() {
  const [clicked,setClicked] = useState(false);
  const onClick = ()=>{
    setClicked(!clicked);
  };
  return (
    <div class="grid grid-flow-col">
      <div class="justify-self-center">
          <HuaTypeS />
      </div>
      <div class="grid items-center grid-cols-3">
        <Info info="排布"/><HuaRadioButton clicked={clicked} onClick={onClick}/>

        <CheckBoxGroup> 
        <CheckBox color="bg-panel-blue"/>
        <CheckBox color="bg-panel-green"/>
        <CheckBox color="bg-panel-yellow"/>
        <CheckBox color="bg-panel-red"/>
        </CheckBoxGroup>

        <Info info="花心"/>
        <HuaRadioButton clicked={clicked} onClick={onClick}/>
        <CheckBoxGroup/>
        <Info info="花瓣"/>
        <HuaRadioButton clicked={clicked} onClick={onClick}/>
        <CheckBoxGroup/>
        <Info info="角隅"/>
        <HuaRadioButton clicked={clicked} onClick={onClick}/>
        <CheckBoxGroup/>
        {/* <Info info="边饰"/> */}
      </div>
    </div>
  );
}
