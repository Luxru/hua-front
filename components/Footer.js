import footer_img from "@/public/assets/ret_button.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer({href}) {
  const today = new Date();
  return (
    <div className="flex h-fit w-full p-4 justify-between">
      <Link className="w-fit h-fit self-end inline-block justify-self-start" href={href}>
      <Image src={footer_img} alt="footer" className="hover:bg-gray-200 rounded-md p-1 active:translate-y-1 w-9 h-9" property placeholder="blur"/>
      </Link>
      <div className="grid grid-rows-4 h-5/6  justify-items-end self-end">
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
