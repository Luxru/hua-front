import Canvas from './components/Canvas';

async function drawImages(ctx) {
  const imageURLs = ['/thua/cen.svg', '/thua/cor.svg'];
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
  images.forEach((image, index) => {
    ctx.drawImage(image, index * 100, 0);
  });
}


const draw = ctx => {
  // Insert your canvas API code to draw an image
  drawImages(ctx);
};

function App() {
  return (
    <Canvas draw={draw} height={400} width={400} />
  );
}

export default App;