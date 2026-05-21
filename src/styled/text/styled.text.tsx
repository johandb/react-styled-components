import styled from "styled-components";
import { Box } from "../box/box";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import type { DefaultProps } from "../types/default.props";
import type { Size } from "../types/size";
import { themeColors } from "../utils/styled.utils";

interface LabelProps extends DefaultProps {
  color?: Color;
  size?: Size;
  fw?: string;
  fs?: "normal" | "italic";
}

export const Text = (props: LabelProps) => {
  let sz = props.size ?? "sm";
  let fontSize: Record<Size, any> = {
    xs: { value: 0.8 },
    sm: { value: 1.1 },
    md: { value: 1.3 },
    lg: { value: 1.5 },
    xl: { value: 1.7 },
  };

  let color = themeColors[props.color as keyof typeof themeColors]?.value ?? props.color ?? theme.colors.black;
  let size = fontSize[sz as keyof typeof fontSize]?.value ?? props.size;
  let fw = props.fw ? props.fw : "normal";
  let fs = props.fs ? props.fs : "normal";

  return (
    <Box w={props.w} m={props.m} mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      <StyledText $size={size} $color={color} $fw={fw} $fs={fs}>
        {props.children}
      </StyledText>
    </Box>
  );
};

const StyledText = styled.div<{ $fs: string; $size: string; $color: string; $fw: string }>`
  font-size: ${(props) => `${props.$size}rem`};
  font-style: ${(props) => props.$fs};
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$fw};
  font-family: ${theme.font.defaultFamily};
`;
