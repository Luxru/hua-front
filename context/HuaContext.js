import { createContext, useReducer } from "react";

export const HuaContext = createContext(null);

export const huaStateAction = {
  numberImage: {
    set: "numberImage/set@numberImage",
  },
  typeHua: {
    set: "typeHua/set@typeHua",
  },
  cenImgSrc: {
    set: "cenImgSrc/set@cenImgSrc",
  },
  corImgSrc: {
    set: "corImgSrc/set@corImgSrc",
  },
  borImgSrc: {
    set: "borImgSrc/set@borImgSrc",
  },
  borImgSrcM: {
    set: "borImgSrcM/set@borImgSrcM",
  },
  resultImg: {
    from: {
      set: "resultImg.from/set@from",
    },
    url: {
      set: "resultImg.url/set@url",
    },
  },
};

const huaStateReducer = (huaState, action) => {
  switch (action.type) {
    case huaStateAction.numberImage.set: {
      return {
        ...huaState,
        numberImage: action.numberImage,
      };
    }
    case huaStateAction.typeHua.set: {
      return {
        ...huaState,
        typeHua: action.typeHua,
      };
    }
    case huaStateAction.cenImgSrc.set: {
      return {
        ...huaState,
        cenImgSrc: action.cenImgSrc,
      };
    }
    case huaStateAction.corImgSrc.set: {
      return {
        ...huaState,
        corImgSrc: action.corImgSrc,
      };
    }
    case huaStateAction.borImgSrc.set: {
      return {
        ...huaState,
        borImgSrc: action.borImgSrc,
      };
    }
    case huaStateAction.borImgSrcM.set: {
      return {
        ...huaState,
        borImgSrcM: action.borImgSrcM,
      };
    }
    case huaStateAction.resultImg.url.set: {
      return {
        ...huaState,
        resultImg: {
          ...huaState.resultImg,
          url: action.url,
        },
      };
    }
    case huaStateAction.resultImg.from.set: {
      return {
        ...huaState,
        resultImg: {
          ...huaState.resultImg,
          from: action.from,
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default function Context({ children }) {
  const [huaState, dispatch] = useReducer(huaStateReducer, {
    canvasHW: 450,
    cenImgSrc: "/assets/default_hua/1.svg",
    corImgSrc: "/assets/default_hua/3.svg",
    borImgSrc: "/assets/default_hua/2.svg",
    borImgSrcM: "/assets/default_hua/4.svg",
    numberImage: 1,
    typeHua: "s",
    resultImg: {
      from: "",
      url: "",
    },
  });
  return (
    <HuaContext.Provider value={{ huaState, dispatch }}>
      {children}
    </HuaContext.Provider>
  );
}
