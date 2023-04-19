import HuaTypeS from "./Hua";
import menu_ico from "../asset/menu_ico.svg";

function Info({info}){
return (
    <div class="space-x-2">
    <img class="inline-block" src={menu_ico} alt="menu_ico" />
    <p class="inline-block font-FZLT text-2xl">{info}</p>
    </div>
)
};

export default function Panel() {
  return (
    <div class="grid grid-flow-col">
    <div class="justify-self-center">
        <HuaTypeS />
    </div>
      <div class="grid items-center">
        <Info info="排布"/>
        <Info info="花心"/>
        <Info info="花瓣"/>
        <Info info="角隅"/>
        <Info info="边饰"/>
      </div>
    </div>
  );
}
