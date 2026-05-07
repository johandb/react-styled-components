import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import type { Color } from "../../components/types/color";
import type { Size } from "../../components/types/size";
import { Color2Value } from "../../components/utils/styled.utils";

interface LabelProps {
  label: string;
  color?: Color;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  size?: Size;
  fw?: string;
}

interface LabelStyleProps {
  color: string;
  fontSize: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  fw?: string;
}

export const Text = (props: LabelProps) => {
  let size = props.size ? props.size : "md";

  let styleProps: LabelStyleProps = {
    color: props.color ? Color2Value(props.color) : theme.colors.black,
    mt: props.mt ? `${props.mt}px` : "2px",
    ml: props.ml ? `${props.ml}px` : "2px",
    mr: props.mr ? `${props.mr}px` : "2px",
    mb: props.mb ? `${props.mb}px` : "2px",
    fontSize: size === "sm" ? "0.8rem" : size === "md" ? "0.9rem" : size === "lg" ? "1.1rem" : "1.3rem",
    fw: props.fw ? props.fw : "normal",
  };

  return <StyledText $styleProps={styleProps}>{props.label}</StyledText>;
};

const StyledText = styled.label<{ $styleProps: LabelStyleProps }>`
  font-size: ${(props) => props.$styleProps.fontSize};
  margin-top: ${(props) => props.$styleProps.mt};
  margin-left: ${(props) => props.$styleProps.ml};
  margin-right: ${(props) => props.$styleProps.mr};
  margin-bottom: ${(props) => props.$styleProps.mb};
  color: ${(props) => props.$styleProps.color};
  font-weight: ${(props) => props.$styleProps.fw};
  font-family: ${theme.font.defaultFamily};
`;
