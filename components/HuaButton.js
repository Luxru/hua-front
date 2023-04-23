import footer_img from "@/public/assets/footer_menu.svg";
import footer_clicked_img from "@/public/assets/footer_menu_red.svg";
import { useEffect, useId, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function HuaButton({ id, onClick, idClicked, typeButton, color }) {
  if (typeButton == "Hua") {
    return (
      <button className="w-fit hover:bg-gray-200 active:bg-gray-100 rounded-md inline-block">
        <Image
          id={id}
          onClick={onClick}
          src={idClicked === id ? footer_clicked_img : footer_img}
          alt={""}
        />
      </button>
    );
  }
  return (
    <button>
      <div
        id={id}
        onClick={onClick}
        className={
          color +
          " w-6 h-6 lg:w-8 lg:h-8 inline-block rounded-full active:translate-y-1 " +
          (id == idClicked ? "opacity-100" : "opacity-50")
        }
      />
    </button>
  );
}

// props接受一个参数index，会被告知第几个元素被点击
function HuaButtonGroup({ className="space-x-2",numButton=1, typeButton="Hua", setIndex, colorArr }) {
  const [idClicked, setidClicked] = useState(false);
  const id = useId();
  useEffect(() => {
    setidClicked(id + String(0));
  }, [id]);
  const onClick = (event) => {
    if (setIndex !== undefined) {
      setIndex(setIndex(event.currentTarget.index));
    }
    setidClicked(event.currentTarget.id);
  };
  var buttonArray = [];
  for (let i = 0; i < numButton; i++) {
    buttonArray.push(
      <HuaButton
        key={i}
        idClicked={idClicked}
        onClick={onClick}
        id={id + String(i)}
        index={i}
        color={colorArr === undefined ? "" : colorArr[i]}
        typeButton={typeButton}
      />
    );
  }
  return <div className={className}>{buttonArray}</div>;
}

HuaButtonGroup.propTypes = {
  numButton: PropTypes.number.isRequired,
};

export default HuaButtonGroup;
