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
  borImgSrc: {
    set: "borImgSrc/set@borImgSrc",
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
    case huaStateAction.borImgSrc.set: {
      return {
        ...huaState,
        borImgSrc: action.borImgSrc,
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
    cenImgSrc: "/assets/cen.png",
    corImgSrc: "/assets/cor.png",
    borImgSrc: "/assets/bor.png",
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
