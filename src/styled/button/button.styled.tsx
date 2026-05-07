import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import type { Color } from "../../components/types/color";
import type { Size } from "../../components/types/size";
import type { Variant } from "../../components/types/variant";
import { Color2Value } from "../../components/utils/styled.utils";

interface ButtonProps {
  color?: Color;
  variant?: Variant;
  size?: Size;
  radius?: number;
  margin?: number;
  children?: React.ReactNode;
  onClick: () => void;
}

interface ButtonStyleProps {
  padding: string;
  fontSize: string;
  margin: string;
  radius: number;
  color: string;
  variant: string;
  font?: string;
}

export const TextButton = styled.button<{ color?: Color }>`
  border: none;
  background-color: inherit;
  padding: 10px 24px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
  color: ${(props) => (props.color ? Color2Value(props.color) : theme.colors.black)};
  display: block;
`;

export const Button = (props: ButtonProps) => {
  let size = props.size ? props.size : "md";

  let styleProps: ButtonStyleProps = {
    padding: size === "sm" ? "4px 8px" : size === "md" ? "6px 10px" : size === "lg" ? "10px 14px" : "14px 18px",
    fontSize: size === "sm" ? "0.8rem" : size === "md" ? "0.9rem" : size === "lg" ? "1.1rem" : "1.3rem",
    margin: props.margin ? `${props.margin}px` : "2px",
    radius: props.radius || 7,
    color: props.color ? Color2Value(props.color) : theme.colors.primary,
    variant: props.variant ? props.variant : "filled",
    font: theme.font.defaultFamily,
  };

  //console.log("variant :", variant, "  -- ", props.variant);
  return (
    <StyledButton onClick={() => props.onClick()} $styleProps={styleProps}>
      {props.children}
    </StyledButton>
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
  margin: ${(props) => props.$styleProps.margin};
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
