import Logo from "@/components/Logo";
import HuaButtonGroup from "@/components/HuaButton";

export default function Header() {
  return (
    <div className="grid grid-cols-2 p-4">
      <Logo className="space-x-2 justify-self-start" />
      <div className="justify-self-end grid grid-rows-2 gap-3 mx-6">
        <HuaButtonGroup
          numButton={3}
          typeButton={"Hua"}
          className="grid grid-flow-col space-x-16"
        />
        <div className="space-x-16 grid grid-flow-col ">
          <p className="inline-block text-center font-FZLT">s</p>
          <p className="inline-block text-center font-FZLT">m</p>
          <p className="inline-block text-center font-FZLT">l</p>
        </div>
      </div>
    </div>
  );
}
