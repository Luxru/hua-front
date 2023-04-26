import footer_img from "@/public/assets/footer_menu.svg";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Footer() {
  const today = new Date();
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 h-fit w-full p-4">
      <button
        className="w-fit h-fit self-end hover:bg-gray-200 rounded-md p-1 inline-block  justify-self-start active:translate-y-1"
        onClick={()=>{router.back();}}
      >
        <Image src={footer_img} alt="footer_img" />
      </button>
      <div className="grid grid-rows-4 h-5/6 items-end justify-items-end self-end">
        <p className="font-bold text-2xl">
          {today.getFullYear()}/{today.getMonth() + 1}/{today.getDate()}
        </p>
        <p className="font-thin text-xl">baoxiang pattern</p>
        <p className="font-bold text-2xl">0063986</p>
        <p className="font-thin text-xl">2023 HNU University Design</p>
      </div>
    </div>
  );
}
