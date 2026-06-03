import styled from "styled-components";
import { Box } from "../box/box";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import type { DefaultProps } from "../types/default.props";
import type { Size } from "../types/size";
import type { Variant } from "../types/variant";
import { themeColors } from "../utils/styled.utils";

interface ButtonProps extends DefaultProps {
  color?: Color;
  variant?: Variant;
  size?: Size;
  radius?: number;
  onClick: () => void;
  leftIcon?: React.ReactNode;
  width?: number;
}

export const Button = (props: ButtonProps) => {
  let size = props.size ?? "sm";
  let color = themeColors[props.color as keyof typeof themeColors]?.value ?? theme.colors.primary;

  let index = ["xs", "sm", "md", "lg", "xl"].indexOf(size);
  let fs = index * 0.2 + 0.6;

  return (
    <Box w={props.w} m={props.m} mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      <StyledButtonWrapper
        onClick={props.onClick}
        radius={props.radius || 7}
        $variant={props.variant || "filled"}
        color={color}
        width={props.width}
      >
        {props.leftIcon && <StyledButtonIcon>{props.leftIcon}</StyledButtonIcon>}
        <StyledButton $fs={fs}>{props.children}</StyledButton>
      </StyledButtonWrapper>
    </Box>
  );
};

const StyledButton = styled.div<{ $fs: number }>`
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  font-family: ${theme.font.defaultFamily};
  font-size: ${(props) => `${props.$fs}rem`};
`;

const StyledButtonWrapper = styled.div<{ radius: number; $variant: string; color: string; width?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$variant === "outline" ? theme.colors.white : props.color)};
  color: ${(props) => (props.$variant === "outline" ? props.color : theme.colors.white)};
  width: ${(props) => (props.width ? `${props.width}px` : "fit-content")};
  border-radius: ${(props) => props.radius}px;
  border: ${(props) => (props.$variant === "outline" ? `1px solid ${props.color || theme.colors.white}` : "none")};
  outline: none;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    opacity: 1;
    ${(props) => (props.$variant === "outline" ? { backgroundColor: props.color, color: theme.colors.white } : {})}
  }
`;

const StyledButtonIcon = styled.div`
  padding: 5px 0px 5px 5px;
  display: flex;
  align-items: center;
`;

export const TextButton = styled.button<{ color?: Color }>`
  border: none;
  background-color: inherit;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
  color: ${(props) => themeColors[props.color as keyof typeof themeColors]?.value ?? theme.colors.black};
  display: block;
`;
