import Logo from "@/components/Logo";
import Hua from "@/components/Hua";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useContext } from "react";
import { HuaContext } from "@/context/HuaContext";
import { useRouter } from "next/router";

export default function Home() {
  const { huaState, _ } = useContext(HuaContext);
  const router = useRouter();
  const { pid } = router.query;
  const { canvasHW, cenImgSrc, corImgSrc, borImgSrc, numberImage, typeHua } =
    huaState;
  return (
    <>
      <Head>
        <title>Hua Preview</title>
      </Head>
      <div className="bg-slate-100 min-h-screen h-screen flex items-center justify-center">
        <div className="bg-white w-full h-full lg:h-5/6 lg:w-4/5 grid grid-cols-1 lg:grid-rows-3 shadow-2xl overflow-auto rounded-2xl select-none">
          <div className="self-start">
            <div className="grid grid-cols-2 p-4">
              <Logo className="space-x-2 justify-self-start" />
            </div>
          </div>
          <div className="self-center flex justify-center">
            <Hua
              numberImage={numberImage}
              canvasHW={canvasHW}
              typeHua={typeHua}
              cenImgSrc={cenImgSrc}
              corImgSrc={corImgSrc}
              borImgSrc={borImgSrc}
            />
          </div>
          <div className="self-end">
            <Footer href={{ pathname: "/[pid]/panel", query: { pid: pid } }} />
          </div>
        </div>
      </div>
    </>
  );
}
