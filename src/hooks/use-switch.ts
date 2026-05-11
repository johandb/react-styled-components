import { useState } from "react";
import type { Size } from "../components/types/size";
import { StyledConfig } from "./styled.config";

const useSwitch = (defaultSize: Size = "sm") => {
  const [size] = useState(defaultSize);
  let toggle = StyledConfig.toggle;

  const h = toggle[size as keyof typeof toggle].h;
  const w = toggle[size as keyof typeof toggle].w;
  const ch = toggle[size as keyof typeof toggle].ch;
  const cw = toggle[size as keyof typeof toggle].cw;
  const left = toggle[size as keyof typeof toggle].left;
  // const w = checkbox[size as keyof typeof checkbox].w;
  // const mh = checkbox[size as keyof typeof checkbox].mh;
  // const mw = checkbox[size as keyof typeof checkbox].mw;
  // const m = checkbox[size as keyof typeof checkbox].m;

  return { w, h, cw, ch, left };
};

export default useSwitch;
