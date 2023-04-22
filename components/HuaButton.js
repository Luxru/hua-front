import footer_img from "@/public/assets/footer_menu.svg";
import footer_clicked_img from "@/public/assets/footer_menu_red.svg";
import { useEffect, useId, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function HuaButton(props) {
  const { id, onClick, idClicked } = props;

  return (
    <button
      className="w-fit hover:bg-gray-200 active:bg-gray-100 rounded-md p-1 inline-block"
      id={id}
      onClick={onClick}
    >
      <Image src={idClicked === id ? footer_clicked_img : footer_img} alt={""} />
    </button>
  );
}

// props接受一个参数index，会被告知第几个元素被点击
function HuaButtonGroup({ numButton,setIndex }) {
  const [idClicked, setidClicked] = useState(false);
  const id = useId();
  useEffect(()=>{
    setidClicked(id + String(0))
  },[id]);
  const onClick = (event) => {
    if(setIndex !== undefined){
        setIndex(setIndex(event.currentTarget.index))
    }
    setidClicked(event.currentTarget.id);
  };
  var buttonArray = [];
  for (let i = 0; i < numButton; i++) {
    buttonArray.push(
      <HuaButton key={i} idClicked={idClicked} onClick={onClick} id={id + String(i)} index={i}/>
    );
  }
  return <div>{buttonArray}</div>;
}


HuaButtonGroup.propTypes = {
    // setIndex: PropTypes.func.isRequired,
    numButton: PropTypes.number.isRequired,
};
  

export default HuaButtonGroup;
