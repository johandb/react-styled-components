import { useState } from "react";
import type { Size } from "../styled/types/size";
import { StyledConfig } from "./styled.config";

const useRadio = (defaultSize: Size = "sm") => {
  const [size] = useState(defaultSize);
  let radio = StyledConfig.radio;

  const p = radio[size as keyof typeof radio].p;
  const h = radio[size as keyof typeof radio].h;
  const w = radio[size as keyof typeof radio].w;
  const b = radio[size as keyof typeof radio].b;
  const fs = radio[size as keyof typeof radio].fs;

  return { p, h, w, b, fs };
};

export default useRadio;
