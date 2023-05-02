import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

import pathInfo from "@/path.config";

export async function getStaticProps() {
  let homeImgArr = [];

  for (let k in pathInfo) {
    for (let v in pathInfo[k]["contents"]) {
      let p = pathInfo[k]["contents"][v]; //file list
      if (p["type"] != "file") continue;
      homeImgArr.push({
        pid: k,
        src: pathInfo[k]["contents"][v]["filepath"],
      });
    }
  }
  return {
    props: {
      homeImgArr,
    },
  };
}

export default function Home({ homeImgArr }) {
  const listEle = homeImgArr.map(({ pid, src }, index) => {
    const imgHW = 150;
    return (
      <div className="w-fit h-fit" key={index}>
        <Link href={`/${pid}/panel`}>
          <Image src={src} alt="" width={imgHW} height={imgHW} priority />
        </Link>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Hua APP</title>
      </Head>
      <div className="bg-white w-full h-full flex flex-col">
        <Logo />
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="font-FZLT text-[25px] mb-5">请选择喜欢的藻井纹样</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1">{listEle}</div>
        </div>
        <Footer href="/" />
      </div>
    </>
  );
}
