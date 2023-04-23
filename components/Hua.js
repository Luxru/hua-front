import { useEffect, useState } from "react";
import Canvas from "@/components/Canvas";

async function loadImages(imageURLs){
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

  return  canvas.toDataURL();
}

async function drawCorImages(ctx, image) {
  const imgSrcArr = [rotateImage(image, 0),rotateImage(image, 90),rotateImage(image, 270),rotateImage(image, 180)]
  const imgArr = await loadImages(imgSrcArr);
  imgArr.map((img,index)=>{
    ctx.save();
    if (index === 0) {
      ctx.translate(0, 0);
    } else if (index === 1) {
      ctx.translate(ctx.canvas.width - image.naturalWidth, 0);
    } else if (index === 2) {
      ctx.translate(0, ctx.canvas.height - image.naturalHeight);
    } else if (index === 3) {
      ctx.translate(
        ctx.canvas.width - image.naturalWidth,
        ctx.canvas.height - image.naturalHeight
      );
    }
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    ctx.restore();
  })
}

function drawBorImages(ctx, bor_image, cen_image) {
  ctx.save();
  const numBor = 8;
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  ctx.translate(centerX, centerY);
  for (var i = 0; i < numBor; i++) {
    ctx.rotate(((360/numBor) * Math.PI) / 180);
    ctx.drawImage(
      bor_image,
      -bor_image.naturalWidth / 2,
      cen_image.naturalHeight / 2,
      bor_image.naturalWidth,
      bor_image.naturalHeight
    );
  }
  ctx.restore();
}


function drawCenImage(ctx, image) {
  ctx.save();
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  ctx.translate(centerX, centerY);
  ctx.drawImage(image, -image.naturalWidth/2, -image.naturalWidth/2,image.naturalWidth,image.naturalWidth);
  ctx.restore();
}


function Hua({numberImage,canvasHW,typeHua,cenImgSrc,corImgSrc,borImgSrc}) {
  if(typeHua==='s'||typeHua==='S'){
  }
  const [imgURL,setimgURL] = useState("")
  useEffect(()=>{
      const f = async ()=>{
        const [cenImg,corImg,borImg] = await loadImages([cenImgSrc,corImgSrc,borImgSrc]);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 318;
        canvas.height = 318;
        // 中心
        drawCenImage(ctx, cenImg);
        // 中心周围
        drawBorImages(ctx, borImg, cenImg);
        // 四角
        await drawCorImages(ctx, corImg);
        setimgURL(canvas.toDataURL());
      }
      f();
     }
  ,[cenImgSrc,corImgSrc,borImgSrc])

  return <Canvas imgURL={imgURL}  HW={canvasHW} numberImage={numberImage} />;
}

export default Hua;
