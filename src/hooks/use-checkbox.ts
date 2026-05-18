import { useState } from "react";
import type { Size } from "../styled/types/size";
import { StyledConfig } from "./styled.config";

const useCheckbox = (defaultSize: Size = "sm") => {
  const [size] = useState(defaultSize);
  let checkbox = StyledConfig.checkbox;

  const fs = checkbox[size as keyof typeof checkbox].fs;
  const h = checkbox[size as keyof typeof checkbox].h;
  const w = checkbox[size as keyof typeof checkbox].w;
  const mh = checkbox[size as keyof typeof checkbox].mh;
  const mw = checkbox[size as keyof typeof checkbox].mw;
  const m = checkbox[size as keyof typeof checkbox].m;

  return { fs, h, w, mh, mw, m };
};

export default useCheckbox;
