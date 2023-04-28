import { createContext, useReducer} from "react";

export const HuaContext = createContext(null);

export const huaStateAction = {
  numberImage:{
    increase:'numberImage/increase',
    decrease: 'numberImage/decrease',
  },
  huaType:{
    set:'huaType/set@id',
  },
  cenImgSrc:{
    set:'cenImgSrc/set@imgSrc'
  },
  borImgSrc:{
    set:'borImgSrc/set@imgSrc'
  },
}

const huaStateReducer = (huaState,action)=>{
  switch(action.type){
    case huaStateAction.numberImage.increase:{
      return {
          ...huaState,
          numberImage: huaState.numberImage + 1,
        };
    }
    case huaStateAction.numberImage.decrease:{
      return {
        ...huaState,
        numberImage: huaState.numberImage - 1 > 1 ? huaState.numberImage - 1 : 1,
      };
    }
    case huaStateAction.huaType.set:{
      return {
        ...huaState,
        typeHua: ["s", "m", "l"][action.id],
      };
    }
    case huaStateAction.cenImgSrc.set:{
      return {
        ...huaState,
        cenImgSrc: action.imgSrc,
      };
    }
    case huaStateAction.borImgSrc.set:{
      return {
        ...huaState,
        borImgSrc: action.imgSrc,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function Context({ children }) {
    const [huaState, dispatch] = useReducer(huaStateReducer,{
      canvasHW: 400,
      cenImgSrc: "/assets/cen.png",
      corImgSrc: "/assets/cor.png",
      borImgSrc: "/assets/bor.png",
      numberImage: 1,
      typeHua: "s",
    });
    return (
      <HuaContext.Provider value={{ huaState, dispatch }}>
        {children}
      </HuaContext.Provider>
    );
  }

