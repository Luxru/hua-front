import { useCallback, useEffect, useState } from "react";
import Canvas from "@/components/Canvas";

import { useContext } from "react";
import { HuaContext, huaStateAction } from "@/context/HuaContext";
const ratio = 2;
const numBor = 8;
var [cenHW,corHW,borHW,drawHW] = [160,224,100,428].map((e)=>ratio*e);
// var [cenHW,corHW,borHW,drawHW] = [139,224,91,412].map((e)=>ratio*e);

async function loadImages(imageURLs) {
  // 创建一个Promise数组，每个Promise表示一张图片的加载
  const imagePromises = imageURLs.map((url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });
  });

  // 等待所有图片加载完成
  const images = await Promise.all(imagePromises);
  return images;
}

function rotateImage(image, angle) {
  // 不考虑旋转不是90度的倍数的情况
  // 创建一个临时的canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const angleInRadians = (angle * Math.PI) / 180;

  // 设置canvas的大小
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  // 将canvas的原点移动到中心
  ctx.translate(canvas.width / 2, canvas.height / 2);

  // 旋转canvas
  ctx.rotate(angleInRadians);

  // 在canvas上绘制旋转后的图像
  ctx.drawImage(image, -canvas.width / 2, -canvas.height / 2);

  return canvas.toDataURL();
}

async function drawCorImages(ctx, image) {
  const imgSrcArr = [
    rotateImage(image, 0),
    rotateImage(image, 90),
    rotateImage(image, 270),
    rotateImage(image, 180),
  ];
  const imgArr = await loadImages(imgSrcArr);
  imgArr.map((img, index) => {
    ctx.save();
    if (index === 0) {
      ctx.translate(0, 0);
    } else if (index === 1) {
      ctx.translate(ctx.canvas.width - corHW, 0);
    } else if (index === 2) {
      ctx.translate(0, ctx.canvas.height - corHW);
    } else if (index === 3) {
      ctx.translate(
        ctx.canvas.width - corHW,
        ctx.canvas.height - corHW
      );
    }
    ctx.drawImage(img, 0, 0, corHW,corHW);
    ctx.restore();
  });
}

function drawBorImages(ctx, bor_image) {
  ctx.save();
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  ctx.translate(centerX, centerY);
  for (var i = 0; i < numBor; i++) {
    ctx.rotate(((360 / numBor) * Math.PI) / 180);
    ctx.drawImage(
      bor_image,
      -borHW / 2,
      -cenHW / 2-borHW,
      borHW,
      borHW
    );
  }
  ctx.restore();
}

function drawCenImage(ctx, image) {
  ctx.save();
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  ctx.translate(centerX, centerY);
  ctx.drawImage(
    image,
    -cenHW / 2,
    -cenHW / 2,
    cenHW,
    cenHW
  );
  ctx.restore();
}

function Hua() {
  const { huaState, dispatch } = useContext(HuaContext);
  const makeFrom = useCallback(()=>huaState.cenImgSrc+huaState.corImgSrc+huaState.borImgSrc,[huaState]);
  useEffect(() => {
    const f = async () => {
      const [cenImg, corImg, borImg] = await loadImages([
        huaState.cenImgSrc,
        huaState.corImgSrc,
        huaState.borImgSrc,
      ]);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = drawHW;
      canvas.height = drawHW;
      // 中心
      drawCenImage(ctx, cenImg);
      // 中心周围
      drawBorImages(ctx, borImg);
      // 四角
      await drawCorImages(ctx, corImg);
      dispatch({
        type:huaStateAction.resultImg.url.set,
        url:canvas.toDataURL()
      });
      dispatch(
        {
          type:huaStateAction.resultImg.from.set,
          from:makeFrom(),
        }
      )
    };
    if(huaState.resultImg.from!=makeFrom()){
      f();
    }
    // else use cache data
  }, [huaState,dispatch,makeFrom]);

  if (huaState.typeHua === "s" || huaState.typeHua === "S") {
  }
  return <Canvas imgURL={huaState.resultImg.url} HW={huaState.canvasHW} numberImage={huaState.numberImage} />;
}

export default Hua;
