import { useState } from "react";
import type { Size } from "../types/size";
import { StyledConfig } from "./styled.config";

const useButton = (defaultSize: Size = "sm") => {
  const [size] = useState(defaultSize);
  let button = StyledConfig.button;

  const fs = button[size as keyof typeof button].fs;
  const p = button[size as keyof typeof button].p;

  return { fs, p };
};

export default useButton;
