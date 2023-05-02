import Logo from "@/components/Logo";
import Hua from "@/components/Hua";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import footer_icon from "@/public/assets/footer_icon.svg";
import { useContext } from "react";
import { HuaContext } from "@/context/HuaContext";
export default function Home() {
  const router = useRouter();
  const { huaState, _ } = useContext(HuaContext);
  const { pid } = router.query;
  const today = new Date();
  return (
    <>
      <Head>
        <title>Hua Preview</title>
      </Head>
      <div className="bg-white w-full h-full flex flex-col">
        <Logo />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex space-x-8 flex-wrap">
            <Hua />
            <div className="flex flex-col h-fit self-end">
              <Image src={footer_icon} alt="Hua"></Image>
              <p className="font-normal text-[30px]">
                {today.getFullYear()}/{today.getMonth() + 1}/{today.getDate()}
              </p>
              <p className="font-thin text-[20px]">baoxiang pattern</p>
              <p className="font-normal text-[30px]">0063986</p>
              <div className="flex space-x-1">
                <p className="font-FZLT text-[25px] w-fit px-5 text-center border-2 border-black rounded-2xl active:translate-y-1 hover:cursor-pointer">
                  场景预览
                </p>
                <p
                  className="font-FZLT text-[25px] w-fit px-5  text-center border-2 border-black rounded-2xl active:translate-y-1 hover:cursor-pointer"
                  onClick={(e) => {
                    const createEl = document.createElement("a");
                    createEl.href = huaState.resultImg.url;
                    createEl.download = "baoxiang-pattern";
                    createEl.click();
                    createEl.remove();
                  }}
                >
                  导出
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer href={{ pathname: "/[pid]/panel", query: { pid: pid } }} />
      </div>
    </>
  );
}
