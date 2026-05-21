import { useState } from "react";
import type { Size } from "../types/size";
import { StyledConfig } from "./styled.config";

const useRadio = (defaultSize: Size = "sm") => {
  const [size] = useState(defaultSize);
  let radio = StyledConfig.radio;

  const fs = radio[size as keyof typeof radio].fs;

  return { fs };
};

export default useRadio;
