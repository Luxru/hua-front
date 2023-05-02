import ret_button from "@/public/assets/ret_button.png";
import footer_icon from "@/public/assets/footer_icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ href }) {
  return (
    <div className="flex h-fit w-full px-4 justify-between">
      <Link
        className="w-fit h-fit self-end inline-block justify-self-start"
        href={href}
      >
        <div className="flex items-center active:translate-y-1 rounded-md hover:bg-gray-200">
          <Image
            src={ret_button}
            alt="footer"
            className="w-12 h-12  p-1"
            priority
            placeholder="blur"
          />
          <p className="font-bold text-[17px]">返回</p>
        </div>
      </Link>
      <div className="flex flex-col items-end">
        <Image src={footer_icon} alt="Hua"></Image>
        <p className="font-normal text-[20px]">2023 HNU University Design</p>
      </div>
    </div>
  );
}
