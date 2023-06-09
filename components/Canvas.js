import { useEffect, useRef } from "react";

const Canvas = ({ numberImage, HW, imgURL }) => {
  const canvas = useRef(null);
  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const tHW = HW / numberImage;
    const resultImage = new Image();
    resultImage.src = imgURL;
    resultImage.onload = () => {
      context.clearRect(0, 0, HW, HW);
      for (let i = 0; i < numberImage; i++) {
        for (let j = 0; j < numberImage; j++) {
          context.drawImage(resultImage, i * tHW, j * tHW, tHW, tHW);
        }
      }
    };
    return;
  }, [imgURL, HW, numberImage]);

  return (
    <div className="overflow-auto shadow-xl max-w-full max-h-full">
      <canvas ref={canvas} height={HW} width={HW} />
    </div>
  );
};

export default Canvas;
