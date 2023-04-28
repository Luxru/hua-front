import footer_img from "@/public/assets/footer_menu.png";
import footer_clicked_img from "@/public/assets/footer_menu_red.png";
import {useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function HuaButton({onClick, id, idClicked, ratio}) {
    return (
      <button className="w-fit hover:bg-gray-200 active:bg-gray-100 rounded-md inline-block active:translate-y-1">
        <Image
          id={id}
          onClick={onClick}
          src={idClicked == id &&ratio ? footer_clicked_img : footer_img}
          alt={""}
        />
      </button>
    );
}

// props接受一个参数index，会被告知第几个元素被点击
function HuaButtonGroup({ className="space-x-2",numButton = 1, onItemClick=undefined ,ratio=false, initIndex='0'}) {
  const [idClicked, setidClicked] = useState(initIndex);
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
      />
    );
  }
  return <div className={className}>{buttonArray}</div>;
}

HuaButtonGroup.propTypes = {
  numButton: PropTypes.number.isRequired,
};

export default HuaButtonGroup;
