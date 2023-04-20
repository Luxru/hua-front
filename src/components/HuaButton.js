import footer_img from "../asset/footer_menu.svg";
import footer_clicked_img from "../asset/footer_menu_red.svg";
import { useId, useState } from "react";
import PropTypes from "prop-types";

function HuaButton(props) {
  const { id, onClick, idClicked } = props;

  return (
    <button
      class="w-fit hover:bg-gray-200 rounded-md p-1 inline-block"
      id={id}
      onClick={onClick}
    >
      <img src={idClicked === id ? footer_clicked_img : footer_img} alt={""} />
    </button>
  );
}

// props接受一个参数index，会被告知第几个元素被点击
function HuaButtonGroup({ numButton,setIndex }) {
  const [idClicked, setidClicked] = useState(false);
  const id = useId();
  const onClick = (event) => {
    if(setIndex !== undefined){
        setIndex(setIndex(event.currentTarget.index))
    }
    setidClicked(event.currentTarget.id);
  };
  var buttonArray = [];
  for (let i = 0; i < numButton; i++) {
    buttonArray.push(
      <HuaButton idClicked={idClicked} onClick={onClick} id={id + String(i)} index={i}/>
    );
  }
  return <div>{buttonArray}</div>;
}


HuaButtonGroup.propTypes = {
    setIndex: PropTypes.func.isRequired,
    numButton: PropTypes.number.isRequired,
};
  

export default HuaButtonGroup;
