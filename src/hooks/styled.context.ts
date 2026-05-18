import { createContext, useContext } from "react";

import type { Align } from "../styled/types/align";
import type { Color } from "../styled/types/color";
import type { Size } from "../styled/types/size";

type StyledType = {
  color?: Color;
  size?: Size;
  disabled?: boolean;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  radius?: number;
  fm?: string;
  fs?: string;
  fw?: string;
  align?: Align;
};

export const StyledContext = createContext<StyledType | null>(null);

export const useStyledContext = () => {
  const container = useContext(StyledContext);
  if (container === null || container === undefined) {
    throw new Error("useStyledContext must be used with a valid StyledType");
  }
  return container;
};
