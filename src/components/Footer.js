import footer_img from "../asset/footer_menu.svg";
import footer_text from "../asset/footer_text.svg";

export default function Footer() {
  return (
    <div class="flex justify-between h-fit w-full p-4">
      <img src={footer_img} alt="footer_img" />
      <img src={footer_text} alt="footer_text" />
    </div>
  );
}
