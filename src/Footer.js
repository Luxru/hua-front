import footer_img from "./asset/footer_menu.svg";
import footer_text from "./asset/footer_text.svg";

export default function Footer({onClick}) {
  return (
    <div className="flex justify-between h-fit w-full p-4">
       <button
      className="w-fit hover:bg-gray-200 rounded-md p-1 inline-block"
      onClick={onClick}
    >
      <img src={footer_img} alt="footer_img" />
    </button>
      <img src={footer_text} alt="footer_text" />
    </div>
  );
}
