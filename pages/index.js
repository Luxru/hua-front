import Head from "next/head";
import Img_1 from "@/public/assets/DHWY051-01.png";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hua APP</title>
      </Head>
      <div className="bg-slate-100 min-h-screen h-screen flex items-center justify-center">
        <div className="bg-white w-full h-full lg:h-5/6 lg:w-4/5 grid grid-cols-1 lg:grid-rows-3 shadow-2xl overflow-auto rounded-2xl select-none">
          <div className="self-start">
            <div className="w-fit h-fit">
              <Link href={"/1/panel"}>
                <Image src={Img_1} alt="" />
              </Link>
            </div>
          </div>
          <div className="self-center"></div>
          <div className="self-end"></div>
        </div>
      </div>
    </>
  );
}
