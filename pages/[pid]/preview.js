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
      <div className="bg-white w-full h-full flex flex-col">
        <Logo/>
        <div className="flex-1 flex items-center justify-center">
          <Hua
            numberImage={numberImage}
            canvasHW={canvasHW}
            typeHua={typeHua}
            cenImgSrc={cenImgSrc}
            corImgSrc={corImgSrc}
            borImgSrc={borImgSrc}
          />
        </div>
        <Footer href={{ pathname: "/[pid]/panel", query: { pid: pid } }} />
      </div>
    </>
  );
}