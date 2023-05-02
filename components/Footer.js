import ret_button from "@/public/assets/ret_button.png";
import footer_icon from "@/public/assets/footer_icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ href }) {
  return (
    <div className="flex h-fit w-full p-4 justify-between">
      <Link
        className="w-fit h-fit self-end inline-block justify-self-start"
        href={href}
      >
        <Image
          src={ret_button}
          alt="footer"
          className="hover:bg-gray-200 rounded-md p-1 active:translate-y-1 w-9 h-9"
          priority
        />
      </Link>
      <div className="flex flex-col items-end">
        <Image src={footer_icon} alt="Hua"></Image>
        <p className="font-thin text-xl">2023 HNU University Design</p>
      </div>
    </div>
  );
}
