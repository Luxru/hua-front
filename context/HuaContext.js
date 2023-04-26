import { createContext, useState} from "react";
import pathInfo from "@/path.config";

export const HuaContext = createContext(null);
  

export default function Context({ children }) {
    const [huaState, setHuaState] = useState({
        canvasHW: 400,
        cenImgSrc: "/assets/cen.svg",
        corImgSrc: "/assets/cor.svg",
        borImgSrc: "/assets/bor.svg",
        numberImage: 1,
        typeHua: "s",
      });
  
    return (
      <HuaContext.Provider value={{ huaState, setHuaState }}>
        {children}
      </HuaContext.Provider>
    );
  }

