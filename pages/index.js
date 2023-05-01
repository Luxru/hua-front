import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import pathInfo from "@/path.config";

export default function Home() {
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

  const listEle = homeImgArr.map(({ pid, src }, index) => {
    return (
      <div className="w-fit h-fit p-4" key={index}>
        <Link href={`/${pid}/panel`}>
          <Image src={src} alt="" width={200} height={200}/>
        </Link>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Hua APP</title>
      </Head>
      <div className="flex flex-wrap justify-center items-center">{listEle}</div>
    </>
  );
}
