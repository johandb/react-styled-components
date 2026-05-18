import { useState } from "react";
import type { Size } from "../styled/types/size";
import { StyledConfig } from "./styled.config";

const useInput = (defaultSize: Size = "sm") => {
  const [size] = useState(defaultSize);
  let input = StyledConfig.input;

  const pr = input[size as keyof typeof input].pr;
  const pt = input[size as keyof typeof input].pt;
  const fs = input[size as keyof typeof input].fs;

  return { pr, pt, fs };
};

export default useInput;
