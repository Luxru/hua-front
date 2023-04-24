import { createContext, useState} from "react";

export const HuaContext = createContext(null);
  

export default function Context({ children }) {
    const [huaState, setHuaState] = useState({
        canvasHW: 400,
        cenImgSrc: "/thua/cen.svg",
        corImgSrc: "/thua/cor.svg",
        borImgSrc: "/thua/bor.svg",
        numberImage: 1,
        typeHua: "s",
      });
  
    return (
      <HuaContext.Provider value={{ huaState, setHuaState }}>
        {children}
      </HuaContext.Provider>
    );
  }

