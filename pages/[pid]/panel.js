import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import HuaButtonGroup from "@/components/HuaButton";
import Hua from "@/components/Hua";
import menu_ico from "@/public/assets/menu_ico.png";
import down_arrow from "@/public/assets/down_arrow.png";
import up_arrow from "@/public/assets/up_arrow.png";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { HuaContext, huaStateAction } from "@/context/HuaContext";

import pathInfo from "@/path.config";
import { useRouter } from "next/router";
import ErrorPage from "@/components/ErrorPage";

function Info({ info, className }) {
  return (
    <div className={`${className} space-x-2`}>
      <Image className="inline-block" src={menu_ico} alt="menu_ico" />
      <p className="inline-block font-FZLT text-2xl">{info}</p>
    </div>
  );
}

function Menu({ infoName, numButton, onItemClick }) {
  return (
    <div className="flex space-x-4">
      <Info info={infoName} />
      <HuaButtonGroup numButton={numButton} onItemClick={onItemClick} />
    </div>
  );
}

function Header({ initIndex, onItemClick }) {
  const listType = ["s", "m", "l"].map((v, i) => (
    <p className="text-center font-FZLT" key={i}>
      {v}
    </p>
  ));
  return (
    <>
      <div className="flex justify-between">
        <Logo />
        <div className="inline-grid grid-rows-2 items-center">
          <HuaButtonGroup
            numButton={3}
            ratio={true}
            className="space-x-4 grid grid-flow-col lg:space-x-16"
            initIndex={initIndex}
            onItemClick={onItemClick}
          />
          <div className="space-x-4 lg:space-x-16 grid grid-flow-col">
            {listType}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const router = useRouter();
  const { huaState, dispatch } = useContext(HuaContext);
  const { canvasHW, cenImgSrc, corImgSrc, borImgSrc, numberImage, typeHua } =
    huaState;
  const { pid } = router.query;

  if (Object.keys(pathInfo).indexOf(pid) == -1) {
    return <ErrorPage />;
  }
  const workPathObj = pathInfo[pid];
  const btnNum = {
    cenNum: Object.keys(workPathObj["花心"]).length,
    borNum: Object.keys(workPathObj["花瓣"]).length,
  };
  const onClickIncreaseNum = () => {
    dispatch({
      type: huaStateAction.numberImage.increase,
    });
  };

  const onClickDecreaseNum = () => {
    dispatch({
      type: huaStateAction.numberImage.decrease,
    });
  };

  const onItemClick = (id) => {
    dispatch({
      type: huaStateAction.huaType.set,
      id: Number(id),
    });
  };

  const onCenItemClick = (id) => {
    const dirObj = workPathObj["花心"];
    const imgDirObj = dirObj[Object.keys(dirObj)[Number(id)]];
    const keys = Object.keys(imgDirObj);
    dispatch({
      type: huaStateAction.cenImgSrc.set,
      imgSrc: imgDirObj[keys[(keys.length * Math.random()) << 0]],
    });
  };

  const onBorItemClick = (id) => {
    const dirObj = workPathObj["花瓣"];
    const imgDirObj = dirObj[Object.keys(dirObj)[Number(id)]];
    const keys = Object.keys(imgDirObj);
    dispatch({
      type: huaStateAction.borImgSrc.set,
      imgSrc: imgDirObj[keys[(keys.length * Math.random()) << 0]],
    });
  };

  return (
    <>
      <Head>
        <title>Hua Panel</title>
      </Head>
      <div className="bg-white w-full h-full flex flex-col">
        <div className="">
          <Header
            initIndex={["s", "m", "l"].indexOf(typeHua).toString()}
            onItemClick={onItemClick}
          />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="min-w-fit w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
            <Hua
              numberImage={numberImage}
              canvasHW={canvasHW}
              typeHua={typeHua}
              cenImgSrc={cenImgSrc}
              corImgSrc={corImgSrc}
              borImgSrc={borImgSrc}
            />
            <div className="w-fit flex flex-col justify-between space-y-2 lg:space-y-0">
              <div className="flex space-x-4">
                <Info info="排布" className="self-center" />
                <div className="grid grid-rows-2 grid-cols-4 grid-flow-row border-4 border-black w-fit">
                  <p className="text-center text-xl font-FZLT row-span-2 col-span-3 place-self-center">
                    {numberImage}x{numberImage}
                  </p>
                  <button>
                    <Image
                      src={up_arrow}
                      alt={"up_arrow"}
                      onClick={onClickIncreaseNum}
                      className="active:opacity-40 active:bg-gray-100 hover:bg-gray-200 rounded-lg"
                    />
                  </button>
                  <button>
                    <Image
                      src={down_arrow}
                      alt={"down_arrow"}
                      onClick={onClickDecreaseNum}
                      className="active:opacity-40 active:bg-gray-100 hover:bg-gray-200 rounded-lg"
                    />
                  </button>
                </div>
              </div>
              <Menu
                infoName={"花心"}
                numButton={btnNum.cenNum}
                onItemClick={onCenItemClick}
              />
              <Menu
                infoName={"花瓣"}
                numButton={btnNum.borNum}
                onItemClick={onBorItemClick}
              />
              <Menu infoName={"角隅"} numButton={2} onItemClick={undefined} />
              <Link
                href={{ pathname: "/[pid]/preview", query: { pid: pid } }}
                className="w-full"
              >
                <p className="font-FZLT text-2xl text-center px-8 bg-panel-gray active:translate-y-1">
                  效果预览
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Footer href={"/"} />
      </div>
    </>
  );
}
