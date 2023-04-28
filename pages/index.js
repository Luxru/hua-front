import Head from "next/head";
import Img_1 from "@/public/thua/1/DHWY051-01.png";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hua APP</title>
      </Head>
        <div className="flex flex-wrap">
            <div className="w-fit h-fit p-4">
              <Link href={"/1/panel"}>
                <Image src={Img_1} alt="" width={200} height={200}/>
              </Link>
            </div>
        </div>
    </>
  );
}
