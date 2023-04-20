import HuaTypeS from "./components/Hua";
import menu_ico from "./asset/menu_ico.svg";
import HuaButtonGroup from "./components/HuaButton";

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
function CheckBoxGroup(){
  return (
  <div class="space-x-2">
        <CheckBox color="bg-panel-blue"/>
        <CheckBox color="bg-panel-green"/>
        <CheckBox color="bg-panel-yellow"/>
        <CheckBox color="bg-panel-red"/>
  </div>)
}


export default function Panel() {

  return (
    <div class="grid grid-flow-col">
      
      <div class="justify-self-center">
          <HuaTypeS />
      </div>

      <div class="grid items-center grid-cols-3">
        <Info info="排布"/>

        <HuaButtonGroup numButton={4}/>
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
