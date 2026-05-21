import { useState } from "react";
import type { Size } from "../types/size";
import { StyledConfig } from "./styled.config";

const useCheckbox = (defaultSize: Size = "sm") => {
  const [size] = useState(defaultSize);
  let checkbox = StyledConfig.checkbox;

  const fs = checkbox[size as keyof typeof checkbox].fs;

  return { fs };
};

export default useCheckbox;
