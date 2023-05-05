import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function HuaButton({ onClick, id, src, text, idClicked, ratio, imgHW }) {
  return (
    <div className="flex flex-col items-center justify-between w-fit h-full hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 rounded-md active:translate-y-1">
        <Image
          id={id}
          onClick={onClick}
          src={src}
          alt={""}
          width={imgHW}
          height={imgHW}
          priority
        />
        <p className="text-base">{text}</p>
    </div>
  );
}

// props接受一个参数index，会被告知第几个元素被点击
function HuaButtonGroup({
  numButton = 1,
  onItemClick = undefined,
  ratio = false,
  initIndex = "0",
  imgArr = null,
  textArr = null,
  imgHW = 20,
}) {
  const [idClicked, setidClicked] = useState(initIndex);
  if (imgArr==null || textArr == null) {
    throw "Bad props"
    return <></>;
  }
  const onClick = (event) => {
    if (onItemClick !== undefined) {
      onItemClick(event.currentTarget.id);
    }
    setidClicked(event.currentTarget.id);
  };
  var buttonArray = [];
  for (let i = 0; i < numButton; i++) {
    buttonArray.push(
      <HuaButton
        id={i.toString()}
        key={i}
        idClicked={idClicked}
        onClick={onClick}
        ratio={ratio}
        src={imgArr[i]}
        text = {textArr[i]}
        imgHW={imgHW}
      />
    );
  }
  return <>{buttonArray}</>;
}

HuaButtonGroup.propTypes = {
  numButton: PropTypes.number.isRequired,
};

export default HuaButtonGroup;
