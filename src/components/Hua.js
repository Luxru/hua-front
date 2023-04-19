import Canvas from "./Canvas";

function drawCenImage(ctx, image) {
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;

  const imageX = centerX - image.naturalWidth / 2;
  const imageY = centerY - image.naturalHeight / 2;

  ctx.drawImage(image, imageX, imageY, image.naturalWidth, image.naturalHeight);
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

  // 将canvas上的图像绘制到主canvas上
  const resultImage = new Image();
  resultImage.src = canvas.toDataURL();
  return resultImage;
}

function drawCorImages(ctx, image) {
  // 将画布状态保存下来
  ctx.save();
  // console.log("Img w h",image.naturalWidth,image.naturalHeight);
  // 分别绘制四个角的图片
  for (let i = 0; i < 4; i++) {
    // 将画布坐标系原点移动到对应角落
    var img = null;
    if (i === 0) {
      ctx.translate(0, 0);
      img = rotateImage(image, 0);
    } else if (i === 1) {
      ctx.translate(ctx.canvas.width - image.naturalWidth, 0);
      img = rotateImage(image, 90);
    } else if (i === 2) {
      ctx.translate(0, ctx.canvas.height - image.naturalHeight);
      img = rotateImage(image, 270);
    } else if (i === 3) {
      ctx.translate(
        ctx.canvas.width - image.naturalWidth,
        ctx.canvas.height - image.naturalHeight
      );
      img = rotateImage(image, 180);
    }
    // 将图片绘制到画布上
    ctx.drawImage(img, 0, 0, image.naturalWidth, image.naturalHeight);
    // 恢复画布状态
    ctx.restore();
    // 保存画布状态，以便绘制下一个角落的图片
    ctx.save();
  }
}

function drawBorImages(ctx, bor_image, cen_image) {
  ctx.save();
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;

  const imageX = centerX;
  const imageY = centerY;
  ctx.translate(imageX, imageY);
  for (var i = 0; i < 9; i++) {
    ctx.rotate((40 * Math.PI) / 180);
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

function HuaTypeS() {
  return (
    <Canvas
      draw={async (ctx) => {
        const imageURLs = ["/thua/cen.svg", "/thua/cor.svg", "/thua/bor.svg"];
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

        // 绘制图片到Canvas上
        // 需要绘制制定的样式
        drawCenImage(ctx, images[0]);
        drawCorImages(ctx, images[1]);
        drawBorImages(ctx, images[2], images[0]);
      }}
      height={318}
      width={318}
    />
  );
}

export default HuaTypeS;
