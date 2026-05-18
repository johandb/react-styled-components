import { theme } from "../themes/themes";
import type { Size } from "../types/size";

export const colorValue = (color: string) => {
  switch (color) {
    case "black":
      return theme.colors.black;
    case "blue":
      return theme.colors.blue;
    case "brown":
      return theme.colors.brown;
    case "cyan":
      return theme.colors.cyan;
    case "darkgray":
      return theme.colors.darkgray;
    case "gray":
      return theme.colors.gray;
    case "green":
      return theme.colors.green;
    case "indigo":
      return theme.colors.indigo;
    case "lightblue":
      return theme.colors.lightblue;
    case "lightgray":
      return theme.colors.lightgray;
    case "lime":
      return theme.colors.lime;
    case "magenta":
      return theme.colors.magenta;
    case "yellow":
      return theme.colors.yellow;
    case "orange":
      return theme.colors.orange;
    case "pink":
      return theme.colors.pink;
    case "purple":
      return theme.colors.purple;
    case "red":
      return theme.colors.red;
    case "teal":
      return theme.colors.teal;
    case "violet":
      return theme.colors.violet;
    case "white":
      return theme.colors.white;
    default:
      return color;
  }
};

export const Size2Value = (size: Size) => {
  switch (size) {
    case "sm":
    case "md":
    case "lg":
    case "xl":
  }
};
