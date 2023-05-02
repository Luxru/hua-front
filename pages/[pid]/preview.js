import Footer from "@/components/Footer";
import Head from "next/head";
import Logo from "@/components/Logo";
import { loadImages } from "@/components/Hua";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useContext } from "react";
import { HuaContext } from "@/context/HuaContext";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const canvas = useRef(null);
  const { huaState, _ } = useContext(HuaContext);
  const [canW, canH] = [1000, 500];
  const fillRectW = 40;
  useEffect(() => {
    const numberImage = 20;
    const context = canvas.current.getContext("2d");
    async function f() {
      const [l_img, m_img, r_img, hua_img] = await loadImages([
        "/assets/preview/left.png",
        "/assets/preview/mid.png",
        "/assets/preview/right.png",
        huaState.resultImg.url,
      ]);
      const tW = (canW > canH ? canW : canH) / numberImage;
      context.globalAlpha = 1;
      for (let i = 0; i < numberImage; i++) {
        for (let j = 0; j < numberImage; j++) {
          context.drawImage(hua_img, i * tW, j * tW, tW, tW);
        }
      }
      context.fillStyle = "white";
      var current_x = 0;
      for (let img of [l_img, m_img, r_img]) {
        context.drawImage(
          img,
          current_x,
          0,
          img.naturalWidth * (500 / img.naturalHeight),
          500
        );
        current_x += img.naturalWidth * (500 / img.naturalHeight);
        context.fillRect(current_x, 0, fillRectW, canH);
        current_x += fillRectW;
      }
    }
    f();
    return;
  }, [huaState, canW, canH]);
  const { pid } = router.query;
  return (
    <>
      <Head>
        <title>Hua Preview</title>
      </Head>
      <div className="bg-white w-full h-full flex flex-col">
        <Logo />
        <div className="flex-1 flex items-center justify-center">
          <div className="overflow-auto max-w-full max-h-full">
            <canvas ref={canvas} height={canH} width={canW} />
          </div>
        </div>
        <Footer href={{ pathname: "/[pid]/view", query: { pid: pid } }} />
      </div>
    </>
  );
}
