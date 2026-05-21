import styled from "styled-components";
import { Box } from "../box/box";
import useButton from "../hooks/use-button";
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
}

interface ButtonStyleProps {
  padding: string;
  fontSize: string;
  radius: number;
  color: string;
  variant: string;
  font?: string;
}

export const Button = (props: ButtonProps) => {
  let size = props.size ? props.size : "sm";
  let color = themeColors[props.color as keyof typeof themeColors]?.value ?? theme.colors.primary;

  let button = useButton(size);

  let styleProps: ButtonStyleProps = {
    padding: button.p,
    fontSize: button.fs,
    radius: props.radius || 7,
    color: color,
    variant: props.variant ? props.variant : "filled",
    font: theme.font.defaultFamily,
  };

  //console.log("variant :", variant, "  -- ", props.variant);
  return (
    <Box w={props.w} m={props.m} mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      <StyledButton onClick={() => props.onClick()} $styleProps={styleProps}>
        {props.children}
      </StyledButton>
    </Box>
  );
};

const StyledButton = styled.button<{
  $styleProps: ButtonStyleProps;
}>`
  background-color: ${(props) => (props.$styleProps.variant === "outline" ? theme.colors.white : props.$styleProps.color)};
  color: ${(props) => (props.$styleProps.variant === "outline" ? props.$styleProps.color : theme.colors.white)};
  border: ${(props) =>
    props.$styleProps.variant === "outline" ? `1px solid ${props.$styleProps.color || theme.colors.white}` : "none"};
  padding: ${(props) => props.$styleProps.padding};
  text-align: center;
  text-decoration: none;
  border-radius: ${(props) => props.$styleProps.radius}px;
  opacity: 0.9;
  display: inline-block;
  font-family: ${theme.font.defaultFamily};
  font-size: ${(props) => props.$styleProps.fontSize};
  cursor: pointer;
  &:hover {
    opacity: 1;
    ${(props) =>
      props.$styleProps.variant === "outline" ? { backgroundColor: props.$styleProps.color, color: theme.colors.white } : {}}
  }
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
