import styled from "styled-components";
import type { DefaultProps } from "../types/default.props";

interface BoxProps extends DefaultProps {}

export const Box = (props: BoxProps) => {
  let w = props.w ? `${props.w}px` : "auto";
  let margin = "0px";
  if (props.m) {
    margin = `${props.m}px`;
  } else {
    margin = props.mt ? `${props.mt}px` : margin;
    margin = `${margin} ${props.mr ? `${props.mr}px` : `0px`}`;
    margin = `${margin} ${props.mb ? `${props.mb}px` : `0px`}`;
    margin = `${margin} ${props.ml ? `${props.ml}px` : `0px`}`;
  }

  return (
    <StyledBox $w={w} $m={margin}>
      {props.children}
    </StyledBox>
  );
};

const StyledBox = styled.div<{ $w: string; $m: string }>`
  width: ${(props) => props.$w};
  margin: ${(props) => props.$m};
`;
