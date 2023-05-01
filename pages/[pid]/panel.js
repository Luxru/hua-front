import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import HuaButtonGroup from "@/components/HuaButton";
import Hua from "@/components/Hua";
import menu_ico from "@/public/assets/logo_img.svg";
import NumProgressBar from "@/components/NumProgressBar";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { HuaContext, huaStateAction } from "@/context/HuaContext";
import { SmHuaSvg, MHuaSvg } from "@/components/HuaSvg";

import pathInfo from "@/path.config";
import { useRouter } from "next/router";
import ErrorPage from "@/components/ErrorPage";

function Info({ info, className = "" }) {
  return (
    <div className={`${className} space-x-2 pr-4`}>
      <Image
        className="inline-block"
        src={menu_ico}
        alt="menu_ico"
        width={40}
      />
      <p className="inline-block font-FZLT text-2xl">{info}</p>
    </div>
  );
}

function Menu({ infoName, imgArr, onItemClick, typeHua }) {
  const onItemClickBind = (id) => onItemClick(id, infoName);
  const imgHW = 45;
  if ("花瓣" == infoName && typeHua == "m") {
    return (
      <div className="flex space-x-4">
        <Info info={infoName} />
        <div className="flex flex-col">
          <div className="flex items-center space-x-4">
            <p className="bg-black text-white rounded-full flex justify-center items-center text-sm w-5 h-5">
              1
            </p>
            <HuaButtonGroup
              numButton={imgArr.length}
              onItemClick={onItemClickBind}
              imgArr={imgArr}
              imgHW={imgHW}
            />
          </div>
          <div className="flex items-center space-x-4">
            <p className="bg-black text-white rounded-full flex justify-center items-center text-sm w-5 h-5">
              2
            </p>
            <HuaButtonGroup
              numButton={imgArr.length}
              onItemClick={(id) => onItemClick(id, "花瓣m")}
              imgArr={imgArr}
              imgHW={imgHW}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex space-x-4">
      <Info info={infoName} />
      <HuaButtonGroup
        numButton={imgArr.length}
        onItemClick={onItemClickBind}
        imgArr={imgArr}
        imgHW={imgHW}
      />
    </div>
  );
}

function Header({ typeHua, onItemClick }) {
  return (
    <>
      <div className="flex justify-between px-4">
        <Logo />
        <div className="flex space-x-6 items-center">
          <div
            className={`hover:cursor-pointer ${
              typeHua == "s" ? "text-[#00A39B]" : "text-black"
            }`}
            type="s"
            onClick={() => onItemClick("s")}
          >
            <SmHuaSvg />
          </div>
          <div
            className={`hover:cursor-pointer ${
              typeHua == "m" ? "text-[#00A39B]" : "text-black"
            }`}
            type="m"
            onClick={() => onItemClick("m")}
          >
            <MHuaSvg />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const router = useRouter();
  const { huaState, dispatch } = useContext(HuaContext);
  const { numberImage, typeHua } = huaState;
  const { pid } = router.query;

  if (Object.keys(pathInfo).indexOf(pid) == -1) {
    return <ErrorPage />;
  }

  const genIconArray = (type) => {
    const workPathObj = pathInfo[pid]['contents'];
    const dirObj = workPathObj[type]['contents'];
    let imgArr = [];
    for (let i of Object.keys(dirObj)) {
      for (let j of Object.keys(dirObj[i]['contents'])) {
        if (dirObj[i]['contents'][j]['type']=='file'){
          imgArr.push(dirObj[i]['contents'][j]['filepath']);
        }
      }
    }
    return imgArr;
  };

  const btnImgArr = {
    cenImgs: genIconArray("花心"),
    borImgs: genIconArray("花瓣"),
    corImgs: genIconArray("角隅"),
    edgeImgs: genIconArray("边饰"),
  };

  const onItemClick = (type) => {
    dispatch({
      type: huaStateAction.typeHua.set,
      typeHua: type,
    });
  };

  const onCanvasItem = (id, type) => {
    const workPathObj = pathInfo[pid]['contents'];
    const dirType = type == "花瓣m" ? "花瓣" : type;
    const dirObj = workPathObj[dirType]['contents'];
    const dirID = Object.keys(dirObj)[Number(id)];
    const imgDirObj = dirObj[dirID]['contents'][dirID]['contents'];
    const keys = Object.keys(imgDirObj);
    let action;
    switch (type) {
      case "花心": {
        action = {
          type: huaStateAction.cenImgSrc.set,
          cenImgSrc: imgDirObj[keys[(keys.length * Math.random()) << 0]]['filepath'],
        };
        break;
      }
      case "花瓣": {
        action = {
          type: huaStateAction.borImgSrc.set,
          borImgSrc: imgDirObj[keys[(keys.length * Math.random()) << 0]]['filepath'],
        };
        break;
      }
      case "花瓣m": {
        action = {
          type: huaStateAction.borImgSrcM.set,
          borImgSrcM: imgDirObj[keys[(keys.length * Math.random()) << 0]]['filepath'],
        };
        break;
      }
      case "角隅": {
        action = {
          type: huaStateAction.corImgSrc.set,
          corImgSrc: imgDirObj[keys[(keys.length * Math.random()) << 0]]['filepath'],
        };
        break;
      }
    }
    dispatch({
      ...action,
    });
    return;
  };

  return (
    <>
      <Head>
        <title>Hua Panel</title>
      </Head>
      <div className="bg-white w-full h-full flex flex-col">
        <div className="">
          <Header typeHua={typeHua} onItemClick={onItemClick} />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="min-w-fit w-5/6 grid grid-cols-1 space-y-2 lg:space-y-0 lg:grid-cols-2 gap-4 justify-items-center px-8">
            <Hua />
            <div className="w-4/5 h-[95%] flex flex-col self-center justify-between">
              <div className="flex space-x-4">
                <Info info="排布" />
                <div className="flex-1">
                  <NumProgressBar
                    val={numberImage}
                    setVal={(val) =>
                      dispatch({
                        type: huaStateAction.numberImage.set,
                        numberImage: val,
                      })
                    }
                  />
                </div>
              </div>
              <Menu
                infoName={"花心"}
                imgArr={btnImgArr.cenImgs}
                onItemClick={onCanvasItem}
              />
              <Menu
                infoName={"花瓣"}
                imgArr={btnImgArr.borImgs}
                onItemClick={onCanvasItem}
                typeHua={typeHua}
              />
              <Menu
                infoName={"角隅"}
                imgArr={btnImgArr.corImgs}
                onItemClick={onCanvasItem}
              />
              <Link
                href={{ pathname: "/[pid]/preview", query: { pid: pid } }}
                className="w-fit self-end"
              >
                <p className="font-FZLT text-2xl text-center px-8 border-2 border-black rounded-2xl active:translate-y-1">
                  保存
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
