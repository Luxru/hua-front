import footer_img from "@/public/assets/footer_menu.svg";
import footer_text from "@/public/assets/footer_text.svg";
import Image from "next/image";
export default function Footer({onClick}) {
  return (
    <div className="flex justify-between h-fit w-full p-4">
       <button
      className="w-fit hover:bg-gray-200 rounded-md p-1 inline-block"
      onClick={onClick}
    >
      <Image src={footer_img} alt="footer_img" />
    </button>
      <Image src={footer_text} alt="footer_text" />
    </div>
  );
}
