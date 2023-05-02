import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import header_img from "@/public/assets/index/index_header.svg";
import hua_icon from "@/public/assets/index/hua_btn.svg";
import footer_img from "@/public/assets/index/index_footer.png";
import footer_icon from "@/public/assets/footer_icon.svg";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Hua APP</title>
      </Head>
      <div
        className="bg-white w-full h-full flex flex-col justify-between hover:cursor-pointer"
        onClick={() => router.push("/menu")}
      >
        <div className="flex justify-between px-2">
          <Image src={header_img} alt="Baoxiang" blurDataURL={header_img.blurDataURL}></Image>
          <Image src={hua_icon} alt="Hua" className="w-[40px]"></Image>
        </div>
        <div className="flex-1 flex items-center min-w-full min-h-[50%]">
          <video className="w-full" autoPlay loop muted>
            <source src="/assets/index/bg.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="flex justify-between items-center px-2 relative">
          <div>
            <Image src={hua_icon} alt="Hua" className="w-[40px]"></Image>
          </div>
          <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center">
            <Image
              src={footer_img}
              alt="纹藏"
              className="lg:w-[120px] hidden lg:block"
            ></Image>
          </div>
          <div className="flex flex-col items-end">
            <Image src={footer_icon} alt="Hua" className="w-[40px]"></Image>
            <p className="font-normal text-[20px]">
              2023 HNU University Design
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
