import { theme } from "../themes/themes";
import type { Color } from "../types/color";

interface IColor {
  value: string;
}

export const themeColors: Record<Color, IColor> = {
  black: { value: theme.colors.black },
  blue: { value: theme.colors.blue },
  brown: { value: theme.colors.brown },
  cyan: { value: theme.colors.cyan },
  darkgray: { value: theme.colors.darkgray },
  gray: { value: theme.colors.gray },
  green: { value: theme.colors.green },
  indigo: { value: theme.colors.indigo },
  lightblue: { value: theme.colors.lightblue },
  lime: { value: theme.colors.lime },
  magenta: { value: theme.colors.magenta },
  orange: { value: theme.colors.orange },
  pink: { value: theme.colors.pink },
  purple: { value: theme.colors.purple },
  red: { value: theme.colors.red },
  teal: { value: theme.colors.teal },
  violet: { value: theme.colors.violet },
  white: { value: theme.colors.white },
  yellow: { value: theme.colors.yellow },
};
